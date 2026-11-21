"use client";

import { m, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiFileText, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { emailLink, profile } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const photo: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.3 } },
};

const links = [
  { label: "GitHub", href: profile.github, Icon: FiGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FiLinkedin },
  { label: "Email", href: emailLink, Icon: FiMail },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:min-h-[88svh] lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:pb-24"
    >
      <m.div variants={container} initial="hidden" animate="show">
        <m.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.headline}
        </m.p>

        <m.h1
          variants={item}
          id="hero-heading"
          className="font-display text-[clamp(2.6rem,8vw,5.25rem)] font-bold leading-[1.02] tracking-tight text-fg"
        >
          {profile.firstLine} <span className="text-accent">{profile.secondLine}</span>
        </m.h1>

        <m.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline}
        </m.p>

        <m.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-fg px-6 font-medium text-bg transition-opacity hover:opacity-90"
          >
            View projects
            <FiArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 font-medium text-fg transition-colors hover:border-accent hover:text-accent"
          >
            <FiFileText aria-hidden="true" className="size-4" />
            View resume
            <span className="sr-only">(opens PDF in a new tab)</span>
          </a>
        </m.div>

        <m.ul variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          <li className="inline-flex items-center gap-2">
            <FiMapPin aria-hidden="true" className="size-4" />
            {profile.shortLocation}
          </li>
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-accent"
              >
                <Icon aria-hidden="true" className="size-4" />
                {label}
              </a>
            </li>
          ))}
        </m.ul>
      </m.div>

      <m.div variants={photo} initial="hidden" animate="show" className="mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-none">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-xl shadow-black/5">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={900}
              height={900}
              preload
              quality={90}
              // The square photo is cropped into a 4:5 frame, so it renders ~1.25× wider than the frame.
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 380px"
              className="aspect-[4/5] w-full object-cover object-[68%_center]"
            />
          </div>
          <p className="absolute -bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-fg shadow-lg shadow-black/5">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            {profile.role}
          </p>
        </div>
      </m.div>
    </section>
  );
}
