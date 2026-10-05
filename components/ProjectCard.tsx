import Link from "next/link";
import type { Project } from "@/content/site";
import { ProjectVisual } from "./ProjectVisual";
import { Icon } from "./Icon";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="card reveal group flex flex-col p-3 transition-transform hover:-translate-y-1">
      <ProjectVisual kind={p.visual} className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.015]" />
      <div className="flex flex-1 flex-col p-4">
        <span className="w-fit rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">{p.category}</span>
        <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{p.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-sky transition-[gap] group-hover:gap-3">
          לסיפור המלא <Icon name="arrow" className="size-4" />
        </span>
      </div>
    </Link>
  );
}
