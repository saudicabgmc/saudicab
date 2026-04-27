import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taxi Service in Makkah | Airport Transfer, Umrah & Intercity Cab – Saudi Cabs GMC',
  description:
    'Best taxi service in Makkah (Mecca). Book cab to Holy Mosque, Jeddah Airport transfers, Umrah trips, Mina & Arafat. Fixed prices, 24/7. Book via WhatsApp now.',
  keywords: [
    'taxi makkah', 'cab mecca', 'taxi mecca', 'makkah airport transfer',
    'jeddah airport to makkah', 'umrah taxi', 'hajj transport makkah',
    'private driver makkah', 'makkah hotel transfer', 'saudi cabs makkah',
    'تاكسي مكة', 'سيارة أجرة مكة المكرمة', 'نقل مطار جدة مكة', 'تاكسي عمرة',
  ],
  alternates: {
    canonical: 'https://saudicabsgmc.com/makkah-taxi-service',
  },
  openGraph: {
    title: 'Taxi Service in Makkah – Saudi Cabs GMC',
    description: 'Book taxi in Makkah. Umrah transfers, Jeddah Airport, Holy Mosque. Fixed prices 24/7.',
    url: 'https://saudicabsgmc.com/makkah-taxi-service',
  },
}

export default function MakkahLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
