'use client'
import { MessageCircle } from 'lucide-react'
import { type PricingRoute, vehicleImages } from '@/lib/pricingData'
import { useLang } from '@/contexts/LanguageContext'

type BText = { ar: string; en: string }

interface FleetSectionProps {
  pricing: PricingRoute[]
  cityName?: BText
}

const CARS = [
  {
    key: 'sedan' as const,
    nameEn: 'Sedan', nameAr: 'سيدان',
    seats: '4',
    descEn: 'Perfect for individuals & couples — comfortable & affordable',
    descAr: 'مثالية للأفراد والأزواج — مريحة واقتصادية',
    image: vehicleImages.sedan,
    alt: 'Sedan Taxi Saudi Arabia – Saudi Cabs GMC Professional Cab Service',
    badge: { en: '4 Seats', ar: '٤ مقاعد' },
    accent: '#0B3D2E',
  },
  {
    key: 'staria' as const,
    nameEn: 'Hyundai Staria', nameAr: 'هيونداي ستاريا',
    seats: '7',
    descEn: 'Premium 7-seater van — ideal for families & groups',
    descAr: 'حافلة فاخرة 7 مقاعد — مثالية للعائلات والمجموعات',
    image: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp',
    alt: 'Hyundai Staria 7-Seat Taxi Saudi Arabia – Saudi Cabs GMC Premium Van',
    badge: { en: '7 Seats', ar: '٧ مقاعد' },
    accent: '#0F5132',
  },
  {
    key: 'gmc' as const,
    nameEn: 'GMC Yukon', nameAr: 'GMC يوكون',
    seats: '7',
    descEn: 'Luxury SUV — the ultimate VIP experience in Saudi Arabia',
    descAr: 'سيارة دفع رباعي فاخرة — التجربة الراقية في المملكة',
    image: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp',
    alt: 'GMC Yukon Luxury SUV Taxi Saudi Arabia – Saudi Cabs GMC VIP Service',
    badge: { en: '7 Seats • VIP', ar: '٧ مقاعد • VIP' },
    accent: '#1a1a1a',
  },
]

export default function FleetSection({ pricing, cityName }: FleetSectionProps) {
  const { lang, isAr } = useLang()

  return (
    <section style={{ padding: '90px 0', backgroundColor: 'var(--muted)' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">{isAr ? 'أسطولنا' : 'Our Fleet'}</span>
          <h2 className="section-title">
            {isAr
              ? <><span style={{ color: 'var(--primary)' }}>٣ سيارات فاخرة</span> — اختر ما يناسبك</>
              : <>3 Premium Vehicles — <span style={{ color: 'var(--primary)' }}>Choose Yours</span></>
            }
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {isAr
              ? `سيدان • ستاريا • GMC — أسعار ثابتة بدون رسوم خفية${cityName ? ` في ${cityName.ar}` : ''}`
              : `Sedan • Staria • GMC — Fixed prices, no hidden fees${cityName ? ` in ${cityName.en}` : ''}`
            }
          </p>
        </div>

        {/* 3 Car Cards */}
        <div className="fleet-3col">
          {CARS.map(car => {
            const routes = pricing.filter(r => r.rates.some(rt => rt.key === car.key))
            const minPrice = Math.min(...routes.map(r => r.rates.find(rt => rt.key === car.key)!.price))

            const waMsg = isAr
              ? `السلام عليكم، أريد حجز ${car.nameAr}${cityName ? ` في ${cityName.ar}` : ''}`
              : `Hello, I'd like to book a ${car.nameEn}${cityName ? ` in ${cityName.en}` : ''}`

            return (
              <div key={car.key} style={{
                background: 'var(--background)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border)',
              }}>

                {/* Car image */}
                <div style={{ position: 'relative', height: '220px', background: '#111', overflow: 'hidden' }}>
                  <img
                    src={car.image}
                    alt={car.alt}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: car.key === 'staria' ? 'contain' : 'cover', objectPosition: 'center', display: 'block' }}
                  />
                  {/* Seat badge */}
                  <div style={{
                    position: 'absolute', top: '12px', left: isAr ? 'auto' : '12px', right: isAr ? '12px' : 'auto',
                    background: car.accent, color: 'white',
                    padding: '5px 12px', borderRadius: '20px',
                    fontSize: '0.75rem', fontWeight: '700',
                  }}>
                    {isAr ? car.badge.ar : car.badge.en}
                  </div>
                  {/* Starting from price */}
                  {routes.length > 0 && (
                    <div style={{
                      position: 'absolute', bottom: '12px', right: isAr ? 'auto' : '12px', left: isAr ? '12px' : 'auto',
                      background: 'rgba(0,0,0,0.75)', color: 'white',
                      padding: '4px 12px', borderRadius: '20px',
                      fontSize: '0.78rem', fontWeight: '700',
                    }}>
                      {isAr ? `من ${minPrice} ريال` : `From ${minPrice} SAR`}
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>

                  {/* Name + desc */}
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '4px' }}>
                      {isAr ? car.nameAr : car.nameEn}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: '1.5' }}>
                      {isAr ? car.descAr : car.descEn}
                    </p>
                  </div>

                  {/* Price rows */}
                  <div style={{ flex: 1 }}>
                    {routes.map(route => {
                      const rate = route.rates.find(r => r.key === car.key)!
                      return (
                        <div key={route.id} style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '8px 0',
                          borderBottom: '1px solid var(--border)',
                          fontSize: '0.82rem',
                        }}>
                          <span style={{ color: 'var(--muted-foreground)', maxWidth: '68%', lineHeight: '1.3' }}>
                            {isAr ? route.from.ar : route.from.en}
                            <span style={{ color: 'var(--primary)', margin: '0 4px' }}>→</span>
                            {isAr ? route.to.ar : route.to.en}
                          </span>
                          <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--primary)', whiteSpace: 'nowrap' }}>
                            {rate.price} <span style={{ fontSize: '0.7rem', fontWeight: '600', color: 'var(--muted-foreground)' }}>SAR</span>
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/966549317712?text=${encodeURIComponent(waMsg)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      background: 'linear-gradient(135deg, #25D366, #1da851)',
                      color: 'white', padding: '13px 20px', borderRadius: '12px',
                      fontWeight: '800', fontSize: '0.88rem',
                      textDecoration: 'none',
                      boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                    }}
                  >
                    <MessageCircle size={16} strokeWidth={2.5} />
                    {isAr ? `احجز ${car.nameAr} الآن` : `Book ${car.nameEn} Now`}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
          {isAr
            ? '✅ أسعار ثابتة · رد فوري عبر واتساب · لا دفع مسبق · متاح ٢٤/٧'
            : '✅ Fixed prices · Instant WhatsApp reply · No advance payment · Available 24/7'}
        </p>

      </div>
    </section>
  )
}
