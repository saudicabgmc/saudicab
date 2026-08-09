import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Makkah to Jeddah Airport Taxi | Mecca to KAIA Transfer – Saudi Cabs GMC',
  description:
    'Reliable taxi from Makkah to Jeddah Airport (KAIA). Fixed price, ~55 min. On-time guarantee for all departures. Book via WhatsApp 24/7.',
  keywords: [
    'makkah to jeddah airport',
    'mecca to kaia taxi',
    'مكة إلى مطار جدة',
    'تاكسي مكة مطار جدة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-to-jeddah-airport' },
  openGraph: {
    title: 'Makkah to Jeddah Airport Taxi | Mecca to KAIA Transfer – Saudi Cabs GMC',
    description:
      'Reliable taxi from Makkah to Jeddah Airport (KAIA). Fixed price, ~55 min. On-time guarantee for all departures. Book via WhatsApp 24/7.',
    url: 'https://saudicabsgmc.com/makkah-to-jeddah-airport',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Makkah to Jeddah Airport Taxi | Mecca to KAIA Transfer – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
