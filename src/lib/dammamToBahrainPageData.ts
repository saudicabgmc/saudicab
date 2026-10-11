import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /dammam-to-bahrain — international private transfer page.
 * Unlike the Riyadh-to-Bahrain page, this is a genuinely short hop: Dammam
 * and Khobar sit right next to the King Fahd Causeway, so this trip is much
 * closer to a local crossing than a long-distance road trip. The content is
 * written around that real difference, not copy-pasted from the Riyadh page.
 * No pricing/duration data exists for this route in pricingData.ts, so no
 * fare or guaranteed time is stated anywhere.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Eastern Province to Bahrain',
  h1: 'Dammam to Manama, Bahrain Private Transfer',
  intro: "A private vehicle for the short hop from Dammam or Khobar across the King Fahd Causeway to Manama, Bahrain. This is the shortest of our GCC transfers — still an international crossing with its own paperwork, but a far shorter trip than our routes from Riyadh. Contact us on WhatsApp to confirm feasibility, documentation and current availability.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Dammam to Kuwait City',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~50 km' },
  { label: 'Crossing', value: 'King Fahd Causeway (Saudi Arabia ↔ Bahrain)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "Dammam to Manama is a short trip of roughly 50 km, almost entirely made up of the King Fahd Causeway itself — the 25 km toll bridge connecting Khobar, in Saudi Arabia's Eastern Province, to Bahrain. This is by far the shortest of our GCC routes; where our Riyadh-based transfers involve many hours of highway driving before reaching a border, this one is close to a local trip with an international crossing in the middle.",
    "Even on a short route like this, we don't quote a fixed total time, because the causeway's immigration and customs checkpoints can move quickly or slowly depending on the day — weekends and public holidays are known for longer queues. We'll give you a realistic sense of timing once we know your travel date.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Even for a short crossing, these are the things that matter, and what our team will ask you about:",
  items: [
    'A valid passport (or, for GCC nationals, the ID accepted at the causeway) for every passenger.',
    'Confirmation of whether you need a visa for Bahrain — this depends on your nationality and should be checked against current requirements before travel.',
    'Vehicle documentation and insurance valid for use on the King Fahd Causeway and within Bahrain.',
    'Realistic expectations around causeway queue times, which vary by day and are outside our control.',
  ],
  disclaimer: 'Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Bahraini immigration authorities. For current, authoritative entry requirements, check the official Bahrain government portal before you travel.',
  officialLinkLabel: 'Bahrain official government portal',
  officialLinkUrl: 'https://www.bahrain.bh/',
}

export const whyPrivateCarSection = {
  heading: 'Why Book a Private Car for This Route',
  paragraphs: [
    "This is genuinely one of the more practical routes on our GCC list — short enough that a private car competes well with any other option for getting from the Eastern Province to Manama, especially if you'd rather not deal with public crossing queues on foot or coordinate a separate ride on each side of the causeway.",
    'The core advantage is the same as all our private trips: one vehicle for your group for the whole journey, no transfer between vehicles at the causeway, and a pickup time built around your plans rather than a fixed schedule.',
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

export const relatedLink = { href: '/dammam-to-kuwait', label: 'Also see: Dammam to Kuwait City private transfer' }
