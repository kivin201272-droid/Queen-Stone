import {Phone, Menu, X, Globe} from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const lang = useLanguage()
  const isEn = lang === 'en'

  const links = [
    { href: '#cabinets', label: isEn ? 'Cabinets' : '橱柜' },
    { href: '#countertops', label: isEn ? 'Countertops' : '台面' },
    { href: '#tiles', label: isEn ? 'Tiles' : '瓷砖' },
    { href: '#about', label: isEn ? 'About' : '关于我们' },
    { href: '#contact', label: isEn ? 'Contact' : '联系我们' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF7F2]/85 backdrop-blur-md border-b border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#1A1A1A] flex items-center justify-center">
            <span className="font-serif text-[#B8923D] text-lg leading-none">Q</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[15px] tracking-wide">{isEn ? 'Queens Stone' : '皇后石材'}</div>
            <div className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/60 uppercase">{isEn ? 'Cabinet & Tile' : '匠心橱柜 & 石材'}</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-[#1A1A1A]/75 hover:text-[#1A1A1A] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to={isEn ? '/zh' : '/en'} className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors p-2 rounded flex items-center gap-1 text-sm font-medium">
            <Globe size={16} />
            {isEn ? '中文' : 'EN'}
          </Link>
          <a href="tel:+17185550199" className="text-sm text-[#1A1A1A]/70 flex items-center gap-2 hover:text-[#1A1A1A] ml-2">
            <Phone size={14} /> (718) 555-0199
          </a>
          <a href="#contact" className="bg-[#1A1A1A] text-[#FAF7F2] px-5 py-2.5 text-sm hover:bg-[#B8923D] transition-colors">
            {isEn ? 'Visit Us' : '预约到店'}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link to={isEn ? '/zh' : '/en'} className="text-[#1A1A1A]/70 p-2 rounded">
            <Globe size={18} />
          </Link>
          <button onClick={() => setOpen(!open)} className="p-2 -mr-2" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#1A1A1A]/10 bg-[#FAF7F2]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-[#1A1A1A]/80">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-[#1A1A1A] text-[#FAF7F2] px-5 py-3 text-center text-sm">
              {isEn ? 'Visit Us' : '预约到店'}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
