import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'

export const metadata: Metadata = {
  title: 'Hajj Transport FAQ 2026 | Private Cab for Hajj Saudi Arabia',
  description: 'Complete Hajj 2026 transport FAQ — how to book private cab for Hajj, routes, vehicles, prices, and tips for pilgrims traveling to Makkah.',
  alternates: { canonical: 'https://saudicabsgmc.com/hajj-transport-faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I book transport for Hajj 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Book a private cab for Hajj 2026 via WhatsApp at +92 309 7811785 (Saudi Cabs GMC). Send your arrival details, group size, and required routes. Book at least 4 weeks before Hajj season to guarantee availability.' } },
    { '@type': 'Question', name: 'What transport is available for Hajj pilgrims in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Hajj pilgrims can use private cabs (Saudi Cabs GMC), official Hajj buses, the Mashair Railway (between Makkah, Arafat, Mina, Muzdalifah), and metered taxis. For intercity routes like Makkah to Madinah, private cabs offer the most convenient door-to-door service.' } },
    { '@type': 'Question', name: 'When is Hajj 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Hajj 2026 is expected to take place in late May to early June 2026 (Dhul Hijjah 1447 AH). The exact dates depend on moon sighting. Book transport well in advance.' } },
    { '@type': 'Question', name: 'Is private taxi allowed during Hajj in Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, private taxis and pre-booked cabs operate in Makkah during Hajj season. Saudi Cabs GMC provides 24/7 private cab service throughout Hajj, including airport transfers and intercity routes.' } },
  ],
}

export default function HajjTransportFaq() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        url="https://saudicabsgmc.com/hajj-transport-faq"
        tag="Hajj 2026 Guide"
        title="Hajj Transport FAQ 2026 — Complete Private Cab Guide for Hajj Pilgrims"
        subtitle="Everything Hajj pilgrims need to know about booking private transport in Saudi Arabia for Hajj 2026."
        quickAnswer="Saudi Cabs GMC provides private cab service for Hajj 2026 — 24/7, fixed price, door-to-door across Makkah, Madinah, and Jeddah. Book at least 4 weeks before Hajj. WhatsApp: +92 309 7811785."
        keyFacts={[
          { icon: '📅', label: 'Hajj 2026', value: 'Late May/June 2026' },
          { icon: '🕋', label: 'Main City', value: 'Makkah al-Mukarramah' },
          { icon: '🛣️', label: 'Key Route', value: 'Jeddah Airport → Makkah' },
          { icon: '📅', label: 'Book By', value: '4+ weeks in advance' },
          { icon: '👨‍👩‍👧', label: 'Group Size', value: 'Up to 7 per vehicle' },
          { icon: '⏰', label: 'Service', value: '24/7 During Hajj' },
        ]}
        faqs={[
          { q: 'How do I book transport for Hajj 2026?', a: 'WhatsApp +92 309 7811785. Send your arrival date, flight details, group size, and required routes. Saudi Cabs GMC confirms a fixed price within minutes. Book at least 4 weeks before Hajj.' },
          { q: 'What transport is available for Hajj pilgrims in Saudi Arabia?', a: 'Options include: private cabs (Saudi Cabs GMC — most convenient), official Hajj buses (crowded), Mashair Railway (Makkah–Arafat–Mina–Muzdalifah, Hajj only), and metered taxis (limited availability). For intercity routes, private cabs are best.' },
          { q: 'When is Hajj 2026?', a: 'Hajj 2026 is expected in late May to early June 2026 (Dhul Hijjah 1447 AH). Exact dates depend on moon sighting. Book transport as early as possible.' },
          { q: 'Is private taxi allowed during Hajj in Makkah?', a: 'Yes. Saudi Cabs GMC provides 24/7 private cab service throughout Hajj including airport transfers and all intercity routes.' },
          { q: 'What vehicle is best for a family Hajj trip?', a: 'For families up to 7 people: Hyundai Staria (sliding doors, high roof — ideal for elderly) or GMC Yukon (VIP, built-in cooler, leather seats). Both seat 7 with luggage capacity.' },
          { q: 'How early should I book Hajj transport?', a: 'Book at least 4 weeks before Hajj season. During peak Hajj demand is extremely high and vehicles fill up fast. Saudi Cabs GMC recommends booking as soon as your Hajj visa is confirmed.' },
        ]}
        relatedLinks={[
          { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Key Hajj Route' },
          { href: '/makkah-to-madinah', label: 'Makkah → Madinah', tag: 'Hajj Route' },
          { href: '/riyadh-to-makkah', label: 'Riyadh → Makkah', tag: 'Long Distance' },
          { href: '/umrah-travel-guide', label: 'Umrah Travel Guide', tag: 'Guide' },
          { href: '/makkah-transport-guide', label: 'Makkah Transport Guide', tag: 'Guide' },
          { href: '/blog/hajj-transport-guide-2026', label: 'Hajj Transport Article', tag: 'Blog' },
        ]}
      >
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Key Hajj Routes — Saudi Cabs GMC</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Route</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Distance</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Drive Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Jeddah Airport → Makkah', '~90 km', '~55 min'],
                ['Makkah → Madinah', '~430 km', '~4.5 hrs'],
                ['Madinah → Makkah', '~430 km', '~4.5 hrs'],
                ['Makkah → Jeddah Airport', '~90 km', '~55 min'],
                ['Riyadh → Makkah', '~900 km', '~8.5 hrs'],
                ['Makkah → Riyadh', '~900 km', '~8.5 hrs'],
              ].map(([route, dist, time], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '700' }}>{route}</td>
                  <td style={{ padding: '10px 14px' }}>{dist}</td>
                  <td style={{ padding: '10px 14px', color: 'var(--primary)', fontWeight: '700' }}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Hajj Transport Tips</h2>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 2.2 }}>
          <li><strong>Book early</strong> — at least 4 weeks before Hajj; 8 weeks is safer</li>
          <li><strong>Share flight details</strong> — so driver tracks any delays</li>
          <li><strong>Travel at night</strong> for long routes (Riyadh–Makkah) — cooler and less traffic</li>
          <li><strong>GMC Yukon or Staria</strong> recommended for families with Hajj luggage</li>
          <li><strong>Round-trip discount</strong> — book Makkah→Madinah and Madinah→Makkah together</li>
        </ul>
      </GuidePageTemplate>
    </>
  )
}
