'use client'
import RiyadhLocationPage from '@/components/RiyadhLocationPage'
import { riyadhFaqs } from '@/lib/faqData'

export default function RiyadhPage() {
  return (
    <RiyadhLocationPage
      cityName={{ ar: 'الرياض', en: 'Riyadh' }}
      citySlug="riyadh-taxi-service"
      citySlogan={{ ar: 'العاصمة • وسط المملكة العربية السعودية', en: 'Capital City • Central Saudi Arabia' }}
      faqs={riyadhFaqs}
    />
  )
}
