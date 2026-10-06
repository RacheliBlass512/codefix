import Link from "next/link";
import Image from "next/image";
import { workSteps, projects, tracks } from "@/content/site";
import { Icon } from "@/components/Icon";
import { CtaBand, SectionHead } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

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
              אני בונה לעסקים את הכלים הדיגיטליים שמביאים לקוחות, חוסכים זמן ופותרים בעיות.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">בואו נדבר על העסק שלכם <Icon name="arrow" className="size-5" /></Link>
              <Link href="/services" className="btn btn-ghost">לשירותים ולפרויקטים</Link>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-md lg:block">
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

        <ul className="mx-auto mt-12 grid max-w-6xl gap-4 px-4 md:grid-cols-3 lg:mt-20">
          {tracks.map((t) => (
            <li key={t.slug} className="reveal">
              <Link href={`/services#${t.slug}`} className="card group flex h-full flex-col p-6 transition-transform hover:-translate-y-1">
                <span className="grid size-12 place-items-center rounded-xl bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan group-hover:text-bg"><Icon name={t.icon} /></span>
                <h2 className="mt-4 text-xl font-bold">{t.title}</h2>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{t.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sky transition-[gap] group-hover:gap-3">שירותים ודוגמאות <Icon name="arrow" className="size-4" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead tag="projects" title={<>פרויקטים <span className="text-gradient">נבחרים</span></>} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead tag="process" title={<>איך <span className="text-gradient">עובדים איתי</span></>} text="תהליך פשוט ושקוף, ואתם עובדים ישירות מולי – בלי מתווכים ובלי טלפון שבור." />
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
