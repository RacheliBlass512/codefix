import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, serviceBySlug, trackBySlug } from "@/content/site";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/ui";
import { ProjectVisual } from "@/components/ProjectVisual";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${p.slug}` } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const track = trackBySlug(p.track);

  const story = [
    { title: "האתגר", text: p.challenge },
    { title: "הפתרון", text: p.solution },
    { title: "התוצאה", text: p.result },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="mx-auto max-w-5xl px-4">
          <Link href={`/services#${track.slug}`} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
            <Icon name="arrow" className="size-4 rotate-180" /> {track.title}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">{track.title}</span>
            <span className="text-sm text-muted">{p.client}</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-muted">{p.summary}</p>
          {p.demoUrl && (
            <a href={p.demoUrl} target="_blank" rel="noopener" className="btn btn-primary mt-8">
              לצפייה בדמו <Icon name="external" className="size-5" />
            </a>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4">
        <ProjectVisual kind={p.visual} className="reveal aspect-[16/9] sm:aspect-[2/1]" />

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_18rem]">
          <div className="space-y-10">
            {story.map((s) => (
              <section key={s.title} className="reveal">
                <h2 className="flex items-center gap-3 text-2xl font-bold"><span className="bg-gradient-brand h-6 w-1.5 rounded-full" />{s.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink/85">{s.text}</p>
              </section>
            ))}
          </div>
          <aside className="card h-fit p-6">
            <h2 className="font-bold">בפרויקט</h2>
            <ul className="mt-3 space-y-2.5">
              {p.highlights.map((h) => <li key={h} className="flex gap-2 text-muted"><Icon name="check" className="mt-0.5 size-5 shrink-0 text-cyan" />{h}</li>)}
            </ul>
            <h2 className="mt-6 font-bold">שירותים</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.services.map((s) => (
                <li key={s}><Link href={`/services#${s}`} className="block rounded-full border border-line px-3 py-1 text-sm hover:border-sky hover:text-sky">{serviceBySlug(s)?.title}</Link></li>
              ))}
            </ul>
          </aside>
        </div>

        <Link href={`/projects/${next.slug}`} className="card group mt-16 flex items-center justify-between gap-4 p-6">
          <div><p className="text-sm text-muted">הפרויקט הבא</p><p className="mt-1 text-xl font-bold">{next.title}</p></div>
          <Icon name="arrow" className="size-6 text-sky transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>

      <CtaBand />
    </>
  );
}
