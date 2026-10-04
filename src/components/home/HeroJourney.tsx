'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, Plane, Car, MapIcon, UserRound, Moon } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import BookingForm from '@/components/BookingForm'

const WA = '923097811785'

const INTENTS = [
  { icon: Plane, href: '/airport-transfer', en: 'Airport Transfer', ar: 'توصيل المطار' },
  { icon: Car, href: '#cities', en: 'City Ride', ar: 'رحلة داخل المدينة' },
  { icon: MapIcon, href: '#pricing', en: 'Intercity Trip', ar: 'رحلة بين المدن' },
  { icon: UserRound, href: '/private-driver', en: 'Private Driver', ar: 'سائق خاص' },
  { icon: Moon, href: '/hajj-umrah-transport', en: 'Ziyarat / Pilgrimage', ar: 'زيارات وحج وعمرة' },
]

export default function HeroJourney() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()
  const waText = isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip"
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(waText)}`

  const rise = (delay = 0) => reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <section
      aria-label={isAr ? 'القسم الرئيسي' : 'Hero'}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 64px',
        background: '#071710',
      }}
    >
      {/* ── Layered visual: Saudi architecture backdrop + road + vehicle ── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("/hero/makkah-hero-saudi-cabs-gmc.webp")',
            backgroundSize: 'cover', backgroundPosition: 'center 78%',
            filter: 'saturate(0.9)',
          }}
        />
        {/* Depth gradient — dark left (text legibility) fading toward the image on the right */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, #071710 0%, rgba(7,23,16,0.94) 32%, rgba(7,23,16,0.55) 58%, rgba(7,23,16,0.25) 78%, rgba(7,23,16,0.15) 100%)',
        }} />
        {/* Road line — a single directional line crossing the hero, motif used again in City Explorer / Timeline */}
        <svg aria-hidden="true" width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} preserveAspectRatio="none">
          <motion.line
            x1="0%" y1="92%" x2="100%" y2="68%"
            stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round"
            initial={reduceMotion ? undefined : { pathLength: 0 }}
            animate={reduceMotion ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          <div style={{ color: 'white' }}>
            <motion.div {...rise(0)} style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'rgba(212,175,55,0.14)', border: '1px solid rgba(212,175,55,0.45)',
              color: 'var(--primary)', padding: '6px 16px', borderRadius: '50px',
              fontSize: '0.8rem', fontWeight: '700', marginBottom: '22px',
            }}>
              {isAr ? 'سعر ثابت يُؤكد قبل رحلتك' : 'Fixed price confirmed before your trip'}
            </motion.div>

            <motion.h1 {...rise(0.08)} className="hero-h1" style={{ marginBottom: '18px' }}>
              {isAr
                ? <>رحلتك عبر <span style={{ color: 'var(--primary)' }}>المملكة العربية السعودية</span> تبدأ من هنا.</>
                : <>Your journey across <span style={{ color: 'var(--primary)' }}>Saudi Arabia</span> starts here.</>}
            </motion.h1>

            <motion.p {...rise(0.16)} style={{
              fontSize: '1.02rem', opacity: 0.86, color: '#e7efe9',
              marginBottom: '30px', lineHeight: 1.75, maxWidth: '540px', fontWeight: '500',
            }}>
              {isAr
                ? 'رحلات خاصة داخل المدن، وبين المدن، وتوصيل من وإلى المطارات، وخدمة سائق خاص — في مكة المكرمة والمدينة المنورة وجدة والطائف.'
                : 'Private city transfers, intercity journeys, airport pickups and chauffeur services across Makkah, Madinah, Jeddah and Taif.'}
            </motion.p>

            <motion.div {...rise(0.24)} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{
                background: '#25D366', color: 'white', padding: '14px 30px', borderRadius: 'var(--radius)',
                fontWeight: '800', fontSize: '0.98rem', display: 'inline-flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 6px 20px rgba(37,211,102,0.35)', textDecoration: 'none',
              }}>
                <MessageCircle size={18} strokeWidth={2.5} />
                {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
              </a>
              <a href="#booking-form" className="btn-outline">
                {isAr ? 'احصل على سعرك الثابت' : 'Get Your Fixed Price'}
              </a>
            </motion.div>

            {/* Trip-intent selector — a decision helper, not a booking engine */}
            <motion.div {...rise(0.32)}>
              <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', marginBottom: '12px' }}>
                {isAr ? 'ما الذي تحتاجه؟' : 'What do you need?'}
              </p>
              <nav aria-label={isAr ? 'نوع الرحلة' : 'Trip type'} style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                {INTENTS.map(({ icon: Icon, href, en, ar }) => (
                  <Link key={href} href={href} className="mk-focus" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)',
                    color: 'white', padding: '9px 15px', borderRadius: '10px',
                    fontSize: '0.84rem', fontWeight: '600', textDecoration: 'none',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}>
                    <Icon size={15} strokeWidth={2} color="var(--primary)" />
                    {isAr ? ar : en}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>

          <motion.div
            id="booking-form"
            initial={reduceMotion ? undefined : { opacity: 0, x: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
