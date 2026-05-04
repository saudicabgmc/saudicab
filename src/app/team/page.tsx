import type { Metadata } from 'next'
import { Shield, Award, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team | Saudi Cabs GMC — Professional Chauffeurs & Support',
  description: 'Meet the Saudi Cabs GMC team: Professional certified chauffeurs, 24/7 dispatch coordinators, and customer support experts serving pilgrims and travelers across Saudi Arabia.',
  alternates: { canonical: 'https://saudicabsgmc.com/team' },
  openGraph: {
    title: 'Our Team — Saudi Cabs GMC',
    description: 'Professional certified chauffeurs and 24/7 support serving pilgrims across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/team',
  },
}

const teamPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://saudicabsgmc.com/team#webpage',
  name: 'Our Team — Saudi Cabs GMC Professional Chauffeurs & Support',
  description: 'Meet the Saudi Cabs GMC team: Professional certified chauffeurs, 24/7 dispatch coordinators, and customer support experts serving pilgrims and travelers across Saudi Arabia.',
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

const teamOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://saudicabsgmc.com/#organization',
  name: 'Saudi Cabs GMC',
  url: 'https://saudicabsgmc.com',
  foundingDate: '2020',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 40, maxValue: 60 },
  description: 'Saudi Cabs GMC is a premium taxi and private transport company operating 24/7 across Saudi Arabia, serving pilgrims, families, and business travelers.',
  member: [
    {
      '@type': 'OrganizationRole',
      member: { '@type': 'Person', jobTitle: 'Professional Chauffeur', description: 'Licensed, background-checked, and trained in premium hospitality. Bilingual Arabic & English. Certified for Hajj & Umrah transport.' },
      roleName: 'Professional Chauffeurs',
      numberOfMembers: 30,
    },
    {
      '@type': 'OrganizationRole',
      member: { '@type': 'Person', jobTitle: 'Dispatch Coordinator', description: '24/7 dispatch team managing real-time bookings, live GPS tracking, and route optimization.' },
      roleName: 'Dispatch & Coordination',
      numberOfMembers: 10,
    },
    {
      '@type': 'OrganizationRole',
      member: { '@type': 'Person', jobTitle: 'Customer Support Agent', description: 'Dedicated bilingual support agents handling WhatsApp bookings, email queries, and post-trip feedback.' },
      roleName: 'Customer Support',
      numberOfMembers: 5,
    },
    {
      '@type': 'OrganizationRole',
      member: { '@type': 'Person', jobTitle: 'Fleet Maintenance Engineer', description: 'Maintenance engineers ensuring Toyota Camry, Hyundai Staria, and GMC Yukon vehicles meet premium standards.' },
      roleName: 'Fleet Maintenance',
      numberOfMembers: 5,
    },
  ],
}

export default function TeamPage() {
  const teamDepartments = [
    {
      icon: <Users size={32} />,
      title: 'Professional Chauffeurs',
      count: '30+',
      desc: 'All our drivers are licensed, background-checked, and trained in premium hospitality. They speak both English and Arabic, and are certified for Hajj & Umrah pilgrimage transport. Every chauffeur undergoes regular vehicle safety inspections and customer service training.',
    },
    {
      icon: <Clock size={32} />,
      title: 'Dispatch & Coordination',
      count: '10+',
      desc: 'Our 24/7 dispatch team manages real-time bookings, live GPS tracking, and instant route optimization. Whether it\'s a midnight airport pickup or a Hajj season transfer, our coordinators ensure seamless operations around the clock.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Customer Support',
      count: '5+',
      desc: 'Dedicated bilingual support agents handle WhatsApp bookings, email queries, and post-trip feedback. Available in English and Arabic, our support team ensures every passenger receives a response within minutes.',
    },
    {
      icon: <Award size={32} />,
      title: 'Fleet Maintenance',
      count: '5+',
      desc: 'Our maintenance engineers keep the entire fleet (Toyota Camry, Hyundai Staria, GMC Yukon) in showroom condition. Regular servicing, deep cleaning, and safety checks ensure every vehicle meets our premium standards.',
    },
  ]

  const values = [
    { title: 'Safety First', desc: 'GPS-tracked vehicles, background-checked drivers, and 24/7 monitoring.' },
    { title: 'Fixed Pricing', desc: 'No meters, no surge pricing. The price you see is the price you pay.' },
    { title: 'Pilgrim-Focused', desc: 'Deep understanding of Hajj & Umrah logistics, prayer stops, and holy site navigation.' },
    { title: 'Premium Fleet', desc: 'Regularly maintained Toyota Camry, Hyundai Staria, and GMC Yukon vehicles.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamOrganizationSchema) }} />
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
            A team of 50+ professionals dedicated to making every journey across Saudi Arabia safe, comfortable, and memorable.
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
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{dept.title}</div>
                    <div style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--primary)' }}>{dept.count} Members</div>
                  </div>
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
