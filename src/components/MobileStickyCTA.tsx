"use client";
import { useEffect, useState } from "react";

export function MobileStickyCTA({
  operatorSectionId,
  label = "View Featured Options",
}: {
  operatorSectionId: string;
  label?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let pastIntro = false;
    let operatorsInView = false;
    let nearBottom = false;

    const sync = () => setShow(pastIntro && !operatorsInView && !nearBottom);

    const onScroll = () => {
      pastIntro = window.scrollY > 300;
      nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 80;
      sync();
    };

    const section = document.getElementById(operatorSectionId);
    let observer: IntersectionObserver | undefined;

    if (section) {
      observer = new IntersectionObserver(
        ([entry]) => {
          operatorsInView = entry.isIntersecting;
          sync();
        },
        { threshold: 0 }
      );
      observer.observe(section);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // Sync on mount in case the page is already scrolled (e.g. anchor navigation)
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [operatorSectionId]);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="border-t border-white/10 bg-navy/95 px-4 py-3 backdrop-blur-md">
        <a
          href={`#${operatorSectionId}`}
          className="flex min-h-[2.75rem] w-full items-center justify-center rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-navy/20 transition-all active:bg-gold-light"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
