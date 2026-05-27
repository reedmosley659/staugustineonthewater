/**
 * Shared operator type used across all experience money pages.
 * Used by boat rentals, sunset cruises, dolphin tours, and Nights of Lights.
 */
export type ExperienceOperator = {
  position: 1 | 2 | 3;
  trackingLabel: string;
  label: string;
  summary: string;
  bestFor: string;
  duration?: string;
  groupSize?: string;
  captained?: boolean;
  captainFeeExtra?: boolean;
  highlights: string[];
  /** Temporary direct operator URL — swap for FHDN affiliate link when approved. */
  bookingUrl: string;
  /** Optional note displayed under the CTA button. */
  linkNote?: string;
};
