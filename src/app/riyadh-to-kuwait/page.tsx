'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToKuwaitFaqs } from '@/lib/riyadhToKuwaitFaqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToKuwaitPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const waMessage = `Hello, I'd like to ask about a private transfer from Riyadh to Kuwait City.
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Border documentation questions (if any): `

export default function RiyadhToKuwaitPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Kuwait City"
      breadcrumbLabel="Riyadh to Kuwait City"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToKuwaitFaqs}
      waMessage={waMessage}
    />
  )
}
