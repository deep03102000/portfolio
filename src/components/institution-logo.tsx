import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

/** Shows /public logo if present, otherwise a styled initials badge. */
export function InstitutionLogo({ src, initials, name }: { src: string; initials: string; name: string }) {
  const hasFile = existsSync(join(process.cwd(), "public", src));
  if (hasFile) {
    return (
      <span className="inline-flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-black/5">
        <Image src={src} alt={`${name} logo`} width={48} height={48} className="size-full object-contain" />
      </span>
    );
  }
  return (
    <span
      role="img"
      aria-label={`${name} initials`}
      className="inline-flex size-14 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent-soft font-display text-sm font-bold tracking-tight text-accent"
    >
      {initials}
    </span>
  );
}
