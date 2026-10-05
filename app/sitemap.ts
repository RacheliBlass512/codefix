import type { MetadataRoute } from "next";
import { projects, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/projects", "/about", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  return [...pages, ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.6 }))];
}
