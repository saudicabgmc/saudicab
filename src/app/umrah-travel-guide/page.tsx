import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'

export const metadata: Metadata = {
  title: 'Umrah Travel Guide 2026 | Transport, Routes & Tips | Saudi Cabs GMC',
  description: 'Complete Umrah travel guide — how to travel between Makkah, Madinah and Jeddah during Umrah. Private cab booking, airport transfers, Ziyarat tours.',
  alternates: { canonical: 'https://saudicabsgmc.com/umrah-travel-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do you travel between Makkah and Madinah for Umrah?', acceptedAnswer: { '@type': 'Answer', text: 'The two main options are the Haramain High-Speed Train (2.5 hours, requires station travel) or a private taxi (4.5 hours, door-to-door). Saudi Cabs GMC provides direct private cab from your Makkah hotel to your Madinah hotel. Book via WhatsApp: +966 56 948 7569.' } },
    { '@type': 'Question', name: 'What is the best transport for Umrah pilgrims in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'For Umrah pilgrims, especially families and those with luggage, a private cab from Saudi Cabs GMC is the most convenient option. It offers door-to-door service, fixed pricing, and 24/7 availability including during Ramadan and peak seasons.' } },
    { '@type': 'Question', name: 'Do I start Umrah in Makkah or Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'You can start Umrah from either city. Many pilgrims begin in Madinah to visit the Prophet\'s Mosque first, then travel to Makkah for the Umrah rituals. Saudi Cabs GMC offers direct transfers between both cities.' } },
    { '@type': 'Question', name: 'How far is Makkah from Jeddah Airport for Umrah?', acceptedAnswer: { '@type': 'Answer', text: 'Jeddah Airport (KAIA) is approximately 90 km from Makkah. Most Umrah pilgrims arrive via Jeddah Airport. A private taxi with Saudi Cabs GMC takes about 55 minutes with a name-board pickup at arrivals.' } },
  ],
}

export default function UmrahTravelGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        tag="Umrah Travel Guide 2026"
        title="Umrah Travel Guide — Transport Between Makkah, Madinah & Jeddah"
        subtitle="A complete transport guide for Umrah pilgrims — from airport arrival to intercity transfers and Ziyarat tours in the Holy Cities."
        quickAnswer="For Umrah pilgrims, Saudi Cabs GMC provides private cab transfers 24/7: Jeddah Airport to Makkah (~55 min), Makkah to Madinah (~4.5 hrs), and all intercity routes. Fixed price, door-to-door, name-board airport pickup. Book via WhatsApp: +966 56 948 7569."
        keyFacts={[
          { icon: '🕋', label: 'Makkah → Madinah', value: '~430 km / ~4.5 hrs' },
          { icon: '✈️', label: 'Jeddah KAIA → Makkah', value: '~90 km / ~55 min' },
          { icon: '🕌', label: 'Madinah Airport', value: '~45 km to Mosque' },
          { icon: '👨‍👩‍👧', label: 'Max Passengers', value: '7 (Staria/Yukon)' },
          { icon: '💰', label: 'Pricing', value: 'Fixed — Per Vehicle' },
          { icon: '⏰', label: 'Available', value: '24/7 incl. Ramadan' },
        ]}
        faqs={[
          { q: 'How do you travel between Makkah and Madinah for Umrah?', a: 'Two main options: Haramain Train (2.5 hrs, requires station travel) or private taxi (4.5 hrs, door-to-door). Saudi Cabs GMC provides direct hotel-to-hotel service. Book via WhatsApp: +966 56 948 7569.' },
          { q: 'What is the best transport for Umrah pilgrims in Saudi Arabia?', a: 'For families and those with luggage, a private cab from Saudi Cabs GMC is most convenient — door-to-door, fixed pricing, 24/7 including Ramadan and peak Umrah seasons.' },
          { q: 'Do I start Umrah in Makkah or Madinah?', a: 'You can start from either city. Many pilgrims visit Madinah first (Prophet\'s Mosque), then travel to Makkah for the Umrah rituals. Saudi Cabs GMC offers direct transfers between both cities.' },
          { q: 'How far is Makkah from Jeddah Airport?', a: 'Jeddah Airport (KAIA) is approximately 90 km from Makkah. A private taxi takes about 55 minutes with name-board pickup at arrivals.' },
          { q: 'Can I book transport for the entire Umrah trip in one go?', a: 'Yes — Saudi Cabs GMC can arrange a complete Umrah transport package: Airport arrival → Makkah hotel → Makkah to Madinah → Airport departure. Contact via WhatsApp to plan your full itinerary.' },
          { q: 'Is private cab available during Ramadan for Umrah?', a: 'Yes, Saudi Cabs GMC operates 24/7 throughout Ramadan. Book well in advance as demand is extremely high during the last 10 nights of Ramadan (Ashra).' },
        ]}
        relatedLinks={[
          { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Step 1' },
          { href: '/makkah-to-madinah', label: 'Makkah → Madinah', tag: 'Step 2' },
          { href: '/madinah-to-makkah', label: 'Madinah → Makkah', tag: 'Return' },
          { href: '/madinah-airport-taxi', label: 'Madinah Airport Taxi', tag: 'Airport' },
          { href: '/makkah-transport-guide', label: 'Makkah Transport Guide', tag: 'Guide' },
          { href: '/hajj-transport-faq', label: 'Hajj Transport FAQ', tag: 'Guide' },
        ]}
      >
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Typical Umrah Journey Route</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          {[
            { step: '1', icon: '✈️', title: 'Arrive at Jeddah Airport (KAIA)', desc: 'Saudi Cabs GMC driver meets you at arrivals with name board. ~55 min to Makkah.' },
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

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Train vs Private Cab for Umrah</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Factor</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Private Cab</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Haramain Train</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Door-to-door', '✅ Yes', '❌ Station to station'],
                ['Luggage help', '✅ Driver assists', '❌ Self-managed'],
                ['Departure time', '✅ Any time', '⚠️ Fixed schedule'],
                ['Journey time', '~4.5 hrs', '~2.5 hrs'],
                ['Prayer stops', '✅ En route', '❌ Not possible'],
                ['Group pricing', '✅ Per vehicle', '❌ Per person'],
              ].map(([factor, cab, train], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '700' }}>{factor}</td>
                  <td style={{ padding: '10px 14px', color: '#2d7a4f' }}>{cab}</td>
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
