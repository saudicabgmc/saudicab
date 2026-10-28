import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'

export const metadata: Metadata = {
  title: 'Taxi Prices Saudi Arabia 2026 | Route Distance & Cost Guide',
  description: 'Complete Saudi Arabia taxi price and distance guide. Fixed fares for Makkah, Madinah, Jeddah, Taif, Riyadh routes. Private cab prices confirmed before travel.',
  alternates: { canonical: 'https://saudicabsgmc.com/taxi-prices-saudi-arabia' },
}

/*
 * FAQ content lives in one place and is used for BOTH the visible FAQ
 * section and the FAQPage schema below, so the two can never drift apart
 * (they previously did: the schema had 4 questions while the visible faqs
 * prop had 6, and shared questions used slightly different wording in
 * each place — fixed 2026-10-26, same pattern as the equivalent fix
 * already made on /makkah-transport-guide and /jeddah-airport-guide).
 *
 * Visible prices were removed sitewide (2026-10-28) — this page previously
 * showed a "Verified Fixed Fares" table and specific SAR amounts in several
 * FAQ answers, both sourced from src/lib/pricingData.ts via getPricing().
 * That table and those numbers have been removed from the UI; every FAQ now
 * points to WhatsApp for the current rate instead. pricingData.ts itself was
 * not touched — the underlying fare data still exists, just not displayed.
 *
 * Distance/time corrections (2026-10-26) — only applied where an
 * already-corrected, authoritative reference exists elsewhere in the
 * project this session; routes with no such reference were left
 * unchanged rather than guessed:
 * - Jeddah Airport to Makkah: ~90 km/~55 min -> ~92-95 km/~1 hr (varies),
 *   matching the figure independently verified on /jeddah-airport-guide
 *   and /makkah-transport-guide.
 * - Jeddah<->Makkah (city, not airport): ~90 km -> ~75-82 km, matching
 *   the figure verified on /makkah-transport-guide's "Makkah -> Jeddah
 *   (city)" row (same road, reused here, not re-derived from scratch).
 * - Makkah<->Madinah: ~430 km/~4.5 hrs -> ~430-450 km/~4-5 hrs, matching
 *   /makkah-transport-guide's corrected range for this exact route.
 * - Jeddah<->Madinah (city, not airport): time only, ~4 hrs -> ~3.5-4
 *   hrs, matching the figure verified on /jeddah-airport-guide /
 *   /jeddah-airport-to-madinah for this corridor; distance (~390 km) was
 *   already consistent with that reference, so left unchanged.
 * - Riyadh<->Makkah: ~900 km/~8.5 hrs -> ~870-900 km/~8.5-9 hrs, matching
 *   /makkah-transport-guide's corrected range (which itself overlaps the
 *   site's existing /makkah-to-riyadh figures rather than contradicting
 *   them).
 * - Makkah-Taif (90 km/1.5 hrs) was NOT changed: it already sits inside
 *   the ~88-94 km/~1-1.5 hrs range verified on /makkah-transport-guide,
 *   so the existing figure is not factually wrong.
 * - Jeddah-Taif (city), Riyadh-Madinah, Riyadh-Jeddah, and Taif
 *   Airport-Taif City were NOT changed: no already-corrected reference
 *   for these specific routes exists elsewhere in the project this
 *   session, so the existing figures were left as-is rather than
 *   assumed or re-derived.
 */
const faqs = [
  {
    q: 'How much does a taxi from Makkah to Madinah cost?',
    a: 'Saudi Cabs GMC offers a fixed price for Makkah to Madinah (approximately 430–450 km, roughly 4–5 hours), confirmed per vehicle before departure. WhatsApp +92 309 7811785 for the current rate.',
  },
  {
    q: 'How much is a taxi from Jeddah Airport to Makkah?',
    a: 'Fixed fare from Jeddah Airport to Makkah (approximately 92–95 km, around 1 hour — traffic and pickup point affect actual time), per vehicle. No meter, no surge pricing at any time. WhatsApp +92 309 7811785 for the current rate.',
  },
  {
    q: 'How much is a taxi from Jeddah Airport to Madinah?',
    a: 'Fixed fare from Jeddah Airport to Madinah (approximately 390 km, roughly 3.5–4 hours), per vehicle. Contact via WhatsApp for the current rate.',
  },
  {
    q: 'How much does Riyadh to Makkah taxi cost?',
    a: 'Riyadh to Makkah is approximately 870–900 km (roughly 8.5–9 hours). Saudi Cabs GMC offers a fixed long-distance rate — WhatsApp for pricing, since this route does not have a standard listed fare.',
  },
  {
    q: 'Are taxi prices fixed in Saudi Arabia with Saudi Cabs GMC?',
    a: 'Yes — all prices are fixed and agreed before departure. No meter, no hidden fees, no surge pricing.',
  },
  {
    q: 'Is the price per person or per vehicle?',
    a: 'All Saudi Cabs GMC pricing is per vehicle, not per person. A family of 5 pays the same as a solo traveler for the same route and vehicle.',
  },
  {
    q: 'Can I negotiate the price?',
    a: 'Saudi Cabs GMC provides transparent fixed pricing. The rate is confirmed before booking — what you agree is what you pay. No negotiation needed — no surprises.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function TaxiPricesGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        url="https://saudicabsgmc.com/taxi-prices-saudi-arabia"
        dateModified="2026-10-26"
        tag="Price & Distance Guide"
        title="Saudi Arabia Taxi Prices & Distances — Complete 2026 Route Guide"
        subtitle="All major Saudi Arabia taxi routes with distances, drive times, and how pricing works with Saudi Cabs GMC."
        quickAnswer="Saudi Cabs GMC uses fixed pricing on all routes — confirmed via WhatsApp before departure, no meter, no surge. Prices vary by route distance and vehicle type. Contact +92 309 7811785 for an instant quote on any route."
        keyFacts={[
          { icon: '💰', label: 'Pricing Model', value: 'Fixed — No Meter' },
          { icon: '🚗', label: 'Sedan', value: 'Up to 4 passengers' },
          { icon: '🚐', label: 'Staria Van', value: 'Up to 7 passengers' },
          { icon: '🛻', label: 'GMC Yukon', value: 'VIP — 7 passengers' },
          { icon: '💳', label: 'Payment', value: 'Cash / Bank Transfer' },
          { icon: '📱', label: 'Book Via', value: 'WhatsApp Instant' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/jeddah-to-makkah', label: 'Jeddah → Makkah', tag: 'Short Route' },
          { href: '/makkah-to-madinah', label: 'Makkah → Madinah', tag: 'Popular Route' },
          { href: '/riyadh-to-makkah', label: 'Riyadh → Makkah', tag: 'Long Distance' },
          { href: '/jeddah-airport-to-makkah', label: 'Airport → Makkah', tag: 'Airport Transfer' },
          { href: '/routes-map', label: 'Interactive Route Map', tag: 'All Routes' },
          { href: '/umrah-travel-guide', label: 'Umrah Travel Guide', tag: 'Guide' },
          { href: '/toyota-camry-taxi', label: 'Toyota Camry Sedan Taxi', tag: 'Fleet' },
          { href: '/blog/how-much-does-a-taxi-cost-in-saudi-arabia', label: '2026 Price Guide Article', tag: 'Blog' },
        ]}
      >
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Complete Route Distance & Time Table</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>From</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>To</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Distance</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Drive Time</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Type</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Jeddah Airport', 'Makkah', '~92–95 km', '~1 hr (varies)', '✈️ Airport'],
                ['Jeddah', 'Makkah', '~75–82 km', '~50 min', '🏙️ City'],
                ['Makkah', 'Jeddah', '~75–82 km', '~50 min', '🔄 Return'],
                ['Makkah', 'Taif', '~90 km', '~1.5 hrs', '⛰️ Mountain'],
                ['Jeddah', 'Taif', '~150 km', '~1.5 hrs', '🏙️ City'],
                ['Makkah', 'Madinah', '~430–450 km', '~4–5 hrs', '🕌 Intercity'],
                ['Madinah', 'Makkah', '~430–450 km', '~4–5 hrs', '🔄 Return'],
                ['Jeddah', 'Madinah', '~390 km', '~3.5–4 hrs', '🏙️ City'],
                ['Madinah', 'Jeddah', '~390 km', '~3.5–4 hrs', '🔄 Return'],
                ['Riyadh', 'Makkah', '~870–900 km', '~8.5–9 hrs', '🛣️ Long Distance'],
                ['Makkah', 'Riyadh', '~870–900 km', '~8.5–9 hrs', '🔄 Return'],
                ['Riyadh', 'Madinah', '~970 km', '~9.5 hrs', '🛣️ Long Distance'],
                ['Riyadh', 'Jeddah', '~950 km', '~9 hrs', '🛣️ Long Distance'],
                ['Taif Airport', 'Taif City', '~28 km', '~25 min', '✈️ Airport'],
              ].map(([from, to, dist, time, type], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '700' }}>{from}</td>
                  <td style={{ padding: '10px 14px', fontWeight: '700' }}>{to}</td>
                  <td style={{ padding: '10px 14px' }}>{dist}</td>
                  <td style={{ padding: '10px 14px', color: 'var(--primary)', fontWeight: '700' }}>{time}</td>
                  <td style={{ padding: '10px 14px', fontSize: '0.82rem' }}>{type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginTop: '-20px', marginBottom: '32px' }}>
          Distances and times are approximate and may vary depending on traffic, route and exact pickup/drop-off location.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '32px 0 12px' }}>How Pricing Works</h2>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 2.2 }}>
          <li><strong>Fixed price per vehicle</strong> — not per person</li>
          <li><strong>Agreed before departure</strong> — WhatsApp quote in minutes</li>
          <li><strong>No meter</strong> — no ticking clock during traffic</li>
          <li><strong>No surge</strong> — same price at 2 AM or peak Hajj</li>
          <li><strong>Price includes</strong> luggage loading/unloading</li>
          <li><strong>Price includes</strong> prayer stops en route</li>
        </ul>
      </GuidePageTemplate>
    </>
  )
}
