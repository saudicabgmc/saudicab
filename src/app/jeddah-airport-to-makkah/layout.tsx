import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeddah Airport to Makkah Taxi | KAIA to Mecca Transfer – Saudi Cabs GMC',
  description:
    'Book a taxi from Jeddah Airport (KAIA) to Makkah. Professional meet-and-greet, ~55 min fixed-price transfer. 24/7 available for all flights. Book via WhatsApp.',
  keywords: [
    'jeddah airport to makkah',
    'kaia to mecca taxi',
    'jeddah airport transfer makkah',
    'مطار جدة مكة',
    'تاكسي مطار جدة إلى مكة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/jeddah-airport-to-makkah' },
  openGraph: {
    title: 'Jeddah Airport to Makkah Taxi | KAIA to Mecca Transfer – Saudi Cabs GMC',
    description:
      'Book a taxi from Jeddah Airport (KAIA) to Makkah. Professional meet-and-greet, ~55 min fixed-price transfer. 24/7 available for all flights. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/jeddah-airport-to-makkah',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Jeddah Airport to Makkah Taxi | KAIA to Mecca Transfer – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
