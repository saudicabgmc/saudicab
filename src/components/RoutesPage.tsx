'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Clock, MapPin, ArrowRight, Phone, MessageCircle, Globe, CheckCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import BookingForm from './BookingForm'
import FAQSection, { type FAQItem } from './FAQSection'
import PricingSection from './PricingSection'
import { type PricingRoute } from '@/lib/pricingData'
import {
  type CityRoutesData,
  type RouteType,
  routeTypeLabel,
  routeTypeColor,
} from '@/lib/routesData'

type BText = { ar: string; en: string }

const ALL_TYPES: RouteType[] = ['airport', 'intercity', 'pilgrimage', 'tour', 'local']

const typeIcons: Record<RouteType, string> = {
  airport:    '✈',
  intercity:  '🚗',
  pilgrimage: '🕌',
  tour:       '🏔',
  local:      '📍',
}

interface Props {
  data: CityRoutesData
  cityKey: string
  faqs: FAQItem[]
  pricing?: PricingRoute[]
}

export default function RoutesPage({ data, cityKey, faqs, pricing }: Props) {
  const { lang, isAr } = useLang()
  const tr = t[lang]
  const [activeType, setActiveType] = useState<RouteType | 'all'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const tx = (b: BText) => b[lang]
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"

  const filtered = activeType === 'all'
    ? data.routes
    : data.routes.filter(r => r.type === activeType)

  const typeCounts = ALL_TYPES.reduce((acc, type) => {
    acc[type] = data.routes.filter(r => r.type === type).length
    return acc
  }, {} as Record<RouteType, number>)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `Saudi Cabs GMC — ${data.cityName.en} Routes`,
    'areaServed': data.cityName.en,
    'serviceType': 'Taxi and Private Driver Service',
    'provider': {
      '@type': 'Organization',
      'name': 'Saudi Cabs GMC',
      'telephone': '+966549317712',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `${data.cityName.en} Routes`,
      'itemListElement': data.routes.map((r, i) => ({
        '@type': 'Offer',
        'position': i + 1,
        'name': `${r.from.en} → ${r.to.en}`,
        'description': r.desc.en,
      })),
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0B3D2E 0%, #0F5132 50%, #198754 100%)',
        padding: '110px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,175,55,0.06) 0%, transparent 40%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <Link
              href={`/${cityKey}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem',
                marginBottom: '18px', textDecoration: 'none',
              }}
            >
              ← {isAr ? 'العودة إلى' : 'Back to'} {tx(data.cityName)}
            </Link>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'rgba(212,175,55,0.18)', border: '1px solid rgba(212,175,55,0.50)',
              color: 'var(--primary)', padding: '5px 18px', borderRadius: '50px',
              fontSize: '0.82rem', fontWeight: '700', marginBottom: '20px',
            }}>
              {isAr ? 'جميع الخطوط والرحلات' : 'All Routes & Trips'}
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: '900', lineHeight: 1.2, marginBottom: '14px' }}>
              {isAr ? 'خطوط النقل في' : 'Transportation Routes in'}{' '}
              <span style={{ color: 'var(--primary)' }}>{tx(data.cityName)}</span>
            </h1>

            <p style={{ fontSize: '0.9rem', opacity: 0.8, maxWidth: '580px', margin: '0 auto 36px', lineHeight: 1.8 }}>
              {tx(data.heroDesc)}
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap',
            }}>
              {[
                { n: data.routes.length, label: isAr ? 'خط متاح' : 'Routes Available' },
                { n: '24/7', label: isAr ? 'خدمة متواصلة' : 'Always Available' },
                { n: '100%', label: isAr ? 'سعر ثابت' : 'Fixed Price' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '14px', padding: '16px 28px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--primary)' }}>{s.n}</div>
                  <div style={{ fontSize: '0.78rem', opacity: 0.8, marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter + Routes ────────────────────────────────────── */}
      <section style={{ padding: '70px 0', background: 'var(--background)' }}>
        <div className="container">

          {/* Filter tabs */}
          <div style={{
            display: 'flex', gap: '10px', flexWrap: 'wrap',
            justifyContent: 'center', marginBottom: '44px',
          }}>
            {(['all', ...ALL_TYPES] as (RouteType | 'all')[]).map(type => {
              const isActive = activeType === type
              const label = type === 'all'
                ? (isAr ? `الكل (${data.routes.length})` : `All (${data.routes.length})`)
                : `${typeIcons[type]} ${tx(routeTypeLabel[type])} (${typeCounts[type]})`
              return (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  style={{
                    padding: '8px 18px', borderRadius: '50px',
                    border: isActive ? '2px solid var(--primary)' : '2px solid var(--border)',
                    background: isActive ? 'var(--primary)' : 'var(--card)',
                    color: isActive ? 'white' : 'var(--foreground)',
                    fontWeight: '700', fontSize: '0.82rem', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* Route cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '22px',
          }}>
            {filtered.map((route, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  borderTop: `4px solid ${routeTypeColor[route.type]}`,
                }}
              >
                <div style={{ padding: '22px 22px 18px' }}>
                  {/* Type + Duration row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{
                      background: routeTypeColor[route.type] + '18',
                      color: routeTypeColor[route.type],
                      border: `1px solid ${routeTypeColor[route.type]}40`,
                      padding: '3px 11px', borderRadius: '50px',
                      fontSize: '0.74rem', fontWeight: '800',
                    }}>
                      {typeIcons[route.type]} {tx(routeTypeLabel[route.type])}
                    </span>
                    <span style={{
                      display: 'flex', alignItems: 'center', gap: '5px',
                      background: 'rgba(212,175,55,0.12)',
                      color: 'var(--primary)', padding: '4px 12px',
                      borderRadius: '50px', fontSize: '0.78rem', fontWeight: '800',
                    }}>
                      <Clock size={13} strokeWidth={2.5} />
                      {route.duration}
                    </span>
                  </div>

                  {/* Route */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    marginBottom: '10px', flexDirection: isAr ? 'row-reverse' : 'row',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted-foreground)', marginBottom: '2px' }}>
                        {isAr ? 'من' : 'From'}
                      </div>
                      <div style={{ fontWeight: '800', fontSize: '0.88rem', color: 'var(--foreground)', lineHeight: 1.3 }}>
                        {tx(route.from)}
                      </div>
                    </div>
                    <ArrowRight
                      size={18} color="var(--primary)" strokeWidth={2.5}
                      style={{ flexShrink: 0, transform: isAr ? 'rotate(180deg)' : 'none' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted-foreground)', marginBottom: '2px' }}>
                        {isAr ? 'إلى' : 'To'}
                      </div>
                      <div style={{ fontWeight: '800', fontSize: '0.88rem', color: 'var(--foreground)', lineHeight: 1.3 }}>
                        {tx(route.to)}
                      </div>
                    </div>
                  </div>

                  {/* Distance */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    fontSize: '0.78rem', color: 'var(--muted-foreground)', marginBottom: '12px',
                  }}>
                    <MapPin size={13} strokeWidth={2} />
                    {route.distance}
                  </div>

                  {/* Desc */}
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {tx(route.desc)}
                  </p>

                  {/* Features */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
                    {[
                      isAr ? 'سعر ثابت' : 'Fixed Price',
                      isAr ? 'مكيف' : 'Air-Conditioned',
                      isAr ? 'سائق محترف' : 'Pro Driver',
                    ].map(f => (
                      <span key={f} style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        fontSize: '0.72rem', color: '#16a34a', fontWeight: '700',
                      }}>
                        <CheckCircle size={12} strokeWidth={2.5} />
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/966549317712?text=${encodeURIComponent(
                      isAr
                        ? `السلام عليكم، أريد حجز رحلة من ${tx(route.from)} إلى ${tx(route.to)}`
                        : `Hello, I'd like to book a trip from ${tx(route.from)} to ${tx(route.to)}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      background: '#25D366', color: 'white',
                      padding: '11px 0', borderRadius: '10px',
                      fontWeight: '800', fontSize: '0.82rem', textDecoration: 'none',
                      width: '100%',
                    }}
                  >
                    <MessageCircle size={16} strokeWidth={2.5} />
                    {isAr ? 'احجز هذه الرحلة' : 'Book This Route'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted-foreground)' }}>
              {isAr ? 'لا توجد رحلات في هذه الفئة.' : 'No routes in this category.'}
            </div>
          )}
        </div>
      </section>

      {/* ── Booking Form ───────────────────────────────────────── */}
      <section style={{ padding: '70px 0', background: 'var(--muted)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            <div>
              <span className="section-tag">{isAr ? 'احجز الآن' : 'Book Now'}</span>
              <h2 className="section-title" style={{ marginTop: '12px', textAlign: isAr ? 'right' : 'left' }}>
                {isAr ? `سافر من وإلى ${tx(data.cityName)}` : `Travel To & From ${tx(data.cityName)}`}
              </h2>
              <div className="gold-divider" style={{ margin: '14px 0 20px' }} />
              <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
                {isAr
                  ? 'احجز رحلتك الآن بسعر ثابت — بدون عداد ولا مفاجآت. سائق في الوقت المحدد وسيارة مريحة.'
                  : 'Book your trip now at a fixed price — no meter, no surprises. On-time driver and a comfortable vehicle.'}
              </p>
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  isAr ? 'سعر ثابت مسبق — لا عداد' : 'Fixed price upfront — no meter',
                  isAr ? 'سائق في الموعد المحدد دائماً' : 'Driver always on time',
                  isAr ? 'سيارات نظيفة ومكيفة' : 'Clean, air-conditioned vehicles',
                  isAr ? 'دفع بالنقد أو تحويل بنكي' : 'Cash or bank transfer accepted',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle size={17} color="var(--primary)" strokeWidth={2.5} />
                    <span style={{ fontSize: '0.88rem', fontWeight: '600' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <BookingForm defaultFrom={tx(data.cityName)} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────── */}
      {pricing && pricing.length > 0 && (
        <PricingSection
          routes={pricing}
          heading={{
            ar: `أسعار رحلات ${tx(data.cityName)}`,
            en: `${tx(data.cityName)} Trip Rates`,
          }}
        />
      )}

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <FAQSection
        faqs={faqs}
        heading={{
          ar: `أسئلة شائعة حول خطوط ${tx(data.cityName)}`,
          en: `FAQ — ${tx(data.cityName)} Routes`,
        }}
      />

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageCircle size={20} color="var(--primary)" />
                Saudi Cabs GMC
              </div>
              <p className="footer-desc">
                {isAr
                  ? 'خدمة كاب وسائق خاص احترافية في مكة المكرمة والمدينة المنورة وجدة والطائف.'
                  : 'Professional cab and private driver service in Makkah, Madinah, Jeddah & Taif.'}
              </p>
            </div>
            <div>
              <h4 className="footer-heading">{isAr ? 'خطوط المدن' : 'City Routes'}</h4>
              <ul className="footer-links">
                {[
                  { href: '/makkah-taxi-service/routes', label: isAr ? 'خطوط مكة المكرمة' : 'Makkah Routes' },
                  { href: '/madinah-taxi-service/routes', label: isAr ? 'خطوط المدينة المنورة' : 'Madinah Routes' },
                  { href: '/jeddah-taxi-service/routes', label: isAr ? 'خطوط جدة' : 'Jeddah Routes' },
                  { href: '/taif-taxi-service/routes', label: isAr ? 'خطوط الطائف' : 'Taif Routes' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">{isAr ? 'صفحات المدن' : 'City Pages'}</h4>
              <ul className="footer-links">
                {[
                  { href: '/makkah-taxi-service', label: isAr ? 'مكة المكرمة' : 'Makkah' },
                  { href: '/madinah-taxi-service', label: isAr ? 'المدينة المنورة' : 'Madinah' },
                  { href: '/jeddah-taxi-service', label: isAr ? 'جدة' : 'Jeddah' },
                  { href: '/taif-taxi-service', label: isAr ? 'الطائف' : 'Taif' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">{isAr ? 'تواصل معنا' : 'Contact Us'}</h4>
              <div className="footer-contact-item">
                <Phone size={15} color="var(--primary)" strokeWidth={2} />
                <a href="tel:+966549317712" style={{ color: 'inherit' }}>+966 54 931 7712</a>
              </div>
              <div className="footer-contact-item">
                <MessageCircle size={15} color="var(--primary)" strokeWidth={2} />
                <a href="https://wa.me/966549317712" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  WhatsApp
                </a>
              </div>
              <div className="footer-contact-item">
                <Globe size={15} color="var(--primary)" strokeWidth={2} />
                <span>{isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Saudi Cabs GMC. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </main>
  )
}
