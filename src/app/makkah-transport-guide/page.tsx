import { Metadata } from 'next'
import GuidePageTemplate from '@/components/GuidePageTemplate'

export const metadata: Metadata = {
  title: 'Makkah Transport Guide 2026 | How to Get Around Makkah',
  description: 'Complete guide to transport in Makkah — airport transfers, Ziyarat tours, intercity routes to Madinah & Jeddah. Fixed price private cabs available 24/7.',
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-transport-guide' },
}

/*
 * FAQ content lives in one place and is used for BOTH the visible FAQ
 * section and the FAQPage schema below, so the two can never drift apart
 * (they previously did: the schema and the visible faqs prop had
 * different question text, different answer text, and the schema was
 * missing one visible question entirely — fixed 2026-10-24).
 *
 * Sources for the corrected facts below (verified 2026-10-24):
 * - Jeddah Airport (KAIA) to Makkah: multiple sources cluster ~85-95 km
 *   (a hotel-direction source gives ~92 km via Route 4050/15; a transfer
 *   operator cites ~85-95 km to the Haram specifically), with some
 *   higher outliers (~104-115 km) likely using a different measurement
 *   basis. Presented as ~92-95 km per the range to use for this page.
 *   Drive time: multiple sources give 60-90 min typical, so "around an
 *   hour" is stated as an estimate, not a guarantee — the previous "~55
 *   minutes" overstated precision.
 * - Makkah to Madinah (road): Rome2Rio ~436 km; other travel guides
 *   ~447-450 km via the Haramain Expressway. Used here as ~430-450 km
 *   (the previous single "~430 km" is inside this range, not replaced
 *   outright). Driving time 4-5 hrs per the same sources, not the fixed
 *   "4.5 hrs" previously stated.
 * - Haramain High-Speed Railway: official ticketing portal (sar.hhr.sa,
 *   verified live 2026-10-24, lists Makkah, Jeddah/KAIA, KAEC and
 *   Madinah stations) — the Makkah-Madinah leg is stated here as ~2h
 *   15-20 min on direct services, matching the operator's original
 *   target; some travel-guide sources show direct services running up
 *   to ~2h45m depending on stops, so this is flagged as schedule-
 *   dependent, not fixed. This is a SEPARATE, faster mode than driving —
 *   not interchangeable with the road driving-time figure above.
 * - Makkah to Jeddah (city, not the airport): Rome2Rio clusters ~75-82 km
 *   / ~49-53 min — a different, shorter trip than the Jeddah AIRPORT
 *   distance above; the previous page conflated the two by reusing the
 *   airport's ~90 km figure for this city-to-city row.
 * - Makkah to Taif: Rome2Rio clusters ~87-94 km / ~60-70 min on a flat
 *   reading, but the route includes the mountainous Al-Hada road, and
 *   the site's own dedicated /makkah-to-taif page states ~90 km / ~1.5
 *   hrs — plausible given the winding mountain section. Kept as a range
 *   (~88-94 km, ~1-1.5 hrs) wide enough to cover both, rather than
 *   asserting either extreme, and without editing that separate page
 *   (out of scope for this task).
 * - Makkah to Riyadh: Rome2Rio clusters ~867-875 km / ~8h40m-8h47m.
 *   Kept as ~870-900 km / ~8.5-9 hrs, overlapping with the site's
 *   existing /makkah-to-riyadh figures (~900 km / ~8-9 hrs) rather than
 *   contradicting them.
 * - Uber/Careem: removed the blanket "very limited during Hajj/Umrah"
 *   claim — no source supports a specific availability level; reworded
 *   to explain that app-based availability varies by location/demand,
 *   without promising or ruling out availability at any given time.
 * - Vehicle naming: changed "Toyota Camry" to "Sedan (4 seats)" for
 *   consistency with how every other route/international-transfer page
 *   on the site describes this vehicle class, even though the site's
 *   vehicleSeoData.ts does separately confirm the Sedan model used is in
 *   fact a Toyota Camry — "Sedan" is kept as the guide-page convention.
 */
const faqs = [
  {
    q: 'What is the best transport in Makkah?',
    a: 'A private cab is a convenient transport option in Makkah. Saudi Cabs GMC offers door-to-door service across Makkah with fixed prices and 24/7 availability — including pickups from hotels near Masjid al-Haram. Other options like the Haramain train, public buses, or app-based rides may suit you better depending on your route, luggage and schedule.',
  },
  {
    q: 'How do I get from Jeddah Airport to Makkah?',
    a: "Saudi Cabs GMC provides a direct private taxi from King Abdulaziz International Airport (KAIA) in Jeddah to Makkah — approximately 92–95 km. Driving often takes around an hour, but traffic, your pickup point at the airport, road conditions, and your exact destination within Makkah all affect the actual time, so this isn't a guaranteed figure. The driver meets you at arrivals with a name board; contact us via WhatsApp to confirm pickup details and the current rate.",
  },
  {
    q: 'How far is Makkah from Madinah by car?',
    a: "Makkah to Madinah is approximately 430–450 km by road, with the drive typically taking 4–5 hours depending on traffic — this is an estimate, not a guarantee. The Haramain High-Speed Railway is a separate, faster alternative on this route, with direct services typically taking roughly 2 hours 15–20 minutes, though timetables and stops vary and should be checked with the operator before you travel. Saudi Cabs GMC operates the road route with door-to-door hotel service; contact us via WhatsApp to confirm availability for your dates.",
  },
  {
    q: 'Is Uber available in Makkah?',
    a: "Uber and Careem do operate in Makkah, but app-based availability, pickup access and waiting times can vary significantly by location, time and demand — especially during busy Hajj and Umrah periods. We can't promise availability on either platform at a specific time. As an alternative, Saudi Cabs GMC offers pre-booked private cabs via WhatsApp, subject to availability for your travel date.",
  },
  {
    q: 'Can I book a Makkah Ziyarat tour by private cab?',
    a: 'Yes — Saudi Cabs GMC offers private Ziyarat tours covering sites such as Jabal al-Nour, Jabal Thawr, Arafat, Mina, Muzdalifah, and Jannat al-Mualla. The itinerary, stops, waiting time at each site, and any charges should be agreed with us in advance via WhatsApp rather than assumed.',
  },
  {
    q: 'How much does a taxi from Makkah to Jeddah cost?',
    a: "Makkah to Jeddah city is approximately 75–82 km, around 50 minutes — a shorter trip than the Jeddah Airport route above. Saudi Cabs GMC offers a fixed price for this route, agreed before departure with no meter and no surge pricing; contact us via WhatsApp at +92 309 7811785 for the current rate.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const waMessage = `Hello, I'd like to ask about transport in Makkah.
Pickup location:
Destination:
Travel date/time:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon): `

export default function MakkahTransportGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuidePageTemplate
        url="https://saudicabsgmc.com/makkah-transport-guide"
        dateModified="2026-10-24"
        tag="Makkah Transport Guide"
        title="How to Get Around Makkah — Complete Transport Guide 2026"
        subtitle="Everything pilgrims and travelers need to know about transport in Makkah — from airport transfers to intercity routes and Ziyarat tours."
        quickAnswer="A convenient private transport option in Makkah is a private cab from Saudi Cabs GMC — door-to-door service with fixed pricing, available 24/7. Book via WhatsApp at +92 309 7811785 for airport transfers, hotel pickups, Ziyarat tours, and intercity routes to Madinah, Jeddah, and Taif."
        waMessage={waMessage}
        keyFacts={[
          { icon: '🕋', label: 'City', value: 'Makkah al-Mukarramah' },
          { icon: '🏙️', label: 'Province', value: 'Makkah Province, KSA' },
          { icon: '✈️', label: 'Main International Airport', value: 'Jeddah KAIA (~92–95 km)' },
          { icon: '🚗', label: 'Cab to Airport', value: '~1 hr (varies)' },
          { icon: '🕌', label: 'To Madinah', value: '~4–5 hrs (~430–450 km)' },
          { icon: '⏰', label: 'Service Hours', value: '24/7 Year-round' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah', tag: 'Airport Transfer' },
          { href: '/makkah-to-madinah', label: 'Makkah → Madinah', tag: 'Intercity Route' },
          { href: '/makkah-to-jeddah', label: 'Makkah → Jeddah', tag: 'Intercity Route' },
          { href: '/makkah-to-taif', label: 'Makkah → Taif', tag: 'Intercity Route' },
          { href: '/makkah-to-riyadh', label: 'Makkah → Riyadh', tag: 'Long Distance' },
          { href: '/makkah-taxi-service', label: 'Makkah Taxi Service Hub', tag: 'City Page' },
          { href: '/gmc-yukon-hire', label: 'GMC Yukon VIP Hire', tag: 'Fleet' },
          { href: '/blog/best-places-makkah-ziyarat', label: 'Best Places for Makkah Ziyarat', tag: 'Makkah Ziyarat Guide' },
        ]}
      >
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '0 0 16px' }}>Transport Options in Makkah</h2>
        <p style={{ marginBottom: '16px' }}>Makkah receives millions of pilgrims every year for Umrah and Hajj. Understanding your transport options is essential for a smooth pilgrimage experience.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '24px 0 10px' }}>1. Private Cab</h3>
        <p style={{ marginBottom: '12px' }}>Saudi Cabs GMC provides a door-to-door private cab service in Makkah. It tends to suit hotel-to-hotel travel, airport transfers, families or groups with luggage, and direct intercity trips best — it isn't automatically the cheapest or fastest option for every traveler, so weigh it against the alternatives below for your situation. Key facts:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '16px', lineHeight: 2 }}>
          <li><strong>Fixed price</strong> — agreed before departure, no meter</li>
          <li><strong>Door-to-door</strong> — pickup from your Haram hotel, drop anywhere in Makkah</li>
          <li><strong>24/7</strong> — available even at Fajr or after Tarawih prayers</li>
          <li><strong>Airport pickup</strong> — name board at Jeddah Airport arrivals</li>
          <li><strong>Vehicles</strong>: Sedan (4 seats), Hyundai Staria (7 seats), GMC Yukon (VIP, 7 seats)</li>
        </ul>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '24px 0 10px' }}>2. Haramain High-Speed Railway</h3>
        <p style={{ marginBottom: '16px' }}>
          The Haramain High-Speed Railway connects Makkah, Jeddah/King Abdulaziz International Airport, King Abdullah Economic City, and Madinah. On direct services, the Makkah–Madinah leg typically takes roughly 2 hours 15–20 minutes — notably faster than driving, though timetables, number of stops and ticket availability vary and should be checked directly with the operator, especially in peak season. The train requires traveling to and from the Makkah Train Station rather than door-to-door service.
          {' '}Book or check current schedules at the{' '}
          <a href="https://sar.hhr.sa" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'underline' }}>Haramain High-Speed Railway&apos;s ticketing portal</a>.
        </p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '24px 0 10px' }}>3. Makkah Bus (Public Transport)</h3>
        <p style={{ marginBottom: '16px' }}>Makkah Bus is the city&apos;s official public bus network, run under the Royal Commission for Makkah City and Holy Sites, with routes covering main streets and neighborhood connections across the city. It can be a low-cost way to get around for travelers comfortable navigating a public network, but exact routes, current fares, and arrival times should be checked through the operator&apos;s official channels rather than assumed, since these can change.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '24px 0 10px' }}>4. Mashair Railway</h3>
        <p style={{ marginBottom: '24px' }}>The Mashair Railway operates between Makkah, Arafat, Muzdalifah, and Mina, mainly during Hajj season. It is not a general-purpose public transport option available to any visitor year-round — access depends on the official Hajj transport arrangements and pilgrim eligibility for that season, and it is extremely crowded during peak times.</p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', margin: '32px 0 16px' }}>Key Makkah Routes & Distances</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'var(--foreground)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800', borderRight: '1px solid rgba(0,0,0,0.12)' }}>Route</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800', borderRight: '1px solid rgba(0,0,0,0.12)' }}>Distance</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '800' }}>Approx. Drive Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Jeddah Airport → Makkah', '~92–95 km', '~1 hr (varies)'],
                ['Makkah → Jeddah (city)', '~75–82 km', '~50 min'],
                ['Makkah → Madinah', '~430–450 km', '~4–5 hrs'],
                ['Makkah → Taif', '~88–94 km', '~1–1.5 hrs'],
                ['Makkah → Riyadh', '~870–900 km', '~8.5–9 hrs'],
              ].map(([route, dist, time], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', borderRight: '1px solid var(--border)' }}>{route}</td>
                  <td style={{ padding: '10px 14px', borderRight: '1px solid var(--border)' }}>{dist}</td>
                  <td style={{ padding: '10px 14px', color: 'var(--primary)', fontWeight: '700' }}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginTop: '-12px', marginBottom: '24px' }}>
          Travel times are approximate and may vary depending on traffic, route and pickup location.
        </p>
      </GuidePageTemplate>
    </>
  )
}
