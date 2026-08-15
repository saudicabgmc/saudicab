import type { Metadata } from 'next'
import { MessageCircle, CheckCircle, Car } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import TrustBadges from '@/components/TrustBadges'

export const metadata: Metadata = {
  title: 'Book a Taxi | Saudi Cabs GMC — Instant Fixed-Price Booking',
  description: 'Book a taxi or private driver anywhere in Saudi Arabia in minutes. Choose your vehicle, pickup, and destination — get an instant fixed price confirmed on WhatsApp.',
  alternates: { canonical: 'https://saudicabsgmc.com/booking' },
  openGraph: {
    title: 'Book a Taxi — Saudi Cabs GMC',
    description: 'Instant fixed-price taxi booking across Makkah, Madinah, Jeddah, and Taif. Confirmed on WhatsApp in minutes.',
    url: 'https://saudicabsgmc.com/booking',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Book a Taxi — Saudi Cabs GMC' }],
  },
}

const bookingPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://saudicabsgmc.com/booking#webpage',
  name: 'Book a Taxi — Saudi Cabs GMC',
  description: 'Book a taxi or private driver anywhere in Saudi Arabia in minutes. Choose your vehicle, pickup, and destination — get an instant fixed price confirmed on WhatsApp.',
  url: 'https://saudicabsgmc.com/booking',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Book a Taxi', item: 'https://saudicabsgmc.com/booking' },
    ],
  },
}

const steps = [
  { icon: <MessageCircle size={20} />, img: '/booking/step-1-book-whatsapp.webp', title: 'Send Your Request', desc: 'Fill in your vehicle, route, and date below, or message us directly on WhatsApp.' },
  { icon: <CheckCircle size={20} />, img: '/booking/step-2-confirmation.webp', title: 'Get a Fixed Price', desc: 'We reply within minutes with a clear, confirmed price — no meter, no surge, no hidden fees.' },
  { icon: <Car size={20} />, img: '/booking/step-3-driver-arrival.webp', title: 'Driver Arrives on Time', desc: 'Your professional chauffeur picks you up at the agreed time and place.' },
]

export default function BookingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingPageSchema) }} />
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
              Book Now
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
              Book Your <span style={{ color: 'var(--primary)' }}>Taxi</span> in Minutes
            </h1>
            <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
              Fixed price confirmed instantly. Professional driver. Door-to-door, 24/7, across Makkah, Madinah, Jeddah &amp; Taif.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section style={{ padding: '48px 0' }}>
          <div className="container" style={{ maxWidth: '520px' }}>
            <BookingForm />
          </div>
        </section>

        {/* How It Works */}
        <section style={{ padding: '48px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '28px', textAlign: 'center' }}>
              How It <span style={{ color: 'var(--primary)' }}>Works</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {steps.map((s, i) => (
                <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', border: '1.5px solid var(--border)', background: 'white' }}>
                  <div style={{ position: 'relative', width: '100%', height: '170px' }}>
                    <img src={s.img} alt={s.title} loading="lazy" width={400} height={170} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', top: '12px', left: '12px',
                      background: 'linear-gradient(135deg, #0B3D2E, #0F5132)', color: 'white',
                      width: '30px', height: '30px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: '900', fontSize: '0.85rem',
                    }}>
                      {i + 1}
                    </div>
                  </div>
                  <div style={{ padding: '18px 20px 22px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }}>{s.icon}</div>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '0.98rem', marginBottom: '6px' }}>{s.title}</div>
                      <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustBadges />

        {/* WhatsApp fallback CTA */}
        <section style={{ padding: '56px 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '560px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>Prefer to Chat First?</h2>
            <p style={{ color: 'var(--muted-foreground)', marginBottom: '24px', lineHeight: 1.7 }}>
              Skip the form and message us directly — we&apos;ll ask for your route, date, and passenger count on WhatsApp.
            </p>
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
              <MessageCircle size={18} strokeWidth={2.5} />
              Book on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
