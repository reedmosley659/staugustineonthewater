import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "./Footer";

export function LegalPageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-sand-dark bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 lg:px-8">
          <Link href="/" className="group flex flex-col">
            <span className="font-display text-xl font-semibold tracking-wide text-navy">
              St Augustine
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-navy/60 transition-colors group-hover:text-navy/80">
              On The Water
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-teal transition-colors hover:text-navy"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-sand py-16 lg:py-24">
        <article className="prose-navy mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            {title}
          </h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy/75">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
