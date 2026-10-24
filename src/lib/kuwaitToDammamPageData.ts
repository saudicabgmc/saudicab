/*
 * Content for /kuwait-to-dammam — the reverse direction of
 * /dammam-to-kuwait. Same Nuwaiseeb/Al-Khafji border crossing and Gulf
 * coastal highway drive, written from scratch around the
 * outbound-from-Kuwait experience: pickup in Kuwait City, Kuwaiti exit
 * formalities before Saudi entry formalities (the opposite order to
 * the Dammam-origin page), then the drive south to Dammam/Khobar.
 * No pricing/duration data exists for this route in pricingData.ts, so
 * no fare or guaranteed time is stated anywhere.
 *
 * IMPORTANT — corrected 2026-10-24:
 * - Distance: the previous "~290 km" figure was a significant
 *   underestimate. Independently re-verified for this (Kuwait-origin)
 *   page: Rome2Rio (Dhahran-Kuwait City: 424.8 km/~4h8m), Cleartrip
 *   (Kuwait City-Dammam: 416.55 km/~4h56m), Air Miles Calculator (393.6
 *   km, airport-to-airport, a lower outlier), and Himmera (469 km, a
 *   higher outlier). This converges with the ~410-436 km range already
 *   independently verified on dammam-to-kuwait (same physical road) —
 *   reused here because it's the same road, not assumed without
 *   checking. Driving time stated as "roughly 4-5 hours," excluding
 *   border processing, matching the same two most route-specific
 *   sources (Rome2Rio/Cleartrip).
 * - Al-Khafji segment distance: Wikipedia-derived sources place the town
 *   of Khafji ~130 km south of Kuwait City and ~300 km north of Dammam
 *   (one Saudi source gives 278 km instead). These figures may mix
 *   straight-line and road measurements and are NOT a confirmed road
 *   distance — on 2026-10-24 review, an earlier draft of this page
 *   surfaced "~120-130 km to the border" in the user-facing journey text,
 *   which overstated confidence in an unverified figure. That specific
 *   segment number has been removed from the rendered page; only the
 *   qualified ~410-436 km full-trip distance (supported by the
 *   city-pair sources above) is shown to users.
 * - The previous "about half the distance of our Kuwait-to-Riyadh route"
 *   claim no longer holds against the corrected Riyadh-to-Kuwait figure
 *   (~628-633 km, verified in that page's own audit) — ~410-436 km is
 *   closer to two-thirds of that distance, not half. This claim has been
 *   removed (same correction already made on dammam-to-kuwait).
 * - Crossing name: Nuwaiseeb (Kuwait side) / Al-Khafji (Saudi side), per
 *   the same verification used on riyadh-to-kuwait/kuwait-to-riyadh.
 * - heroContent.secondaryCta previously read "See Kuwait to Riyadh" while
 *   actually linking to /dammam-to-kuwait (via relatedLink.href, which
 *   was already correct) — a mismatched label, not a broken link. Fixed
 *   to describe the actual destination.
 * - whyPrivateCarSection previously said flying "rarely makes sense" for
 *   this route, directly contradicting the shared component's own
 *   unconditional "Flying is typically faster" note. Reworded to a
 *   neutral comparison (matching the wording already approved on
 *   dammam-to-kuwait) instead of suppressing or contradicting that note
 *   — no shared-component change needed.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Kuwait to Eastern Province',
  h1: 'Kuwait to Dammam Private Transfer',
  intro: "A private vehicle for the road journey from Kuwait City down the Gulf coastal highway to Dammam or Khobar, in Saudi Arabia's Eastern Province, crossing the Saudi–Kuwait border near Al-Khafji. Because the Eastern Province sits close to this crossing, this is a notably shorter trip than our Kuwait-to-Riyadh route. Contact us on WhatsApp to confirm feasibility, documentation and current availability.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Dammam to Kuwait',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~410–436 km' },
  { label: 'Border', value: 'Kuwait ↔ Saudi Arabia land crossing (Nuwaiseeb / Al-Khafji)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "This trip starts with pickup in Kuwait City — a hotel, residence or agreed location anywhere across the city — and heads south down the Gulf coastal highway to the Saudi–Kuwait border, crossed at Nuwaiseeb (Kuwait side) / Al-Khafji (Saudi side), with Dammam and Khobar a further drive south from there. The total road distance for the full trip is roughly 410-436 km — meaningfully shorter than our Kuwait-to-Riyadh route, though not as short as the previous figure on this page suggested. You'll clear Kuwaiti exit formalities first, then Saudi entry formalities on the other side, the reverse order to a trip that begins in Dammam.",
    "Even over a shorter distance than our Riyadh routes, we don't quote a fixed total time, since the time spent at the border depends on the day and on your own documentation being in order — neither of which we control. Tell us your travel date on WhatsApp and we'll talk through what's realistic.",
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
    'Your exact pickup location and timing in Kuwait City, and realistic expectations around border wait times at the Nuwaiseeb/Al-Khafji crossing, which vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Saudi immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this crossing until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check the official Saudi e-visa portal before you travel.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Why Book a Private Car for This Route',
  paragraphs: [
    "A private car offers genuine door-to-door convenience on this route, avoiding separate airport transfers and check-in time on both ends. That said, flying may still be preferable for some travelers depending on their schedule and total travel time — we'd rather say that plainly than oversell the drive. This option tends to suit business travelers, families visiting relatives across the border, or anyone who prefers a direct trip over coordinating a flight.",
    'As with our other routes, the core advantage of a private vehicle is the same: one vehicle for your group only, a pickup time in Kuwait City built around your own schedule, and no changing vehicles between the border and Dammam.',
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
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the trip.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your pickup point in Kuwait City and travel date on WhatsApp', desc: 'Tell us where in Kuwait City you need pickup, your date, and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, Saudi entry requirements and vehicle documentation for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/dammam-to-kuwait', label: 'Also see: Dammam to Kuwait City private transfer' }
