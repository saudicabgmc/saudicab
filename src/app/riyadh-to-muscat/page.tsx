'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToMuscatFaqs } from '@/lib/riyadhToMuscatFaqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToMuscatPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const waMessage = `Hello, I'd like to ask about a private transfer from Riyadh to Muscat.
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Feasibility / border documentation questions (if any): `

export default function RiyadhToMuscatPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Muscat"
      breadcrumbLabel="Riyadh to Muscat"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToMuscatFaqs}
      waMessage={waMessage}
    />
  )
}
