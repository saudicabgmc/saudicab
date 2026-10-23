import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /riyadh-to-abu-dhabi — international private transfer page.
 * Uses the same Saudi-UAE land border as the Dubai route, but Abu Dhabi is
 * closer to Saudi Arabia than Dubai is, so the distance and journey framing
 * are genuinely different — this is a distinct page, not a reskin of
 * riyadh-to-dubai. No pricing/duration data exists for this route, so no
 * fare or guaranteed time is stated anywhere.
 *
 * IMPORTANT — scope of facts used here:
 * - The road distance (~880-965 km) is a public geographic fact, not a business
 *   claim. Verified 2026-10-25 against four independent sources — Travelmath
 *   (~879 km), Rome2Rio (~885 km), distancecalculator.himmera.com (898 km /
 *   ~8h8m driving), and Air Miles Calculator (~964 km / ~9h41m driving) — which
 *   converge in the ~880-965 km / ~8-10 hour range. This replaces the previous
 *   ~1,050 km figure, which was an overestimate and has been corrected. A
 *   range is shown (not a single point figure) because sources genuinely
 *   disagree by up to ~85 km depending on exact routing.
 * - The Al Batha (Saudi side) / Al Ghuwaifat (UAE side) crossing is confirmed as
 *   the standard Saudi-UAE land route; Ghuwaifat is in the far west of Abu
 *   Dhabi emirate itself, so this crossing is, if anything, more directly
 *   associated with the Abu Dhabi route than with Dubai (which continues past
 *   Abu Dhabi). A travel-blog source (Property Finder) reports border
 *   processing at this crossing commonly takes roughly 1-2 hours, which this
 *   page states as a separate, non-guaranteed estimate distinct from driving
 *   time.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Saudi Arabia to the UAE',
  h1: 'Riyadh to Abu Dhabi Private Transfer',
  intro: "A private vehicle for the long-distance road journey from Riyadh to Abu Dhabi, the capital of the UAE, across the Saudi–UAE land border. This is an advance-booking, custom-coordinated trip rather than a same-day route — contact us on WhatsApp to confirm feasibility, documentation and current availability for your travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Dubai',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~880–965 km' },
  { label: 'Border', value: 'Saudi Arabia ↔ UAE land crossing' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp, in advance' },
]

export const journeySection = {
  heading: 'What the Journey Involves',
  paragraphs: [
    "Abu Dhabi is the UAE's capital — a seat of government and diplomacy rather than purely a tourism stop — and at roughly 880-965 km it's actually the nearer of the two UAE cities we cover, somewhat closer to the Saudi border than our Riyadh-to-Dubai route. The road crosses from Saudi Arabia into the UAE at the Al Batha (Saudi side) / Al Ghuwaifat (UAE side) border, with one immigration and customs check for everyone in the vehicle.",
    "What we won't do is promise you a fixed total journey time. Driving alone runs roughly 8 to 10 hours, and that's before border processing, which is commonly reported as taking another 1-2 hours at this crossing — though that figure varies by day, season and your own paperwork, and isn't something we can guarantee from here. Once we know your travel dates, we'll talk through what's realistic for your specific trip on WhatsApp.",
  ],
}

export const requirementsSection = {
  heading: 'What to Prepare Before Booking',
  intro: "A trip to the UAE capital involves more than a domestic transfer, so confirm the following with our team directly before you commit to a date:",
  items: [
    'A valid passport for every passenger, with the validity period required for entry into the UAE.',
    'Whether you need a visa or entry permit for the UAE — this depends on your nationality and current rules, so check official sources rather than assuming.',
    'That a vehicle and driver authorized for cross-border travel into the UAE are actually available on your travel date — not every vehicle in our fleet is cleared for international trips, and this has to be confirmed with us, not assumed.',
    'Any cross-border charges, permit costs or documentation fees that may apply, confirmed with our team before booking.',
    'Realistic expectations around border wait times, which vary and are outside our control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with UAE immigration authorities. We also don't guarantee that any specific vehicle or driver is pre-authorized for this route until our team confirms it with you directly. For current, authoritative entry requirements, check the UAE's official government portal before you travel.",
  officialLinkLabel: 'UAE official government portal (u.ae)',
  officialLinkUrl: 'https://u.ae/en',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying to Abu Dhabi',
  paragraphs: [
    "Abu Dhabi has its own international airport. Where a private car does make sense is for travelers who want to bring more luggage than a flight allows, families or groups who'd rather stay together in one vehicle than split across flight bookings, or anyone combining stops inside Saudi Arabia before continuing on to the capital.",
    "If you do choose the road, the reasoning is the same as on every trip we run: a vehicle booked for your group alone, a pickup built around your own schedule rather than a departure board, and no changing vehicles partway through the journey.",
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

export const relatedLink = { href: '/riyadh-to-dubai', label: 'Also see: Riyadh to Dubai private transfer' }
