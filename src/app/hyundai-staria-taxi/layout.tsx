import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Hyundai Staria Taxi Saudi Arabia | 7-Seater Family Van — Saudi Cabs GMC',
  description: 'Book a Hyundai Staria 7-seat van in Makkah, Madinah, Jeddah & Taif. Spacious family taxi for Hajj, Umrah, airport transfers & intercity routes. Fixed price, 24/7. Book via WhatsApp.',
  keywords: ['hyundai staria taxi saudi arabia', 'staria 7 seater makkah', 'family van taxi jeddah airport', 'hyundai staria umrah transport', 'هيونداي ستاريا مكة', 'تاكسي ٧ مقاعد السعودية'],
  alternates: { canonical: 'https://saudicabsgmc.com/hyundai-staria-taxi' },
  openGraph: {
    title: 'Hyundai Staria 7-Seater Taxi — Saudi Cabs GMC',
    description: 'Spacious 7-seat Hyundai Staria family taxi. Fixed price, 24/7 across Saudi Arabia.',
    url: 'https://saudicabsgmc.com/hyundai-staria-taxi',
    images: [{ url: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630 }],
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
