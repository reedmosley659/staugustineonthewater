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
      "Consistently well-reviewed operator with a dedicated Nights of Lights cruise and easy online booking.",
    bestFor: "Families, couples, general visitors",
    duration: "~90 minutes",
    groupSize: "Up to 8 on some offerings",
    captained: true,
    captainFeeExtra: false,
    highlights: [
      "Known for smaller-group Nights of Lights experiences — less of a crowd scene",
      "Specific Nights of Lights cruise product, not just a standard tour with lights in the background",
      "Consistently well-reviewed during the holiday season",
      "Good fit for families or couples who want a quieter way to see the lights from the water",
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
      "Large catamaran with a festive atmosphere — drinks, music, bigger crowd energy",
      "Better suited for groups who want the social side of a holiday cruise, not just the lights",
      "Stable vessel, which is worth considering on cooler December nights",
      "More entertainment-forward than a straightforward lights tour",
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
      "Smaller local operator — a different feel from the bigger cruise companies",
      "Focused on the Nights of Lights experience specifically, not a repurposed year-round tour",
      "Consistently positive reviews from people who wanted something that felt more personal",
      "Good fit if you'd rather have a lower-key experience without a big-boat crowd",
    ],
    bookingUrl: "https://redboattours.com/",
  },
];
