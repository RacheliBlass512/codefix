import type { Metadata } from "next";
import { projects, services, tracks } from "@/content/site";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "שירותים ופרויקטים – אתרים, אוטומציות, סוכני AI ומערכות מורכבות",
  description: "אתרי תדמית, דפי נחיתה וחנויות; אוטומציות וסוכני AI; ומערכות מורכבות בסקייל גבוה – עם דוגמאות מפרויקטים אמיתיים של Code Fix.",
  alternates: { canonical: "/services" },
};

// Hierarchy: track (side column, sticky on desktop) > services (light accordion rows) > projects (rich wide cards).
export default function ServicesPage() {
  return (
    <>
      <PageHero tag="services" title={<>מה אני בונה – <span className="text-gradient">ודוגמאות מהשטח</span></>}
        text="פתרונות דיגיטליים שנבנים סביב העסק שלכם." />

      <nav aria-label="סוגי שירותים" className="mx-auto -mt-4 mb-16 flex max-w-6xl flex-wrap justify-center gap-3 px-4">
        {tracks.map((t) => (
          <a key={t.slug} href={`#${t.slug}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 font-bold hover:border-sky hover:text-sky">
            <Icon name={t.icon} className="size-5 text-cyan" />{t.title}
          </a>
        ))}
      </nav>

      {tracks.map((t, i) => {
        const trackServices = services.filter((s) => s.track === t.slug);
        const trackProjects = projects.filter((p) => p.track === t.slug);
        return (
          <section key={t.slug} id={t.slug} aria-labelledby={`${t.slug}-title`}
            className={`scroll-mt-20 py-20 ${i % 2 === 0 ? "border-y border-line/60 bg-surface/30" : ""}`}>
            <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[21rem_1fr]">
              <header className="reveal h-fit lg:sticky lg:top-28">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/25 text-cyan"><Icon name={t.icon} className="size-7" /></span>
                  <span dir="ltr" className="text-gradient font-mono text-3xl font-bold">0{i + 1}</span>
                </div>
                <h2 id={`${t.slug}-title`} className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/85">{t.description}</p>
                <p className="mt-6 border-r-2 border-cyan/60 pr-4 leading-relaxed text-muted">
                  <span className="block font-bold text-ink">למי זה מתאים</span>{t.forWho}
                </p>
              </header>

              <div className="min-w-0 space-y-12">
                <div>
                  <h3 className="font-mono text-sm text-cyan/80">מה כולל</h3>
                  <ul className="mt-4 divide-y divide-line/70 border-y border-line/70">
                    {trackServices.map((s) => (
                      <li key={s.slug} id={s.slug} className="scroll-mt-28">
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-cyan"><Icon name={s.icon} className="size-5" /></span>
                            <span className="flex-1">
                              <span className="block text-lg font-bold">{s.title}</span>
                              <span className="block text-muted">{s.short}</span>
                            </span>
                            <Icon name="arrow" className="size-5 shrink-0 text-muted transition-transform group-open:-rotate-90" />
                          </summary>
                          <div className="pb-6 pr-14">
                            <p className="leading-relaxed text-ink/85">{s.description}</p>
                            <ul className="mt-4 space-y-2">
                              {s.gets.map((g) => (
                                <li key={g} className="flex gap-2.5 text-muted"><Icon name="check" className="mt-0.5 size-5 shrink-0 text-cyan" />{g}</li>
                              ))}
                            </ul>
                          </div>
                        </details>
                      </li>
                    ))}
                  </ul>
                </div>

                {trackProjects.length > 0 && (
                  <div>
                    <h3 className="font-mono text-sm text-cyan/80">דוגמאות מהשטח</h3>
                    <div className="mt-4 space-y-6">
                      {trackProjects.map((p) => <ProjectCard key={p.slug} p={p} wide />)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
