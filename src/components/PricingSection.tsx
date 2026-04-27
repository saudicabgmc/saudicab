'use client'
import { MessageCircle, Car, Users } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import {
  type PricingRoute,
  type PricingCategory,
  categoryLabel,
  categoryColor,
} from '@/lib/pricingData'

type BText = { ar: string; en: string }

const vehicleIcon: Record<string, string> = {
  sedan:  '🚗',
  staria: '🚐',
  gmc:    '🚙',
}

interface Props {
  routes: PricingRoute[]
  heading?: BText
}

export default function PricingSection({ routes, heading }: Props) {
  const { lang, isAr } = useLang()
  const tx = (b: BText) => b[lang]

  const waBookMsg = (from: BText, to: BText) =>
    isAr
      ? `السلام عليكم، أرغب في حجز رحلة من ${tx(from)} إلى ${tx(to)}`
      : `Hello, I'd like to book a trip from ${tx(from)} to ${tx(to)}`

  /* group by category, preserving order */
  const categories: PricingCategory[] = []
  const grouped: Record<string, PricingRoute[]> = {}
  for (const r of routes) {
    if (!grouped[r.category]) {
      categories.push(r.category)
      grouped[r.category] = []
    }
    grouped[r.category].push(r)
  }

  const defaultHeading: BText = {
    ar: 'أسعارنا الثابتة — شفافية كاملة بدون رسوم خفية',
    en: 'Our Fixed Rates — Full Transparency, No Hidden Fees',
  }

  return (
    <section style={{ padding: '80px 0', background: 'var(--background)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">{isAr ? 'الأسعار' : 'Pricing'}</span>
          <h2 className="section-title">{tx(heading ?? defaultHeading)}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {isAr
              ? 'اختر السيارة المناسبة لك — السعر ثابت من لحظة الحجز ولا تفاجآت عند الوصول'
              : 'Choose the vehicle that suits you — price is locked at booking, no surprises on arrival'}
          </p>
        </div>

        {/* Vehicle legend */}
        <div style={{
          display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          {[
            { icon: '🚗', label: isAr ? 'سيدان — ٤ مقاعد' : 'Sedan — 4 Seats' },
            { icon: '🚐', label: isAr ? 'ستاريا — ٧ مقاعد' : 'Staria — 7 Seats' },
            { icon: '🚙', label: isAr ? 'GMC — ٧ مقاعد فاخر' : 'GMC — 7 Seats Luxury' },
          ].map(v => (
            <div key={v.icon} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '50px', padding: '8px 18px',
              fontSize: '0.84rem', fontWeight: '700',
            }}>
              <span style={{ fontSize: '1.1rem' }}>{v.icon}</span>
              {v.label}
            </div>
          ))}
        </div>

        {/* Category groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {categories.map(cat => (
            <div key={cat}>
              {/* Category heading */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                marginBottom: '20px',
              }}>
                <div style={{
                  flex: 1, height: '2px',
                  background: `linear-gradient(${isAr ? 'to left' : 'to right'}, ${categoryColor[cat]}, transparent)`,
                }} />
                <span style={{
                  background: categoryColor[cat] + '15',
                  color: categoryColor[cat],
                  border: `1.5px solid ${categoryColor[cat]}40`,
                  padding: '6px 20px', borderRadius: '50px',
                  fontWeight: '900', fontSize: '0.88rem', whiteSpace: 'nowrap',
                }}>
                  {tx(categoryLabel[cat])}
                </span>
                <div style={{
                  flex: 1, height: '2px',
                  background: `linear-gradient(${isAr ? 'to right' : 'to left'}, ${categoryColor[cat]}, transparent)`,
                }} />
              </div>

              {/* Route cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {grouped[cat].map(route => (
                  <div
                    key={route.id}
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      borderLeft: `4px solid ${categoryColor[cat]}`,
                    }}
                  >
                    {/* Route header */}
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      flexWrap: 'wrap', gap: '12px',
                      padding: '16px 22px 14px',
                      borderBottom: '1px solid var(--border)',
                      direction: isAr ? 'rtl' : 'ltr',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                          fontSize: '0.95rem', fontWeight: '900',
                          color: 'var(--foreground)',
                        }}>
                          {tx(route.from)}
                        </span>
                        <span style={{ color: categoryColor[cat], fontWeight: '900', fontSize: '1rem' }}>
                          {isAr ? '←' : '→'}
                        </span>
                        <span style={{
                          fontSize: '0.95rem', fontWeight: '900',
                          color: 'var(--foreground)',
                        }}>
                          {tx(route.to)}
                        </span>
                      </div>
                      <a
                        href={`https://wa.me/966549317712?text=${encodeURIComponent(waBookMsg(route.from, route.to))}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          background: '#25D366', color: 'white',
                          padding: '8px 18px', borderRadius: '8px',
                          fontWeight: '800', fontSize: '0.78rem', textDecoration: 'none',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <MessageCircle size={14} strokeWidth={2.5} />
                        {isAr ? 'احجز الآن' : 'Book Now'}
                      </a>
                    </div>

                    {/* Price columns */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                    }}>
                      {route.rates.map((rate, i) => {
                        const isGmc = rate.key === 'gmc'
                        return (
                        <div
                          key={rate.key}
                          style={{
                            padding: '16px 18px',
                            textAlign: 'center',
                            borderRight: !isAr && i < 2 ? '1px solid var(--border)' : undefined,
                            borderLeft: isAr && i < 2 ? '1px solid var(--border)' : undefined,
                            background: isGmc ? 'linear-gradient(160deg, rgba(212,175,55,0.12), rgba(230,198,92,0.08))' : undefined,
                          }}
                        >
                          <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>
                            {vehicleIcon[rate.key]}
                          </div>
                          <div style={{
                            fontSize: '0.76rem', fontWeight: '700',
                            color: isGmc ? '#9A7B1A' : 'var(--muted-foreground)', marginBottom: '6px',
                          }}>
                            {tx(rate.name)}
                          </div>
                          <div style={{
                            fontSize: '1.4rem', fontWeight: '900',
                            color: isGmc ? '#C9A227' : 'var(--brand-green)', lineHeight: 1,
                          }}>
                            {rate.price}
                          </div>
                          <div style={{
                            fontSize: '0.72rem', color: isGmc ? '#9A7B1A' : 'var(--muted-foreground)',
                            marginTop: '2px', fontWeight: '700',
                          }}>
                            SAR
                          </div>
                          <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: '3px', fontSize: '0.7rem', color: isGmc ? '#9A7B1A' : 'var(--muted-foreground)',
                            marginTop: '4px',
                          }}>
                            <Users size={11} strokeWidth={2} />
                            {isAr ? `${rate.seats} مقاعد` : `${rate.seats} seats`}
                          </div>
                        </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: '36px', textAlign: 'center',
          padding: '18px 24px',
          background: 'rgba(212,175,55,0.08)',
          border: '1px solid rgba(212,175,55,0.30)',
          borderRadius: '14px',
          fontSize: '0.84rem', color: 'var(--muted-foreground)', lineHeight: 1.75,
        }}>
          {isAr
            ? '✅ جميع الأسعار ثابتة شاملة الرسوم — لا عداد لا رسوم إضافية. السعر المتفق عليه هو ما تدفعه بالضبط.'
            : '✅ All prices are fixed and all-inclusive — no meter, no extra charges. The agreed price is exactly what you pay.'}
        </div>
      </div>
    </section>
  )
}
