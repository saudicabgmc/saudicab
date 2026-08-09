import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Makkah Ziyarat Tour | Islamic Sites with Private Driver',
  description: 'Book a private driver for Makkah Ziyarat. Visit Jabal Al-Nour, Jabal Thawr, Mina, Arafat & Muzdalifah. Half-day or full-day tours. Fixed price. Book via WhatsApp.',
  keywords: ['makkah ziyarat tour', 'makkah islamic sites tour', 'mecca ziyarat driver', 'jabal al nour taxi', 'جولة زيارات مكة', 'سائق زيارات مكة المكرمة'],
  alternates: { canonical: 'https://saudicabsgmc.com/makkah-ziyarat-tour' },
  openGraph: { title: 'Makkah Ziyarat Tour – Saudi Cabs GMC', description: 'Private driver for Makkah Islamic sites. Jabal Al-Nour, Mina, Arafat & more. Fixed price.', url: 'https://saudicabsgmc.com/makkah-ziyarat-tour', images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Makkah Ziyarat Tour – Saudi Cabs GMC' }] },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
