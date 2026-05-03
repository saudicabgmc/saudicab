import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'GMC Yukon VIP Hire with Chauffeur | Luxury SUV Saudi Cabs GMC',
  description: 'Hire a GMC Yukon XL luxury SUV with professional chauffeur in Makkah, Madinah, Jeddah & Riyadh. 7 seats, built-in cooler, premium leather. Fixed price, 24/7. Book via WhatsApp.',
  keywords: ['gmc yukon hire saudi arabia', 'yukon vip taxi makkah', 'luxury suv chauffeur jeddah', 'gmc yukon airport transfer', 'استئجار جي إم سي يوكون السعودية'],
  alternates: { canonical: 'https://saudicabsgmc.com/gmc-yukon-hire' },
  openGraph: { title: 'GMC Yukon VIP Hire — Saudi Cabs GMC', description: 'Luxury GMC Yukon XL with chauffeur. 7 seats, fixed price, 24/7.', url: 'https://saudicabsgmc.com/gmc-yukon-hire', images: [{ url: '/fleet/gmc-yukon-exterior-angle-saudi-cabs-gmc.webp', width: 1200, height: 630 }] },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
