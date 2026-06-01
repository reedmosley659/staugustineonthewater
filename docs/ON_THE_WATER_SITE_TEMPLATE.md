# On The Water Site Template

> A repeatable blueprint for building FHDN affiliate booking sites in the `[City] On The Water` format.
> Based on everything built for St Augustine On The Water.

---

## Business model

Each site earns affiliate commissions by routing visitors to FHDN-partnered booking pages for water-based tourism experiences. Conversion to booking clicks is the primary metric — SEO traffic without clicks earns nothing.

**Priority revenue categories (ordered by commission potential):**
1. Private boat rentals
2. Captained charters
3. Pontoon rentals
4. Sunset cruises
5. Dolphin / wildlife tours
6. Fishing charters
7. Seasonal experiences (e.g. Nights of Lights)
8. Other local water experiences

---

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | Read `node_modules/next/dist/docs/` before writing code — APIs change across versions |
| Language | TypeScript (strict) | |
| Styling | Tailwind CSS v4 | Config via `@theme inline` in `globals.css`, no `tailwind.config.ts` |
| Fonts | Cormorant Garamond + Source Sans 3 | Google Fonts via `next/font/google` |
| Hosting | Vercel | Env vars set in Vercel dashboard |
| Analytics | Google Analytics 4 | Loaded client-side only in production |
| Images | Next.js `<Image>` | WebP preferred, descriptive alt text required |

---

## Site architecture

```
src/
  app/
    layout.tsx                          ← Root layout: fonts, GA, global schema
    page.tsx                            ← Homepage
    opengraph-image.tsx                 ← Auto OG image generation
    sitemap.ts                          ← Auto-generated sitemap.xml
    robots.ts                           ← Auto-generated robots.txt
    [experience]-[city]/
      page.tsx                          ← Money page (one per category)
    privacy-policy/
      page.tsx
    terms/
      page.tsx
  components/
    Header.tsx                          ← Homepage header (overlay on hero)
    Hero.tsx                            ← Homepage hero (4-panel grid)
    FeaturedCategories.tsx              ← Homepage experience category cards
    WhyBookWithUs.tsx                   ← Trust/EEAT section
    About.tsx                           ← About the guide (navy bg)
    Contact.tsx                         ← Email contact
    Footer.tsx                          ← Sitewide footer with links + disclosure
    ExperienceLandingPage.tsx           ← Reusable money page template
    BoatRentalsMoneyPage.tsx            ← Custom boat rentals page (built before template)
    OperatorCards.tsx                   ← Reusable operator comparison card grid
    MobileStickyCTA.tsx                 ← Sticky bottom bar (mobile only, scroll-aware)
    TrackedOperatorLink.tsx             ← GA4-tracked affiliate link with rel="sponsored"
    Button.tsx                          ← Shared CTA button
    LegalPageShell.tsx                  ← Wrapper for Privacy Policy + Terms
    StructuredData.tsx                  ← Global Organization + WebSite schema
    GoogleAnalytics.tsx                 ← GA4 script (production only)
  lib/
    site.ts                             ← siteName, siteTitle, siteDescription, affiliateDisclosure, getSiteUrl()
    routes.ts                           ← Canonical route constants + legacy redirect map
    metadata.ts                         ← createRootMetadata() + createPageMetadata()
    analytics.ts                        ← ExperiencePage type + trackBoatOperatorClick()
    operator-types.ts                   ← Shared ExperienceOperator type
    experience-pages.ts                 ← experiencePages array + getRelatedPages()
    [experience]-operators.ts           ← Operator data per money page
```

---

## Design tokens

Defined in `src/app/globals.css` via `@theme inline`. Copy this block for every new site, adjusting hues for brand fit.

```css
:root {
  --sand: #f7f4ef;        /* warm off-white, section bg */
  --sand-dark: #ebe6dc;   /* border color, dividers */
  --navy: #0f1c2e;        /* primary text + dark sections */
  --navy-light: #1a2f45;  /* hover states */
  --teal: #2d5a6b;        /* eyebrow labels, links, accents */
  --teal-muted: #4a7d8f;  /* softer accent */
  --seafoam: #7ba3b0;     /* light accent */
  --gold: #b8956a;        /* CTAs, bullet dots, decorative */
  --gold-light: #d4b896;  /* CTA hover */
  --mist: #e8eef0;        /* icon bg, subtle fill */
}
```

**Section background alternating pattern:**
- White → Sand → White → Sand (alternating for visual rhythm)
- When OperatorCards (sand) is injected between intro and content sections, shift the alternation accordingly (handled automatically in `ExperienceLandingPage`)

**Fonts:**
- Display (headings): `--font-display` → Cormorant Garamond, weights 400/500/600/700
- Body: `--font-sans` → Source Sans 3, weights 300/400/500/600/700

---

## Required pages

| Page | Path | Priority | Notes |
|---|---|---|---|
| Homepage | `/` | 1.0 | Routes visitors to money pages |
| Boat Rentals | `/boat-rentals-[city]` | 0.8 | Highest-commission category |
| Sunset Cruises | `/sunset-cruises-[city]` | 0.8 | |
| Dolphin Tours | `/dolphin-tours-[city]` | 0.8 | |
| Seasonal (e.g. Nights of Lights) | `/[event-name]-boat-tours` | 0.8 | Adjust for city |
| Privacy Policy | `/privacy-policy` | 0.3 | Required for legal + Google |
| Terms of Use | `/terms` | 0.3 | Required for legal + Google |

**Fishing charters** is a priority revenue category but has not yet been built as a money page — add it next.

### Route naming convention

Money page slugs follow the pattern: `/[experience-keyword]-[city-name]`

Example: `/boat-rentals-st-augustine` (not `/st-augustine-boat-rentals`)

**Why:** Puts the transactional keyword first, which better matches how users search and how search engines weight slug tokens.

**Legacy routes** (city-first format) should be permanently redirected (301) in `next.config.ts`:

```ts
async redirects() {
  return [
    {
      source: "/st-augustine-boat-rentals",
      destination: "/boat-rentals-st-augustine",
      permanent: true,
    },
    // ... one per money page
  ];
}
```

---

## Homepage structure

The homepage routes visitors to money pages within one click and three seconds.

```
<Header />           ← Absolute overlay on hero; logo + nav links to money pages
<Hero />             ← 4-panel image grid with dark overlay; H1 + two CTAs
<FeaturedCategories />  ← Category cards linking directly to money pages
<WhyBookWithUs />    ← EEAT trust section (first-person, industry credibility)
<About />            ← Navy bg; short "what this guide is" statement
<Contact />          ← Email contact
<Footer />           ← Links to all money pages + legal pages + disclosure
```

### Hero section

- Layout: 2×2 grid of full-bleed photos behind a dark gradient overlay
- Photos: 4 images representing different experiences (sunset, dolphin tour, boat rental, specialty boat)
- H1: `[City] Water Experiences, Boat Rentals & Cruises`
- Subheadline: benefit-driven, covers the 4 main categories
- Primary CTA: `Compare Water Experiences` → anchors to `#experiences` (FeaturedCategories)
- Secondary CTA: `Find Your Perfect Boat Day` → anchors to `#why-us`
- Scroll indicator (desktop only)
- Header is positioned `absolute` over hero so photo shows behind it

### Header nav links

Include direct links to the top two money pages in the nav to reduce one extra click for high-intent visitors:

```
Experiences (→ #experiences)
Why Us (→ #why-us)
Boat Rentals (→ /boat-rentals-[city])
Sunset Cruises (→ /sunset-cruises-[city])
```

Mobile: `<details>/<summary>` hamburger menu (no JS required).

### FeaturedCategories section

- `id="experiences"` (anchor target from hero CTA)
- 2×2 card grid
- Each card: icon, title, description, CTA label with arrow
- CTA labels use action verbs: `Compare Boat Rentals`, `Compare Sunset Cruises`, `View Seasonal Cruises`
- Cards link directly to money pages — no intermediate pages

### WhyBookWithUs section

- `id="why-us"` (anchor target from hero secondary CTA)
- Left column: eyebrow label + H2 + intro paragraph
- Right column: 2×2 grid of "reason" items, each with gold left-border accent
- Write this in first-person from the perspective of someone with genuine industry experience
- Include: years of experience, what you actually evaluate, firsthand vs. research transparency, how affiliate commissions work
- This section is the site's primary EEAT signal — make it specific, not generic

### About section

- Navy background with radial gradient accent
- Short paragraph describing what the site covers and who it is for
- Not a sales pitch — a clear, honest description of the guide's scope

### Contact section

- Sand background
- Email address as a styled `<a href="mailto:...">` link
- Set up `hello@[sitedomain].com` forwarding to your real email

---

## Money page structure

Every money page follows this section order:

```
[JSON-LD: BreadcrumbList + FAQPage]
<MobileStickyCTA />         ← Fixed bottom bar, scroll-aware (client component)
<Header />                  ← Simplified: logo + "Compare Experiences" link
[Hero section]              ← Full-width photo, H1, two CTAs
[Intro section]             ← Prose intro, 2-3 paragraphs, inline links to related pages
<OperatorCards />           ← Comparison card grid (id="top-[category]")
[Best For section]          ← 2-3 col grid of audience segments
[What to Expect section]    ← 2-3 col grid of trip details
[How to Choose section]     ← 2-3 col grid of decision factors
[FAQ section]               ← Accordion-style Q&A (drives FAQPage schema)
[Navy CTA section]          ← Dark bg with scroll-up CTA back to operator cards
[Related Guides section]    ← Cards linking to other money pages
[Affiliate disclosure bar]  ← Muted text, always visible
<Footer />
```

**Reusable template:** Use `ExperienceLandingPage` for all money pages except Boat Rentals (which has a custom component from before the template existed). Pass all content as props — no hard-coded copy inside the component.

**Money page header:** Simplified vs. homepage header. Shows logo (links to `/`) and one right-side link: `Compare Experiences` → `/#experiences`.

### Hero section (money page)

- Single full-width photo (55-65vh min-height)
- Same dark gradient overlay as homepage hero
- H1 targeting transactional keyword (e.g. `Boat Rentals in St Augustine`)
- Short subheadline (1-2 lines)
- Primary CTA: `See Top [Category] Options` → anchors to `#top-[category]`
- Secondary CTA: `Compare All Water Experiences` → `/#experiences`

### Intro section

- White background
- Max-width 3xl (prose width), centered
- 2-3 paragraphs
- Must include inline links to at least 2 related money pages (styled `text-teal underline`)
- Explains what this category covers, how options vary, how to use the guide

### Operator cards section

- `id="top-[category]"` (anchor target from hero CTA and mobile sticky CTA)
- `scroll-mt-24` (prevents header overlap when anchor-navigated)
- Sand background
- Eyebrow: `Curated Picks`
- H2 targeting the category
- 3-column grid on desktop, 1-column on mobile
- Ends with muted disclosure note about direct vs. affiliate links

---

## Operator card design

Each card represents one operator or booking option.

**Data model** (`ExperienceOperator` type in `lib/operator-types.ts`):

```ts
type ExperienceOperator = {
  position: 1 | 2 | 3;             // Used in GA4 tracking
  trackingLabel: string;            // Snake_case label for GA4 events
  label: string;                    // Card eyebrow (e.g. "Best Overall Private Boat Day")
  summary: string;                  // 2-3 sentence description
  bestFor: string;                  // Comma-separated audience types
  duration?: string;                // e.g. "2-4 hours"
  groupSize?: string;               // e.g. "Up to 12"
  captained?: boolean;
  captainFeeExtra?: boolean;
  highlights: string[];             // 3-5 bullet points
  bookingUrl: string;               // Direct operator URL (swap for FHDN link when approved)
  linkNote?: string;                // Optional note under CTA (default: "Books through operator website")
};
```

**Card visual structure:**
1. Eyebrow label (teal, uppercase, tracked)
2. Summary paragraph
3. "Best for:" line (bold label + value)
4. Duration + group size (when present)
5. Highlights list (gold dot bullets)
6. CTA button: `Check Availability` (full-width, gold bg)
7. Link note (muted, small, centered under CTA)

**CTA link:** Uses `TrackedOperatorLink` — opens in `_blank` with `rel="noopener noreferrer sponsored"`. Fires `operator_click` GA4 event on click.

**Label convention:** Position cards as "best for" personas, not by operator name alone:
- `Best Overall Private Boat Day`
- `Best Pontoon-Style / Casual Cruise Option`
- `Best Premium / Special Occasion Charter`

**FHDN link swap:** Initially use direct operator URLs. When FHDN approves the affiliate relationship, replace `bookingUrl` with the FHDN affiliate link. The UI and tracking don't change.

---

## Internal linking strategy

Every page must link to every other money page. No isolated pages.

**Footer:** Lists all money pages under "Compare Experiences" nav group. Always present.

**Related Guides section:** Every money page has a "More [City] Water Experiences" section that auto-generates cards for the other money pages. Driven by `getRelatedPages(currentPath)` which filters the current page from `experiencePages`.

**Inline links in intro copy:** Each money page intro should link to 2+ other money pages as natural contextual references (e.g. "Looking for a guided experience? Compare sunset cruises or dolphin tours."). Style: `text-teal underline underline-offset-2`.

**Homepage FeaturedCategories:** Direct links to all 4 money pages.

**Homepage header nav:** Direct links to the top 2 money pages (boat rentals, sunset cruises).

---

## CRO elements

### Mobile sticky CTA

`MobileStickyCTA` — client component, fixed to bottom of screen on mobile only (`md:hidden`).

**Visibility logic:** Shows when all three conditions are true:
1. User has scrolled past 300px (past the intro)
2. The operator cards section is NOT currently in the viewport
3. User is NOT within 80px of the bottom of the page

This avoids overlapping with the operator cards themselves and the footer.

**Implementation:** Pass `operatorSectionId` prop matching the `id` of the operator cards section. Uses `IntersectionObserver` + scroll listener.

### CTA button language

Always use action + benefit language:
- `Check Availability` (operator cards — primary)
- `See Top [Category] Options` (hero — primary)
- `Compare Water Experiences` (hero — secondary, homepage nav)
- `View Top Options` (hero — primary on generic pages)
- `Compare All Experiences` (hero — secondary)
- `Find Your Perfect Boat Day` (homepage hero secondary)

Never use: Learn More, Explore, Discover, Read More.

### Gold CTA buttons

Primary CTAs use gold (`bg-gold`) on navy text. Hover: `bg-gold-light`. Always minimum 3rem height for mobile tap targets.

### Anchor navigation

Hero CTAs and mobile sticky CTA use `href="#section-id"` anchors (not router navigation). This avoids full page reloads and feels instant. Use `scroll-mt-24` on anchor targets to prevent the header from covering the section.

### Navy CTA section

Each money page ends with a full-width navy section containing an H2 and a gold CTA button that scrolls back to the operator cards. This catches users who read all the way to the bottom without converting.

---

## SEO elements

### Metadata factory

`lib/metadata.ts` exports two functions:

- `createRootMetadata()` — used in `layout.tsx`. Sets `metadataBase`, title template, OG/Twitter meta, and Google Search Console verification.
- `createPageMetadata({ title, description, path })` — used in each page's `metadata` export. Builds full title with site name appended, canonical URL, OG/Twitter meta.

Both set `robots: { index: true, follow: true }`.

### Title format

```
[Page H1] | [Site Name]
```
Example: `Boat Rentals in St Augustine | St Augustine On The Water`

Homepage uses a standalone descriptive title (does not follow the template pattern).

### Meta description targets

Transactional + specific. Lead with the comparison angle:
- Homepage: `Compare [City]'s best boat rentals, sunset cruises, dolphin tours, and seasonal water adventures.`
- Money pages: `Compare [City] [category] — [option types]. Find the right [category] for [audience types] and check availability.`

### Canonical URLs

Set via `alternates.canonical` in metadata. Built from `getSiteUrl()` + path. Prevents duplicate content from Vercel preview URLs.

### OG image

`opengraph-image.tsx` in `app/` generates the social share image dynamically using `ImageResponse`. Uses brand colors (navy/teal/gold), site name, and tagline. No external image needed.

### Image alt text

Always descriptive. Format: `[city] [experience type] [context]`
- Good: `st augustine private boat rental at sunset`
- Good: `st augustine dolphin tour on the water`
- Bad: `hero image`, `boat photo`

Use `priority` on above-the-fold images. Use `sizes` prop appropriately (e.g. `"50vw"` for 2-column grid images, `"100vw"` for full-width).

### H tag structure

- One `<h1>` per page (targeting the main transactional keyword)
- Section headings: `<h2>`
- Card headings: `<h3>`
- Eyebrow labels above H2s are `<p>` (not headings) — styled in small caps teal

---

## Schema implementation

### Global schema (layout.tsx via StructuredData component)

`Organization` + `WebSite` in a `@graph` array, injected into `<body>` via a `<script type="application/ld+json">` tag.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://[domain]/#organization",
      "name": "[Site Name]",
      "url": "https://[domain]",
      "description": "[Site description]",
      "email": "hello@[domain]"
    },
    {
      "@type": "WebSite",
      "@id": "https://[domain]/#website",
      "url": "https://[domain]",
      "name": "[Site Name]",
      "description": "[Site description]",
      "publisher": { "@id": "https://[domain]/#organization" }
    }
  ]
}
```

### Per-page schema (money pages)

`BreadcrumbList` + `FAQPage` in a `@graph` array, injected at the top of the page component return (before other elements).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "[Site Name]", "item": "https://[domain]" },
        { "@type": "ListItem", "position": 2, "name": "[Page H1]", "item": "https://[domain]/[path]" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[Question text]",
          "acceptedAnswer": { "@type": "Answer", "text": "[Answer text]" }
        }
      ]
    }
  ]
}
```

**Do not use:**
- `LocalBusiness` schema (this site is not a real local business with a physical location)
- `Review` schema (no real review data)
- `TouristTrip` or `TouristAttraction` schema unless the page genuinely represents a single specific trip/attraction

---

## Analytics implementation

### Google Analytics 4

`GoogleAnalytics` component in `layout.tsx`, wrapped in `<Suspense>`. Uses `useSearchParams()` so must be a client component.

**Env var:** `NEXT_PUBLIC_GA_MEASUREMENT_ID` (set in Vercel → Project → Settings → Environment Variables)

**Behavior:** Only loads in production (`NODE_ENV === "production"`). Tracks page views on route change via `usePathname` + `useSearchParams` effect.

### Custom event: operator_click

Fires when a visitor clicks any operator card CTA. Tracked via `trackBoatOperatorClick()` in `lib/analytics.ts`.

**Event params:**

```ts
{
  option_position: 1 | 2 | 3,    // Which card was clicked
  option_label: string,           // Snake_case operator identifier
  destination_url: string,        // Full booking URL
  page: ExperiencePage,           // Which money page the click came from
}
```

**ExperiencePage** is a union type — add a new value for each new money page:

```ts
type ExperiencePage =
  | "boat_rentals_st_augustine"
  | "sunset_cruises_st_augustine"
  | "dolphin_tours_st_augustine"
  | "nights_of_lights_boat_tours";
```

**Key GA4 reports to watch:**
- `operator_click` events by `page` and `option_position`
- Which operator position converts most (1, 2, or 3)
- Which money pages drive the most clicks
- Traffic source for operator_click events

---

## Sitemap requirements

Auto-generated via `app/sitemap.ts`. Returns a `MetadataRoute.Sitemap` array.

**Priority structure:**
- Homepage: priority 1.0, changeFrequency `weekly`
- Money pages: priority 0.8, changeFrequency `monthly`
- Legal pages: priority 0.3, changeFrequency `yearly`

All money page paths are derived from `Object.values(experienceRoutes)` so new pages auto-appear in the sitemap when added to `routes.ts`.

**Robots.txt:** Auto-generated via `app/robots.ts`. Allows all crawlers, points to the sitemap URL.

---

## Search Console process

1. Deploy the site to the production domain
2. Go to Google Search Console → Add property → URL prefix → enter production URL
3. Choose HTML tag verification method
4. Copy the `content` value from the `<meta name="google-site-verification">` tag
5. Set `GOOGLE_SITE_VERIFICATION=[content-value]` in Vercel environment variables (production only)
6. Redeploy or wait for next deployment
7. Click Verify in Search Console
8. Submit the sitemap: Sitemaps → enter `[domain]/sitemap.xml` → Submit
9. Check Coverage report after 48-72 hours to confirm pages are indexed

---

## Deployment (Vercel)

**Required environment variables:**

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Full production URL with protocol (e.g. `https://staugustineonthewater.com`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification token |

`getSiteUrl()` in `lib/site.ts` falls back to `VERCEL_URL` (set automatically by Vercel) and then `localhost:3000` — so the only required env var for metadata to work correctly in production is `NEXT_PUBLIC_SITE_URL`.

---

## Launch checklist

### Pre-launch

- [ ] Domain purchased and DNS pointed to Vercel
- [ ] `NEXT_PUBLIC_SITE_URL` set in Vercel (production environment)
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` set in Vercel
- [ ] GA4 property created, measurement ID copied
- [ ] Homepage hero images are WebP or high-quality JPEG, <400KB each
- [ ] Money page hero images are WebP or JPEG, <300KB
- [ ] All image `alt` attributes are descriptive (not empty or generic)
- [ ] All money pages have `createPageMetadata()` with unique titles + descriptions
- [ ] All operator `bookingUrl` values are live and reachable
- [ ] Affiliate disclosure is visible on every money page and homepage footer
- [ ] Privacy Policy is live at `/privacy-policy`
- [ ] Terms of Use is live at `/terms`
- [ ] Contact email (`hello@[domain]`) is working and forwarding
- [ ] All internal links are working (no broken anchors or 404s)
- [ ] All legacy route redirects are in `next.config.ts` and verified
- [ ] Schema validates with Google Rich Results Test (BreadcrumbList + FAQPage)
- [ ] OG image renders correctly (check with Twitter Card Validator or opengraph.xyz)
- [ ] Mobile layout tested at 390px width (iPhone 14 baseline)
- [ ] Mobile sticky CTA appears and disappears correctly on money pages
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml` with all pages listed

### Launch

- [ ] Merge to main / trigger production deployment
- [ ] Verify production URL loads correctly
- [ ] Verify GA4 receives a Realtime event (visit the site and check GA4 → Realtime)
- [ ] Click one operator card CTA → verify `operator_click` event fires in GA4 Realtime → Events
- [ ] Submit site to Google Search Console (see Search Console process above)
- [ ] Submit sitemap in Search Console

---

## Post-launch checklist

### Week 1

- [ ] Search Console: check for crawl errors, confirm sitemap was accepted
- [ ] GA4: confirm sessions, page views, and `operator_click` events are tracking
- [ ] Check PageSpeed Insights on mobile for the homepage and one money page — target 80+ on mobile
- [ ] Verify all money pages appear in "URL Inspection" in Search Console and request indexing if not yet indexed

### Week 2-4

- [ ] Search Console → Coverage: confirm all pages indexed, no "Excluded" errors on money pages
- [ ] Search Console → Performance: check which queries are starting to appear (may take 2-4 weeks)
- [ ] GA4: review which operator positions and pages generate the most clicks
- [ ] Check operator booking URLs — confirm none have gone dead

### Ongoing

- [ ] Review Search Console Performance weekly once site has traffic
- [ ] Update operator data (bookingUrl, pricing notes) if operators change their sites
- [ ] Swap direct operator URLs for FHDN affiliate links as they are approved
- [ ] Add new money pages when new FHDN-approved operators or categories are available
- [ ] Add FAQ content and "How to Choose" guides to deepen topical authority
- [ ] Monitor Core Web Vitals in Search Console → Experience tab

---

## Content strategy notes

### What makes the site feel real (not thin affiliate)

1. **First-person EEAT copy** — The WhyBookWithUs section should read like a real person with industry credibility wrote it. Be specific about what you look at (vessel type, operator logistics, captain experience) not just "I love boats."

2. **Operator card labels as positioning, not names** — `Best Overall Private Boat Day` beats `Gone 2 Sea Boat Rentals` as the card label. It helps the visitor understand the fit before they read anything else.

3. **Intro copy that earns trust** — Money page intros should explain how options vary and what to think about, not just list the operators. Internal links inside the intro copy signal helpfulness.

4. **FAQ sections that answer real questions** — Source questions from "People Also Ask" results for the target keyword. Write answers as if a knowledgeable local wrote them.

5. **Affiliate disclosure that is transparent, not apologetic** — The disclosure text should be matter-of-fact: `Some featured experiences may earn me a commission at no extra cost to you. I only feature experiences I believe travelers will find useful.`

### Content not to build yet

- Many thin SEO pages targeting long-tail variants (e.g. "best time to rent a pontoon boat in St Augustine in July") — build topical depth on core money pages first
- Review-style content without real firsthand experience to back it up
- Blog content before money pages are ranking

### Topical clusters to build next

Once core money pages are indexed and generating clicks:
- Fishing charters money page
- FAQ articles linking to money pages (e.g. "Can you rent a boat without a captain in [city]?")
- Comparison articles (e.g. "Boat rental vs. sunset cruise: which is right for your group?")
- Seasonal content when applicable (e.g. "Best time of year for dolphin tours in [city]")
