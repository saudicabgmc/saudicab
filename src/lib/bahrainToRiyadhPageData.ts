/*
 * Content for /bahrain-to-riyadh — the reverse direction of /riyadh-to-bahrain.
 * Same physical road and the same King Fahd Causeway crossing, but written
 * from scratch around the outbound-from-Bahrain experience: pickup in
 * Bahrain, exiting Bahrain and entering Saudi Arabia at the causeway (the
 * opposite order of formalities to the Riyadh-origin page), then the long
 * drive west into Riyadh. Distance mirrors riyadhToBahrainPageData.ts
 * (~480 km) because it's the same road — not a new or invented figure.
 * No pricing/duration data exists for this route in pricingData.ts, so no
 * fare or guaranteed time is stated anywhere.
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
  { label: 'Approx. road distance', value: '~480 km' },
  { label: 'Crossing', value: 'King Fahd Causeway (Bahrain ↔ Saudi Arabia)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Bahrain — typically Manama or wherever you're staying — and heads onto the King Fahd Causeway, the 25 km toll bridge that's the only road link between Bahrain and Saudi Arabia. You'll clear Bahraini exit formalities at the start of the causeway and Saudi entry formalities at the far end, the reverse order of a trip that begins in Riyadh. From there, the route continues through Saudi Arabia's Eastern Province and on to Riyadh.",
    "We don't quote a fixed total time for this route. The causeway crossing itself varies in length depending on the day and how busy it is — weekends and public holidays are known to see longer queues — and once you're through, it's still several hours of highway driving west to reach Riyadh. We'll talk through realistic timing with you on WhatsApp once we know your travel date.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Entering Saudi Arabia from Bahrain involves its own set of things to have ready, separate from what's needed for Bahrain's side of the crossing. Here's what matters, and what our team will ask you about:",
  items: [
    'A valid passport (or, for GCC nationals, the ID accepted at the causeway) for every passenger.',
    "Confirmation of whether you need a Saudi visa or entry permit — this depends on your nationality and residency status, and should be checked against Saudi Arabia's current entry rules before travel, not assumed from general knowledge.",
    'That a vehicle and driver authorized for causeway crossing into Saudi Arabia are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance.',
    'Vehicle documentation and insurance valid for use on the King Fahd Causeway and within Saudi Arabia, plus any causeway toll or permit charges that may apply.',
    'Realistic expectations around causeway queue times on the Bahrain side, which vary by day and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this crossing until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying from Bahrain to Riyadh',
  paragraphs: [
    "Flying from Bahrain International Airport is the faster way to reach Riyadh for most travelers, and we'd rather say that directly than oversell a causeway crossing that isn't the right fit for everyone. A private car makes more sense if you're specifically arriving in Bahrain and continuing overland — for example, if you're already travelling by road through the region, bringing more luggage than a flight comfortably allows, or moving as a family who'd rather stay together in one vehicle for the whole trip.",
    "If a road trip from Bahrain does suit your plans, the reasoning behind booking it privately is the same as on any of our long-distance routes: one vehicle reserved for your group only, a pickup time in Bahrain built around your own schedule, and no changing vehicles partway through — including at the causeway itself.",
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
