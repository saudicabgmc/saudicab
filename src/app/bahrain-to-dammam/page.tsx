'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { bahrainToDammamFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/bahrainToDammamPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqHeading = {
  en: 'Frequently Asked Questions — Bahrain to Dammam',
  ar: 'أسئلة شائعة — من البحرين إلى الدمام',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Bahrain to Dammam.
Pickup location in Bahrain:
Destination (Dammam or Khobar):
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Please confirm current causeway licensing eligibility and price: `

export default function BahrainToDammamPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Dammam"
      breadcrumbLabel="Bahrain to Dammam"
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
      faqs={bahrainToDammamFaqs}
      faqHeading={faqHeading}
      waMessage={waMessage}
      hideFlyingNote
    />
  )
}
