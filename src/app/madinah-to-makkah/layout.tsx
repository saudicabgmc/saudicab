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
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
