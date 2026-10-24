'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { bahrainToRiyadhFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/bahrainToRiyadhPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqSubheading = {
  en: 'Clear answers about travelling from Bahrain to Riyadh — the causeway crossing, documents and private transfer booking.',
  ar: 'إجابات واضحة حول السفر من البحرين إلى الرياض — عبور الجسر والمستندات وحجز النقل الخاص.',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Bahrain to Riyadh.
Pickup location in Bahrain:
Destination in Riyadh:
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Documentation/special requirements: `

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
      faqSubheading={faqSubheading}
      waMessage={waMessage}
    />
  )
}
