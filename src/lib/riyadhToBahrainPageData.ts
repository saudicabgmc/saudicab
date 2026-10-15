import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /riyadh-to-bahrain — international private transfer page.
 * Bahrain is reached from Saudi Arabia's Eastern Province via the King Fahd
 * Causeway (a toll causeway with immigration/customs posts at both ends), not
 * an open desert land border — this page is written around that real fact,
 * not the generic "land border" framing used for the other GCC pages.
 * No pricing/duration data exists for this route in pricingData.ts, so no
 * fare or guaranteed time is stated anywhere.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Saudi Arabia to Bahrain',
  h1: 'Riyadh to Manama, Bahrain Private Transfer',
  intro: "A private vehicle for the road journey from Riyadh to Manama, Bahrain, crossing the King Fahd Causeway from Saudi Arabia's Eastern Province. This is an advance-booking, custom-coordinated trip — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Kuwait City',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~480 km' },
  { label: 'Crossing', value: 'King Fahd Causeway (Saudi Arabia ↔ Bahrain)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "Riyadh to Manama is a road trip of roughly 480 km, most of it along the highway to the Eastern Province before reaching the King Fahd Causeway — the 25 km toll causeway that physically connects Saudi Arabia to Bahrain. Unlike the open desert border crossings on our other GCC routes, this crossing is a bridge with immigration and customs checkpoints at the Saudi end and the Bahraini end.",
    "We don't quote a fixed journey time for this route. The Riyadh-to-Eastern-Province leg alone is several hours of driving, and the time spent at the causeway checkpoints varies by day and time — it can be quick, or it can take longer, especially around weekends and public holidays when causeway traffic is known to build up. We'll talk through realistic timing with you on WhatsApp once we know your travel date.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "These are the things that matter for a Riyadh-to-Manama trip via the causeway, and what our team will ask you about:",
  items: [
    'A valid passport (or, for GCC nationals, the ID accepted at the causeway) for every passenger.',
    'Confirmation of whether you need a visa for Bahrain — this depends on your nationality and should be checked against current requirements before travel.',
    'That a vehicle and driver authorized for causeway crossing into Bahrain are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance, not assumed.',
    'Vehicle documentation and insurance valid for use on the King Fahd Causeway and within Bahrain, plus any causeway toll or permit charges that may apply.',
    'Realistic expectations around causeway queue times, which vary by day and are outside our control.',
  ],
  disclaimer: 'Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Bahraini immigration authorities. We also don\'t guarantee that any specific vehicle or driver is pre-authorized for this crossing until our team confirms it with you directly. For current, authoritative entry requirements, check the official Bahrain government portal before you travel.',
  officialLinkLabel: 'Bahrain official government portal',
  officialLinkUrl: 'https://www.bahrain.bh/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying to Bahrain',
  paragraphs: [
    "Of our GCC routes from Riyadh, this is the one where a private car genuinely competes with flying on time — Manama is close enough that the causeway crossing is a realistic option, not just a scenic alternative to a short flight. It suits travelers who want to bring more luggage than carry-on allows, families who'd rather not coordinate a connecting flight, or anyone who simply prefers a direct door-to-door trip.",
    'As with our other routes, the core advantage of a private vehicle is the same: one vehicle for your group only, a pickup time built around your schedule, and no transfers between vehicles along the way — including at the causeway itself.',
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

export const relatedLink = { href: '/riyadh-to-kuwait', label: 'Also see: Riyadh to Kuwait City private transfer' }
