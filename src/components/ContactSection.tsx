import { useState } from 'react'
import {Phone, Mail, MapPin, Clock, Send} from 'lucide-react'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/LanguageContext'

function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const lang = useLanguage()
  const isEn = lang === 'en'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error(isEn ? 'Name and phone are required.' : '请填写姓名和电话。')
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      toast.success(isEn ? 'Thank you! We will contact you within 1 business hour.' : '感谢留言！我们将在 1 个工作小时内与您联系。')
      setForm({ name: '', phone: '', email: '', message: '' })
      setSubmitting(false)
    }, 800)
  }

  const contactInfo = [
    { icon: MapPin, label: '展厅地址', labelEn: 'Showroom', value: '纽约法拉盛大学点大道 4218 号 邮编 11355', valueEn: '4218 College Point Blvd, Flushing, NY 11355' },
    { icon: Phone, label: '电话', labelEn: 'Call', value: '(718) 555-0199', href: 'tel:+17185550199' },
    { icon: Mail, label: '邮箱', labelEn: 'Email', value: 'info@queensstone.com', href: 'mailto:info@queensstone.com' },
    { icon: Clock, label: '营业时间', labelEn: 'Hours', value: '周一至周六 上午9点–下午7点 · 周日 上午11点–下午5点', valueEn: 'Mon-Sat 9am–7pm · Sun 11am–5pm' },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="text-[11px] tracking-[0.3em] text-[#B8923D] uppercase mb-4">
              {isEn ? '05 — Visit Us' : '05 — 联系我们'}
            </div>
            {isEn ? (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8">
                Step Into Our<br />
                <span className="italic">Queens Showroom</span>
              </h2>
            ) : (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8">
                走进我们的<br />
                <span className="italic">皇后区展厅</span>
              </h2>
            )}
            
            <p className="text-[#1A1A1A]/65 leading-relaxed mb-10 max-w-md">
              {isEn 
                ? 'Touch the cabinets. See full slabs in natural light. Talk to the designers who will measure your space. No appointments needed — coffee is on us.'
                : '亲手触摸橱柜，在自然光下查看完整石板，与即将为您测量的设计师面对面交流。无需预约 —— 咖啡免费奉上。'
              }
            </p>

            <div className="space-y-6">
              {contactInfo.map(item => (
                <div key={item.label} className="flex items-start gap-4 pb-6 border-b border-[#1A1A1A]/15 last:border-b-0">
                  <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-[#B8923D]" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/55 mb-1">
                      {isEn ? item.labelEn : item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="font-serif text-lg hover:text-[#B8923D] transition-colors">{item.value}</a>
                    ) : (
                      <div className="font-serif text-lg">{isEn && item.valueEn ? item.valueEn : item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] text-[#FAF7F2] p-8 md:p-12">
            <h3 className="font-serif text-3xl mb-1">{isEn ? 'Request a Callback' : '预约咨询'}</h3>
            <p className="text-[#FAF7F2]/60 text-sm mb-8">
              {isEn ? 'We respond within 1 business hour.' : '我们将在 1 个工作小时内回复。'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/55 block mb-2">
                  {isEn ? 'Full Name *' : '姓名 *'}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[#FAF7F2]/25 py-3 text-base focus:outline-none focus:border-[#B8923D] transition-colors"
                  placeholder={isEn ? "Your name" : "请输入您的姓名"}
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/55 block mb-2">
                  {isEn ? 'Phone *' : '电话 *'}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-[#FAF7F2]/25 py-3 text-base focus:outline-none focus:border-[#B8923D] transition-colors"
                  placeholder="(718) 555-0123"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/55 block mb-2">
                  {isEn ? 'Email' : '邮箱'}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-[#FAF7F2]/25 py-3 text-base focus:outline-none focus:border-[#B8923D] transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/55 block mb-2">
                  {isEn ? 'Project Details' : '项目需求'}
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#FAF7F2]/25 py-3 text-base focus:outline-none focus:border-[#B8923D] transition-colors resize-none"
                  placeholder={isEn ? "Kitchen size, timeline, style preferences..." : "厨房尺寸、时间安排、风格偏好……"}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group w-full mt-4 bg-[#B8923D] text-[#1A1A1A] py-4 flex items-center justify-center gap-3 text-sm tracking-wide hover:bg-[#D4B56A] transition-colors disabled:opacity-60"
              >
                {submitting ? (isEn ? 'SENDING...' : '提交中…') : (isEn ? 'REQUEST CALLBACK' : '提交预约')}
                <Send size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-[#FAF7F2]/45 text-center">
                {isEn 
                  ? 'By submitting, you agree to let us contact you regarding your project. We never share your info.'
                  : '提交即表示同意我们就您的项目与您联系，我们绝不外泄您的信息。'
                }
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
