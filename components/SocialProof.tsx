import { Building2, Globe, Star, Phone, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const items: { Icon: LucideIcon; text: string }[] = [
  { Icon: Building2, text: '파트너 대학 350+' },
  { Icon: Globe,     text: '12개국 현지 네트워크' },
  { Icon: Star,      text: '구글 평점 4.9' },
  { Icon: Phone,     text: '평균 응답 3분 이내' },
  { Icon: Trophy,    text: '유학업계 대상 수상' },
]

export default function SocialProof() {
  return (
    <div className="bg-brand-light border-b border-brand-sky px-5 md:px-[60px] py-4 flex items-center justify-center gap-6 md:gap-10 flex-wrap">
      {items.map(({ Icon, text }) => (
        <div key={text} className="flex items-center gap-2 text-[13px] font-semibold text-brand-dark whitespace-nowrap">
          <Icon size={15} strokeWidth={2.2} className="text-brand" />
          {text}
        </div>
      ))}
    </div>
  )
}
