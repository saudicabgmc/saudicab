import type { Metadata } from 'next'
import FAQSection from '@/components/FAQSection'
import { homeFaqs, makkahFaqs, madinahFaqs, jeddahFaqs, taifFaqs } from '@/lib/faqData'

export const metadata: Metadata = {
  title: 'FAQ | Saudi Cabs GMC — Taxi & Private Driver Questions Answered',
  description: 'Answers to the most common questions about booking a taxi or private driver with Saudi Cabs GMC across Makkah, Madinah, Jeddah, and Taif — pricing, airport pickups, Hajj & Umrah transport, and more.',
  alternates: { canonical: 'https://saudicabsgmc.com/faq' },
  openGraph: {
    title: 'Frequently Asked Questions — Saudi Cabs GMC',
    description: 'Everything you need to know about booking a fixed-price taxi or private driver in Saudi Arabia.',
    url: 'https://saudicabsgmc.com/faq',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'FAQ — Saudi Cabs GMC' }],
  },
}

const allFaqs = [...homeFaqs, ...makkahFaqs, ...madinahFaqs, ...jeddahFaqs, ...taifFaqs]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://saudicabsgmc.com/faq#webpage',
  name: 'Frequently Asked Questions — Saudi Cabs GMC',
  description: 'Answers to the most common questions about booking a taxi or private driver with Saudi Cabs GMC across Makkah, Madinah, Jeddah, and Taif.',
  url: 'https://saudicabsgmc.com/faq',
  isPartOf: { '@id': 'https://saudicabsgmc.com/#website' },
  about: { '@id': 'https://saudicabsgmc.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saudicabsgmc.com' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://saudicabsgmc.com/faq' },
    ],
  },
  mainEntity: allFaqs.map(f => ({
    '@type': 'Question',
    name: f.q.en,
    acceptedAnswer: { '@type': 'Answer', text: f.a.en },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)', paddingTop: '80px' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #071f17, #0B3D2E)', color: 'white', padding: '64px 0 48px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="section-tag" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: 'var(--primary)' }}>
              FAQ
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', margin: '16px 0', lineHeight: 1.2 }}>
              Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
            </h1>
            <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}>
              Everything you need to know about booking a fixed-price taxi or private driver across Saudi Arabia.
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>Still Have Questions?</h2>
            <p style={{ opacity: 0.85, marginBottom: '28px', lineHeight: 1.7 }}>
              Message us on WhatsApp and get a fixed price in minutes.
            </p>
            <a
              href="https://wa.me/966569487569?text=Hello%2C%20I%20have%20a%20question%20about%20booking%20a%20taxi"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#25D366', color: 'white', fontWeight: '800',
                padding: '14px 36px', borderRadius: '12px', textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              Ask on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
