"use client";

import { useId, useState } from "react";
import { TbBook2, TbFlask2, TbTerminal2 } from "react-icons/tb";
import { interests } from "@/data/portfolio";
import { Stagger, StaggerItem } from "./motion";

const icons = { teaching: TbBook2, research: TbFlask2, labs: TbTerminal2 } as const;

/** Tabs on mobile, three columns from md upward. */
export function InterestTabs() {
  const [active, setActive] = useState(interests[0].key);
  const base = useId();

  return (
    <div>
      <div role="tablist" aria-label="Areas of interest" className="mb-6 flex gap-2 overflow-x-auto md:hidden">
        {interests.map((g) => {
          const selected = g.key === active;
          return (
            <button
              key={g.key}
              id={`${base}-tab-${g.key}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${base}-panel-${g.key}`}
              onClick={() => setActive(g.key)}
              className={`min-h-11 flex-1 rounded-full border px-4 text-sm font-medium transition-colors ${
                selected ? "border-accent bg-accent text-accent-fg" : "border-line bg-surface text-muted"
              }`}
            >
              {g.title}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {interests.map((g) => {
          const Icon = icons[g.key as keyof typeof icons];
          return (
            <div
              key={g.key}
              id={`${base}-panel-${g.key}`}
              role="tabpanel"
              aria-labelledby={`${base}-tab-${g.key}`}
              className={`${g.key === active ? "block" : "hidden"} rounded-[1.5rem] border border-line bg-surface p-6 md:block`}
            >
              <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-semibold text-fg">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                {g.title}
              </h3>
              <Stagger className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <StaggerItem
                    key={item}
                    className="rounded-full border border-line bg-bg px-3 py-1.5 text-sm text-fg"
                  >
                    {item}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          );
        })}
      </div>
    </div>
  );
}
