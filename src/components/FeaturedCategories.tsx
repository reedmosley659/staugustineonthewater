import Link from "next/link";

const categories = [
  {
    title: "Private Boat Rentals",
    description:
      "Explore the waterways at your own pace with popular private boat and pontoon rentals in the area.",
    href: "/st-augustine-boat-rentals",
    icon: BoatIcon,
  },
  {
    title: "Sunset Cruises",
    description:
      "Experience golden-hour views along the Matanzas River and Atlantic coast from the water.",
    href: "/st-augustine-sunset-cruises",
    icon: SunsetIcon,
  },
  {
    title: "Dolphin Tours",
    description:
      "Guided excursions to observe dolphins in their natural habitat with knowledgeable local captains.",
    href: "/st-augustine-dolphin-tours",
    icon: DolphinIcon,
  },
  {
    title: "Fishing Charters",
    description:
      "Inshore and offshore fishing trips with experienced guides who know St. Augustine waters.",
    href: null,
    icon: FishIcon,
  },
  {
    title: "Nights of Lights Cruises",
    description:
      "Seasonal waterfront cruises showcasing St. Augustine's famous holiday light display from the water.",
    href: "/st-augustine-nights-of-lights-boat-tours",
    icon: LightsIcon,
  },
] as const;

export function FeaturedCategories() {
  return (
    <section id="experiences" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Experiences
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
            Featured Experience Categories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Featured water-based activities to help you plan the perfect day on
            the water in America&apos;s oldest city.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => (
            <li
              key={category.title}
              className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              {category.href ? (
                <Link
                  href={category.href}
                  className="group flex h-full flex-col rounded-sm border border-sand-dark/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-navy/5"
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
                  <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold">
                    View Guide
                    <ArrowIcon />
                  </span>
                </Link>
              ) : (
                <article className="group flex h-full flex-col rounded-sm border border-sand-dark/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-navy/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-mist text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <category.icon />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {category.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                    {category.description}
                  </p>
                  <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold">
                    Experiences Coming Soon
                    <ArrowIcon />
                  </span>
                </article>
              )}
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

function FishIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12zm10-3a3 3 0 100 6 3 3 0 000-6z" />
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
