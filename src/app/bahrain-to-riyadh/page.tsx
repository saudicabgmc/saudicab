'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { bahrainToRiyadhFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/bahrainToRiyadhPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

export default function BahrainToRiyadhPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Riyadh"
      breadcrumbLabel="Bahrain to Riyadh"
      originCityLabel=""
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
      faqs={bahrainToRiyadhFaqs}
    />
  )
}
