'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export interface FAQItem {
  q: { ar: string; en: string }
  a: { ar: string; en: string }
}

interface Props {
  faqs: FAQItem[]
  heading?: { ar: string; en: string }
}

export default function FAQSection({ faqs, heading }: Props) {
  const { lang, isAr } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  const tx = (b: { ar: string; en: string }) => b[lang]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q.en,
      acceptedAnswer: { '@type': 'Answer', text: f.a.en },
    })),
  }

  const defaultHeading = {
    ar: 'الأسئلة الأكثر شيوعاً',
    en: 'Frequently Asked Questions',
  }
  const defaultSub = {
    ar: 'إجابات واضحة على أسئلتكم حول خدمات النقل في السعودية',
    en: 'Clear answers to your questions about transportation services in Saudi Arabia',
  }

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--muted)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{isAr ? 'أسئلة شائعة' : 'FAQ'}</span>
          <h2 className="section-title">{tx(heading ?? defaultHeading)}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{tx(defaultSub)}</p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                background: open === i ? 'var(--background)' : 'var(--card)',
                transition: 'background 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 22px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: isAr ? 'right' : 'left',
                  gap: '12px',
                  direction: isAr ? 'rtl' : 'ltr',
                }}
              >
                <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--foreground)', flex: 1 }}>
                  {tx(f.q)}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={2.5}
                  color="var(--primary)"
                  style={{
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s',
                    flexShrink: 0,
                  }}
                />
              </button>

              {open === i && (
                <div
                  style={{
                    padding: '0 22px 18px',
                    paddingTop: '14px',
                    fontSize: '0.88rem',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.8',
                    borderTop: '1px solid var(--border)',
                    direction: isAr ? 'rtl' : 'ltr',
                  }}
                >
                  {tx(f.a)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
