import Image from "next/image";
import { Header } from "./Header";
import { Button } from "./Button";

const heroPanels = [
  {
    src: "/hero/social-boating.jpg",
    alt: "Social boating day with friends on calm coastal waters",
  },
  {
    src: "/hero/sunset-cruise.jpg",
    alt: "Sailboat at golden hour on a sunset cruise",
  },
  {
    src: "/hero/fishing-charter.jpg",
    alt: "Fishing charter on open water at sunrise",
  },
  {
    src: "/hero/pontoon-rental.jpg",
    alt: "Sailing charter along the coast",
  },
] as const;

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        {heroPanels.map((panel, index) => (
          <div key={panel.alt} className="relative overflow-hidden">
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              priority={index < 2}
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,90,107,0.35)_0%,_transparent_55%)]" />

      <Header />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            St. Augustine, Florida
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Discover the Best Water Experiences in St. Augustine
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            From private boat rentals and sunset cruises to dolphin tours,
            fishing charters, and seasonal waterfront experiences.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button as="a" href="#experiences" variant="primary">
              Explore Experiences
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-[0.65rem] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
