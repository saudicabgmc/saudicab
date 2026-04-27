'use client'
import RoutesPage from '@/components/RoutesPage'
import { madinahRoutes } from '@/lib/routesData'
import { madinahRouteFaqs } from '@/lib/routeFaqData'
import { getPricing } from '@/lib/pricingData'

export default function MadinahRoutesPage() {
  return (
    <RoutesPage
      data={madinahRoutes}
      cityKey="madinah"
      faqs={madinahRouteFaqs}
      pricing={getPricing('jed-madinah', 'mad-hotel', 'hotel-mad', 'ziyarat-madinah')}
    />
  )
}
