import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Taxi Service in Madinah | Prophet's Mosque Transfer & Airport Cab – Saudi Cabs GMC",
  description:
    "Best taxi service in Madinah (Medina). Book cab to Prophet's Mosque, Madinah Airport, Quba, Uhud & Ziyarat tours. Fixed prices, 24/7. Book via WhatsApp now.",
  keywords: [
    'taxi madinah', 'cab medina', 'taxi medina', 'madinah airport transfer',
    "prophet's mosque taxi", 'ziyarat madinah', 'private driver madinah',
    'madinah hotel transfer', 'saudi cabs madinah', 'quba mosque transfer',
    'تاكسي المدينة', 'سيارة أجرة المدينة المنورة', 'نقل مطار المدينة', 'زيارة المسجد النبوي',
  ],
  alternates: {
    canonical: 'https://saudicabsgmc.com/madinah-taxi-service',
  },
  openGraph: {
    title: 'Taxi Service in Madinah – Saudi Cabs GMC',
    description: "Book taxi in Madinah. Prophet's Mosque, airport, Ziyarat tours. Fixed prices 24/7.",
    url: 'https://saudicabsgmc.com/madinah-taxi-service',
  },
}

export default function MadinahLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
