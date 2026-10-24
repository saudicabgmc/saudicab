/*
 * Content for /bahrain-to-dammam — the reverse direction of
 * /dammam-to-bahrain. Same King Fahd Causeway crossing, written from
 * scratch around the outbound-from-Bahrain experience: pickup in
 * Manama/Bahrain, Bahraini exit formalities before Saudi entry
 * formalities (the opposite order to the Dammam-origin page), then
 * arrival in Khobar or Dammam. No pricing/duration data exists for this
 * route in pricingData.ts, so no fare or guaranteed time is stated
 * anywhere.
 *
 * IMPORTANT — corrected 2026-10-24:
 * - Distance: the previous "~50 km" figure fit Khobar reasonably but
 *   understated Dammam, and wrongly implied the whole trip is "almost
 *   entirely" the causeway. Re-verified independently for this
 *   (Bahrain-origin) page: Rome2Rio puts Khobar-Manama at ~48-54 km and
 *   Dammam-Manama at ~69.8 km (straight-line 76 km) — converging with
 *   the ~50-75 km range already used on dammam-to-bahrain (same
 *   physical road, independently re-checked here, not just copied). The
 *   King Fahd Causeway itself is a well-documented 25 km toll bridge —
 *   a significant part of the trip, not nearly all of it, since there's
 *   also an approach drive on each side.
 * - Cross-border passenger-licensing: CONFIRMED via a PRIMARY source
 *   this time, not just news coverage — Bahrain's Ministry of
 *   Transportation and Telecommunications' own announcement page
 *   (mtt.gov.bh/news/transportation-ministry-announces-licensed-taxis-
 *   permitted-transport-passengers-king-fahd; fetched and verified via
 *   direct HTTP request 2026-10-24; page footer reads "Last Updated
 *   Date: 06-09-2026"). Effective September 6, 2026, only officially
 *   licensed taxis meeting approved technical requirements and no more
 *   than five years old may carry passengers across the King Fahd
 *   Causeway, in coordination with Saudi Arabia's Transport General
 *   Authority (named in the announcement; no separate independent TGA
 *   press release was located). Whether Saudi Cabs GMC's own fleet or
 *   drivers hold this licensing is NOT verified and is unknown — flagged
 *   for the business to confirm operationally; the page keeps
 *   individual feasibility confirmation on WhatsApp rather than
 *   promising eligibility. (This is a stronger finding than the
 *   equivalent note on bahrain-to-riyadh/riyadh-to-bahrain, which could
 *   only cite secondary news reports — those pages are unchanged here,
 *   out of scope for this task.)
 * - The hardcoded "Flying is typically faster" note in the shared
 *   InternationalTransferPage component is now suppressed on this page
 *   too (hideFlyingNote), matching the already-approved dammam-to-bahrain
 *   page — flying isn't a realistic comparison at this distance. No
 *   shared-component code was changed; this uses the existing optional
 *   prop, already used elsewhere, exactly as designed.
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
  { label: 'Approx. road distance', value: '~50–75 km' },
  { label: 'Crossing', value: 'King Fahd Causeway (Bahrain ↔ Saudi Arabia)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Manama or wherever you're staying in Bahrain, and heads onto the King Fahd Causeway — the 25 km toll bridge that's the only road link between Bahrain and Saudi Arabia. The total trip is roughly 50 km if you're headed to Khobar, which sits closest to the causeway, or around 70 km for Dammam itself — the causeway makes up a significant part of either distance, not nearly all of it, since there's also an approach drive on each side. You'll clear Bahraini exit formalities first, then Saudi entry formalities at the far end — the reverse order to a trip that begins in Dammam.",
    "Even on a route this short, we don't quote a fixed total time, because the causeway's immigration and customs checkpoints can move quickly or slowly depending on the day — weekends and public holidays are known for longer queues on both sides. We'll give you a realistic sense of timing once we know your travel date.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Even for a short crossing, entering Saudi Arabia from Bahrain has its own things to have ready. Here's what matters, and what our team will ask you about:",
  items: [
    'A valid passport (or, for GCC nationals, the ID accepted at the causeway) for every passenger.',
    "Confirmation of whether you need a Saudi visa or entry permit — this depends on your nationality and residency status, and should be checked against Saudi Arabia's current entry rules before travel, not assumed.",
    "Whether a vehicle and driver meeting this crossing's current licensing requirements can be arranged for your travel date — this is not guaranteed and must be confirmed with us directly, not assumed. Bahrain's Ministry of Transportation and Telecommunications confirms that, effective September 6, 2026, only officially licensed taxis meeting approved technical requirements and no more than five years old may carry passengers across the King Fahd Causeway. We have not confirmed whether our own fleet or drivers meet these requirements.",
    'Vehicle documentation and insurance valid for use on the King Fahd Causeway and within Saudi Arabia, plus any causeway toll or permit charges that may apply.',
    'Realistic expectations around causeway queue times on the Bahrain side, which vary by day and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. We also don't guarantee that any specific vehicle or driver meets the licensed cross-border passenger transport requirements set by Saudi and Bahraini transport authorities until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Why Book a Private Car for This Route',
  paragraphs: [
    "This is one of the more practical routes we arrange — short enough that a private car is a convenient way to make the crossing, especially if you'd rather have one vehicle for the whole trip instead of coordinating a separate ride on each side of the causeway.",
    'The core advantage is the same as all our private trips: one vehicle for your group for the whole journey, no transfer between vehicles at the causeway, and a pickup time in Bahrain built around your plans rather than a fixed schedule — subject to a vehicle and driver meeting the current causeway licensing requirements being available for your date.',
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the trip.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your pickup point in Bahrain and travel date on WhatsApp', desc: 'Tell us where in Bahrain you need pickup, your date, and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, Saudi entry requirements, current causeway licensing rules and vehicle documentation for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/dammam-to-bahrain', label: 'Also see: Dammam to Bahrain private transfer' }
