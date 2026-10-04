'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { allPricingRoutes } from '@/lib/pricingData'

const TABLE_IDS = ['jed-makkah', 'makkah-jed', 'jed-madinah', 'mad-hotel', 'makkah-madinah', 'ziyarat-makkah']
const TABLE_ROUTES = allPricingRoutes.filter(r => TABLE_IDS.includes(r.id))

export default function PricingExperience() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()
  const [selectedId, setSelectedId] = useState(allPricingRoutes[0].id)
  const selected = allPricingRoutes.find(r => r.id === selectedId)!

  const routeLabel = (r: typeof selected, lang: 'en' | 'ar') => {
    const from = r.from[lang]
    const to = r.to[lang]
    return from ? `${from} → ${to}` : to
  }

  const waMsg = isAr
    ? `السلام عليكم، أريد الاستفسار عن سعر ${routeLabel(selected, 'ar')}`
    : `Hello, I'd like to inquire about the price for ${routeLabel(selected, 'en')}`
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(waMsg)}`

  return (
    <section id="pricing" className="page-section" style={{ backgroundColor: 'var(--background)', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{isAr ? 'الأسعار' : 'Pricing'}</span>
          <h2 className="section-title">
            {isAr ? <>اعرف <span style={{ color: 'var(--primary)' }}>السعر</span> قبل أن تسافر.</> : <>Know the <span style={{ color: 'var(--primary)' }}>price</span> before you travel.</>}
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {isAr
              ? 'الأسعار بالريال السعودي، للسيارة الواحدة وليس للفرد. السعر يعتمد على المسار ويُؤكد عبر واتساب قبل الحجز.'
              : 'Prices are in SAR, per vehicle — not per person. Pricing is route-based and the fixed fare is confirmed on WhatsApp before you book.'}
          </p>
        </div>

        {/* ── Desktop: full table ── */}
        <div className="pricing-desktop-table">
          <div style={{ overflowX: 'auto', borderRadius: '16px', boxShadow: 'var(--shadow-md)', border: '1.5px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0B3D2E, #0F5132)', color: 'white' }}>
                  <th scope="col" style={{ padding: '14px 18px', textAlign: isAr ? 'right' : 'left', fontWeight: '800' }}>{isAr ? 'المسار' : 'Route'}</th>
                  {[{ en: 'Sedan', ar: 'سيدان' }, { en: 'Staria', ar: 'ستاريا' }, { en: 'GMC Yukon', ar: 'GMC يوكون' }].map(veh => (
                    <th scope="col" key={veh.en} style={{ padding: '14px 18px', textAlign: 'center', fontWeight: '800' }}>{isAr ? veh.ar : veh.en}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROUTES.map((r, i) => (
                  <tr key={r.id} style={{ background: i % 2 === 0 ? 'white' : 'var(--muted)' }}>
                    <th scope="row" style={{ padding: '13px 18px', fontWeight: '700', color: 'var(--foreground)', textAlign: isAr ? 'right' : 'left' }}>
                      {routeLabel(r, isAr ? 'ar' : 'en')}
                    </th>
                    {(['sedan', 'staria', 'gmc'] as const).map(key => (
                      <td key={key} style={{ padding: '13px 18px', textAlign: 'center' }}>
                        <span style={{ fontWeight: '900', fontSize: '1rem', color: 'var(--primary)' }}>{r.rates.find(x => x.key === key)!.price}</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--muted-foreground)', marginInlineStart: '3px' }}>SAR</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Mobile: route selector ── */}
        <div className="pricing-mobile-selector">
          <label htmlFor="route-select" style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--muted-foreground)', marginBottom: '8px' }}>
            {isAr ? 'اختر المسار' : 'Select route'}
          </label>
          <select
            id="route-select"
            value={selectedId}
            onChange={e => setSelectedId(e.target.value)}
            style={{
              width: '100%', padding: '13px 14px', borderRadius: '10px',
              border: '1.5px solid var(--border)', fontSize: '0.95rem', fontWeight: '700',
              fontFamily: 'inherit', background: 'white', marginBottom: '18px',
            }}
          >
            {allPricingRoutes.map(r => (
              <option key={r.id} value={r.id}>{routeLabel(r, isAr ? 'ar' : 'en')}</option>
            ))}
          </select>

          <motion.div
            key={selectedId}
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'var(--muted)', borderRadius: '14px', padding: '18px', border: '1px solid var(--border)' }}
          >
            {(['sedan', 'staria', 'gmc'] as const).map(key => {
              const rate = selected.rates.find(x => x.key === key)!
              return (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontWeight: '700', fontSize: '0.92rem' }}>{isAr ? rate.name.ar : rate.name.en}</span>
                  <span style={{ fontWeight: '900', fontSize: '1.15rem', color: 'var(--primary)' }}>{rate.price} <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--muted-foreground)' }}>SAR</span></span>
                </div>
              )
            })}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
              <MessageCircle size={16} strokeWidth={2.5} />
              {isAr ? 'احجز هذا المسار' : 'Book This Route'}
            </a>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '26px' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginBottom: '10px' }}>
            {isAr ? 'الدفع نقداً أو تحويل بنكي بعد الرحلة. إلغاء مجاني حتى ٣ ساعات قبل الاستلام.' : 'Pay by cash or bank transfer after the trip. Free cancellation up to 3 hours before pickup.'}
          </p>
          <Link href="/taxi-prices-saudi-arabia" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.88rem' }}>
            {isAr ? 'عرض جميع المسارات والأسعار ←' : 'See all routes and prices →'}
          </Link>
        </div>
      </div>
    </section>
  )
}
