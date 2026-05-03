import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Makkah to Dammam Taxi | Private Cab Mecca to Dammam — Saudi Cabs GMC',
  description: 'Book a private taxi from Makkah to Dammam. ~870 km return journey from the Holy City to Eastern Province. Fixed price, door-to-door, 24/7. Book via WhatsApp.',
  keywords: [
    'makkah to dammam taxi',
    'makkah to dammam distance',
    'taxi from mecca to dammam',
    'مكة الدمام تاكسي',
    'كاب من مكة إلى الدمام',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-to-dammam' },
  openGraph: {
    title: 'Makkah to Dammam Taxi | Private Cab — Saudi Cabs GMC',
    description: 'Direct private taxi from Makkah to Dammam. ~870 km, fixed price, 24/7.',
    url: 'https://saudicabsgmc.com/makkah-to-dammam',
    images: [{ url: '/location/makkah.webp', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
