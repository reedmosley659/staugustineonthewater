import { ExperienceLandingPage } from "@/components/ExperienceLandingPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "St Augustine Nights of Lights Boat Tours",
  description:
    "Guide to St Augustine Nights of Lights boat tours — when the event runs, what to expect on the water, and how to choose a holiday lights cruise.",
  path: "/st-augustine-nights-of-lights-boat-tours",
});

export default function StAugustineNightsOfLightsBoatToursPage() {
  return (
    <ExperienceLandingPage
      path="/st-augustine-nights-of-lights-boat-tours"
      eyebrow="St. Augustine, Florida"
      title="St Augustine Nights of Lights Boat Tours"
      heroImage={{
        src: "/hero/tiki-boat.jpg",
        alt: "St Augustine Nights of Lights boat tour on the water",
      }}
      intro={
        <>
          <p>
            St Augustine Nights of Lights is one of the city&apos;s signature
            seasonal events — millions of white lights illuminating historic
            buildings, streets, and waterfront landmarks from mid-November
            through late January. Viewing the display from the water offers a
            perspective you cannot get from land alone.
          </p>
          <p>
            Nights of Lights boat tours cruise the Matanzas River and downtown
            waterfront during the evening hours, passing illuminated facades,
            the Bridge of Lions, and the glow of the historic district
            reflected on the water. Trips range from intimate sailboat outings
            to larger sightseeing vessels and specialty holiday cruises.
          </p>
          <p>
            This guide covers what to expect on St Augustine Nights of Lights
            boat tours, who they suit best, and how to plan ahead for the
            busiest weeks of the season.
          </p>
        </>
      }
      bestFor={[
        {
          title: "Holiday season visitors",
          description:
            "Travelers in St. Augustine between mid-November and late January who want a centerpiece evening activity during Nights of Lights.",
        },
        {
          title: "Families & multigenerational groups",
          description:
            "Boat tours let everyone enjoy the light display together without navigating crowded sidewalks in the historic district.",
        },
        {
          title: "Repeat St. Augustine visitors",
          description:
            "If you have seen Nights of Lights on foot, a boat tour offers a fresh angle on familiar landmarks.",
        },
        {
          title: "Couples on winter getaways",
          description:
            "Evening light displays and waterfront reflections create a festive atmosphere well suited to date nights and anniversary trips.",
        },
        {
          title: "Visitors who prefer seated viewing",
          description:
            "Boat tours provide a relaxed way to take in the lights without extended walking or standing in street crowds.",
        },
        {
          title: "Photography-minded travelers",
          description:
            "Water-level views of illuminated buildings and bridge reflections appeal to travelers who want distinctive holiday photos.",
        },
      ]}
      whatToExpect={[
        {
          title: "Seasonal availability only",
          description:
            "Nights of Lights boat tours run during the event period, typically from mid-November through late January. Schedules are limited outside this window.",
        },
        {
          title: "Evening departures",
          description:
            "Trips depart after dark when the light display is fully visible — usually between early evening and late night depending on the date and operator.",
        },
        {
          title: "Waterfront light display views",
          description:
            "Routes highlight illuminated historic buildings, the Bridge of Lions, and downtown waterfront scenery visible from the Matanzas River.",
        },
        {
          title: "High demand on peak nights",
          description:
            "Weekends, Christmas week, and New Year's period are the busiest. Advance booking is strongly recommended during peak holiday travel.",
        },
        {
          title: "Cooler evening temperatures",
          description:
            "December and January evenings on the water can feel chilly. Dress in warm layers even on mild Florida days.",
        },
        {
          title: "Varied vessel types",
          description:
            "Holiday light cruises may use sailboats, motor yachts, tiki-style boats, or larger sightseeing vessels — each with a different atmosphere and capacity.",
        },
      ]}
      howToChoose={[
        {
          title: "Book early for peak dates",
          description:
            "Popular nights sell out weeks ahead. If your travel dates fall on a weekend or holiday week, reserve as early as possible.",
        },
        {
          title: "Choose your preferred atmosphere",
          description:
            "Quiet sailing cruises feel different from social tiki boats or larger narrated tours. Pick the style that matches your group.",
        },
        {
          title: "Confirm departure time and duration",
          description:
            "Trip lengths vary. Shorter cruises suit families with younger children; longer trips allow more time on the water but extend a late evening.",
        },
        {
          title: "Review boarding location",
          description:
            "Downtown departures are convenient for dinner before or after; marina locations may require extra travel. Confirm parking in advance.",
        },
        {
          title: "Plan for crowds on land too",
          description:
            "Even if you tour by boat, downtown streets remain busy during Nights of Lights. Allow extra time for parking, boarding, and getting back to your hotel.",
        },
        {
          title: "Check weather and wind",
          description:
            "Cool breezes on the water feel colder at night. Some smaller vessels may cancel in high wind — understand the operator's weather policy.",
        },
      ]}
      faqs={[
        {
          question: "When does Nights of Lights run in St. Augustine?",
          answer:
            "Nights of Lights typically runs from mid-November through late January each year. Exact dates are announced annually by the city and local organizers — confirm the current season before you plan your trip.",
        },
        {
          question: "Are Nights of Lights boat tours available every night?",
          answer:
            "Most operators run multiple departures per week during the event, but schedules vary by company and season. Peak nights have more options; midweek dates may have fewer departures.",
        },
        {
          question: "How early should I book a Nights of Lights boat tour?",
          answer:
            "For weekends and holiday weeks, booking several weeks to a month ahead is advisable. Last-minute availability is possible on quieter midweek dates but not guaranteed.",
        },
        {
          question: "What should I wear on a holiday lights boat tour?",
          answer:
            "Dress warmly in layers. Evening temperatures drop on the water, and December–January breezes can feel significantly cooler than on land. A jacket or windbreaker is recommended.",
        },
        {
          question: "Are Nights of Lights boat tours good for children?",
          answer:
            "Many holiday light cruises welcome families. Trip length and vessel type matter — shorter tours on larger boats tend to suit younger children better than long sailing trips.",
        },
        {
          question: "Can I see the full light display from a boat?",
          answer:
            "Boat tours highlight waterfront and downtown views of the display, including illuminated buildings and bridge scenery. Some inland streets are visible from a distance, but the water perspective focuses on the riverfront glow.",
        },
        {
          question: "Do Nights of Lights boat tours include food or drinks?",
          answer:
            "It depends on the operator. Some cruises include refreshments or allow BYOB; others offer no food service. Check the listing details when booking options become available.",
        },
      ]}
    />
  );
}
