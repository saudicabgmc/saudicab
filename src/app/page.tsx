'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Car, Plane, Briefcase, Navigation,
  Star, MapPin,
  Shield, Zap, Banknote, Phone,
  MessageCircle, Clock, CheckCircle,
} from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import TrustBadges from '@/components/TrustBadges'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FAQSection from '@/components/FAQSection'
import PricingSection from '@/components/PricingSection'
import FleetSection from '@/components/FleetSection'
import { homeFaqs } from '@/lib/faqData'
import { allPricingRoutes } from '@/lib/pricingData'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

const locationSlugs = ['makkah-taxi-service', 'madinah-taxi-service', 'jeddah-taxi-service', 'taif-taxi-service']
const locationImages = [
  '/location/makkah.webp',
  '/location/madinah.webp',
  '/location/jeddah.webp',
  '/location/taif.webp',
]
const locationNames = {
  en: ['Makkah', 'Madinah', 'Jeddah', 'Taif'],
  ar: ['مكة المكرمة', 'المدينة المنورة', 'جدة', 'الطائف'],
}

const serviceIcons = [Car, Navigation, Briefcase, Plane]
const whyIcons = [Shield, Zap, Banknote, Phone]

/* Key routes shown in the HTML price table */
const PRICE_TABLE_ROUTES = [
  { en: 'Jeddah Airport → Makkah', ar: 'مطار جدة ← مكة', sedan: 330, staria: 380, gmc: 530 },
  { en: 'Makkah → Jeddah Airport', ar: 'مكة ← مطار جدة', sedan: 305, staria: 355, gmc: 530 },
  { en: 'Jeddah Airport → Madinah', ar: 'مطار جدة ← المدينة', sedan: 505, staria: 555, gmc: 1030 },
  { en: 'Madinah Airport → Hotel', ar: 'مطار المدينة ← الفندق', sedan: 230, staria: 260, gmc: 380 },
  { en: 'Makkah → Madinah', ar: 'مكة ← المدينة', sedan: 350, staria: 400, gmc: 680 },
  { en: 'Makkah Ziyarat Tour', ar: 'جولة زيارات مكة', sedan: 250, staria: 320, gmc: 500 },
]

export default function Home() {
  const { lang, isAr } = useLang()
  const tr = t[lang]
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(waText)}`
  const [videoReady, setVideoReady] = useState(false)
  useEffect(() => { setVideoReady(true) }, [])

  return (
    <main>

      {/* ──────────────────────────────────────────────────────────
          STICKY BOOKING CTA BAR (mobile & desktop)
      ────────────────────────────────────────────────────────── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        zIndex: 900,
        background: 'linear-gradient(135deg, #0B3D2E, #0F5132)',
        padding: '10px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.22)',
        gap: '12px',
      }}>
        <div style={{ color: 'white', flex: 1 }}>
          <div style={{ fontSize: '0.78rem', opacity: 0.75, lineHeight: 1 }}>
            {isAr ? 'متاح الآن ٢٤/٧' : '24/7 Available Now'}
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1.2, marginTop: '2px' }}>
            {isAr ? 'احجز رحلتك الآن' : 'Book Your Trip Now'}
          </div>
        </div>
        <a
          href={waUrl}
          target="_blank" rel="noopener noreferrer"
          style={{
            background: '#25D366', color: 'white',
            padding: '10px 22px', borderRadius: '10px',
            fontWeight: '800', fontSize: '0.88rem',
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            whiteSpace: 'nowrap', flexShrink: 0,
            boxShadow: '0 4px 14px rgba(37,211,102,0.4)',
            textDecoration: 'none',
          }}
        >
          <MessageCircle size={16} strokeWidth={2.5} />
          {isAr ? 'واتساب' : 'WhatsApp'}
        </a>
        <a
          href="https://wa.me/923097811785"
          style={{
            background: 'rgba(255,255,255,0.14)', color: 'white',
            border: '1.5px solid rgba(255,255,255,0.4)',
            padding: '10px 18px', borderRadius: '10px',
            fontWeight: '800', fontSize: '0.88rem',
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            whiteSpace: 'nowrap', flexShrink: 0,
            textDecoration: 'none',
          }}
        >
          <Phone size={15} strokeWidth={2.5} />
          {isAr ? 'اتصل' : 'Call'}
        </a>
      </div>

      {/* ──────────────────────────────────────────────────────────
          HERO — video bg + strong headline + form (no clutter)
      ────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0 80px',
      }}>
        {/* Desktop: YouTube background video — mounted after first paint so the
            heavy third-party embed doesn't compete with initial page load */}
        {videoReady && (
          <iframe
            className="hero-video-bg"
            src="https://www.youtube.com/embed/ICQZ4zxqIVg?autoplay=1&mute=1&loop=1&playlist=ICQZ4zxqIVg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&cc_load_policy=0&fs=0"
            style={{
              position: 'absolute', top: '50%', left: '50%',
              width: 'calc(177.78vh + 200px)', minWidth: 'calc(100% + 200px)',
              height: 'calc(56.25vw + 120px)', minHeight: 'calc(100% + 120px)',
              transform: 'translate(-50%, -50%)',
              border: 'none', pointerEvents: 'none', zIndex: 0,
            }}
            allow="autoplay; encrypted-media"
          />
        )}
        {/* Mobile: fallback image */}
        <div
          className="hero-img-bg"
          style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: 'url("/hero/hero-fallback-saudi-cabs-gmc.webp")',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />
        {/* Stronger dark overlay for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 100%)',
          zIndex: 2,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="hero-grid">

            {/* Left — headline + stats */}
            <div className="animate-fadeInUp" style={{ color: 'white' }}>

              {/* Trust pill — immediately establishes credibility */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                backgroundColor: 'rgba(212,175,55,0.18)', border: '1px solid rgba(212,175,55,0.55)',
                color: 'var(--primary)', padding: '6px 18px', borderRadius: '50px',
                fontSize: '0.84rem', fontWeight: '700', marginBottom: '20px',
              }}>
                <Star size={13} fill="var(--primary)" strokeWidth={0} />
                {tr.hero.badge}
              </div>

              {/* PRIMARY H1 — large, scannable, value prop in first 3 words */}
              <h1 className="hero-h1">
                {isAr ? (
                  <>
                    <span style={{ color: 'var(--primary)' }}>تاكسي فاخر</span><br />
                    مكة • مدينة • جدة • طائف
                  </>
                ) : (
                  <>
                    <span style={{ color: 'var(--primary)' }}>Premium Taxi</span><br />
                    Makkah · Madinah · Jeddah · Taif
                  </>
                )}
              </h1>

              {/* Supporting value prop — tight, benefit-focused */}
              <p style={{
                fontSize: '1.05rem', opacity: 0.88,
                marginBottom: '10px', lineHeight: '1.65', maxWidth: '460px',
                fontWeight: '600',
              }}>
                {isAr
                  ? 'سيدان • ستاريا • GMC يوكون — سعر ثابت، لا رسوم خفية'
                  : 'Sedan · Staria · GMC Yukon — Fixed price, no hidden fees'}
              </p>

              {/* Quick trust micro-row */}
              <div style={{
                display: 'flex', gap: '18px', flexWrap: 'wrap',
                marginBottom: '32px',
              }}>
                {(isAr
                  ? ['✅ رد فوري', '🔒 بدون دفع مسبق', '⏰ ٢٤/٧']
                  : ['✅ Instant reply', '🔒 No advance pay', '⏰ 24/7']
                ).map(s => (
                  <span key={s} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)', fontWeight: '600' }}>{s}</span>
                ))}
              </div>

              {/* Primary CTA — single dominant action */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                  style={{
                    background: '#25D366', color: 'white',
                    padding: '14px 32px', borderRadius: 'var(--radius)',
                    fontWeight: '800', fontSize: '1rem',
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    boxShadow: '0 6px 20px rgba(37,211,102,0.4)',
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={18} strokeWidth={2.5} />
                  {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
                </a>
                <a href="#booking-form" className="btn-outline">
                  <Car size={16} strokeWidth={2.5} />
                  {isAr ? 'أدخل تفاصيل رحلتك' : 'Enter Trip Details'}
                </a>
              </div>

              {/* Stats strip */}
              <div style={{
                display: 'flex', gap: '28px', marginTop: '40px',
                paddingTop: '22px', borderTop: '1px solid rgba(255,255,255,0.18)',
                flexWrap: 'wrap',
              }}>
                {[
                  { n: isAr ? '+١٢٠٠٠' : '+12K', l: tr.hero.trips },
                  { n: isAr ? '٤' : '4', l: tr.hero.cities },
                  { n: '24/7', l: tr.hero.available },
                  { n: isAr ? '٥★' : '5★', l: isAr ? 'تقييم جوجل' : 'Google Rating' },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ fontSize: '1.55rem', fontWeight: '900', color: 'var(--primary)', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: '0.78rem', opacity: 0.65, marginTop: '3px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — booking form */}
            <div id="booking-form" className="animate-fadeInUp animate-delay-1">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          TRUST STRIP — immediately after hero fold
      ────────────────────────────────────────────────────────── */}
      <div style={{
        background: 'var(--foreground)', color: 'white',
        padding: '18px 0',
        borderBottom: '3px solid var(--primary)',
      }}>
        <div className="container">
          <div style={{
            display: 'flex', gap: '0', flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {(isAr
              ? ['⭐ تقييم 5 نجوم على جوجل', '✅ +١٢٠٠٠ رحلة ناجحة', '🔒 سعر ثابت مضمون', '🚗 أسطول GMC وستاريا', '⏰ متاح ٢٤ ساعة / ٧ أيام']
              : ['⭐ Google 5-Star Rated', '✅ 12,000+ Trips Completed', '🔒 Guaranteed Fixed Price', '🚗 GMC Yukon & Staria Fleet', '⏰ Available 24/7']
            ).map((item, i, arr) => (
              <div key={item} style={{
                padding: '4px 20px',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                fontSize: '0.82rem', fontWeight: '700',
                whiteSpace: 'nowrap',
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SERVICES — 4 cards
      ────────────────────────────────────────────────────────── */}
      <section className="page-section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.services.tag}</span>
            <h2 className="section-title">{tr.services.title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{tr.services.subtitle}</p>
          </div>
          <div className="grid-4">
            {tr.services.items.map((s, i) => {
              const Icon = serviceIcons[i]
              return (
                <div key={s.title} className="service-card">
                  <div className="service-icon"><Icon size={28} strokeWidth={1.8} /></div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: '1.65' }}>{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          STATS BAR
      ────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '56px 0',
        backgroundImage: 'linear-gradient(135deg, #0B3D2E 0%, #0F5132 100%)',
        color: 'white',
      }}>
        <div className="container">
          <div className="grid-4">
            {tr.stats.map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.num}</div>
                <div className="stat-label" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          LOCATIONS — 4 cities
      ────────────────────────────────────────────────────────── */}
      <section id="locations" className="page-section" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.locations.tag}</span>
            <h2 className="section-title">{tr.locations.title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{tr.locations.subtitle}</p>
          </div>
          <div className="grid-4">
            {locationSlugs.map((slug, i) => (
              <Link key={slug} href={`/${slug}`} className="location-card">
                <img
                  src={locationImages[i]}
                  alt={`Taxi Service in ${locationNames['en'][i]} – Saudi Cabs GMC`}
                  loading="lazy"
                  width={600} height={400}
                />
                <div style={{
                  position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #0B3D2E, #0F5132)', color: 'white',
                  padding: '9px 22px', borderRadius: '50px',
                  fontWeight: '700', fontSize: '0.85rem',
                  whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(11,61,46,0.5)',
                }}>
                  {locationNames[lang][i]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          HOW IT WORKS — 3 steps (section break before fleet)
      ────────────────────────────────────────────────────────── */}
      <section className="page-section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.howItWorks.tag}</span>
            <h2 className="section-title">{tr.howItWorks.title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{tr.howItWorks.subtitle}</p>
          </div>
          <div className="grid-3">
            {[
              { img: '/booking/step-1-book-whatsapp.webp', alt: 'Book Taxi via WhatsApp in Makkah, Madinah, Jeddah & Taif – Saudi Cabs GMC' },
              { img: '/booking/step-2-confirmation.webp',  alt: 'Instant Taxi Price Confirmation in Saudi Arabia – Saudi Cabs GMC Booking' },
              { img: '/booking/step-3-driver-arrival.webp', alt: 'Airport Pickup & Professional Driver Arrival in Saudi Arabia – Saudi Cabs GMC' },
            ].map((imgData, i) => {
              const step = tr.howItWorks.steps[i]
              const StepIcon = [MessageCircle, CheckCircle, Car][i]
              return (
                <div key={step.title} className="step-card" style={{ padding: 0, overflow: 'hidden', borderRadius: '16px', border: '1.5px solid var(--border)' }}>
                  <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={imgData.img}
                      alt={imgData.alt}
                      loading="lazy"
                      width={400} height={200}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
                    <div style={{
                      position: 'absolute', top: '12px', left: isAr ? 'auto' : '12px', right: isAr ? '12px' : 'auto',
                      background: 'linear-gradient(135deg, #0B3D2E, #0F5132)', color: 'white',
                      width: '32px', height: '32px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: '900', fontSize: '0.9rem', boxShadow: '0 4px 12px rgba(11,61,46,0.5)',
                    }}>
                      {isAr ? ['١','٢','٣'][i] : String(i + 1)}
                    </div>
                  </div>
                  <div style={{ padding: '18px 20px 22px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '38px', height: '38px', background: 'var(--primary-light)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <StepIcon size={18} color="var(--primary)" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: '800', marginBottom: '6px' }}>{step.title}</h3>
                      <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: '1.65', margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 38px' }}>
              <MessageCircle size={18} strokeWidth={2.5} />
              {tr.howItWorks.startBtn}
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          FLEET — 3 cars with prices (most conversion-critical)
      ────────────────────────────────────────────────────────── */}
      <FleetSection pricing={allPricingRoutes} />

      {/* ──────────────────────────────────────────────────────────
          PRICE TABLE — HTML (SEO-friendly, no image)
      ────────────────────────────────────────────────────────── */}
      <section className="page-section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'قائمة الأسعار' : 'Price List'}</span>
            <h2 className="section-title">
              {isAr
                ? <><span style={{ color: 'var(--primary)' }}>أسعار ثابتة وشفافة</span> — بدون رسوم خفية</>
                : <>Fixed & Transparent <span style={{ color: 'var(--primary)' }}>Pricing</span> — No Hidden Fees</>
              }
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              {isAr
                ? 'مطار جدة • مطار المدينة • زيارات مكة والمدينة — سيدان • ستاريا • GMC يوكون'
                : 'Jeddah Airport • Madinah Airport • Makkah & Madinah Ziyarat — Sedan • Staria • GMC Yukon'}
            </p>
          </div>

          {/* HTML price table */}
          <div style={{ overflowX: 'auto', borderRadius: '16px', boxShadow: 'var(--shadow-md)', border: '1.5px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', minWidth: '520px' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0B3D2E, #0F5132)', color: 'white' }}>
                  <th style={{ padding: '14px 18px', textAlign: isAr ? 'right' : 'left', fontWeight: '800', fontSize: '0.84rem' }}>
                    {isAr ? 'المسار' : 'Route'}
                  </th>
                  {[
                    { en: 'Sedan', ar: 'سيدان', sub: isAr ? '٤ مقاعد' : '4 Seats' },
                    { en: 'Staria', ar: 'ستاريا', sub: isAr ? '٧ مقاعد' : '7 Seats' },
                    { en: 'GMC Yukon', ar: 'GMC يوكون', sub: 'VIP' },
                  ].map(v => (
                    <th key={v.en} style={{ padding: '14px 18px', textAlign: 'center', fontWeight: '800', fontSize: '0.84rem', minWidth: '110px' }}>
                      <div>{isAr ? v.ar : v.en}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: '600', marginTop: '2px' }}>{v.sub}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICE_TABLE_ROUTES.map((row, i) => (
                  <tr key={row.en} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)', transition: 'background 0.15s' }}>
                    <td style={{ padding: '13px 18px', fontWeight: '700', color: 'var(--foreground)' }}>
                      {isAr ? row.ar : row.en}
                    </td>
                    {[row.sedan, row.staria, row.gmc].map((price, pi) => (
                      <td key={pi} style={{ padding: '13px 18px', textAlign: 'center' }}>
                        <span style={{ fontWeight: '900', fontSize: '1rem', color: 'var(--primary)' }}>{price}</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--muted-foreground)', marginInlineStart: '4px' }}>SAR</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <a
              href={`https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أريد الاستفسار عن الأسعار' : "Hello, I'd like to inquire about pricing")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '14px 36px' }}
            >
              <MessageCircle size={17} strokeWidth={2.5} />
              {isAr ? 'احجز بهذه الأسعار الآن' : 'Book at These Prices Now'}
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          WHY US — two-col with features + image badge
      ────────────────────────────────────────────────────────── */}
      <section className="page-section" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="section-tag">{tr.whyUs.tag}</span>
              <h2 className="section-title" style={{ marginTop: '14px', textAlign: isAr ? 'right' : 'left' }}>
                {tr.whyUs.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
              </h2>
              <div className="gold-divider" style={{ marginTop: '16px', marginRight: 0, marginBottom: '16px', marginLeft: 0 }} />
              {tr.whyUs.items.map((f, i) => {
                const Icon = whyIcons[i]
                return (
                  <div key={f.title} className="feature-item">
                    <div className="feature-icon"><Icon size={20} strokeWidth={1.8} /></div>
                    <div>
                      <h4 style={{ fontWeight: '700', marginBottom: '4px', fontSize: '0.98rem' }}>{f.title}</h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{f.desc}</p>
                    </div>
                  </div>
                )
              })}
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '8px' }}>
                <MessageCircle size={16} strokeWidth={2.5} />
                {isAr ? 'احجز الآن' : 'Book Now'}
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '460px', boxShadow: 'var(--shadow-lg)' }}>
                <img
                  src="/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp"
                  alt="Saudi Cabs GMC Premium Fleet – Best Cab Service in Saudi Arabia"
                  width={700} height={460}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="why-us-badge">
                <div style={{ fontSize: '1.9rem', fontWeight: '900', lineHeight: 1 }}>{isAr ? '+١٢٠٠٠' : '+12K'}</div>
                <div style={{ fontSize: '0.82rem', marginTop: '4px' }}>{tr.whyUs.successBadge}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          DRIVER / CHAUFFEUR VIDEO SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="page-section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="section-tag">{isAr ? 'سائقونا المحترفون' : 'Professional Chauffeur Service'}</span>
              <h2 className="section-title" style={{ marginTop: '14px', textAlign: isAr ? 'right' : 'left' }}>
                {isAr
                  ? <><span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> — معيار الاحترافية في الشوفير</>
                  : <><span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> — Certified Chauffeurs</>
                }
              </h2>
              <div className="gold-divider" style={{ margin: '16px 0', marginRight: isAr ? 'auto' : 0, marginLeft: 0 }} />
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '20px' }}>
                {isAr
                  ? 'سائقو Saudi Cabs GMC مدرّبون على أعلى معايير خدمة الشوفير، يرتدون الزي الرسمي، ويقدمون تجربة نقل فاخرة.'
                  : 'Saudi Cabs GMC drivers are trained to the highest chauffeur service standards, dressed in formal attire, delivering a premium transport experience.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {[
                  { icon: '🎓', en: 'Certified & professionally trained', ar: 'مدرّبون ومعتمدون احترافياً' },
                  { icon: '👔', en: 'Formal uniform & impeccable appearance', ar: 'زي رسمي ومظهر لائق' },
                  { icon: '🗣️', en: 'Bilingual — Arabic & English', ar: 'ثنائيو اللغة — عربي وإنجليزي' },
                  { icon: '⭐', en: '5-star rated across Saudi Arabia', ar: 'تقييم 5 نجوم في المملكة' },
                ].map(item => (
                  <div key={item.en} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1rem', width: '22px', textAlign: 'center' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{isAr ? item.ar : item.en}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز سائق خاص' : "Hello, I'd like to book a professional chauffeur")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={16} strokeWidth={2.5} />
                  {isAr ? 'احجز شوفيرك الآن' : 'Book a Chauffeur Now'}
                </a>
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/qKSQuxLLQV0?rel=0&modestbranding=1"
                loading="lazy"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SPECIALIZED SERVICES HUB
      ────────────────────────────────────────────────────────── */}
      <section className="page-section" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isAr ? 'خدماتنا المتخصصة' : 'Specialized Services'}</span>
            <h2 className="section-title">
              {isAr
                ? <>خدمات <span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> المتخصصة</>
                : <><span style={{ color: 'var(--primary)' }}>Saudi Cabs GMC</span> Specialized Services</>
              }
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3">
            {[
              {
                href: '/airport-transfer',
                icon: <Plane size={30} strokeWidth={1.6} color="var(--primary)" />,
                title: { en: 'Airport Transfer', ar: 'توصيل المطار' },
                desc: { en: 'Name-board pickup, flight tracking & fixed prices across all Saudi airports.', ar: 'استقبال بلوحة الاسم، متابعة الرحلة، وسعر ثابت من جميع مطارات المملكة.' },
                bg: 'linear-gradient(135deg,rgba(30,58,138,0.06),rgba(30,58,138,0.02))',
                border: 'rgba(30,58,138,0.15)',
              },
              {
                href: '/hajj-umrah-transport',
                icon: <Navigation size={30} strokeWidth={1.6} color="var(--primary)" />,
                title: { en: 'Hajj & Umrah Transport', ar: 'نقل الحج والعمرة' },
                desc: { en: 'Dedicated pilgrimage transfers between Makkah, Madinah & the holy sites.', ar: 'نقل متخصص للحجاج والمعتمرين بين مكة والمدينة والمشاعر المقدسة.' },
                bg: 'linear-gradient(135deg,rgba(11,61,46,0.06),rgba(11,61,46,0.02))',
                border: 'rgba(11,61,46,0.15)',
              },
              {
                href: '/private-driver',
                icon: <Briefcase size={30} strokeWidth={1.6} color="var(--primary)" />,
                title: { en: 'Private Driver', ar: 'سائق خاص' },
                desc: { en: 'Chauffeur for half-day, full-day or multi-day hire across Saudi Arabia.', ar: 'شوفير لنصف يوم أو يوم كامل أو رحلة متعددة الأيام في المملكة.' },
                bg: 'linear-gradient(135deg,rgba(212,175,55,0.06),rgba(212,175,55,0.02))',
                border: 'rgba(212,175,55,0.2)',
              },
            ].map(s => (
              <Link key={s.href} href={s.href} className="service-hub-card"
                style={{ background: s.bg, border: `1.5px solid ${s.border}` }}
              >
                <div style={{ width: '52px', height: '52px', background: 'rgba(212,175,55,0.12)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--foreground)', margin: '14px 0 8px' }}>{isAr ? s.title.ar : s.title.en}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: '1.65', margin: 0, flex: 1 }}>{isAr ? s.desc.ar : s.desc.en}</p>
                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--primary)', marginTop: '14px', display: 'block' }}>{isAr ? 'اعرف المزيد ←' : 'Learn more →'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          TRUST BADGES
      ────────────────────────────────────────────────────────── */}
      <TrustBadges />

      {/* ──────────────────────────────────────────────────────────
          TESTIMONIALS
      ────────────────────────────────────────────────────────── */}
      <section className="page-section" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{tr.testimonials.tag}</span>
            <h2 className="section-title">{tr.testimonials.title}</h2>
            <div className="gold-divider" />
          </div>
          <ReviewsCarousel reviews={tr.testimonials.items as any} isAr={isAr} />
        </div>
      </section>

      {/* Section accent divider */}
      <div style={{ height: '5px', background: 'linear-gradient(90deg, var(--primary) 0%, #E6C65C 50%, var(--primary) 100%)' }} />

      {/* ──────────────────────────────────────────────────────────
          CTA BANNER — urgency-driven
      ────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '80px 0',
        backgroundImage: 'linear-gradient(135deg, #071f17 0%, #0B3D2E 100%)',
        color: 'white', textAlign: 'center',
      }}>
        <div className="container">
          {/* Urgency badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)',
            color: 'var(--primary)', padding: '5px 16px', borderRadius: '50px',
            fontSize: '0.8rem', fontWeight: '700', marginBottom: '20px',
          }}>
            <Clock size={13} strokeWidth={2.5} />
            {isAr ? '⚡ رد خلال دقائق — نحن متاحون الآن' : '⚡ Reply within minutes — We\'re available now'}
          </div>
          <h2 className="cta-title-lg">{tr.cta.title}</h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', opacity: 0.88, maxWidth: '500px', margin: '0 auto 32px' }}>{tr.cta.subtitle}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={waUrl}
              target="_blank" rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #E6C65C)', color: '#1D1D1B',
                padding: '14px 36px', borderRadius: 'var(--radius)',
                fontWeight: '800', fontSize: '0.95rem',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 6px 24px rgba(212,175,55,0.35)', textDecoration: 'none',
              }}
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              {tr.cta.bookWhatsapp}
            </a>
            <a
              href="https://wa.me/923097811785"
              style={{
                backgroundColor: 'rgba(255,255,255,0.16)', color: 'white',
                border: '2px solid rgba(255,255,255,0.55)',
                padding: '14px 36px', borderRadius: 'var(--radius)',
                fontWeight: '800', fontSize: '0.95rem',
                display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
              }}
            >
              <Phone size={18} strokeWidth={2.5} />
              {tr.cta.callUs}
            </a>
          </div>
          {/* Micro trust row */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap', opacity: 0.7 }}>
            {(isAr
              ? ['✅ لا دفع مسبق', '🔒 سعر ثابت مضمون', '⭐ تقييم 5 نجوم']
              : ['✅ No advance payment', '🔒 Guaranteed fixed price', '⭐ 5-star rated']
            ).map(s => <span key={s} style={{ fontSize: '0.8rem', fontWeight: '600', color: 'rgba(255,255,255,0.85)' }}>{s}</span>)}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          PRICING SECTION (detailed)
      ────────────────────────────────────────────────────────── */}
      <PricingSection routes={allPricingRoutes} />

      {/* ──────────────────────────────────────────────────────────
          FAQ
      ────────────────────────────────────────────────────────── */}
      <FAQSection faqs={homeFaqs} />

      {/* Bottom padding for sticky bar */}
      <div style={{ height: '64px' }} />

    </main>
  )
}
