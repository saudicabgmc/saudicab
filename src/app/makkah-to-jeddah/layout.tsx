import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Makkah to Jeddah Taxi | Mecca to Jeddah Cab – Saudi Cabs GMC',
  description:
    'Book a taxi from Makkah to Jeddah. ~50 min, fixed price. Drop-off at any Jeddah hotel, mall or the airport. 24/7 service. Book via WhatsApp.',
  keywords: [
    'makkah to jeddah taxi',
    'mecca to jeddah cab',
    'مكة إلى جدة تاكسي',
    'كاب مكة جدة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-to-jeddah' },
  openGraph: {
    title: 'Makkah to Jeddah Taxi | Mecca to Jeddah Cab – Saudi Cabs GMC',
    description:
      'Book a taxi from Makkah to Jeddah. ~50 min, fixed price. Drop-off at any Jeddah hotel, mall or the airport. 24/7 service. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/makkah-to-jeddah',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Makkah to Jeddah Taxi | Mecca to Jeddah Cab – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
