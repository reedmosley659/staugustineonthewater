export type ExperiencePage =
  | "boat_rentals_st_augustine"
  | "sunset_cruises_st_augustine"
  | "dolphin_tours_st_augustine"
  | "nights_of_lights_boat_tours";

export type BoatOperatorClickParams = {
  option_position: 1 | 2 | 3;
  option_label: string;
  destination_url: string;
  page: ExperiencePage;
};

export function trackBoatOperatorClick(params: BoatOperatorClickParams): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const gtag = (
      window as Window & { gtag?: (...args: unknown[]) => void }
    ).gtag;

    if (typeof gtag === "function") {
      gtag("event", "operator_click", params);
    }
  } catch {
    // Fail silently when analytics is unavailable.
  }
}
