'use client'
import RoutesPage from '@/components/RoutesPage'
import { makkahRoutes } from '@/lib/routesData'
import { makkahRouteFaqs } from '@/lib/routeFaqData'
import { getPricing } from '@/lib/pricingData'

export default function MakkahRoutesPage() {
  return (
    <RoutesPage
      data={makkahRoutes}
      cityKey="makkah"
      faqs={makkahRouteFaqs}
      pricing={getPricing('jed-makkah', 'makkah-jed', 'ziyarat-makkah')}
    />
  )
}
