import type { IconType } from "react-icons";
import { TbBinaryTree, TbChartDots3, TbDatabase, TbMapRoute, TbWorldLatitude } from "react-icons/tb";
import type { Skill } from "@/data/portfolio";

const fallbackIcons: Record<NonNullable<Skill["icon"]>, IconType> = {
  sql: TbDatabase,
  geojson: TbWorldLatitude,
  turf: TbMapRoute,
  ensemble: TbBinaryTree,
  anomaly: TbChartDots3,
};

/**
 * Brand logo on a light "plate" — keeps dark logos (Next.js, Express…)
 * visible in dark mode without recolouring them.
 */
export function SkillLogo({ skill, size = 20 }: { skill: Skill; size?: number }) {
  if (skill.slug) {
    return (
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110">
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny external SVGs; next/image adds no value */}
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}`}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          className="size-5"
        />
      </span>
    );
  }
  const Icon = skill.icon ? fallbackIcons[skill.icon] : null;
  return (
    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
      {Icon ? <Icon aria-hidden="true" className="size-5" /> : <span className="size-1.5 rounded-full bg-accent" />}
    </span>
  );
}

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className="group flex h-full min-h-14 items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent">
      <SkillLogo skill={skill} />
      <span className="text-sm font-medium leading-tight text-fg">{skill.name}</span>
    </div>
  );
}
