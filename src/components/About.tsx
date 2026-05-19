export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(45,90,107,0.4)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
          About
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Your Guide to St. Augustine&apos;s Waters
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
          St Augustine On The Water helps visitors discover the best
          water-based experiences in St. Augustine — from serene sunset cruises
          along historic shorelines to thrilling dolphin encounters and
          professionally guided fishing trips.
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          Whether you are planning a romantic evening on the water, a family
          adventure, or a seasonal holiday cruise, we bring together trusted
          local operators so you can explore with confidence.
        </p>
      </div>
    </section>
  );
}
