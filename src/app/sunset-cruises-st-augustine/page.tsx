import { ExperienceLandingPage } from "@/components/ExperienceLandingPage";
import { createPageMetadata } from "@/lib/metadata";
import { sunsetCruiseOperators } from "@/lib/sunset-cruise-operators";

export const metadata = createPageMetadata({
  title: "St Augustine Sunset Cruises",
  description:
    "Discover St Augustine sunset cruises along the Matanzas River and Atlantic coast. Learn what to expect, best times to go, and how to choose the right cruise.",
  path: "/sunset-cruises-st-augustine",
});

export default function StAugustineSunsetCruisesPage() {
  return (
    <ExperienceLandingPage
      path="/sunset-cruises-st-augustine"
      eyebrow="St. Augustine, Florida"
      title="St Augustine Sunset Cruises"
      operators={sunsetCruiseOperators}
      operatorPage="sunset_cruises_st_augustine"
      operatorSectionTitle="Top Sunset Cruise Options in St Augustine"
      operatorSectionSubtitle="Three options for different group styles — compare what fits your evening, then check availability on the operator's site."
      heroImage={{
        src: "/hero/sunset-cruise.jpg",
        alt: "St Augustine sunset cruise near historic waterfront",
      }}
      intro={
        <>
          <p>
            St Augustine sunset cruises offer some of the most memorable views
            in Northeast Florida — golden light over the Matanzas River, the
            Bridge of Lions silhouetted against the sky, and the historic
            waterfront glowing as day turns to evening.
          </p>
          <p>
            Sunset cruises in the area range from intimate sailboat trips to
            larger sightseeing vessels and specialty boats like tiki-style
            cruisers. Most depart from the downtown waterfront or nearby
            marinas, making them easy to pair with dinner or an evening stroll
            through the historic district.
          </p>
          <p>
            Use this guide to understand what St Augustine sunset cruises
            typically include, who they suit best, and what to consider before
            you book.
          </p>
        </>
      }
      bestFor={[
        {
          title: "Couples & date nights",
          description:
            "Evening light and waterfront scenery make sunset cruises a natural choice for romantic outings or special occasions in St. Augustine.",
        },
        {
          title: "First-time visitors",
          description:
            "A sunset cruise gives newcomers a relaxed introduction to the city's skyline and waterways without a full-day commitment."
        },
        {
          title: "Photography enthusiasts",
          description:
            "The combination of historic architecture, bridge views, and coastal sunset color makes these trips popular with photographers.",
        },
        {
          title: "Groups celebrating an event",
          description:
            "Birthdays, anniversaries, and reunions often work well on shared sunset cruises where everyone enjoys the same view together.",
        },
        {
          title: "Travelers who prefer guided experiences",
          description:
            "If you would rather relax and let a captain handle navigation, a scheduled sunset cruise removes the planning from your evening.",
        },
        {
          title: "Visitors without a rental car",
          description:
            "Downtown departures mean many sunset cruises are reachable on foot or by rideshare from hotels in the historic area.",
        },
      ]}
      whatToExpect={[
        {
          title: "Trips timed around sunset",
          description:
            "Departure times shift throughout the year to align with sunset — typically 60 to 90 minutes on the water, depending on the vessel and route.",
        },
        {
          title: "Waterfront and bridge views",
          description:
            "Most routes highlight the downtown skyline, Castillo de San Marcos from the water, and the Bridge of Lions as daylight fades.",
        },
        {
          title: "Sailboats, catamarans, and motor vessels",
          description:
            "St. Augustine offers a mix of sailing and powered sunset cruises. Sailing trips feel quieter and more traditional; motor cruises may cover more ground in less time.",
        },
        {
          title: "BYOB or onboard refreshments",
          description:
            "Some operators allow you to bring drinks and snacks; others sell beverages on board. Policies vary, so check before you go.",
        },
        {
          title: "Casual, relaxed atmosphere",
          description:
            "Sunset cruises are generally laid-back — dress comfortably, bring a light layer for evening breeze, and expect a social but not loud environment.",
        },
        {
          title: "Seasonal demand peaks",
          description:
            "Spring break, summer weekends, and holiday weeks are the busiest. Shoulder seasons often mean smaller crowds and easier availability.",
        },
      ]}
      howToChoose={[
        {
          title: "Pick your vessel style",
          description:
            "Sailboats offer a classic, quieter feel. Tiki boats and pontoon-style cruisers tend to be more social. Choose based on the mood you want for your evening.",
        },
        {
          title: "Check departure location",
          description:
            "Confirm where the boat leaves from and how you will get there. Downtown departures are convenient; marina pickups may require extra travel time.",
        },
        {
          title: "Review group size and capacity",
          description:
            "Smaller boats feel more personal; larger vessels may have more amenities but less intimacy. Match the experience to your group size and preferences.",
        },
        {
          title: "Ask about the route",
          description:
            "Some cruises stay on the Matanzas River; others venture toward Salt Run or the inlet. Route affects the views you will see and how much open water you encounter.",
        },
        {
          title: "Consider accessibility needs",
          description:
            "Boarding can involve steps, docks, and uneven surfaces. Contact the operator in advance if anyone in your group has mobility concerns.",
        },
        {
          title: "Plan around dinner plans",
          description:
            "Many travelers book sunset cruises before or after a downtown meal. Leave buffer time for parking and boarding — boats generally depart on schedule.",
        },
      ]}
      faqs={[
        {
          question: "What time do St Augustine sunset cruises depart?",
          answer:
            "Departure times change with the seasons to match sunset. In summer, trips may leave around 7:00–8:00 PM; in winter, earlier afternoon or early evening departures are common. Always confirm the exact time for your date when booking.",
        },
        {
          question: "How long do sunset cruises last?",
          answer:
            "Most St Augustine sunset cruises run about 60 to 90 minutes on the water. Total time including boarding and return to the dock is usually a bit longer.",
        },
        {
          question: "Can I bring my own drinks on a sunset cruise?",
          answer:
            "Policies vary by operator. Some cruises welcome BYOB; others sell drinks on board or restrict outside beverages. Check the rules for your specific trip before you arrive.",
        },
        {
          question: "Are sunset cruises good for children?",
          answer:
            "Many family-friendly sunset cruises welcome children, but trip length and atmosphere differ by vessel. Smaller sailboats may be better suited to older kids; larger sightseeing boats often accommodate all ages.",
        },
        {
          question: "What should I wear on a sunset cruise?",
          answer:
            "Dress in comfortable layers. Evenings on the water can feel cooler than on land, especially with breeze. Flat, non-slip shoes are recommended for boarding.",
        },
        {
          question: "What happens if it rains or is cloudy?",
          answer:
            "Light clouds can still produce beautiful sunsets, but thunderstorms may cause cancellations or rescheduling. Most operators have weather policies — confirm terms when you book.",
        },
        {
          question: "Do sunset cruises run year-round?",
          answer:
            "Yes, sunset cruises operate throughout the year in St. Augustine, though schedules and frequency may vary by season. Holiday weeks and summer tend to have the most daily departures.",
        },
      ]}
    />
  );
}
