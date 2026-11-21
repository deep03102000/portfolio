"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeMedia(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  };
}

function useMediaQuery(query: string, serverValue = false) {
  return useSyncExternalStore(
    subscribeMedia(query),
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

/** True only on devices with a precise pointer that can hover (i.e. not touch). */
export function useFinePointer() {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}

/** True when the user asked the OS to reduce motion. */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** Becomes true once the element enters the viewport (then stops observing). */
export function useInViewOnce<T extends Element>(rootMargin = "0px", threshold = 0) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, threshold]);
  return [ref, inView] as const;
}

/** Runs `onFrame` at most once per animation frame while the page scrolls/resizes. */
export function useScrollFrame(onFrame: () => void) {
  const cb = useRef(onFrame);
  useEffect(() => {
    cb.current = onFrame;
  });
  useEffect(() => {
    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        cb.current();
      });
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
}
