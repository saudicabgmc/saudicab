'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToAbuDhabiFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToAbuDhabiPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

export default function RiyadhToAbuDhabiPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Abu Dhabi"
      breadcrumbLabel="Riyadh to Abu Dhabi"
      heroImage="/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp"
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
