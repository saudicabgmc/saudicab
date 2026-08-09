import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Makkah to Madinah Taxi | Intercity Cab Mecca to Medina – Saudi Cabs GMC',
  description:
    'Book a private taxi from Makkah to Madinah. Comfortable ~4.5 hr intercity journey, fixed price, professional driver. Ideal for Hajj & Umrah pilgrims. Book via WhatsApp.',
  keywords: [
    'makkah to madinah taxi',
    'mecca to medina cab',
    'intercity taxi saudi arabia',
    'مكة إلى المدينة',
    'تاكسي مكة المدينة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-to-madinah' },
  openGraph: {
    title: 'Makkah to Madinah Taxi | Intercity Cab Mecca to Medina – Saudi Cabs GMC',
    description:
      'Book a private taxi from Makkah to Madinah. Comfortable ~4.5 hr intercity journey, fixed price, professional driver. Ideal for Hajj & Umrah pilgrims. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/makkah-to-madinah',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Makkah to Madinah Taxi | Intercity Cab Mecca to Medina – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
