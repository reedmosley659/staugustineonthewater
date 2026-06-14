/** Canonical SEO routes for monetizable experience pages. */
export const experienceRoutes = {
  boatRentals: "/boat-rentals-st-augustine",
  sunsetCruises: "/sunset-cruises-st-augustine",
  dolphinTours: "/dolphin-tours-st-augustine",
  nightsOfLights: "/nights-of-lights-boat-tours",
} as const;

/** Blog / guide routes. */
export const blogRoutes = {
  index: "/blog",
  boatRentalCost: "/blog/boat-rental-cost-st-augustine",
  sunsetVsDolphin: "/blog/sunset-cruise-vs-dolphin-tour-st-augustine",
} as const;

/** Legacy paths — permanently redirected to experienceRoutes in next.config.ts. */
export const legacyExperienceRoutes = {
  boatRentals: "/st-augustine-boat-rentals",
  sunsetCruises: "/st-augustine-sunset-cruises",
  dolphinTours: "/st-augustine-dolphin-tours",
  nightsOfLights: "/st-augustine-nights-of-lights-boat-tours",
} as const;
