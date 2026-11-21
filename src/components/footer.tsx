import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navLinks, profile } from "@/data/portfolio";
import { Monogram } from "./monogram";

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export const socials = [
  { label: "GitHub", href: profile.github, Icon: FiGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FiLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: FiMail },
];

export function SocialIcons() {
  return (
    <ul className="flex gap-2">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-muted transition-[color,border-color,transform] hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icon aria-hidden="true" className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div className="space-y-4">
          <Monogram />
          <p className="max-w-xs text-sm leading-relaxed text-muted">{profile.role} · {profile.shortLocation}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-fg">Navigation</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 min-w-11 items-center text-sm text-muted hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-fg">Profiles</h2>
          <ul>
            {socials.slice(0, 2).map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center text-sm text-muted hover:text-accent"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-fg">Connect</h2>
          <SocialIcons />
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted sm:px-8">
          © <CurrentYear /> {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
