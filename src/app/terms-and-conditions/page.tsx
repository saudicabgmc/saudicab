import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Saudi Cabs GMC — rules, booking policy, cancellations, liability, and user responsibilities for taxi and transport services in Saudi Arabia.',
  alternates: { canonical: 'https://saudicabsgmc.com/terms-and-conditions' },
  robots: { index: true, follow: true },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/terms-and-conditions#webpage',
  name: 'Terms & Conditions — Saudi Cabs GMC',
  url: 'https://saudicabsgmc.com/terms-and-conditions',
  description: 'Terms and Conditions for Saudi Cabs GMC taxi service in Saudi Arabia.',
  datePublished: '2024-01-01',
  dateModified: '2026-05-01',
  publisher: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Terms & Conditions', item: 'https://saudicabsgmc.com/terms-and-conditions' },
    ],
  },
}

const LAST_UPDATED = 'May 1, 2026'

export default function TermsAndConditions() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '56px 0 44px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
              Legal
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '900', margin: '16px 0 12px', lineHeight: 1.2 }}>
              Terms &amp; Conditions
            </h1>
            <div className="gold-divider" style={{ margin: '0 auto 16px' }} />
            <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ lineHeight: '1.85', color: 'var(--foreground)', fontSize: '0.97rem' }}>

              <p style={{ marginBottom: '28px', color: 'var(--muted-foreground)' }}>
                These Terms and Conditions ("Terms") govern your use of the Saudi Cabs GMC website at <strong>saudicabsgmc.com</strong> and all taxi, private driver, and transport services we provide. By booking our services, you confirm that you have read, understood, and agreed to these Terms. Please read them carefully.
              </p>

              <Section title="1. About Saudi Cabs GMC">
                <p>
                  Saudi Cabs GMC is a private taxi and transport company operating in Saudi Arabia, providing fixed-price transportation services in Makkah, Madinah, Jeddah, Taif, Riyadh, and on intercity routes. We operate 24/7 and our fleet includes Toyota Camry Sedan, Hyundai Staria, and GMC Yukon VIP vehicles.
                </p>
              </Section>

              <Section title="2. Booking & Confirmation">
                <List items={[
                  'All bookings are made via WhatsApp (+92 309 7811785) or through the website booking form.',
                  'A booking is only confirmed once you receive a written confirmation message from us with a fixed price.',
                  'You must provide accurate pickup location, destination, date, time, number of passengers, and luggage details.',
                  'Providing incorrect information may result in a change of price or cancellation.',
                  'We reserve the right to decline a booking at our discretion.',
                ]} />
              </Section>

              <Section title="3. Pricing & Payment">
                <List items={[
                  'All prices are fixed and agreed upon before your trip — no meters, no hidden fees, no surge pricing.',
                  'Prices are quoted in Saudi Riyals (SAR).',
                  'Payment is accepted in cash (SAR) or bank transfer. Full payment is due upon trip completion unless otherwise agreed.',
                  'Waiting time beyond 15 minutes (after agreed pickup time) may incur additional charges at our discretion.',
                  'Prices may vary during peak seasons (Hajj, Eid, Ramadan) due to demand. Confirmed booking price will not change after confirmation.',
                ]} />
              </Section>

              <Section title="4. Cancellation Policy">
                <List items={[
                  'Free cancellation: Cancel at least 3 hours before your scheduled pickup time via WhatsApp.',
                  'Late cancellation: Cancellations made less than 3 hours before pickup may incur a 25% cancellation fee.',
                  'No-show: If you fail to appear at the agreed pickup point within 30 minutes of the scheduled time without prior notice, the full fare may be charged.',
                  'Airport pickups: Free cancellation up to 2 hours after your flight lands (to account for immigration and baggage delays).',
                  'Saudi Cabs GMC reserves the right to cancel a booking due to unforeseen circumstances (vehicle breakdown, severe weather, road closures). In such cases, a full refund will be issued or an alternative vehicle arranged.',
                ]} />
              </Section>

              <Section title="5. Passenger Responsibilities">
                <List items={[
                  'Passengers must be ready at the agreed pickup location at the scheduled time.',
                  'The maximum number of passengers and luggage must not exceed the stated capacity of the booked vehicle.',
                  'Passengers are responsible for the safety and security of their own belongings during the trip.',
                  'Eating, smoking, and use of alcohol are strictly prohibited inside all vehicles.',
                  'Passengers must wear seatbelts at all times where fitted.',
                  'Any damage caused to the vehicle by a passenger will be charged to that passenger.',
                  'Saudi Cabs GMC reserves the right to refuse service to intoxicated, abusive, or threatening passengers.',
                ]} />
              </Section>

              <Section title="6. Airport Transfers">
                <List items={[
                  'For arrivals, our driver will wait at the arrivals hall with a personalised name-board.',
                  'We track your flight in real time and adjust pickup time for delays at no extra charge.',
                  'Free waiting time for arrivals: 60 minutes after the actual landing time.',
                  'After 60 minutes, additional waiting charges may apply.',
                  'For departures, please allow sufficient time. Saudi Cabs GMC is not responsible for missed flights due to traffic, road closures, or passenger delays.',
                ]} />
              </Section>

              <Section title="7. Hajj & Umrah Season">
                <List items={[
                  'During Hajj and Umrah peak seasons, demand is extremely high. Early booking is essential.',
                  'Confirmed bookings will be honoured at the confirmed price even during peak seasons.',
                  'Saudi Cabs GMC is not responsible for delays caused by road closures, government checkpoints, or crowd management measures during Hajj.',
                  'Passengers travelling to the holy sites (Mina, Arafat, Muzdalifah) must hold valid Hajj permits. Saudi Cabs GMC is not responsible for entry refusals.',
                ]} />
              </Section>

              <Section title="8. Liability">
                <List items={[
                  'Saudi Cabs GMC provides transportation services only. We are not a travel agency and are not responsible for hotel, flight, visa, or tour arrangements.',
                  'We carry full vehicle insurance as required by Saudi Arabian law.',
                  'Our liability for any claim arising from a trip is limited to the fare paid for that trip.',
                  'We are not liable for indirect or consequential losses including missed flights, missed connections, or loss of business.',
                  'Force majeure events (severe weather, accidents, government restrictions, acts of God) release us from liability for delays or cancellations.',
                ]} />
              </Section>

              <Section title="9. Driver Conduct">
                <List items={[
                  'All Saudi Cabs GMC drivers are professional, certified, and background-checked.',
                  'Drivers are required to follow traffic laws and drive safely at all times.',
                  'Drivers will not share your personal information with third parties.',
                  'If you have a complaint about driver conduct, please contact us via WhatsApp immediately.',
                ]} />
              </Section>

              <Section title="10. Website Use">
                <List items={[
                  'The content on saudicabsgmc.com is for informational purposes only.',
                  'Prices shown on the website are indicative. Confirmed prices are agreed at booking time.',
                  'You must not use our website for any unlawful purpose or in a way that could damage our reputation.',
                  'All content, images, and branding on this website are the property of Saudi Cabs GMC.',
                ]} />
              </Section>

              <Section title="11. Governing Law">
                <p>
                  These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes will be resolved under Saudi Arabian jurisdiction. By using our services, you consent to this jurisdiction.
                </p>
              </Section>

              <Section title="12. Changes to These Terms">
                <p>
                  We reserve the right to update these Terms at any time. The "Last updated" date at the top of this page will reflect changes. Continued use of our services after any changes constitutes acceptance of the updated Terms.
                </p>
              </Section>

              <Section title="13. Contact">
                <p>For questions about these Terms:</p>
                <List items={[
                  'WhatsApp: +92 309 7811785',
                  'Email: info@saudicabsgmc.com',
                  'Website: saudicabsgmc.com',
                  'Location: Makkah Province, Saudi Arabia',
                ]} />
              </Section>

              {/* Back links */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>← Back to Home</Link>
                <Link href="/privacy-policy" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>Privacy Policy →</Link>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <h2 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--foreground)', marginBottom: '14px', paddingBottom: '8px', borderBottom: '2px solid var(--primary)', display: 'inline-block' }}>
        {title}
      </h2>
      <div style={{ color: 'var(--muted-foreground)', lineHeight: 1.85 }}>{children}</div>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: '20px', margin: '8px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {items.map((item) => (
        <li key={item} style={{ lineHeight: 1.7 }}>{item}</li>
      ))}
    </ul>
  )
}
