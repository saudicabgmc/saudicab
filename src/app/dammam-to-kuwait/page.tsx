'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { dammamToKuwaitFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/dammamToKuwaitPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqSubheading = {
  en: 'Clear answers about the Dammam to Kuwait City crossing — the border, documents and private transfer booking.',
  ar: 'إجابات واضحة حول عبور الدمام إلى مدينة الكويت — الحدود والمستندات وحجز النقل الخاص.',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Dammam to Kuwait City.
Pickup location:
Destination in Kuwait:
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Documentation/special requirements: `

export default function DammamToKuwaitPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Kuwait City"
      breadcrumbLabel="Dammam to Kuwait City"
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
      faqs={dammamToKuwaitFaqs}
      faqSubheading={faqSubheading}
      waMessage={waMessage}
    />
  )
}
