import Link from "next/link";
import { ExperienceLandingPage } from "@/components/ExperienceLandingPage";
import { createPageMetadata } from "@/lib/metadata";
import { dolphinTourOperators } from "@/lib/dolphin-tour-operators";

export const metadata = createPageMetadata({
  title: "St Augustine Dolphin Tours | Compare Tours & Book Direct",
  description:
    "Compare St Augustine dolphin tours for families, wildlife enthusiasts, and first-time visitors. Find the right guided cruise and check pricing and availability.",
  path: "/dolphin-tours-st-augustine",
});

export default function StAugustineDolphinToursPage() {
  return (
    <ExperienceLandingPage
      path="/dolphin-tours-st-augustine"
      eyebrow="St. Augustine, Florida"
      title="St Augustine Dolphin Tours"
      lastUpdated="June 2026"
      operators={dolphinTourOperators}
      operatorPage="dolphin_tours_st_augustine"
      operatorSectionTitle="Top Dolphin Tour Options in St Augustine"
      operatorSectionSubtitle="Three options across different price points and group sizes — compare what works for your group, then check availability."
      heroImage={{
        src: "/hero/Dolphin-cruise.jpg",
        alt: "St Augustine dolphin tour on the water",
      }}
      intro={
        <>
          <p>
            St Augustine dolphin tours take visitors into the estuaries, river
            channels, and coastal waters where Atlantic bottlenose dolphins
            feed and travel. The Matanzas River, Salt Run, and nearby
            Intracoastal stretches are common search areas for local tour
            operators.
          </p>
          <p>
            Dolphin-watching trips are typically guided excursions on smaller
            boats or catamarans with a captain who knows where dolphins are
            often spotted — though wildlife sightings are never guaranteed.
            Most tours combine dolphin watching with commentary on St.
            Augustine&apos;s history, ecology, and waterfront landmarks.
          </p>
          <p>
            This guide covers what St Augustine dolphin tours typically involve,
            who they work best for, and how they compare to other on-the-water
            options. Prefer flexibility and your own schedule? Compare a{" "}
            <Link
              href="/boat-rentals-st-augustine"
              className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
            >
              private boat rental
            </Link>
            . Looking for an evening experience? See{" "}
            <Link
              href="/sunset-cruises-st-augustine"
              className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
            >
              St Augustine sunset cruises
            </Link>{" "}
            or, during the holiday season,{" "}
            <Link
              href="/nights-of-lights-boat-tours"
              className="text-teal underline underline-offset-2 transition-colors hover:text-navy"
            >
              Nights of Lights boat tours
            </Link>
            .
          </p>
        </>
      }
      bestFor={[
        {
          title: "Wildlife lovers",
          description:
            "Dolphin tours appeal to travelers who want to observe marine life in natural habitat rather than at a captive facility.",
        },
        {
          title: "Families with school-age children",
          description:
            "Kids often enjoy spotting dolphins from the boat. Many tours are designed with families in mind and run at a moderate pace.",
        },
        {
          title: "Nature-focused visitors",
          description:
            "Beyond dolphins, tours often pass marshland, bird habitat, and scenic stretches of the estuary — a good fit for eco-minded travelers.",
        },
        {
          title: "Shorter activity windows",
          description:
            "Most dolphin tours run one to two hours, making them easy to fit into a half-day itinerary alongside downtown sightseeing.",
        },
        {
          title: "Visitors who want local context",
          description:
            "Captains and guides often share stories about the area's ecology and history while searching for dolphins — adding depth to the experience.",
        },
        {
          title: "Photographers with patience",
          description:
            "Dolphins move quickly and appearances are unpredictable. Travelers who enjoy wildlife photography often find these trips rewarding when conditions cooperate.",
        },
      ]}
      whatToExpect={[
        {
          title: "One- to two-hour excursions",
          description:
            "Most St Augustine dolphin tours last 60 to 120 minutes, including time to search multiple areas where dolphins are commonly seen.",
        },
        {
          title: "Wildlife sightings are not guaranteed",
          description:
            "Dolphins are wild animals. Operators know productive areas, but sightings depend on tides, weather, food sources, and animal behavior on any given day.",
        },
        {
          title: "Smaller boats and catamarans",
          description:
            "Dolphin tours typically use vessels sized for 6 to 20 passengers, offering good viewing angles and a more personal feel than large sightseeing boats.",
        },
        {
          title: "Estuary and river routes",
          description:
            "Trips often explore the Matanzas River, Salt Run, and Intracoastal channels — calmer water that suits both wildlife and comfortable cruising.",
        },
        {
          title: "Captain commentary",
          description:
            "Expect narration about local ecology, dolphin behavior, and St. Augustine landmarks along the route. Quality and depth vary by operator.",
        },
        {
          title: "Morning and midday departures",
          description:
            "Many tours run during daylight hours when visibility is best. Morning trips can be calmer; midday trips suit flexible schedules.",
        },
      ]}
      bestMonths={[
        {
          title: "Spring — March through May",
          description:
            "Water temps rise from about 65°F to 78°F as dolphins become more active with increasing food availability. Air temps of 70–83°F make for comfortable conditions. A strong window before summer crowds peak.",
        },
        {
          title: "Summer — June through August",
          description:
            "Water reaches 82–85°F — the warmest of the year. Dolphin feeding activity tends to be highest in summer. Morning departures often have the calmest estuary conditions before afternoon sea breezes build.",
        },
        {
          title: "Fall — September & October",
          description:
            "Water stays warm at 77–82°F and dolphin activity remains high. Air temps ease to 80–87°F with lower humidity than summer — often excellent conditions with fewer crowds.",
        },
        {
          title: "Winter — November through February",
          description:
            "Water cools to 60–68°F. Dolphins slow down but remain present in the area year-round. Sightings are less predictable but possible on any day. Air temps of 64–72°F are mild for being on the water.",
        },
      ]}
      bestMonthsTitle="Best Months for Dolphin Tours Near St Augustine"
      howToChoose={[
        {
          title: "Set realistic wildlife expectations",
          description:
            "Choose a tour for the overall experience — scenery, commentary, time on the water — not only for a guaranteed dolphin encounter.",
        },
        {
          title: "Compare trip length",
          description:
            "Shorter tours fit tight schedules; longer trips allow more time to search different areas and may improve sighting chances without promising results.",
        },
        {
          title: "Check passenger limits",
          description:
            "Smaller groups mean easier viewing and less crowding at the rail. If a close-up experience matters, look for lower-capacity boats.",
        },
        {
          title: "Review departure point",
          description:
            "Launch location affects travel time and route. Confirm parking, boarding procedures, and how early you should arrive.",
        },
        {
          title: "Ask about age suitability",
          description:
            "Some boats have minimum age requirements or recommend certain trips for younger children. Verify policies if traveling with toddlers or infants.",
        },
        {
          title: "Read cancellation and weather policies",
          description:
            "Wind and rough water can affect smaller vessels more than larger ones. Understand how rescheduling works before you pay.",
        },
      ]}
      faqs={[
        {
          question: "Are dolphin sightings guaranteed on St Augustine tours?",
          answer:
            "No. Dolphins are wild animals and sightings depend on conditions on the day of your trip. Reputable operators know productive areas but cannot guarantee encounters.",
        },
        {
          question: "What type of dolphins live near St. Augustine?",
          answer:
            "Atlantic bottlenose dolphins are the species most commonly seen on tours in the Matanzas River, Salt Run, and nearby coastal waters.",
        },
        {
          question: "How long do dolphin tours usually last?",
          answer:
            "Most St Augustine dolphin tours run about one to two hours. Shorter trips focus on nearby search areas; longer trips may cover more ground along the estuary.",
        },
        {
          question: "Are dolphin tours safe for young children?",
          answer:
            "Many tours welcome children, and operators provide life jackets. Age recommendations and boat size vary, so check with the operator if you are traveling with very young kids.",
        },
        {
          question: "When is the best time of day for dolphin tours?",
          answer:
            "Dolphins can appear at various times, and there is no single best hour. Morning trips often have calmer water; midday and afternoon trips are widely available year-round.",
        },
        {
          question: "Can I take photos on a dolphin tour?",
          answer:
            "Yes — photography is encouraged. Bring a camera or phone with a strap, and be ready for quick movements. Dolphins may surface briefly and unpredictably.",
        },
        {
          question: "What should I bring on a dolphin tour?",
          answer:
            "Sunscreen, sunglasses, a hat, and a light layer for breeze are common essentials. Some travelers bring binoculars. Check whether the operator allows food or drinks on board.",
        },
        {
          question: "Are dolphin tours worth it even if we don't see dolphins?",
          answer:
            "In most cases, yes. The trip covers scenic estuary and river routes with nature commentary, even on days when dolphins stay hidden. Operators put real effort into searching productive areas. That said, go for the overall water experience rather than expecting a guaranteed sighting — that way you're set up to enjoy the trip regardless.",
        },
        {
          question:
            "Is a dolphin tour or a private boat rental better for seeing dolphins?",
          answer:
            "A guided dolphin tour is typically better for wildlife sightings — captains know the productive search areas and the trip is specifically designed around finding dolphins. A private boat rental gives you flexibility but without a guide's local expertise. If seeing dolphins is the main goal, a guided tour is the stronger choice.",
        },
      ]}
    />
  );
}
