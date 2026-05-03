import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Taif to Makkah Taxi | Mountain to Holy City Transfer – Saudi Cabs GMC',
  description: 'Private cab from Taif to Makkah. ~1.5 hr scenic mountain descent, fixed price, door-to-door. Pickup from any Taif hotel or address. 24/7 available. Book via WhatsApp.',
  keywords: ['taif to makkah taxi', 'taif mecca cab', 'الطائف مكة تاكسي', 'نقل الطائف مكة المكرمة'],
  alternates: { canonical: 'https://saudicabsgmc.com/taif-to-makkah' },
  openGraph: { title: 'Taif to Makkah Taxi – Saudi Cabs GMC', description: 'Scenic mountain descent from Taif to Makkah. Fixed price, 24/7.', url: 'https://saudicabsgmc.com/taif-to-makkah' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
