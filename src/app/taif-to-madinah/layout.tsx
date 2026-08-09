import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taif to Madinah Taxi | Intercity Cab to Medina – Saudi Cabs GMC',
  description:
    'Private taxi from Taif to Madinah. ~5 hr intercity journey, fixed price. Comfortable, air-conditioned vehicles. Ideal for pilgrims and families. Book via WhatsApp.',
  keywords: [
    'taif to madinah taxi',
    'taif medina cab',
    'الطائف المدينة تاكسي',
    'نقل الطائف المدينة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/taif-to-madinah' },
  openGraph: {
    title: 'Taif to Madinah Taxi | Intercity Cab to Medina – Saudi Cabs GMC',
    description:
      'Private taxi from Taif to Madinah. ~5 hr intercity journey, fixed price. Comfortable, air-conditioned vehicles. Ideal for pilgrims and families. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/taif-to-madinah',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Taif to Madinah Taxi | Intercity Cab to Medina – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
