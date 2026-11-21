"use client";

import { useRef } from "react";
import { useInViewOnce, useScrollFrame } from "@/lib/hooks";

/** Vertical track whose line draws downward as you scroll (scaleY only). */
export function TimelineTrack({ children }: { children: React.ReactNode }) {
  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useScrollFrame(() => {
    const list = listRef.current;
    const line = lineRef.current;
    if (!list || !line) return;
    const r = list.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when the list top hits 75% of the viewport, 1 when its bottom hits 55%
    const start = vh * 0.75;
    const end = vh * 0.55;
    const progress = (start - r.top) / (r.height + start - end);
    line.style.transform = `scaleY(${Math.max(0, Math.min(1, progress))})`;
  });

  return (
    <ol ref={listRef} className="relative space-y-12 md:space-y-16">
      <span aria-hidden="true" className="absolute bottom-0 left-[11px] top-0 w-px bg-line md:left-1/2" />
      <span
        ref={lineRef}
        aria-hidden="true"
        className="absolute bottom-0 left-[11px] top-0 w-px origin-top scale-y-0 bg-accent transition-transform duration-200 ease-out md:left-1/2"
      />
      {children}
    </ol>
  );
}

/** Dot that fills and starts pulsing once it scrolls into view. */
export function TimelineDot() {
  const [ref, reached] = useInViewOnce<HTMLSpanElement>("0px 0px -35% 0px");
  return (
    <span
      ref={ref}
      aria-hidden="true"
      data-reached={reached}
      className="timeline-dot absolute left-0 top-6 flex size-[23px] items-center justify-center md:left-1/2 md:-ml-[11px]"
    >
      <span className="timeline-ping absolute inset-1 rounded-full bg-accent opacity-0" />
      <span
        className={`relative size-[13px] rounded-full border-2 transition-[background-color,border-color] duration-500 ${
          reached ? "border-accent bg-accent" : "border-line bg-bg"
        }`}
      />
    </span>
  );
}
