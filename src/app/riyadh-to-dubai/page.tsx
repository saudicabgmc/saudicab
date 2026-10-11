'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToDubaiFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToDubaiPageData'

const theme = { dark: '#1a1a1a', dark2: '#2b2b2b', accent: '#D4AF37' }

export default function RiyadhToDubaiPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Dubai"
      breadcrumbLabel="Riyadh to Dubai"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToDubaiFaqs}
    />
  )
}
