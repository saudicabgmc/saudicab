import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /riyadh-to-doha — a long-distance international private transfer
 * page, distinct from the domestic route pages in routePageData.ts.
 *
 * IMPORTANT — scope of facts used here:
 * - The road distance (~1,100 km) is a public geographic fact, not a business claim.
 * - No specific journey TIME is stated as a guarantee: border-crossing duration is
 *   genuinely unpredictable and outside the company's control, so this page is
 *   explicit that timing varies and must be discussed per trip.
 * - No price is stated anywhere on this page — pricingData.ts has no fare for this
 *   route, and this is a custom/advance-booking service, not a fixed daily route.
 * - This page also covers "Riyadh to Qatar" as a country-level search intent
 *   (per the task brief) rather than spinning up a separate Qatar-only page.
 */

export type BText = { ar: string; en: string }

export interface RiyadhToDohaPageProps {
  faqs: FAQItem[]
}

export const heroContent = {
  eyebrow: 'International Transfer • Saudi Arabia to Qatar',
  h1: 'Riyadh to Doha Private Transfer',
  intro: "A private vehicle for the long-distance road journey from Riyadh to Doha, Qatar, across the Saudi–Qatar land border. This is an advance-booking, custom-coordinated trip rather than a same-day route — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Dubai',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~1,100 km' },
  { label: 'Border', value: 'Saudi Arabia ↔ Qatar land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "Riyadh to Doha is a long-distance international road trip of roughly 1,100 km, crossing from Saudi Arabia into Qatar at the shared land border. This is a different kind of trip from our domestic Saudi routes: it involves a single border crossing, immigration and customs formalities for everyone in the vehicle, and realistic planning around how long that crossing may take on the day.",
    "We don't quote a fixed journey time for this route, because the driving time itself (typically well over ten hours before stops) is only part of the trip — border processing time varies by day, time of year and individual circumstances, and is outside anyone's direct control. We'll talk through realistic timing with you on WhatsApp once we understand your travel dates and documentation.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Every traveler's situation is different, so we can't give a single blanket answer here — but these are the things that matter for a Riyadh-to-Doha road trip, and the things our team will ask you about:",
  items: [
    'A valid passport for every passenger, with the validity period required for entry into Qatar.',
    'Confirmation of whether you need a visa or entry permit for Qatar — this depends on your nationality and should be checked against current requirements before travel.',
    "Vehicle documentation and insurance valid for cross-border use between Saudi Arabia and Qatar.",
    'Realistic expectations around border wait times, which can vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Qatari immigration authorities. For current, authoritative entry requirements, check Qatar's official government portal before you travel.",
  officialLinkLabel: "Qatar official government portal (Hukoomi)",
  officialLinkUrl: 'https://hukoomi.gov.qa/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying to Doha',
  paragraphs: [
    "For a distance like Riyadh to Doha, flying is usually the faster option, and we'd rather tell you that directly than oversell a road trip that isn't the right fit for every traveler. A private car makes more sense if you specifically want to travel by road — for example, bringing a vehicle's worth of luggage, travelling as a family or group who'd rather not coordinate flights, or treating the drive itself as part of the trip.",
    'Whichever you choose, the advantage of a private vehicle over any shared or public transport option on this route is the same as on our domestic trips: one vehicle for your group only, a pickup time built around your schedule, and no transfers between vehicles along the way.',
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

export const relatedLink = { href: '/riyadh-to-dubai', label: 'Also see: Riyadh to Dubai private transfer' }
