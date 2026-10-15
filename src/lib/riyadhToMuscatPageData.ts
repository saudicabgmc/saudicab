import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /riyadh-to-muscat — international private transfer page.
 *
 * IMPORTANT — this route is genuinely different from the other GCC pages and
 * is intentionally framed more cautiously:
 * Saudi Arabia and Oman share a border only in a remote stretch of the Empty
 * Quarter with no standard paved crossing used for regular private passenger
 * travel. In practice, overland travel between the two normally transits
 * through the UAE — meaning TWO international border crossings, not one,
 * and a distance well over 1,900 km. This page says so directly rather than
 * presenting the route as equivalent in simplicity to Bahrain/Kuwait/Qatar/UAE.
 * This page should be treated as a draft pending explicit operational
 * confirmation from the business before being promoted the same way as the
 * other routes — see the implementation report for this flag.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Saudi Arabia to Oman',
  h1: 'Riyadh to Muscat, Oman Private Transfer',
  intro: "A private vehicle for the long-distance road journey from Riyadh to Muscat, Oman. This route is more complex than our other GCC transfers — overland travel between Saudi Arabia and Oman typically transits through the UAE, involving two international border crossings rather than one. Contact us on WhatsApp to discuss feasibility, routing and documentation for your specific trip before assuming this is a routine booking.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Dubai',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~1,900+ km (via the UAE)' },
  { label: 'Borders', value: 'Saudi Arabia → UAE → Oman (two crossings)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp — discuss feasibility first' },
]

export const journeySection = {
  heading: 'Why This Route Is Different',
  paragraphs: [
    "Saudi Arabia and Oman do share a border, but it runs through a remote stretch of the Empty Quarter with no standard paved crossing used for regular private passenger travel. In practice, the realistic overland route from Riyadh to Muscat goes via the UAE — crossing first into the UAE, then from the UAE into Oman at one of the UAE–Oman border posts. That means two separate international border crossings on this trip, not one, and a total distance well over 1,900 km.",
    "Given that complexity, we treat Riyadh-to-Muscat requests individually rather than as a standard listed route. We don't quote a journey time or confirm automatic availability on this page — message us with your travel dates and we'll tell you honestly whether we can arrange it for you, and what it would realistically involve.",
  ],
}

export const requirementsSection = {
  heading: 'What to Discuss Before Booking',
  intro: "Because this trip crosses two borders, the planning is more involved than our other GCC routes. Here's what matters, and what we'll need to talk through with you:",
  items: [
    'A valid passport for every passenger, meeting entry requirements for both the UAE and Oman.',
    'Confirmation of visa or entry permit requirements for the UAE and for Oman separately — these depend on your nationality and must both be checked.',
    'That a vehicle and driver actually authorized for this specific two-border routing are available for your dates — this is not guaranteed by default, and we confirm it with you individually rather than assuming it, the same way we assess the whole trip.',
    'Vehicle documentation and insurance valid for cross-border use across all three countries on this route, plus any permit or documentation charges that may apply.',
    'A realistic view of total trip time, given two border crossings rather than one.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with UAE and Omani immigration authorities respectively. We also don't guarantee that a vehicle or driver cleared for this two-border route is available for every request until our team confirms it with you directly. For current, authoritative entry requirements, check the official government portals for both countries before you travel.",
  officialLinkLabel: "UAE official government portal (u.ae) — also check Oman's official tourism portal",
  officialLinkUrl: 'https://u.ae/en',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying to Muscat',
  paragraphs: [
    "For this route specifically, flying is the far more practical option for most travelers, and we want to be upfront about that rather than present a two-border road trip as a routine alternative to a direct flight. A private car only makes sense here for travelers with a specific reason to go overland — for example, combining stops in the UAE along the way.",
    "If that's your situation, talk to us on WhatsApp about what you're planning before assuming this works like our other routes. We'd rather have an honest conversation upfront than confirm something we can't deliver.",
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals or couples for a trip of this length.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for a long multi-border trip.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your travel plan on WhatsApp', desc: 'Tell us your dates, passenger count, and that this is a Riyadh-to-Muscat request.' },
  { n: '2', title: 'We assess feasibility honestly', desc: "We'll tell you directly whether this trip can be arranged, given the two-border routing." },
  { n: '3', title: 'If feasible, we confirm documentation', desc: 'Passport, visa and vehicle documentation needs for both the UAE and Oman legs.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom, more complex trip, the fare and arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-dubai', label: 'Also see: Riyadh to Dubai private transfer' }
