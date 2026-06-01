import {Check} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const cabinetLines = [
  {
    name: '经典白色摇篮门',
    en: 'Essential White Shaker',
    img: 'https://static.lumi.new/16/160b5168e8aa2a9ec1ed04d8727a92c0.png',
    desc: '实木框架，缓冲铰链，经典白色饰面 —— 永不过时的选择。',
    descEn: 'Solid wood frame, soft-close hinges, classic white finish — a timeless choice.',
    features: ['实木枫木框架', '胶合板箱体结构', '缓冲门与抽屉', '5 年质保'],
    featuresEn: ['Solid Maple Frame', 'Plywood Box Construction', 'Soft-close Doors & Drawers', '5-Year Warranty'],
  },
  {
    name: '传承浓咖啡',
    en: 'Heritage Espresso',
    img: 'https://static.lumi.new/b0/b07c1ec0ce6cc8798183760e136922b9.png',
    desc: '实木桦木浓咖啡染色，搭配拉丝金五金。温暖、优雅、耐用。',
    descEn: 'Solid birch with espresso stain, paired with brushed gold hardware. Warm, elegant, durable.',
    features: ['实木桦木结构', '燕尾榫抽屉工艺', '拉丝金五金', '10 年质保'],
    featuresEn: ['Solid Birch Construction', 'Dovetail Drawer Box', 'Brushed Gold Hardware', '10-Year Warranty'],
    featured: true,
  },
  {
    name: '工坊现代亮光',
    en: 'Atelier Modern Gloss',
    img: 'https://static.lumi.new/a6/a691ef9ff46f656a3781cd918e73fd44.png',
    desc: '欧式无框橱柜，高光烤漆饰面，可选集成 LED 灯光。',
    descEn: 'European frameless cabinetry with high-gloss lacquer finish, optional integrated LED lighting.',
    features: ['欧式无框设计', '高光烤漆饰面', '百隆 阻尼抽屉', '终身质保'],
    featuresEn: ['European Frameless Design', 'High-gloss Lacquer Finish', 'Blum Soft-close Drawers', 'Lifetime Warranty'],
  },
]

function CabinetSection() {
  const lang = useLanguage()
  const isEn = lang === 'en'

  return (
    <section id="cabinets" className="relative py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-[11px] tracking-[0.3em] text-[#B8923D] uppercase mb-4">
              {isEn ? '01 — Cabinetry' : '01 — 橱柜系列'}
            </div>
            {isEn ? (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
                Three Collections<br />
                <span className="italic">One Standard of Craft</span>
              </h2>
            ) : (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
                三大系列<br />
                <span className="italic">同一份匠心</span>标准
              </h2>
            )}
          </div>
          <p className="text-[#1A1A1A]/65 max-w-md leading-relaxed">
            {isEn 
              ? 'Every line is built with solid hardwood frames and soft-close mechanisms, tested to last for generations.' 
              : '每一系列橱柜均采用实木框架与缓冲机构，经久耐用，世代传承。'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cabinetLines.map((c) => (
            <article
              key={c.name}
              className={`group relative bg-[#FFFFFF] border ${c.featured ? 'border-[#B8923D]' : 'border-[#1A1A1A]/10'} hover:border-[#1A1A1A] transition-colors`}
            >
              {c.featured && (
                <div className="absolute -top-px left-6 bg-[#B8923D] text-[#1A1A1A] text-[10px] tracking-[0.25em] uppercase px-3 py-1.5">
                  {isEn ? 'Popular' : '人气之选'}
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden bg-[#F5F1EB]">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-serif text-2xl mb-1">{isEn ? c.en : c.name}</h3>
                <div className="text-[11px] tracking-[0.2em] text-[#1A1A1A]/45 uppercase mb-4">
                  {isEn ? c.name : c.en}
                </div>
                <p className="text-sm text-[#1A1A1A]/65 leading-relaxed mb-6 pb-6 border-b border-[#1A1A1A]/10">
                  {isEn ? c.descEn : c.desc}
                </p>

                <ul className="space-y-2.5">
                  {(isEn ? c.featuresEn : c.features).map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#1A1A1A]/80">
                      <Check size={15} className="text-[#B8923D] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="mt-7 inline-block w-full text-center py-3 border border-[#1A1A1A] text-sm tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF7F2] transition-colors">
                  {isEn ? 'INQUIRE' : '咨询详情'}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-xs text-[#1A1A1A]/50 mt-8 max-w-3xl">
          {isEn
            ? 'All cabinets include standard installation, soft-close hardware, and basic delivery in Queens and Long Island. Custom modifications, glass panels, and crown molding available upon request.'
            : '所有橱柜均包含标准安装、缓冲五金，以及皇后区与长岛地区的基础配送。定制改装、玻璃嵌板与顶线造型可另行咨询。'}
        </p>
      </div>
    </section>
  )
}

export default CabinetSection
