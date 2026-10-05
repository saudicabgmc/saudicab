'use client'
import DammamLocationPage from '@/components/DammamLocationPage'
import { dammamFaqs } from '@/lib/faqData'

export default function DammamPage() {
  return (
    <DammamLocationPage
      cityName={{ ar: 'الدمام', en: 'Dammam' }}
      citySlug="dammam-taxi-service"
      citySlogan={{ ar: 'بوابة المنطقة الشرقية', en: "Gateway to Saudi Arabia's Eastern Province" }}
      faqs={dammamFaqs}
    />
  )
}
