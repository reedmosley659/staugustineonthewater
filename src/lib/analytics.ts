export type BoatOperatorClickParams = {
  option_position: 1 | 2 | 3;
  option_label: string;
  destination_url: string;
  page: "boat_rentals_st_augustine";
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
      gtag("event", "boat_operator_click", params);
    }
  } catch {
    // Fail silently when analytics is unavailable.
  }
}
