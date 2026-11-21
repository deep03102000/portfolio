import { TbCloud, TbCpu, TbWind } from "react-icons/tb";
import { thesis } from "@/data/portfolio";

const icons = [TbWind, TbCpu, TbCloud];

/** Sensor → Edge → Cloud with data dots flowing between tiers (CSS only). */
function FlowLink({ delay }: { delay: number }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-10 w-3 overflow-hidden sm:mx-0 sm:h-3 sm:w-auto sm:flex-1"
    >
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line sm:inset-x-0 sm:inset-y-auto sm:left-0 sm:top-1/2 sm:h-px sm:w-auto sm:-translate-x-0 sm:-translate-y-1/2" />
      {[0, 0.8, 1.6].map((d) => (
        <div
          key={d}
          className="flow-dot-runner absolute inset-0"
          style={{ animationDelay: `${delay + d}s` }}
        >
          <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)] sm:bottom-auto sm:left-auto sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0" />
        </div>
      ))}
    </div>
  );
}

export function TierDiagram() {
  return (
    <figure className="rounded-2xl border border-line bg-bg/60 p-5 sm:p-6">
      <figcaption className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Three-tier architecture
      </figcaption>
      <ol className="flex flex-col items-stretch sm:flex-row sm:items-center">
        {thesis.tiers.map((tier, i) => {
          const Icon = icons[i];
          return (
            <li key={tier.name} className="contents">
              <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 sm:flex-col sm:px-5 sm:text-center">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block font-display font-semibold text-fg">{tier.name}</span>
                  <span className="block text-xs text-muted">{tier.detail}</span>
                </span>
              </div>
              {i < thesis.tiers.length - 1 && <FlowLink delay={i * 0.4} />}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
