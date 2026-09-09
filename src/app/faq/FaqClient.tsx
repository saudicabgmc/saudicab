'use client'
import FAQSection from '@/components/FAQSection'
import { homeFaqs, makkahFaqs, madinahFaqs, jeddahFaqs, taifFaqs } from '@/lib/faqData'
import { useLang } from '@/contexts/LanguageContext'

export default function FaqClient() {
  const { isAr } = useLang()

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
            {isAr ? 'الأسئلة الشائعة' : 'FAQ'}
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
            {isAr
              ? <>الأسئلة الأكثر <span style={{ color: 'var(--primary)' }}>شيوعاً</span></>
              : <>Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span></>
            }
          </h1>
          <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
            {isAr
              ? 'كل ما تحتاج لمعرفته حول حجز تاكسي بسعر ثابت أو سائق خاص في جميع أنحاء المملكة العربية السعودية.'
              : 'Everything you need to know about booking a fixed-price taxi or private driver across Saudi Arabia.'
            }
          </p>
        </div>
      </section>

      <FAQSection
        faqs={homeFaqs}
        heading={{ en: 'General Questions', ar: 'أسئلة عامة' }}
        noSchema
      />
      <FAQSection
        faqs={makkahFaqs}
        heading={{ en: 'Makkah', ar: 'مكة المكرمة' }}
        noSchema
      />
      <FAQSection
        faqs={madinahFaqs}
        heading={{ en: 'Madinah', ar: 'المدينة المنورة' }}
        noSchema
      />
      <FAQSection
        faqs={jeddahFaqs}
        heading={{ en: 'Jeddah', ar: 'جدة' }}
        noSchema
      />
      <FAQSection
        faqs={taifFaqs}
        heading={{ en: 'Taif', ar: 'الطائف' }}
        noSchema
      />

      {/* CTA */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>
            {isAr ? 'هل لا يزال لديك استفسار؟' : 'Still Have Questions?'}
          </h2>
          <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>
            {isAr
              ? 'راسلنا عبر واتساب واحصل على سعر ثابت وتأكيد فوري خلال دقائق.'
              : 'Message us on WhatsApp and get a fixed price in minutes.'
            }
          </p>
          <a
            href={`https://wa.me/923097811785?text=${encodeURIComponent(isAr ? 'السلام عليكم، لدي استفسار حول حجز رحلة' : "Hello, I have a question about booking a taxi")}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#25D366', color: 'white', fontWeight: '800',
              padding: '14px 36px', borderRadius: '12px', textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            {isAr ? 'اسأل عبر واتساب' : 'Ask on WhatsApp'}
          </a>
        </div>
      </section>
    </main>
  )
}
