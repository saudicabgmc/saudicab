import type { Metadata } from 'next'
import { MessageCircle } from 'lucide-react'
import ReviewsGrid from './ReviewsGrid'

export const metadata: Metadata = {
  title: 'Reviews | Saudi Cabs GMC — What Our Passengers Say',
  description: 'Read what passengers say about Saudi Cabs GMC — fixed-price taxi and private driver service across Makkah, Madinah, Jeddah, and Taif.',
  alternates: { canonical: 'https://saudicabsgmc.com/reviews' },
  openGraph: {
    title: 'Passenger Reviews — Saudi Cabs GMC',
    description: 'Read what passengers say about booking a taxi or private driver with Saudi Cabs GMC.',
    url: 'https://saudicabsgmc.com/reviews',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Reviews — Saudi Cabs GMC' }],
  },
}

const reviewsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://saudicabsgmc.com/reviews#webpage',
  name: 'Passenger Reviews — Saudi Cabs GMC',
  description: 'Read what passengers say about Saudi Cabs GMC — fixed-price taxi and private driver service across Makkah, Madinah, Jeddah, and Taif.',
  url: 'https://saudicabsgmc.com/reviews',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://saudicabsgmc.com/reviews' },
    ],
  },
}

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema) }} />
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
              Reviews
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
              What Our <span style={{ color: 'var(--primary)' }}>Passengers Say</span>
            </h1>
            <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
              Real feedback from travelers we&apos;ve driven across Makkah, Madinah, Jeddah, and Taif.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section style={{ padding: '56px 0' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <ReviewsGrid />
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '560px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '12px' }}>Had a Great Trip With Us?</h2>
            <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>
              Message us on WhatsApp and share your experience — we&apos;d love to hear from you.
            </p>
            <a
              href="https://wa.me/923097811785?text=Hello%2C%20I%27d%20like%20to%20share%20feedback%20about%20my%20trip"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#25D366', color: 'white', fontWeight: '800',
                padding: '14px 36px', borderRadius: '12px', textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              Share Your Feedback
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
