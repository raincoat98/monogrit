import ReviewsSwiper from './ReviewsSwiper'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 py-24 overflow-hidden">
      <div className="px-5 md:px-[60px]">
        <p className="text-[11px] font-bold tracking-[3px] uppercase text-brand mb-3">
          SUCCESS STORIES
        </p>
        <h2 className="font-jakarta text-[clamp(28px,3.5vw,46px)] font-extrabold text-gray-800 leading-[1.15] tracking-tight mb-3">
          4,200명의 합격 후기
        </h2>
        <p className="text-base leading-[1.8] text-gray-500 max-w-[560px]">
          실제 합격생들의 솔직한 이야기를 확인하세요.
        </p>
      </div>

      <ReviewsSwiper />
    </section>
  )
}
