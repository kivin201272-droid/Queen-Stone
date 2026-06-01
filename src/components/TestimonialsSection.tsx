import {Star, Quote} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const testimonials = [
  {
    name: '索菲亚 R.', nameEn: 'Sofia R.',
    location: '纽约，阿斯托利亚', locationEn: 'Astoria, NY',
    project: '传承橱柜', projectEn: 'Heritage Cabinets',
    quote:
      '周六走进展厅，工作人员非常耐心。他们为我们的中岛挑选的卡拉卡塔石材纹理金黄优美，安装也十分细致，整个体验远超预期。',
    quoteEn:
      'Walked into the showroom on a Saturday and the staff was so patient. The Calacatta stone they selected for our island has beautiful golden veins. Installation was meticulous. The whole experience exceeded our expectations.',
  },
  {
    name: '丹尼尔 & 普里亚 K.', nameEn: 'Daniel & Priya K.',
    location: '纽约，森林小丘', locationEn: 'Forest Hills, NY',
    project: '工坊系列 + 墙砖', projectEn: 'Atelier Suite',
    quote:
      '在公寓住了十五年，终于拥有了梦寐以求的厨房。施工团队一丝不苟 —— 保护好地板，提前一天完工，缓冲抽屉用了八个月依然顺滑如丝。',
    quoteEn:
      'After 15 years in our apartment, we finally have our dream kitchen. The installation team was meticulous — protected our floors, finished a day early, and the soft-close drawers are still buttery smooth 8 months later.',
  },
  {
    name: '迈克尔 T.', nameEn: 'Michael T.',
    location: '纽约，贝赛', locationEn: 'Bayside, NY',
    project: '出租房翻新 × 3', projectEn: 'Rental Units',
    quote:
      '连续做了三套出租单元。同一支团队、同样的工艺、没有任何意外。他们懂承包商、懂房东，把活儿干得漂亮。我的新固定合作伙伴。',
    quoteEn:
      'Did three rental units back-to-back. Same crew, same craftsmanship, no surprises. They understand contractors and landlords, and they get the job done right. My new go-to partner.',
  },
]

function TestimonialsSection() {
  const lang = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="relative py-24 md:py-32 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-baseline justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="text-[11px] tracking-[0.3em] text-[#B8923D] uppercase mb-4">
              {isEn ? 'Reviews' : '客户评价'}
            </div>
            {isEn ? (
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight">
                From The Neighborhood<br /><span className="italic">Authentic Voices</span>
              </h2>
            ) : (
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight">
                来自街坊邻里<br /><span className="italic">最真实的声音</span>
              </h2>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-[#B8923D] fill-[#B8923D]" />
              ))}
            </div>
            <span className="font-serif text-2xl tabular">4.9</span>
            <span className="text-sm text-[#1A1A1A]/55">
              {isEn ? '/ 5 · 312 Google Reviews' : '/ 5 · 312 条谷歌评价'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A]/15">
          {testimonials.map(t => (
            <article key={t.name} className="bg-[#F5F1EB] p-8 md:p-10 relative">
              <Quote size={32} className="text-[#B8923D]/30 mb-5" />
              <p className="text-[#1A1A1A]/85 leading-relaxed text-[15px] mb-8 font-light">
                “{isEn ? t.quoteEn : t.quote}”
              </p>
              <div className="pt-6 border-t border-[#1A1A1A]/10">
                <div className="font-serif text-lg">{isEn ? t.nameEn : t.name}</div>
                <div className="text-xs text-[#1A1A1A]/55 mt-0.5">
                  {isEn ? t.locationEn : t.location} · {isEn ? t.projectEn : t.project}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
