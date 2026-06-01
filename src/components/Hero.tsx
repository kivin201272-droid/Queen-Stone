import {ArrowRight, Star} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

function Hero() {
  const lang = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="relative pt-16 md:pt-20">
      <div className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
        <img
          src="https://static.lumi.new/2c/2cc25d96e96349a1a97151a8ac4517e4.png"
          alt="Luxury kitchen cabinet showcase"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/85 via-[#1A1A1A]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
          <div className="max-w-3xl reveal-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#B8923D]/60 mb-6">
              <Star size={12} className="text-[#B8923D] fill-[#B8923D]" />
              <span className="text-[11px] tracking-[0.3em] text-[#FAF7F2]/90 uppercase">
                {isEn ? 'Queens · Since 2008' : '皇后区 · 始于2008'}
              </span>
            </div>
            {isEn ? (
              <h1 className="font-serif text-[#FAF7F2] text-5xl md:text-7xl lg:text-[88px] leading-[0.95] mb-6 tracking-tight">
                Premium Cabinets<br />
                <span className="italic text-[#D4B56A]">Natural</span> Stone
              </h1>
            ) : (
              <h1 className="font-serif text-[#FAF7F2] text-5xl md:text-7xl lg:text-[88px] leading-[0.95] mb-6 tracking-tight">
                匠心橱柜<br />
                <span className="italic text-[#D4B56A]">天然</span>石材
              </h1>
            )}
            
            <p className="text-[#FAF7F2]/85 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
              {isEn 
                ? 'Premium kitchen cabinets, natural stone countertops, and designer tiles — crafted with care since 2008.'
                : '高端定制橱柜、天然石材台面与设计师瓷砖，专注品质与工艺。'
              }
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#cabinets" className="group bg-[#B8923D] text-[#1A1A1A] px-7 py-4 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-[#D4B56A] transition-colors">
                {isEn ? 'EXPLORE PRODUCTS' : '浏览产品'}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="text-[#FAF7F2] px-7 py-4 text-sm font-medium tracking-wide border border-[#FAF7F2]/40 hover:bg-[#FAF7F2] hover:text-[#1A1A1A] transition-colors">
                {isEn ? 'VISIT US' : '预约到店'}
              </a>
            </div>
          </div>
        </div>

        {/* Stats overlay */}
        <div className="absolute bottom-0 right-0 hidden lg:flex border-t border-l border-[#FAF7F2]/15 bg-[#1A1A1A]/40 backdrop-blur-md">
          {[
            { v: '15+', l: isEn ? 'Years in Queens' : '深耕皇后区' },
            { v: '2,400+', l: isEn ? 'Completed Kitchens' : '完成厨房' },
            { v: '4.9★', l: isEn ? 'Google Rating' : '谷歌评分' },
          ].map(s => (
            <div key={s.l} className="px-8 py-6 border-r border-[#FAF7F2]/15 last:border-r-0">
              <div className="font-serif text-3xl text-[#FAF7F2] tabular">{s.v}</div>
              <div className="text-[10px] tracking-[0.2em] text-[#FAF7F2]/70 uppercase mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="bg-[#1A1A1A] text-[#FAF7F2] py-4 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 shrink-0">
              {(isEn 
                ? ['Free Measure', 'Lifetime Warranty', 'Licensed & Insured', 'Direct From Manufacturer', 'Professional Install']
                : ['免费上门测量', '橱柜终身质保', '纽约持牌承保', '工厂直供', '专业安装']
              ).map(t => (
                <span key={t} className="flex items-center gap-12">
                  <span className="font-serif text-base italic">{t}</span>
                  <span className="text-[#B8923D]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
