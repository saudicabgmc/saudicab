import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Madinah Airport Taxi | Prince Mohammad Airport to Prophet's Mosque – Saudi Cabs GMC",
  description:
    "Professional taxi from Madinah Airport (MED) to the Prophet's Mosque and all Madinah hotels. ~30 min, fixed price. Name-board meet & greet. Book via WhatsApp.",
  keywords: [
    'madinah airport taxi',
    'med airport transfer',
    'madinah airport to prophets mosque',
    'مطار المدينة تاكسي',
    'نقل مطار المدينة المنورة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/madinah-airport-taxi' },
  openGraph: {
    title: "Madinah Airport Taxi | Prince Mohammad Airport to Prophet's Mosque – Saudi Cabs GMC",
    description:
      "Professional taxi from Madinah Airport (MED) to the Prophet's Mosque and all Madinah hotels. ~30 min, fixed price. Name-board meet & greet. Book via WhatsApp.",
    url: 'https://saudicabsgmc.com/madinah-airport-taxi',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Saudi Cabs GMC – Premium Taxi Service' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
