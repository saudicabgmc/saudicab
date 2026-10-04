'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Plane, CheckCircle2, UserCheck, Building2 } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const FLOW = [
  { icon: Plane, en: 'Flight Details', ar: 'تفاصيل الرحلة', desc: { en: 'Share your flight number when you book.', ar: 'شارك رقم رحلتك عند الحجز.' } },
  { icon: CheckCircle2, en: 'Pickup Confirmation', ar: 'تأكيد الاستلام', desc: { en: 'We confirm your driver and fixed price on WhatsApp.', ar: 'نؤكد سائقك وسعرك الثابت عبر واتساب.' } },
  { icon: UserCheck, en: 'Driver Arrival', ar: 'وصول السائق', desc: { en: 'Your driver waits at arrivals with a name-board.', ar: 'ينتظرك سائقك في صالة الوصول بلوحة باسمك.' } },
  { icon: Building2, en: 'Hotel / Destination', ar: 'الفندق / الوجهة', desc: { en: 'Direct transfer to your hotel or destination.', ar: 'توصيل مباشر إلى فندقك أو وجهتك.' } },
]

export default function AirportJourney() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()

  return (
    <section className="page-section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="two-col-grid">
          <div>
            <span className="section-tag">{isAr ? 'توصيل المطار' : 'Airport Transfer'}</span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              {isAr ? <>من المطار إلى <span style={{ color: 'var(--primary)' }}>بابك.</span></> : <>From the airport to <span style={{ color: 'var(--primary)' }}>your door.</span></>}
            </h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '26px' }} data-speakable>
              {isAr
                ? 'نوفر توصيلاً من مطار الملك عبدالعزيز الدولي في جدة، ومطار الأمير محمد بن عبدالعزيز في المدينة المنورة، ومطار الطائف.'
                : 'We provide airport transfers from King Abdulaziz International Airport (Jeddah), Prince Mohammad bin Abdulaziz Airport (Madinah), and Taif Airport.'}
            </p>

            <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '26px' }}>
              {FLOW.map((step, i) => (
                <motion.li
                  key={step.en}
                  initial={reduceMotion ? undefined : { opacity: 0, x: isAr ? 12 : -12 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <step.icon size={18} color="var(--primary)" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '0.92rem', marginBottom: '2px' }}>{isAr ? step.ar : step.en}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>{isAr ? step.desc.ar : step.desc.en}</div>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/airport-transfer" className="btn-primary">
                {isAr ? 'توصيل المطار' : 'Airport Transfer'}
              </Link>
              <Link href="/jeddah-airport-to-makkah" className="btn-outline" style={{ color: 'var(--foreground)', border: '2px solid var(--border)' }}>
                {isAr ? 'مطار جدة ← مكة' : 'Jeddah Airport → Makkah'}
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '440px', boxShadow: 'var(--shadow-lg)' }}>
            <img
              src="/fleet/gmc-yukon-exterior-front-grille-saudi-cabs-gmc.webp"
              alt={isAr ? 'سيارة الاستقبال — Saudi Cabs GMC' : 'Airport pickup vehicle – Saudi Cabs GMC'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
