import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dammam to Makkah Taxi | Private Cab Dammam to Mecca — Saudi Cabs GMC',
  description: 'Book a private taxi from Dammam to Makkah. ~870 km intercity cab from Eastern Province to the Holy City. Fixed price, door-to-door, 24/7. Ideal for Umrah & Hajj. Book via WhatsApp.',
  keywords: [
    'dammam to makkah taxi',
    'dammam to mecca distance',
    'taxi from dammam to mecca',
    'دمام مكة تاكسي',
    'كاب من الدمام إلى مكة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/dammam-to-makkah' },
  openGraph: {
    title: 'Dammam to Makkah Taxi | Private Cab — Saudi Cabs GMC',
    description: 'Direct private taxi from Dammam to Makkah. ~870 km, fixed price, 24/7.',
    url: 'https://saudicabsgmc.com/dammam-to-makkah',
    images: [{ url: '/location/makkah.webp', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
