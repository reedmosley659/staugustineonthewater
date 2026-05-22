import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getRelatedPages } from "@/lib/experience-pages";
import { Footer } from "./Footer";

export type ExperienceSection = {
  title: string;
  description: string;
};

export type ExperienceFaq = {
  question: string;
  answer: string;
};

export type ExperienceLandingPageProps = {
  path: string;
  eyebrow: string;
  title: string;
  heroImage: {
    src: string;
    alt: string;
  };
  intro: ReactNode;
  bestFor: ExperienceSection[];
  whatToExpect: ExperienceSection[];
  howToChoose: ExperienceSection[];
  faqs: ExperienceFaq[];
  ctaHeading?: string;
  ctaDescription?: string;
};

export function ExperienceLandingPage({
  path,
  eyebrow,
  title,
  heroImage,
  intro,
  bestFor,
  whatToExpect,
  howToChoose,
  faqs,
  ctaHeading = "Booking Listings Coming Soon",
  ctaDescription = "We are building curated booking listings for St. Augustine water experiences. Check back soon to compare options and book directly.",
}: ExperienceLandingPageProps) {
  const relatedPages = getRelatedPages(path);

  return (
    <>
      <header className="border-b border-sand-dark bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
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

      <section className="relative min-h-[55vh] overflow-hidden lg:min-h-[60vh]">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/55 to-navy/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,90,107,0.35)_0%,_transparent_55%)]" />

        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 py-24 lg:min-h-[60vh] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-4 text-base leading-relaxed text-navy/75">
            {intro}
          </div>
        </div>
      </section>

      <ExperienceSectionBlock
        eyebrow="Best For"
        title="Who This Experience Is Best For"
        items={bestFor}
        background="sand"
      />

      <ExperienceSectionBlock
        eyebrow="What to Expect"
        title="What to Expect on the Water"
        items={whatToExpect}
        background="white"
      />

      <ExperienceSectionBlock
        eyebrow="How to Choose"
        title="How to Choose the Right Option"
        items={howToChoose}
        background="sand"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-sm border border-sand-dark/80 bg-sand/40 p-6"
              >
                <dt className="font-display text-lg font-semibold text-navy">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-navy/70">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Coming Soon
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {ctaHeading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            {ctaDescription}
          </p>
          <span className="mt-8 inline-flex items-center justify-center rounded-sm border border-white/25 bg-white/10 px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
            Book Now — Listings Coming Soon
          </span>
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Explore More
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              More St. Augustine Water Experiences
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Planning more than one activity? Browse our other guides to
              compare water experiences in the area.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group flex h-full flex-col rounded-sm border border-sand-dark/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-navy/5"
                >
                  <h3 className="font-display text-xl font-semibold text-navy transition-colors group-hover:text-teal">
                    {page.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                    {page.description}
                  </p>
                  <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold">
                    Read Guide
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-sand-dark bg-sand px-6 py-8 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-navy/55">
          St Augustine On The Water may earn a commission when visitors book
          experiences through links on this site. We do not operate boats or
          tours directly.
        </p>
      </div>

      <Footer />
    </>
  );
}

function ExperienceSectionBlock({
  eyebrow,
  title,
  items,
  background,
}: {
  eyebrow: string;
  title: string;
  items: ExperienceSection[];
  background: "sand" | "white";
}) {
  return (
    <section
      className={`py-16 lg:py-24 ${background === "sand" ? "bg-sand" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            {title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <div className="border-l-2 border-gold pl-6">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
