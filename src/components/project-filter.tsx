"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";

type Item = { key: string; category: string; node: React.ReactNode };

export function ProjectFilter({ items }: { items: Item[] }) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => {
          const selected = c === active;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(c)}
              className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors ${
                selected
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-line bg-surface text-muted hover:border-accent hover:text-fg"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} project{visible.length === 1 ? "" : "s"}
      </p>
      <ul className="grid gap-6 md:grid-cols-2">
        <AnimatePresence initial={false}>
          {visible.map((i) => (
            <m.li
              key={i.key}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              {i.node}
            </m.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
