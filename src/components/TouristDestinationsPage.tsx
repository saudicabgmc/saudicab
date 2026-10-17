'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  MessageCircle, Landmark, Waves, Mountain, Building2, Building, Map,
  ChevronDown, ArrowRight, MapPin, CheckCircle2,
} from 'lucide-react'
import FAQSection from './FAQSection'
import { useLang } from '@/contexts/LanguageContext'
import { destinations, destinationFaqs, type BText, type Destination } from '@/lib/touristDestinationsData'

const ICON_MAP: Record<Destination['icon'], React.ElementType> = {
  Landmark, Waves, Mountain, Building2, Building, Map,
}

const WA_NUMBER = '923097811785'
const waUrl = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

function useReveal() {
  const reduceMotion = useReducedMotion()
  return (i = 0) => reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.4, delay: Math.min(i * 0.04, 0.3) },
      }
}

function Arrow({ size = 15 }: { size?: number }) {
  const { isAr } = useLang()
  return <ArrowRight size={size} strokeWidth={2.4} aria-hidden="true" style={{ flexShrink: 0, transform: isAr ? 'scaleX(-1)' : undefined }} />
}

function DestinationCard({ d, index, reveal }: { d: Destination; index: number; reveal: (i?: number) => Record<string, unknown> }) {
  const { isAr } = useLang()
  const tx = (b: BText) => b[isAr ? 'ar' : 'en']
  const [open, setOpen] = useState(false)
  const Icon = ICON_MAP[d.icon]
  const waText = isAr
    ? `السلام عليكم، أرغب في الاستعلام عن النقل إلى ${tx(d.name)}`
    : `Hello, I'd like to ask about transport to ${tx(d.name)}`

  return (
    <motion.article
      {...reveal(index)}
      style={{
        background: 'var(--card)', borderRadius: '18px', border: '1px solid var(--border)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        boxShadow: 'var(--shadow-sm)',
      }}
      aria-labelledby={`dest-${d.id}-name`}
    >
      {/* Card header — real photo where available, otherwise a brand-colored illustrated panel */}
      <div
        style={{
          height: '160px', position: 'relative',
          background: d.heroImage
            ? `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%), url("${d.heroImage}")`
            : `linear-gradient(135deg, ${d.gradient[0]}, ${d.gradient[1]})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        {!d.heroImage && (
          <Icon
            size={64} strokeWidth={1.3} color="rgba(212,175,55,0.35)"
            aria-hidden="true"
            style={{ position: 'absolute', bottom: '-14px', right: isAr ? undefined : '-10px', left: isAr ? '-10px' : undefined }}
          />
        )}
        <div style={{ position: 'absolute', top: '12px', insetInlineStart: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', color: 'white', fontSize: '0.68rem', fontWeight: 700, padding: '5px 11px', borderRadius: '50px' }}>
          <Icon size={13} strokeWidth={2.2} aria-hidden="true" />
          {tx(d.region)}
        </div>
        <div
          style={{
            position: 'absolute', bottom: '12px', insetInlineEnd: '12px',
            fontSize: '0.66rem', fontWeight: 800, padding: '4px 10px', borderRadius: '50px',
            background: d.status === 'serviced' ? 'rgba(34,163,94,0.92)' : 'rgba(212,175,55,0.92)',
            color: d.status === 'serviced' ? 'white' : '#1D1D1B',
          }}
        >
          {d.status === 'serviced'
            ? (isAr ? 'خدمة متاحة' : 'Service Available')
            : (isAr ? 'استعلام عبر واتساب' : 'Inquire on WhatsApp')}
        </div>
      </div>

      <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 id={`dest-${d.id}-name`} style={{ fontSize: '1.15rem', fontWeight: 900, marginBottom: '4px', color: 'var(--foreground)' }}>
          {tx(d.name)}
        </h3>
        <p style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '10px' }}>{tx(d.tagline)}</p>
        <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '14px' }}>{tx(d.summary)}</p>

        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls={`dest-${d.id}-panel`}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px',
            background: 'var(--muted)', border: '1px solid var(--border)', borderRadius: '10px',
            padding: '10px 14px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--foreground)',
            cursor: 'pointer', marginBottom: open ? '12px' : '0', direction: isAr ? 'rtl' : 'ltr',
          }}
        >
          {isAr ? `ما يمكن رؤيته في ${tx(d.name)}` : `What to see in ${tx(d.name)}`}
          <ChevronDown size={16} strokeWidth={2.5} color="var(--primary)" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s', flexShrink: 0 }} />
        </button>

        <div id={`dest-${d.id}-panel`} hidden={!open} style={{ marginBottom: '14px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {d.highlights.map(h => (
              <li key={h.name.en} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={15} strokeWidth={2.2} color="var(--primary)" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--muted-foreground)' }}>
                  <strong style={{ color: 'var(--foreground)' }}>{tx(h.name)}</strong> — {tx(h.desc)}
                </span>
              </li>
            ))}
          </ul>
          {d.goodToKnow && (
            <p style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)', background: 'var(--muted)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 12px', marginTop: '12px', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--foreground)' }}>{isAr ? 'معلومة مفيدة: ' : 'Good to know: '}</strong>
              {tx(d.goodToKnow)}
            </p>
          )}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '6px' }}>
          {d.serviceLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="mk-focus"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px',
                fontSize: '0.84rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none',
                padding: '9px 2px', direction: isAr ? 'rtl' : 'ltr',
              }}
            >
              {tx(link.label)}
              <Arrow />
            </Link>
          ))}
          {d.status === 'inquire' && (
            <a
              href={waUrl(waText)} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: 'var(--primary)', color: '#1D1D1B', fontWeight: 800, fontSize: '0.82rem',
                padding: '10px 14px', borderRadius: '10px', textDecoration: 'none',
              }}
            >
              <MessageCircle size={15} strokeWidth={2.5} aria-hidden="true" />
              {isAr ? 'اسأل عن إمكانية الرحلة' : 'Ask About This Trip'}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function TouristDestinationsPage() {
  const { isAr } = useLang()
  const reveal = useReveal()
  const waText = isAr ? 'السلام عليكم، أرغب في الاستفسار عن الوجهات السياحية' : "Hello, I'd like to ask about tourist destinations"

  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, #071f17 0%, #0b3d2e 55%, #1b2735 100%)',
          color: 'white', padding: '110px 0 70px', textAlign: 'center',
        }}
      >
        <svg
          aria-hidden="true" viewBox="0 0 800 200" preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, zIndex: 0 }}
        >
          <path d="M0 160 Q 100 120 200 150 T 400 130 T 600 155 T 800 120" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M0 180 Q 120 150 240 170 T 480 160 T 720 175 T 800 165" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 6" fill="none" />
        </svg>
        <div className="container" style={{ maxWidth: '760px', position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
            {isAr ? 'استكشف المملكة' : 'Explore Saudi Arabia'}
          </span>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3rem)', fontWeight: 900, margin: '18px 0', lineHeight: 1.2 }}>
            {isAr ? 'الوجهات السياحية في المملكة العربية السعودية' : 'Tourist Destinations in Saudi Arabia'}
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.02rem' }}>
            {isAr
              ? 'من الحرمين الشريفين إلى آثار العلا النبطية وجبال عسير الخضراء — دليل مختصر لأبرز وجهات المملكة، مع روابط لترتيب نقل خاص حيث تتوفر خدمتنا فعلياً.'
              : "From the Two Holy Mosques to the Nabataean ruins of AlUla and the green peaks of Asir — a short guide to Saudi Arabia's standout destinations, with links to arrange private transport wherever our service genuinely reaches."}
          </p>
        </div>
      </section>

      {/* ── Destination grid ── */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="grid-3">
            {destinations.map((d, i) => (
              <DestinationCard key={d.id} d={d} index={i} reveal={reveal} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: '64px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="section-header">
            <span className="section-tag">{isAr ? 'كيف يعمل الحجز' : 'How It Works'}</span>
            <h2 className="section-title">{isAr ? 'نقل خاص إلى وجهتك' : 'Private Transport to Your Destination'}</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { n: '1', t: { en: 'Pick a destination', ar: 'اختر وجهتك' }, d: { en: 'Choose a city or site above and open its service link, or message us for anything marked "Inquire".', ar: 'اختر مدينة أو موقعاً أعلاه وافتح رابط الخدمة الخاص به، أو راسلنا بخصوص أي وجهة مُصنّفة "استعلام".' } },
              { n: '2', t: { en: 'Confirm on WhatsApp', ar: 'أكّد عبر واتساب' }, d: { en: 'Share your dates, group size and vehicle preference — we confirm the vehicle and fare before you travel.', ar: 'شارك تواريخك وعدد مجموعتك وتفضيلك للسيارة — نؤكد لك السيارة والسعر قبل سفرك.' } },
              { n: '3', t: { en: 'Travel with a private driver', ar: 'سافر مع سائق خاص' }, d: { en: 'Your driver meets you at the agreed pickup point — no shared rides, no fixed schedule.', ar: 'يقابلك سائقك عند نقطة الاستلام المتفق عليها — دون مشاركة الرحلة أو جدول ثابت.' } },
            ].map((s, i) => (
              <motion.div key={s.n} {...reveal(i)} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.9rem', marginBottom: '12px' }}>{s.n}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '6px' }}>{isAr ? s.t.ar : s.t.en}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{isAr ? s.d.ar : s.d.en}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={destinationFaqs}
        heading={{ en: 'Destinations FAQ', ar: 'أسئلة شائعة — الوجهات السياحية' }}
        subheading={{ en: 'What our private transport can and cannot cover for these destinations.', ar: 'ما يمكن وما لا يمكن لخدمة النقل الخاص لدينا تغطيته في هذه الوجهات.' }}
      />

      {/* ── CTA ── */}
      <section style={{ padding: '64px 0', background: 'linear-gradient(135deg, #071f17, #0b3d2e)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <MapPin size={28} color="#D4AF37" style={{ marginBottom: '14px' }} aria-hidden="true" />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '12px' }}>
            {isAr ? 'لم تجد وجهتك؟' : "Don't See Your Destination?"}
          </h2>
          <p style={{ opacity: 0.85, marginBottom: '24px', lineHeight: 1.7 }}>
            {isAr ? 'راسلنا عبر واتساب وسنوضح لك ما يمكننا ترتيبه فعلياً.' : "Message us on WhatsApp and we'll tell you honestly what we can actually arrange."}
          </p>
          <a
            href={waUrl(waText)} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: 'white', fontWeight: 800, padding: '14px 32px', borderRadius: '12px', textDecoration: 'none', fontSize: '0.95rem' }}
          >
            <MessageCircle size={18} strokeWidth={2.5} aria-hidden="true" />
            {isAr ? 'واتساب — +92 309 7811785' : 'WhatsApp — +92 309 7811785'}
          </a>
        </div>
      </section>
    </main>
  )
}
