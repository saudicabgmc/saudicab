'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToAbuDhabiFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToAbuDhabiPageData'

const theme = { dark: '#102a1f', dark2: '#1c4a37', accent: '#D4AF37' }

export default function RiyadhToAbuDhabiPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Abu Dhabi"
      breadcrumbLabel="Riyadh to Abu Dhabi"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToAbuDhabiFaqs}
    />
  )
}
