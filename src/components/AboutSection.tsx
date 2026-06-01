import {Ruler, ShieldCheck, Award, Truck} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const values = [
  { 
    icon: Ruler, title: '免费上门测量', en: 'Free In-Home Measure', 
    desc: '专业设计师上门精准测量，量身规划您的厨房空间。',
    descEn: 'Professional designers provide precise in-home measurements to perfectly plan your kitchen space.'
  },
  { 
    icon: Award, title: '匠心工艺', en: 'Master Craftsmanship', 
    desc: '实木框架与缓冲五金，每一处细节都经得起时间考验。',
    descEn: 'Solid wood frames and soft-close hardware, every detail withstands the test of time.'
  },
  { 
    icon: ShieldCheck, title: '持牌承保', en: 'Licensed & Insured', 
    desc: '纽约持牌承保企业，安装质量与售后皆有保障。',
    descEn: 'Fully licensed and insured in New York, guaranteeing quality installation and peace of mind.'
  },
  { 
    icon: Truck, title: '工厂直供', en: 'Direct From Manufacturer', 
    desc: '省去中间环节，从工厂直达您家，品质始终如一。',
    descEn: 'Direct from the factory to your home, ensuring consistent quality and value without middlemen.'
  },
]

function AboutSection() {
  const lang = useLanguage()
  const isEn = lang === 'en'

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">
          <div className="lg:col-span-6 aspect-[4/3] overflow-hidden">
            <img
              src="https://static.lumi.new/a6/a691ef9ff46f656a3781cd918e73fd44.png"
              alt="Showroom craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <div className="text-[11px] tracking-[0.3em] text-[#B8923D] uppercase mb-4">
              {isEn ? '04 — About' : '04 — 关于我们'}
            </div>
            {isEn ? (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
                Family Owned<br />
                <span className="italic">Deeply Rooted in Queens</span>
              </h2>
            ) : (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
                家族经营<br />
                <span className="italic">深耕皇后区</span>
              </h2>
            )}
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
              {isEn 
                ? 'A family-owned cabinet, countertop and tile showroom proudly serving Queens, Brooklyn, Long Island, and the Bronx since 2008. We believe a great kitchen starts with real materials and dedicated craftsmanship.'
                : '自 2008 年起，皇后石材始终是一家家族经营的橱柜、台面与瓷砖展厅，服务于皇后区、布鲁克林、长岛与布朗克斯。我们相信，好的厨房始于真材实料与用心工艺。'
              }
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/15">
          {values.map(v => (
            <div key={v.title} className="bg-[#FAF7F2] p-8 md:p-10">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center mb-6">
                <v.icon size={20} className="text-[#B8923D]" />
              </div>
              <h3 className="font-serif text-xl mb-1">{isEn ? v.en : v.title}</h3>
              <div className="text-[10px] tracking-[0.2em] text-[#1A1A1A]/45 uppercase mb-4">
                {isEn ? v.title : v.en}
              </div>
              <p className="text-sm text-[#1A1A1A]/65 leading-relaxed">{isEn ? v.descEn : v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
