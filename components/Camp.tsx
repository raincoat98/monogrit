import Link from 'next/link'
import { Users, ShieldCheck, Palette, Check, Zap, type LucideIcon } from 'lucide-react'

const highlights: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Users,
    title: '원어민 교사 1:8 소수 집중 수업',
    desc: '소수 정원으로 꼼꼼한 개별 케어. 레벨별 맞춤 커리큘럼 운영.',
  },
  {
    Icon: ShieldCheck,
    title: '24시간 안전 관리',
    desc: '인솔 교사 동반 출국, 현지 한국인 코디네이터 상시 대기.',
  },
  {
    Icon: Palette,
    title: '다양한 문화 체험 액티비티',
    desc: '뮤지컬·스포츠·미술·요리 등 방과후 영어 활동 매일 진행.',
  },
]

const features = [
  '왕복 항공권 포함',
  '현지 기숙사 3식 제공',
  '원어민 집중 영어 수업 (하루 5시간)',
  '문화 체험 액티비티 전일정 포함',
  '인솔 교사 동반 출국·귀국',
  '여행자 보험 전 기간 포함',
  '수료증 및 성적표 발급',
]

export default function Camp() {
  return (
    <section
      id="camp"
      className="px-5 md:px-[60px] py-24"
      style={{ background: 'linear-gradient(135deg, #0f2b6b 0%, #1a56db 100%)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-[11px] font-bold tracking-[3px] uppercase text-blue-300 mb-3">
            ENGLISH CAMP
          </p>
          <h2 className="font-jakarta text-[clamp(28px,3.5vw,46px)] font-extrabold text-white leading-[1.15] tracking-tight mb-3">
            🏕️ 2025 여름
            <br />
            영어캠프
          </h2>
          <p className="text-base leading-[1.8] text-white/70 max-w-[560px]">
            초등 3학년 ~ 고등 1학년 대상. 원어민 교사 100%, 안전한 기숙 환경에서 3주간 집중 영어 몰입.
          </p>

          {/* 미국·캐나다 캠퍼스 — 별도 강조 */}
          <div className="flex gap-3.5 items-start mt-7 mb-2">
            <div className="w-[42px] h-[42px] bg-white/12 rounded-xl flex items-center justify-center text-[19px] flex-shrink-0 border border-white/20">
              🇺🇸
            </div>
            <div>
              <h4 className="font-bold text-sm text-white mb-0.5">미국·캐나다 현지 캠퍼스</h4>
              <p className="text-[13px] text-white/65 leading-[1.6]">
                명문 대학 캠퍼스 내 숙박·수업. 현지 문화를 직접 체험하며 영어 실력 급성장.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-3.5 items-start">
                <div className="w-[42px] h-[42px] bg-white/12 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Icon size={19} strokeWidth={1.8} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-0.5">{title}</h4>
                  <p className="text-[13px] text-white/65 leading-[1.6]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Pricing Card */}
        <div className="bg-white/10 border-[1.5px] border-white/25 rounded-2xl p-9 backdrop-blur-md">
          <h3 className="font-jakarta text-2xl font-extrabold text-white mb-1.5">🌟 얼리버드 특가</h3>
          <p className="text-[12px] text-white/55 mb-6">
            3주 기준 / 선착순 20명
            <br />
            <span className="font-jakarta text-[34px] font-extrabold text-blue-300 leading-none">
              ₩3,490,000
            </span>{' '}
            <span className="line-through text-white/40 text-[17px]">₩4,200,000</span>
          </p>

          <ul className="flex flex-col gap-2.5 mb-7">
            {features.map((f) => (
              <li key={f} className="flex gap-2 items-center text-[13px] text-white/85">
                <Check size={14} strokeWidth={2.5} className="text-blue-300 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="#consult"
            className="w-full flex items-center justify-center gap-2 bg-white text-brand px-8 py-4 rounded-lg font-bold text-[14px] no-underline shadow-lg hover:bg-brand-sky hover:-translate-y-0.5 transition-all"
          >
            🏕️ 캠프 무료 상담 신청
          </Link>
          <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-white/40 mt-3">
            <Zap size={11} strokeWidth={2.5} className="text-white/40" />
            잔여 자리 7석 · 마감 전 서둘러 주세요
          </p>
        </div>
      </div>
    </section>
  )
}
