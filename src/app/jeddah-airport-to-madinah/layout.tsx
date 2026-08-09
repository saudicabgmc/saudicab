import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeddah Airport to Madinah Taxi | KAIA to Medina Transfer – Saudi Cabs GMC',
  description:
    'Private taxi from Jeddah Airport (KAIA) to Madinah. ~4 hr journey, fixed price, professional driver. Ideal for pilgrims and families. Available 24/7. Book via WhatsApp.',
  keywords: [
    'jeddah airport to madinah',
    'kaia to medina taxi',
    'مطار جدة المدينة',
    'تاكسي مطار جدة إلى المدينة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/jeddah-airport-to-madinah' },
  openGraph: {
    title: 'Jeddah Airport to Madinah Taxi | KAIA to Medina Transfer – Saudi Cabs GMC',
    description:
      'Private taxi from Jeddah Airport (KAIA) to Madinah. ~4 hr journey, fixed price, professional driver. Ideal for pilgrims and families. Available 24/7. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/jeddah-airport-to-madinah',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Jeddah Airport to Madinah Taxi | KAIA to Medina Transfer – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
