import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeddah to Taif Taxi | Mountain Road Transfer – Saudi Cabs GMC',
  description:
    'Comfortable taxi from Jeddah to Taif. ~1.5 hr mountain drive, fixed price. Experienced drivers on the scenic Al-Hada road. 24/7 available. Book via WhatsApp.',
  keywords: [
    'jeddah to taif taxi',
    'jeddah taif cab',
    'جدة الطائف تاكسي',
    'نقل جدة الطائف',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/jeddah-to-taif' },
  openGraph: {
    title: 'Jeddah to Taif Taxi | Mountain Road Transfer – Saudi Cabs GMC',
    description:
      'Comfortable taxi from Jeddah to Taif. ~1.5 hr mountain drive, fixed price. Experienced drivers on the scenic Al-Hada road. 24/7 available. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/jeddah-to-taif',
    images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Jeddah to Taif Taxi | Mountain Road Transfer – Saudi Cabs GMC' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
