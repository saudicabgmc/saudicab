import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Toyota Camry Taxi Saudi Arabia | 4-Seater Sedan — Saudi Cabs GMC',
  description: 'Book a Toyota Camry taxi in Makkah, Madinah, Jeddah & Taif. Comfortable 4-seat sedan for airport transfers, city rides & intercity routes. Fixed price, 24/7. Book via WhatsApp.',
  keywords: ['toyota camry taxi saudi arabia', 'camry cab makkah', 'sedan taxi jeddah airport', 'toyota camry hire madinah', 'تاكسي تويوتا كامري السعودية'],
  alternates: { canonical: 'https://saudicabsgmc.com/toyota-camry-taxi' },
  openGraph: {
    title: 'Toyota Camry Taxi — Saudi Cabs GMC',
    description: 'Comfortable 4-seat Toyota Camry taxi. Fixed price, 24/7 across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/toyota-camry-taxi',
    images: [{ url: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630 }],
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
