import OpenAI from "openai";
import { buildSystemPrompt } from "@/lib/chatPrompt";
import { rateLimit } from "@/lib/rateLimit";

const MODEL = "gpt-4o-mini";
const MAX_MESSAGES = 12;
const MAX_CHARS = 1000;

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!rateLimit(req, "chat", 30, 10 * 60_000)) {
    return new Response("הגעתם למגבלת ההודעות לזמן הקרוב. אפשר להמשיך בטלפון או בטופס יצירת הקשר 🙂", { status: 429 });
  }
  if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY is not set");
    return new Response("הצ'אט עדיין לא מחובר. בינתיים אפשר ליצור קשר בטלפון או בטופס.", { status: 503 });
  }

  const body = await req.json().catch(() => null);
  const messages: Msg[] = (Array.isArray(body?.messages) ? body.messages : [])
    .filter((m: Msg) => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_MESSAGES)
    .map((m: Msg) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
  if (!messages.length || messages.at(-1)!.role !== "user") return new Response("בקשה לא תקינה", { status: 400 });

  const openai = new OpenAI();
  try {
    const stream = await openai.chat.completions.create({
      model: MODEL,
      stream: true,
      max_tokens: 400,
      temperature: 0.4,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
    });

    const encoder = new TextEncoder();
    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of stream) {
              const text = chunk.choices[0]?.delta?.content;
              if (text) controller.enqueue(encoder.encode(text));
            }
          } catch (e) {
            console.error("OpenAI stream error", e);
          } finally {
            controller.close();
          }
        },
      }),
      { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } },
    );
  } catch (e) {
    console.error("OpenAI error", e);
    return new Response("משהו השתבש. נסו שוב, או צרו קשר ישירות 🙂", { status: 502 });
  }
}
