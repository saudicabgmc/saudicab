import type { Metadata } from 'next'
import { Shield, Award, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team | Saudi Cabs GMC — Professional Chauffeurs & Support',
  description: 'Meet the Saudi Cabs GMC team: professional chauffeurs, dispatch coordinators, and customer support serving pilgrims and travelers across Saudi Arabia.',
  alternates: { canonical: 'https://saudicabsgmc.com/team' },
  openGraph: {
    title: 'Our Team — Saudi Cabs GMC',
    description: 'Professional chauffeurs and 24/7 support serving pilgrims across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/team',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Our Team — Saudi Cabs GMC' }],
  },
}

const teamPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://saudicabsgmc.com/team#webpage',
  name: 'Our Team — Saudi Cabs GMC Professional Chauffeurs & Support',
  description: 'Meet the Saudi Cabs GMC team: professional chauffeurs, dispatch coordinators, and customer support serving pilgrims and travelers across Saudi Arabia.',
  url: 'https://saudicabsgmc.com/team',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'Our Team', item: 'https://saudicabsgmc.com/team' },
    ],
  },
}

export default function TeamPage() {
  const teamDepartments = [
    {
      icon: <Users size={32} />,
      title: 'Professional Chauffeurs',
      desc: 'Our drivers are trained in hospitality and pilgrim logistics, and speak both English and Arabic. They know the routes, holy sites, and prayer-time traffic across Makkah, Madinah, Jeddah, and Taif.',
    },
    {
      icon: <Clock size={32} />,
      title: 'Dispatch & Coordination',
      desc: 'Our dispatch team manages bookings and coordinates pickups around the clock. Whether it\'s a midnight airport pickup or a Hajj season transfer, they keep operations running smoothly.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Customer Support',
      desc: 'Bilingual support handles WhatsApp bookings, questions, and post-trip feedback in English and Arabic, aiming to respond as quickly as possible.',
    },
    {
      icon: <Award size={32} />,
      title: 'Fleet Maintenance',
      desc: 'Our team keeps the fleet (Toyota Camry, Hyundai Staria, GMC Yukon) clean and regularly serviced so every vehicle is ready for the road.',
    },
  ]

  const values = [
    { title: 'Safety First', desc: 'Experienced drivers and regularly maintained vehicles on every trip.' },
    { title: 'Fixed Pricing', desc: 'No meters, no surge pricing. The price you see is the price you pay.' },
    { title: 'Pilgrim-Focused', desc: 'Familiarity with Hajj & Umrah logistics, prayer stops, and holy site navigation.' },
    { title: 'Premium Fleet', desc: 'Regularly maintained Toyota Camry, Hyundai Staria, and GMC Yukon vehicles.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamPageSchema) }} />
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            Our Team
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
            Meet the <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> Team
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
            A dedicated team working to make every journey across Saudi Arabia safe, comfortable, and memorable.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
            {teamDepartments.map((dept, i) => (
              <div key={i} style={{
                padding: '32px 28px', borderRadius: '16px',
                border: '1.5px solid var(--border)', background: 'white',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ color: 'var(--primary)' }}>{dept.icon}</div>
                  <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{dept.title}</div>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '24px', textAlign: 'center' }}>
            Our <span style={{ color: 'var(--primary)' }}>Values</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
                <div style={{ fontWeight: '800', fontSize: '0.95rem', marginBottom: '6px' }}>{v.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '12px' }}>Want to Join Our Team?</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>
            We&apos;re always looking for professional drivers and transport coordinators across Saudi Arabia.
          </p>
          <a
            href="mailto:info@saudicabsgmc.com?subject=Job Application — Saudi Cabs GMC"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'var(--primary)', color: 'var(--foreground)', fontWeight: '800',
              padding: '14px 36px', borderRadius: '12px', textDecoration: 'none', fontSize: '1rem',
            }}
          >
            Apply via Email
          </a>
        </div>
      </section>
    </main>
    </>
  )
}
