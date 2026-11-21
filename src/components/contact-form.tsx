"use client";

import { useRef, useState } from "react";
import { FiCheck, FiCopy, FiMail, FiSend } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

const secondaryBtn =
  "inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-5 font-medium text-fg transition-colors hover:border-accent hover:text-accent";

type Status = "idle" | "gmail" | "mailapp" | "copied" | "copy-failed";

const statusText: Record<Status, string> = {
  idle: "No account needed on this site — the message opens in Gmail or your email app, ready to send.",
  gmail: "Gmail opened in a new tab with your message ready. Just press Send there.",
  mailapp: "Your email app should open with the message ready. If nothing happened, use Gmail or copy the address.",
  copied: `Email address copied: ${profile.email}`,
  "copy-failed": `Couldn't copy automatically — the address is ${profile.email}`,
};

/**
 * No backend: hands the message to Gmail (works in any browser) or to the
 * visitor's default email app via mailto, which does nothing if none is set up.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  /** Validates the form and returns the composed subject/body, or null if invalid. */
  function compose() {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return null;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    return {
      subject: `Portfolio enquiry from ${name}`,
      body: `${message}\n\n— ${name} (${email})`,
    };
  }

  function sendWithGmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = compose();
    if (!msg) return;
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(profile.email)}` +
      `&su=${encodeURIComponent(msg.subject)}` +
      `&body=${encodeURIComponent(msg.body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("gmail");
  }

  function sendWithMailApp() {
    const msg = compose();
    if (!msg) return;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(msg.body)}`;
    setStatus("mailapp");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("copy-failed");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={sendWithGmail}
      className="space-y-5 rounded-[1.5rem] border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${field} resize-y`}
          placeholder="Hi Deep, I'd like to talk about…"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-7 font-medium text-accent-fg transition-transform hover:scale-[1.03]"
        >
          Send via Gmail
          <FiSend aria-hidden="true" className="size-4" />
        </button>
        <button type="button" onClick={sendWithMailApp} className={secondaryBtn}>
          <FiMail aria-hidden="true" className="size-4" />
          Email app
        </button>
        <button type="button" onClick={copyEmail} className={secondaryBtn}>
          {status === "copied" ? (
            <FiCheck aria-hidden="true" className="size-4" />
          ) : (
            <FiCopy aria-hidden="true" className="size-4" />
          )}
          Copy email
        </button>
      </div>
      <p className="text-sm text-muted" aria-live="polite">
        {statusText[status]}
      </p>
    </form>
  );
}
