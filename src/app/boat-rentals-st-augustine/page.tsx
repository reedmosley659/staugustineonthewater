import { BoatRentalsMoneyPage } from "@/components/BoatRentalsMoneyPage";
import { createPageMetadata } from "@/lib/metadata";
import { experienceRoutes } from "@/lib/routes";

export const metadata = createPageMetadata({
  title: "Boat Rentals in St Augustine | Private Charters, Pontoons & Cruises",
  description:
    "Compare St Augustine boat rentals, private charters, pontoon-style cruises, and captained boat experiences for families, groups, and celebrations.",
  path: experienceRoutes.boatRentals,
});

export default function BoatRentalsStAugustinePage() {
  return <BoatRentalsMoneyPage />;
}
