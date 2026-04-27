import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taxi Service in Jeddah | King Abdulaziz Airport Transfer & Cab – Saudi Cabs GMC',
  description:
    'Best taxi service in Jeddah. Book cab from King Abdulaziz International Airport, Corniche, malls & business districts. Fixed prices, 24/7. Book via WhatsApp now.',
  keywords: [
    'taxi jeddah', 'cab jeddah', 'jeddah airport taxi', 'king abdulaziz airport transfer',
    'jeddah to makkah taxi', 'jeddah corniche cab', 'private driver jeddah',
    'jeddah airport pickup', 'saudi cabs jeddah', 'jeddah business transfer',
    'تاكسي جدة', 'سيارة أجرة جدة', 'نقل مطار الملك عبدالعزيز', 'تاكسي جدة مكة',
  ],
  alternates: {
    canonical: 'https://saudicabsgmc.com/jeddah-taxi-service',
  },
  openGraph: {
    title: 'Taxi Service in Jeddah – Saudi Cabs GMC',
    description: 'Book taxi in Jeddah. Airport transfers, Corniche, Makkah. Fixed prices 24/7.',
    url: 'https://saudicabsgmc.com/jeddah-taxi-service',
  },
}

export default function JeddahLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
