import Link from "next/link";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { cta, profile } from "@/data/portfolio";
import { Reveal } from "./motion";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 text-center sm:px-12 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent opacity-15 blur-3xl"
          />
          <h2
            id="cta-heading"
            className="relative mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-fg sm:text-5xl"
          >
            {cta.heading}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">{cta.subheading}</p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-7 font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              {cta.button}
              <FiArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-bg px-7 font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <FiFileText aria-hidden="true" className="size-4" />
              View resume
              <span className="sr-only">(opens PDF in a new tab)</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
