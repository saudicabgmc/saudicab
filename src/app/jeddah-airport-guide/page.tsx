import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'
import { getPricing } from '@/lib/pricingData'

export const metadata: Metadata = {
  title: 'Jeddah Airport Transfer Guide 2026 | KAIA to Makkah & Madinah',
  description: 'Complete guide to transfers from King Abdulaziz International Airport Jeddah to Makkah, Madinah, Taif. Fixed price private cabs, name-board pickup, 24/7.',
  alternates: { canonical: 'https://saudicabsgmc.com/jeddah-airport-guide' },
}

/*
 * FAQ content lives in one place and is used for BOTH the visible FAQ
 * section and the FAQPage schema below, so the two can never drift apart
 * (they previously did: the schema had only 4 questions while the
 * visible faqs prop had 6 — fixed 2026-10-24, same pattern as the
 * equivalent fix already made on /makkah-transport-guide).
 *
 * Sources for the corrected facts below (verified 2026-10-24):
 * - Jeddah Airport to Makkah: corrected to ~92-95 km / ~1 hr (varies),
 *   matching the independently-verified figure already used on
 *   /makkah-transport-guide (same airport-to-city trip) rather than the
 *   previous "~90 km, 50-60 min" / quick-answer's unqualified "55
 *   minutes."
 * - Jeddah Airport to Madinah: widened to ~3.5-4 hrs to exactly match
 *   the site's own dedicated /jeddah-airport-to-madinah page (distance
 *   ~390 km, duration ~3.5-4 hrs) rather than this guide's narrower,
 *   slightly-inconsistent "~4 hrs."
 * - Jeddah Airport to Taif: corrected ~155 km to ~180-200 km on final
 *   review (2026-10-24) — an initial pass had used ~155-180 km based on
 *   Jeddah CITY (not airport) to Taif (~163 km via Rome2Rio), which
 *   undershoots the airport-specific trip. A second, airport-targeted
 *   search found closer sources: airport-to-Taif-city ~181 km/~2h12m,
 *   airport-to-Taif-airport ~200 km/~2h18m, consistent with Jeddah city
 *   center sitting ~15-20 km closer to Taif than the airport does. No
 *   dedicated /jeddah-airport-to-taif page exists to cross-check
 *   against, and the route crosses the mountainous Al-Hada road, so a
 *   range is kept rather than a single figure.
 * - Jeddah Airport to Jeddah city centre: ~18 km corrected to ~15-19 km
 *   on final review — sources split between ~14.3 km and ~15 km
 *   (trip.com airport-status pages) and ~19 km (a flight-booking site);
 *   no single figure is clearly authoritative, so the full spread is
 *   kept as a range rather than narrowed arbitrarily.
 * - FACTUAL CORRECTION: the FAQ previously stated "the Haramain Train
 *   does not connect to the airport." This is incorrect — the Haramain
 *   High-Speed Railway's own ticketing portal (sar.hhr.sa, verified live
 *   via direct HTTP fetch earlier this session) lists "King Abdulaziz
 *   International Airport (Jeddah)" as one of its own stations. Fixed to
 *   state the train does serve the airport, while still noting schedule/
 *   ticket availability should be checked directly with the operator.
 * - Removed "driver name within minutes" and "flight tracking" type
 *   promises from the pickup-process copy — not confirmed as an actual
 *   service feature. Added an explicit note that the exact terminal and
 *   meeting point must be confirmed with the passenger, since KAIA has
 *   multiple terminals.
 * - Pricing: Jeddah Airport -> Makkah/Madinah fares are read directly
 *   from pricingData.ts (ids 'jed-makkah', 'jed-madinah') via
 *   getPricing(), not hardcoded here, so this table can never drift from
 *   the project's single pricing source. Taif and Jeddah-city transfers
 *   are NOT priced here (no verified pricing entry exists for either) —
 *   visitors are linked to the existing dedicated pages instead.
 */
const faqs = [
  {
    q: 'How far is Jeddah Airport from Makkah?',
    a: "King Abdulaziz International Airport (KAIA, IATA: JED) is approximately 92–95 km from Masjid al-Haram in Makkah. A private taxi typically takes around an hour, but traffic, your arrival terminal, and your exact destination in Makkah all affect the actual time — this is an estimate, not a guaranteed time.",
  },
  {
    q: 'How do I book a taxi from Jeddah Airport to Makkah?',
    a: 'Book via WhatsApp at +92 309 7811785. Send your flight number, arrival date/time, destination or hotel name, passenger count, and preferred vehicle. Fixed price confirmed before booking, no meter. Your driver meets you at the arrivals meeting point with a name board — we confirm the exact terminal and meeting point with you based on your flight.',
  },
  {
    q: 'How long is the drive from Jeddah Airport to Madinah?',
    a: 'Approximately 390 km, typically taking 3.5–4 hours by private cab depending on traffic — an estimate, not a guaranteed time. Saudi Cabs GMC offers fixed-price direct service on this route.',
  },
  {
    q: 'Is there public transport from Jeddah Airport to Makkah?',
    a: "The Haramain High-Speed Railway does have a station serving King Abdulaziz International Airport, connecting to Makkah and Madinah — but schedules, ticket availability and current service frequency at this station should be checked directly with the operator before relying on it, especially in peak season. A pre-booked private taxi remains a direct, door-to-door alternative if you'd rather not transfer at a train station.",
  },
  {
    q: 'Can I book the airport taxi in advance?',
    a: 'Yes — advance booking is recommended, especially during busy Hajj and Umrah periods. Send your flight number, arrival time and hotel details through WhatsApp so the booking can be arranged ahead of your travel date.',
  },
  {
    q: 'What terminal do Umrah flights arrive at in Jeddah?',
    a: 'Terminal assignment varies by airline, flight and operating arrangements, and King Abdulaziz International Airport has multiple terminals. Confirm your terminal with your airline, and share it with us when booking so we can confirm the exact meeting point.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const airportPricing = getPricing('jed-makkah', 'jed-madinah')

const waMessage = `Hello, I'd like to book an airport transfer from Jeddah Airport (KAIA).
Flight number:
Arrival date/time:
Destination/hotel name:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon): `

export default function JeddahAirportGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        url="https://saudicabsgmc.com/jeddah-airport-guide"
        dateModified="2026-10-24"
        tag="Airport Transfer Guide"
        title="Jeddah Airport (KAIA) to Makkah & Madinah — Complete Transfer Guide 2026"
        subtitle="Everything you need to know about getting from King Abdulaziz International Airport to Makkah, Madinah, Taif and beyond."
        quickAnswer="One of the most convenient options from Jeddah Airport (KAIA) to Makkah is a pre-booked private taxi with Saudi Cabs GMC — approximately 92–95 km, around an hour (traffic and pickup point affect actual time), fixed price confirmed before booking. Your driver meets you at arrivals with a name board; we'll confirm your exact terminal and meeting point with you. Book via WhatsApp: +92 309 7811785."
        waMessage={waMessage}
        keyFacts={[
          { icon: '✈️', label: 'Airport Code', value: 'KAIA — JED' },
          { icon: '🕋', label: 'To Makkah', value: '~92–95 km / ~1 hr (varies)' },
          { icon: '🕌', label: 'To Madinah', value: '~390 km / ~3.5–4 hrs' },
          { icon: '🌹', label: 'To Taif', value: '~180–200 km / ~2–2.5 hrs' },
          { icon: '🏙️', label: 'To Jeddah City', value: '~15–19 km / ~20–30 min' },
          { icon: '⏰', label: 'Cab Service', value: '24/7 All Terminals' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Airport Transfer' },
          { href: '/jeddah-airport-to-madinah', label: 'Jeddah Airport → Madinah', tag: 'Airport Transfer' },
          { href: '/makkah-to-jeddah-airport', label: 'Makkah → Jeddah Airport', tag: 'Return Airport Transfer' },
          { href: '/jeddah-taxi-service', label: 'Jeddah Taxi Service', tag: 'City Page' },
          { href: '/makkah-transport-guide', label: 'Makkah Transport Guide', tag: 'Guide' },
          { href: '/gmc-yukon-hire', label: 'GMC Yukon VIP Hire', tag: 'Fleet' },
          { href: '/blog/how-to-travel-jeddah-airport-to-makkah', label: 'Jeddah Airport to Makkah', tag: 'Related Guide' },
        ]}
      >
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>About Jeddah Airport (KAIA)</h2>
        <p style={{ marginBottom: '16px' }}>King Abdulaziz International Airport (IATA: JED) is a major international gateway to Jeddah and an important arrival point for Umrah and Hajj pilgrims. Located in northern Jeddah, it serves millions of pilgrims annually.</p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '32px 0 16px' }}>All Destinations from Jeddah Airport</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800', borderRight: '1px solid rgba(0,0,0,0.12)' }}>Destination</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800', borderRight: '1px solid rgba(0,0,0,0.12)' }}>Distance</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800' }}>Approx. Drive Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Makkah (Masjid al-Haram)', '~92–95 km', '~1 hr (varies)'],
                ['Madinah (Prophet\'s Mosque)', '~390 km', '~3.5–4 hrs'],
                ['Taif', '~180–200 km', '~2–2.5 hrs'],
                ['Jeddah City Centre', '~15–19 km', '~20–30 min'],
              ].map(([dest, dist, time], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '700', borderRight: '1px solid var(--border)' }}>{dest}</td>
                  <td style={{ padding: '10px 14px', borderRight: '1px solid var(--border)' }}>{dist}</td>
                  <td style={{ padding: '10px 14px', color: 'var(--primary)', fontWeight: '700' }}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginTop: '-12px', marginBottom: '24px' }}>
          Travel times and distances are approximate and may vary depending on traffic, route and exact pickup/drop-off location.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '32px 0 16px' }}>Fixed Fares — Jeddah Airport Transfers</h2>
        <div style={{ overflowX: 'auto', marginBottom: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800', borderRight: '1px solid rgba(0,0,0,0.12)' }}>Route</th>
                {airportPricing[0]?.rates.map(r => (
                  <th key={r.key} style={{ padding: '10px 10px', textAlign: 'center', fontWeight: '800', borderRight: '1px solid rgba(0,0,0,0.12)' }}>{r.name.en}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {airportPricing.map((route, i) => (
                <tr key={route.id} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '700', borderRight: '1px solid var(--border)' }}>{route.from.en} → {route.to.en}</td>
                  {route.rates.map(r => (
                    <td key={r.key} style={{ padding: '10px 10px', textAlign: 'center', color: 'var(--primary)', fontWeight: '700', borderRight: '1px solid var(--border)' }}>{r.price} SAR</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginBottom: '16px' }}>
          Fares are per vehicle, not per passenger, and are confirmed before booking. Extra stops or special requirements are confirmed separately.
        </p>
        <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>
          Need a transfer to Taif or Jeddah city instead? We don't list a fixed rate for those on this page — see <a href="/jeddah-to-taif" style={{ color: 'var(--primary)', fontWeight: '700' }}>Jeddah to Taif private transfer</a> or <a href="/jeddah-taxi-service" style={{ color: 'var(--primary)', fontWeight: '700' }}>Jeddah Taxi Service</a> for current rates.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '32px 0 12px' }}>How Airport Pickup Works</h2>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: 2.2 }}>
          <li>WhatsApp +92 309 7811785 with your flight number, arrival date/time, destination, passenger count and preferred vehicle</li>
          <li>Receive fixed-price confirmation from our team</li>
          <li>Land at KAIA — your driver meets you at the arrivals meeting point with a name board; we confirm your exact terminal and meeting point with you in advance, since KAIA has multiple terminals</li>
          <li>Driver loads luggage and drives you directly to your destination</li>
        </ol>
      </GuidePageTemplate>
    </>
  )
}
