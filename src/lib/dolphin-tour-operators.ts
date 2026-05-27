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
      "Top review signals",
      "Smooth booking process",
      "Wildlife-focused tours",
      "Established local operator",
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
      "Strong review ratings",
      "Simple online booking",
      "Competitive pricing",
      "Dolphin-focused offering",
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
      "Premium vessel experience",
      "Trusted tourism brand",
      "Easy booking UX",
      "Strong family appeal",
    ],
    bookingUrl: "https://furystaugustine.com/",
  },
];
