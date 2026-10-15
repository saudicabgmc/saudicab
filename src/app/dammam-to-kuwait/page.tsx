'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { dammamToKuwaitFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/dammamToKuwaitPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

export default function DammamToKuwaitPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Kuwait City"
      breadcrumbLabel="Dammam to Kuwait City"
      originCityLabel="Dammam"
      originCityHref="/dammam-taxi-service"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={dammamToKuwaitFaqs}
    />
  )
}
