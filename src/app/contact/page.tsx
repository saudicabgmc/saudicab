import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Mail, Clock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Saudi Cabs GMC — 24/7 Taxi Booking Support',
  description: 'Get in touch with Saudi Cabs GMC for taxi bookings, inquiries, and customer support. Available 24/7 via WhatsApp, phone, and email across Makkah, Madinah, Jeddah & Taif.',
  alternates: { canonical: 'https://saudicabsgmc.com/contact' },
  openGraph: {
    title: 'Contact Saudi Cabs GMC — 24/7 Taxi Booking',
    description: 'Reach us via WhatsApp, phone, or email for instant taxi bookings across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/contact',
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://saudicabsgmc.com/contact#webpage',
  name: 'Contact Saudi Cabs GMC — 24/7 Taxi Booking Support',
  description: 'Get in touch with Saudi Cabs GMC for taxi bookings, inquiries, and customer support. Available 24/7 via WhatsApp, phone, and email across Makkah, Madinah, Jeddah & Taif.',
  url: 'https://saudicabsgmc.com/contact',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#business' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://saudicabsgmc.com/contact' },
    ],
  },
}

const localBusinessContactSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': 'https://saudicabsgmc.com/#business',
  name: 'Saudi Cabs GMC',
  url: 'https://saudicabsgmc.com',
  telephone: '+966569487569',
  email: 'info@saudicabsgmc.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SA',
    addressRegion: 'Makkah Province',
    addressLocality: 'Makkah',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 21.3891, longitude: 39.8579 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+966569487569',
      contactType: 'reservations',
      availableLanguage: ['English', 'Arabic'],
    },
    {
      '@type': 'ContactPoint',
      url: 'https://wa.me/966569487569',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    {
      '@type': 'ContactPoint',
      email: 'info@saudicabsgmc.com',
      contactType: 'customer service',
    },
  ],
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageCircle size={28} strokeWidth={2} />,
      title: 'WhatsApp (Fastest)',
      value: '+966 56 948 7569',
      href: 'https://wa.me/966569487569?text=Hello%2C%20I%27d%20like%20to%20book%20a%20taxi',
      desc: 'Instant response, 24/7. Send your pickup, destination & date.',
      color: '#25D366',
    },
    {
      icon: <Phone size={28} strokeWidth={2} />,
      title: 'Phone Call',
      value: '+966 56 948 7569',
      href: 'tel:+966569487569',
      desc: 'Call us directly for urgent bookings or queries.',
      color: 'var(--primary)',
    },
    {
      icon: <Mail size={28} strokeWidth={2} />,
      title: 'Email',
      value: 'info@saudicabsgmc.com',
      href: 'mailto:info@saudicabsgmc.com',
      desc: 'For corporate inquiries, partnerships, and group bookings.',
      color: '#4A90D9',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessContactSchema) }} />
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            Contact Us
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
            Get in Touch with <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span>
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
            Available 24/7 for taxi bookings, inquiries, and customer support across Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            {contactMethods.map((m, i) => (
              <a
                key={i}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block', padding: '32px 24px', borderRadius: '16px',
                  border: '1.5px solid var(--border)', background: 'white',
                  textDecoration: 'none', textAlign: 'center',
                  transition: 'all 0.3s', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ color: m.color, marginBottom: '16px' }}>{m.icon}</div>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--foreground)', marginBottom: '6px' }}>{m.title}</div>
                <div style={{ fontWeight: '700', fontSize: '0.95rem', color: m.color, marginBottom: '10px' }}>{m.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{m.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Details */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '24px' }}>
            Our <span style={{ color: 'var(--primary)' }}>Office</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <MapPin size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>Address</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  Makkah, Makkah Province<br />Kingdom of Saudi Arabia
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Clock size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>Hours</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  24 Hours, 7 Days a Week<br />Including Hajj & Ramadan
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Globe size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>Service Area</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  Makkah, Madinah, Jeddah<br />Taif, Riyadh & all KSA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>Ready to Book?</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>Fixed price confirmed instantly. Professional driver. Door-to-door, 24/7.</p>
          <a
            href="https://wa.me/966569487569?text=Hello%2C%20I'd%20like%20to%20book%20a%20taxi%20in%20Saudi%20Arabia"
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
