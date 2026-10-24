'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { muscatToRiyadhFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/muscatToRiyadhPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqHeading = {
  en: 'Frequently Asked Questions — Muscat to Riyadh',
  ar: 'أسئلة شائعة — مسقط إلى الرياض',
}

const waMessage = `Hello, I'd like to ask about a Muscat to Riyadh private transfer.
Pickup location in Muscat:
Travel date:
Passenger count:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon):
Please confirm the feasible route (direct via Oman-Saudi border, or via the UAE) for my dates: `

export default function MuscatToRiyadhPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Riyadh"
      breadcrumbLabel="Muscat to Riyadh"
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
      faqs={muscatToRiyadhFaqs}
      faqHeading={faqHeading}
      waMessage={waMessage}
    />
  )
}
