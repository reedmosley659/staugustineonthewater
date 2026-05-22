import { affiliateDisclosure } from "@/lib/site";

const reasons = [
  {
    title: "Curated Water Experiences",
    description:
      "Compare boat rentals, cruises, tours, and seasonal experiences in one focused St. Augustine guide.",
  },
  {
    title: "Built for Visitors",
    description:
      "Quickly narrow down the right experience for families, couples, groups, celebrations, or relaxing days on the water.",
  },
  {
    title: "Transparent Recommendations",
    description:
      "Some featured experiences may earn us a commission at no extra cost to you. We focus on useful recommendations, not clutter.",
  },
  {
    title: "Updated for Seasonal Demand",
    description:
      "From summer boat days to Nights of Lights cruises, the guide can grow with seasonal St. Augustine travel demand.",
  },
];

export function WhyBookWithUs() {
  return (
    <section id="why-us" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Trust
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Why Use St Augustine On The Water?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">
              A locally focused St. Augustine water experience guide — built to
              help you compare options in one place and plan a better day on the
              water.
            </p>
          </div>

          <ul className="grid gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.title}>
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-xs leading-relaxed text-navy/55">
          {affiliateDisclosure}
        </p>
      </div>
    </section>
  );
}
