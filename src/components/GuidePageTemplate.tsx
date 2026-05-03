import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import type { ReactNode } from 'react'

export interface GuideFAQ { q: string; a: string }

export interface GuidePageProps {
  tag: string
  title: string
  subtitle: string
  quickAnswer: string
  keyFacts: { icon: string; label: string; value: string }[]
  children: ReactNode
  faqs: GuideFAQ[]
  relatedLinks: { href: string; label: string; tag: string }[]
  heroGradient?: string
}

export default function GuidePageTemplate({
  tag, title, subtitle, quickAnswer, keyFacts, children, faqs, relatedLinks,
  heroGradient = 'linear-gradient(135deg, #071f17, #0B3D2E)',
}: GuidePageProps) {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>

      {/* Hero */}
      <section style={{ background: heroGradient, color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            {tag}
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
            {title}
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>{subtitle}</p>
        </div>
      </section>

      {/* Quick Answer Box — LLM citation target */}
      <section style={{ padding: '0', background: 'var(--primary)' }}>
        <div className="container" style={{ maxWidth: '760px', padding: '28px 24px' }}>
          <div className="quick-answer" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>⚡</span>
            <div>
              <div style={{ fontWeight: '900', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.6)', marginBottom: '6px' }}>Quick Answer</div>
              <p style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--foreground)', lineHeight: 1.6 }}>{quickAnswer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Grid */}
      <section style={{ padding: '40px 0', backgroundColor: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="key-facts" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '14px' }}>
            {keyFacts.map((f, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '18px 16px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{f.label}</div>
                <div style={{ fontWeight: '900', fontSize: '0.95rem', color: 'var(--foreground)' }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ lineHeight: 1.8, fontSize: '1rem', color: 'var(--foreground)' }}>
            {children}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '8px' }}>
            Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
          </h2>
          <div className="gold-divider" style={{ margin: '0 0 28px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '20px 24px', border: '1px solid var(--border)' }}>
                <div style={{ fontWeight: '800', fontSize: '0.95rem', marginBottom: '8px', color: 'var(--foreground)' }}>
                  Q: {faq.q}
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section style={{ padding: '48px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '24px' }}>Related <span style={{ color: 'var(--primary)' }}>Pages</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
            {relatedLinks.map((l, i) => (
              <Link key={i} href={l.href} style={{
                display: 'block', padding: '14px 18px', borderRadius: '12px',
                border: '1.5px solid var(--border)', textDecoration: 'none',
                background: 'var(--muted)', transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{l.tag}</div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--foreground)' }}>{l.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>Ready to Book?</h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>Fixed price confirmed instantly. Professional driver. Door-to-door, 24/7.</p>
          <a
            href="https://wa.me/966569487569?text=Hello%2C%20I'd%20like%20to%20book%20a%20taxi%20in%20Saudi%20Arabia"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#25D366', color: 'white', fontWeight: '800',
              padding: '14px 36px', borderRadius: '12px', textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            Book on WhatsApp — +966 56 948 7569
          </a>
        </div>
      </section>
    </main>
  )
}
