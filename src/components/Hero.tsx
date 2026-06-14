import Image from "next/image";
import Link from "next/link";
import { experienceRoutes } from "@/lib/routes";
import { Header } from "./Header";
import { Button } from "./Button";

const heroPanels = [
  {
    src: "/hero/StAug-Sunset.jpg",
    alt: "St Augustine sunset cruise near historic waterfront",
  },
  {
    src: "/hero/Dolphin-cruise.jpg",
    alt: "St Augustine dolphin tour on the water",
  },
  {
    src: "/hero/Boat-Drinking.jpg",
    alt: "St Augustine private boat rental at sunset",
  },
  {
    src: "/hero/tiki-boat.jpg",
    alt: "St Augustine tiki boat cruise on the water",
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
            St Augustine Water Experiences, Boat Rentals &amp; Cruises
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Compare{" "}
            <Link href={experienceRoutes.boatRentals} className="text-white underline underline-offset-2 transition-colors hover:text-gold-light">
              boat rentals
            </Link>
            ,{" "}
            <Link href={experienceRoutes.sunsetCruises} className="text-white underline underline-offset-2 transition-colors hover:text-gold-light">
              sunset cruises
            </Link>
            ,{" "}
            <Link href={experienceRoutes.dolphinTours} className="text-white underline underline-offset-2 transition-colors hover:text-gold-light">
              dolphin tours
            </Link>
            ,{" "}
            <Link href={experienceRoutes.nightsOfLights} className="text-white underline underline-offset-2 transition-colors hover:text-gold-light">
              seasonal cruises
            </Link>
            , and other unforgettable ways to experience St. Augustine from the
            water.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button as="a" href="#experiences" variant="primary">
              Compare Water Experiences
            </Button>
            <Button as="a" href="#why-us" variant="secondary">
              Find Your Perfect Boat Day
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
