export const siteName = "St Augustine On The Water";

export const siteTagline = "Water Experiences in St. Augustine, Florida";

export const siteDescription =
  "Compare St Augustine's best boat rentals, sunset cruises, dolphin tours, and seasonal water adventures.";

export const siteTitle =
  "St Augustine Boat Rentals, Sunset Cruises & Water Experiences | St Augustine On The Water";

export const affiliateDisclosure =
  "Some featured experiences may earn me a commission at no extra cost to you. I only feature experiences I believe travelers will find useful.";

export function getSiteUrl(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}
