import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /dammam-to-kuwait — international private transfer page.
 * Dammam sits much closer to the Saudi-Kuwait border than Riyadh does, so
 * this is a meaningfully shorter, more direct trip than riyadh-to-kuwait —
 * written around that real difference, not a reskin of the Riyadh page.
 * No pricing/duration data exists for this route, so no fare or guaranteed
 * time is stated anywhere.
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
  { label: 'Approx. road distance', value: '~290 km' },
  { label: 'Border', value: 'Saudi Arabia ↔ Kuwait land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "Dammam to Kuwait City is a road trip of roughly 290 km up the Gulf coastal highway to the Saudi–Kuwait border crossing near Al-Khafji, then on into Kuwait. Starting from the Eastern Province already puts you much closer to this border than starting from Riyadh — this route is about half the distance of our Riyadh-to-Kuwait transfer.",
    "Even over a shorter distance, we don't quote a fixed journey time, since border-crossing duration varies by day and is outside anyone's direct control. We'll talk through realistic timing with you on WhatsApp once we understand your travel dates and documentation.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "These are the things that matter for a Dammam-to-Kuwait road trip, and what our team will ask you about:",
  items: [
    'A valid passport for every passenger, with the validity period required for entry into Kuwait.',
    'Confirmation of whether you need a visa or entry permit for Kuwait — this depends on your nationality and should be checked against current requirements before travel.',
    'Vehicle documentation and insurance valid for cross-border use between Saudi Arabia and Kuwait.',
    'Realistic expectations around border wait times, which can vary and are outside our control.',
  ],
  disclaimer: 'Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Kuwaiti immigration authorities. For current, authoritative entry requirements, check the official Kuwait government e-services portal before you travel.',
  officialLinkLabel: 'Kuwait official government portal (e.gov.kw)',
  officialLinkUrl: 'https://www.e.gov.kw/',
}

export const whyPrivateCarSection = {
  heading: 'Why Book a Private Car for This Route',
  paragraphs: [
    "At this distance, a private car is a genuinely practical option — short enough that flying rarely makes sense once you factor in airport time on both ends, especially for travelers already based in the Eastern Province. It suits business travelers, families visiting relatives across the border, or anyone who prefers a direct door-to-door trip over coordinating a flight for a relatively short distance.",
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
