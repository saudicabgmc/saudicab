import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Saudi Cabs GMC — how we collect, use, and protect your personal data when you book taxi and transport services in Saudi Arabia.',
  alternates: { canonical: 'https://saudicabsgmc.com/privacy-policy' },
  robots: { index: true, follow: true },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/privacy-policy#webpage',
  name: 'Privacy Policy — Saudi Cabs GMC',
  url: 'https://saudicabsgmc.com/privacy-policy',
  description: 'Privacy Policy for Saudi Cabs GMC taxi service in Saudi Arabia.',
  datePublished: '2024-01-01',
  dateModified: '2026-05-01',
  publisher: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://saudicabsgmc.com/privacy-policy' },
    ],
  },
}

const LAST_UPDATED = 'May 1, 2026'

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                Saudi Cabs GMC ("we", "us", or "our") operates the website <strong>saudicabsgmc.com</strong> and provides private taxi and transport services across Saudi Arabia. This Privacy Policy explains what information we collect, how we use it, and your rights. By using our website or booking our services, you agree to this policy.
              </p>

              <Section title="1. Information We Collect">
                <p>We collect the following information only when you contact us or make a booking:</p>
                <List items={[
                  'Name — to personalise your booking and driver name-board.',
                  'Phone number / WhatsApp number — to confirm your booking and contact you on the day of travel.',
                  'Pickup and drop-off locations — to plan your route.',
                  'Travel date and time — to schedule your driver.',
                  'Number of passengers and luggage — to assign the correct vehicle.',
                  'Flight number (for airport pickups) — so we can track delays and adjust pickup time.',
                ]} />
                <p style={{ marginTop: '12px' }}>
                  We do <strong>not</strong> collect credit card numbers, bank details, or passwords. We do not use tracking pixels or third-party advertising cookies.
                </p>
              </Section>

              <Section title="2. How We Use Your Information">
                <List items={[
                  'To confirm and fulfil your taxi or transport booking.',
                  'To send you booking confirmations and driver details via WhatsApp.',
                  'To contact you about changes, delays, or cancellations.',
                  'To improve our service quality based on trip history.',
                ]} />
                <p style={{ marginTop: '12px' }}>
                  We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </Section>

              <Section title="3. WhatsApp Communication">
                <p>
                  Our primary booking channel is WhatsApp (+966 56 948 7569). When you message us, WhatsApp processes your data according to its own <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Privacy Policy</a>. We retain booking messages to fulfil your trip and for service records. We do not add you to group chats or broadcast lists without your consent.
                </p>
              </Section>

              <Section title="4. Website Cookies & Analytics">
                <p>
                  Our website uses minimal, essential cookies only (for basic functionality). We do not use advertising cookies, cross-site tracking, or sell browsing data. If we add analytics in future, we will update this policy and seek consent where required.
                </p>
              </Section>

              <Section title="5. Data Storage & Security">
                <p>
                  Booking information is stored securely and accessed only by authorised Saudi Cabs GMC staff. We use Supabase (a secure cloud database) for storing booking records. Data is encrypted in transit (HTTPS / TLS). We retain booking records for a maximum of 2 years for service quality and dispute resolution purposes.
                </p>
              </Section>

              <Section title="6. Third-Party Services">
                <p>Our website and booking process use the following third-party services, each governed by their own privacy policies:</p>
                <List items={[
                  'WhatsApp (Meta) — for booking communication.',
                  'Supabase — for secure booking data storage.',
                  'Resend — for sending booking confirmation emails.',
                  'Google Maps / YouTube — embedded content on our website.',
                ]} />
              </Section>

              <Section title="7. Your Rights">
                <p>You have the right to:</p>
                <List items={[
                  'Request a copy of the personal data we hold about you.',
                  'Ask us to correct inaccurate information.',
                  'Request deletion of your data after your trip is completed.',
                  'Withdraw consent for communications at any time.',
                ]} />
                <p style={{ marginTop: '12px' }}>
                  To exercise any of these rights, contact us via WhatsApp at <strong>+966 56 948 7569</strong> or email at <strong>info@saudicabsgmc.com</strong>.
                </p>
              </Section>

              <Section title="8. Children's Privacy">
                <p>
                  Our services are not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.
                </p>
              </Section>

              <Section title="9. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect any changes. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </Section>

              <Section title="10. Contact Us">
                <p>For any privacy-related questions or concerns:</p>
                <List items={[
                  'WhatsApp: +966 56 948 7569',
                  'Email: info@saudicabsgmc.com',
                  'Website: saudicabsgmc.com',
                  'Location: Makkah Province, Saudi Arabia',
                ]} />
              </Section>

              {/* Back links */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>← Back to Home</Link>
                <Link href="/terms-and-conditions" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>Terms & Conditions →</Link>
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
