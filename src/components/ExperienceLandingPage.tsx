import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { OperatorCards } from "@/components/OperatorCards";
import type { ExperiencePage } from "@/lib/analytics";
import { getRelatedPages } from "@/lib/experience-pages";
import type { ExperienceOperator } from "@/lib/operator-types";
import { affiliateDisclosure, getSiteUrl, siteName, whyTrustUsText } from "@/lib/site";
import { Footer } from "./Footer";
import { MobileStickyCTA } from "./MobileStickyCTA";

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
  lastUpdated?: string;
  intro: ReactNode;
  bestFor: ExperienceSection[];
  whatToExpect: ExperienceSection[];
  bestMonths?: ExperienceSection[];
  bestMonthsTitle?: string;
  bestMonthsEyebrow?: string;
  howToChoose: ExperienceSection[];
  faqs: ExperienceFaq[];
  /** Operator comparison cards. When provided, operatorPage and operatorSectionTitle are required. */
  operators?: ExperienceOperator[];
  operatorPage?: ExperiencePage;
  operatorSectionTitle?: string;
  operatorSectionSubtitle?: string;
};

export function ExperienceLandingPage({
  path,
  eyebrow,
  title,
  heroImage,
  lastUpdated,
  intro,
  bestFor,
  whatToExpect,
  bestMonths,
  bestMonthsTitle = "Best Months for This Experience",
  bestMonthsEyebrow = "Best Time to Visit",
  howToChoose,
  faqs,
  operators,
  operatorPage,
  operatorSectionTitle,
  operatorSectionSubtitle,
}: ExperienceLandingPageProps) {
  const relatedPages = getRelatedPages(path);
  const pageUrl = new URL(path, getSiteUrl()).toString();
  const hasOperators = !!(operators && operatorPage);
  const hasBestMonths = !!(bestMonths && bestMonths.length > 0);

  // Background alternation: each section flips white/sand.
  // Inserting operator cards (sand bg) between intro (white) and content
  // sections shifts the pattern by one step. Inserting bestMonths shifts
  // it by one more — recalculate downstream colors accordingly.
  const bg = hasOperators
    ? {
        bestFor: "white" as const,
        whatToExpect: "sand" as const,
        bestMonths: "white" as const,
        howToChoose: hasBestMonths ? ("sand" as const) : ("white" as const),
        faq: hasBestMonths ? ("white" as const) : ("sand" as const),
      }
    : {
        bestFor: "sand" as const,
        whatToExpect: "white" as const,
        bestMonths: "sand" as const,
        howToChoose: hasBestMonths ? ("white" as const) : ("sand" as const),
        faq: hasBestMonths ? ("sand" as const) : ("white" as const),
      };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteName,
            item: getSiteUrl().origin,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
            href="/#experiences"
            className="text-sm font-medium text-teal transition-colors hover:text-navy"
          >
            Compare Experiences
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
            {hasOperators && (
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#top-options"
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-navy/20 transition-all hover:bg-gold-light"
                >
                  View Top Options
                </a>
                <Link
                  href="/#experiences"
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-sm border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Compare All Experiences
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {lastUpdated && (
            <p className="mb-6 text-xs text-navy/40">Last Updated: {lastUpdated}</p>
          )}
          <div className="space-y-4 text-base leading-relaxed text-navy/75">
            {intro}
          </div>
        </div>
      </section>

      {hasOperators && <MobileStickyCTA operatorSectionId="top-options" />}

      {hasOperators && (
        <OperatorCards
          operators={operators!}
          page={operatorPage!}
          title={operatorSectionTitle ?? title}
          subtitle={operatorSectionSubtitle}
        />
      )}

      <ExperienceSectionBlock
        eyebrow="Best For"
        title="Who This Experience Is Best For"
        items={bestFor}
        background={bg.bestFor}
      />

      <ExperienceSectionBlock
        eyebrow="What to Expect"
        title="What to Expect on the Water"
        items={whatToExpect}
        background={bg.whatToExpect}
      />

      {hasBestMonths && (
        <ExperienceSectionBlock
          eyebrow={bestMonthsEyebrow}
          title={bestMonthsTitle}
          items={bestMonths!}
          background={bg.bestMonths}
        />
      )}

      <ExperienceSectionBlock
        eyebrow="How to Choose"
        title="How to Choose the Right Option"
        items={howToChoose}
        background={bg.howToChoose}
      />

      <section
        className={`${bg.faq === "sand" ? "bg-sand" : "bg-white"} py-16 lg:py-24`}
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div
            className={`mt-6 rounded-sm border border-sand-dark/60 px-6 py-4 ${
              bg.faq === "sand" ? "bg-white" : "bg-sand/30"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              How We Choose
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              {whyTrustUsText}
            </p>
          </div>
          <dl className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className={`rounded-sm border border-sand-dark/80 p-6 ${
                  bg.faq === "sand" ? "bg-white" : "bg-sand/40"
                }`}
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
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {hasOperators
              ? "Ready to Book?"
              : "Compare St. Augustine Water Experiences"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            {hasOperators
              ? "View pricing and availability from the options above, or browse other St. Augustine water experiences below."
              : "View options for families, couples, and groups — or browse related guides below to plan a better day on the water."}
          </p>
          <Link
            href={hasOperators ? "#top-options" : "/#experiences"}
            className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-sm bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-navy/20 transition-all hover:bg-gold-light"
          >
            {hasOperators ? "Check Availability" : "Compare Water Experiences"}
          </Link>
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Related Guides
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              More St. Augustine Water Experiences
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Planning more than one activity? Browse other guides to compare
              water experiences in the area.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group flex h-full min-h-[12rem] flex-col rounded-sm border border-sand-dark/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-navy/5"
                >
                  <h3 className="font-display text-xl font-semibold text-navy transition-colors group-hover:text-teal">
                    {page.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                    {page.description}
                  </p>
                  <span className="mt-6 inline-flex min-h-[2.75rem] items-center text-xs font-semibold uppercase tracking-wider text-gold">
                    Compare Options
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
          {affiliateDisclosure} I do not operate boats or tours directly.
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
