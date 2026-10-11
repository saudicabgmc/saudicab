'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToMuscatFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToMuscatPageData'

const theme = { dark: '#3a2414', dark2: '#52331c', accent: '#D4AF37' }

export default function RiyadhToMuscatPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Muscat"
      breadcrumbLabel="Riyadh to Muscat"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToMuscatFaqs}
    />
  )
}
