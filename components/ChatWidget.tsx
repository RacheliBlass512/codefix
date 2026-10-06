"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { site } from "@/content/site";

type Msg = { role: "user" | "assistant"; content: string };

const greeting: Msg = { role: "assistant", content: "היי! 👋 אני העוזרת הדיגיטלית של Code Fix. אפשר לשאול אותי על השירותים, הפרויקטים או איך יוצרים קשר." };
const suggestions = ["אילו שירותים את מציעה?", "ספרי לי על סוכן ה-AI", "כמה עולה אתר תדמית?", "איך יוצרים קשר?"];

const link = (key: number, href: string, label: string) => (
  <a key={key} href={href} target={href.startsWith(site.url) ? undefined : "_blank"} rel="noopener" className="break-all text-sky underline">{label}</a>
);

// markdown מינימלי: **מודגש**, [טקסט](קישור) וכתובות URL חשופות
// ponytail: בלי רשימות/כותרות/קוד, להוסיף react-markdown אם נצטרך
function Linkify({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|\*\*[^*]+\*\*|https?:\/\/[^\s)*]+)/g).map((part, i) => {
    const md = part.match(/^\[([^\]]+)\]\((.+)\)$/);
    if (md) return link(i, md[2], md[1]);
    if (/^https?:\/\//.test(part)) return link(i, part, part.replace(/^https?:\/\//, ""));
    if (/^\*\*.+\*\*$/.test(part)) return <strong key={i}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight }); }, [messages]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function send(text: string) {
    text = text.trim();
    if (!text || busy) return;
    const history = [...messages, { role: "user" as const, content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const update = (content: string) => setMessages((m) => [...m.slice(0, -1), { role: "assistant", content }]);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(1) }), // בלי הודעת הפתיחה
      });
      if (!res.ok || !res.body) return update(await res.text());
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        update(acc);
      }
      if (!acc) update("לא הצלחתי לענות כרגע. נסו שוב, או צרו קשר ישירות 🙂");
    } catch {
      update("יש בעיית תקשורת. נסו שוב, או התקשרו אליי 🙂");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* כפתורים צפים */}
      <div className="fixed bottom-5 left-5 z-50">
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="chat-panel" aria-label={open ? "סגירת הצ'אט" : "פתיחת צ'אט עם העוזרת הדיגיטלית"}
          className="btn-primary relative flex h-14 items-center gap-2.5 rounded-full px-5 font-bold ring-2 ring-white/25 transition-transform hover:scale-105">
          <Icon name={open ? "close" : "chat"} className="size-6" />
          {!open && <span>שאלו את ה-AI</span>}
        </button>
      </div>

      {open && (
        <section id="chat-panel" role="dialog" aria-label="צ'אט עם העוזרת הדיגיטלית של Code Fix"
          className="fixed bottom-24 left-4 z-50 flex h-[min(34rem,calc(100dvh-8rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-black/60">
          <header className="flex items-center gap-3 border-b border-line bg-gradient-to-l from-violet/20 to-cyan/10 p-4">
            <Image src="/logo.png" alt="" width={40} height={40} className="rounded-full" />
            <div>
              <p className="font-bold">העוזרת של Code Fix</p>
              <p className="flex items-center gap-1.5 text-xs text-muted"><span className="size-1.5 rounded-full bg-cyan" />מבוסס AI · זמינה תמיד</p>
            </div>
          </header>

          <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "mr-auto rounded-tl-sm bg-surface-2" : "ml-auto rounded-tr-sm border border-cyan/20 bg-cyan/10"}`}>
                {m.content ? <Linkify text={m.content} /> : <span className="inline-flex gap-1" aria-label="מקלידה"><span className="size-1.5 animate-bounce rounded-full bg-cyan" /><span className="size-1.5 animate-bounce rounded-full bg-cyan [animation-delay:.15s]" /><span className="size-1.5 animate-bounce rounded-full bg-cyan [animation-delay:.3s]" /></span>}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)} className="rounded-full border border-line px-3 py-1.5 text-sm text-muted hover:border-sky hover:text-ink">{s}</button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-line p-3">
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} maxLength={1000} placeholder="כתבו שאלה..." aria-label="ההודעה שלכם"
              className="flex-1 rounded-full border border-line bg-bg px-4 py-2.5 text-[15px] placeholder:text-muted/60 focus:border-sky focus:outline-none" />
            <button type="submit" disabled={busy || !input.trim()} aria-label="שליחה" className="btn-primary grid size-11 shrink-0 place-items-center rounded-full disabled:opacity-40">
              <Icon name="send" className="size-5 -scale-x-100" />
            </button>
          </form>
        </section>
      )}
    </>
  );
}
