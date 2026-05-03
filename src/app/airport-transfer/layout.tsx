import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airport Transfer Saudi Arabia | Jeddah, Madinah & Taif Airports',
  description:
    'Professional airport transfer service from all Saudi airports. Name-board pickup, flight tracking, fixed price. Jeddah (KAIA), Madinah (MED) & Taif airports. Book via WhatsApp.',
  keywords: [
    'airport transfer saudi arabia',
    'jeddah airport taxi',
    'madinah airport transfer',
    'kaia taxi',
    'airport pickup makkah',
    'نقل مطار السعودية',
    'تاكسي مطار جدة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/airport-transfer' },
  openGraph: {
    title: 'Airport Transfer Saudi Arabia – Saudi Cabs GMC',
    description: 'Name-board pickup, flight tracking & fixed prices across all Saudi airports.',
    url: 'https://saudicabsgmc.com/airport-transfer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
