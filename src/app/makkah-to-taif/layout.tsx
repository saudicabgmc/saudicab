import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Makkah to Taif Taxi | Mecca to Taif Intercity Cab – Saudi Cabs GMC',
  description:
    'Book a taxi from Makkah to Taif. ~1.5 hr, fixed price. Comfortable ride through the scenic mountain route. Available 24/7. Book via WhatsApp.',
  keywords: [
    'makkah to taif taxi',
    'mecca to taif cab',
    'مكة الطائف تاكسي',
    'نقل مكة الطائف',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-to-taif' },
  openGraph: {
    title: 'Makkah to Taif Taxi | Mecca to Taif Intercity Cab – Saudi Cabs GMC',
    description:
      'Book a taxi from Makkah to Taif. ~1.5 hr, fixed price. Comfortable ride through the scenic mountain route. Available 24/7. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/makkah-to-taif',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Makkah to Taif Taxi | Mecca to Taif Intercity Cab – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
