'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { bahrainToDammamFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/bahrainToDammamPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

export default function BahrainToDammamPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Dammam"
      breadcrumbLabel="Bahrain to Dammam"
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
      faqs={bahrainToDammamFaqs}
    />
  )
}
