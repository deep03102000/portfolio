import { Reveal } from "./motion";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  as: Heading = "h2",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <Heading
        id={id ? `${id}-heading` : undefined}
        className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl"
      >
        {title}
      </Heading>
      {subtitle && <p className="mt-5 text-lg leading-relaxed text-muted">{subtitle}</p>}
    </Reveal>
  );
}
