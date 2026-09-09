'use client'
import { MessageCircle } from 'lucide-react'
import ReviewsGrid from './ReviewsGrid'
import { useLang } from '@/contexts/LanguageContext'

export default function ReviewsClient() {
  const { isAr } = useLang()

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            {isAr ? 'آراء العملاء' : 'Reviews'}
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
            {isAr
              ? <>ماذا يقول <span style={{ color: 'var(--primary)' }}>ركابنا عنا</span></>
              : <>What Our <span style={{ color: 'var(--primary)' }}>Passengers Say</span></>
            }
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
            {isAr
              ? 'تجارب وآراء حقيقية من المسافرين الذين تشرفنا بخدمتهم في مكة المكرمة والمدينة المنورة وجدة والطائف.'
              : "Real feedback from travelers we've driven across Makkah, Madinah, Jeddah, and Taif."
            }
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <ReviewsGrid />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '12px' }}>
            {isAr ? 'هل كانت لك تجربة مميزة معنا؟' : 'Had a Great Trip With Us?'}
          </h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>
            {isAr
              ? 'راسلنا عبر واتساب وشاركنا رأيك وتجربتك — يسعدنا دائماً سماع ملاحظاتكم.'
              : "Message us on WhatsApp and share your experience — we'd love to hear from you."
            }
          </p>
          <a
            href={`https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، أرغب في مشاركة رأيي حول رحلتي' : "Hello, I'd like to share feedback about my trip")}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#25D366', color: 'white', fontWeight: '800',
              padding: '14px 36px', borderRadius: '12px', textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            {isAr ? 'شاركنا تقييمك' : 'Share Your Feedback'}
          </a>
        </div>
      </section>
    </main>
  )
}
