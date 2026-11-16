'use client'
import FAQSection, { type FAQItem } from './FAQSection'
import PricingSection from './PricingSection'
import FleetSection from './FleetSection'
import { type PricingRoute } from '@/lib/pricingData'
import { vehicleBestFor, type BText } from '@/lib/jeddahPageData'

interface JeddahFleetPricingProps {
  pricing: PricingRoute[]
  cityName: BText
}

export function JeddahFleetPricing({ pricing, cityName }: JeddahFleetPricingProps) {
  if (pricing.length === 0) return null
  return (
    <>
      {/* ── 9. Fleet ── */}
      <FleetSection pricing={pricing} cityName={cityName} showFromPrice={false} bestFor={vehicleBestFor} />

      {/* ── 10. Pricing ── */}
      <PricingSection routes={pricing} heading={{ ar: 'أسعار التاكسي والتوصيل في جدة', en: 'Jeddah Taxi Prices & Transfer Rates' }} />
    </>
  )
}

interface JeddahFaqProps {
  faqs: FAQItem[]
  city: string
}

export function JeddahFaq({ faqs, city }: JeddahFaqProps) {
  return (
    <FAQSection faqs={faqs} heading={{ ar: `أسئلة شائعة حول النقل في ${city}`, en: `Frequently Asked Questions — ${city}` }} />
  )
}
