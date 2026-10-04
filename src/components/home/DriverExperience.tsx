'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const POINTS = [
  { icon: '🎓', en: 'Professionally trained & experienced', ar: 'مدرّبون وذوو خبرة احترافية' },
  { icon: '🧭', en: 'Familiar with local routes & holy sites', ar: 'على دراية بالطرق المحلية والمواقع المقدسة' },
  { icon: '🗣️', en: 'Bilingual — Arabic & English', ar: 'ثنائيو اللغة — عربي وإنجليزي' },
  { icon: '💰', en: 'Fixed price agreed before every trip', ar: 'سعر ثابت متفق عليه قبل كل رحلة' },
]

export default function DriverExperience() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز سائق خاص' : "Hello, I'd like to book a private driver")}`

  return (
    <section className="page-section" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="container">
        <div className="two-col-grid">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/9' }}
          >
            <iframe
              src="https://www.youtube.com/embed/qKSQuxLLQV0?rel=0&modestbranding=1"
              loading="lazy"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={isAr ? 'سائقو Saudi Cabs GMC' : 'Saudi Cabs GMC Drivers'}
            />
          </motion.div>
          <div>
            <span className="section-tag">{isAr ? 'سائقونا' : 'Our Drivers'}</span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              {isAr ? <>السائق جزء من <span style={{ color: 'var(--primary)' }}>الرحلة.</span></> : <>A driver is part of the <span style={{ color: 'var(--primary)' }}>journey.</span></>}
            </h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '26px' }}>
              {POINTS.map(item => (
                <div key={item.en} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1rem', width: '22px', textAlign: 'center' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{isAr ? item.ar : item.en}</span>
                </div>
              ))}
            </div>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={16} strokeWidth={2.5} />
              {isAr ? 'اطلب سائقاً خاصاً' : 'Request a Private Driver'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
