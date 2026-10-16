/*
 * Content for /bahrain-to-dammam — the reverse direction of
 * /dammam-to-bahrain. Same short King Fahd Causeway hop (~50 km), but
 * written from scratch around the outbound-from-Bahrain experience:
 * pickup in Manama/Bahrain, Bahraini exit formalities before Saudi
 * entry formalities (the opposite order to the Dammam-origin page),
 * then arrival in Dammam or Khobar. Distance mirrors
 * dammamToBahrainPageData.ts because it's the same causeway — not a
 * new or invented figure. No pricing/duration data exists for this
 * route in pricingData.ts, so no fare or guaranteed time is stated
 * anywhere.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Bahrain to Eastern Province',
  h1: 'Bahrain to Dammam Private Transfer',
  intro: "A private vehicle for the short hop from Manama, Bahrain across the King Fahd Causeway to Dammam or Khobar, in Saudi Arabia's Eastern Province. This is the shortest of our GCC transfers — still an international crossing with its own paperwork, but a far shorter trip than our Riyadh-based routes. Contact us on WhatsApp to confirm feasibility, documentation and current availability.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Dammam to Bahrain',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~50 km' },
  { label: 'Crossing', value: 'King Fahd Causeway (Bahrain ↔ Saudi Arabia)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Manama or wherever you're staying in Bahrain, and heads onto the King Fahd Causeway — the 25 km toll bridge that's the only road link between Bahrain and Saudi Arabia. The whole trip is roughly 50 km, almost entirely the causeway itself, landing you in Khobar or Dammam on the Saudi side. You'll clear Bahraini exit formalities first, then Saudi entry formalities at the far end — the reverse order to a trip that begins in Dammam.",
    "Even on a route this short, we don't quote a fixed total time, because the causeway's immigration and customs checkpoints can move quickly or slowly depending on the day — weekends and public holidays are known for longer queues on both sides. We'll give you a realistic sense of timing once we know your travel date.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Even for a short crossing, entering Saudi Arabia from Bahrain has its own things to have ready. Here's what matters, and what our team will ask you about:",
  items: [
    'A valid passport (or, for GCC nationals, the ID accepted at the causeway) for every passenger.',
    "Confirmation of whether you need a Saudi visa or entry permit — this depends on your nationality and residency status, and should be checked against Saudi Arabia's current entry rules before travel, not assumed.",
    'That a vehicle and driver authorized for causeway crossing into Saudi Arabia are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance.',
    'Vehicle documentation and insurance valid for use on the King Fahd Causeway and within Saudi Arabia, plus any causeway toll or permit charges that may apply.',
    'Realistic expectations around causeway queue times on the Bahrain side, which vary by day and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this crossing until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Why Book a Private Car for This Route',
  paragraphs: [
    "This is genuinely one of the more practical routes we arrange — short enough that a private car competes well with any other option for getting from Manama to the Eastern Province, especially if you'd rather not manage public crossing queues on foot or coordinate a separate ride on each side of the causeway.",
    'The core advantage is the same as all our private trips: one vehicle for your group for the whole journey, no transfer between vehicles at the causeway, and a pickup time in Bahrain built around your plans rather than a fixed schedule.',
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the trip.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your pickup point in Bahrain and travel date on WhatsApp', desc: 'Tell us where in Bahrain you need pickup, your date, and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, Saudi entry requirements and vehicle documentation for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/dammam-to-bahrain', label: 'Also see: Dammam to Bahrain private transfer' }
