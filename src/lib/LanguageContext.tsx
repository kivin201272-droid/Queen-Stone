import { createContext, useContext, ReactNode } from 'react'

export type Language = 'en' | 'zh'

interface LanguageContextType {
  lang: Language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, lang }: { children: ReactNode, lang: Language }) {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context.lang
}
