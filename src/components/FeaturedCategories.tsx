import Link from "next/link";
import { experienceRoutes } from "@/lib/routes";

const categories = [
  {
    title: "Boat Rentals",
    description:
      "Private charters, pontoon rentals, and captained boat days for families, groups, and celebrations.",
    href: experienceRoutes.boatRentals,
    cta: "Compare Boat Rentals",
    icon: BoatIcon,
  },
  {
    title: "Sunset Cruises",
    description:
      "Relax on the water during golden hour with romantic, family-friendly, and private cruise options.",
    href: experienceRoutes.sunsetCruises,
    cta: "Compare Sunset Cruises",
    icon: SunsetIcon,
  },
  {
    title: "Dolphin Tours",
    description:
      "Find family-friendly dolphin tours and wildlife cruises around St. Augustine\u2019s coastal waters.",
    href: experienceRoutes.dolphinTours,
    cta: "Compare Dolphin Tours",
    icon: DolphinIcon,
  },
  {
    title: "Nights of Lights Cruises",
    description:
      "See St. Augustine\u2019s famous holiday lights from the water during the seasonal Nights of Lights event.",
    href: experienceRoutes.nightsOfLights,
    cta: "View Seasonal Cruises",
    icon: LightsIcon,
  },
] as const;

export function FeaturedCategories() {
  return (
    <section id="experiences" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Plan Your Day
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
            Top St Augustine Water Experiences
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Browse private charters, cruises, tours, and seasonal experiences to
            find the right boat day for your group.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <li key={category.title}>
              <Link
                href={category.href}
                className="group flex h-full min-h-[14rem] flex-col rounded-sm border border-sand-dark/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-mist text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <category.icon />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {category.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                  {category.description}
                </p>
                <span className="mt-6 inline-flex min-h-[2.75rem] items-center text-xs font-semibold uppercase tracking-wider text-gold">
                  {category.cta}
                  <ArrowIcon />
                </span>
              </Link>
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

function BoatIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M5 14l2-8h10l2 8M8 14h8M12 6v2" />
    </svg>
  );
}

function SunsetIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M3 12h2m14 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}

function DolphinIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 14c0-3 2-6 8-6s8 3 8 6c0 2-1 4-4 5-2 1-4 1-6 0-2-1-3-2-4-3-1 1-2 2-4 3-2 1-4 1-6 0-3-1-4-3-4-5z" />
    </svg>
  );
}

function LightsIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 22h4M12 2a6 6 0 00-3 11.2V16h6v-2.8A6 6 0 0012 2z" />
    </svg>
  );
}
