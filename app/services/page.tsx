import type { Metadata } from "next";
import Link from "next/link";
import { projects, services } from "@/content/site";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "שירותים – בניית אתרים, אוטומציות לעסקים וסוכני AI",
  description: "אתרי תדמית, חנויות אינטרנטיות, אתרים מורכבים, אוטומציות לעסקים, סוכני AI חכמים ופיתוח בסקייל גבוה – כל שירותי התכנות במקום אחד.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero tag="services" title={<>כל שירותי התכנות <span className="text-gradient">שהעסק שלכם צריך</span></>}
        text="שבעה תחומים, גישה אחת: להבין את הבעיה העסקית, ולבנות את הפתרון הנכון – לא הכי מסובך ולא הכי יקר." />

      <div className="mx-auto max-w-5xl space-y-6 px-4">
        {services.map((s, i) => {
          const related = projects.filter((p) => p.services.includes(s.slug));
          return (
            <section key={s.slug} id={s.slug} className="card reveal scroll-mt-28 p-7 sm:p-10">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="md:w-2/5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/25 text-cyan"><Icon name={s.icon} className="size-7" /></span>
                    <span dir="ltr" className="font-mono text-sm text-muted">0{i + 1}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">{s.title}</h2>
                  <p className="mt-3 text-lg text-cyan/90">{s.short}</p>
                </div>
                <div className="md:w-3/5">
                  <p className="leading-relaxed text-ink/90">{s.description}</p>
                  <h3 className="mt-6 font-bold">למי זה מתאים</h3>
                  <p className="mt-1 leading-relaxed text-muted">{s.forWho}</p>
                  <h3 className="mt-6 font-bold">מה מקבלים</h3>
                  <ul className="mt-2 space-y-2">
                    {s.gets.map((g) => (
                      <li key={g} className="flex gap-2.5 text-muted"><Icon name="check" className="mt-0.5 size-5 shrink-0 text-cyan" />{g}</li>
                    ))}
                  </ul>
                  {related.length > 0 && (
                    <p className="mt-6 text-sm text-muted">
                      דוגמה מהשטח:{" "}
                      {related.map((p, j) => (
                        <span key={p.slug}>{j > 0 && " · "}<Link href={`/projects/${p.slug}`} className="font-bold text-sky hover:underline">{p.title}</Link></span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand />
    </>
  );
}
