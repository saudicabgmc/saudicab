'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToDohaFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToDohaPageData'

const theme = { dark: '#5c0e26', dark2: '#7a1431', accent: '#D4AF37' }

export default function RiyadhToDohaPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Doha"
      breadcrumbLabel="Riyadh to Doha"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToDohaFaqs}
    />
  )
}
