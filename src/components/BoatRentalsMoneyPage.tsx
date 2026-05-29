import Image from "next/image";
import Link from "next/link";
import { TrackedOperatorLink } from "@/components/TrackedOperatorLink";
import { boatRentalOperators } from "@/lib/boat-rental-operators";
import { getRelatedPages } from "@/lib/experience-pages";
import { experienceRoutes } from "@/lib/routes";
import { affiliateDisclosure, getSiteUrl, siteName } from "@/lib/site";
import { Footer } from "./Footer";
import { MobileStickyCTA } from "./MobileStickyCTA";

const pagePath = experienceRoutes.boatRentals;

const howToChooseTopics = [
  {
    title: "Private charter vs. shared cruise",
    description:
      "A private charter gives your group the boat and schedule. Shared cruises cost less per person but follow a fixed route and departure time. Choose private when flexibility matters; choose shared when you want a guided experience without coordinating a full rental.",
  },
  {
    title: "Captained vs. self-operated rental",
    description:
      "Self-operated pontoon rentals suit confident boaters who meet Florida licensing requirements. Captained rentals remove navigation stress and work well for celebrations, first-time boaters, or groups who want to relax instead of driving.",
  },
  {
    title: "Family groups",
    description:
      "Families often prefer stable pontoons with shade, life jackets for all ages, and half-day windows that match nap or meal schedules. Confirm passenger limits and whether young children need to remain seated during transit.",
  },
  {
    title: "Celebrations",
    description:
      "Birthdays, bachelor and bachelorette parties, and milestone trips benefit from extra deck space, optional captain service, and clear cooler or BYOB policies. Book early for weekends and holiday weeks.",
  },
  {
    title: "Sunset vs. daytime",
    description:
      "Daytime rentals are best for swimming stops, long sightseeing loops, and family outings. Sunset slots deliver golden-hour photos and a different mood — confirm return times and lighting if you book near dusk.",
  },
  {
    title: "Budget vs. premium experience",
    description:
      "Pontoon-style rentals are typically the most approachable entry point. Premium charters add polish, custom routing, and special-occasion service. Compare what is included — fuel, captain fees, and cleaning — not just the base rate.",
  },
] as const;

const faqs = [
  {
    question: "What is the best type of boat rental in St Augustine?",
    answer:
      "It depends on your group and how you want to spend the day. Pontoon-style rentals are popular for relaxed sightseeing and families. Private charters with a captain suit celebrations or travelers who prefer not to operate the boat. Compare capacity, route options, and whether a captain is required before you book.",
  },
  {
    question: "Do St Augustine boat rentals come with a captain?",
    answer:
      "Some rentals are self-operated if you meet Florida boating requirements; others offer an optional or required captain. Captained trips are common for larger groups, special occasions, and visitors who want local route guidance. Confirm captain availability and any separate captain fee when you check availability.",
  },
  {
    question: "Are boat rentals good for families?",
    answer:
      "Yes — families often choose pontoon rentals for stable decks, shade, and room for coolers and life jackets. Half-day trips work well with younger children. Ask about passenger limits, age policies, and whether the operator recommends calmer morning departures.",
  },
  {
    question: "What should I bring on a boat rental?",
    answer:
      "Pack sunscreen, hats, sunglasses, water, and any snacks or drinks allowed by the operator. Bring a light layer for breeze and a phone in a waterproof pouch. The operator should provide life jackets and a safety briefing — follow their rules for swimming, alcohol, and docking.",
  },
  {
    question: "Can I book a sunset boat rental in St Augustine?",
    answer:
      "Many operators offer late-afternoon and sunset departures, especially on private charters. Sunset timing shifts with the season, so confirm exact departure and return times for your date. For dedicated sunset cruises with narration, compare the sunset cruise guide as well.",
  },
] as const;

export function BoatRentalsMoneyPage() {
  const relatedPages = getRelatedPages(pagePath);
  const pageUrl = new URL(pagePath, getSiteUrl()).toString();

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
            name: "Boat Rentals in St Augustine",
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

      <MobileStickyCTA operatorSectionId="top-boat-rentals" />

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

      <section className="relative min-h-[60vh] overflow-hidden lg:min-h-[65vh]">
        <Image
          src="/hero/pontoon-rental.jpg"
          alt="St Augustine private boat rental on the Matanzas River"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/55 to-navy/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,90,107,0.35)_0%,_transparent_55%)]" />

        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 py-24 lg:min-h-[65vh] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              St. Augustine, Florida
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Boat Rentals in St Augustine
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Compare private charters, pontoon-style boat days, and captained
              experiences for families, groups, celebrations, and relaxed days on
              the water.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#top-boat-rentals"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-navy/20 transition-all hover:bg-gold-light"
              >
                See Top Boat Rental Options
              </a>
              <Link
                href="/#experiences"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-sm border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Compare All Water Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-4 text-base leading-relaxed text-navy/75">
            <p>
              St. Augustine boat rentals are not one-size-fits-all. Options vary
              by group size, whether you want a captain, how long you plan to
              stay on the water, and the kind of day you are planning — a casual
              pontoon cruise, a flexible private charter, or a polished outing for
              a special occasion.
            </p>
            <p>
              Most trips launch from marinas and ramps along the Matanzas River,
              Salt Run, or nearby Intracoastal access points, with routes that
              can include downtown waterfront views, marsh-lined channels, and
              quieter stretches away from foot traffic. Duration, passenger
              limits, and captain requirements differ by operator, so it helps
              to compare a few fits before you commit.
            </p>
            <p>
              Use the recommendations below to narrow your options, then check
              availability directly with the operator that matches your group.
              Looking for a guided experience instead? Compare{" "}
              <Link
                href="/sunset-cruises-st-augustine"
                className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
              >
                St Augustine sunset cruises
              </Link>{" "}
              or{" "}
              <Link
                href="/dolphin-tours-st-augustine"
                className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
              >
                dolphin tours
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        id="top-boat-rentals"
        className="scroll-mt-24 bg-sand py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Curated Picks
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Top Boat Rental Options in St Augustine
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Three starting points for different group types — compare what fits
              your day, then check availability on the operator&apos;s site.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 lg:grid-cols-3">
            {boatRentalOperators.map((operator) => (
              <li
                key={operator.trackingLabel}
                className="flex flex-col rounded-sm border border-sand-dark/80 bg-white p-8 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                  {operator.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">
                  {operator.summary}
                </p>
                <p className="mt-4 text-sm text-navy">
                  <span className="font-semibold">Best for:</span>{" "}
                  {operator.bestFor}
                </p>
                <ul className="mt-4 space-y-2">
                  {operator.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm leading-relaxed text-navy/70"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-2">
                  <TrackedOperatorLink
                    href={operator.bookingUrl}
                    tracking={{
                      option_position: operator.position,
                      option_label: operator.trackingLabel,
                      destination_url: operator.bookingUrl,
                      page: "boat_rentals_st_augustine",
                    }}
                    className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy shadow-md shadow-navy/10 transition-all hover:bg-gold-light"
                  >
                    Check Availability
                  </TrackedOperatorLink>
                  <p className="text-center text-xs text-navy/50">
                    {operator.linkNote ?? "Books through operator website"}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-navy/55">
            Some featured experiences may link directly to operator booking
            websites and may later be replaced with affiliate booking links. This
            does not change the price for travelers.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Compare Options
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              How to Choose the Right Boat Rental
            </h2>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {howToChooseTopics.map((topic) => (
              <li key={topic.title}>
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {topic.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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
              Not sure a rental is the right fit? Compare cruises and tours that
              may suit your group better.
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

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to Check Availability?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Browse the St Augustine boat rental options above and check
            availability directly with each operator.
          </p>
          <a
            href="#top-boat-rentals"
            className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-sm bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-navy/20 transition-all hover:bg-gold-light"
          >
            Check Availability
          </a>
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
