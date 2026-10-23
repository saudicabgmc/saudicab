import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /riyadh-to-kuwait — international private transfer page.
 * Crosses the Saudi-Kuwait land border at Nuwaiseeb (Kuwait side) / Al-Khafji
 * (Saudi side), on the Gulf coastal highway via Dammam. No pricing/duration
 * data exists for this route in pricingData.ts, so no fare or guaranteed
 * time is stated anywhere.
 *
 * IMPORTANT — scope of facts used here:
 * - The road distance (~628-633 km) was verified 2026-10-23 against Rome2Rio
 *   (628.5 km, route-based estimate of ~8h11m driving) and distancecalculator.net
 *   (633.22 km) — these two sources converge tightly and match the figures
 *   independently supplied for this audit (Rome2Rio ~628.5 km, Travelmath
 *   ~632 km). This replaces the previous ~550 km figure, which was an
 *   underestimate and has been corrected. Two other sources (Air Miles
 *   Calculator 718.8 km/~7h44m, Cleartrip 711 km/~8h47m) gave a notably
 *   longer figure, likely reflecting a different routing choice — flagged as
 *   an outlier and not used for the headline range.
 * - Driving time (~8 hours) uses Rome2Rio's route-based estimate, not
 *   distancecalculator.net's 5h39m figure, which is a flat-speed arithmetic
 *   calculation (112 km/h constant) rather than a real route estimate and
 *   likely understates actual travel time.
 * - Crossing name: the Kuwait-side post is Nuwaiseeb; Al-Khafji is the
 *   Saudi-side town/area, not the crossing's own name on the Kuwait side.
 *   Previous copy used only "Al-Khafji," which is accurate for the Saudi side
 *   but incomplete — both names are now used together.
 * - Official Kuwait entry-requirements link: the previous officialLinkUrl
 *   (e.gov.kw) returned HTTP 403 on verification (even with a browser user
 *   agent) and could not be confirmed loading. kuwaitvisa.moi.gov.kw/visa-
 *   instructions — the Kuwait Ministry of Interior's current e-visa portal
 *   per multiple independent 2026 news sources (VisasNews, EY tax alerts,
 *   Kuwait Times), which replaced the older evisa.moi.gov.kw — returned a
 *   genuine HTTP 200 with substantial content. Switched to this
 *   directly-verified, more specific official source.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Saudi Arabia to Kuwait',
  h1: 'Riyadh to Kuwait City Private Transfer',
  intro: "A private vehicle for the long-distance road journey from Riyadh to Kuwait City, across the Saudi–Kuwait land border on the Gulf coastal highway. This is an advance-booking, custom-coordinated trip rather than a same-day route — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Bahrain',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~628–633 km' },
  { label: 'Border', value: 'Saudi Arabia ↔ Kuwait land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "Riyadh to Kuwait City runs roughly 628-633 km — up through the Eastern Province, then along the Gulf coastal highway to the Saudi–Kuwait border, crossed at Nuwaiseeb (Kuwait side) / Al-Khafji (Saudi side), before continuing into Kuwait toward the city. It's a shorter drive than our Dubai or Abu Dhabi routes, though longer than the Bahrain causeway crossing.",
    "What we won't do is give you a fixed total journey time. Driving alone runs roughly 8 hours before any stops, and the time spent at the Nuwaiseeb/Al-Khafji crossing adds more on top — it depends on the day and on your own documentation being in order, neither of which we control. Tell us your travel dates on WhatsApp and we'll talk through what's realistic for that specific day.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "Before you book a Riyadh-to-Kuwait trip, confirm the following with our team directly:",
  items: [
    'A valid passport for every passenger, with the validity period required for entry into Kuwait.',
    'Whether you need a visa or entry permit for Kuwait — this depends on your nationality and current rules, so check official sources rather than assuming.',
    'That a vehicle and driver authorized for cross-border travel into Kuwait are actually available on your travel date — not every vehicle in our fleet is cleared for this crossing, and it must be confirmed with us in advance, not assumed.',
    'Any cross-border charges, permit costs or documentation fees that may apply, confirmed with our team before booking.',
    'Realistic expectations around border wait times at the Nuwaiseeb/Al-Khafji crossing, which vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Kuwaiti immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this route until our team confirms it with you directly. For current, authoritative entry requirements, check the official Kuwait Ministry of Interior visa portal before you travel.",
  officialLinkLabel: 'Kuwait Ministry of Interior visa portal (kuwaitvisa.moi.gov.kw)',
  officialLinkUrl: 'https://kuwaitvisa.moi.gov.kw/visa-instructions',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying to Kuwait',
  paragraphs: [
    "Kuwait City is close enough that the gap between flying and driving is smaller here than on our longer GCC routes, once you factor in airport check-in and transfer time on either end. A private car tends to suit people carrying more than carry-on luggage, families who'd rather stay together in one vehicle, or anyone making other stops in the Eastern Province on the way north.",
    "We're not going to pretend a private car beats flying for everyone — for some travelers it simply won't. Where a private vehicle does pay off is the same reason it does on every route we run: one car for your group only, a pickup built around your own schedule, and no changing vehicles between Riyadh and the border.",
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals, couples or a small family travelling light.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags for a longer trip.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for the long drive.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your travel dates on WhatsApp', desc: 'Tell us when you want to travel and how many passengers.' },
  { n: '2', title: 'We confirm feasibility and documentation', desc: "We'll talk through passport, visa and vehicle documentation needs for your trip." },
  { n: '3', title: 'Choose your vehicle', desc: 'Sedan, Hyundai Staria or GMC Yukon, based on your group and luggage.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom long-distance trip, the fare and final arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-bahrain', label: 'Also see: Riyadh to Bahrain private transfer' }
