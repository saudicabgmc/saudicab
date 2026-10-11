'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { dammamToBahrainFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/dammamToBahrainPageData'

const theme = { dark: '#7a0c1e', dark2: '#9e1226', accent: '#D4AF37' }

export default function DammamToBahrainPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Bahrain"
      breadcrumbLabel="Dammam to Bahrain"
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
      faqs={dammamToBahrainFaqs}
    />
  )
}
