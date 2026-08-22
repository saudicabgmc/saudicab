'use client'
import Image from 'next/image'
import { useLang } from '@/contexts/LanguageContext'

interface Badge {
  src: string
  alt: { en: string; ar: string }
  title: { en: string; ar: string }
}

const BADGES: Badge[] = [
  {
    src: '/trust-badges/trust-badge-sar-no-hidden-costs.webp',
    alt: {
      en: 'No hidden costs – fixed SAR price guaranteed before every trip',
      ar: 'لا رسوم خفية – سعر ثابت بالريال السعودي مضمون قبل كل رحلة',
    },
    title: {
      en: 'No Hidden Costs',
      ar: 'لا رسوم خفية',
    },
  },
  {
    src: '/trust-badges/trust-badge-247-always-available.webp',
    alt: {
      en: '24/7 availability – Saudi Cabs GMC taxi service always on, day and night',
      ar: 'متاح 24/7 – خدمة تاكسي Saudi Cabs GMC على مدار الساعة',
    },
    title: {
      en: '24/7 Always Available',
      ar: 'متاح على مدار الساعة',
    },
  },
  {
    src: '/trust-badges/trust-badge-premium-vip-fleet.webp',
    alt: {
      en: 'Premium VIP fleet – GMC Yukon luxury taxi Saudi Arabia',
      ar: 'أسطول VIP فاخر – تاكسي GMC يوكون الفاخر في المملكة العربية السعودية',
    },
    title: {
      en: 'Premium VIP Fleet',
      ar: 'أسطول VIP الفاخر',
    },
  },
  {
    src: '/trust-badges/trust-badge-staria-yukon-specifications.webp',
    alt: {
      en: 'Hyundai Staria and GMC Yukon premium vehicle specifications – Saudi Cabs GMC',
      ar: 'مواصفات هيونداي ستاريا وGMC يوكون الفاخرة – Saudi Cabs GMC',
    },
    title: {
      en: 'Staria & Yukon Specifications',
      ar: 'مواصفات ستاريا ويوكون',
    },
  },
  {
    src: '/trust-badges/trust-badge-instant-whatsapp-booking.webp',
    alt: {
      en: 'Instant WhatsApp booking – book your taxi in Saudi Arabia in seconds',
      ar: 'حجز فوري عبر واتساب – احجز تاكسيك في السعودية في ثوانٍ',
    },
    title: {
      en: 'Instant WhatsApp Booking',
      ar: 'حجز فوري عبر واتساب',
    },
  },
]

export default function TrustBadges() {
  const { lang, isAr } = useLang()

  return (
    <section
      aria-label={isAr ? 'شارات الثقة والجودة' : 'Trust & Quality Badges'}
      style={{ padding: '64px 0 56px', backgroundColor: 'var(--muted)' }}
    >
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-tag">
            {isAr ? 'لماذا تثق بنا' : 'Why Trust Us'}
          </span>
          <h2 className="section-title">
            {isAr
              ? <><span style={{ color: 'var(--primary)' }}>ضمانات الجودة</span> في كل رحلة</>
              : <>Quality <span style={{ color: 'var(--primary)' }}>Guarantees</span> Every Ride</>
            }
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {isAr
              ? 'كل رحلة مع Saudi Cabs GMC مدعومة بهذه المعايير التي لا نتنازل عنها'
              : 'Every trip with Saudi Cabs GMC is backed by these non-negotiable standards'
            }
          </p>
        </div>

        <ul
          role="list"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '28px 20px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {BADGES.map((badge) => (
            <li
              key={badge.src}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'center',
              }}
            >
              <Image
                src={badge.src}
                alt={badge.alt[lang]}
                title={badge.title[lang]}
                width={110}
                height={110}
                loading="lazy"
                style={{
                  width: '110px',
                  height: '110px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.18))',
                  transition: 'transform 0.25s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  color: 'var(--foreground)',
                  lineHeight: '1.35',
                  maxWidth: '120px',
                }}
              >
                {badge.title[lang]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
