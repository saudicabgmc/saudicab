/*
 * Content for /kuwait-to-riyadh — the reverse direction of
 * /riyadh-to-kuwait. Same physical road and the same Al-Khafji border
 * crossing, but written from scratch around the outbound-from-Kuwait
 * experience: pickup in Kuwait City, Kuwaiti exit formalities before
 * Saudi entry formalities (the opposite order to the Riyadh-origin
 * page), then the drive south along the Gulf coastal highway through
 * the Eastern Province into Riyadh. Distance mirrors
 * riyadhToKuwaitPageData.ts (~550 km) because it's the same road — not
 * a new or invented figure. No pricing/duration data exists for this
 * route in pricingData.ts, so no fare or guaranteed time is stated
 * anywhere.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Kuwait to Saudi Arabia',
  h1: 'Kuwait to Riyadh Private Transfer',
  intro: "A private vehicle for travelers heading from Kuwait City into Saudi Arabia's capital, crossing the Saudi–Kuwait land border and continuing south to Riyadh. This is an advance-booking, custom-coordinated trip — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Kuwait City',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~550 km' },
  { label: 'Border', value: 'Kuwait ↔ Saudi Arabia land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Kuwait City — a hotel, residence or agreed location anywhere across the city — and heads south along the Gulf coastal highway to the Saudi–Kuwait border crossing near Al-Khafji. You'll clear Kuwaiti exit formalities first, then Saudi entry formalities on the other side, the reverse order to a trip that begins in Riyadh. From the border, the route continues south through Saudi Arabia's Eastern Province and on to Riyadh.",
    "At roughly 550 km total, this is one of the shorter GCC routes we arrange — short enough that, for some travelers, it genuinely competes with a short flight once you factor in airport time on both ends. Even so, we don't quote a fixed total time: the driving itself is several hours, and the time spent at Al-Khafji depends on the day and on your own documentation being in order, neither of which we control. Tell us your travel date on WhatsApp and we'll talk through what's realistic.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Entering Saudi Arabia from Kuwait involves its own set of things to have ready, separate from what's needed to exit Kuwait. Here's what matters, and what our team will ask you about:",
  items: [
    'A valid passport for every passenger, meeting the validity period Saudi Arabia requires for entry.',
    "Confirmation of whether you need a Saudi visa or entry permit — this depends on your nationality and residency status, and should be checked against Saudi Arabia's current entry rules before travel, not assumed.",
    'That a vehicle and driver authorized for cross-border travel into Saudi Arabia are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance.',
    'Vehicle documentation and insurance valid for cross-border use between Kuwait and Saudi Arabia.',
    'Your exact pickup location and timing in Kuwait City, and realistic expectations around border wait times at Al-Khafji, which vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this crossing until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying from Kuwait to Riyadh',
  paragraphs: [
    "Kuwait International Airport has direct flights to Riyadh, and for travelers prioritizing pure speed and travelling light, flying will usually still win. A private car earns its place when the road itself serves a purpose: carrying more luggage than carry-on allows, a family who'd rather stay together in one vehicle for the whole trip, or anyone making other stops in the Eastern Province on the way south.",
    "If a road trip from Kuwait does suit your plans, the reasoning behind booking it privately is the same as on any of our long-distance routes: one vehicle reserved for your group only, a pickup time in Kuwait City built around your own schedule, and no changing vehicles between the border and Riyadh.",
  ],
}

export interface VehicleOption {
  name: BText
  seats: string
  note: string
}

export const vehicleOptions: VehicleOption[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the drive into Riyadh.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your pickup point in Kuwait City and travel date on WhatsApp', desc: 'Tell us where in Kuwait City you need pickup, your date, and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, Saudi entry requirements and vehicle documentation for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-kuwait', label: 'Also see: Riyadh to Kuwait City private transfer' }
