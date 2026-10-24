'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { dohaToRiyadhFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/dohaToRiyadhPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqSubheading = {
  en: 'Clear answers about travelling from Doha to Riyadh — the border crossing, documents and private transfer booking.',
  ar: 'إجابات واضحة حول السفر من الدوحة إلى الرياض — عبور الحدود والمستندات وحجز النقل الخاص.',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Doha to Riyadh.
Pickup location in Doha:
Destination in Riyadh:
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Documentation/cross-border eligibility questions: `

export default function DohaToRiyadhPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Riyadh"
      breadcrumbLabel="Doha to Riyadh"
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
      faqs={dohaToRiyadhFaqs}
      faqSubheading={faqSubheading}
      waMessage={waMessage}
    />
  )
}
