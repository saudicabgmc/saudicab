import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'

export const metadata: Metadata = {
  title: 'Taxi Prices Saudi Arabia 2026 | Route Distance & Cost Guide | Saudi Cabs GMC',
  description: 'Complete Saudi Arabia taxi price and distance guide. Fixed fares for Makkah, Madinah, Jeddah, Taif, Riyadh routes. Private cab prices confirmed before travel.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a taxi from Makkah to Madinah cost?', acceptedAnswer: { '@type': 'Answer', text: 'Saudi Cabs GMC offers a fixed price for Makkah to Madinah (approximately 430 km, 4.5 hours). Contact via WhatsApp at +966 56 948 7569 for the exact current rate. Price is confirmed before departure.' } },
    { '@type': 'Question', name: 'How much is a taxi from Jeddah Airport to Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Saudi Cabs GMC provides a fixed fare from Jeddah Airport to Makkah (90 km, ~55 minutes). WhatsApp +966 56 948 7569 for the current rate. No meter, no surge pricing.' } },
    { '@type': 'Question', name: 'How much does a taxi from Riyadh to Makkah cost?', acceptedAnswer: { '@type': 'Answer', text: 'The Riyadh to Makkah private cab covers approximately 900 km (8-9 hours). Saudi Cabs GMC offers a fixed long-distance rate — contact via WhatsApp for pricing.' } },
    { '@type': 'Question', name: 'Are taxi prices fixed in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Saudi Cabs GMC uses fixed pricing agreed before departure — no meter and no surge pricing regardless of traffic or time of day. Pricing is transparent and confirmed via WhatsApp booking.' } },
  ],
}

export default function TaxiPricesGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        tag="Price & Distance Guide"
        title="Saudi Arabia Taxi Prices & Distances — Complete 2026 Route Guide"
        subtitle="All major Saudi Arabia taxi routes with distances, drive times, and how pricing works with Saudi Cabs GMC."
        quickAnswer="Saudi Cabs GMC uses fixed pricing on all routes — confirmed via WhatsApp before departure, no meter, no surge. Prices vary by route distance and vehicle type. Contact +966 56 948 7569 for an instant quote on any route."
        keyFacts={[
          { icon: '💰', label: 'Pricing Model', value: 'Fixed — No Meter' },
          { icon: '🚗', label: 'Sedan', value: 'Up to 4 passengers' },
          { icon: '🚐', label: 'Staria Van', value: 'Up to 7 passengers' },
          { icon: '🛻', label: 'GMC Yukon', value: 'VIP — 7 passengers' },
          { icon: '💳', label: 'Payment', value: 'Cash / Bank Transfer' },
          { icon: '📱', label: 'Book Via', value: 'WhatsApp Instant' },
        ]}
        faqs={[
          { q: 'How much does a taxi from Makkah to Madinah cost?', a: 'Saudi Cabs GMC offers a fixed price for Makkah to Madinah (approximately 430 km, 4.5 hours). WhatsApp +966 56 948 7569 for the exact current rate.' },
          { q: 'How much is a taxi from Jeddah Airport to Makkah?', a: 'Fixed fare from Jeddah Airport to Makkah (90 km, ~55 min). Contact via WhatsApp for rate. No meter, no surge pricing at any time.' },
          { q: 'How much does Riyadh to Makkah taxi cost?', a: 'Riyadh to Makkah is approximately 900 km (8–9 hours). Saudi Cabs GMC offers a fixed long-distance rate — WhatsApp for pricing.' },
          { q: 'Are taxi prices fixed in Saudi Arabia with Saudi Cabs GMC?', a: 'Yes — all prices are fixed and agreed before departure. No meter, no hidden fees, no surge pricing.' },
          { q: 'Is the price per person or per vehicle?', a: 'All Saudi Cabs GMC pricing is per vehicle, not per person. A family of 5 pays the same as a solo traveler for the same route.' },
          { q: 'Can I negotiate the price?', a: 'Saudi Cabs GMC provides transparent fixed pricing. The rate is confirmed before booking — what you agree is what you pay. No negotiation needed — no surprises.' },
        ]}
        relatedLinks={[
          { href: '/jeddah-to-makkah', label: 'Jeddah → Makkah', tag: 'Short Route' },
          { href: '/makkah-to-madinah', label: 'Makkah → Madinah', tag: 'Popular Route' },
          { href: '/riyadh-to-makkah', label: 'Riyadh → Makkah', tag: 'Long Distance' },
          { href: '/jeddah-airport-to-makkah', label: 'Airport → Makkah', tag: 'Airport Transfer' },
          { href: '/routes-map', label: 'Interactive Route Map', tag: 'All Routes' },
          { href: '/umrah-travel-guide', label: 'Umrah Travel Guide', tag: 'Guide' },
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
                ['Jeddah Airport', 'Makkah', '~90 km', '~55 min', '✈️ Airport'],
                ['Jeddah', 'Makkah', '~90 km', '~50 min', '🏙️ City'],
                ['Makkah', 'Jeddah', '~90 km', '~50 min', '🔄 Return'],
                ['Makkah', 'Taif', '~90 km', '~1.5 hrs', '⛰️ Mountain'],
                ['Jeddah', 'Taif', '~150 km', '~1.5 hrs', '🏙️ City'],
                ['Makkah', 'Madinah', '~430 km', '~4.5 hrs', '🕌 Intercity'],
                ['Madinah', 'Makkah', '~430 km', '~4.5 hrs', '🔄 Return'],
                ['Jeddah', 'Madinah', '~390 km', '~4 hrs', '🏙️ City'],
                ['Madinah', 'Jeddah', '~390 km', '~4 hrs', '🔄 Return'],
                ['Riyadh', 'Makkah', '~900 km', '~8.5 hrs', '🛣️ Long Distance'],
                ['Makkah', 'Riyadh', '~900 km', '~8.5 hrs', '🔄 Return'],
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
