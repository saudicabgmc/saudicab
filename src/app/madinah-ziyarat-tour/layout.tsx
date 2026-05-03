import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Madinah Ziyarat Tour | Islamic Sites with Private Driver — Saudi Cabs GMC',
  description: 'Explore sacred Islamic sites in Madinah with a private driver. Masjid an-Nabawi, Quba Mosque, Uhud Mountain, Masjid al-Qiblatayn. Fixed price, half-day or full-day tour. Book via WhatsApp.',
  keywords: ['madinah ziyarat tour', 'madinah islamic sites driver', 'ziyarat madinah private car', 'uhud mountain tour madinah', 'قباء مسجد القبلتين زيارات المدينة'],
  alternates: { canonical: 'https://saudicabsgmc.com/madinah-ziyarat-tour' },
  openGraph: {
    title: 'Madinah Ziyarat Tour — Saudi Cabs GMC',
    description: 'Visit all sacred Madinah sites with a private driver. Fixed price, half-day or full-day.',
    url: 'https://saudicabsgmc.com/madinah-ziyarat-tour',
    images: [{ url: '/location/madinah.webp', width: 1200, height: 630 }],
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
