'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToBahrainFaqs } from '@/lib/riyadhToBahrainFaqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToBahrainPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqSubheading = {
  en: 'Clear answers about driving from Riyadh to Bahrain — the King Fahd Causeway, documents and private transfer booking.',
  ar: 'إجابات واضحة حول القيادة من الرياض إلى البحرين — جسر الملك فهد والمستندات وحجز النقل الخاص.',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Riyadh to Bahrain.
Travel date:
Pickup location:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon): `

export default function RiyadhToBahrainPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Bahrain"
      breadcrumbLabel="Riyadh to Bahrain"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToBahrainFaqs}
      faqSubheading={faqSubheading}
      waMessage={waMessage}
    />
  )
}
