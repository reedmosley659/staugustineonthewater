import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { WhyBookWithUs } from "@/components/WhyBookWithUs";
import { About } from "@/components/About";
import { HomepageGuides } from "@/components/HomepageGuides";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "St Augustine Boat Rentals, Sunset Cruises & Water Experiences",
  description:
    "Compare St Augustine\u2019s best boat rentals, sunset cruises, dolphin tours, and seasonal water adventures.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <WhyBookWithUs />
      <About />
      <HomepageGuides />
      <Contact />
      <Footer />
    </>
  );
}
