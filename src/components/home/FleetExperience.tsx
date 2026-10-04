'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { allPricingRoutes, vehicleImages, type PricingRoute } from '@/lib/pricingData'

type VKey = 'sedan' | 'staria' | 'gmc'

const VEHICLES: Record<VKey, {
  nameEn: string; nameAr: string
  seats: string
  image: string
  page: string
  use: { en: string; ar: string }
}> = {
  sedan: {
    nameEn: 'Sedan', nameAr: 'سيدان',
    seats: '4', image: vehicleImages.sedan, page: '/toyota-camry-taxi',
    use: { en: 'Suits individuals, couples and smaller trips.', ar: 'يناسب الأفراد والأزواج والرحلات الصغيرة.' },
  },
  staria: {
    nameEn: 'Hyundai Staria', nameAr: 'هيونداي ستاريا',
    seats: '7', image: vehicleImages.staria, page: '/hyundai-staria-taxi',
    use: { en: 'Suits families and groups who need extra passenger and luggage space.', ar: 'يناسب العائلات والمجموعات التي تحتاج مساحة إضافية للركاب والأمتعة.' },
  },
  gmc: {
    nameEn: 'GMC Yukon', nameAr: 'GMC يوكون',
    seats: '7', image: vehicleImages.gmc, page: '/gmc-yukon-hire',
    use: { en: 'Our VIP option for private travel.', ar: 'خيارنا VIP للتنقل الخاص.' },
  },
}

const ORDER: VKey[] = ['sedan', 'staria', 'gmc']

function pricesFor(key: VKey): { route: PricingRoute; price: number }[] {
  return allPricingRoutes
    .filter(r => r.rates.some(rt => rt.key === key))
    .slice(0, 4)
    .map(r => ({ route: r, price: r.rates.find(rt => rt.key === key)!.price }))
}

export default function FleetExperience() {
  const { isAr, lang } = useLang()
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState<VKey>('staria')
  const v = VEHICLES[active]
  const prices = pricesFor(active)

  const waMsg = isAr
    ? `السلام عليكم، أرغب في حجز ${v.nameAr}`
    : `Hello, I'd like to book a ${v.nameEn}`
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(waMsg)}`

  return (
    <section className="page-section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{isAr ? 'أسطولنا' : 'Our Fleet'}</span>
          <h2 className="section-title">
            {isAr ? <>اختر السيارة التي تناسب <span style={{ color: 'var(--primary)' }}>رحلتك.</span></> : <>Choose the vehicle that fits <span style={{ color: 'var(--primary)' }}>your journey.</span></>}
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="fleet-exp-tabs" role="tablist" aria-label={isAr ? 'اختر السيارة' : 'Choose vehicle'}>
          {ORDER.map(key => (
            <button
              key={key}
              type="button"
              role="tab"
              className="fleet-exp-tab"
              aria-pressed={active === key}
              aria-selected={active === key}
              onClick={() => setActive(key)}
            >
              {isAr ? VEHICLES[key].nameAr : VEHICLES[key].nameEn} · {VEHICLES[key].seats} {isAr ? 'مقاعد' : 'seats'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fleet-exp-grid"
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden', height: '340px', boxShadow: 'var(--shadow-md)', background: '#111' }}>
              {v.image
                ? <img src={v.image} alt={`${v.nameEn} – Saudi Cabs GMC`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>{v.nameEn}</div>}
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '900', marginBottom: '4px' }}>{isAr ? v.nameAr : v.nameEn}</h3>
              <p style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '14px' }}>
                {v.seats} {isAr ? 'مقاعد' : 'Seats'}
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '22px' }}>
                {isAr ? v.use.ar : v.use.en}
              </p>

              <div style={{ marginBottom: '22px' }}>
                {prices.map(({ route, price }) => (
                  <div key={route.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--border)', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--muted-foreground)' }}>
                      {(isAr ? route.from.ar : route.from.en) && `${isAr ? route.from.ar : route.from.en} → `}
                      {isAr ? route.to.ar : route.to.en}
                    </span>
                    <span style={{ fontWeight: '800', color: 'var(--primary)' }}>{price} SAR</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle size={16} strokeWidth={2.5} />
                  {isAr ? `احجز ${v.nameAr}` : `Book ${v.nameEn}`}
                </a>
                <Link href={v.page} className="btn-outline" style={{ color: 'var(--foreground)', border: '2px solid var(--border)' }}>
                  {isAr ? 'التفاصيل الكاملة' : 'Full details'}
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
