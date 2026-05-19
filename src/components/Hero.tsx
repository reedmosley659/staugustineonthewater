import Image from "next/image";
import { Header } from "./Header";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
        alt="Calm coastal waters at sunset near St. Augustine"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
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
            <Button variant="secondary">Coming Soon</Button>
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
