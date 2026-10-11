'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToBahrainFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToBahrainPageData'

const theme = { dark: '#7a0c1e', dark2: '#9e1226', accent: '#D4AF37' }

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
