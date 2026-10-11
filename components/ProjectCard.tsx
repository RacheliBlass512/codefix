import Link from "next/link";
import { trackBySlug, type Project } from "@/content/site";
import { ProjectVisual } from "./ProjectVisual";
import { Icon } from "./Icon";

// wide: horizontal layout (visual beside text) used inside the services page tracks
// The whole card opens the project page via a stretched link (after:inset-0), so the live-site link can sit above it without nesting <a>.
export function ProjectCard({ p, wide = false }: { p: Project; wide?: boolean }) {
  const H = wide ? "h4" : "h3"; // wide cards sit under an h3 in the services page
  return (
    <div className={`card reveal group flex flex-col p-3 transition-transform hover:-translate-y-1 ${wide ? "sm:grid sm:grid-cols-[2fr_3fr] sm:items-center" : ""}`}>
      <ProjectVisual kind={p.visual} image={p.image}className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.015]" />
      <div className="flex flex-1 flex-col p-4">
        {wide
          ? <span className="text-sm text-muted">{p.client}</span>
          : <span className="w-fit rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">{trackBySlug(p.track).title}</span>}
        <H className={`text-xl font-bold ${wide ? "mt-1" : "mt-3"}`}>{p.title}</H>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <Link href={`/projects/${p.slug}`}
            className="inline-flex items-center gap-1.5 font-bold text-sky transition-[gap] group-hover:gap-3 after:absolute after:inset-0 after:rounded-[1.25rem]">
            לסיפור המלא <Icon name="arrow" className="size-4" />
          </Link>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener"
              className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-sm font-bold text-cyan transition-colors hover:border-cyan/60 hover:bg-cyan/10">
              למעבר לאתר <Icon name="external" className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
