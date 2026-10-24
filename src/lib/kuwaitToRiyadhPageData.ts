/*
 * Content for /kuwait-to-riyadh — the reverse direction of
 * /riyadh-to-kuwait. Same physical road and the same Nuwaiseeb/Al-Khafji
 * border crossing, but written from scratch around the outbound-from-
 * Kuwait experience: pickup in Kuwait City, Kuwaiti exit formalities
 * before Saudi entry formalities (the opposite order to the Riyadh-origin
 * page), then the drive south along the Gulf coastal highway through the
 * Eastern Province into Riyadh. No pricing/duration data exists for this
 * route in pricingData.ts, so no fare or guaranteed time is stated
 * anywhere.
 *
 * IMPORTANT — scope of facts used here:
 * - The road distance (~628-633 km) was independently re-verified
 *   2026-10-24 specifically for Kuwait City->Riyadh — NOT blindly copied
 *   from riyadh-to-kuwait. Sources checked: Rome2Rio Riyadh-Kuwait
 *   (628.5 km / ~8h11m) and distancecalculator.net (633.22 km) converge
 *   tightly; separately, Air Miles Calculator (714.8 km / ~7h39m) and
 *   Cleartrip (711.5 km / ~8h47m) give notably higher figures, as do the
 *   two sources separately supplied for this audit (Rome2Rio via an
 *   Arabic-language URL variant: 668.8 km; a dedicated route guide:
 *   630-720 km). Investigated the cause: the Nuwaiseeb/Al-Khafji coastal
 *   crossing is a genuinely different path from an inland route via Hafar
 *   al-Batin, and some calculators also use a country-level "Kuwait"
 *   point rather than a Kuwait City-specific one — both plausibly explain
 *   the spread without any source being simply wrong. The ~628-633 km
 *   figure is used here as the most tightly-converging, directly
 *   comparable estimate for the standard coastal Nuwaiseeb/Al-Khafji
 *   route (same figure already verified on riyadh-to-kuwait, consistent
 *   because it's the same physical road). This replaces the previous
 *   ~550 km figure, which was a stale mirror of riyadh-to-kuwait's own
 *   earlier, already-corrected error — never updated here.
 * - Driving time (~8 hours) uses Rome2Rio's route-based ~8h11m estimate,
 *   consistent with the "7-8 hours continuous driving" range from one of
 *   the sources supplied for this audit. Kept explicitly separate from
 *   border-processing time, which is not given a specific numeric
 *   estimate — no sufficiently reliable source was found for Al-Khafji
 *   border-wait duration specifically.
 * - "One of the shorter GCC routes" framing removed: ranked by verified
 *   distance among the Riyadh-origin GCC pages, Kuwait (~628-633 km) is
 *   actually the third-shortest of five (after Bahrain ~460-475 km and
 *   Doha ~580 km, before Abu Dhabi ~880-965 km and Dubai ~1,000 km) — not
 *   a genuinely supported "shorter" comparison.
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
  { label: 'Approx. road distance', value: '~628–633 km' },
  { label: 'Border', value: 'Kuwait ↔ Saudi Arabia land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Kuwait City — a hotel, residence or agreed location anywhere across the city — and heads south along the Gulf coastal highway to the Saudi–Kuwait border, crossed at Nuwaiseeb (Kuwait side) / Al-Khafji (Saudi side). You'll clear Kuwaiti exit formalities first, then Saudi entry formalities on the other side, the reverse order to a trip that begins in Riyadh. From the border, the route continues south through Saudi Arabia's Eastern Province and on to Riyadh.",
    "At roughly 628-633 km total, driving alone runs roughly 8 hours. We don't quote a fixed total time beyond that: the time spent at Nuwaiseeb/Al-Khafji depends on the day and on your own documentation being in order, neither of which we control. Tell us your travel date on WhatsApp and we'll talk through what's realistic.",
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
    'Your exact pickup location and timing in Kuwait City, and realistic expectations around border wait times at Nuwaiseeb/Al-Khafji, which vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this crossing until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying from Kuwait to Riyadh',
  paragraphs: [
    "A private car earns its place when the road itself serves a purpose: carrying more luggage than carry-on allows, a family who'd rather stay together in one vehicle for the whole trip, or anyone making other stops in the Eastern Province on the way south.",
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
