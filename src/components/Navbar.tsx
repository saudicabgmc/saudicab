'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle, isAr } = useLang()
  const tr = t[lang].nav

  const links = [
    { href: '/', label: tr.home },
    { href: '/makkah-taxi-service', label: tr.makkah },
    { href: '/madinah-taxi-service', label: tr.madinah },
    { href: '/jeddah-taxi-service', label: tr.jeddah },
    { href: '/taif-taxi-service', label: tr.taif },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = 'rgba(255,255,255,0.92)'
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"

  return (
    <nav className={`navbar ${scrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img
            src="/logo-saudi-cabs-gmc.webp"
            alt="Saudi Cabs GMC Logo"
            style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
          />
          <span style={{ fontWeight: '900', fontSize: '1.2rem', color: 'white', lineHeight: 1 }}>
            Saudi Cabs <span style={{ color: 'var(--primary)' }}>GMC</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link ${scrolled ? 'nav-link-dark' : 'nav-link-white'}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Language toggle */}
          <button
            onClick={toggle}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1.5px solid rgba(255,255,255,0.4)',
              color: textColor,
              padding: '6px 14px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '0.82rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            {isAr ? 'EN' : 'AR'}
          </button>

          <a href="tel:+966549317712" style={{ fontWeight: '700', fontSize: '0.9rem', color: textColor, transition: 'color 0.3s', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={15} strokeWidth={2.5} />
            ‎+966 54 931 7712
          </a>
          <a
            href={`https://wa.me/966549317712?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: scrolled ? 'var(--primary)' : 'rgba(255,255,255,0.18)',
              border: `1.5px solid ${scrolled ? 'rgba(212,175,55,0.6)' : 'rgba(255,255,255,0.55)'}`,
              color: scrolled ? 'var(--foreground)' : 'white',
              padding: '8px 20px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s',
              textDecoration: 'none',
            }}
          >
            <MessageCircle size={15} strokeWidth={2.5} />
            {tr.bookNow}
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-only"
          aria-label="menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: scrolled ? 'var(--foreground)' : 'white' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid var(--border)', padding: '12px 0' }}>
          <div className="container">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '11px 0', fontWeight: '600', color: 'var(--foreground)', borderBottom: '1px solid var(--border)', fontSize: '0.95rem' }}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={toggle}
                style={{ flex: 1, padding: '10px', background: 'var(--muted)', border: '1.5px solid var(--border)', borderRadius: '8px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}
              >
                {isAr ? 'Switch to English' : 'التبديل للعربية'}
              </button>
            </div>
            <a
              href="tel:+966549317712"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 0', fontWeight: '700', color: 'var(--primary)', fontSize: '0.95rem' }}
            >
              <Phone size={16} strokeWidth={2.5} />
              {isAr ? 'اتصل بنا الآن' : 'Call Us Now'}
            </a>
            <a
              href={`https://wa.me/966549317712?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '12px 16px', background: '#25D366', color: 'white', fontWeight: '700', borderRadius: '8px', textAlign: 'center', marginTop: '8px', fontSize: '0.95rem', textDecoration: 'none' }}
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              {tr.bookWhatsapp}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
