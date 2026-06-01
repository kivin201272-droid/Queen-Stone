import {Instagram, Facebook, Youtube} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

function Footer() {
  const lang = useLanguage()
  const isEn = lang === 'en'

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#B8923D] flex items-center justify-center">
                <span className="font-serif text-[#1A1A1A] text-xl leading-none">Q</span>
              </div>
              <div>
                <div className="font-serif text-xl">{isEn ? 'Queens Stone' : '皇后石材'}</div>
                <div className="text-[10px] tracking-[0.25em] text-[#FAF7F2]/55 uppercase">
                  {isEn ? 'Cabinet & Tile' : '匠心橱柜 & 石材'}
                </div>
              </div>
            </div>
            <p className="text-[#FAF7F2]/60 leading-relaxed max-w-md text-sm">
              {isEn 
                ? 'Family-owned cabinet, countertop and tile showroom serving Queens, Brooklyn, Long Island, and the Bronx since 2008. Licensed and insured in New York.'
                : '家族经营的橱柜、台面与瓷砖展厅，自 2008 年起服务于皇后区、布鲁克林、长岛与布朗克斯。纽约持牌承保。'
              }
            </p>
            <div className="flex gap-3 mt-8">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-[#FAF7F2]/20 flex items-center justify-center hover:bg-[#B8923D] hover:border-[#B8923D] hover:text-[#1A1A1A] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#B8923D] mb-5">
              {isEn ? 'Products' : '产品'}
            </div>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/70">
              <li><a href="#cabinets" className="hover:text-[#FAF7F2]">{isEn ? 'Cabinets' : '橱柜'}</a></li>
              <li><a href="#countertops" className="hover:text-[#FAF7F2]">{isEn ? 'Countertops' : '台面'}</a></li>
              <li><a href="#tiles" className="hover:text-[#FAF7F2]">{isEn ? 'Tiles' : '瓷砖'}</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#B8923D] mb-5">
              {isEn ? 'Company' : '公司'}
            </div>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/70">
              <li><a href="#about" className="hover:text-[#FAF7F2]">{isEn ? 'About' : '关于我们'}</a></li>
              <li><a href="#contact" className="hover:text-[#FAF7F2]">{isEn ? 'Contact' : '联系我们'}</a></li>
              <li><a href="#" className="hover:text-[#FAF7F2]">{isEn ? 'Warranty' : '质保'}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#B8923D] mb-5">
              {isEn ? 'Showroom' : '展厅'}
            </div>
            <address className="not-italic text-sm text-[#FAF7F2]/70 space-y-2 leading-relaxed">
              {isEn ? (
                <>
                  <div>4218 College Point Blvd</div>
                  <div>Flushing, NY 11355</div>
                </>
              ) : (
                <>
                  <div>纽约法拉盛大学点大道 4218 号</div>
                  <div>邮编 11355</div>
                </>
              )}
              <div className="pt-2">
                <a href="tel:+17185550199" className="hover:text-[#FAF7F2]">(718) 555-0199</a>
              </div>
              <div>
                <a href="mailto:info@queensstone.com" className="hover:text-[#FAF7F2]">info@queensstone.com</a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#FAF7F2]/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#FAF7F2]/50">
          <div>© {new Date().getFullYear()} {isEn ? 'Queens Stone Cabinet & Tile, LLC' : '皇后石材橱柜瓷砖有限责任公司'} · {isEn ? 'License' : '营业执照'} #1234567-DCA</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FAF7F2]">{isEn ? 'Privacy Policy' : '隐私政策'}</a>
            <a href="#" className="hover:text-[#FAF7F2]">{isEn ? 'Terms of Service' : '服务条款'}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
