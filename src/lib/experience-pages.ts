import { canonicalExperienceRoutes, experienceRoutes } from "@/lib/routes";

export type RelatedExperiencePage = {
  href: string;
  title: string;
  description: string;
};

export const experiencePages: RelatedExperiencePage[] = [
  {
    href: experienceRoutes.boatRentals,
    title: "Boat Rentals",
    description:
      "Compare private boat and pontoon rental options on the Matanzas River and Intracoastal.",
  },
  {
    href: experienceRoutes.sunsetCruises,
    title: "Sunset Cruises",
    description:
      "Plan a golden-hour cruise along the waterfront, bridge of lions, and Atlantic horizon.",
  },
  {
    href: experienceRoutes.dolphinTours,
    title: "Dolphin Tours",
    description:
      "Learn what to look for on guided dolphin-watching trips around St. Augustine.",
  },
  {
    href: experienceRoutes.nightsOfLights,
    title: "Nights of Lights Boat Tours",
    description:
      "See St. Augustine's holiday light display from the water during the seasonal event.",
  },
];

const canonicalToSeoRoute: Record<string, string> = {
  [canonicalExperienceRoutes.boatRentals]: experienceRoutes.boatRentals,
  [canonicalExperienceRoutes.sunsetCruises]: experienceRoutes.sunsetCruises,
  [canonicalExperienceRoutes.dolphinTours]: experienceRoutes.dolphinTours,
  [canonicalExperienceRoutes.nightsOfLights]: experienceRoutes.nightsOfLights,
};

export function getRelatedPages(currentPath: string): RelatedExperiencePage[] {
  const seoPath = canonicalToSeoRoute[currentPath] ?? currentPath;
  return experiencePages.filter((page) => page.href !== seoPath);
}
