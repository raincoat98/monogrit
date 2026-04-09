'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { X, CheckCircle, Plane, Zap, Lock, Gift } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileConsultModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) setTimeout(() => setSubmitted(false), 400)
  }, [open])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className={`md:hidden fixed inset-0 z-[1100] transition-all duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* 딤 배경 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* 바텀 시트 */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out max-h-[92vh] flex flex-col ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* 핸들 */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* 헤더 */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 flex-shrink-0">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">
              <Gift size={10} strokeWidth={2.5} />
              컨설팅비 100% 무료
            </span>
            <h2 className="font-jakarta text-[17px] font-extrabold text-gray-800 leading-tight">
              무료 상담 신청
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors border-none cursor-pointer"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* 폼 스크롤 영역 */}
        <div className="overflow-y-auto flex-1 px-6 py-5">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={36} strokeWidth={1.8} className="text-green-600" />
              </div>
              <h3 className="font-jakarta text-xl font-extrabold text-gray-800 mb-2">신청 완료!</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                전담 컨설턴트가 <strong className="text-gray-800">24시간 이내</strong>에 연락드립니다.
                <br />
                영업시간 내 평균 <strong className="text-gray-800">3분</strong> 응답 보장.
              </p>
              <button onClick={onClose} className="bg-brand text-white px-8 py-3 rounded-xl text-sm font-bold border-none cursor-pointer">
                닫기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-700">이름 *</label>
                  <input type="text" placeholder="홍길동" required className="px-3 py-2.5 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-700">연락처 *</label>
                  <input type="tel" placeholder="010-0000-0000" required className="px-3 py-2.5 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-gray-700">희망 국가</label>
                <select className="px-3 py-2.5 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white transition-all">
                  <option value="">선택하세요</option>
                  {['미국', '캐나다', '영국', '호주', '뉴질랜드', '필리핀', '독일', '싱가포르', '기타'].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-gray-700">관심 프로그램</label>
                <select className="px-3 py-2.5 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white transition-all">
                  <option value="">선택하세요</option>
                  {['명문대 입학 컨설팅', '어학연수', '영어캠프 (초중고)', '조기유학', 'MBA·대학원', '워킹홀리데이'].map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-gray-700">문의 내용 (선택)</label>
                <textarea placeholder="궁금하신 점을 자유롭게 적어주세요." className="px-3 py-2.5 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white transition-all resize-none h-20" />
              </div>

              <div className="flex gap-2 items-start text-[11px] text-gray-400">
                <input type="checkbox" id="m-agree" required className="mt-0.5 flex-shrink-0 accent-brand" />
                <label htmlFor="m-agree">개인정보 수집 및 이용에 동의합니다. (상담 목적 활용, 제3자 제공 없음)</label>
              </div>

              <button type="submit" className="shimmer w-full flex items-center justify-center gap-2 bg-brand text-white py-4 rounded-xl text-[15px] font-bold border-none cursor-pointer shadow-brand-sm hover:bg-brand-dark transition-colors mt-1">
                <Plane size={17} strokeWidth={2.2} />
                무료 상담 신청하기
              </button>

              {/* 신뢰 배지 */}
              <div className="flex justify-center gap-4 text-[10px] text-gray-400 pb-2">
                <span className="flex items-center gap-1"><Zap size={10} strokeWidth={2.5} /> 평균 3분 내 응답</span>
                <span className="flex items-center gap-1"><Lock size={10} strokeWidth={2.5} /> 개인정보 보호</span>
                <span className="flex items-center gap-1"><Gift size={10} strokeWidth={2.5} /> 완전 무료</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
