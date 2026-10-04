'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

type CityKey = 'makkah' | 'madinah' | 'jeddah' | 'taif'

const CITIES: Record<CityKey, {
  name: { en: string; ar: string }
  fact: { en: string; ar: string }
  image: string
  slug: string
  links: { href: string; en: string; ar: string }[]
}> = {
  makkah: {
    name: { en: 'Makkah', ar: 'مكة المكرمة' },
    fact: { en: 'Home to Al-Masjid Al-Haram, the Holy Mosque and the Kaaba.', ar: 'موطن المسجد الحرام والكعبة المشرفة.' },
    image: '/hero/makkah-hero-saudi-cabs-gmc.webp',
    slug: 'makkah-taxi-service',
    links: [
      { href: '/makkah-taxi-service', en: 'Makkah Taxi Service', ar: 'خدمة تاكسي مكة' },
      { href: '/makkah-ziyarat-tour', en: 'Makkah Ziyarat Tour', ar: 'جولة زيارات مكة' },
    ],
  },
  madinah: {
    name: { en: 'Madinah', ar: 'المدينة المنورة' },
    fact: { en: "Home to Masjid an-Nabawi, the Prophet's Mosque.", ar: 'موطن المسجد النبوي الشريف.' },
    image: '/hero/madinah-hero-saudi-cabs-gmc.webp',
    slug: 'madinah-taxi-service',
    links: [
      { href: '/madinah-taxi-service', en: 'Madinah Taxi Service', ar: 'خدمة تاكسي المدينة' },
      { href: '/madinah-ziyarat-tour', en: 'Madinah Ziyarat Tour', ar: 'جولة زيارات المدينة' },
    ],
  },
  jeddah: {
    name: { en: 'Jeddah', ar: 'جدة' },
    fact: { en: 'The Red Sea gateway city — home to King Abdulaziz International Airport.', ar: 'بوابة البحر الأحمر، موطن مطار الملك عبدالعزيز الدولي.' },
    image: '/location/jeddah.webp',
    slug: 'jeddah-taxi-service',
    links: [
      { href: '/jeddah-taxi-service', en: 'Jeddah Taxi Service', ar: 'خدمة تاكسي جدة' },
      { href: '/airport-transfer', en: 'Airport Transfer', ar: 'توصيل المطار' },
    ],
  },
  taif: {
    name: { en: 'Taif', ar: 'الطائف' },
    fact: { en: 'The mountain city above Makkah, known for cooler weather and rose farms.', ar: 'مدينة الجبال فوق مكة، تشتهر بأجوائها الباردة ومزارع الورد.' },
    image: '/location/taif.webp',
    slug: 'taif-taxi-service',
    links: [
      { href: '/taif-taxi-service', en: 'Taif Taxi Service', ar: 'خدمة تاكسي الطائف' },
      { href: '/makkah-to-taif', en: 'Makkah → Taif Route', ar: 'خط مكة ← الطائف' },
    ],
  },
}

const ORDER: CityKey[] = ['makkah', 'madinah', 'jeddah', 'taif']

export default function CityExplorer() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState<CityKey>('makkah')
  const city = CITIES[active]

  return (
    <section id="cities" className="page-section" style={{ backgroundColor: 'var(--muted)', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{isAr ? 'وجهتنا' : 'Destinations'}</span>
          <h2 className="section-title">
            {isAr ? <>إلى أين تأخذك <span style={{ color: 'var(--primary)' }}>رحلتك؟</span></> : <>Where is your journey <span style={{ color: 'var(--primary)' }}>taking you?</span></>}
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Road + stops — an abstracted journey line, not a literal map */}
        <div style={{ position: 'relative', margin: '46px 0 48px' }}>
          <div className="city-road-line" aria-hidden="true" />
          <div className="city-stops">
          {ORDER.map(key => (
            <button
              key={key}
              type="button"
              className="city-stop-btn"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
            >
              <span className="city-stop-dot" />
              <span className="city-stop-label">{isAr ? CITIES[key].name.ar : CITIES[key].name.en}</span>
            </button>
          ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', alignItems: 'center' }}
            className="two-col-grid"
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden', height: '320px', boxShadow: 'var(--shadow-md)' }}>
              <img
                src={city.image}
                alt={isAr ? city.name.ar : city.name.en}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: active === 'makkah' ? 'center 78%' : 'center' }}
                loading="lazy"
              />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>
                {isAr ? city.name.ar : city.name.en}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '22px' }} data-speakable>
                {isAr ? city.fact.ar : city.fact.en}
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {city.links.map(l => (
                  <Link key={l.href} href={l.href} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: 'white', border: '1.5px solid var(--border)',
                    padding: '9px 16px', borderRadius: '10px',
                    fontSize: '0.85rem', fontWeight: '700', color: 'var(--foreground)',
                  }}>
                    {isAr ? l.ar : l.en}
                    <ArrowRight size={14} style={{ transform: isAr ? 'scaleX(-1)' : undefined }} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
