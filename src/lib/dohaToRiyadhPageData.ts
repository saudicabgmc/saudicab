/*
 * Content for /doha-to-riyadh — the reverse direction of /riyadh-to-doha.
 * Same physical road and the same Salwa/Abu Samra border crossing, but
 * written from scratch around the outbound-from-Doha experience: pickup
 * in Doha, Qatari exit formalities before Saudi entry formalities (the
 * opposite order to the Riyadh-origin page), then the long drive west
 * across Saudi Arabia's Eastern Province into Riyadh. Distance mirrors
 * riyadhToDohaPageData.ts because it's the same road — not a new or
 * invented figure. No pricing/duration data exists for this route in
 * pricingData.ts, so no fare or guaranteed time is stated anywhere.
 *
 * IMPORTANT — scope of facts used here:
 * - The road distance (~580 km) was re-verified 2026-10-24 specifically for
 *   the Doha->Riyadh direction (not just assumed from the reverse page):
 *   Rome2Rio Doha-Riyadh direct = 575.9 km / ~6h33m driving; Qatar Living =
 *   590 km / ~7h; component check (Doha-Abu Samra ~80-90 km + Abu
 *   Samra-Riyadh via Salwa, Rome2Rio = 481.3 km) sums to a consistent
 *   ~560-575 km. This matches the figure already verified on riyadh-to-doha
 *   (same physical road) and replaces the previous ~1,100 km figure, which
 *   was a stale mirror of riyadh-to-doha's own earlier, already-corrected
 *   error — never updated here when that page was fixed.
 * - Border wait time: one source (a Qatar travel guide) cites 2-3 hours
 *   during Eid/peak holiday periods at Abu Samra/Salwa — kept as a general,
 *   non-guaranteed reference point, not a promised figure.
 * - The Salwa/Abu Samra crossing was closed 2017-2021 (Gulf rift) and has
 *   operated normally since the Al-Ula agreement — confirming the route is
 *   currently viable, consistent with riyadh-to-doha's own verification.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Qatar to Saudi Arabia',
  h1: 'Doha to Riyadh Private Transfer',
  intro: "A private vehicle for travelers heading from Doha into Saudi Arabia's capital, crossing the Saudi–Qatar land border and continuing on to Riyadh. This is an advance-booking, custom-coordinated trip — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Doha',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~580 km' },
  { label: 'Border', value: 'Qatar ↔ Saudi Arabia land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Doha — most commonly a West Bay or Corniche-area hotel, or wherever you're staying — and heads out toward the Qatar–Saudi Arabia land border, commonly known by the names of the posts on each side: Abu Samra on the Qatar side, Salwa on the Saudi side. It's the only road link between the two countries. You'll clear Qatari exit formalities first, then Saudi entry formalities on the other side — the reverse order of a trip that begins in Riyadh. From there, the route continues west through Saudi Arabia's Eastern Province and on to Riyadh.",
    "We don't quote a fixed total time for this route. Driving alone runs roughly 6-7 hours before any stops, and that's before accounting for the border itself — processing time at Abu Samra/Salwa depends on the day, the season and how straightforward everyone's documentation is, and can extend to 2-3 hours during Eid and other peak holiday periods. None of this is something anyone can promise in advance. We'll talk through realistic timing with you on WhatsApp once we know your travel date.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Entering Saudi Arabia from Qatar involves its own set of things to have ready, separate from what's needed for Qatar's side of the crossing. Here's what matters, and what our team will ask you about:",
  items: [
    'A valid passport for every passenger, meeting the validity period Saudi Arabia requires for entry.',
    "Confirmation of whether you need a Saudi visa or entry permit — this depends on your nationality and residency status, and should be checked against Saudi Arabia's current entry rules before travel, not assumed.",
    'That a vehicle and driver authorized for cross-border travel into Saudi Arabia are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance.',
    'Vehicle documentation and insurance valid for cross-border use between Qatar and Saudi Arabia.',
    'Realistic expectations around border wait times at Abu Samra/Salwa, which vary by day and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this crossing until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying from Doha to Riyadh',
  paragraphs: [
    "A private car makes more sense if the road itself serves a purpose for you — bringing more luggage than a flight comfortably allows, travelling as a family or group who'd rather stay together in one vehicle for the whole trip, or making stops along the way through the Eastern Province rather than going point to point.",
    "If a road trip from Doha does suit your plans, the reasoning behind booking it privately is the same as on any of our long-distance routes: one vehicle reserved for your group only, a pickup time in Doha built around your own schedule, and no changing vehicles partway through — including at the border itself.",
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
  { n: '1', title: 'Send your pickup point in Doha and travel date on WhatsApp', desc: 'Tell us where in Doha you need pickup, your date, and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, Saudi entry requirements and vehicle documentation for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom long-distance trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-doha', label: 'Also see: Riyadh to Doha private transfer' }
