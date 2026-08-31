import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'

export const metadata: Metadata = {
  title: 'Makkah Transport Guide 2026 | How to Get Around Makkah',
  description: 'Complete guide to transport in Makkah — airport transfers, Ziyarat tours, intercity routes to Madinah & Jeddah. Fixed price private cabs available 24/7.',
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-transport-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best transport in Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Private cab is the most convenient transport in Makkah. Saudi Cabs GMC offers door-to-door service across Makkah, including hotel pickups near Masjid al-Haram. Fixed prices, 24/7 availability.' } },
    { '@type': 'Question', name: 'How do I get from Jeddah Airport to Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Saudi Cabs GMC provides direct private taxi from Jeddah Airport (KAIA) to Makkah — approximately 90 km, 50-60 minutes. Name-board meet-and-greet at arrivals. Book via WhatsApp at +92 309 7811785.' } },
    { '@type': 'Question', name: 'How far is Makkah from Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'Makkah is approximately 430 km from Madinah. A private cab takes about 4.5 hours. Saudi Cabs GMC operates this route 24/7 with door-to-door hotel service.' } },
    { '@type': 'Question', name: 'Is Uber available in Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Uber and Careem operate in Makkah but availability is limited during peak Hajj and Umrah seasons. For guaranteed transport, especially for airport transfers and intercity routes, Saudi Cabs GMC offers pre-booked fixed-price private cabs via WhatsApp.' } },
    { '@type': 'Question', name: 'Can I book a Makkah Ziyarat tour by private cab?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Saudi Cabs GMC offers private Ziyarat tours in Makkah covering Jabal al-Nour, Jabal Thawr, Arafat, Mina, and other historical sites. The driver waits while you visit each location.' } },
  ],
}

export default function MakkahTransportGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        url="https://saudicabsgmc.com/makkah-transport-guide"
        tag="Makkah Transport Guide"
        title="How to Get Around Makkah — Complete Transport Guide 2026"
        subtitle="Everything pilgrims and travelers need to know about transport in Makkah — from airport transfers to intercity routes and Ziyarat tours."
        quickAnswer="The best transport in Makkah is a private cab from Saudi Cabs GMC — door-to-door service with fixed pricing, available 24/7. Book via WhatsApp at +92 309 7811785 for airport transfers, hotel pickups, Ziyarat tours, and intercity routes to Madinah, Jeddah, and Taif."
        keyFacts={[
          { icon: '🕋', label: 'City', value: 'Makkah al-Mukarramah' },
          { icon: '🏙️', label: 'Province', value: 'Makkah Province, KSA' },
          { icon: '✈️', label: 'Nearest Airport', value: 'Jeddah KAIA (~90 km)' },
          { icon: '🚗', label: 'Cab to Airport', value: '~55 minutes' },
          { icon: '🕌', label: 'To Madinah', value: '~4.5 hrs (~430 km)' },
          { icon: '⏰', label: 'Service Hours', value: '24/7 Year-round' },
        ]}
        faqs={[
          { q: 'What is the best transport in Makkah?', a: 'Private cab is the most convenient transport in Makkah. Saudi Cabs GMC offers door-to-door service across Makkah with fixed prices and 24/7 availability — including pickups from hotels near Masjid al-Haram.' },
          { q: 'How do I get from Jeddah Airport to Makkah?', a: 'Saudi Cabs GMC provides a direct private taxi from King Abdulaziz International Airport (KAIA) in Jeddah to Makkah — approximately 90 km, 50–60 minutes. The driver meets you at arrivals with a name board.' },
          { q: 'How far is Makkah from Madinah by car?', a: 'Makkah to Madinah is approximately 430 km. A private cab takes about 4.5 hours. Saudi Cabs GMC operates this route 24/7 with direct door-to-door hotel service.' },
          { q: 'Is Uber available in Makkah?', a: 'Uber and Careem operate in Makkah but availability is very limited during Hajj and Umrah peak seasons. Saudi Cabs GMC offers pre-booked fixed-price private cabs — guaranteeing your ride.' },
          { q: 'Can I book a Makkah Ziyarat tour by private cab?', a: 'Yes. Saudi Cabs GMC offers private Ziyarat tours covering Jabal al-Nour, Jabal Thawr, Arafat, Mina, Muzdalifah, and Jannat al-Mualla. The driver waits while you visit each site.' },
          { q: 'How much does a taxi from Makkah to Jeddah cost?', a: 'Saudi Cabs GMC offers a fixed price for Makkah to Jeddah (approximately 90 km, 50–60 minutes). Contact via WhatsApp at +92 309 7811785 for the current rate. No meter, no surge pricing.' },
        ]}
        relatedLinks={[
          { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Airport Transfer' },
          { href: '/makkah-to-madinah', label: 'Makkah → Madinah', tag: 'Intercity Route' },
          { href: '/makkah-to-jeddah', label: 'Makkah → Jeddah', tag: 'Intercity Route' },
          { href: '/makkah-to-taif', label: 'Makkah → Taif', tag: 'Intercity Route' },
          { href: '/makkah-to-riyadh', label: 'Makkah → Riyadh', tag: 'Long Distance' },
          { href: '/makkah-taxi-service', label: 'Makkah Taxi Service Hub', tag: 'City Page' },
        ]}
      >
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Transport Options in Makkah</h2>
        <p style={{ marginBottom: '16px' }}>Makkah receives millions of pilgrims every year for Umrah and Hajj. Understanding your transport options is essential for a smooth pilgrimage experience.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '24px 0 10px' }}>1. Private Cab (Recommended)</h3>
        <p style={{ marginBottom: '12px' }}>Saudi Cabs GMC provides the most reliable door-to-door private cab service in Makkah. Key facts:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '16px', lineHeight: 2 }}>
          <li><strong>Fixed price</strong> — agreed before departure, no meter</li>
          <li><strong>Door-to-door</strong> — pickup from your Haram hotel, drop anywhere in Makkah</li>
          <li><strong>24/7</strong> — available even at Fajr or after Tarawih prayers</li>
          <li><strong>Airport pickup</strong> — name board at Jeddah Airport arrivals</li>
          <li><strong>Vehicles</strong>: Toyota Camry, Hyundai Staria (7 seats), GMC Yukon (VIP, 7 seats)</li>
        </ul>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '24px 0 10px' }}>2. Haramain High-Speed Train</h3>
        <p style={{ marginBottom: '16px' }}>The Haramain Train connects Makkah to Jeddah and Madinah. It is fast but requires traveling to the Makkah Train Station — not door-to-door. Tickets must be pre-booked and often sell out during peak season.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '24px 0 10px' }}>3. Makkah Bus (Mashair Railway)</h3>
        <p style={{ marginBottom: '24px' }}>The Mashair Railway operates between Makkah, Arafat, Muzdalifah, and Mina — mainly during Hajj season. It is free for Hajj pilgrims but is extremely crowded during peak times.</p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '32px 0 16px' }}>Key Makkah Routes & Distances</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800' }}>Route</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800' }}>Distance</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800' }}>Drive Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Jeddah Airport → Makkah', '~90 km', '~55 min'],
                ['Makkah → Jeddah', '~90 km', '~50 min'],
                ['Makkah → Madinah', '~430 km', '~4.5 hrs'],
                ['Makkah → Taif', '~90 km', '~1.5 hrs'],
                ['Makkah → Riyadh', '~900 km', '~8.5 hrs'],
              ].map(([route, dist, time], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600' }}>{route}</td>
                  <td style={{ padding: '10px 14px' }}>{dist}</td>
                  <td style={{ padding: '10px 14px', color: 'var(--primary)', fontWeight: '700' }}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GuidePageTemplate>
    </>
  )
}
