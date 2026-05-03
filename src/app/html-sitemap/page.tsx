import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HTML Sitemap | Saudi Cabs GMC — All Pages Directory',
  description: 'Complete directory of all pages on Saudi Cabs GMC — city services, intercity routes, travel guides, blog articles, and informational pages.',
  alternates: { canonical: 'https://saudicabsgmc.com/html-sitemap' },
}

const sections = [
  {
    title: 'Main Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/team', label: 'Our Team' },
      { href: '/routes-map', label: 'Routes Map' },
      { href: '/blog', label: 'Blog' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-and-conditions', label: 'Terms & Conditions' },
    ],
  },
  {
    title: 'City Taxi Services',
    links: [
      { href: '/makkah-taxi-service', label: 'Makkah Taxi Service' },
      { href: '/madinah-taxi-service', label: 'Madinah Taxi Service' },
      { href: '/jeddah-taxi-service', label: 'Jeddah Taxi Service' },
      { href: '/taif-taxi-service', label: 'Taif Taxi Service' },
    ],
  },
  {
    title: 'Intercity Routes',
    links: [
      { href: '/jeddah-airport-to-makkah', label: 'Jeddah Airport to Makkah' },
      { href: '/makkah-to-jeddah-airport', label: 'Makkah to Jeddah Airport' },
      { href: '/jeddah-airport-to-madinah', label: 'Jeddah Airport to Madinah' },
      { href: '/makkah-to-madinah', label: 'Makkah to Madinah' },
      { href: '/madinah-to-makkah', label: 'Madinah to Makkah' },
      { href: '/jeddah-to-makkah', label: 'Jeddah to Makkah' },
      { href: '/makkah-to-jeddah', label: 'Makkah to Jeddah' },
      { href: '/jeddah-to-madinah', label: 'Jeddah to Madinah' },
      { href: '/madinah-to-jeddah', label: 'Madinah to Jeddah' },
      { href: '/makkah-to-taif', label: 'Makkah to Taif' },
      { href: '/taif-to-makkah', label: 'Taif to Makkah' },
      { href: '/jeddah-to-taif', label: 'Jeddah to Taif' },
      { href: '/taif-to-jeddah', label: 'Taif to Jeddah' },
      { href: '/makkah-to-riyadh', label: 'Makkah to Riyadh' },
      { href: '/riyadh-to-makkah', label: 'Riyadh to Makkah' },
      { href: '/riyadh-to-madinah', label: 'Riyadh to Madinah' },
      { href: '/riyadh-to-jeddah', label: 'Riyadh to Jeddah' },
      { href: '/taif-to-madinah', label: 'Taif to Madinah' },
    ],
  },
  {
    title: 'Airport Transfers',
    links: [
      { href: '/airport-transfer', label: 'Airport Transfer Service' },
      { href: '/madinah-airport-taxi', label: 'Madinah Airport Taxi' },
      { href: '/taif-airport-taxi', label: 'Taif Airport Taxi' },
    ],
  },
  {
    title: 'Special Services',
    links: [
      { href: '/private-driver', label: 'Private Driver Hire' },
      { href: '/makkah-ziyarat-tour', label: 'Makkah Ziyarat Tour' },
      { href: '/madinah-ziyarat-tour', label: 'Madinah Ziyarat Tour' },
      { href: '/hajj-umrah-transport', label: 'Hajj & Umrah Transport' },
    ],
  },
  {
    title: 'Fleet',
    links: [
      { href: '/toyota-camry-taxi', label: 'Toyota Camry Sedan' },
      { href: '/hyundai-staria-taxi', label: 'Hyundai Staria Van' },
      { href: '/gmc-yukon-hire', label: 'GMC Yukon VIP SUV' },
    ],
  },
  {
    title: 'Travel Guides',
    links: [
      { href: '/makkah-transport-guide', label: 'Makkah Transport Guide' },
      { href: '/jeddah-airport-guide', label: 'Jeddah Airport Guide' },
      { href: '/taxi-prices-saudi-arabia', label: 'Taxi Prices Guide' },
      { href: '/umrah-travel-guide', label: 'Umrah Travel Guide' },
      { href: '/hajj-transport-faq', label: 'Hajj Transport FAQ' },
    ],
  },
]

export default function HtmlSitemap() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
      <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '50px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: '900', margin: '0 0 10px' }}>
            Site <span style={{ color: 'var(--primary)' }}>Map</span>
          </h1>
          <p style={{ opacity: 0.85, fontSize: '1rem' }}>Complete directory of all pages on Saudi Cabs GMC.</p>
        </div>
      </section>

      <section style={{ padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
            {sections.map((s, i) => (
              <div key={i}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '12px', borderBottom: '2px solid var(--border)', paddingBottom: '8px' }}>
                  {s.title}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.links.map(l => (
                    <li key={l.href} style={{ marginBottom: '8px' }}>
                      <Link href={l.href} style={{ color: 'var(--foreground)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                        → {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
