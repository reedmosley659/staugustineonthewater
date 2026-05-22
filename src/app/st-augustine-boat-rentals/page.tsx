import { ExperienceLandingPage } from "@/components/ExperienceLandingPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "St Augustine Boat Rentals",
  description:
    "Planning St Augustine boat rentals? Compare pontoon and private boat options on the Matanzas River and Intracoastal, plus tips on timing, routes, and what to bring.",
  path: "/st-augustine-boat-rentals",
});

export default function StAugustineBoatRentalsPage() {
  return (
    <ExperienceLandingPage
      path="/st-augustine-boat-rentals"
      eyebrow="St. Augustine, Florida"
      title="St Augustine Boat Rentals"
      heroImage={{
        src: "/hero/pontoon-rental.jpg",
        alt: "Pontoon boat rental on the water near St. Augustine",
      }}
      intro={
        <>
          <p>
            Renting a boat is one of the most flexible ways to explore St.
            Augustine from the water. Instead of following a fixed tour route,
            you set the pace — cruising the Matanzas River, drifting past the
            downtown waterfront, or heading toward the Intracoastal Waterway
            with your own group.
          </p>
          <p>
            St Augustine boat rentals typically include pontoon boats and
            smaller powerboats suited for families, friend groups, and visitors
            who want a half-day or full-day on the water. Most rentals launch
            from marinas and ramps on the Matanzas River, Salt Run, or nearby
            Intracoastal access points — all within a short drive of historic
            downtown.
          </p>
          <p>
            This guide covers what to expect, who rentals work best for, and
            how to compare options before booking listings appear on this site.
          </p>
        </>
      }
      bestFor={[
        {
          title: "Families & friend groups",
          description:
            "Pontoon boats offer open deck space, shade options, and room for coolers — a comfortable setup for groups who want a relaxed day on the water.",
        },
        {
          title: "Visitors who want flexibility",
          description:
            "If you prefer choosing your own route and schedule instead of a guided tour, a rental gives you freedom to explore at your own pace.",
        },
        {
          title: "Multi-generational trips",
          description:
            "Boat rentals work well when travelers of different ages want to share one experience without steep walking or long transit times.",
        },
        {
          title: "Repeat visitors",
          description:
            "Travelers who have already seen downtown by foot often use a rental to view the skyline, Bridge of Lions, and waterfront from a new angle.",
        },
        {
          title: "Casual sightseeing days",
          description:
            "Rentals suit low-key plans — anchoring for a swim, picnicking on board, or slowly cruising along scenic stretches of the river.",
        },
        {
          title: "Short-stay vacationers",
          description:
            "If you have one free afternoon in St. Augustine, a rental can cover a lot of waterfront in a few hours without committing to a full tour.",
        },
      ]}
      whatToExpect={[
        {
          title: "Half-day and full-day options",
          description:
            "Most rental companies offer blocks of four to eight hours. Shorter trips work for a river cruise and lunch stop; longer trips allow time to reach quieter stretches of the Intracoastal.",
        },
        {
          title: "Pontoon and deck boats",
          description:
            "Pontoon boats are the most common rental type in the area — stable, easy to board, and well suited to calm river and Intracoastal conditions.",
        },
        {
          title: "Basic orientation before launch",
          description:
            "Expect a pre-departure briefing covering local speed zones, no-wake areas, and recommended routes. Operators typically provide life jackets and basic safety equipment.",
        },
        {
          title: "Scenic river and waterfront views",
          description:
            "Popular routes pass the St. Augustine skyline, Anastasia Island shoreline, and marsh-lined sections of the Matanzas River — especially photogenic in morning and late-afternoon light.",
        },
        {
          title: "Bring-your-own provisions",
          description:
            "Many renters pack coolers, snacks, and sunscreen. Alcohol policies vary by operator, so confirm rules when you book.",
        },
        {
          title: "Weather-dependent scheduling",
          description:
            "Wind, thunderstorms, and rough conditions can affect departures, especially during summer afternoons and hurricane season. Flexible travel dates help.",
        },
      ]}
      howToChoose={[
        {
          title: "Match boat size to your group",
          description:
            "Check passenger capacity and weight limits before booking. A boat that fits your group comfortably makes the day safer and more enjoyable.",
        },
        {
          title: "Decide on half-day vs. full-day",
          description:
            "Half-day rentals suit first-time boaters or families with younger children. Full-day rentals make sense if you want time to explore farther along the Intracoastal.",
        },
        {
          title: "Review launch location and parking",
          description:
            "Confirm where you pick up the boat and whether parking is available on-site. Launch location affects how quickly you reach downtown views versus open water.",
        },
        {
          title: "Understand licensing requirements",
          description:
            "Florida boating regulations apply. Some operators require renters to hold a valid boating safety credential or complete an on-site orientation — ask before you arrive.",
        },
        {
          title: "Compare cancellation policies",
          description:
            "Weather can change plans quickly on the coast. Look for clear rescheduling or refund terms before you commit to a date.",
        },
        {
          title: "Check what is included in the rate",
          description:
            "Fuel, cleaning fees, damage deposits, and optional add-ons like tubes or lily pads vary by company. Total cost matters more than the base hourly rate alone.",
        },
      ]}
      faqs={[
        {
          question: "Do I need a boating license to rent a boat in St. Augustine?",
          answer:
            "Florida requires operators born on or after January 1, 1988 to complete an approved boating safety course and carry proof of completion. Rental companies may have additional requirements, so confirm directly with the operator before booking.",
        },
        {
          question: "What type of boat is most popular for rentals?",
          answer:
            "Pontoon boats are the most common rental in the St. Augustine area. They are stable, spacious, and well suited to the Matanzas River and nearby Intracoastal routes.",
        },
        {
          question: "Can I take a rental boat to downtown St. Augustine?",
          answer:
            "Many renters cruise along the Matanzas River with views of the downtown waterfront and Bridge of Lions. Specific routes, no-wake zones, and docking rules depend on the operator and current conditions — follow the briefing you receive at launch.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "Weekends, holidays, and peak summer weeks fill up early. Booking several weeks ahead improves your chances of getting the boat size and time slot you want.",
        },
        {
          question: "Are boat rentals safe for children?",
          answer:
            "Pontoon rentals are popular with families, and operators provide life jackets. Children should wear properly fitted jackets at all times on the water, and adults should follow the operator's safety guidelines.",
        },
        {
          question: "What happens if the weather is bad on my rental day?",
          answer:
            "Coastal weather can shift quickly. Most operators monitor conditions and may reschedule or refund based on their policy. Review cancellation terms when you book and stay in contact if storms are forecast.",
        },
        {
          question: "Can I swim from a rental boat?",
          answer:
            "Some renters anchor in permitted areas for swimming, but rules vary by location and operator. Ask during your briefing and only enter the water where it is allowed and conditions are calm.",
        },
      ]}
    />
  );
}
