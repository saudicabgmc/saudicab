'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.95.542 3.773 1.484 5.328L2.06 22l4.787-1.393a9.96 9.96 0 0 0 5.157 1.397h.005c5.517 0 10.004-4.486 10.004-10.004C22.013 6.486 17.526 2 12.004 2zm0 18.17h-.004a8.14 8.14 0 0 1-4.157-1.137l-.298-.177-3.093.9.826-3.05-.194-.312a8.146 8.146 0 0 1-1.248-4.39c0-4.507 3.665-8.172 8.172-8.172 2.183 0 4.235.85 5.78 2.395a8.123 8.123 0 0 1 2.39 5.782c0 4.507-3.667 8.172-8.174 8.172z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)
  const { lang, toggle, isAr } = useLang()
  const tr = t[lang].nav

  const links = [
    { href: '/', label: tr.home },
    { href: '/makkah-taxi-service', label: tr.makkah },
    { href: '/madinah-taxi-service', label: tr.madinah },
    { href: '/jeddah-taxi-service', label: tr.jeddah },
    { href: '/taif-taxi-service', label: tr.taif },
    { href: '/routes-map', label: isAr ? 'خريطة الخطوط' : 'Routes Map' },
    { href: '/blog', label: isAr ? 'المدونة' : 'Blog' },
  ]

  const guides = [
    { href: '/makkah-transport-guide', label: isAr ? 'دليل نقل مكة' : 'Makkah Transport Guide' },
    { href: '/jeddah-airport-guide', label: isAr ? 'دليل مطار جدة' : 'Jeddah Airport Guide' },
    { href: '/taxi-prices-saudi-arabia', label: isAr ? 'دليل الأسعار' : 'Taxi Prices Guide' },
    { href: '/umrah-travel-guide', label: isAr ? 'دليل سفر العمرة' : 'Umrah Travel Guide' },
    { href: '/hajj-transport-faq', label: isAr ? 'أسئلة الحج' : 'Hajj Transport FAQ' },
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
            width={48} height={48}
            style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
          />
          <span style={{ fontWeight: '900', fontSize: '1.2rem', color: 'white', lineHeight: 1 }}>
            Saudi Cabs <span style={{ color: 'var(--primary)' }}>GMC</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link ${scrolled ? 'nav-link-dark' : 'nav-link-white'}`}>
              {l.label}
            </Link>
          ))}
          
          {/* Guides Dropdown */}
          <div 
            style={{ position: 'relative' }} 
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              onClick={() => setGuidesOpen(!guidesOpen)}
              aria-haspopup="true"
              aria-expanded={guidesOpen}
              className={`nav-link ${scrolled ? 'nav-link-dark' : 'nav-link-white'}`}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {isAr ? 'الأدلة' : 'Guides'}
              <ChevronDown size={14} style={{ transform: guidesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            
            {guidesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: isAr ? 'auto' : 0, right: isAr ? 0 : 'auto', background: 'white', minWidth: '220px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', padding: '10px 0', zIndex: 100, border: '1px solid var(--border)' }}>
                {guides.map(g => (
                  <Link key={g.href} href={g.href} style={{ display: 'block', padding: '10px 20px', color: 'var(--foreground)', textDecoration: 'none', fontWeight: '600', fontSize: '0.88rem', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--muted)')} onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}>
                    {g.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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

          <a
            href={`https://wa.me/923097811785?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: 'white',
              padding: '9px 20px',
              borderRadius: '10px',
              fontWeight: '700',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(37,211,102,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#20bd5a'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(37,211,102,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#25D366'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,211,102,0.3)'
            }}
          >
            <WhatsAppIcon size={15} />
            {tr.bookWhatsapp}
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-only"
          aria-label="menu"
          aria-expanded={menuOpen}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '10px', margin: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid var(--border)', padding: '12px 0', maxHeight: '85vh', overflowY: 'auto' }}>
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

            {/* Mobile Guides Expandable */}
            <div style={{ borderBottom: '1px solid var(--border)' }}>
              <button
                onClick={() => setGuidesOpen(!guidesOpen)}
                aria-expanded={guidesOpen}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', fontWeight: '700', color: 'var(--primary)', background: 'none', border: 'none', fontSize: '0.95rem' }}
              >
                {isAr ? 'أدلة السفر' : 'Travel Guides'}
                <ChevronDown size={18} style={{ transform: guidesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {guidesOpen && (
                <div style={{ padding: '0 0 12px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {guides.map(g => (
                    <Link key={g.href} href={g.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '6px 0', color: 'var(--muted-foreground)', fontSize: '0.9rem', fontWeight: '600' }}>
                      {g.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={toggle}
                style={{ flex: 1, padding: '10px', background: 'var(--muted)', border: '1.5px solid var(--border)', borderRadius: '8px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}
              >
                {isAr ? 'Switch to English' : 'التبديل للعربية'}
              </button>
            </div>
            <a
              href={`https://wa.me/923097811785?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '12px 16px', background: '#25D366', color: 'white', fontWeight: '700', borderRadius: '10px', textAlign: 'center', marginTop: '10px', fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 2px 12px rgba(37,211,102,0.3)' }}
            >
              <WhatsAppIcon size={17} />
              {tr.bookWhatsapp}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
