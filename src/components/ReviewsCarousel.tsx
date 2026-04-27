'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Star, MessageCircle } from 'lucide-react'

interface Review {
  text: string
  name: string
  city: string
  img: string
}

interface Props {
  reviews: Review[]
  isAr: boolean
}

export default function ReviewsCarousel({ reviews, isAr }: Props) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i === 0 ? reviews.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === reviews.length - 1 ? 0 : i + 1))
  const r = reviews[current]

  return (
    <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '0 28px' }}>

      {/* Card wrapper */}
      <div style={{
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.13)',
        background: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }} className="review-card-inner">

        {/* LEFT — image */}
        <div style={{ position: 'relative', overflow: 'hidden' }} className="review-img-col">
          <img
            key={r.img}
            src={r.img}
            alt={`${r.name} — Saudi Cabs GMC Review`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              minHeight: '420px',
            }}
            className="review-main-img"
          />
          {/* overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)', pointerEvents: 'none' }} />
          {/* badge */}
          <div style={{
            position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)',
            background: 'var(--primary)', color: 'white',
            padding: '5px 18px', borderRadius: '50px',
            fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.05em', whiteSpace: 'nowrap',
          }}>⭐ CUSTOMER REVIEW</div>
          {/* name bottom */}
          <div style={{ position: 'absolute', bottom: '20px', left: '18px', right: '18px' }}>
            <div style={{ color: 'white', fontWeight: '800', fontSize: '1rem' }}>{r.name}</div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
              <MapPin size={12} strokeWidth={2} />{r.city}
            </div>
          </div>
        </div>

        {/* RIGHT — content */}
        <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          className="review-text-col">
          <div>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" strokeWidth={0} />)}
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'var(--foreground)', fontStyle: 'italic', marginBottom: '24px' }}>
              &ldquo;{r.text}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary)', flexShrink: 0 }}>
                <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '0.95rem' }}>{r.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <MapPin size={11} strokeWidth={2} />{r.city}
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/966549317712"
            target="_blank" rel="noopener noreferrer"
            style={{
              marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              background: '#25D366', color: 'white', padding: '13px 20px',
              borderRadius: '10px', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none',
            }}>
            <MessageCircle size={16} strokeWidth={2.5} />
            {isAr ? 'احجز الآن — واتساب' : 'Book Now on WhatsApp: +966 54 931 7712'}
          </a>
        </div>
      </div>

      {/* Arrows */}
      {['prev','next'].map(dir => (
        <button key={dir} onClick={dir === 'prev' ? prev : next} aria-label={dir}
          style={{
            position: 'absolute', top: '50%',
            [dir === 'prev' ? 'left' : 'right']: '0',
            transform: 'translateY(-50%)',
            background: 'white', border: '1.5px solid var(--border)',
            borderRadius: '50%', width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.1)', zIndex: 2,
          }}>
          {dir === 'prev' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      ))}

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '22px' }}>
        {reviews.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`slide ${i+1}`} style={{
            width: i === current ? '28px' : '10px', height: '10px',
            borderRadius: '50px', border: 'none', cursor: 'pointer', padding: 0,
            background: i === current ? 'var(--primary)' : 'var(--border)',
            transition: 'all 0.3s',
          }} />
        ))}
      </div>
    </div>
  )
}
