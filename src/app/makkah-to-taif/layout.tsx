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
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
