import Link from "next/link";
import { blogRoutes } from "@/lib/routes";
import { affiliateDisclosure } from "@/lib/site";
import { Footer } from "./Footer";

const guides = [
  {
    href: blogRoutes.sunsetVsDolphin,
    category: "Experience Comparison",
    title: "Sunset Cruise vs Dolphin Tour in St. Augustine: Which Should You Choose?",
    description:
      "Traveling with kids? Book a dolphin tour. Adults-only trip? A 21+ sunset cruise with live music and drinks is hard to beat. Quick recommendations for families, couples, and groups of friends.",
    updated: "June 2026",
  },
  {
    href: blogRoutes.boatRentalCost,
    category: "Boat Rental Guide",
    title: "How Much Does a Boat Rental Cost in St. Augustine? (2026 Pricing Guide)",
    description:
      "Compare typical prices for pontoon rentals, captained charters, shared sunset cruises, dolphin tours, and Nights of Lights experiences — so you can find the right option for your group size and budget.",
    updated: "June 2026",
  },
] as const;

export function BlogIndexPage() {
  return (
    <>
      {/* Header */}
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

      {/* Hero */}
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-teal">
            St. Augustine, Florida
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            St. Augustine Water Guides
          </h1>
          <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
            Practical guides to help you choose, compare, and book the right
            water experience for your group — from pricing breakdowns to
            experience comparisons.
          </p>
        </div>
      </section>

      {/* Guide cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            All Guides
          </p>
          <ul className="space-y-6">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="group flex flex-col rounded-sm border border-sand-dark/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-navy/5 sm:flex-row sm:items-start sm:gap-8"
                >
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                      {guide.category}
                    </p>
                    <h2 className="font-display mt-3 text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-teal sm:text-2xl">
                      {guide.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy/65">
                      {guide.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-navy/40">
                        Updated {guide.updated}
                      </span>
                      <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold">
                        Read Guide
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA to money pages */}
      <section className="bg-sand py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Ready to Book?
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            Compare St. Augustine Water Experiences
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy/70">
            Browse curated options for boat rentals, sunset cruises, dolphin
            tours, and seasonal Nights of Lights cruises.
          </p>
          <Link
            href="/#experiences"
            className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-sm bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-navy/20 transition-all hover:bg-gold-light"
          >
            Compare Water Experiences
          </Link>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <div className="border-t border-sand-dark bg-white px-6 py-8 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-navy/55">
          {affiliateDisclosure}
        </p>
      </div>

      <Footer />
    </>
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
