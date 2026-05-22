import Link from "next/link";
import { experienceRoutes } from "@/lib/routes";
import { affiliateDisclosure } from "@/lib/site";

const experienceLinks = [
  { href: experienceRoutes.boatRentals, label: "Boat Rentals" },
  { href: experienceRoutes.sunsetCruises, label: "Sunset Cruises" },
  { href: experienceRoutes.dolphinTours, label: "Dolphin Tours" },
  { href: experienceRoutes.nightsOfLights, label: "Nights of Lights" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-dark bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="font-display text-lg font-semibold text-navy">
              St Augustine On The Water
            </p>
            <p className="mt-1 text-sm text-navy/60">
              Water experiences in St. Augustine, Florida
            </p>
          </div>

          <nav
            aria-label="Experience guides"
            className="flex flex-col items-center gap-3 lg:items-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Compare Experiences
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
              {experienceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy/70 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-end">
            <Link
              href="/privacy-policy"
              className="text-sm text-navy/70 transition-colors hover:text-teal"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-navy/70 transition-colors hover:text-teal"
            >
              Terms
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-navy/70 transition-colors hover:text-teal"
            >
              Contact
            </Link>
          </nav>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-navy/45">
          {affiliateDisclosure}
        </p>
        <p className="mt-6 text-center text-xs text-navy/50">
          &copy; {year} St Augustine On The Water. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
