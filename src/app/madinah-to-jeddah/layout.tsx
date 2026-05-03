import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Madinah to Jeddah Taxi | Medina to Jeddah Intercity Transfer – Saudi Cabs GMC',
  description:
    'Private taxi from Madinah to Jeddah. ~4 hr journey, fixed price. Comfortable vehicles for families and pilgrims. 24/7 service. Book via WhatsApp.',
  keywords: [
    'madinah to jeddah taxi',
    'medina to jeddah cab',
    'المدينة جدة تاكسي',
    'نقل المدينة جدة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/madinah-to-jeddah' },
  openGraph: {
    title: 'Madinah to Jeddah Taxi | Medina to Jeddah Intercity Transfer – Saudi Cabs GMC',
    description:
      'Private taxi from Madinah to Jeddah. ~4 hr journey, fixed price. Comfortable vehicles for families and pilgrims. 24/7 service. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/madinah-to-jeddah',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
