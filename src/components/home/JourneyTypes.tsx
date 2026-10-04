'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const SCENES = [
  {
    href: '/airport-transfer',
    image: '/booking/step-3-driver-arrival.webp',
    size: 'large' as const,
    tag: { en: 'Airport → Hotel', ar: 'المطار ← الفندق' },
    title: { en: 'Land, and your driver is already waiting.', ar: 'تهبط، وسائقك بانتظارك بالفعل.' },
    desc: { en: 'Name-board pickup at Jeddah, Madinah or Taif airport, straight to your hotel.', ar: 'استقبال بلوحة اسمك في مطار جدة أو المدينة أو الطائف، مباشرة إلى فندقك.' },
  },
  {
    href: '#cities',
    image: '/location/jeddah.webp',
    size: 'small' as const,
    tag: { en: 'Around the City', ar: 'داخل المدينة' },
    title: { en: 'The city, on your schedule.', ar: 'المدينة، حسب وقتك.' },
    desc: { en: 'Corniche runs, malls, meetings — a car and driver for the day.', ar: 'الكورنيش والمولات والاجتماعات — سيارة وسائق ليومك.' },
  },
  {
    href: '/makkah-ziyarat-tour',
    image: '/hero/makkah-hero-saudi-cabs-gmc.webp',
    size: 'small' as const,
    tag: { en: 'Holy Sites', ar: 'المواقع المقدسة' },
    title: { en: 'Ziyarat, at your own pace.', ar: 'زيارات، على راحتك.' },
    desc: { en: 'A private driver for Jabal Al-Nour, Jabal Thawr, and the sites of Makkah.', ar: 'سائق خاص لجبل النور وجبل ثور ومواقع مكة.' },
  },
  {
    href: '#pricing',
    image: '/location/taif.webp',
    size: 'wide' as const,
    tag: { en: 'Intercity', ar: 'بين المدن' },
    title: { en: 'One road, four cities.', ar: 'طريق واحد، أربع مدن.' },
    desc: { en: 'Makkah, Madinah, Jeddah and Taif — direct, door-to-door, fixed price.', ar: 'مكة والمدينة وجدة والطائف — مباشرة من الباب إلى الباب وبسعر ثابت.' },
  },
  {
    href: '/private-driver',
    image: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp',
    size: 'small' as const,
    tag: { en: 'Private Events', ar: 'مناسبات خاصة' },
    title: { en: 'A driver, dedicated to you.', ar: 'سائق مخصص لك.' },
    desc: { en: 'Half-day, full-day or multi-day hire for business or occasions.', ar: 'استئجار نصف يوم أو يوم كامل أو عدة أيام للأعمال والمناسبات.' },
  },
]

export default function JourneyTypes() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()

  return (
    <section className="page-section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{isAr ? 'رحلاتنا' : 'Journeys'}</span>
          <h2 className="section-title">
            {isAr ? <>رحلة واحدة قد تكون بداية <span style={{ color: 'var(--primary)' }}>رحلات كثيرة.</span></> : <>One ride can be the start of <span style={{ color: 'var(--primary)' }}>many journeys.</span></>}
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="journey-scenes-grid">
          {SCENES.map((s, i) => (
            <motion.div
              key={s.href}
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className={`journey-scene journey-scene-${s.size}`}
            >
              <Link href={s.href} style={{ display: 'block', position: 'relative', height: '100%', borderRadius: '18px', overflow: 'hidden' }}>
                <img
                  src={s.image}
                  alt={isAr ? s.title.ar : s.title.en}
                  loading="lazy"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.href === '/makkah-ziyarat-tour' ? 'center 78%' : 'center', transition: 'transform 0.5s ease' }}
                  className="journey-scene-img"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(7,23,16,0.92) 0%, rgba(7,23,16,0.45) 45%, rgba(7,23,16,0.05) 75%)' }} />
                <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '22px' }}>
                  <span style={{
                    display: 'inline-block', alignSelf: 'flex-start',
                    background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)',
                    color: 'var(--primary)', padding: '3px 12px', borderRadius: '50px',
                    fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.04em', marginBottom: '10px',
                  }}>
                    {isAr ? s.tag.ar : s.tag.en}
                  </span>
                  <h3 style={{ color: 'white', fontWeight: '800', fontSize: s.size === 'large' ? '1.3rem' : '1.02rem', lineHeight: 1.3, marginBottom: '6px' }}>
                    {isAr ? s.title.ar : s.title.en}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.84rem', lineHeight: 1.6, margin: 0, maxWidth: '420px' }}>
                    {isAr ? s.desc.ar : s.desc.en}
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem', marginTop: '12px' }}>
                    {isAr ? 'اعرف المزيد' : 'Learn more'}
                    <ArrowRight size={14} style={{ transform: isAr ? 'scaleX(-1)' : undefined }} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
