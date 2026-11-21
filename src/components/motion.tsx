"use client";

import { m, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  useFinePointer,
  useInViewOnce,
  usePrefersReducedMotion,
  useScrollFrame,
} from "@/lib/hooks";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Reveal: fade + slide in once when entering the viewport ── */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </m.div>
  );
}

/* ── Stagger: children pop in one after another ── */
const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const staggerChild: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease } },
};

export function Stagger({
  children,
  className,
  as = "ul",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "ul" | "div";
}) {
  const Comp = as === "ul" ? m.ul : m.div;
  return (
    <Comp
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "li",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "li" | "div";
}) {
  const Comp = as === "li" ? m.li : m.div;
  return (
    <Comp className={className} variants={staggerChild}>
      {children}
    </Comp>
  );
}

/* ── Counter: counts up when scrolled into view (rAF, no re-renders) ── */
export function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const [ref, inView] = useInViewOnce<HTMLSpanElement>("0px", 0.6);
  const final = value.toFixed(decimals) + suffix;

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.textContent = final;
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = (value * eased).toFixed(decimals) + suffix;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals, suffix, final, ref]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {(0).toFixed(decimals) + suffix}
      </span>
      <span className="sr-only">{final}</span>
    </>
  );
}

/** Pointer-follow effects are only enabled on fine pointers without reduced motion. */
function usePointerEffects() {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  return fine && !reduced;
}

/* ── Magnetic: element drifts toward the cursor (desktop only) ── */
export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const enabled = usePointerEffects();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onPointerMove={
        enabled
          ? (e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - (r.left + r.width / 2)) * strength;
              const y = (e.clientY - (r.top + r.height / 2)) * strength;
              e.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
          : undefined
      }
      onPointerLeave={enabled ? (e) => (e.currentTarget.style.transform = "") : undefined}
    >
      {children}
    </div>
  );
}

/* ── Tilt: subtle 3D tilt following the cursor (desktop only) ── */
export function Tilt({
  children,
  className = "",
  max = 5,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const enabled = usePointerEffects();

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      onPointerMove={
        enabled
          ? (e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const px = (e.clientX - r.left) / r.width - 0.5;
              const py = (e.clientY - r.top) / r.height - 0.5;
              e.currentTarget.style.transform = `perspective(900px) rotateX(${-py * max * 2}deg) rotateY(${px * max * 2}deg)`;
            }
          : undefined
      }
      onPointerLeave={enabled ? (e) => (e.currentTarget.style.transform = "") : undefined}
    >
      {children}
    </div>
  );
}

/* ── Scroll progress bar (transform: scaleX only) ── */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    el.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
  });
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-accent"
    />
  );
}

/* ── Page transition (used by app/template.tsx) ── */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </m.div>
  );
}
