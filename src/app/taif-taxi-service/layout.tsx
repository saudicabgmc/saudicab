import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taxi Service in Taif | Mountain Tours, Shafa & Airport Transfer – Saudi Cabs GMC',
  description:
    'Best taxi service in Taif. Book cab to Shafa, Hada, rose farms, Taif Airport & mountain resorts. Fixed prices, 24/7. Book via WhatsApp now.',
  keywords: [
    'taxi taif', 'cab taif', 'taif airport transfer', 'shafa taxi',
    'hada mountain taxi', 'taif rose farms tour', 'private driver taif',
    'taif to jeddah cab', 'taif to makkah taxi', 'saudi cabs taif',
    'تاكسي الطائف', 'سيارة أجرة الطائف', 'نقل شفا هدا', 'جولة مزارع الورد الطائف',
  ],
  alternates: {
    canonical: 'https://saudicabsgmc.com/taif-taxi-service',
  },
  openGraph: {
    title: 'Taxi Service in Taif – Saudi Cabs GMC',
    description: 'Book taxi in Taif. Shafa, Hada, rose farms, airport transfers. Fixed prices 24/7.',
    url: 'https://saudicabsgmc.com/taif-taxi-service',
  },
}

export default function TaifLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
