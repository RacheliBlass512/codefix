import Link from "next/link";
import Image from "next/image";
import { audiences, workSteps, projects, serviceBySlug, services } from "@/content/site";
import { Icon } from "@/components/Icon";
import { CtaBand, SectionHead } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

const promises = [
  { icon: "code", title: "קוד בהתאמה אישית", text: "פתרון שנבנה לעסק שלכם – לא תבנית מדף." },
  { icon: "chat", title: "מולי, ישירות", text: "בלי מתווכים ובלי טלפון שבור. אתם מדברים עם מי שכותבת את הקוד." },
  { icon: "rocket", title: "מעסק קטן ועד Scale", text: "מאתר תדמית ראשון ועד מערכת שמעבדת אלפי רכיבים בזמן אמת." },
] as const;

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="glow-pulse absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-violet/30 blur-3xl" />
        <div className="glow-pulse absolute top-40 left-0 -z-10 h-80 w-80 rounded-full bg-cyan/15 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-sm text-muted">
              <span className="size-2 animate-pulse rounded-full bg-cyan" /> רחל אפודי · מתכנתת Full Stack
            </p>
            <h1 className="mt-6 text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-6xl">
              אתרים, אוטומציות וסוכני AI <span className="text-gradient">שעובדים בשביל העסק שלכם</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              אני בונה לעסקים את הכלים הדיגיטליים שמביאים לקוחות, חוסכים זמן ופותרים בעיות – מאתר תדמית לעסק קטן ועד מערכות מורכבות בסקייל גבוה.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">בואו נדבר על העסק שלכם <Icon name="arrow" className="size-5" /></Link>
              <Link href="/projects" className="btn btn-ghost">לפרויקטים שלי</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="float relative mx-auto w-3/4">
              <div className="absolute inset-0 rounded-full bg-sky/30 blur-3xl" />
              <Image src="/logo.png" alt="" width={480} height={480} priority className="relative rounded-full" />
            </div>
            <div dir="ltr" className="card -mt-10 p-5 font-mono text-[13px] leading-7 shadow-2xl shadow-black/40 sm:mr-[-2rem]">
              <p><span className="text-violet">const</span> problem = <span className="text-sky">yourBusiness</span>.pain();</p>
              <p><span className="text-violet">const</span> fix = <span className="text-cyan">codeFix</span>.solve(problem);</p>
              <p className="text-muted">{"// ✓ more clients · less manual work"}</p>
            </div>
          </div>
        </div>

        <ul className="mx-auto mt-20 grid max-w-6xl gap-4 px-4 sm:grid-cols-3">
          {promises.map((p) => (
            <li key={p.title} className="reveal flex gap-4 rounded-2xl border border-line/70 bg-surface/40 p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan"><Icon name={p.icon} /></span>
              <div><h2 className="font-bold">{p.title}</h2><p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead tag="for-who" title={<>פתרון בגודל <span className="text-gradient">של העסק שלכם</span></>} text="לא משנה אם אתם עסק של אדם אחד או חברה עם מאות משתמשים – הפתרון נבנה בדיוק למידה שלכם." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {audiences.map((a) => (
            <div key={a.title} className="card reveal p-8">
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan"><Icon name={a.icon} className="size-7" /></span>
              <h3 className="mt-5 text-2xl font-bold">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{a.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {a.services.map((s) => (
                  <li key={s}><Link href={`/services#${s}`} className="rounded-full border border-line px-3 py-1.5 text-sm hover:border-sky hover:text-sky">{serviceBySlug(s)?.title}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-x-0 top-1/3 -z-10 h-80 bg-gradient-to-l from-violet/10 via-sky/5 to-cyan/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead tag="services" title={<>כל שירותי התכנות <span className="text-gradient">במקום אחד</span></>} text="מהרעיון ועד ההשקה – אני מתכננת, מפתחת ומלווה." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/services#${s.slug}`}
                className={`card reveal group p-6 transition-transform hover:-translate-y-1 ${i === services.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <span className="grid size-12 place-items-center rounded-xl bg-surface-2 text-cyan transition-colors group-hover:bg-cyan group-hover:text-bg"><Icon name={s.icon} /></span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.short}</p>
              </Link>
            ))}
            <Link href="/contact" className="reveal flex flex-col justify-center rounded-[1.25rem] border border-dashed border-line p-6 text-center transition-colors hover:border-cyan sm:col-span-2 lg:col-span-2">
              <p className="text-xl font-bold">לא מצאתם את מה שחיפשתם?</p>
              <p className="mt-2 text-muted">ספרו לי על הצורך – כנראה שיש לזה פתרון.</p>
              <span className="mt-3 font-bold text-sky">דברו איתי ←</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead tag="projects" title={<>פרויקטים <span className="text-gradient">נבחרים</span></>} text="מסוכן AI לאנליסטים פיננסיים ועד פלטפורמה עירונית בזמן אמת." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead tag="process" title={<>איך <span className="text-gradient">עובדים איתי</span></>} text="תהליך פשוט ושקוף, בלי הפתעות." />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workSteps.map((step, i) => (
            <li key={step.title} className="card reveal p-6">
              <span dir="ltr" className="text-gradient font-mono text-3xl font-bold">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}
