'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToDohaFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToDohaPageData'

const theme = { dark: '#0b3d2e', dark2: '#145c44', accent: '#D4AF37' }

export default function RiyadhToDohaPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Doha"
      breadcrumbLabel="Riyadh to Doha"
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
      faqs={riyadhToDohaFaqs}
    />
  )
}
