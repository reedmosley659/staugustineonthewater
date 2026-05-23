/**
 * Temporary direct operator booking URLs for the boat rentals money page.
 * Replace each `bookingUrl` with the approved FHDN affiliate link when available.
 */
export type BoatRentalOperator = {
  position: 1 | 2 | 3;
  trackingLabel:
    | "best_overall_private_boat_day"
    | "best_pontoon_casual_cruise"
    | "best_premium_special_occasion";
  label: string;
  summary: string;
  bestFor: string;
  highlights: string[];
  /** Temporary operator site URL — swap for FHDN link after approval. */
  bookingUrl: string;
  /** Optional note under CTA — defaults to instant-booking wording in the UI. */
  linkNote?: string;
};

export const boatRentalOperators: BoatRentalOperator[] = [
  {
    position: 1,
    trackingLabel: "best_overall_private_boat_day",
    label: "Best Overall Private Boat Day",
    summary:
      "A flexible private or semi-private boat day suited to mixed groups who want room to relax, sightsee, and set their own pace on the Matanzas River or Intracoastal.",
    bestFor:
      "Families, groups, birthdays, bachelor/bachelorette parties, and first-time visitors who want the most flexible private boating experience.",
    highlights: [
      "Private or semi-private boat day",
      "Good for mixed groups",
      "Flexible sightseeing and relaxing",
      "Strong general-purpose option",
    ],
    bookingUrl: "https://gone2seaboatrentals.com/",
  },
  {
    position: 2,
    trackingLabel: "best_pontoon_casual_cruise",
    label: "Best Pontoon-Style / Casual Cruise Option",
    summary:
      "An approachable pontoon-style rental built for easy daytime cruising, open deck space, and a low-key outing on St. Augustine's calmer waterways.",
    bestFor:
      "Laid-back groups, sightseeing, easy cruising, families with kids, and visitors who want a relaxed boat day without a luxury-charter feel.",
    highlights: [
      "Casual and approachable",
      "Relaxed sightseeing",
      "Easy group outing",
      "Good fit for daytime cruising",
    ],
    bookingUrl: "https://www.jaxboatrentals.com/pontoon-boat-rentals",
  },
  {
    position: 3,
    trackingLabel: "best_premium_special_occasion",
    label: "Best Premium / Special Occasion Charter",
    summary:
      "A polished private charter option for travelers who want a more elevated on-the-water experience for celebrations, anniversaries, or custom outings.",
    bestFor:
      "Couples, celebrations, anniversaries, private events, upscale groups, and travelers who want a more polished experience.",
    highlights: [
      "Premium, private feel",
      "Special occasion fit",
      "Strong for romantic or celebration trips",
      "Custom experiences including sunset outings",
    ],
    bookingUrl: "https://thcharters.com/",
    linkNote: "Books or inquires through operator website",
  },
];
