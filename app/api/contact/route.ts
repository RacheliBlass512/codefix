import { site } from "@/content/site";
import { rateLimit } from "@/lib/rateLimit";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  if (!rateLimit(req, "contact", 5, 10 * 60_000)) {
    return Response.json({ error: "נשלחו יותר מדי הודעות, נסו שוב מאוחר יותר" }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return Response.json({ error: "בקשה לא תקינה" }, { status: 400 });

  // honeypot: בוט מילא שדה מוסתר – מחזירים הצלחה ולא שולחים
  if (str(body.company, 100)) return Response.json({ ok: true });

  const name = str(body.name, 100);
  const phone = str(body.phone, 20);
  const email = str(body.email, 200);
  const message = str(body.message, 3000);

  if (!name || !message) return Response.json({ error: "נא למלא שם והודעה" }, { status: 400 });
  if (!/^[0-9+\-\s()]{9,20}$/.test(phone)) return Response.json({ error: "מספר הטלפון לא תקין" }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "כתובת האימייל לא תקינה" }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "הטופס עדיין לא מחובר" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Code Fix <onboarding@resend.dev>",
      to: [site.email],
      reply_to: email,
      subject: `פנייה חדשה מהאתר – ${name}`,
      text: `שם: ${name}\nטלפון: ${phone}\nאימייל: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "השליחה נכשלה" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
