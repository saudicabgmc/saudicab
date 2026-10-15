'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToDubaiFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToDubaiPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

export default function RiyadhToDubaiPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Dubai"
      breadcrumbLabel="Riyadh to Dubai"
      heroImage="/fleet/gmc-yukon-exterior-front-grille-saudi-cabs-gmc.webp"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToDubaiFaqs}
    />
  )
}
