import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saudi Arabia Route Map | All Taxi Routes',
  description: 'Interactive map of Saudi Cabs GMC intercity and airport taxi routes across Makkah, Madinah, Jeddah, Taif and Riyadh. Fixed, route-based fares confirmed before booking — click any city or route to book via WhatsApp.',
  alternates: { canonical: 'https://saudicabsgmc.com/routes-map' },
}

export default function RoutesMapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
