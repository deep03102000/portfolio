import { Reveal } from "./motion";

/** Intro block for sub-pages (/research, /projects, /contact). */
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <header className="mx-auto w-full max-w-6xl px-5 pb-6 pt-32 sm:px-8 md:pt-40">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-fg sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
      </Reveal>
    </header>
  );
}
