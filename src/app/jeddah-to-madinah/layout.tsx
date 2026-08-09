import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Jeddah to Madinah Taxi | Cab to Prophet\'s Mosque – Saudi Cabs GMC',
  description: "Private taxi from Jeddah to Madinah. ~4 hr direct highway journey to the Prophet's Mosque. Fixed price, comfortable vehicles. Ideal for Umrah pilgrims. Book via WhatsApp.",
  keywords: ["jeddah to madinah taxi", "jeddah medina cab", "جدة المدينة تاكسي", "نقل جدة المدينة المنورة"],
  alternates: { canonical: 'https://saudicabsgmc.com/jeddah-to-madinah' },
  openGraph: { title: "Jeddah to Madinah Taxi – Saudi Cabs GMC", description: "Direct private cab from Jeddah to Madinah. Fixed price, 24/7.", url: 'https://saudicabsgmc.com/jeddah-to-madinah', images: [{ url: 'https://saudicabsgmc.com/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp', width: 1200, height: 630, alt: 'Jeddah to Madinah Taxi – Saudi Cabs GMC' }] },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
