'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y } from 'swiper/modules'
import { Star, BadgeCheck } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const reviews = [
  {
    initial: '김',
    name: '김지원 학생',
    detail: 'UCLA 경영학과 합격 · 2024',
    text: '처음엔 막막했는데 담당 선생님이 에세이부터 인터뷰까지 하나하나 코칭해 주셨어요. UCLA 합격 통보 받던 날 눈물이 났습니다.',
  },
  {
    initial: '박',
    name: '박OO 학부모',
    detail: '캐나다 조기유학 · 밴쿠버 · 2024',
    text: '중학교 2학년 아이를 캐나다로 보내면서 걱정이 많았는데, 홈스테이 선정부터 학교 적응까지 모든 걸 케어해 주셔서 정말 든든했어요.',
  },
  {
    initial: '이',
    name: '이수연 어머님',
    detail: '미국 여름 영어캠프 · 초등 5학년',
    text: '영어캠프 3주 다녀온 이후 아이가 영어 자신감이 완전히 달라졌어요. 원어민 선생님들과 24시간 생활하며 자연스럽게 늘더라고요.',
  },
  {
    initial: '최',
    name: '최민준 (32세)',
    detail: 'Kellogg MBA 합격 · 2023',
    text: '직장 다니면서 MBA 준비하느라 시간이 없었는데, 컨설턴트님이 일정 관리까지 도와주셔서 Kellogg MBA 합격할 수 있었어요.',
  },
  {
    initial: '정',
    name: '정아름 (26세)',
    detail: '호주 워킹홀리데이 · 시드니',
    text: '비자 거절이 두 번이나 됐던 저를 포기 안 하고 끝까지 함께해 주셨어요. 세 번째에 호주 비자 받고 지금 행복하게 워홀 중입니다!',
  },
  {
    initial: '강',
    name: '강태양 학생',
    detail: 'LSE 경제학과 합격 · 2024',
    text: 'London School of Economics 입학을 꿈꾼다고 하니 가능하다며 끝까지 믿어주셨어요. 합격 후 지금도 연락하며 지냅니다.',
  },
]

export default function ReviewsSwiper() {
  return (
    <div className="mt-14">
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        className="swiper-padded !pb-12"
        spaceBetween={16}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.reviews-next', prevEl: '.reviews-prev' }}
        grabCursor
        a11y={{ prevSlideMessage: '이전 후기', nextSlideMessage: '다음 후기' }}
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.name} className="h-auto">
            <div className="h-full bg-white rounded-2xl p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-t-[3px] border-t-brand flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-3.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} strokeWidth={0} fill="#f59e0b" />
                ))}
              </div>
              <p className="text-[14px] leading-[1.8] text-gray-500 mb-5 italic flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-brand-mid flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {r.initial}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[14px] text-gray-800">{r.name}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{r.detail}</p>
                </div>
                <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-bold whitespace-nowrap">
                  <BadgeCheck size={11} strokeWidth={2.5} />
                  인증
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop 화살표 */}
      <div className="hidden md:flex justify-end gap-2 px-[60px] mt-2">
        <button className="reviews-prev w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand shadow-sm hover:bg-brand-light transition-colors cursor-pointer">
          ←
        </button>
        <button className="reviews-next w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand shadow-sm hover:bg-brand-light transition-colors cursor-pointer">
          →
        </button>
      </div>
    </div>
  )
}
