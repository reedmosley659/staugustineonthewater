/**
 * Dolphin tour operators for the dolphin tours money page.
 * Temporary direct operator URLs — swap each bookingUrl for the approved
 * FHDN affiliate link when available. No other fields need to change.
 */
import type { ExperienceOperator } from "@/lib/operator-types";

export const dolphinTourOperators: ExperienceOperator[] = [
  {
    position: 1,
    trackingLabel: "best_dolphin_florida_water_tours",
    label: "Best Overall Dolphin Tour",
    summary:
      "Best overall wildlife/dolphin experience with excellent reputation and strong booking UX.",
    bestFor: "Families, wildlife lovers, first-time visitors",
    duration: "~90 minutes",
    groupSize: "Varies by vessel",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Known for smaller-group wildlife tours rather than big shared-boat experiences",
      "Consistently well-reviewed for actual dolphin sightings — captains know the local areas",
      "St. Augustine-focused operator, not a regional chain",
      "Good fit for families or anyone who wants a guided experience with some depth to it",
    ],
    bookingUrl: "https://floridawatertour.com/",
  },
  {
    position: 2,
    trackingLabel: "best_dolphin_st_aug_boat_tours",
    label: "Best Value Dolphin Tour",
    summary:
      "Strong value-focused dolphin sightseeing option with easy booking.",
    bestFor: "Budget-conscious visitors, families",
    duration: "~90 minutes",
    groupSize: "Shared sightseeing vessel",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Shared vessel format — you'll be with other guests, which keeps the per-person cost lower",
      "No-frills dolphin tour that gets the job done without the premium price",
      "Good for families where a few people are mainly just interested in seeing dolphins",
      "Consistently rated well for the core experience",
    ],
    bookingUrl: "https://www.boattoursstaugustine.com/",
  },
  {
    position: 3,
    trackingLabel: "best_dolphin_fury",
    label: "Best Premium Dolphin Cruise",
    summary:
      "Larger premium dolphin harbor cruise with polished tourism experience.",
    bestFor: "Visitors wanting premium comfort",
    duration: "~90 minutes",
    groupSize: "Larger vessel",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Larger vessel — more stable and comfortable for people who don't love being on smaller boats",
      "More entertainment-oriented than wildlife-focused — expect a lively onboard atmosphere",
      "Good for groups or families with mixed interest in wildlife vs. just being on the water",
      "The dolphin sightings are part of the trip, not the main draw — worth keeping in mind",
    ],
    bookingUrl: "https://furystaugustine.com/",
  },
];
