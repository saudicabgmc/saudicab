import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Madinah Taxi Routes & Prices',
  description: 'All taxi routes from Madinah — to Makkah, Jeddah, Taif, Riyadh, and more. Fixed prices, 24/7 private cab service.',
  alternates: { canonical: 'https://saudicabsgmc.com/madinah-taxi-service/routes' },
}

export default function MadinahRoutesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
