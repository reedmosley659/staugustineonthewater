import { BoatRentalCostGuide } from "@/components/BoatRentalCostGuide";
import { createPageMetadata } from "@/lib/metadata";
import { blogRoutes } from "@/lib/routes";

export const metadata = createPageMetadata({
  title:
    "How Much Does a Boat Rental Cost in St. Augustine? (2026 Pricing Guide)",
  description:
    "Learn typical St. Augustine boat rental costs, including pontoons, captained charters, private boat days, sunset cruises, dolphin tours, and shared water experiences.",
  path: blogRoutes.boatRentalCost,
});

export default function BoatRentalCostPage() {
  return <BoatRentalCostGuide />;
}
