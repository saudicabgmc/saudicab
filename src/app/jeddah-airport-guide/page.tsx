import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'

export const metadata: Metadata = {
  title: 'Jeddah Airport Transfer Guide 2026 | KAIA to Makkah & Madinah',
  description: 'Complete guide to transfers from King Abdulaziz International Airport Jeddah to Makkah, Madinah, Taif. Fixed price private cabs, name-board pickup, 24/7.',
  alternates: { canonical: 'https://saudicabsgmc.com/jeddah-airport-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How far is Jeddah Airport from Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'King Abdulaziz International Airport (KAIA, IATA: JED) is approximately 90 km from Masjid al-Haram in Makkah. A private taxi takes 50–60 minutes.' } },
    { '@type': 'Question', name: 'How do I book a taxi from Jeddah Airport to Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Book via WhatsApp at +92 309 7811785 (Saudi Cabs GMC). Your assigned driver can meet you at the designated arrivals meeting point with a name board, according to the booking arrangements. Fixed price, no meter.' } },
    { '@type': 'Question', name: 'How long is the drive from Jeddah Airport to Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'Jeddah Airport to Madinah is approximately 390 km and takes about 4 hours by private cab.' } },
    { '@type': 'Question', name: 'Is there public transport from Jeddah Airport to Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Public transport options directly from KAIA to Makkah are limited, and the Haramain Train does not connect to the airport. For travelers who want a direct door-to-door journey, a pre-booked private taxi is a convenient option.' } },
  ],
}

export default function JeddahAirportGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        url="https://saudicabsgmc.com/jeddah-airport-guide"
        dateModified="2026-08-31"
        tag="Airport Transfer Guide"
        title="Jeddah Airport (KAIA) to Makkah & Madinah — Complete Transfer Guide 2026"
        subtitle="Everything you need to know about getting from King Abdulaziz International Airport to Makkah, Madinah, Taif and beyond."
        quickAnswer="One of the most convenient options from Jeddah Airport (KAIA) to Makkah is a pre-booked private taxi with Saudi Cabs GMC — 90 km, ~55 minutes, fixed price. Driver meets you at arrivals with a name board. Book via WhatsApp: +92 309 7811785."
        keyFacts={[
          { icon: '✈️', label: 'Airport Code', value: 'KAIA — JED' },
          { icon: '🕋', label: 'To Makkah', value: '~90 km / ~55 min' },
          { icon: '🕌', label: 'To Madinah', value: '~390 km / ~4 hrs' },
          { icon: '🌹', label: 'To Taif', value: '~155 km / ~2 hrs' },
          { icon: '🏙️', label: 'To Jeddah City', value: '~18 km / ~25 min' },
          { icon: '⏰', label: 'Cab Service', value: '24/7 All Terminals' },
        ]}
        faqs={[
          { q: 'How far is Jeddah Airport from Makkah?', a: 'King Abdulaziz International Airport (KAIA, IATA: JED) is approximately 90 km from Masjid al-Haram in Makkah. A private taxi takes 50–60 minutes in normal traffic.' },
          { q: 'How do I book a taxi from Jeddah Airport to Makkah?', a: 'Book via WhatsApp at +92 309 7811785. Send your flight number, arrival time, and hotel name. Your assigned driver can meet you at the designated arrivals meeting point with a name board, according to the booking arrangements.' },
          { q: 'How long is the drive from Jeddah Airport to Madinah?', a: 'Approximately 390 km — about 4 hours by private cab. Saudi Cabs GMC offers fixed-price direct service on this route 24/7.' },
          { q: 'Is there public transport from Jeddah Airport to Makkah?', a: 'Public transport options directly from KAIA to Makkah are limited, and the Haramain Train station is not at the airport. For travelers who want a direct door-to-door journey, a pre-booked private taxi is a convenient option.' },
          { q: 'Can I book the airport taxi in advance?', a: 'Yes — advance booking is recommended, especially during busy Hajj and Umrah periods. Send your flight number, arrival time and hotel details through WhatsApp so the booking can be arranged in advance.' },
          { q: 'What terminal do Umrah flights arrive at in Jeddah?', a: 'Terminal assignment can vary by airline, flight and operating arrangements. Travelers should confirm their terminal with the airline before arrival.' },
        ]}
        relatedLinks={[
          { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Airport Transfer' },
          { href: '/jeddah-airport-to-madinah', label: 'Jeddah Airport → Madinah', tag: 'Airport Transfer' },
          { href: '/makkah-to-jeddah-airport', label: 'Makkah → Jeddah Airport', tag: 'Return Airport Transfer' },
          { href: '/jeddah-to-makkah', label: 'Jeddah → Makkah', tag: 'Intercity Route' },
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
                ['Makkah (Masjid al-Haram)', '~90 km', '~55 min'],
                ['Madinah (Prophet\'s Mosque)', '~390 km', '~4 hrs'],
                ['Taif', '~155 km', '~2 hrs'],
                ['Jeddah City Centre', '~18 km', '~25 min'],
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

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '32px 0 12px' }}>How Airport Pickup Works</h2>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: 2.2 }}>
          <li>WhatsApp +92 309 7811785 with your flight number and arrival time</li>
          <li>Receive fixed price confirmation and driver name within minutes</li>
          <li>Land at KAIA — your assigned driver meets you at the arrivals meeting point with your name board</li>
          <li>Driver loads luggage and drives you directly to your hotel</li>
        </ol>
      </GuidePageTemplate>
    </>
  )
}
