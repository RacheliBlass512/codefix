"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error";

const field = "mt-1.5 w-full rounded-xl border border-line bg-bg/70 px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-sky focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "השליחה נכשלה");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "השליחה נכשלה");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="mt-8 rounded-2xl border border-cyan/30 bg-cyan/10 p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-cyan text-bg"><Icon name="check" className="size-7" /></span>
        <p className="mt-4 text-xl font-bold">ההודעה נשלחה!</p>
        <p className="mt-2 text-muted">תודה שפניתם. אחזור אליכם בהקדם.</p>
        <button onClick={() => setStatus("idle")} className="mt-5 text-sm font-bold text-sky hover:underline">לשליחת הודעה נוספת</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="block">
        <span className="text-sm font-bold">שם מלא *</span>
        <input name="name" required maxLength={100} autoComplete="name" className={field} placeholder="איך קוראים לכם?" />
      </label>
      <label className="block">
        <span className="text-sm font-bold">טלפון *</span>
        <input name="phone" type="tel" required maxLength={20} minLength={9} autoComplete="tel" dir="ltr" className={`${field} text-right`} placeholder="050-000-0000" />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-sm font-bold">אימייל *</span>
        <input name="email" type="email" required maxLength={200} autoComplete="email" dir="ltr" className={`${field} text-right`} placeholder="name@example.com" />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-sm font-bold">הודעה *</span>
        <textarea name="message" required maxLength={3000} rows={5} className={`${field} resize-y`} placeholder="ספרו לי בקצרה על העסק ועל מה שאתם צריכים..." />
      </label>
      {/* honeypot נגד בוטים – מוסתר ממשתמשים */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && <p role="alert" className="text-sm text-red-400 sm:col-span-2">{error}. אפשר גם להתקשר.</p>}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60 sm:col-span-2">
        {status === "sending" ? "שולח..." : <>שליחה <Icon name="send" className="size-5 -scale-x-100" /></>}
      </button>
    </form>
  );
}
