'use client'
import FAQSection, { type FAQItem } from './FAQSection'
import PricingSection from './PricingSection'
import FleetSection from './FleetSection'
import { type PricingRoute } from '@/lib/pricingData'
import { vehicleBestFor, type BText } from '@/lib/makkahPageData'

interface MakkahFleetPricingProps {
  pricing: PricingRoute[]
  cityName: BText
}

export function MakkahFleetPricing({ pricing, cityName }: MakkahFleetPricingProps) {
  if (pricing.length === 0) return null
  return (
    <>
      {/* ── 10. Fleet ── */}
      <FleetSection pricing={pricing} cityName={cityName} showFromPrice={false} bestFor={vehicleBestFor} />

      {/* ── 11. Pricing ── */}
      <PricingSection routes={pricing} heading={{ ar: 'أسعار التاكسي والتوصيل في مكة المكرمة', en: 'Makkah Taxi Prices & Transfer Rates' }} />
    </>
  )
}

interface MakkahFaqProps {
  faqs: FAQItem[]
  city: string
}

export function MakkahFaq({ faqs, city }: MakkahFaqProps) {
  return (
    <FAQSection faqs={faqs} heading={{ ar: `أسئلة شائعة حول النقل في ${city}`, en: `Frequently Asked Questions — ${city}` }} />
  )
}
