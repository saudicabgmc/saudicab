import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://saudicabsgmc.com'),
  title: {
    default: 'Saudi Cabs GMC | Best Taxi Service in Makkah, Madinah, Jeddah & Taif',
    template: '%s | Saudi Cabs GMC',
  },
  description:
    'Book your taxi, cab, or private driver in Makkah, Madinah, Jeddah, and Taif. Airport transfers, Umrah trips & intercity routes. Fixed prices, 24/7 available. Book via WhatsApp now.',
  keywords: [
    'taxi makkah', 'taxi madinah', 'taxi jeddah', 'taxi taif',
    'cab saudi arabia', 'private driver makkah', 'airport transfer jeddah',
    'umrah transport', 'hajj taxi', 'saudi cabs gmc',
    'سيارة أجرة مكة', 'تاكسي المدينة', 'كاب جدة', 'نقل مطار السعودية',
  ],
  authors: [{ name: 'Saudi Cabs GMC', url: 'https://saudicabsgmc.com' }],
  creator: 'Saudi Cabs GMC',
  publisher: 'Saudi Cabs GMC',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://saudicabsgmc.com',
    siteName: 'Saudi Cabs GMC',
    title: 'Saudi Cabs GMC | Best Taxi Service in Makkah, Madinah, Jeddah & Taif',
    description:
      'Book your taxi, cab, or private driver in Makkah, Madinah, Jeddah, and Taif. Fixed prices, 24/7 available.',
    images: [
      {
        url: '/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp',
        width: 800,
        height: 600,
        alt: 'Saudi Cabs GMC – Premium Taxi Service Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saudi Cabs GMC | Best Taxi Service in Saudi Arabia',
    description: 'Book your taxi in Makkah, Madinah, Jeddah & Taif. Fixed prices, 24/7.',
    images: ['/fleet/toyota-camry-exterior-front-saudi-cabs-gmc.webp'],
  },
  alternates: {
    canonical: 'https://saudicabsgmc.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  )
}
