import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taif Taxi Routes & Prices | All Routes',
  description: 'All taxi routes from Taif — to Makkah, Jeddah, Madinah, Riyadh, and more. Fixed prices, 24/7 private cab service.',
  alternates: { canonical: 'https://saudicabsgmc.com/taif-taxi-service/routes' },
}

export default function TaifRoutesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
