'use client'
import TaifLocationPage from '@/components/TaifLocationPage'
import { taifFaqs } from '@/lib/faqData'

export default function TaifPage() {
  return (
    <TaifLocationPage
      cityName={{ ar: 'الطائف', en: 'Taif' }}
      citySlug="taif-taxi-service"
      citySlogan={{ ar: 'مدينة الورد • رحلات جبلية', en: 'Rose City • Mountain Getaways' }}
      heroImage="/location/taif.webp"
      faqs={taifFaqs}
    />
  )
}
