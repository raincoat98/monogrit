import ProgramsSwiper from './ProgramsSwiper'

export default function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-24 overflow-hidden">
      <div className="px-5 md:px-[60px]">
        <p className="text-[11px] font-bold tracking-[3px] uppercase text-brand mb-3">
          OUR PROGRAMS
        </p>
        <h2 className="font-jakarta text-[clamp(28px,3.5vw,46px)] font-extrabold text-gray-800 leading-[1.15] tracking-tight mb-3">
          맞춤형 유학 프로그램
        </h2>
        <p className="text-base leading-[1.8] text-gray-500 max-w-[560px]">
          목표와 예산에 맞는 최적의 플랜을 전문 컨설턴트가 1:1로 설계합니다.
        </p>
      </div>

      <ProgramsSwiper />
    </section>
  )
}
