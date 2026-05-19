const reasons = [
  {
    title: "Featured Experiences",
    description:
      "Discover popular water activities and local recommendations in one place.",
  },
  {
    title: "Local Insight",
    description:
      "Our recommendations reflect deep familiarity with St. Augustine's waterways and seasons.",
  },
  {
    title: "Premium Experiences",
    description:
      "We focus on quality outings — from intimate sunset sails to well-equipped fishing charters.",
  },
  {
    title: "Easy Comparison",
    description:
      "Browse categories in one place and find the right water experience for your visit.",
  },
];

export function WhyBookWithUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Why Us
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Why Book With Us
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">
              St Augustine On The Water is built for travelers who want a
              helpful starting point for planning their time on the water —
              without the noise of generic travel sites.
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
      </div>
    </section>
  );
}
