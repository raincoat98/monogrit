import FadeIn from './FadeIn'

const steps = [
  {
    num: '01',
    title: '무료 상담 신청',
    desc: '온라인 폼 or 카카오톡으로 간편하게 신청 (3분 완료)',
    badge: '3분 완료',
  },
  {
    num: '02',
    title: '전담 매니저 배정',
    desc: '24시간 내 전문 컨설턴트가 직접 연락드립니다',
    badge: '24h 이내',
  },
  {
    num: '03',
    title: '맞춤 플랜 제안',
    desc: '목표·예산에 맞는 최적 유학 플랜을 무료로 제안합니다',
    badge: '무료',
  },
  {
    num: '04',
    title: '비자·입학 지원',
    desc: '서류 준비부터 비자 신청, 합격까지 전 과정 케어',
    badge: '전과정',
  },
  {
    num: '05',
    title: '출국 후 지원',
    desc: '현지 정착, 학교 적응까지 완벽 사후 관리',
    badge: '사후관리',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-white px-5 md:px-[60px] py-24">
      <p className="text-[11px] font-bold tracking-[3px] uppercase text-brand mb-3">
        HOW IT WORKS
      </p>
      <h2 className="font-jakarta text-[clamp(28px,3.5vw,46px)] font-extrabold text-gray-800 leading-[1.15] tracking-tight mb-3">
        빠르고 쉬운 상담 절차
      </h2>
      <p className="text-base leading-[1.8] text-gray-500 max-w-[560px]">
        지금 신청하면 24시간 내 전담 컨설턴트가 직접 연락드립니다.
      </p>

      {/* ── Mobile: 세로 타임라인 ── */}
      <FadeIn className="md:hidden mt-10">
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              {/* 왼쪽: 번호 원 + 연결선 */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-brand flex items-center justify-center font-jakarta text-[17px] font-extrabold text-brand shadow-[0_4px_16px_rgba(26,86,219,0.18)] z-10">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 min-h-[44px] my-1"
                    style={{ background: 'linear-gradient(to bottom, #1a56db, #3b82f6)' }}
                  />
                )}
              </div>

              {/* 오른쪽: 내용 */}
              <div className={`pt-2 ${i < steps.length - 1 ? 'pb-7' : 'pb-2'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-[15px] text-gray-800">{step.title}</h3>
                  <span className="text-[10px] font-bold bg-brand-light text-brand px-2 py-0.5 rounded-full border border-brand-sky">
                    {step.badge}
                  </span>
                </div>
                <p className="text-[13px] text-gray-500 leading-[1.7]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── Desktop: 가로 5단계 ── */}
      <FadeIn className="hidden md:block">
        <div className="process-connector relative grid grid-cols-5 gap-6 mt-16">
          {steps.map((step) => (
            <div key={step.num} className="text-center px-2 relative z-10">
              <div className="w-[76px] h-[76px] rounded-full bg-white border-[2.5px] border-brand flex items-center justify-center mx-auto mb-5 font-jakarta text-[22px] font-extrabold text-brand shadow-[0_4px_16px_rgba(26,86,219,0.18)]">
                {step.num}
              </div>
              <h3 className="font-bold text-[15px] text-gray-800 mb-1.5">{step.title}</h3>
              <p className="text-[12px] text-gray-500 leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
