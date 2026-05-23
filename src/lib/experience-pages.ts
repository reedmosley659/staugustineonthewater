import { experienceRoutes } from "@/lib/routes";

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

export function getRelatedPages(currentPath: string): RelatedExperiencePage[] {
  return experiencePages.filter((page) => page.href !== currentPath);
}
