import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'

export const metadata: Metadata = {
  title: 'Umrah Travel Guide 2026 | Transport, Routes & Tips',
  description: 'Complete Umrah travel guide — how to travel between Makkah, Madinah and Jeddah during Umrah. Private cab booking, airport transfers, Ziyarat tours.',
  alternates: { canonical: 'https://saudicabsgmc.com/umrah-travel-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do you travel between Makkah and Madinah for Umrah?', acceptedAnswer: { '@type': 'Answer', text: 'The two main options are the Haramain High-Speed Train (2.5 hours, requires station travel) or a private taxi (4.5 hours, door-to-door). Saudi Cabs GMC provides direct private cab from your Makkah hotel to your Madinah hotel. Book via WhatsApp: +92 309 7811785.' } },
    { '@type': 'Question', name: 'What is the best transport for Umrah pilgrims in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: "For families and travelers with luggage, a private cab can be one of the most convenient options — door-to-door, fixed pricing, and flexible departure times." } },
    { '@type': 'Question', name: 'Do I start Umrah in Makkah or Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'You can start Umrah from either city. Many pilgrims begin in Madinah to visit the Prophet\'s Mosque first, then travel to Makkah for the Umrah rituals. Saudi Cabs GMC offers direct transfers between both cities.' } },
    { '@type': 'Question', name: 'How far is Makkah from Jeddah Airport for Umrah?', acceptedAnswer: { '@type': 'Answer', text: 'Jeddah Airport (KAIA) is approximately 90 km from Makkah. Most Umrah pilgrims arrive via Jeddah Airport. A private taxi with Saudi Cabs GMC takes about 55 minutes. Your assigned driver can meet you at the designated arrivals meeting point with a name board, according to your booking arrangements.' } },
  ],
}

export default function UmrahTravelGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        url="https://saudicabsgmc.com/umrah-travel-guide"
        dateModified="2026-08-31"
        tag="Umrah Travel Guide 2026"
        title="Umrah Travel Guide — Transport Between Makkah, Madinah & Jeddah"
        subtitle="A complete transport guide for Umrah pilgrims — from airport arrival to intercity transfers and Ziyarat tours in the Holy Cities."
        quickAnswer="For Umrah pilgrims, Saudi Cabs GMC provides private cab transfers 24/7: Jeddah Airport to Makkah (~55 min), Makkah to Madinah (~4.5 hrs), and all intercity routes. Fixed price, door-to-door, name-board airport pickup. Book via WhatsApp: +92 309 7811785."
        ctaSubtext="Fixed price confirmed before booking. Professional driver. Door-to-door service, 24/7 subject to availability."
        keyFacts={[
          { icon: '🕋', label: 'Makkah → Madinah', value: '~430 km / ~4.5 hrs' },
          { icon: '✈️', label: 'Jeddah KAIA → Makkah', value: '~90 km / ~55 min' },
          { icon: '🕌', label: 'Madinah Airport', value: '~15–25 km to Mosque' },
          { icon: '👨‍👩‍👧', label: 'Max Passengers', value: '7 (Staria/Yukon)' },
          { icon: '💰', label: 'Pricing', value: 'Fixed — Per Vehicle' },
          { icon: '⏰', label: 'Available', value: '24/7 incl. Ramadan' },
        ]}
        faqs={[
          { q: 'How do you travel between Makkah and Madinah for Umrah?', a: 'Two main options: Haramain Train (2.5 hrs, requires station travel) or private taxi (4.5 hrs, door-to-door). Saudi Cabs GMC provides direct hotel-to-hotel service. Book via WhatsApp: +92 309 7811785.' },
          { q: 'What is the best transport for Umrah pilgrims in Saudi Arabia?', a: 'For families and travelers with luggage, a private cab can be one of the most convenient options — door-to-door, fixed pricing, and flexible departure times.' },
          { q: 'Do I start Umrah in Makkah or Madinah?', a: 'You can start from either city. Many pilgrims visit Madinah first (Prophet\'s Mosque), then travel to Makkah for the Umrah rituals. Saudi Cabs GMC offers direct transfers between both cities.' },
          { q: 'How far is Makkah from Jeddah Airport?', a: 'Jeddah Airport (KAIA) is approximately 90 km from Makkah. A private taxi takes about 55 minutes. Your assigned driver can meet you at the designated arrivals meeting point with a name board, according to your booking arrangements.' },
          { q: 'Can I book transport for the entire Umrah trip in one go?', a: 'Yes — Saudi Cabs GMC can arrange a complete Umrah transport package: Airport arrival → Makkah hotel → Makkah to Madinah → Airport departure. Contact via WhatsApp to plan your full itinerary.' },
          { q: 'Is private cab available during Ramadan for Umrah?', a: 'Service is available 24/7, subject to booking availability. Advance booking is recommended, especially during busy periods such as the last 10 nights of Ramadan.' },
        ]}
        relatedLinks={[
          { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Step 1' },
          { href: '/makkah-to-madinah', label: 'Makkah → Madinah', tag: 'Step 2' },
          { href: '/madinah-to-makkah', label: 'Madinah → Makkah', tag: 'Return' },
          { href: '/madinah-airport-taxi', label: 'Madinah Airport Taxi', tag: 'Airport' },
          { href: '/makkah-transport-guide', label: 'Makkah Transport Guide', tag: 'Guide' },
          { href: '/hajj-transport-faq', label: 'Hajj Transport FAQ', tag: 'Guide' },
          { href: '/hyundai-staria-taxi', label: 'Hyundai Staria Family Van', tag: 'Fleet' },
          { href: '/blog/umrah-checklist-transport-hotels-packing', label: 'Umrah Checklist Article', tag: 'Related Article' },
        ]}
      >
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Typical Umrah Journey Route</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          {[
            { step: '1', icon: '✈️', title: 'Arrive at Jeddah Airport (KAIA)', desc: 'Your assigned driver can meet you at the designated arrivals meeting point with a name board, according to your booking arrangements. ~55 min to Makkah.' },
            { step: '2', icon: '🕋', title: 'Stay in Makkah', desc: 'Perform Tawaf, Sa\'i, and other Umrah rituals at Masjid al-Haram.' },
            { step: '3', icon: '🚗', title: 'Transfer to Madinah', desc: 'Private cab from your Makkah hotel to Madinah hotel. ~4.5 hours, door-to-door.' },
            { step: '4', icon: '🕌', title: 'Visit Prophet\'s Mosque', desc: 'Stay in Madinah for Ziyarat of Masjid an-Nabawi and historical sites.' },
            { step: '5', icon: '✈️', title: 'Return via Jeddah Airport', desc: 'Private cab from Madinah or Makkah hotel to Jeddah Airport for departure.' },
          ].map(s => (
            <div key={s.step} style={{ display: 'flex', gap: '16px', padding: '16px', background: 'var(--muted)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '0.9rem', flexShrink: 0 }}>{s.step}</div>
              <div>
                <div style={{ fontWeight: '800', marginBottom: '4px' }}>{s.icon} {s.title}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginTop: '-20px', marginBottom: '32px' }}>
          Vehicle selection may depend on passenger count and luggage.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Train vs Private Cab for Umrah</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800', borderRight: '1px solid rgba(0,0,0,0.12)' }}>Factor</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800', borderRight: '1px solid rgba(0,0,0,0.12)' }}>Private Cab</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800' }}>Haramain Train</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Door-to-door', '✅ Yes', '❌ Station to station'],
                ['Luggage help', '✅ Driver assists', '❌ Self-managed'],
                ['Departure time', '✅ Any time', '⚠️ Fixed schedule'],
                ['Journey time', '~4.5 hrs', '~2.5 hrs'],
                ['Prayer stops', '✅ Can be requested', '❌ Not possible'],
                ['Group pricing', '✅ Per vehicle', '❌ Per person'],
              ].map(([factor, cab, train], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '700', borderRight: '1px solid var(--border)' }}>{factor}</td>
                  <td style={{ padding: '10px 14px', color: '#2d7a4f', borderRight: '1px solid var(--border)' }}>{cab}</td>
                  <td style={{ padding: '10px 14px', color: 'var(--muted-foreground)' }}>{train}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GuidePageTemplate>
    </>
  )
}
