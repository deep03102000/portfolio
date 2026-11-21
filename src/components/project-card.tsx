import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, detailed = false }: { project: Project; detailed?: boolean }) {
  return (
      <article className="glow-card relative flex h-full flex-col rounded-[1.5rem] border border-line bg-surface p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.category}</p>
        <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-fg sm:text-2xl">
          {project.title}
        </h3>
        {project.context && <p className="mt-1 text-sm text-muted">{project.context}</p>}
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        <p className="mt-4 font-semibold leading-relaxed text-fg">{project.impact}</p>

        {detailed && (
          <ul className="mt-5 space-y-2.5">
            {project.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {t}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-1 pt-6">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-fg underline-offset-4 hover:text-accent hover:underline"
              >
                {l.label}
                <FiArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
      </article>
  );
}
