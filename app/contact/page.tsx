import type { Metadata } from "next";
import { site } from "@/content/site";
import { Icon, type AnyIcon } from "@/components/Icon";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "צור קשר – בואו נדבר על העסק שלכם",
  description: `רוצים אתר, אוטומציה או סוכן AI לעסק? השאירו פרטים, התקשרו ל-${site.phoneDisplay} – אחזור אליכם בהקדם.`,
  alternates: { canonical: "/contact" },
};

const channels: { icon: AnyIcon; label: string; value: string; href: string; ltr?: boolean; external?: boolean }[] = [
  { icon: "phone", label: "טלפון", value: site.phoneDisplay, href: `tel:${site.phoneIntl}`, ltr: true },
  { icon: "mail", label: "אימייל", value: site.email, href: `mailto:${site.email}`, ltr: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero tag="contact" title={<>בואו נדבר על <span className="text-gradient">העסק שלכם</span></>}
        text="ספרו לי בכמה מילים מה אתם צריכים – אתר, אוטומציה, סוכן AI או משהו שעוד אין לו שם. אחזור אליכם בהקדם." />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-24 lg:grid-cols-[1fr_22rem]">
        <div className="card p-6 sm:p-10">
          <h2 className="text-2xl font-bold">השאירו פרטים</h2>
          <ContactForm />
        </div>
        <aside className="space-y-4">
          {channels.map((c) => (
            <a key={c.label} href={c.href} {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
              className="card group flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan group-hover:text-bg"><Icon name={c.icon} /></span>
              <div className="min-w-0"><p className="text-sm text-muted">{c.label}</p><p dir={c.ltr ? "ltr" : undefined} className="truncate text-right font-bold">{c.value}</p></div>
            </a>
          ))}
          <div className="rounded-2xl border border-line/70 bg-surface/40 p-5 text-sm leading-relaxed text-muted">
            <p className="flex items-center gap-2 font-bold text-ink"><Icon name="chat" className="size-5 text-cyan" /> רוצים תשובה עכשיו?</p>
            <p className="mt-2">העוזר החכם בפינת המסך יודע לספר על השירותים, הפרויקטים ודרכי יצירת הקשר.</p>
          </div>
        </aside>
      </div>
    </>
  );
}
