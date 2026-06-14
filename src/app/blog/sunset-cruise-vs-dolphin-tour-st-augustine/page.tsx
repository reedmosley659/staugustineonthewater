import { SunsetVsDolphinGuide } from "@/components/SunsetVsDolphinGuide";
import { createPageMetadata } from "@/lib/metadata";
import { blogRoutes } from "@/lib/routes";

export const metadata = createPageMetadata({
  title:
    "Sunset Cruise vs Dolphin Tour in St. Augustine: Which to Choose? (2026)",
  description:
    "Choosing between a St. Augustine sunset cruise and dolphin tour? Quick recommendation: families and wildlife lovers → dolphin tour, adults → 21+ sunset cruise with live music and drinks.",
  path: blogRoutes.sunsetVsDolphin,
});

export default function SunsetVsDolphinPage() {
  return <SunsetVsDolphinGuide />;
}
