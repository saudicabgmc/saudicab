import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Driver Saudi Arabia | Chauffeur in Makkah, Madinah, Jeddah & Taif',
  description:
    'Book a private driver or chauffeur in Saudi Arabia. Half-day, full-day and multi-day hire. Makkah, Madinah, Jeddah and Taif. Professional, bilingual, formally dressed. Fixed price.',
  keywords: [
    'private driver saudi arabia',
    'chauffeur makkah',
    'personal driver jeddah',
    'driver for hire madinah',
    'سائق خاص السعودية',
    'شوفير مكة',
    'سائق خاص جدة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/private-driver' },
  openGraph: {
    title: 'Private Driver Saudi Arabia – Saudi Cabs GMC',
    description:
      'Professional chauffeur hire — half-day, full-day, multi-day across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/private-driver',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
