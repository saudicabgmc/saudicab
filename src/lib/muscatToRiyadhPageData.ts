/*
 * Content for /muscat-to-riyadh — the reverse direction of
 * /riyadh-to-muscat.
 *
 * IMPORTANT — verified/corrected 2026-10-24: a direct Saudi Arabia-Oman
 * land crossing DOES exist and has been open since December 11, 2021 —
 * the Al-Rub' Al-Khali (Empty Quarter) border crossing, confirmed via
 * Arab News, Muscat Daily, Oman Observer and Saudipedia (same sources
 * used to correct riyadh-to-muscat earlier this session). A Muscat Daily
 * report dated 2026-09-02 confirms passenger traffic at this crossing
 * "has grown." This replaces this page's previous claim that overland
 * travel must transit the UAE via two border crossings — that claim was
 * incorrect and has been corrected throughout this page, matching the
 * correction already made on riyadh-to-muscat (same physical road).
 *
 * Distance: no single authoritative Muscat-to-Riyadh city-pair figure for
 * the direct road was found. Used here as "~1,300 km," matching
 * riyadh-to-muscat's own independently-verified figure (Rome2Rio
 * ~1,313 km / ~14h22m for the Riyadh-Muscat city pair, converging with a
 * separately-supplied ~1,310 km estimate) — reused here because it is the
 * same physical road, not assumed without basis. Explicitly approximate,
 * not an exact or guaranteed figure. Driving time is NOT stated as a
 * specific number: available estimates for this corridor were too
 * inconsistent across sources to present with confidence (same finding as
 * riyadh-to-muscat).
 *
 * IMPORTANT — this does not confirm Saudi Cabs GMC can operate this
 * transfer via either route: the existence of a public crossing does not
 * by itself mean a specific vehicle/driver is authorized for it, insured
 * for it, or available for any given date — for either the direct Oman-
 * Saudi route or the longer UAE-transit alternative. This page keeps
 * individual feasibility confirmation on WhatsApp for both route options.
 * No pricing or duration data exists for this route, so no fare or
 * guaranteed time is stated anywhere.
 */

export type BText = { en: string; ar: string }

export const heroContent = {
  eyebrow: 'International Transfer • Oman to Saudi Arabia',
  h1: 'Muscat to Riyadh Private Transfer',
  intro: "A private vehicle for travelers heading from Muscat into Saudi Arabia's capital, via the direct Oman–Saudi land crossing in the Empty Quarter. This is a long, custom-coordinated trip rather than a routine booking — contact us on WhatsApp to confirm feasibility, documentation and current availability for your specific travel dates.",
  primaryCta: 'Ask About This Trip on WhatsApp',
  secondaryCta: 'See Riyadh to Muscat',
}

export const quickFacts: { label: string; value: string }[] = [
  { label: 'Approx. road distance', value: '~1,300 km (direct route)' },
  { label: 'Border', value: 'Oman ↔ Saudi Arabia direct crossing (Empty Quarter)' },
  { label: 'Vehicle options', value: 'Sedan, Hyundai Staria, GMC Yukon' },
  { label: 'Booking', value: 'WhatsApp — discuss feasibility first' },
]

export const journeySection = {
  heading: 'Why This Route Is Different',
  paragraphs: [
    "Oman and Saudi Arabia share a direct land border crossing in a remote stretch of the Empty Quarter (Rub' al Khali) — open since December 2021, and it doesn't require transiting through the UAE. There's also a longer alternative via the UAE (two border crossings instead of one), which can make sense in some specific situations — we can discuss both options with you. The road distance for the direct route is roughly 1,300 km, though we treat that as an approximate figure rather than an exact one, since route sources vary and the precise distance depends on your pickup point in Muscat.",
    "That said, a public road existing doesn't automatically mean we can offer this transfer on demand, by either route. This is still a long, remote drive, and we treat every Muscat-to-Riyadh request individually rather than as a standard listed route — confirming vehicle and driver authorization, documentation and current availability before accepting a booking. We don't quote a fixed driving time on this page; message us with your travel dates and we'll discuss realistic timing honestly once we've confirmed feasibility.",
  ],
}

export const requirementsSection = {
  heading: 'What to Discuss Before Booking',
  intro: "Even with a direct border crossing, this is a long, remote route, so the planning is more involved than our shorter GCC routes. Here's what matters, and what we'll need to talk through with you:",
  items: [
    'A valid passport for every passenger, meeting Saudi Arabia entry requirements — and UAE entry requirements too, if the UAE-transit route is the one that ends up being used for your trip.',
    'Confirmation of visa or entry permit requirements for Saudi Arabia (and for the UAE, if that route applies) — this depends on your nationality and must be checked against current rules, not assumed.',
    'That a vehicle and driver actually authorized for the specific route and crossing(s) involved are available for your dates — this is not guaranteed by default for either the direct route or the UAE-transit alternative, and we confirm it with you individually rather than assuming it.',
    'Vehicle documentation and insurance valid for cross-border use across every country your specific route crosses, plus any permit or documentation charges that may apply.',
    'A realistic view of total trip time for a long cross-border journey, including border processing, which we don\'t control.',
  ],
  disclaimer: "Saudi Cabs GMC provides private transportation only — we are not a travel agency and are not responsible for visa approval or entry decisions, which rest with the relevant immigration authorities for each country on your route. The existence of these border crossings does not by itself confirm that a specific vehicle or driver is authorized for them — we don't guarantee that until our team confirms it with you directly. For current, authoritative Saudi entry requirements, check Saudi Arabia's official e-visa portal before you travel; for Oman-specific questions, Oman's official e-visa portal is also worth checking.",
  officialLinkLabel: 'Saudi Arabia official e-visa portal (visitsaudi.com)',
  officialLinkUrl: 'https://visa.visitsaudi.com/',
}

export const whyPrivateCarSection = {
  heading: 'Private Car vs Flying from Muscat to Riyadh',
  paragraphs: [
    "A private car makes sense here for travelers with a specific reason to go overland — for example, wanting to bring more luggage than a flight allows, or treating the drive itself as part of the trip, whether via the direct Oman–Saudi crossing or (in specific cases) the longer UAE-transit route.",
    "If that's your situation, talk to us on WhatsApp about what you're planning before assuming this works like our shorter GCC routes. We'd rather have an honest conversation about feasibility upfront than confirm something we can't deliver.",
  ],
}

export const vehicleOptions: { name: BText; seats: string; note: string }[] = [
  { name: { en: 'Sedan', ar: 'سيدان' }, seats: '4 seats', note: 'Suits individuals or couples for a trip of this length.' },
  { name: { en: 'Hyundai Staria', ar: 'هيونداي ستاريا' }, seats: '7 seats', note: 'More practical for families or groups with multiple bags.' },
  { name: { en: 'GMC Yukon', ar: 'GMC يوكون' }, seats: '7 seats, VIP', note: 'A more spacious, premium option for a long multi-border trip.' },
]

export const bookingSteps: { n: string; title: string; desc: string }[] = [
  { n: '1', title: 'Send your travel plan on WhatsApp', desc: 'Tell us your pickup point in Muscat, dates, passenger count, and that this is a Muscat-to-Riyadh request.' },
  { n: '2', title: 'We assess feasibility honestly', desc: "We'll tell you directly whether this trip can be arranged, and which route — direct or via the UAE — is realistic for your dates." },
  { n: '3', title: 'If feasible, we confirm documentation', desc: 'Passport, visa and vehicle documentation needs for the countries your specific route crosses.' },
  { n: '4', title: 'Confirm the trip and current rate', desc: 'As this is a custom, more complex trip, the fare and arrangements are confirmed directly with you.' },
]

export const relatedLink = { href: '/riyadh-to-muscat', label: 'Also see: Riyadh to Muscat private transfer' }
