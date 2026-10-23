import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /riyadh-to-dubai — a long-distance international private transfer
 * page, distinct from the domestic route pages in routePageData.ts.
 *
 * IMPORTANT — scope of facts used here:
 * - The road distance (~1,000 km) is a public geographic fact, not a business claim.
 *   Verified 2026-10-23 against multiple independent sources (a dedicated Saudi-UAE
 *   road-trip guide, a distance calculator, and a Rome2Rio proxy via a nearby UAE
 *   city), which converge on ~980-1,030 km / ~9-11.5 hours driving via the Al Batha
 *   (Saudi side) / Al Ghuwaifat (UAE side) crossing — NOT the ~1,230 km / 12+ hour
 *   figures this page previously stated, which were overestimates and have been
 *   corrected.
 * - No specific journey TIME is stated as a guarantee: border-crossing duration is
 *   genuinely unpredictable and outside the company's control, so this page is
 *   explicit that timing varies and must be discussed per trip.
 * - No price is stated anywhere on this page — pricingData.ts has no fare for this
 *   route, and this is a custom/advance-booking service, not a fixed daily route.
 */

export type BText = { ar: string; en: string }

export interface RiyadhToDubaiPageProps {
  faqs: FAQItem[]
}

export const heroContent = {
  eyebrow: 'International Transfer • Saudi Arabia to the UAE',
  h1: 'Riyadh to Dubai Private Transfer',
  intro: "A private vehicle for the long-distance road journey from Riyadh to Dubai, UAE, across the Saudi–UAE land border. This is an advance-booking, custom-coordinated trip rather than a same-day route — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Doha',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~1,000 km' },
  { label: 'Border', value: 'Saudi Arabia ↔ UAE land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "At roughly 1,000 km, Riyadh to Dubai is one of the longer cross-border road trips we arrange — longer than our Bahrain and Kuwait transfers, and a full day's drive before you factor in the border itself. The route takes you out of Riyadh, across the Kingdom toward the UAE, then crosses at the Al Batha (Saudi side) / Al Ghuwaifat (UAE side) border before continuing on into Dubai — with one immigration and customs crossing for everyone in the vehicle along the way.",
    "Dubai is one of the busiest business and travel hubs in the Gulf, and a lot of our enquiries for this route come from people combining a family visit with a Dubai stopover, or professionals who'd rather travel by private car with their own luggage and schedule than coordinate connecting flights. Whatever brings you to Dubai, the road trip itself needs the same honest planning: driving time alone runs roughly 9 to 11 hours, and border processing adds a variable amount on top that we genuinely can't predict from here — it depends on the day, the season, and your own documentation. We'll walk through realistic timing with you on WhatsApp once we know your travel dates.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "A Riyadh-to-Dubai trip has more moving parts than a domestic transfer, so before you book, confirm the following with our team directly:",
  items: [
    'A valid passport for every passenger, with the validity period required for entry into the UAE.',
    'Whether you need a visa or entry permit for the UAE — this depends on your nationality and current rules, so check it against official sources before travel, not against general assumptions.',
    'That a vehicle and driver authorized for cross-border travel into the UAE are actually available for your travel date — not every vehicle in our fleet is cleared for international trips, and this needs to be confirmed with us in advance, not assumed.',
    'Any cross-border charges, permit costs or documentation fees that may apply, confirmed with our team before you commit to a date.',
    'Your exact pickup location and timing in Riyadh, and realistic expectations around border wait times, which vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with UAE immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this route until our team confirms it with you directly. For current, authoritative entry requirements, check the UAE's official government portal before you travel.",
  officialLinkLabel: 'UAE official government portal (u.ae)',
  officialLinkUrl: 'https://u.ae/en',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying to Dubai',
  paragraphs: [
    "A private car earns its place on a route like this when the road itself is part of the plan: families travelling with more luggage than a flight allows comfortably, groups who'd rather not split across separate bookings, or anyone making stops in Saudi Arabia along the way before continuing on to the UAE.",
    "If a road trip is the right call for you, the point of booking it privately rather than any shared option is the same reasoning behind every trip we run: one vehicle reserved for your group only, a pickup time built around you instead of a fixed schedule, and no changing vehicles partway through the journey.",
  ],
}

export interface VehicleOption {
  name: BText
  seats: string
  note: string
}

export const vehicleOptions: VehicleOption[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags for a longer trip.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the long drive.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your travel dates on WhatsApp', desc: 'Tell us when you want to travel and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, visa and vehicle documentation needs for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom long-distance trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-doha', label: 'Also see: Riyadh to Doha private transfer' }
