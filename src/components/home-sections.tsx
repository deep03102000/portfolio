import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiCheck, FiDownload, FiFileText } from "react-icons/fi";
import { about, education, profile, projects, sections, skillGroups } from "@/data/portfolio";
import { InstitutionLogo } from "./institution-logo";
import { InterestTabs } from "./interest-tabs";
import { Counter, Reveal, Stagger, StaggerItem } from "./motion";
import { ProjectCard } from "./project-card";
import { Section, SectionHeader } from "./section";
import { SkillChip } from "./skill-chip";
import { ThesisCard } from "./thesis-card";
import { TimelineDot, TimelineTrack } from "./timeline";

export function ResumeSection() {
  const { cardTitle, cardDetail, highlights, ...header } = sections.resume;
  const fileName = profile.resume.split("/").pop();
  return (
    <Section id="resume">
      <SectionHeader id="resume" {...header} />
      <Reveal>
        <div className="flex flex-col gap-8 rounded-[1.5rem] border border-line bg-surface p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 items-start gap-5"
          >
            <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
              <FiFileText aria-hidden="true" className="size-8" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-xl font-semibold text-fg group-hover:text-accent">
                {cardTitle}
              </span>
              <span className="mt-1 block text-sm text-muted">{cardDetail}</span>
              <span className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                {highlights.map((h) => (
                  <span key={h} className="inline-flex items-center gap-1.5">
                    <FiCheck aria-hidden="true" className="size-4 text-accent" />
                    {h}
                  </span>
                ))}
              </span>
            </span>
          </a>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-fg transition-transform hover:scale-[1.03]"
            >
              View resume
              <FiArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens PDF in a new tab)</span>
            </a>
            <a
              href={profile.resume}
              download={fileName}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <FiDownload aria-hidden="true" className="size-4" />
              Download PDF
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader id="about" eyebrow="About" title={about.heading} subtitle={about.subheading} />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <dl className="grid grid-cols-3 gap-3 self-start lg:grid-cols-1 lg:gap-4">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="flex flex-col-reverse rounded-2xl border border-line bg-surface p-4 sm:p-6 lg:flex-row-reverse lg:items-baseline lg:justify-end lg:gap-4">
                <dt className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-fg sm:text-5xl">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function TechnologiesSection() {
  return (
    <section id="technologies" aria-labelledby="technologies-heading" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          id="technologies"
          {...sections.technologies}
        />
        <div className="space-y-10">
          {skillGroups.map((g) => (
            <div key={g.category}>
              <Reveal>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">{g.category}</h3>
              </Reveal>
              <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                {g.skills.map((s) => (
                  <StaggerItem key={s.name}>
                    <SkillChip skill={s} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchSection() {
  return (
    <Section id="research">
      <SectionHeader
        id="research"
        {...sections.research}
      />
      <Reveal>
        <ThesisCard />
      </Reveal>
      <Reveal className="mt-8">
        <Link
          href="/research"
          className="group inline-flex min-h-11 items-center gap-2 font-medium text-fg hover:text-accent"
        >
          More on my research
          <FiArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </Section>
  );
}

export function WorkSection() {
  return (
    <Section id="work">
      <SectionHeader
        id="work"
        {...sections.work}
      />
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.slug} className={i === 0 ? "md:col-span-2" : ""}>
            <Reveal delay={(i % 2) * 0.1} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal className="mt-10">
        <Link
          href="/projects"
          className="group inline-flex min-h-11 items-center gap-2 font-medium text-fg hover:text-accent"
        >
          See all projects
          <FiArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader
        id="education"
        {...sections.education}
      />
      <TimelineTrack>
        {education.map((e, i) => (
          <li key={e.institution} className="relative pl-12 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
            <TimelineDot />
            <Reveal
              y={20}
              className={i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}
            >
              <article className="rounded-[1.5rem] border border-line bg-surface p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <div className="flex items-start gap-4">
                  <InstitutionLogo src={e.logo} initials={e.initials} name={e.institution} />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold leading-snug text-fg">{e.institution}</h3>
                    <p className="mt-1 text-sm text-muted">{e.period}</p>
                  </div>
                </div>
                <p className="mt-5 font-medium text-fg">{e.degree}</p>
                <p className="mt-3 inline-flex rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
                  {e.grade}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </TimelineTrack>
    </Section>
  );
}

export function InterestsSection() {
  return (
    <Section id="interests">
      <SectionHeader
        id="interests"
        {...sections.interests}
      />
      <Reveal>
        <InterestTabs />
      </Reveal>
    </Section>
  );
}
