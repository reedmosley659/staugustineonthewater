/**
 * Nights of Lights cruise operators for the Nights of Lights money page.
 * Temporary direct operator URLs — swap each bookingUrl for the approved
 * FHDN affiliate link when available. No other fields need to change.
 */
import type { ExperienceOperator } from "@/lib/operator-types";

export const nightsOfLightsOperators: ExperienceOperator[] = [
  {
    position: 1,
    trackingLabel: "best_nights_of_lights_florida_water_tours",
    label: "Best Overall Nights of Lights Cruise",
    summary:
      "Best overall combination of review quality, booking UX, and Nights of Lights product fit.",
    bestFor: "Families, couples, general visitors",
    duration: "~90 minutes",
    groupSize: "Up to 8 on some offerings",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Excellent reputation",
      "Direct online booking",
      "Seasonal specialty product",
      "High conversion potential",
    ],
    bookingUrl:
      "https://floridawatertour.com/sunset-nights-of-lights-cruise/",
  },
  {
    position: 2,
    trackingLabel: "best_nights_of_lights_fury",
    label: "Best Premium Nights of Lights Experience",
    summary:
      "Premium festive harbor cruise with entertainment-focused experience.",
    bestFor: "Groups, festive visitors, premium buyers",
    duration: "~90 minutes",
    groupSize: "Large group vessel",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Premium experience",
      "Strong booking UX",
      "Entertainment-focused",
      "Recognizable operator",
    ],
    bookingUrl: "https://furystaugustine.com/",
  },
  {
    position: 3,
    trackingLabel: "best_nights_of_lights_red_boat",
    label: "Best Classic Nights of Lights Cruise",
    summary:
      "Straightforward highly-rated local Nights of Lights option with direct booking.",
    bestFor: "Visitors wanting a focused local experience",
    duration: "~60–90 minutes",
    groupSize: "Shared vessel",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Strong local review reputation",
      "Direct booking available",
      "Focused Nights of Lights experience",
      "Good conversion fit",
    ],
    bookingUrl: "https://redboattours.com/",
  },
];
