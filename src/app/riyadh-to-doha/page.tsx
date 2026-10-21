'use client'
import InternationalTransferPage from '@/components/InternationalTransferPage'
import { riyadhToDohaFaqs } from '@/lib/faqData'
import {
  heroContent, quickFacts, journeySection, requirementsSection,
  whyPrivateCarSection, vehicleOptions, bookingSteps, relatedLink,
} from '@/lib/riyadhToDohaPageData'

const theme = { dark: '#0b3d2e', dark2: '#145c44', accent: '#D4AF37' }

const faqSubheading = {
  en: 'Clear answers about driving from Riyadh to Doha — the border crossing, documents and private transfer booking.',
  ar: 'إجابات واضحة حول القيادة من الرياض إلى الدوحة — عبور الحدود والمستندات وحجز النقل الخاص.',
}

const waMessage = `Hello, I'd like to ask about a private transfer from Riyadh to Doha.
Travel date:
Passenger count:
Luggage:
Preferred vehicle (Sedan / Hyundai Staria / GMC Yukon): `

export default function RiyadhToDohaPage() {
  return (
    <InternationalTransferPage
      destinationLabel="Doha"
      breadcrumbLabel="Riyadh to Doha"
      heroImage="/hero/riyadh-to-doha-hero-saudi-cabs-gmc.webp"
      theme={theme}
      heroContent={heroContent}
      quickFacts={quickFacts}
      journeySection={journeySection}
      requirementsSection={requirementsSection}
      whyPrivateCarSection={whyPrivateCarSection}
      vehicleOptions={vehicleOptions}
      bookingSteps={bookingSteps}
      relatedLink={relatedLink}
      faqs={riyadhToDohaFaqs}
      faqSubheading={faqSubheading}
      waMessage={waMessage}
    />
  )
}
