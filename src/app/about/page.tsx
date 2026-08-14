import type { Metadata } from 'next'
import { Shield, DollarSign, MapPin, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Saudi Cabs GMC — Premium Taxi & Private Driver Service',
  description: 'Saudi Cabs GMC is a premium private taxi and chauffeur company serving Makkah, Madinah, Jeddah, and Taif since 2020. Fixed prices, licensed drivers, 24/7 availability.',
  alternates: { canonical: 'https://saudicabsgmc.com/about' },
  openGraph: {
    title: 'About Saudi Cabs GMC',
    description: 'Premium private taxi and chauffeur service across Saudi Arabia since 2020. Fixed prices, licensed drivers, 24/7.',
    url: 'https://saudicabsgmc.com/about',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'About Saudi Cabs GMC' }],
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://saudicabsgmc.com/about#webpage',
  name: 'About Saudi Cabs GMC',
  description: 'Saudi Cabs GMC is a premium private taxi and chauffeur company serving Makkah, Madinah, Jeddah, and Taif since 2020.',
  url: 'https://saudicabsgmc.com/about',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://saudicabsgmc.com/about' },
    ],
  },
}

const values = [
  { icon: <DollarSign size={28} />, title: 'Fixed Pricing', desc: 'No meters, no surge pricing. The price you agree on WhatsApp is the price you pay — every time.' },
  { icon: <Shield size={28} />, title: 'Licensed & Vetted Drivers', desc: 'Every driver is licensed, background-checked, and trained in premium hospitality. Bilingual in Arabic and English.' },
  { icon: <MapPin size={28} />, title: 'Deep Local Knowledge', desc: 'Our drivers know Makkah, Madinah, Jeddah, and Taif intimately — prayer-time traffic, hotel districts, and the fastest routes during Hajj and Umrah season.' },
  { icon: <Car size={28} />, title: 'Well-Maintained Fleet', desc: 'Toyota Camry sedans, Hyundai Staria vans, and GMC Yukon SUVs — regularly serviced, cleaned, and air-conditioned.' },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
              About Us
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
              Private Transport You Can <span style={{ color: 'var(--primary)' }}>Trust</span>
            </h1>
            <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
              Saudi Cabs GMC has been moving pilgrims, families, and business travelers across Saudi Arabia since 2020 — with fixed prices and no surprises.
            </p>
          </div>
        </section>

        {/* Story */}
        <section style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '18px' }}>
              Who <span style={{ color: 'var(--primary)' }}>We Are</span>
            </h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--muted-foreground)', lineHeight: 1.9, marginBottom: '16px' }}>
              Saudi Cabs GMC is a premium private taxi and chauffeur company operating across Makkah, Madinah, Jeddah, Taif, and the wider Kingdom of Saudi Arabia. We started with a simple goal: give pilgrims and travelers a way to book a ride with a confirmed, fixed price — no meter, no app, no guesswork — just a WhatsApp message away.
            </p>
            <p style={{ fontSize: '0.98rem', color: 'var(--muted-foreground)', lineHeight: 1.9 }}>
              Today we run airport transfers, intercity trips, private driver hire, and dedicated Hajj &amp; Umrah transport, with a fleet that ranges from the Toyota Camry sedan for solo and couple travel to the Hyundai Staria van and GMC Yukon VIP SUV for families and groups.
            </p>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '48px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '28px', textAlign: 'center' }}>
              Why Travelers <span style={{ color: 'var(--primary)' }}>Choose Us</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
              {values.map((v, i) => (
                <div key={i} style={{ padding: '28px 24px', borderRadius: '16px', border: '1.5px solid var(--border)', background: 'white' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '14px' }}>{v.icon}</div>
                  <div style={{ fontWeight: '800', fontSize: '1.05rem', marginBottom: '8px' }}>{v.title}</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '14px' }}>
              Where We <span style={{ color: 'var(--primary)' }}>Operate</span>
            </h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--muted-foreground)', lineHeight: 1.9, maxWidth: '620px', margin: '0 auto' }}>
              We serve Makkah, Madinah, Jeddah, and Taif directly, with intercity routes reaching Riyadh, Dammam, and Yanbu. Our team is on call 24 hours a day, 7 days a week, including throughout Hajj and Ramadan.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '560px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>Ready to Book?</h2>
            <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>Fixed price confirmed instantly. Professional driver. Door-to-door, 24/7.</p>
            <a
              href="https://wa.me/966569487569?text=Hello%2C%20I%27d%20like%20to%20book%20a%20taxi"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#25D366', color: 'white', fontWeight: '800',
                padding: '14px 36px', borderRadius: '12px', textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              Book on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
