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
      "Well-reviewed overall sunset option with multiple cruise styles and easy online booking.",
    bestFor: "Couples, families, visitors wanting a polished guided experience",
    duration: "~90 minutes",
    groupSize: "Varies by vessel",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Known for smaller-group sunset experiences — less of a party-boat atmosphere",
      "Consistently well-reviewed for the actual on-water experience",
      "St. Augustine-focused operator with sunset-specific cruise options",
      "Good fit for couples or families who want a guided sunset without a loud crowd",
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
      "Large catamaran — stable and spacious, good if smaller boats make people nervous",
      "Entertainment-forward: drinks, music, bigger crowd energy",
      "Better suited for groups or people who want a social atmosphere over a quiet sunset",
      "Less intimate than smaller-vessel options — worth knowing before you book",
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
      "Sailing a tall ship is a different experience from a motorboat cruise — slower, quieter, wind-dependent",
      "The vessel itself is part of what you're paying for",
      "Good fit for couples or anyone who finds powerboat tours feel rushed or loud",
      "Feels more like an actual sailing experience than a standard sightseeing cruise",
    ],
    bookingUrl: "https://schoonerfreedom.com/",
  },
];
