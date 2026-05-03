import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saudi Arabia Route Map | Taxi Routes | Saudi Cabs GMC',
  description: 'Interactive map of all Saudi Cabs GMC taxi routes across Makkah, Madinah, Jeddah, Taif and Riyadh. Fixed price private transfers — click any city to book instantly.',
}

export default function RoutesMapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
