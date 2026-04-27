'use client'
import RoutesPage from '@/components/RoutesPage'
import { jeddahRoutes } from '@/lib/routesData'
import { jeddahRouteFaqs } from '@/lib/routeFaqData'
import { getPricing } from '@/lib/pricingData'

export default function JeddahRoutesPage() {
  return (
    <RoutesPage
      data={jeddahRoutes}
      cityKey="jeddah"
      faqs={jeddahRouteFaqs}
      pricing={getPricing('jed-makkah', 'makkah-jed', 'jed-madinah')}
    />
  )
}
