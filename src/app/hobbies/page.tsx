import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/cta";
import { Stagger, StaggerItem } from "@/components/motion";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { hobbies, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Hobbies",
  description: `What ${profile.name} enjoys beyond code.`,
  alternates: { canonical: "/hobbies" },
};

/** Only shown once `hobbies` in src/data/portfolio.ts has entries. */
export default function HobbiesPage() {
  if (!hobbies.length) notFound();
  return (
    <>
      <PageHeader eyebrow="Beyond code" title="Hobbies" intro="Things I enjoy outside the terminal." />
      <Section className="pt-12!">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h) => (
            <StaggerItem
              key={h.title}
              className="rounded-[1.5rem] border border-line bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl" aria-hidden="true">
                {h.emoji}
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{h.category}</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-fg">{h.title}</h2>
              {h.description && <p className="mt-2 text-muted">{h.description}</p>}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <ClosingCta />
    </>
  );
}
