import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-6xl flex-col items-start justify-center px-5 pt-24 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-fg">Page not found</h1>
      <p className="mt-4 text-lg text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-fg px-6 font-medium text-bg">
        Back home
      </Link>
    </section>
  );
}
