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
    let pastHero = false;
    let reachedOperators = false;

    const sync = () => setShow(pastHero && !reachedOperators);

    const onScroll = () => {
      pastHero = window.scrollY > 300;
      sync();
    };

    const section = document.getElementById(operatorSectionId);
    let observer: IntersectionObserver | undefined;

    if (section) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reachedOperators = true;
            observer?.disconnect();
          }
          sync();
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

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
