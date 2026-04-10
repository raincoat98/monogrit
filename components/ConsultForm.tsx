'use client'

import { useState, useRef, type FormEvent } from 'react'
import { Zap, Gift, Lock, Map, MapPin, Plane, CheckCircle, AlertCircle, type LucideIcon } from 'lucide-react'
import FadeIn from './FadeIn'

const points: { Icon: LucideIcon; text: string }[] = [
  { Icon: Zap,     text: '<strong>평균 3분 내 응답</strong> — 영업시간 내 빠른 연락 보장' },
  { Icon: Gift,    text: '<strong>상담비 완전 무료</strong> — 숨은 비용 없이 솔직하게' },
  { Icon: Lock,    text: '<strong>개인정보 철저 보호</strong> — 외부 제공 절대 없음' },
  { Icon: Map,     text: '<strong>맞춤 플랜 제공</strong> — 내 상황에 딱 맞는 플랜 무료 설계' },
  { Icon: MapPin,  text: '<strong>전국 4개 지점</strong> — 서울·부산·대구·대전 방문 상담 가능' },
]

export default function ConsultForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const form = e.currentTarget
    const body = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      country: (form.elements.namedItem('country') as HTMLSelectElement).value,
      program: (form.elements.namedItem('program') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? '오류가 발생했습니다.')
      }
      setSubmitted(true)
      formRef.current?.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="consult" className="bg-gray-50 px-5 md:px-[60px] py-24">
      <p className="text-[11px] font-bold tracking-[3px] uppercase text-brand mb-3">
        FREE CONSULTATION
      </p>
      <h2 className="font-jakarta text-[clamp(28px,3.5vw,46px)] font-extrabold text-gray-800 leading-[1.15] tracking-tight mb-3">
        지금 바로 무료 상담 신청
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 mt-14 items-start">
        {/* Left */}
        <div>
          <p className="text-base leading-[1.8] text-gray-500 max-w-[560px]">
            아직 어디서 시작해야 할지 모르시나요?
            <br />
            부담 없이 물어보세요. 전문가가 답드립니다.
          </p>
          <div className="flex flex-col gap-4 mt-7">
            {points.map(({ Icon, text }) => (
              <div key={text} className="flex gap-3.5 items-start text-[14px] leading-[1.7] text-gray-500">
                <span className="w-9 h-9 flex-shrink-0 bg-brand-light rounded-lg flex items-center justify-center">
                  <Icon size={17} strokeWidth={2} className="text-brand" />
                </span>
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <FadeIn>
          <div className="bg-white rounded-2xl p-9 shadow-[0_8px_48px_rgba(26,86,219,0.1)] border border-gray-200">
            <span className="inline-flex items-center gap-1.5 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full mb-4">
              <Gift size={11} strokeWidth={2.5} />
              컨설팅비 100% 무료
            </span>
            <h3 className="font-jakarta text-xl font-extrabold text-gray-800 mb-1.5">
              무료 상담 신청서
            </h3>
            <p className="text-[13px] text-gray-400 mb-6">
              작성 후 전담 컨설턴트가 24시간 내 연락드립니다.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-gray-800">이름 *</label>
                  <input name="name" type="text" placeholder="홍길동" required className="px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-gray-800">연락처 *</label>
                  <input name="phone" type="tel" placeholder="010-0000-0000" required className="px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-gray-800">이메일</label>
                  <input name="email" type="email" placeholder="email@example.com" className="px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-gray-800">희망 국가</label>
                  <select name="country" className="px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all">
                    <option value="">선택하세요</option>
                    {['미국', '캐나다', '영국', '호주', '뉴질랜드', '필리핀', '기타'].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-800">관심 프로그램</label>
                <select name="program" className="px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all">
                  <option value="">선택하세요</option>
                  {['명문대 입학 컨설팅', '어학연수', '영어캠프 (초중고)', '조기유학', 'MBA·대학원', '워킹홀리데이'].map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-gray-800">문의 내용</label>
                <textarea name="message" placeholder="궁금하신 점을 자유롭게 적어주세요." className="px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm text-gray-800 bg-gray-50 outline-none focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all resize-y min-h-[86px]" />
              </div>

              <div className="flex gap-2.5 items-start text-[11px] text-gray-400 mt-1.5">
                <input type="checkbox" required id="agree" className="mt-0.5 accent-brand" />
                <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다. (상담 목적으로만 활용되며, 제3자 제공 없음)</label>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-500 text-[13px] bg-red-50 rounded-lg px-3.5 py-2.5">
                  <AlertCircle size={15} strokeWidth={2} />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitted || loading}
                className={`shimmer w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-[15px] text-white border-none cursor-pointer transition-all ${
                  submitted ? 'bg-green-600 cursor-default' : 'bg-brand hover:bg-brand-dark shadow-brand-sm hover:shadow-brand-md disabled:opacity-70'
                }`}
              >
                {submitted ? (
                  <><CheckCircle size={18} strokeWidth={2.2} /> 신청 완료! 곧 연락드립니다.</>
                ) : loading ? (
                  <>신청 중...</>
                ) : (
                  <><Plane size={18} strokeWidth={2.2} /> 무료 상담 신청하기</>
                )}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
