'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { dammamToKuwaitFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/dammamToKuwaitPageData'

const theme = { dark: '#0d3b2e', dark2: '#145040', accent: '#D4AF37' }

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
