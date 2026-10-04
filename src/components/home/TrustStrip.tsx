'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Banknote, ShieldCheck, MessageCircle, Clock } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const ITEMS = [
  { icon: Banknote, en: 'Fixed Price Before Trip', ar: 'سعر ثابت قبل الرحلة' },
  { icon: ShieldCheck, en: 'No Advance Payment', ar: 'بدون دفع مسبق' },
  { icon: MessageCircle, en: 'WhatsApp Booking', ar: 'حجز عبر واتساب' },
  { icon: Clock, en: '24/7 Availability', ar: 'متاح ٢٤/٧' },
]

export default function TrustStrip() {
  const { isAr } = useLang()
  const reduceMotion = useReducedMotion()

  return (
    <div style={{ background: 'var(--foreground)', borderBottom: '3px solid var(--primary)' }}>
      <div className="container">
        <ul style={{
          listStyle: 'none', margin: 0, padding: '16px 0',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '0',
        }}>
          {ITEMS.map((item, i) => (
            <motion.li
              key={item.en}
              initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '4px 22px',
                borderInlineEnd: i < ITEMS.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
                color: 'white', fontSize: '0.84rem', fontWeight: '700', whiteSpace: 'nowrap',
              }}
            >
              <item.icon size={15} strokeWidth={2} color="var(--primary)" />
              {isAr ? item.ar : item.en}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
