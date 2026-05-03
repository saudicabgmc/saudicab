'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Globe } from 'lucide-react'
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

export default function Footer() {
  const { lang, isAr } = useLang()
  const tr = t[lang]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo-saudi-cabs-gmc.webp" alt="Saudi Cabs GMC" width={44} height={44} style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
              {tr.footer.brand}
            </div>
            <p className="footer-desc">{tr.footer.desc}</p>
          </div>
          <div>
            <h4 className="footer-heading">{tr.footer.cities}</h4>
            <ul className="footer-links">
              {locationSlugs.map((slug, i) => (
                <li key={slug}><Link href={`/${slug}`}>{locationNames[lang][i]}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">{isAr ? 'أدلة السفر' : 'Travel Guides'}</h4>
            <ul className="footer-links">
              {guideLinks.map((g) => (
                <li key={g.href}><Link href={g.href}>{isAr ? g.ar : g.en}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">{tr.footer.contact}</h4>
            <div className="footer-contact-item">
              <Phone size={15} color="var(--primary)" strokeWidth={2} />
              <a href="tel:+966569487569" style={{ color: 'inherit' }}>+966 56 948 7569</a>
            </div>
            <div className="footer-contact-item">
              <MessageCircle size={15} color="var(--primary)" strokeWidth={2} />
              <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                {tr.footer.whatsapp}
              </a>
            </div>
            <div className="footer-contact-item">
              <Globe size={15} color="var(--primary)" strokeWidth={2} />
              <span>{tr.footer.country}</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <span>© {new Date().getFullYear()} {tr.footer.brand}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <Link href="/terms-and-conditions" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
              {isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
