import { TrackedOperatorLink } from "@/components/TrackedOperatorLink";
import type { ExperiencePage } from "@/lib/analytics";
import type { ExperienceOperator } from "@/lib/operator-types";

type OperatorCardsProps = {
  operators: ExperienceOperator[];
  page: ExperiencePage;
  sectionId?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function OperatorCards({
  operators,
  page,
  sectionId = "top-options",
  eyebrow = "Curated Picks",
  title,
  subtitle,
}: OperatorCardsProps) {
  return (
    <section id={sectionId} className="scroll-mt-24 bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              {subtitle}
            </p>
          )}
        </div>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {operators.map((operator) => (
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
              {(operator.duration || operator.groupSize) && (
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  {operator.duration && (
                    <p className="text-sm text-navy/70">
                      <span className="font-semibold">Duration:</span>{" "}
                      {operator.duration}
                    </p>
                  )}
                  {operator.groupSize && (
                    <p className="text-sm text-navy/70">
                      <span className="font-semibold">Group size:</span>{" "}
                      {operator.groupSize}
                    </p>
                  )}
                </div>
              )}
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
                    page,
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
          Some featured experiences link directly to operator booking websites
          and may later be replaced with affiliate booking links. This does not
          change the price for travelers.
        </p>
      </div>
    </section>
  );
}
