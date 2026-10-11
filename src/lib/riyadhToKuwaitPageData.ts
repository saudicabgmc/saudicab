import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /riyadh-to-kuwait — international private transfer page.
 * Crosses the Saudi-Kuwait land border near Al-Khafji / Nuwaiseeb, on the
 * Gulf coastal highway. No pricing/duration data exists for this route in
 * pricingData.ts, so no fare or guaranteed time is stated anywhere.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Saudi Arabia to Kuwait',
  h1: 'Riyadh to Kuwait City Private Transfer',
  intro: "A private vehicle for the long-distance road journey from Riyadh to Kuwait City, across the Saudi–Kuwait land border on the Gulf coastal highway. This is an advance-booking, custom-coordinated trip rather than a same-day route — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Bahrain',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~550 km' },
  { label: 'Border', value: 'Saudi Arabia ↔ Kuwait land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    'Riyadh to Kuwait City is a road trip of roughly 550 km, running up through the Eastern Province and along the Gulf coastal highway to the Saudi–Kuwait border crossing near Al-Khafji. From there, the route continues into Kuwait toward Kuwait City. It involves a single border crossing, with immigration and customs formalities for everyone in the vehicle.',
    "We don't quote a fixed journey time for this route. The driving time alone is several hours, and the time spent at the border crossing varies by day and is outside anyone's direct control. We'll talk through realistic timing with you on WhatsApp once we understand your travel dates and documentation.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "These are the things that matter for a Riyadh-to-Kuwait road trip, and what our team will ask you about:",
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
  heading: 'Private Car vs Flying to Kuwait',
  paragraphs: [
    "For a distance like Riyadh to Kuwait City, flying is usually the faster option, and we'd rather tell you that directly than oversell a road trip that isn't the right fit for every traveler. A private car makes more sense if you specifically want to travel by road — for example, bringing a vehicle's worth of luggage, travelling as a family or group who'd rather not coordinate flights, or treating the drive itself as part of the trip.",
    'Whichever you choose, the advantage of a private vehicle over any shared or public transport option on this route is the same as on our domestic trips: one vehicle for your group only, a pickup time built around your schedule, and no transfers between vehicles along the way.',
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
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

export const relatedLink = { href: '/riyadh-to-bahrain', label: 'Also see: Riyadh to Bahrain private transfer' }
