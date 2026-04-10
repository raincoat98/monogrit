'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const programs = [
  {
    icon: '🎓',
    title: '명문대 입학 컨설팅',
    desc: '아이비리그·Russell Group 등 세계 100대 대학 입시 전략 수립부터 에세이, 인터뷰까지 토탈 케어.',
    tags: ['미국', '영국', '캐나다', '호주'],
    featured: true,
  },
  {
    icon: '🗣️',
    title: '어학연수',
    desc: '단기 2주부터 장기 1년 과정까지. 현지 어학원 직접 파트너십으로 최저가 보장.',
    tags: ['필리핀', '몰타', '아일랜드'],
    featured: false,
  },
  {
    icon: '🏕️',
    title: '여름·겨울 영어캠프',
    desc: '초등~고등 대상 방학 특별 영어캠프. 원어민 교사 100%, 안전한 기숙사 환경 보장.',
    tags: ['캐나다', '미국', '영국'],
    featured: false,
  },
  {
    icon: '👔',
    title: '워킹홀리데이',
    desc: '비자 신청부터 현지 정착 지원, 취업 연계까지. 원스톱 워홀 서비스.',
    tags: ['호주', '뉴질랜드', '독일'],
    featured: false,
  },
  {
    icon: '🏫',
    title: '조기유학',
    desc: '초중고 조기유학 전문 설계. 현지 홈스테이·기숙학교 연계 및 학부모 케어 서비스 포함.',
    tags: ['미국', '캐나다', '싱가포르'],
    featured: false,
  },
  {
    icon: '💼',
    title: 'MBA·대학원',
    desc: 'Top 20 MBA 합격 전략. GMAT·GRE 준비부터 추천서, 에세이까지 전담 컨설턴트 배정.',
    tags: ['Wharton', 'LBS', 'INSEAD'],
    featured: false,
  },
]

export default function ProgramsSwiper() {
  return (
    <div className="mt-14 pt-3">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        className="swiper-padded !pb-12 !overflow-visible"
        spaceBetween={16}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        loop
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        grabCursor
        a11y={{ prevSlideMessage: '이전 프로그램', nextSlideMessage: '다음 프로그램' }}
      >
        {programs.map((p) => (
          <SwiperSlide key={p.title} className="h-auto">
            <div
              className={`relative h-full overflow-hidden rounded-2xl p-5 md:p-8 border-[1.5px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-card ${
                p.featured
                  ? 'border-brand bg-gradient-to-br from-white via-white to-brand-light'
                  : 'border-gray-200 bg-white hover:border-brand'
              }`}
            >
              {p.featured && (
                <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-brand text-white text-[10px] md:text-[11px] font-bold px-2.5 md:px-3 py-1 rounded-full">
                  🔥 인기
                </span>
              )}
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{p.icon}</div>
              <h3 className="font-jakarta text-[16px] md:text-[18px] font-bold text-gray-800 mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] leading-[1.75] text-gray-500 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-light text-brand border border-brand-sky"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
