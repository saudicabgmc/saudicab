import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taif to Jeddah Taxi | Mountain to City Transfer – Saudi Cabs GMC',
  description:
    'Private taxi from Taif to Jeddah. ~1.5 hr journey, fixed price. Hotel and airport drop-offs. Experienced mountain-road drivers. Book via WhatsApp.',
  keywords: [
    'taif to jeddah taxi',
    'taif jeddah cab',
    'الطائف جدة تاكسي',
    'نقل الطائف جدة',
  ],
  alternates: { canonical: 'https://saudicabsgmc.com/taif-to-jeddah' },
  openGraph: {
    title: 'Taif to Jeddah Taxi | Mountain to City Transfer – Saudi Cabs GMC',
    description:
      'Private taxi from Taif to Jeddah. ~1.5 hr journey, fixed price. Hotel and airport drop-offs. Experienced mountain-road drivers. Book via WhatsApp.',
    url: 'https://saudicabsgmc.com/taif-to-jeddah',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
