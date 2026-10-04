'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'

const LINKS = [
  { href: '/hajj-umrah-transport', en: 'Hajj & Umrah Transport', ar: 'نقل الحج والعمرة' },
  { href: '/makkah-ziyarat-tour', en: 'Makkah Ziyarat Tour', ar: 'جولة زيارات مكة' },
  { href: '/madinah-ziyarat-tour', en: 'Madinah Ziyarat Tour', ar: 'جولة زيارات المدينة' },
  { href: '/umrah-travel-guide', en: 'Umrah Travel Guide', ar: 'دليل سفر العمرة' },
]

export default function PilgrimageSection() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()

  return (
    <section style={{ padding: '90px 0', background: 'linear-gradient(135deg, #0B3D2E 0%, #071f17 100%)', color: 'white' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)' }}>
            {isAr ? 'الحج والعمرة' : 'Hajj & Umrah'}
          </span>
          <h2 className="section-title" style={{ marginTop: '16px', color: 'white' }}>
            {isAr ? 'نقل هادئ وموثوق لرحلتك الإيمانية' : 'Calm, reliable transport for your pilgrimage'}
          </h2>
          <div className="gold-divider" style={{ margin: '18px auto' }} />
          <p style={{ fontSize: '0.95rem', opacity: 0.82, lineHeight: 1.8, marginBottom: '30px' }}>
            {isAr
              ? 'توصيل مخصص للحجاج والمعتمرين بين مكة المكرمة والمدينة المنورة، مع رحلات زيارات إلى المواقع الإسلامية التاريخية في كلتا المدينتين.'
              : 'Dedicated transfers for pilgrims between Makkah and Madinah, with Ziyarat trips to the historic Islamic sites in both cities.'}
          </p>
          <nav aria-label={isAr ? 'روابط الحج والعمرة' : 'Pilgrimage links'} style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} className="route-badge" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                {isAr ? l.ar : l.en}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  )
}
