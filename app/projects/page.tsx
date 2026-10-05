import type { Metadata } from "next";
import { projects } from "@/content/site";
import { CtaBand, PageHero } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "תיק עבודות – פרויקטים נבחרים",
  description: "סוכן AI לייעוץ פיננסי, אתר תדמית ליועצת משכנתאות, מערכת לניהול חיפוש עבודה עם AI ופלטפורמה עירונית בזמן אמת – פרויקטים של Code Fix.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero tag="projects" title={<>פרויקטים <span className="text-gradient">שעושים עבודה</span></>}
        text="כל פרויקט התחיל בבעיה אמיתית של עסק – והסתיים בפתרון שעובד. הנה כמה מהם." />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
      <CtaBand />
    </>
  );
}
