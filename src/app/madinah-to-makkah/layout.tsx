import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Madinah to Makkah Taxi | Medina to Mecca Intercity Cab – Saudi Cabs GMC',
  description:
    'Private taxi from Madinah to Makkah. Fixed price, ~4.5 hr journey. Comfortable vehicles for pilgrims and families. 24/7 service. Book via WhatsApp.',
  keywords: [
    'madinah to makkah taxi',
    'medina to mecca cab',
    'المدينة إلى مكة تاكسي',
    'نقل المدينة مكة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/madinah-to-makkah' },
  openGraph: {
    title: 'Madinah to Makkah Taxi | Medina to Mecca Intercity Cab – Saudi Cabs GMC',
    description:
      'Private taxi from Madinah to Makkah. Fixed price, ~4.5 hr journey. Comfortable vehicles for pilgrims and families. 24/7 service. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/madinah-to-makkah',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Madinah to Makkah Taxi | Medina to Mecca Intercity Cab – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
