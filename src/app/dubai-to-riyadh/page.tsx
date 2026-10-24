'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { dubaiToRiyadhFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/dubaiToRiyadhPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqSubheading = {
  en: 'Clear answers about travelling from Dubai to Riyadh — the border crossing, documents and private transfer booking.',
  ar: 'إجابات واضحة حول السفر من دبي إلى الرياض — عبور الحدود والمستندات وحجز النقل الخاص.',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Dubai to Riyadh.
Pickup location in Dubai:
Destination in Riyadh:
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Documentation/cross-border eligibility questions: `

export default function DubaiToRiyadhPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Riyadh"
      breadcrumbLabel="Dubai to Riyadh"
      originCityLabel=""
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
      faqs={dubaiToRiyadhFaqs}
      faqSubheading={faqSubheading}
      waMessage={waMessage}
    />
  )
}
