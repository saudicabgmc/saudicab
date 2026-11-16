'use client'
import FAQSection, { type FAQItem } from './FAQSection'
import PricingSection from './PricingSection'
import FleetSection from './FleetSection'
import { type PricingRoute } from '@/lib/pricingData'
import { priceAnswer, type BText } from '@/lib/madinahPageData'
import { useLang } from '@/contexts/LanguageContext'

interface MadinahFleetPricingProps {
  pricing: PricingRoute[]
  cityName: BText
}

export function MadinahFleetPricing({ pricing, cityName }: MadinahFleetPricingProps) {
  const { lang, isAr } = useLang()
  const tx = (b: BText) => b[lang]

  if (pricing.length === 0) return null
  return (
    <>
      {/* ── 11. Fleet ── */}
      <FleetSection pricing={pricing} cityName={cityName} showFromPrice={false} />

      {/* ── 12. Pricing ── */}
      <PricingSection routes={pricing} heading={{ ar: 'أسعار التاكسي والنقل في المدينة المنورة', en: 'Madinah Taxi Prices & Transfer Rates' }} />
      <div className="container" style={{ maxWidth: '700px', textAlign: 'center', padding: '0 24px 70px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '10px' }}>
          {isAr ? 'كم تكلفة التاكسي في المدينة المنورة؟' : 'How much does a taxi cost in Madinah?'}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.8, margin: 0 }}>{tx(priceAnswer)}</p>
      </div>
    </>
  )
}

interface MadinahFaqProps {
  faqs: FAQItem[]
  city: string
}

export function MadinahFaq({ faqs, city }: MadinahFaqProps) {
  return (
    <FAQSection faqs={faqs} heading={{ ar: `أسئلة شائعة حول النقل في ${city}`, en: `Frequently Asked Questions — ${city}` }} />
  )
}
