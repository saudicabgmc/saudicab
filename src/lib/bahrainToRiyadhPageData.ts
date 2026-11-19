/*
 * Content for /bahrain-to-riyadh — the reverse direction of /riyadh-to-bahrain.
 * Same physical road and the same King Fahd Causeway crossing, but written
 * from scratch around the outbound-from-Bahrain experience: pickup in
 * Bahrain, exiting Bahrain and entering Saudi Arabia at the causeway (the
 * opposite order of formalities to the Riyadh-origin page), then the long
 * drive west into Riyadh. Distance mirrors riyadhToBahrainPageData.ts
 * because it's the same road — not a new or invented figure.
 * No pricing/duration data exists for this route in pricingData.ts, so no
 * fare or guaranteed time is stated anywhere.
 *
 * IMPORTANT — scope of facts used here:
 * - The road distance (~460-475 km) was corrected 2026-10-24 to match the
 *   figure independently verified on riyadh-to-bahrain (same physical road,
 *   same causeway): Rome2Rio Riyadh-Manama 459.2 km, Riyadh Central
 *   Bus-Manama 471.1 km, Riyadh-Muharraq 464.4 km. The previous "~480 km"
 *   on this page was a stale mirror of riyadh-to-bahrain's own earlier,
 *   already-corrected ~480 km error, so it was never updated when that page
 *   was fixed — now brought back in sync.
 * - Cross-border passenger-transport eligibility: a regulation reportedly
 *   effective September 6, 2026 — covered by at least 5 independent Gulf
 *   news outlets (Gulf News, GDN, onmanorama, Daily Tribune Bahrain,
 *   GCC Business News), naming Bahrain's Undersecretary for Land Transport
 *   and Post and Saudi Arabia's Transport General Authority as the source —
 *   reportedly permits ONLY officially licensed taxis, meeting approved
 *   technical/safety standards and no more than five years old, to carry
 *   passengers across the King Fahd Causeway. Attempted 2026-10-24 to
 *   verify against a PRIMARY official source: tga.gov.sa does not resolve
 *   (likely not the TGA's real domain); mot.gov.sa and mtt.gov.bh (Bahrain's
 *   Ministry of Transportation and Telecommunications) both resolve as
 *   genuine live government sites, but no specific announcement/press-
 *   release page could be located on either via search. This claim is
 *   therefore NEWS-SOURCED, not primary-source-confirmed — the page wording
 *   reflects that distinction explicitly rather than stating it as settled
 *   fact.
 * - 2026-11-19: the business has confirmed that Bahrain-side pickup and
 *   cross-border transport are arranged through an authorized Bahrain-based
 *   operator/partner with the required licensing and documents, rather than
 *   our own Saudi-registered fleet operating independently as a Bahrain
 *   taxi. Page wording updated accordingly (journeySection, requirements,
 *   whyPrivateCarSection) — per-booking availability is still not
 *   guaranteed and must be confirmed directly. No partner name is used on
 *   the page per instruction.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Bahrain to Saudi Arabia',
  h1: 'Bahrain to Riyadh Private Transfer',
  intro: "A private vehicle for travelers heading from Bahrain into Saudi Arabia's capital, crossing the King Fahd Causeway and continuing on to Riyadh. This is an advance-booking, custom-coordinated trip — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Bahrain',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~460–475 km' },
  { label: 'Crossing', value: 'King Fahd Causeway (Bahrain ↔ Saudi Arabia)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Bahrain — typically Manama or wherever you're staying. Pickup and cross-border transport on the Bahrain side are arranged through an authorized Bahrain-based operator/partner, rather than our Saudi-registered fleet operating independently as a taxi within Bahrain, before heading onto the King Fahd Causeway, the 25 km toll bridge that's the only road link between Bahrain and Saudi Arabia. You'll clear Bahraini exit formalities at the start of the causeway and Saudi entry formalities at the far end, the reverse order of a trip that begins in Riyadh. From there, the route continues through Saudi Arabia's Eastern Province and on to Riyadh with Saudi Cabs GMC.",
    "We don't quote a fixed total time for this route. The causeway crossing itself varies in length depending on the day and how busy it is — weekends and public holidays are known to see longer queues — and once you're through, it's still several hours of highway driving west to reach Riyadh. We'll talk through realistic timing with you on WhatsApp once we know your travel date.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Entering Saudi Arabia from Bahrain involves its own set of things to have ready, separate from what's needed for Bahrain's side of the crossing. Here's what matters, and what our team will ask you about:",
  items: [
    'A valid passport (or, for GCC nationals, the ID accepted at the causeway) for every passenger.',
    "Confirmation of whether you need a Saudi visa or entry permit — this depends on your nationality and residency status, and should be checked against Saudi Arabia's current entry rules before travel, not assumed from general knowledge.",
    "Whether a licensed vehicle and driver for your travel date can be confirmed — Bahrain pickup and the crossing itself are handled through an authorized Bahrain-based operator/partner, and availability must still be confirmed with us directly for your specific dates, not assumed. According to multiple regional news reports (not independently confirmed against primary Saudi or Bahraini government sources), regulations effective since September 2026 reportedly limit this crossing to officially licensed taxis meeting approved technical and safety standards, no more than five years old.",
    'Vehicle documentation and insurance valid for use on the King Fahd Causeway and within Saudi Arabia, plus any causeway toll or permit charges that may apply.',
    'Realistic expectations around causeway queue times on the Bahrain side, which vary by day and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. Bahrain pickup and the crossing itself are arranged through an authorized Bahrain-based operator/partner, not by our own Saudi-registered fleet operating independently as a Bahrain taxi; we still don't guarantee vehicle, driver or partner availability for any specific date until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying from Bahrain to Riyadh',
  paragraphs: [
    "A private car makes more sense if you're specifically arriving in Bahrain and continuing overland — for example, if you're already travelling by road through the region, bringing more luggage than a flight comfortably allows, or moving as a family who'd rather stay together in one vehicle for the whole trip.",
    "If a road trip from Bahrain does suit your plans, the reasoning behind booking it privately is the same as on any of our long-distance routes: a vehicle reserved for your group only and a pickup time in Bahrain built around your own schedule, coordinated end-to-end between our authorized Bahrain-side partner and Saudi Cabs GMC.",
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags for the longer leg into Riyadh.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the trip.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your pickup point in Bahrain and travel date on WhatsApp', desc: 'Tell us where in Bahrain you need pickup, your date, and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, Saudi entry requirements and vehicle documentation for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-bahrain', label: 'Also see: Riyadh to Bahrain private transfer' }
