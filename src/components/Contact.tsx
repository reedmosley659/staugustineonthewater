export function Contact() {
  return (
    <section id="contact" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
          Contact
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-base leading-relaxed text-navy/70">
          Questions about experiences or partnership opportunities? We would
          love to hear from you. Our team is preparing full booking listings —
          reach out in the meantime.
        </p>
        <a
          href="mailto:hello@staugustineonthewater.com"
          className="mt-8 inline-flex items-center justify-center rounded-sm border border-navy/20 bg-white px-10 py-4 text-sm font-semibold uppercase tracking-wide text-navy shadow-sm transition-all hover:border-teal/30 hover:shadow-md"
        >
          hello@staugustineonthewater.com
        </a>
      </div>
    </section>
  );
}
