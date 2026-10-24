'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { abuDhabiToRiyadhFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/abuDhabiToRiyadhPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const waMessage = `Hello, I'd like to ask about a private transfer from Abu Dhabi to Riyadh.
Pickup location in Abu Dhabi:
Destination in Riyadh:
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Questions about Saudi entry requirements / vehicle eligibility: `

export default function AbuDhabiToRiyadhPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Riyadh"
      breadcrumbLabel="Abu Dhabi to Riyadh"
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
      faqs={abuDhabiToRiyadhFaqs}
      waMessage={waMessage}
    />
  )
}
