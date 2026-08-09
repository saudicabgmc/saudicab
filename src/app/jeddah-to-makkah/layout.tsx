import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeddah to Makkah Taxi | Cab from Jeddah to Mecca – Saudi Cabs GMC',
  description:
    'Fast taxi from Jeddah to Makkah. ~50 min, fixed price, no hidden fees. Airport and city pickups. Available 24/7. Book via WhatsApp.',
  keywords: [
    'jeddah to makkah taxi',
    'jeddah to mecca cab',
    'taxi from jeddah',
    'جدة إلى مكة تاكسي',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/jeddah-to-makkah' },
  openGraph: {
    title: 'Jeddah to Makkah Taxi | Cab from Jeddah to Mecca – Saudi Cabs GMC',
    description:
      'Fast taxi from Jeddah to Makkah. ~50 min, fixed price, no hidden fees. Airport and city pickups. Available 24/7. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/jeddah-to-makkah',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Jeddah to Makkah Taxi | Cab from Jeddah to Mecca – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
