export type RelatedExperiencePage = {
  href: string;
  title: string;
  description: string;
};

export const experiencePages: RelatedExperiencePage[] = [
  {
    href: "/st-augustine-boat-rentals",
    title: "Boat Rentals",
    description:
      "Compare private boat and pontoon rental options on the Matanzas River and Intracoastal.",
  },
  {
    href: "/st-augustine-sunset-cruises",
    title: "Sunset Cruises",
    description:
      "Plan a golden-hour cruise along the waterfront, bridge of lions, and Atlantic horizon.",
  },
  {
    href: "/st-augustine-dolphin-tours",
    title: "Dolphin Tours",
    description:
      "Learn what to look for on guided dolphin-watching trips around St. Augustine.",
  },
  {
    href: "/st-augustine-nights-of-lights-boat-tours",
    title: "Nights of Lights Boat Tours",
    description:
      "See St. Augustine's holiday light display from the water during the seasonal event.",
  },
];

export function getRelatedPages(currentPath: string): RelatedExperiencePage[] {
  return experiencePages.filter((page) => page.href !== currentPath);
}
