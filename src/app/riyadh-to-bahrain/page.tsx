'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToBahrainFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToBahrainPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

export default function RiyadhToBahrainPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Bahrain"
      breadcrumbLabel="Riyadh to Bahrain"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToBahrainFaqs}
    />
  )
}
