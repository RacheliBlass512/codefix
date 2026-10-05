import Link from "next/link";
import { nav, services, site } from "@/content/site";
import { Logo } from "./ui";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-surface/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={44} />
            <span dir="ltr" className="text-xl font-extrabold">Code <span className="text-gradient">Fix</span></span>
          </div>
          <p className="mt-4 leading-relaxed text-muted">{site.ownerHe} – מתכנתת Full Stack. אתרים, אוטומציות, סוכני AI ומערכות בהתאמה אישית.</p>
        </div>

        <div>
          <h2 className="font-bold">ניווט</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-ink">{n.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold">שירותים</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {services.map((s) => <li key={s.slug}><Link href={`/services#${s.slug}`} className="hover:text-ink">{s.title}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold">יצירת קשר</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li><a href={`tel:${site.phoneIntl}`} className="flex items-center gap-2 hover:text-ink"><Icon name="phone" className="size-5 text-cyan" /><span dir="ltr">{site.phoneDisplay}</span></a></li>
            <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-ink"><Icon name="mail" className="size-5 text-cyan" />{site.email}</a></li>
            <li><a href={site.github} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-ink"><Icon name="github" className="size-5 text-cyan" />GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/50 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Code Fix · {site.ownerHe}. כל הזכויות שמורות.
      </div>
    </footer>
  );
}
