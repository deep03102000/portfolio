import { thesis } from "@/data/portfolio";
import { TierDiagram } from "./tier-diagram";

export function OngoingBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
      <span className="relative flex size-2" aria-hidden="true">
        <span className="animate-ping-soft absolute inset-0 rounded-full bg-accent" />
        <span className="relative size-2 rounded-full bg-accent" />
      </span>
      {thesis.status}
    </span>
  );
}

export function ThesisCard({ detailed = false }: { detailed?: boolean }) {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-accent/30 bg-surface p-6 sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent opacity-10 blur-3xl"
      />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <OngoingBadge />
            <span className="text-sm text-muted">
              {thesis.label} · {thesis.period}
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-fg sm:text-3xl">
            {thesis.title}
          </h3>
          <ul className="mt-6 space-y-3">
            {thesis.points.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed text-muted">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <TierDiagram />
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Tools</h4>
            <ul className="flex flex-wrap gap-2">
              {thesis.tools.map((t) => (
                <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-sm text-fg">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {detailed && (
            <p className="text-sm leading-relaxed text-muted">
              Status: in progress as part of my M.Tech in Distributed and Mobile Computing at Jadavpur University.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
