import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hajj & Umrah Transport Saudi Arabia | Makkah, Madinah & Holy Sites – Saudi Cabs GMC',
  description:
    'Dedicated Hajj and Umrah taxi service in Saudi Arabia. Transfers between Makkah, Madinah, Mina, Arafat & Muzdalifah. Licensed vehicles, 24/7 pilgrimage transport. Book via WhatsApp.',
  keywords: [
    'hajj transport',
    'umrah taxi',
    'makkah madinah taxi',
    'pilgrimage transport saudi arabia',
    'mina arafat transfer',
    'نقل الحج والعمرة',
    'تاكسي عمرة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/hajj-umrah-transport' },
  openGraph: {
    title: 'Hajj & Umrah Transport – Saudi Cabs GMC',
    description: 'Dedicated pilgrimage transfers between Makkah, Madinah & the holy sites.',
    url: 'https://saudicabsgmc.com/hajj-umrah-transport',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
