'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { dammamToBahrainFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/dammamToBahrainPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqSubheading = {
  en: 'Clear answers about the Dammam to Bahrain crossing — the King Fahd Causeway, documents and private transfer booking.',
  ar: 'إجابات واضحة حول عبور الدمام إلى البحرين — جسر الملك فهد والمستندات وحجز النقل الخاص.',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Dammam/Khobar to Manama, Bahrain.
Pickup location:
Destination:
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Documentation questions (if any): `

export default function DammamToBahrainPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Bahrain"
      breadcrumbLabel="Dammam to Bahrain"
      originCityLabel="Dammam"
      originCityHref="/dammam-taxi-service"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={dammamToBahrainFaqs}
      faqSubheading={faqSubheading}
      waMessage={waMessage}
      hideFlyingNote
    />
  )
}
