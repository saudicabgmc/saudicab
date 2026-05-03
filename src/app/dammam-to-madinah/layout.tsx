import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dammam to Madinah Taxi | Private Cab Dammam to Medina — Saudi Cabs GMC',
  description: 'Book a private taxi from Dammam to Madinah. ~1,000 km intercity cab from Eastern Province to the Prophet\'s City. Fixed price, door-to-door, 24/7 Umrah service. Book via WhatsApp.',
  keywords: [
    'dammam to madinah taxi',
    'dammam to medina',
    'taxi from dammam to medina',
    'دمام المدينة تاكسي',
    'كاب من الدمام إلى المدينة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/dammam-to-madinah' },
  openGraph: {
    title: 'Dammam to Madinah Taxi | Private Cab — Saudi Cabs GMC',
    description: 'Direct private taxi from Dammam to Madinah. ~1,000 km, fixed price, 24/7.',
    url: 'https://saudicabsgmc.com/dammam-to-madinah',
    images: [{ url: '/location/madinah.webp', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
