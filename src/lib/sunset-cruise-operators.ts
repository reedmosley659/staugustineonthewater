/**
 * Sunset cruise operators for the sunset cruises money page.
 * Temporary direct operator URLs — swap each bookingUrl for the approved
 * FHDN affiliate link when available. No other fields need to change.
 */
import type { ExperienceOperator } from "@/lib/operator-types";

export const sunsetCruiseOperators: ExperienceOperator[] = [
  {
    position: 1,
    trackingLabel: "best_sunset_florida_water_tours",
    label: "Best Overall Sunset Cruise",
    summary:
      "Strong overall sunset option with excellent reviews, polished booking UX, and multiple sunset-focused experiences.",
    bestFor: "Couples, families, visitors wanting a polished guided experience",
    duration: "~90 minutes",
    groupSize: "Varies by vessel",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Excellent recent review reputation",
      "Clean online booking flow",
      "Established St. Augustine operator",
      "Strong sunset-specific product offerings",
    ],
    bookingUrl: "https://floridawatertour.com/",
  },
  {
    position: 2,
    trackingLabel: "best_sunset_fury",
    label: "Best Premium Sunset Experience",
    summary:
      "Larger premium catamaran sunset cruise with entertainment-driven experience.",
    bestFor: "Groups, tourists wanting a lively premium experience",
    duration: "~90 minutes",
    groupSize: "Larger group vessel",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Excellent booking UX",
      "Live music options",
      "Drinks/snacks experience",
      "Strong tourism brand recognition",
    ],
    bookingUrl: "https://furystaugustine.com/",
  },
  {
    position: 3,
    trackingLabel: "best_sunset_schooner_freedom",
    label: "Best Classic Sailing Sunset Cruise",
    summary:
      "Unique tall-ship sailing sunset experience with strong reputation.",
    bestFor: "Couples, romantic outings, classic sailing enthusiasts",
    duration: "~2 hours",
    groupSize: "Shared sailing experience",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Unique schooner experience",
      "Excellent reviews",
      "Authentic sailing atmosphere",
      "Strong differentiation",
    ],
    bookingUrl: "https://schoonerfreedom.com/",
  },
];
