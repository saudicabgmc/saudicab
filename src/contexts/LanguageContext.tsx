'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'ar'

interface LanguageContextType {
  lang: Lang
  toggle: () => void
  isAr: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggle: () => {},
  isAr: false,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LanguageContext.Provider value={{ lang, toggle: () => setLang(l => l === 'en' ? 'ar' : 'en'), isAr: lang === 'ar' }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
