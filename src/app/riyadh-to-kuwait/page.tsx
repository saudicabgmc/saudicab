'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToKuwaitFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToKuwaitPageData'

const theme = { dark: '#0d3b2e', dark2: '#145040', accent: '#D4AF37' }

export default function RiyadhToKuwaitPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Kuwait City"
      breadcrumbLabel="Riyadh to Kuwait City"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToKuwaitFaqs}
    />
  )
}
