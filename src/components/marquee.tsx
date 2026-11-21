import { skillGroups } from "@/data/portfolio";
import { SkillLogo } from "./skill-chip";

/** Infinite logo strip — pure CSS, duplicated track for a seamless loop. */
export function Marquee() {
  const logos = skillGroups.flatMap((g) => g.skills).filter((s) => s.slug);
  return (
    <div
      className="marquee relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-8 pr-8">
            {logos.map((s) => (
              <li key={s.name} className="flex items-center gap-2.5 text-sm font-medium text-muted">
                <SkillLogo skill={s} />
                {s.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
