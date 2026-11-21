import Link from "next/link";
import { profile } from "@/data/portfolio";

export function Monogram({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${profile.name} — home`}
      className="group relative inline-flex size-11 items-center justify-center overflow-hidden rounded-xl bg-fg text-bg"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-out group-hover:translate-y-0"
      />
      <span className="relative font-display text-base font-bold tracking-tight transition-colors duration-300 group-hover:text-accent-fg">
        {profile.monogram}
      </span>
    </Link>
  );
}
