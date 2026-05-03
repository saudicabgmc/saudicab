'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Globe, Mail } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

const locationSlugs = ['makkah-taxi-service', 'madinah-taxi-service', 'jeddah-taxi-service', 'taif-taxi-service']
const locationNames = {
  en: ['Makkah', 'Madinah', 'Jeddah', 'Taif'],
  ar: ['مكة المكرمة', 'المدينة المنورة', 'جدة', 'الطائف'],
}

const guideLinks = [
  { href: '/makkah-transport-guide', en: 'Makkah Transport Guide', ar: 'دليل النقل في مكة' },
  { href: '/jeddah-airport-guide', en: 'Jeddah Airport Guide', ar: 'دليل مطار جدة' },
  { href: '/taxi-prices-saudi-arabia', en: 'Taxi Prices Guide', ar: 'دليل أسعار التاكسي' },
  { href: '/umrah-travel-guide', en: 'Umrah Travel Guide', ar: 'دليل سفر العمرة' },
  { href: '/hajj-transport-faq', en: 'Hajj Transport FAQ', ar: 'الأسئلة الشائعة لنقل الحج' },
]

const socialLinks = [
  { href: 'https://www.youtube.com/@saudicabsgmc', label: 'YouTube', icon: '▶' },
  { href: 'https://www.facebook.com/saudicabsgmc', label: 'Facebook', icon: 'f' },
  { href: 'https://www.instagram.com/saudicabsgmc', label: 'Instagram', icon: '📷' },
  { href: 'https://x.com/saudicabsgmc', label: 'X / Twitter', icon: '𝕏' },
  { href: 'https://www.linkedin.com/company/saudicabsgmc', label: 'LinkedIn', icon: 'in' },
  { href: 'https://www.tiktok.com/@saudicabsgmc', label: 'TikTok', icon: '♪' },
]

export default function Footer() {
  const { lang, isAr } = useLang()
  const tr = t[lang]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand + Description */}
          <div>
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo-saudi-cabs-gmc.webp" alt="Saudi Cabs GMC" width={44} height={44} style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
              {tr.footer.brand}
            </div>
            <p className="footer-desc">{tr.footer.desc}</p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  aria-label={s.label}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '34px', height: '34px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: '800',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <h4 className="footer-heading">{tr.footer.cities}</h4>
            <ul className="footer-links">
              {locationSlugs.map((slug, i) => (
                <li key={slug}><Link href={`/${slug}`}>{locationNames[lang][i]}</Link></li>
              ))}
            </ul>
          </div>

          {/* Travel Guides */}
          <div>
            <h4 className="footer-heading">{isAr ? 'أدلة السفر' : 'Travel Guides'}</h4>
            <ul className="footer-links">
              {guideLinks.map((g) => (
                <li key={g.href}><Link href={g.href}>{isAr ? g.ar : g.en}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">{tr.footer.contact}</h4>
            <div className="footer-contact-item">
              <Phone size={15} color="var(--primary)" strokeWidth={2} />
              <a href="https://wa.me/966569487569" style={{ color: 'inherit' }}>+966 56 948 7569</a>
            </div>
            <div className="footer-contact-item">
              <MessageCircle size={15} color="var(--primary)" strokeWidth={2} />
              <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                {tr.footer.whatsapp}
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} color="var(--primary)" strokeWidth={2} />
              <a href="mailto:info@saudicabsgmc.com" style={{ color: 'inherit' }}>info@saudicabsgmc.com</a>
            </div>
            <div className="footer-contact-item">
              <Globe size={15} color="var(--primary)" strokeWidth={2} />
              <span>{tr.footer.country}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <span>© {new Date().getFullYear()} {tr.footer.brand}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
              {isAr ? 'اتصل بنا' : 'Contact'}
            </Link>
            <Link href="/team" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
              {isAr ? 'فريقنا' : 'Team'}
            </Link>
            <Link href="/privacy-policy" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <Link href="/terms-and-conditions" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
              {isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </Link>
            <Link href="/html-sitemap" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
              {isAr ? 'خريطة الموقع' : 'Sitemap'}
            </Link>
          </div>
        </div>

        {/* DMCA Badge */}
        <div style={{ textAlign: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <a
            href="https://www.dmca.com/Protection/Status.aspx?ID=saudicabsgmc"
            target="_blank"
            rel="noopener noreferrer"
            title="DMCA.com Protection Status"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
          >
            🛡️ DMCA Protected — Content © {new Date().getFullYear()} Saudi Cabs GMC
          </a>
        </div>
      </div>
    </footer>
  )
}
