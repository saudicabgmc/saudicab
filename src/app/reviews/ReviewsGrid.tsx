'use client'
import { Star, MapPin } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

export default function ReviewsGrid() {
  const { lang } = useLang()
  const items = t[lang].testimonials.items as { text: string; name: string; city: string; img: string }[]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
      {items.map((r, i) => (
        <div key={i} style={{ padding: '26px 24px', borderRadius: '16px', border: '1.5px solid var(--border)', background: 'white' }}>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
            {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#D4AF37" color="#D4AF37" strokeWidth={0} />)}
          </div>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--foreground)', fontStyle: 'italic', marginBottom: '20px' }}>
            &ldquo;{r.text}&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary)', flexShrink: 0 }}>
              <img src={r.img} alt={r.name} width={42} height={42} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '0.9rem' }}>{r.name}</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <MapPin size={11} strokeWidth={2} />{r.city}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
