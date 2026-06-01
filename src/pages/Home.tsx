import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CabinetSection from '@/components/CabinetSection'
import StoneSection from '@/components/StoneSection'
import TileSection from '@/components/TileSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { LanguageProvider, Language, useLanguage } from '@/lib/LanguageContext'

function HomeContent() {
  const { lang } = useLanguage()
  const isEn = lang === 'en'

  useEffect(() => {
    document.title = isEn 
      ? 'Queens Stone Cabinet & Tile — Premium Cabinet & Stone Pricing'
      : '皇后石材橱柜瓷砖 — 高端橱柜与石材报价'
  }, [isEn])

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1A1A]">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#FAF7F2',
            borderRadius: 0,
            border: '1px solid #B8923D',
            fontSize: '14px',
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <CabinetSection />
        <StoneSection />
        <TileSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Home({ lang }: { lang: Language }) {
  return (
    <LanguageProvider lang={lang}>
      <HomeContent />
    </LanguageProvider>
  )
}

export default Home
