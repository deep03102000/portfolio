import type { Metadata } from "next";
import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { ContactForm } from "@/components/contact-form";
import { SocialIcons } from "@/components/footer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { pages, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} for collaborations, research, teaching or opportunities.`,
  alternates: { canonical: "/contact" },
};

const blocks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: FiMail },
  { label: "Location", value: profile.shortLocation, Icon: FiMapPin },
  { label: "Languages", value: profile.languages.join(", "), Icon: FiGlobe },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, Icon: FiLinkedin },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, Icon: FiGithub },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader {...pages.contact} />
      <Section className="pt-12!">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div>
            <Stagger className="space-y-3">
              {blocks.map(({ label, value, href, Icon }) => {
                const content = (
                  <>
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                        {label}
                      </span>
                      <span className="block font-medium text-fg [overflow-wrap:anywhere]">{value}</span>
                    </span>
                  </>
                );
                const cls =
                  "flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-[transform,border-color] duration-300";
                return (
                  <StaggerItem key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`${cls} hover:-translate-y-0.5 hover:border-accent`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cls}>{content}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>
            <Reveal className="mt-8">
              <SocialIcons />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <h2 className="sr-only">Send a message</h2>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
