"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { emailLink, navLinks, profile } from "@/data/portfolio";
import { useScrollFrame } from "@/lib/hooks";
import { Monogram } from "./monogram";
import { ThemeToggle } from "./theme-toggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  /* Hide on scroll down, show on scroll up */
  const lastY = useRef(0);
  useScrollFrame(() => {
    const y = window.scrollY;
    const next = y > lastY.current && y > 120;
    lastY.current = y;
    setHidden((prev) => (prev === next ? prev : next));
  });

  /* Sliding active-link indicator: measured, moved with translateX + scaleX only */
  const listRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const firstMeasure = useRef(true);

  useLayoutEffect(() => {
    const measure = () => {
      const el = indicatorRef.current;
      const active = listRef.current?.querySelector<HTMLAnchorElement>('[aria-current="page"]');
      if (!el) return;
      if (!active) {
        el.style.opacity = "0";
        return;
      }
      if (firstMeasure.current) {
        el.style.transitionDuration = "0s";
        firstMeasure.current = false;
      } else {
        el.style.transitionDuration = "";
      }
      el.style.opacity = "1";
      el.style.transform = `translateX(${active.offsetLeft + 12}px) scaleX(${active.offsetWidth - 24})`;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  /* Drawer: lock scroll + close on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md transition-transform duration-300 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
        >
          <Monogram />

          <ul ref={listRef} className="relative hidden items-center md:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex h-11 items-center px-3 text-sm font-medium transition-colors ${
                      active ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1.5 left-0 h-0.5 w-px origin-left bg-accent opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-10 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Resume
              <span className="sr-only">(opens PDF in a new tab)</span>
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface md:hidden"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[70] md:hidden" id="mobile-drawer">
            <m.button
              type="button"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={close}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <m.aside
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col border-l border-line bg-bg px-6 pb-8 pt-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <Monogram onClick={close} />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  autoFocus
                  className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <ul className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <m.li
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-12 items-center justify-between rounded-xl px-4 font-display text-2xl font-semibold ${
                          active ? "bg-accent-soft text-accent" : "text-fg hover:bg-accent-soft"
                        }`}
                      >
                        {link.label}
                        {active && <span className="size-2 rounded-full bg-accent" aria-hidden="true" />}
                      </Link>
                    </m.li>
                  );
                })}
              </ul>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 font-medium text-accent-fg"
              >
                View resume
                <span className="sr-only">(opens PDF in a new tab)</span>
              </a>
              <p className="mt-auto text-sm text-muted">
                <a href={emailLink} target="_blank" rel="noopener noreferrer" className="break-all underline-offset-4 hover:text-accent hover:underline">
                  {profile.email}
                </a>
              </p>
            </m.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
