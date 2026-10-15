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
    "Riyadh to Kuwait City runs roughly 550 km — up through the Eastern Province, then along the Gulf coastal highway to the Saudi–Kuwait border crossing near Al-Khafji, before continuing into Kuwait toward the city. Of all our GCC routes from Riyadh, this one and Bahrain are the shortest, which is partly why we're often asked whether it's a realistic road alternative to flying for Gulf-coast business and family travel — it genuinely can be, depending on your schedule.",
    "What we won't do is give you a fixed total journey time. The driving itself is several hours even before any stops, and the time spent at the Al-Khafji crossing depends on the day and on your own documentation being in order — neither of which we control. Tell us your travel dates on WhatsApp and we'll talk through what's realistic for that specific day.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Before you book a Riyadh-to-Kuwait trip, confirm the following with our team directly:",
  items: [
    'A valid passport for every passenger, with the validity period required for entry into Kuwait.',
    'Whether you need a visa or entry permit for Kuwait — this depends on your nationality and current rules, so check official sources rather than assuming.',
    'That a vehicle and driver authorized for cross-border travel into Kuwait are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance, not assumed.',
    'Any cross-border charges, permit costs or documentation fees that may apply, confirmed with our team before booking.',
    'Realistic expectations around border wait times at Al-Khafji, which vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Kuwaiti immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this route until our team confirms it with you directly. For current, authoritative entry requirements, check the official Kuwait government e-services portal before you travel.",
  officialLinkLabel: 'Kuwait official government portal (e.gov.kw)',
  officialLinkUrl: 'https://www.e.gov.kw/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying to Kuwait',
  paragraphs: [
    "Kuwait City is close enough that, for some travelers, the road genuinely competes with a short flight — especially once you add airport check-in and transfer time on either end. It tends to suit people carrying more than carry-on luggage, families who'd rather stay together in one vehicle, or anyone making other stops in the Eastern Province on the way north.",
    "That said, we're not going to pretend a private car beats flying for everyone — if your priority is pure speed and you're travelling light, a flight will usually still win. Where a private vehicle does pay off is the same reason it does on every route we run: one car for your group only, a pickup built around your own schedule, and no changing vehicles between Riyadh and the border.",
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
