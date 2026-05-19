import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { WhyBookWithUs } from "@/components/WhyBookWithUs";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <WhyBookWithUs />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
