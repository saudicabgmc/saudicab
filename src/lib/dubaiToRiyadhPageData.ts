/*
 * Content for /dubai-to-riyadh — the reverse direction of /riyadh-to-dubai.
 * Same physical road and the same Saudi–UAE land border, but written from
 * scratch around the outbound-from-Dubai experience: pickup in Dubai, UAE
 * exit formalities before Saudi entry formalities (the opposite order to
 * the Riyadh-origin page), then the drive across Saudi Arabia into Riyadh.
 * Distance mirrors riyadhToDubaiPageData.ts (~1,230 km) because it's the
 * same road — not a new or invented figure. No pricing/duration data
 * exists for this route in pricingData.ts, so no fare or guaranteed time
 * is stated anywhere.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • UAE to Saudi Arabia',
  h1: 'Dubai to Riyadh Private Transfer',
  intro: "A private vehicle for travelers heading from Dubai into Saudi Arabia's capital, crossing the Saudi–UAE land border and continuing on to Riyadh. This is an advance-booking, custom-coordinated trip — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Dubai',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~1,230 km' },
  { label: 'Border', value: 'UAE ↔ Saudi Arabia land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Dubai — a hotel, residence or agreed location anywhere across the city — and heads out toward the Saudi–UAE land border. You'll clear UAE exit formalities first, then Saudi entry formalities on the other side, the reverse order to a trip that begins in Riyadh. From the border, it's still a substantial drive across the Kingdom before reaching Riyadh.",
    "At roughly 1,230 km total, this is one of the longer routes we arrange, and we treat it that way: driving time alone runs well past twelve hours, and that's before the border itself, where processing time depends on the day, the season and how straightforward everyone's documentation is. We don't predict that part from here — we'll talk through realistic timing with you on WhatsApp once we know your travel date.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Entering Saudi Arabia from the UAE involves its own set of things to have ready, separate from what's needed to exit the UAE. Here's what matters, and what our team will ask you about:",
  items: [
    'A valid passport for every passenger, meeting the validity period Saudi Arabia requires for entry.',
    "Confirmation of whether you need a Saudi visa or entry permit — this depends on your nationality and residency status, and should be checked against Saudi Arabia's current entry rules before travel, not assumed.",
    'That a vehicle and driver authorized for cross-border travel into Saudi Arabia are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance.',
    'Vehicle documentation and insurance valid for cross-border use between the UAE and Saudi Arabia.',
    'Your exact pickup location and timing in Dubai, and realistic expectations around border wait times, which vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this crossing until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying from Dubai to Riyadh',
  paragraphs: [
    "Dubai and Riyadh are both major air hubs, and for most travelers flying remains the faster way to cover this distance — we'd rather say so plainly than oversell a 1,230 km drive that isn't right for everyone. A private car earns its place when the road itself serves a purpose: bringing more luggage than a flight comfortably allows, a family or group who'd rather stay together in one vehicle for the whole trip, or anyone making stops along the way rather than travelling point to point.",
    "If a road trip from Dubai does suit your plans, the reasoning behind booking it privately is the same as on any of our long-distance routes: one vehicle reserved for your group only, a pickup time in Dubai built around your own schedule, and no changing vehicles partway through — including at the border itself.",
  ],
}

export interface VehicleOption {
  name: BText
  seats: string
  note: string
}

export const vehicleOptions: VehicleOption[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light over this distance.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups, with the extra space a trip this long benefits from.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the long drive into Riyadh.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your pickup point in Dubai and travel date on WhatsApp', desc: 'Tell us where in Dubai you need pickup, your date, and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, Saudi entry requirements and vehicle documentation for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom long-distance trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-dubai', label: 'Also see: Riyadh to Dubai private transfer' }
