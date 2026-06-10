export const siteName = "St Augustine On The Water";

export const siteTagline = "Water Experiences in St. Augustine, Florida";

export const siteDescription =
  "Compare St Augustine's best boat rentals, sunset cruises, dolphin tours, and seasonal water adventures.";

export const siteTitle =
  "St Augustine Boat Rentals, Sunset Cruises & Water Experiences | St Augustine On The Water";

export const affiliateDisclosure =
  "Some featured experiences may earn me a commission at no extra cost to you. I only feature experiences I believe travelers will find useful.";

export const whyTrustUsText =
  "Experiences on this site are selected based on operator reputation, trip quality, and how well each option serves different traveler types — families, couples, first-timers, and celebration groups. I research available options and update recommendations when better fits emerge. Links may earn a commission at no extra cost to you, but recommendations prioritize traveler usefulness over commission rates.";

export function getSiteUrl(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}
