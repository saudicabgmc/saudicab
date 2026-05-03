import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeddah Taxi Routes & Prices | All Routes',
  description: 'All taxi routes from Jeddah — to Makkah, Madinah, Taif, Riyadh, and more. Fixed prices, 24/7 private cab service.',
  alternates: { canonical: 'https://saudicabsgmc.com/jeddah-taxi-service/routes' },
}

export default function JeddahRoutesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
