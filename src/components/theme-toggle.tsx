"use client";

import { useTheme } from "next-themes";

/**
 * Sun ⇄ moon morph driven purely by the `.dark` class (CSS transform/opacity),
 * so it renders correctly on the server with no hydration flash.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && "startViewTransition" in document) {
      document.startViewTransition(() => setTheme(next));
    } else {
      setTheme(next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className="group relative inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-accent"
    >
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <mask id="moon-mask">
          <rect width="24" height="24" fill="white" />
          <circle
            cx="24"
            cy="4"
            r="7"
            fill="black"
            className="transition-transform duration-500 ease-out dark:-translate-x-[9px] dark:translate-y-[5px]"
          />
        </mask>
        <circle
          cx="12"
          cy="12"
          r="5"
          fill="currentColor"
          mask="url(#moon-mask)"
          className="origin-center transition-transform duration-500 ease-out dark:scale-[1.55]"
        />
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="origin-center transition-[transform,opacity] duration-500 ease-out dark:rotate-90 dark:scale-50 dark:opacity-0"
        >
          <line x1="12" y1="1.5" x2="12" y2="3.5" />
          <line x1="12" y1="20.5" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="3.5" y2="12" />
          <line x1="20.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="4.6" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.4" y2="4.6" />
        </g>
      </svg>
    </button>
  );
}
