const reasons = [
  {
    title: "Six years in boat rentals",
    description:
      "I've worked in the boat rental industry for six years, the last three running day-to-day on-water operations. I know how these businesses run, what separates a well-run operator from one that feels generic once you're actually out on the water, and what customers actually care about.",
  },
  {
    title: "What I actually look for",
    description:
      "I'm not reviewing booking websites. I look at things like vessel type and group fit, how operators handle logistics, what kind of captain experience you're actually getting, and whether the pricing reflects the actual experience. Those are usually the things people remember most afterward — for better or worse.",
  },
  {
    title: "Where I've been, where I haven't",
    description:
      "I've personally experienced some of the operators featured here. Where I have firsthand experience, I say so. Where I don't, I'm clear about what the research and reviews show — I don't pretend otherwise.",
  },
  {
    title: "How this works",
    description:
      "Some links earn a small commission at no extra cost to you. I care more about whether I'd confidently recommend an experience than whether there's an affiliate relationship.",
  },
];

export function WhyBookWithUs() {
  return (
    <section id="why-us" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              About This Guide
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Why I Built This
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">
              I built this because I know the boat rental industry from the
              inside, and I&apos;ve never found a straightforward resource for
              planning a day on the water in St. Augustine that isn&apos;t just
              repackaged review site results.
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
