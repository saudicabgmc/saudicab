'use client'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const STEPS = [
  { n: '01', img: '/booking/step-1-book-whatsapp.webp', title: { en: 'Tell Us Your Trip', ar: 'أخبرنا برحلتك' }, desc: { en: 'Send your pickup, destination, date and time on WhatsApp.', ar: 'أرسل موقع الاستلام والوجهة والتاريخ والوقت عبر واتساب.' } },
  { n: '02', img: '/booking/step-2-confirmation.webp', title: { en: 'Get Your Fixed Price', ar: 'استلم سعرك الثابت' }, desc: { en: 'We reply with a fixed fare and vehicle option — no meter, no surprises.', ar: 'نرد بسعر ثابت وخيار السيارة — بلا عداد وبلا مفاجآت.' } },
  { n: '03', img: '/booking/step-3-driver-arrival.webp', title: { en: 'Meet Your Driver', ar: 'قابل سائقك' }, desc: { en: 'Your driver arrives on time, ready for your journey.', ar: 'يصل سائقك في الموعد، جاهزاً لرحلتك.' } },
]

export default function JourneyTimeline() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip")}`

  return (
    <section className="page-section" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{isAr ? 'كيف يعمل' : 'How It Works'}</span>
          <h2 className="section-title">{isAr ? 'ثلاث خطوات إلى وجهتك' : 'Three steps to your destination'}</h2>
          <div className="gold-divider" />
        </div>

        <div className="timeline-wrap" ref={ref}>
          <div className="timeline-line-track" aria-hidden="true">
            <motion.div style={{
              position: 'absolute', top: 0, left: 0, width: '100%',
              height: reduceMotion ? '100%' : lineScale,
              transformOrigin: 'top',
              background: 'var(--primary)',
            }} />
          </div>
          <div className="timeline-steps">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                className="timeline-step"
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="timeline-dot" aria-hidden="true" />
                <div style={{ borderRadius: '14px', overflow: 'hidden', height: '160px', marginBottom: '16px', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={s.img} alt={isAr ? s.title.ar : s.title.en} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '0.78rem', letterSpacing: '0.08em', marginBottom: '6px' }}>{s.n}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '8px' }}>{isAr ? s.title.ar : s.title.en}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: 1.65, margin: 0 }}>{isAr ? s.desc.ar : s.desc.en}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={18} strokeWidth={2.5} />
            {isAr ? 'ابدأ عبر واتساب' : 'Start on WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  )
}
