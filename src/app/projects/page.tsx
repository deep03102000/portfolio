import type { Metadata } from "next";
import { ClosingCta } from "@/components/cta";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilter } from "@/components/project-filter";
import { Section } from "@/components/section";
import { pages, profile, projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${profile.name}: a geospatial AQI dashboard for Kolkata, a rural healthcare anomaly detection web app, and PingChat, a real-time chat and video calling app.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader {...pages.projects} />
      <Section className="pt-12!">
        <ProjectFilter
          items={projects.map((p) => ({
            key: p.slug,
            category: p.category,
            node: <ProjectCard project={p} detailed />,
          }))}
        />
      </Section>
      <ClosingCta />
    </>
  );
}
