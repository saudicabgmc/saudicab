'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export default function FinalCta() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()
  const waUrl = `https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في حجز رحلة' : "Hello, I'd like to book a trip")}`

  return (
    <section style={{ padding: '90px 0', backgroundImage: 'linear-gradient(135deg, #071f17 0%, #0B3D2E 100%)', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title-lg">
            {isAr ? 'أينما تبدأ رحلتك، سنساعدك على الوصول.' : 'Wherever your journey begins, we\'ll help you get there.'}
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', opacity: 0.85, maxWidth: '520px', margin: '0 auto 32px' }}>
            {isAr
              ? 'أخبرنا بمسارك وتاريخك وتفضيل السيارة. نؤكد لك تفاصيل الرحلة والسعر الثابت عبر واتساب.'
              : "Tell us your route, date and vehicle preference. We'll confirm the trip details and fixed price on WhatsApp."}
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(135deg, #D4AF37, #E6C65C)', color: '#1D1D1B',
              padding: '14px 34px', borderRadius: 'var(--radius)', fontWeight: '800', fontSize: '0.95rem',
              display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(212,175,55,0.35)',
            }}>
              <MessageCircle size={18} strokeWidth={2.5} />
              {isAr ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
            </a>
            <Link href="/routes-map" className="btn-outline">
              {isAr ? 'استكشف الخطوط والأسعار' : 'Explore Routes & Prices'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
