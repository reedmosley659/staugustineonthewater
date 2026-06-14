import Link from "next/link";
import { blogRoutes, experienceRoutes } from "@/lib/routes";
import { affiliateDisclosure, getSiteUrl, siteName } from "@/lib/site";
import { Footer } from "./Footer";

const articlePath = "/blog/sunset-cruise-vs-dolphin-tour-st-augustine";
const headline =
  "Sunset Cruise vs Dolphin Tour in St. Augustine: Which Should You Choose?";
const articleDescription =
  "Choosing between a St. Augustine sunset cruise and dolphin tour? Quick recommendation: families and wildlife lovers → dolphin tour, adults → a 21+ sunset cruise with live music and drinks.";

const faqs = [
  {
    question:
      "Is a dolphin tour or sunset cruise cheaper in St. Augustine?",
    answer:
      "Dolphin tours are the less expensive option. Featured tours start at around $29 per adult. Fury's 21+ sunset cruise — which includes live music and complimentary drinks — runs around $60 per person. If budget is a consideration, a dolphin tour offers a strong experience at a lower price point.",
  },
  {
    question:
      "Can we do a dolphin tour and a sunset cruise on the same trip?",
    answer:
      "Yes — and many visitors do. Dolphin tours typically depart in the morning or midday, while sunset cruises run in the evening. If you have two or more days in St. Augustine, doing both is a simple plan. On a single day it is possible if departure times align.",
  },
  {
    question: "Are sunset cruises in St. Augustine appropriate for kids?",
    answer:
      "It depends on the cruise. Some operators offer family-friendly sunset trips; others run 21+ adult-only events with live music and drinks. If you are traveling with children, a dolphin tour is the more straightforward fit — most featured operators welcome families and offer child pricing. Check the operator's age policy before booking a sunset cruise with kids.",
  },
] as const;

export function SunsetVsDolphinGuide() {
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
            name: "Sunset Cruise vs Dolphin Tour",
            item: articleUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline,
        description: articleDescription,
        datePublished: "2026-06-14",
        dateModified: "2026-06-14",
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
          url: `${siteUrl}/hero/sunset-cruise.jpg`,
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
                  href={blogRoutes.index}
                  className="transition-colors hover:text-white/80"
                >
                  Guides
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white/70">Sunset Cruise vs Dolphin Tour</li>
            </ol>
          </nav>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            St. Augustine Water Experience Guide
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            Both are popular ways to experience St. Augustine from the water —
            but they suit different groups. This guide gives you a quick
            recommendation based on who you&apos;re traveling with, plus the
            key details to help you decide.
          </p>
          <p className="mt-4 text-xs text-white/40">Last Updated: June 2026</p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-sm border border-gold/40 bg-gold/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Quick Answer
            </p>
            <h2 className="font-display mt-3 text-xl font-semibold text-navy">
              Which Experience Should You Book?
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy/80">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <strong className="font-semibold text-navy">
                    Traveling with kids
                  </strong>{" "}
                  → Book a{" "}
                  <Link
                    href={experienceRoutes.dolphinTours}
                    className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
                  >
                    dolphin tour
                  </Link>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <strong className="font-semibold text-navy">
                    Wildlife lovers
                  </strong>{" "}
                  → Book a{" "}
                  <Link
                    href={experienceRoutes.dolphinTours}
                    className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
                  >
                    dolphin tour
                  </Link>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <strong className="font-semibold text-navy">Couples</strong>{" "}
                  → Book a{" "}
                  <Link
                    href={experienceRoutes.sunsetCruises}
                    className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
                  >
                    sunset cruise
                  </Link>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <strong className="font-semibold text-navy">
                    Groups of friends
                  </strong>{" "}
                  → Book a{" "}
                  <Link
                    href={experienceRoutes.sunsetCruises}
                    className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
                  >
                    sunset cruise
                  </Link>
                </span>
              </li>
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-navy/70">
              There really isn&apos;t a wrong choice. Both are great ways to
              enjoy St. Augustine from the water — it comes down to the type
              of experience you&apos;re looking for.
            </p>
          </div>
        </div>

        {/* Dolphin Tours section */}
        <div className="mx-auto mt-14 max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Best for Families &amp; Wildlife Lovers
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            Why I Recommend Dolphin Tours for Families and Wildlife Lovers
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-navy/75">
            <p>
              In my experience,{" "}
              <Link
                href={experienceRoutes.dolphinTours}
                className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
              >
                dolphin tours
              </Link>{" "}
              are one of the easiest boat experiences for families to enjoy
              because there is always something happening to keep everyone
              engaged. Most tours last around 60–90 minutes and include
              narration about the local wildlife and ecosystem — which makes
              them as much an educational experience as a scenic one.
            </p>
            <p>
              If seeing dolphins is high on your priority list, this is the
              experience I would recommend. Featured dolphin tours start at
              around{" "}
              <strong className="font-semibold text-navy">$29 per adult</strong>
              , with discounted pricing for children — making it a strong
              value for families compared to a private charter.
            </p>
          </div>
          <Link
            href={experienceRoutes.dolphinTours}
            className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy"
          >
            Compare Dolphin Tour Options
            <ArrowIcon />
          </Link>
        </div>

        {/* Sunset Cruise section */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-sand-dark/60 px-6 pt-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            Best for Adults
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            Why I Recommend a Sunset Cruise for Adults
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-navy/75">
            <p>
              If you&apos;re traveling without kids and want an experience that
              feels more like a night out, a{" "}
              <Link
                href={experienceRoutes.sunsetCruises}
                className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
              >
                St. Augustine sunset cruise
              </Link>{" "}
              is my top recommendation. The combination of live music,
              complimentary drinks, and watching the sun set over the waterfront
              creates an atmosphere that is hard to beat.
            </p>
            <p>
              Featured 21+ sunset cruises with live music and drinks run around{" "}
              <strong className="font-semibold text-navy">
                $60 per person
              </strong>{" "}
              — all-in for the evening. Whether you&apos;re celebrating a
              special occasion, planning a date night, or spending time with
              friends, this is the experience I would personally choose.
            </p>
          </div>
          <Link
            href={experienceRoutes.sunsetCruises}
            className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy"
          >
            Compare Sunset Cruise Options
            <ArrowIcon />
          </Link>
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
            Ready to Compare Options?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Browse operators, check pricing and availability, and find the right
            experience for your group.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={experienceRoutes.dolphinTours}
              className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-navy/20 transition-all hover:bg-gold-light sm:w-auto"
            >
              Check Dolphin Tour Availability
            </Link>
            <Link
              href={experienceRoutes.sunsetCruises}
              className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-sm border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
            >
              Check Sunset Cruise Availability
            </Link>
          </div>
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
              More St. Augustine Water Experiences
            </h2>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: experienceRoutes.dolphinTours,
                title: "Dolphin Tours",
                description:
                  "Guided wildlife tours — great for families and wildlife enthusiasts. From $29/adult.",
              },
              {
                href: experienceRoutes.sunsetCruises,
                title: "Sunset Cruises",
                description:
                  "Golden-hour cruises along the waterfront and Bridge of Lions. 21+ options available.",
              },
              {
                href: experienceRoutes.boatRentals,
                title: "Boat Rentals",
                description:
                  "Private and pontoon rentals on the Matanzas River and Intracoastal.",
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
