import Link from "next/link";
import { experienceRoutes } from "@/lib/routes";
import { affiliateDisclosure, getSiteUrl, siteName } from "@/lib/site";
import { Footer } from "./Footer";

const articlePath = "/blog/boat-rental-cost-st-augustine";
const headline =
  "How Much Does a Boat Rental Cost in St. Augustine? (2026 Pricing Guide)";
const articleDescription =
  "Learn typical St. Augustine boat rental costs, including pontoons, captained charters, private boat days, sunset cruises, dolphin tours, and shared water experiences.";

const comparisonRows = [
  {
    type: "Self-Operated Pontoon Rental",
    bestFor: "Families, relaxed groups, boaters comfortable navigating on their own",
    duration: "2–8 hrs",
    cost: "From ~$75/hr · $300 half-day · $400 full day",
    bestValueWhen: "Groups of 4–8 splitting the cost; hourly rate drops with longer bookings",
  },
  {
    type: "Captained Private Charter",
    bestFor: "Celebrations, first-time boaters, groups wanting local route expertise",
    duration: "2–4 hrs",
    cost: "From ~$120/hr + fuel\nCaptain available for +$50/hr",
    bestValueWhen: "Groups of 6+ where the per-person cost becomes competitive with shared options",
  },
  {
    type: "Shared Sunset Cruise",
    bestFor: "Couples, small groups of 2–4, travelers who want a guided experience",
    duration: "90 min – 2 hrs",
    cost: "$39–$65/person",
    bestValueWhen: "Couples and small groups wanting a memorable evening on the water without committing to a private charter",
  },
  {
    type: "Dolphin Tour (Shared)",
    bestFor: "Families with kids, wildlife enthusiasts, first-time St. Augustine visitors",
    duration: "60–90 min",
    cost: "$29–$39/adult · $15–$26/child",
    bestValueWhen: "Families who want narration and wildlife sightings, not just time on the water",
  },
  {
    type: "Nights of Lights Cruise (Seasonal)",
    bestFor: "Holiday visitors, couples, families — November through January only",
    duration: "1–2 hrs",
    cost: "See operator for seasonal rates",
    bestValueWhen: "Seasonal experience available November through January; early booking is recommended.",
  },
] as const;

const pricingFactors = [
  {
    factor: "Boat size and passenger capacity",
    explanation:
      "Larger boats that hold more passengers cost more per hour. Among featured operators, Gone2Sea's rates range from roughly $113/hr for a 6-passenger boat to roughly $275/hr for a 14-passenger vessel.",
  },
  {
    factor: "Captain included vs. self-operated",
    explanation:
      "Self-operated rentals (where you navigate the boat) are less expensive. Adding a captain through Gone2Sea runs approximately $50/hour on top of the base rate. Some operators, like Jax Boat Rentals, are self-operated only.",
  },
  {
    factor: "Duration of the rental",
    explanation:
      "Hourly rates typically decrease the more time you book. Jax Boat Rentals, for example, charges $300 for a 4-hour half-day and $400 for a full 8-hour day — the longer booking drops the effective hourly rate from $75 to $50.",
  },
  {
    factor: "Day of the week and season",
    explanation:
      "Peak season runs roughly May through September. Weekend slots — especially Saturdays — fill fastest and may have less flexibility on pricing. Weekdays and shoulder-season months tend to have better availability.",
  },
  {
    factor: "Fuel policy",
    explanation:
      "Some operators include fuel; others do not. Gone2Sea does not include fuel in its rates — how much you spend on fuel depends on how far you travel. Always clarify the fuel policy before you book.",
  },
  {
    factor: "Gratuity",
    explanation:
      "Tips are not included in any listed rate and are never assumed, but they are a meaningful part of how captains and crew supplement their income. See the Additional Costs section below for guidance.",
  },
  {
    factor: "Taxes and booking platform fees",
    explanation:
      "Applicable taxes and any platform fees may be added at checkout. Always review the full total before confirming a booking.",
  },
] as const;

const additionalCosts = [
  {
    cost: "Captain fees",
    explanation:
      "Gone2Sea lists captain fees separately at roughly $50/hour — the base rental rate covers the boat only. Jax Boat Rentals is self-operated and does not offer a captain add-on. For shared cruises and dolphin tours, the captain is always included in the per-person price.",
  },
  {
    cost: "Fuel",
    explanation:
      "Gone2Sea does not include fuel. Fuel cost depends on how far your group travels. Ask for an estimate when you check availability, and factor it into your total budget.",
  },
  {
    cost: "Gratuity",
    explanation:
      "Gratuity is not included in any listed rate. For private charters, 15–18% is a reasonable guideline — your captain handles navigation, safety, and often makes the day more enjoyable than the itinerary on paper. For shared cruises and dolphin tours, 15–20% is customary, and more is appropriate when the crew went above and beyond. Tips are always at your discretion, but they matter.",
  },
  {
    cost: "Cleaning and damage policies",
    explanation:
      "Some operators require a deposit or have policies around damage, excessive mess, or late returns. Confirm any deposit requirements and the cancellation policy before booking.",
  },
  {
    cost: "Taxes and booking fees",
    explanation:
      "Applicable taxes and platform fees may be added at checkout and are not always reflected in the advertised rate. Review the full total before confirming.",
  },
] as const;

const faqs = [
  {
    question: "Is it cheaper to rent a boat during the week in St. Augustine?",
    answer:
      "Availability is generally better on weekdays, and booking midweek — especially outside peak season — typically means less competition for time slots. The operators featured on this site don't publicly advertise weekday discounts, but if your timing is flexible, checking availability for a Tuesday or Wednesday can open up more options and less scheduling pressure than a Saturday in July.",
  },
  {
    question: "Are captain fees included in boat rental prices?",
    answer:
      "It depends on the operator. Gone2Sea lists captain fees separately at roughly $50/hour — the base rental rate covers the boat only. Jax Boat Rentals is self-operated, so there is no captain option. For shared sunset cruises and dolphin tours, the captain and crew are always included in the per-person price. When checking availability for any private rental, ask specifically whether a captain is bundled or available as an add-on, and what that adds to your total before fuel and gratuity.",
  },
  {
    question: "Is a private boat rental worth it for small groups?",
    answer:
      "For groups of two to four, a shared experience usually wins on price. A self-operated half-day rental through Jax runs $300 total — split two ways, that's $150 per person before fuel. A shared sunset cruise starts at $39 per adult through Florida Water Tours, with fuel and crew included. If you want the freedom of a private boat — your own schedule, no strangers, a cooler and music — that can still be worth paying for. But if the goal is a quality experience on the water at a reasonable price, shared options typically deliver more value for small parties.",
  },
  {
    question: "What is the cheapest way to get on the water in St. Augustine?",
    answer:
      "Shared tours are the most affordable entry point. Dolphin tours through featured operators start at $29 per adult. Sunset cruises start at $39 per adult. Both include the captain and fuel. For private rentals, Jax Boat Rentals offers a self-operated half-day for $300 — if you have enough people to fill the boat, the per-person cost becomes reasonable. Keep in mind that fuel is not always included in private rental rates, so confirm what you're getting before you commit.",
  },
  {
    question: "How far in advance should I book a boat rental in St. Augustine?",
    answer:
      "For private rentals during peak season — May through September, holiday weekends, and popular summer Saturdays — booking two to four weeks ahead is a good idea. Shared cruises and dolphin tours tend to have more availability, but Friday and Saturday evening sunset slots fill quickly. Nights of Lights cruises in November and December often sell out well in advance, sometimes weeks ahead of the event. On weekdays outside of peak season, last-minute availability is common for most experience types.",
  },
] as const;

export function BoatRentalCostGuide() {
  const siteUrl = getSiteUrl().origin;
  const articleUrl = `${siteUrl}${articlePath}`;

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
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "St. Augustine Water Guides",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Boat Rental Cost Guide",
            item: articleUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline,
        description: articleDescription,
        datePublished: "2026-06-10",
        dateModified: "2026-06-10",
        author: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/hero/pontoon-rental.jpg`,
        },
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
      <section className="bg-navy py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              <li>
                <Link href="/" className="transition-colors hover:text-white/80">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-white/80"
                >
                  Guides
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white/70">Boat Rental Cost</li>
            </ol>
          </nav>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            St. Augustine Boat Rental Guide
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            <Link
              href={experienceRoutes.boatRentals}
              className="text-white underline underline-offset-2 transition-colors hover:text-gold-light"
            >
              Boat rental
            </Link>{" "}
            prices in St. Augustine vary more than most visitors expect. A
            self-operated half-day rental can start around $300 for your group;
            add a captain and fuel and the same outing climbs quickly. If
            you&apos;re a couple or a small group of three or four, a{" "}
            <Link
              href={experienceRoutes.sunsetCruises}
              className="text-white underline underline-offset-2 transition-colors hover:text-gold-light"
            >
              shared sunset cruise
            </Link>{" "}
            at $39 per person may be better value than a private boat. This
            guide breaks down what the operators featured on this site actually
            charge — so you can compare experience types and find the right fit
            before you book.
          </p>
          <p className="mt-4 text-xs text-white/40">Last Updated: June 2026</p>
        </div>
      </section>

      {/* Quick Answer + Comparison Table */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-sm border border-gold/40 bg-gold/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Quick Answer
            </p>
            <h2 className="font-display mt-3 text-xl font-semibold text-navy">
              How Much Do Boat Rentals in St. Augustine, Florida Cost in 2026?
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy/80">
              <p>
                Boat rentals in St. Augustine vary in cost depending on boat
                capacity, trip duration, and whether or not you hire a captain
                to drive for you. For groups comfortable operating the boat
                themselves, self-captained pontoon rentals can provide excellent
                value, with half-day rentals starting around $300 and full-day
                rentals around $400 for groups of up to 12 guests through some
                featured operators.
              </p>
              <p>
                For groups that would rather relax and let someone else handle
                the navigation, private boat rentals with an experienced captain
                are another great option. Featured operators currently offer
                private rentals ranging from 2–8 hours, with pricing starting
                around $120 per hour depending on boat size and duration. Hourly
                rates often decrease as additional hours are booked, making
                longer trips a better value on a per-hour basis. Licensed
                captains are available for an additional $50 per hour. In my
                opinion, this option is absolutely worth considering if you want
                the privacy and flexibility of a private boat day without the
                responsibility of driving yourself.
              </p>
              <p>
                Captained rentals are often the best fit for groups of 6–14
                people looking for a stress-free day on the water. When the cost
                is split among everyone onboard, many groups find that hiring a
                captain adds a lot of value for the overall experience.
              </p>
            </div>
            <p className="mt-4 text-xs text-navy/40">
              Pricing examples and operator information last reviewed: June 2026
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mx-auto mt-14 max-w-6xl px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              At a Glance
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
              Typical Cost by Experience Type
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/65">
              Rates below are examples based on operators featured on this site
              — not market-wide averages. Prices, fees, and policies can change.
              Verify current rates with the operator before booking.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-sand-dark/80">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-navy text-left text-xs font-semibold uppercase tracking-wide text-white">
                  <th className="px-5 py-4">Experience Type</th>
                  <th className="px-5 py-4">Best For</th>
                  <th className="px-5 py-4">Typical Duration</th>
                  <th className="px-5 py-4">Example Cost</th>
                  <th className="px-5 py-4">Best Value When</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.type}
                    className={i % 2 === 0 ? "bg-white" : "bg-sand/40"}
                  >
                    <td className="px-5 py-4 font-semibold text-navy">
                      {row.type}
                    </td>
                    <td className="px-5 py-4 text-navy/70">{row.bestFor}</td>
                    <td className="px-5 py-4 text-navy/70">{row.duration}</td>
                    <td className="px-5 py-4 font-medium text-navy/80 whitespace-pre-line">
                      {row.cost}
                    </td>
                    <td className="px-5 py-4 text-navy/70">
                      {row.bestValueWhen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-navy/50">
            Example rates are based on operators featured on this site and may
            not reflect current pricing. Fuel, captain fees, gratuity, and taxes
            may be itemized separately depending on the operator and experience
            type. Always confirm what is included when checking availability.
          </p>
        </div>
      </section>

      {/* Private vs Shared */}
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Choosing the Right Experience
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            Are Private Boat Rentals Worth It for Small Groups?
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy/75">
            <p>
              Not every group needs a private boat rental to enjoy St. Augustine
              from the water. In fact, for couples, small families, or visitors
              who only want to spend an hour or two on the water, shared
              experiences can often provide a better overall value.
            </p>
            <p>
              <Link
                href={experienceRoutes.sunsetCruises}
                className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
              >
                Sunset cruises
              </Link>{" "}
              are one of the most popular alternatives, with featured operators
              offering experiences ranging from around $39–$65 per person. Some
              cruises focus on a relaxing sightseeing experience, while others
              include live music, complimentary beverages, or even a traditional
              sailing experience aboard a historic schooner.
            </p>
            <p>
              <Link
                href={experienceRoutes.dolphinTours}
                className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
              >
                Dolphin tours
              </Link>{" "}
              are another excellent option, especially for families with younger
              children. Most featured dolphin cruises range from approximately
              $29–$39 per adult, with discounted pricing available for children.
              These tours typically last between 60–90 minutes, making them a
              great choice for visitors who want to experience St. Augustine from
              the water without committing to a half-day or full-day boat rental.
            </p>
            <p>
              In my opinion, private boat rentals provide the best value for
              larger groups that can split the cost among several people.
              However, if you&apos;re traveling with just two to four guests or
              simply don&apos;t want to spend an entire day on the water, shared
              experiences like sunset cruises and dolphin tours are often the
              better choice financially while still providing an unforgettable
              experience.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-sm border border-sand-dark/80 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Private Boat Rentals
              </p>
              <p className="mt-2 text-sm text-navy/70">
                Full boat for your group. Compare options and check
                availability.
              </p>
              <Link
                href={experienceRoutes.boatRentals}
                className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy"
              >
                See Pricing &amp; Options
                <ArrowIcon />
              </Link>
            </div>
            <div className="rounded-sm border border-sand-dark/80 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Shared Sunset Cruises
              </p>
              <p className="mt-2 text-sm text-navy/70">
                Per-person pricing from $39. Great for couples and small groups.
              </p>
              <Link
                href={experienceRoutes.sunsetCruises}
                className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy"
              >
                Compare Cruise Options
                <ArrowIcon />
              </Link>
            </div>
            <div className="rounded-sm border border-sand-dark/80 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Dolphin Tours
              </p>
              <p className="mt-2 text-sm text-navy/70">
                Guided wildlife experience from $29/adult. Best value for
                families.
              </p>
              <Link
                href={experienceRoutes.dolphinTours}
                className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy"
              >
                Compare Dolphin Tours
                <ArrowIcon />
              </Link>
            </div>
            <div className="rounded-sm border border-sand-dark/80 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Nights of Lights Cruises
              </p>
              <p className="mt-2 text-sm text-navy/70">
                Seasonal holiday experience. November–January only. Book early.
              </p>
              <Link
                href={experienceRoutes.nightsOfLights}
                className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy"
              >
                See Holiday Cruise Options
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Pricing Factors
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            What Affects Boat Rental Pricing in St. Augustine?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy/70">
            No two rentals are priced the same. These are the variables that
            drive most of the difference between the rate you see advertised and
            what you actually pay by the end of the day.
          </p>

          <ul className="mt-6 space-y-3">
            {pricingFactors.map((item) => (
              <li
                key={item.factor}
                className="flex gap-3 rounded-sm border border-sand-dark/60 bg-sand/30 px-5 py-4 text-sm leading-relaxed text-navy/75"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <strong className="font-semibold text-navy">
                    {item.factor}
                  </strong>
                  {" — "}
                  {item.explanation}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Before You Book
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            Additional Costs to Watch For
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy/70">
            The advertised rate on a private rental rarely reflects the total
            cost. Confirming exactly what is included before you book — not
            after — is the easiest way to avoid surprises.
          </p>

          <ul className="mt-6 space-y-3">
            {additionalCosts.map((item) => (
              <li
                key={item.cost}
                className="flex gap-3 rounded-sm border border-sand-dark/60 bg-white px-5 py-4 text-sm leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-navy/75">
                  <strong className="font-semibold text-navy">
                    {item.cost}
                  </strong>
                  {" — "}
                  {item.explanation}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Is It Worth It */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Value Assessment
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            Is a Boat Rental Worth It in St. Augustine?
          </h2>

          <div className="mt-6 space-y-6">
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                For larger groups splitting a private charter
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                If your group is six or more, a private charter can be
                surprisingly competitive on a per-person basis. Gone2Sea&apos;s
                smallest boat holds up to 6 passengers — split the base rate six
                ways and you&apos;re under $20/person per hour before the
                captain. Add a captain for $50/hour and you still often come in
                under what you&apos;d pay for a premium guided experience per
                person. The real value is what comes with it: no strangers, no
                fixed itinerary, and a boat that goes where your group wants
                to go.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                For couples and small groups (2–4 people)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                For smaller parties, the math usually favors a shared
                experience. A sunset cruise through Florida Water Tours starts
                at $39 per adult — fuel, captain, and beverages included.
                Fury&apos;s sunset cruise runs $61.20 per person and adds live
                music and complimentary drinks. Schooner Freedom offers a
                sailboat experience at $65/person. Compare any of those to
                splitting a $300 half-day private rental two ways — $150 per
                person before fuel — and a shared cruise starts to look like the
                smarter option for most small groups.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                For families choosing between a rental and a guided tour
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Families with younger children often find that a dolphin tour or
                organized cruise removes a lot of the stress that comes with
                managing a self-operated rental. Dolphin tours through featured
                operators start at $29 per adult and $15 per child — narrated,
                guided, and built around wildlife. Pontoon rentals through
                operators like Jax Boat Rentals offer more independence at $300
                for a half-day, which is a strong fit for families with older
                kids who want the freedom to explore at their own pace. Either
                can be a great family experience — it comes down to how much
                structure your group wants.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-sm border border-teal/20 bg-teal/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Bottom Line
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy/75">
              A boat rental is worth it when your group is big enough to share
              the cost, when flexibility matters, or when you want the day to
              feel like yours. A shared cruise or tour is worth it when
              you&apos;re traveling with fewer people, keeping to a budget, or
              simply want someone else to handle the boat. Use the guide above to
              compare what each experience actually costs — then head to the boat
              rental page to see current operators and check availability.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <dl className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-sm border border-sand-dark/80 bg-white p-6"
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

      {/* CTA */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to Compare Actual Options?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            See our St. Augustine boat rental guide — compare operators, check
            availability, and find the right fit for your group.
          </p>
          <Link
            href={experienceRoutes.boatRentals}
            className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-sm bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-navy/20 transition-all hover:bg-gold-light"
          >
            See Boat Rental Options
          </Link>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Explore More
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Related St. Augustine Water Experiences
            </h2>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: experienceRoutes.boatRentals,
                title: "Boat Rentals",
                description:
                  "Compare private and pontoon rental options on the Matanzas River and Intracoastal.",
              },
              {
                href: experienceRoutes.sunsetCruises,
                title: "Sunset Cruises",
                description:
                  "Plan a golden-hour cruise along the waterfront and Bridge of Lions.",
              },
              {
                href: experienceRoutes.dolphinTours,
                title: "Dolphin Tours",
                description:
                  "Guided dolphin-watching trips — great for families and wildlife enthusiasts.",
              },
              {
                href: experienceRoutes.nightsOfLights,
                title: "Nights of Lights Cruises",
                description:
                  "See St. Augustine's holiday lights from the water. Seasonal, November–January.",
              },
            ].map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group flex h-full min-h-[12rem] flex-col rounded-sm border border-sand-dark/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-navy/5"
                >
                  <h3 className="font-display text-lg font-semibold text-navy transition-colors group-hover:text-teal">
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

      {/* Affiliate disclosure */}
      <div className="border-t border-sand-dark bg-sand px-6 py-8 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-navy/55">
          {affiliateDisclosure} I do not operate boats or tours directly.
          Pricing examples in this guide are based on operators featured on this
          site and may not reflect current rates. Verify pricing, availability,
          and policies directly with the operator before booking.
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
