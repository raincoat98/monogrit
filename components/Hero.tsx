import Link from 'next/link'
import { Sparkles, GraduationCap, ArrowRight } from 'lucide-react'

const stats = [
  { num: '4,200+', label: '누적 합격자' },
  { num: '98%', label: '고객 만족도' },
  { num: '18년', label: '업계 경력' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center px-5 md:px-[60px] py-24 md:py-[100px] overflow-hidden hero-dots"
      style={{ background: 'linear-gradient(135deg, #0f2b6b 0%, #1a56db 55%, #3b82f6 100%)' }}
    >
      {/* Glow */}
      <div
        className="absolute w-[600px] h-[600px] -top-24 -right-24 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[680px]">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 text-white px-4 py-1.5 rounded-full text-[13px] font-semibold mb-7 backdrop-blur-sm">
          <Sparkles size={12} strokeWidth={2.5} />
          국내 1위 유학 전문 컨설팅 · 설립 18년
        </div>

        <h1 className="font-jakarta text-[clamp(38px,5.5vw,68px)] font-extrabold leading-[1.1] text-white mb-5 tracking-tight">
          당신의 미래를
          <br />
          <em className="not-italic text-blue-300">세계로</em> 연결합니다
        </h1>

        <p className="text-[17px] leading-[1.85] text-white/80 mb-11 max-w-[520px]">
          미국·캐나다·영국·호주 명문대 입학부터 어학연수, 영어캠프까지.
          <br />
          단 한 번의 상담으로 맞춤 플랜을 설계해 드립니다.
        </p>

        <div className="flex gap-3.5 flex-wrap">
          <Link
            href="#consult"
            className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-lg font-bold text-[15px] no-underline shadow-lg hover:bg-brand-sky hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            <GraduationCap size={18} strokeWidth={2.2} />
            무료 상담 신청하기
          </Link>
          <Link
            href="#reviews"
            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-[15px] no-underline border-[1.5px] border-white/50 hover:border-white hover:bg-white/10 transition-all"
          >
            합격 후기 보기
            <ArrowRight size={16} strokeWidth={2.2} />
          </Link>
        </div>
      </div>

      {/* Stats — desktop only */}
      <div className="hidden lg:flex absolute right-[60px] top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/10 border border-white/20 rounded-2xl px-7 py-5 text-center backdrop-blur-md"
          >
            <div className="font-jakarta text-[36px] font-extrabold text-white leading-none">
              {s.num}
            </div>
            <div className="text-[12px] text-white/65 mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
