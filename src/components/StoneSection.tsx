import { useLanguage } from '@/lib/LanguageContext'

const stones = [
  { name: '月光石英石', en: 'Luna Quartz', type: '人造石英石', typeEn: 'Engineered Quartz', swatch: 'linear-gradient(135deg, #F5F1EB 0%, #E8E0D2 50%, #D9D2C2 100%)' },
  { name: '经典卡拉拉', en: 'Carrara Classic', type: '意大利大理石', typeEn: 'Italian Marble', swatch: 'linear-gradient(135deg, #F0EBE3 0%, #C4BFB5 60%, #A8A299 100%)' },
  { name: '极致黑', en: 'Nero Absolute', type: '花岗岩', typeEn: 'Granite', swatch: 'linear-gradient(135deg, #2C2A26 0%, #1A1A1A 50%, #0D0D0D 100%)' },
  { name: '卡拉卡塔金', en: 'Calacatta Gold', type: '高级大理石', typeEn: 'Premium Marble', swatch: 'linear-gradient(135deg, #FAF7F2 0%, #E8DFC9 40%, #B8923D 100%)' },
  { name: '珍珠石英岩', en: 'Pearl Quartzite', type: '天然石英岩', typeEn: 'Quartzite', swatch: 'linear-gradient(135deg, #FFFFFF 0%, #E5E2DA 50%, #B8B0A0 100%)' },
  { name: '炭灰皂石', en: 'Charcoal Soapstone', type: '皂石', typeEn: 'Soapstone', swatch: 'linear-gradient(135deg, #4A4A48 0%, #2C2A26 50%, #1A1A1A 100%)' },
]

function StoneSection() {
  const lang = useLanguage()
  const isEn = lang === 'en'

  return (
    <section id="countertops" className="relative py-24 md:py-32 bg-[#1A1A1A] text-[#FAF7F2] overflow-hidden">
      <div className="absolute inset-0 grain"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.3em] text-[#B8923D] uppercase mb-4">
              {isEn ? '02 — Countertops' : '02 — 台面石材'}
            </div>
            {isEn ? (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8">
                Hand Selected<br />
                <span className="italic text-[#D4B56A]">Natural Stone</span>
              </h2>
            ) : (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8">
                逐板甄选<br />
                <span className="italic text-[#D4B56A]">天然石材</span>
              </h2>
            )}
            <p className="text-[#FAF7F2]/65 leading-relaxed mb-8 max-w-md">
              {isEn 
                ? 'Hand-picked from quarries in Italy, Brazil, and Vermont. View full slabs at our Queens showroom before installation.'
                : '精选自意大利、巴西与佛蒙特的矿场。安装前可在皇后区展厅查看完整石板。'}
            </p>
            <div className="aspect-[3/2] overflow-hidden">
              <img src="https://static.lumi.new/6d/6d165023cf644232d6e97da986cc269e.png" alt="Stone samples" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#FAF7F2]/10">
              {stones.map((s, i) => (
                <div key={s.name} className="bg-[#1A1A1A] p-6 md:p-8 hover:bg-[#2C2A26] transition-colors group">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-20 h-20 shrink-0 border border-[#FAF7F2]/15"
                      style={{ background: s.swatch }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] tracking-[0.25em] text-[#B8923D] uppercase mb-1">
                        0{i + 1}
                      </div>
                      <h3 className="font-serif text-xl mb-1">{isEn ? s.en : s.name}</h3>
                      <p className="text-xs text-[#FAF7F2]/55 mb-1">{isEn ? s.name : s.en}</p>
                      <p className="text-xs text-[#FAF7F2]/45">{isEn ? s.typeEn : s.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/55">
              <span className="px-3 py-1.5 border border-[#FAF7F2]/20">
                {isEn ? 'Edge Profiles Included' : '含边缘造型'}
              </span>
              <span className="px-3 py-1.5 border border-[#FAF7F2]/20">
                {isEn ? 'Sealing Included' : '含密封处理'}
              </span>
              <span className="px-3 py-1.5 border border-[#FAF7F2]/20">
                {isEn ? 'Template & Install' : '放样与安装'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoneSection
