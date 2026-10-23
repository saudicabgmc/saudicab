import type { FAQItem } from '@/components/FAQSection'

/*
 * Content for /riyadh-to-muscat — international private transfer page.
 *
 * IMPORTANT — verified 2026-10-23, correcting a previous factual error:
 * A direct Saudi Arabia-Oman land crossing DOES exist and has been open since
 * December 11, 2021 — the Al-Rub' Al-Khali (Empty Quarter) border crossing,
 * confirmed via Arab News, Muscat Daily, Oman Observer and Saudipedia. It is
 * open 24/7 for passenger vehicles (only commercial trucks had restricted
 * hours at opening). This replaces the page's previous claim that overland
 * travel must transit the UAE via two border crossings — that claim was
 * incorrect and has been corrected throughout this page.
 *
 * Distance: no single authoritative Riyadh-to-Muscat city-pair figure for the
 * new direct road was found. The ~1,300 km estimate used here rests on
 * Rome2Rio's direct Riyadh-to-Muscat route figure (~1,313 km / ~14h22m),
 * which converges closely with the ~1,310 km figure separately supplied for
 * this audit, and is well below the old ~1,640-1,900+ km UAE-transit
 * figures — consistent with this being the newer, shorter direct route.
 * This convergence is suggestive, not definitive independent verification:
 * an earlier attempt to cross-check it against component road-segment
 * distances (the Empty Quarter road's own ~725 km, split ~161 km Oman side
 * / ~564 km Saudi side to the crossing) was abandoned after discovering that
 * "Al Batha" names two different, unrelated Saudi locations in available
 * sources (the separate Saudi-UAE border crossing, and an apparently
 * different highway junction referenced near the Oman road) — making that
 * component breakdown unreliable as corroboration. Used here as "~1,300 km,"
 * explicitly approximate, not an exact or guaranteed figure.
 *
 * Driving time is deliberately NOT stated as a specific number: available
 * estimates for this newer corridor were too inconsistent across sources to
 * present with confidence (see audit report for details).
 *
 * IMPORTANT — this does not confirm Saudi Cabs GMC can operate this transfer:
 * the existence of a public crossing does not by itself mean a specific
 * vehicle/driver is authorized for it, insured for it, or available for any
 * given date. This page keeps individual feasibility confirmation on
 * WhatsApp, same as before — only the underlying route facts changed.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Saudi Arabia to Oman',
  h1: 'Riyadh to Muscat, Oman Private Transfer',
  intro: "A private vehicle for the long-distance road journey from Riyadh to Muscat, Oman, via the direct Saudi–Oman land crossing in the Empty Quarter. This is a long, custom-coordinated trip rather than a routine booking — contact us on WhatsApp to confirm feasibility, documentation and current availability for your specific travel dates before assuming this works like our shorter GCC routes.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Dubai',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~1,300 km (direct route)' },
  { label: 'Border', value: 'Saudi Arabia ↔ Oman direct crossing (Empty Quarter)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp — discuss feasibility first' },
]

export const journeySection = {
  heading: 'Why This Route Is Different',
  paragraphs: [
    "Saudi Arabia and Oman share a direct land border crossing in a remote stretch of the Empty Quarter (Rub' al Khali) — open since December 2021, and it doesn't require transiting through the UAE. The road distance is roughly 1,300 km, though we treat that as an approximate figure rather than an exact one, since route sources vary and the precise distance depends on your pickup point in Riyadh.",
    "That said, a public road existing doesn't automatically mean we can offer this transfer on demand. This is still a long, remote desert drive, and we treat every Riyadh-to-Muscat request individually rather than as a standard listed route — confirming vehicle and driver authorization, documentation and current availability before accepting a booking. We don't quote a fixed driving time on this page; message us with your travel dates and we'll discuss realistic timing honestly once we've confirmed feasibility.",
  ],
}

export const requirementsSection = {
  heading: 'What to Discuss Before Booking',
  intro: "Even with a direct border crossing, this is a long, remote desert route, so the planning is more involved than our shorter GCC routes. Here's what matters, and what we'll need to talk through with you:",
  items: [
    'A valid passport for every passenger, meeting Oman entry requirements.',
    'Confirmation of visa or entry permit requirements for Oman — this depends on your nationality and must be checked against current rules, not assumed.',
    'That a vehicle and driver actually authorized for this specific crossing are available for your dates — this is not guaranteed by default, and we confirm it with you individually rather than assuming it.',
    'Vehicle documentation and insurance valid for cross-border use between Saudi Arabia and Oman, plus any permit or documentation charges that may apply.',
    'A realistic view of total trip time for a long desert crossing, including border processing, which we don\'t control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with Omani immigration authorities. The existence of this border crossing does not by itself confirm that a specific vehicle or driver is authorized for it — we don't guarantee that until our team confirms it with you directly. For current, authoritative Oman entry requirements, check Oman's official e-visa portal before you travel. If you're instead considering the longer route via the UAE, the UAE's official government portal is also worth checking — but neither country's portal confirms entry requirements for the other.",
  officialLinkLabel: 'Oman official e-visa portal (Royal Oman Police — evisa.rop.gov.om)',
  officialLinkUrl: 'https://evisa.rop.gov.om',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying to Muscat',
  paragraphs: [
    "For most travelers, flying is still the more practical option for this distance, and we'd rather say so directly than present a long desert drive as a routine alternative to a direct flight. A private car makes more sense for travelers with a specific reason to go overland — for example, wanting to bring more luggage than a flight allows, or treating the drive itself as part of the trip.",
    "If that's your situation, talk to us on WhatsApp about what you're planning before assuming this works exactly like our shorter GCC routes. We'd rather have an honest conversation about feasibility upfront than confirm something we can't deliver.",
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals or couples for a trip of this length.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for a long multi-border trip.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your travel plan on WhatsApp', desc: 'Tell us your dates, passenger count, and that this is a Riyadh-to-Muscat request.' },
  { n: '2', title: 'We assess feasibility honestly', desc: "We'll tell you directly whether this trip can be arranged for your dates." },
  { n: '3', title: 'If feasible, we confirm documentation', desc: 'Passport, visa and vehicle documentation needs for the Oman crossing.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom, more complex trip, the fare and arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-dubai', label: 'Also see: Riyadh to Dubai private transfer' }
