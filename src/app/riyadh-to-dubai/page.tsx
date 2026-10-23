'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToDubaiFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToDubaiPageData'

const theme = { dark: '#071f17', dark2: '#0b3d2e', accent: '#D4AF37' }

const faqSubheading = {
  en: 'Clear answers about driving from Riyadh to Dubai — the border crossing, documents and private transfer booking.',
  ar: 'إجابات واضحة حول القيادة من الرياض إلى دبي — عبور الحدود والمستندات وحجز النقل الخاص.',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Riyadh to Dubai.
Travel date:
Passenger count:
Luggage:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon): `

export default function RiyadhToDubaiPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Dubai"
      breadcrumbLabel="Riyadh to Dubai"
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
      faqs={riyadhToDubaiFaqs}
      faqSubheading={faqSubheading}
      waMessage={waMessage}
    />
  )
}
