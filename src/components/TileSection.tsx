import { useLanguage } from '@/lib/LanguageContext'

const tiles = [
  { name: '经典地铁砖', en: 'Classic Subway', size: '3"×6"', sizeEn: '3"×6"', finish: '亮面陶瓷', finishEn: 'Glossy Ceramic' },
  { name: '卡拉卡塔六角砖', en: 'Calacatta Hex', size: '4" 六角', sizeEn: '4" Hex', finish: '抛光大理石', finishEn: 'Polished Marble' },
  { name: '人字卡拉拉', en: 'Herringbone Carrara', size: '2"×6"', sizeEn: '2"×6"', finish: '哑光大理石', finishEn: 'Honed Marble' },
  { name: '便士马赛克', en: 'Mosaic Penny', size: '1" 圆形', sizeEn: '1" Round', finish: '哑光瓷砖', finishEn: 'Matte Porcelain' },
  { name: '大板砖', en: 'Large Format Slab', size: '24"×48"', sizeEn: '24"×48"', finish: '哑光瓷砖', finishEn: 'Matte Porcelain' },
  { name: '手工泽利杰砖', en: 'Zellige Handmade', size: '4"×4"', sizeEn: '4"×4"', finish: '上釉陶土', finishEn: 'Glazed Terracotta' },
  { name: '鱼鳞砖', en: 'Fish Scale', size: '扇形', sizeEn: 'Scallop', finish: '亮面陶瓷', finishEn: 'Glossy Ceramic' },
  { name: '仿木纹长板', en: 'Wood-Look Plank', size: '8"×48"', sizeEn: '8"×48"', finish: '哑光瓷砖', finishEn: 'Matte Porcelain' },
]

function TileSection() {
  const lang = useLanguage()
  const isEn = lang === 'en'

  return (
    <section id="tiles" className="relative py-24 md:py-32 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 aspect-[3/2] overflow-hidden">
            <img
              src="https://static.lumi.new/d2/d2450ae810fd883f949ba21cbc5a9cab.png"
              alt="Tile samples"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-[11px] tracking-[0.3em] text-[#B8923D] uppercase mb-4">
              {isEn ? '03 — Tile Collection' : '03 — 瓷砖系列'}
            </div>
            {isEn ? (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
                Wall & Floor<br />
                <span className="italic">Whispering Elegance</span>
              </h2>
            ) : (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
                墙面与地面<br />
                <span className="italic">低语的优雅</span>
              </h2>
            )}
            
            <p className="text-[#1A1A1A]/65 leading-relaxed mb-2">
              {isEn 
                ? 'Over 400 tile styles in stock — from timeless subway to artisanal Zellige.'
                : '现货超过 400 款瓷砖样式。从永恒的地铁砖到手工泽利杰砖，应有尽有。'
              }
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-[#1A1A1A]/15">
          <div className="grid grid-cols-12 px-6 py-4 text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/50 border-b border-[#1A1A1A]/15">
            <div className="col-span-1">{isEn ? 'No.' : '编号'}</div>
            <div className="col-span-6 md:col-span-5">{isEn ? 'Style' : '样式'}</div>
            <div className="col-span-5 md:col-span-3">{isEn ? 'Format' : '规格'}</div>
            <div className="hidden md:block col-span-3">{isEn ? 'Finish' : '饰面'}</div>
          </div>
          {tiles.map((t, i) => (
            <div
              key={t.name}
              className="grid grid-cols-12 px-6 py-5 items-center border-b border-[#1A1A1A]/10 hover:bg-[#FAF7F2] transition-colors group"
            >
              <div className="col-span-1 font-serif text-[#B8923D] tabular text-sm">{String(i + 1).padStart(2, '0')}</div>
              <div className="col-span-6 md:col-span-5">
                <div className="font-serif text-lg group-hover:text-[#B8923D] transition-colors">{isEn ? t.en : t.name}</div>
                <div className="text-[11px] text-[#1A1A1A]/45 tracking-wide">{isEn ? t.name : t.en}</div>
              </div>
              <div className="col-span-5 md:col-span-3 text-sm text-[#1A1A1A]/65 tabular">{isEn ? t.sizeEn : t.size}</div>
              <div className="hidden md:block col-span-3 text-sm text-[#1A1A1A]/65">{isEn ? t.finishEn : t.finish}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TileSection
