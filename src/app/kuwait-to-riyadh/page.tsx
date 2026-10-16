'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { kuwaitToRiyadhFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/kuwaitToRiyadhPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

export default function KuwaitToRiyadhPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Riyadh"
      breadcrumbLabel="Kuwait to Riyadh"
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
      faqs={kuwaitToRiyadhFaqs}
    />
  )
}
