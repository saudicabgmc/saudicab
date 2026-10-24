import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /dammam-to-kuwait — international private transfer page.
 * Dammam sits much closer to the Saudi-Kuwait border than Riyadh does, so
 * this is a meaningfully shorter, more direct trip than riyadh-to-kuwait —
 * written around that real difference, not a reskin of the Riyadh page.
 * No pricing/duration data exists for this route, so no fare or guaranteed
 * time is stated anywhere.
 *
 * IMPORTANT — scope of facts used here:
 * - The road distance (~410-436 km) was verified 2026-10-24 against four
 *   independent sources: Rome2Rio (Dhahran-Kuwait City: 424.8 km / ~4h8m),
 *   Cleartrip (Dammam-Kuwait City: 409.35 km / ~4h53m), and two distance
 *   calculators (himmera.com and distancebetween2.com: ~469-470 km). A fifth
 *   source (Air Miles Calculator, airport-to-airport) gave a lower outlier
 *   of ~395 km. The ~410-436 km range reflects the two most route-specific,
 *   convergent sources (Rome2Rio and Cleartrip); the wider ~395-470 km full
 *   spread reflects genuine differences in exact start/end points. The
 *   previous ~290 km figure was a significant underestimate and has been
 *   corrected. Driving time is stated as "roughly 4-5 hours," sourced from
 *   the same two route-specific estimates, explicitly excluding border
 *   processing.
 * - The previous "about half the distance of our Riyadh-to-Kuwait route"
 *   claim no longer holds against the corrected Riyadh-to-Kuwait figure
 *   (~628-633 km, verified in that page's own audit) — 410-436 km is closer
 *   to two-thirds of that distance, not half. This claim has been removed.
 * - Crossing name: Nuwaiseeb (Kuwait side) / Al-Khafji (Saudi side), per the
 *   same verification used on the Riyadh-to-Kuwait page.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Eastern Province to Kuwait',
  h1: 'Dammam to Kuwait City Private Transfer',
  intro: "A private vehicle for the road journey from Dammam to Kuwait City, up the Gulf coastal highway and across the Saudi–Kuwait border near Al-Khafji. Being in the Eastern Province already, this is a notably shorter trip than our Riyadh-to-Kuwait route. Contact us on WhatsApp to confirm feasibility, documentation and current availability.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Dammam to Bahrain',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~410–436 km' },
  { label: 'Border', value: 'Saudi Arabia ↔ Kuwait land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "Dammam to Kuwait City is a road trip of roughly 410-436 km up the Gulf coastal highway to the Saudi–Kuwait border, crossed at Nuwaiseeb (Kuwait side) / Al-Khafji (Saudi side), then on into Kuwait. Starting from the Eastern Province already puts you meaningfully closer to this border than starting from Riyadh, and the exact distance depends on your pickup point, your destination in Kuwait, and the route taken. Driving alone runs roughly 4-5 hours, before any stops.",
    "Even over a shorter distance than our Riyadh routes, we don't quote a fixed total journey time, since border-crossing duration varies by day and is outside anyone's direct control. We'll talk through realistic timing with you on WhatsApp once we understand your travel dates and documentation.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "These are the things that matter for a Dammam-to-Kuwait road trip, and what our team will ask you about:",
  items: [
    'A valid passport for every passenger, with the validity period required for entry into Kuwait.',
    'Confirmation of whether you need a visa or entry permit for Kuwait — this depends on your nationality and should be checked against current requirements before travel.',
    'That a vehicle and driver authorized for cross-border travel into Kuwait are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance, not assumed.',
    'Vehicle documentation and insurance valid for cross-border use between Saudi Arabia and Kuwait, plus any cross-border charges or documentation fees that may apply.',
    'Realistic expectations around border wait times, which can vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Kuwaiti immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this route until our team confirms it with you directly. For current, authoritative entry requirements, check the official Kuwait government e-services portal before you travel.",
  officialLinkLabel: 'Kuwait official government portal (e.gov.kw)',
  officialLinkUrl: 'https://www.e.gov.kw/',
}

export const whyPrivateCarSection = {
  heading: 'Why Book a Private Car for This Route',
  paragraphs: [
    "A private car offers genuine door-to-door convenience on this route, avoiding separate airport transfers and check-in time on both ends. That said, flying may still be preferable for some travelers depending on their schedule and total travel time — we'd rather say that plainly than oversell the drive. This option tends to suit business travelers, families visiting relatives across the border, or anyone who prefers a direct trip over coordinating a flight.",
    'As with our other routes, the core advantage of a private vehicle is the same: one vehicle for your group only, a pickup time built around your schedule, and no transfers between vehicles along the way.',
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the trip.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your travel dates on WhatsApp', desc: 'Tell us when you want to travel and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, visa and vehicle documentation needs for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/dammam-to-bahrain', label: 'Also see: Dammam to Bahrain private transfer' }
