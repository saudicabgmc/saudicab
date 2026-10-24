'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { kuwaitToDammamFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/kuwaitToDammamPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqHeading = {
  en: 'Frequently Asked Questions — Kuwait to Dammam',
  ar: 'أسئلة شائعة — من الكويت إلى الدمام',
}

const waMessage = `Hello, I'd like to ask about a Kuwait to Dammam private transfer.
Pickup location in Kuwait:
Destination (Dammam or Al Khobar):
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Please confirm route feasibility, documentation and current fare: `

export default function KuwaitToDammamPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Dammam"
      breadcrumbLabel="Kuwait to Dammam"
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
      faqs={kuwaitToDammamFaqs}
      faqHeading={faqHeading}
      waMessage={waMessage}
    />
  )
}
