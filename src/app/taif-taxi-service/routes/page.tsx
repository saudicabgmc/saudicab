'use client'
import RoutesPage from '@/components/RoutesPage'
import { taifRoutes } from '@/lib/routesData'
import { taifRouteFaqs } from '@/lib/routeFaqData'

export default function TaifRoutesPage() {
  return <RoutesPage data={taifRoutes} cityKey="taif" faqs={taifRouteFaqs} />
}
