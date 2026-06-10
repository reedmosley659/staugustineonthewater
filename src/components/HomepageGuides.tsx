import Link from "next/link";
import { blogRoutes } from "@/lib/routes";

const guides = [
  {
    href: blogRoutes.boatRentalCost,
    category: "Boat Rental Guide",
    title: "How Much Does a Boat Rental Cost in St. Augustine?",
    description:
      "Compare typical pricing for self-operated rentals, captained charters, sunset cruises, and dolphin tours — so you can find the right fit for your group before you book.",
    cta: "Read Pricing Guide",
  },
] as const;

export function HomepageGuides() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Local Guides
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Planning Your Day on the Water
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Helpful local guides to help you choose the right experience before
            you book.
          </p>
        </div>

        <ul className="mx-auto mt-10 max-w-3xl space-y-4">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="group flex flex-col rounded-sm border border-sand-dark/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-navy/5 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                    {guide.category}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-navy transition-colors group-hover:text-teal">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {guide.description}
                  </p>
                </div>
                <span className="mt-5 inline-flex shrink-0 items-center text-xs font-semibold uppercase tracking-wider text-gold sm:mt-0">
                  {guide.cta}
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-navy/40">
          <Link
            href={blogRoutes.index}
            className="underline underline-offset-2 transition-colors hover:text-navy/70"
          >
            View all guides
          </Link>
        </p>
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
