import type { Metadata } from "next";
import { ClosingCta } from "@/components/cta";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeader } from "@/components/section";
import { ThesisCard } from "@/components/thesis-card";
import { interests, pages, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Research",
  description: `Current research by ${profile.name}: an edge-based air pollution monitoring system using Raspberry Pi 5, plus research interests in IoT, edge computing and machine learning.`,
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  const research = interests.find((i) => i.key === "research");
  return (
    <>
      <PageHeader {...pages.research} />

      <Section id="thesis" className="pt-12!">
        <SectionHeader id="thesis" eyebrow="Current Research" title="M.Tech Thesis" />
        <Reveal>
          <ThesisCard detailed />
        </Reveal>
      </Section>

      {research && (
        <Section id="research-interests" className="pt-0!">
          <SectionHeader
            id="research-interests"
            eyebrow="Interests"
            title={pages.research.interestsTitle}
            subtitle={pages.research.interestsSubtitle}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {research.items.map((item, i) => (
              <StaggerItem
                key={item}
                className="flex min-h-20 items-center gap-4 rounded-2xl border border-line bg-surface p-5"
              >
                <span className="font-display text-sm font-bold text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-fg">{item}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}

      <ClosingCta />
    </>
  );
}
