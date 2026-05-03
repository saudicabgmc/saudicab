import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #071f17 0%, #0B3D2E 60%, #071f17 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '120px 24px 80px', textAlign: 'center', position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative border */}
      <div style={{ position: 'absolute', inset: '20px', border: '1px solid rgba(212,175,55,0.15)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: '28px', border: '1px solid rgba(212,175,55,0.07)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '580px' }}>

        {/* 404 number */}
        <div style={{
          fontSize: 'clamp(6rem, 20vw, 10rem)', fontWeight: '900', lineHeight: 1,
          background: 'linear-gradient(135deg, #D4AF37, rgba(212,175,55,0.4))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          marginBottom: '8px', letterSpacing: '-0.04em',
        }}>
          404
        </div>

        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', margin: '0 auto 28px' }} />

        <h1 style={{ color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: '900', marginBottom: '14px', lineHeight: 1.3 }}>
          الصفحة غير موجودة
          <br />
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75em', fontWeight: '500' }}>Page Not Found</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '36px' }}>
          The page you are looking for does not exist or has been moved.
          <br />
          <span style={{ fontSize: '0.9em' }}>الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</span>
        </p>

        {/* Quick links */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#D4AF37', color: '#071f17',
            padding: '13px 28px', borderRadius: '10px', fontWeight: '800',
            fontSize: '0.9rem', textDecoration: 'none',
          }}>
            🏠 Go Home
          </Link>
          <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#25D366', color: 'white',
            padding: '13px 28px', borderRadius: '10px', fontWeight: '800',
            fontSize: '0.9rem', textDecoration: 'none',
          }}>
            💬 WhatsApp Us
          </a>
        </div>

        {/* Popular links */}
        <div>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
            Popular Pages
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { href: '/makkah-taxi-service', label: 'Makkah Taxi' },
              { href: '/madinah-taxi-service', label: 'Madinah Taxi' },
              { href: '/jeddah-taxi-service', label: 'Jeddah Taxi' },
              { href: '/jeddah-airport-to-makkah', label: 'Airport → Makkah' },
              { href: '/hajj-umrah-transport', label: 'Hajj & Umrah' },
              { href: '/blog', label: 'Blog' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                color: 'rgba(212,175,55,0.85)', fontSize: '0.82rem', fontWeight: '600',
                textDecoration: 'none', padding: '6px 14px',
                background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '50px', transition: 'all 0.2s',
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
