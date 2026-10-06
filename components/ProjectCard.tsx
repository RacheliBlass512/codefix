import Link from "next/link";
import { trackBySlug, type Project } from "@/content/site";
import { ProjectVisual } from "./ProjectVisual";
import { Icon } from "./Icon";

// wide: horizontal layout (visual beside text) used inside the services page tracks
export function ProjectCard({ p, wide = false }: { p: Project; wide?: boolean }) {
  const H = wide ? "h4" : "h3"; // wide cards sit under an h3 in the services page
  return (
    <Link href={`/projects/${p.slug}`}
      className={`card reveal group flex flex-col p-3 transition-transform hover:-translate-y-1 ${wide ? "sm:grid sm:grid-cols-[2fr_3fr] sm:items-center" : ""}`}>
      <ProjectVisual kind={p.visual} image={p.image}className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.015]" />
      <div className="flex flex-1 flex-col p-4">
        {wide
          ? <span className="text-sm text-muted">{p.client}</span>
          : <span className="w-fit rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">{trackBySlug(p.track).title}</span>}
        <H className={`text-xl font-bold ${wide ? "mt-1" : "mt-3"}`}>{p.title}</H>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{p.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-sky transition-[gap] group-hover:gap-3">
          לסיפור המלא <Icon name="arrow" className="size-4" />
        </span>
      </div>
    </Link>
  );
}
