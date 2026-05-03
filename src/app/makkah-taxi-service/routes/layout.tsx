import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Makkah Taxi Routes & Prices | All Routes',
  description: 'All taxi routes from Makkah — to Madinah, Jeddah, Taif, Riyadh, and more. Fixed prices, 24/7 private cab service.',
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-taxi-service/routes' },
}

export default function MakkahRoutesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
