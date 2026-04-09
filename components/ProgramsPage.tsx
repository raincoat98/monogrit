'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  programs,
  countries,
  programTypes,
  typeStyle,
  type ProgramItem,
  type ProgramType,
} from '@/data/programs'

// ── Country Tab ──────────────────────────────────────────────
function CountryTab({
  flag,
  name,
  active,
  count,
  onClick,
}: {
  flag: string
  name: string
  active: boolean
  count: number
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border-2 transition-all flex-shrink-0 min-w-[72px] cursor-pointer ${
        active
          ? 'border-brand bg-brand text-white shadow-brand-sm'
          : 'border-gray-200 bg-white text-gray-600 hover:border-brand hover:text-brand'
      }`}
    >
      <span className="text-2xl leading-none">{flag}</span>
      <span className="text-[12px] font-bold whitespace-nowrap">{name}</span>
      <span
        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
          active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
        }`}
      >
        {count}
      </span>
    </button>
  )
}

// ── Program Card ─────────────────────────────────────────────
function ProgramCard({ p }: { p: ProgramItem }) {
  const style = typeStyle[p.type]
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-brand-card hover:border-brand transition-all duration-300 relative overflow-hidden">
      {p.featured && (
        <span className="absolute top-4 right-4 bg-brand text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
          ★ 추천
        </span>
      )}

      {/* Header */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-lg">{p.flag}</span>
        <span className="text-[13px] font-semibold text-gray-500">{p.country}</span>
        <span
          className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${style.bg} ${style.text}`}
        >
          {p.type}
        </span>
      </div>

      {/* Title & Desc */}
      <div>
        <h3 className="font-jakarta text-[17px] font-bold text-gray-800 mb-2 leading-tight">
          {p.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-[1.8]">{p.desc}</p>
      </div>

      {/* Meta */}
      <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100">
        {[
          { icon: '⏱', label: '기간', value: p.duration },
          { icon: '💰', label: '비용', value: p.cost },
          { icon: '👤', label: '대상', value: p.target },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-[10px] text-gray-400 font-medium mb-0.5">{m.icon} {m.label}</p>
            <p className="text-[11px] text-gray-700 font-semibold leading-tight">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-brand-light text-brand border border-brand-sky"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="#consult"
        className="mt-auto w-full flex items-center justify-center gap-1.5 bg-brand text-white py-3 rounded-xl text-[13px] font-bold no-underline hover:bg-brand-dark transition-colors"
      >
        무료 상담 신청 →
      </Link>
    </div>
  )
}

// ── Empty State ───────────────────────────────────────────────
function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <p className="text-5xl mb-4">🔍</p>
      <p className="text-gray-800 font-bold text-lg mb-2">조건에 맞는 프로그램이 없어요</p>
      <p className="text-gray-400 text-sm mb-6">필터를 초기화하거나 다른 국가를 선택해보세요.</p>
      <button
        onClick={onReset}
        className="bg-brand text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-brand-dark transition-colors cursor-pointer border-none"
      >
        전체 보기
      </button>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────
export default function ProgramsPage() {
  const [activeCountry, setActiveCountry] = useState('전체')
  const [activeType, setActiveType] = useState<ProgramType | '전체'>('전체')

  const countPerCountry = useMemo(() => {
    const map: Record<string, number> = { 전체: programs.length }
    programs.forEach((p) => {
      map[p.country] = (map[p.country] ?? 0) + 1
    })
    return map
  }, [])

  const filtered = useMemo(() => {
    return programs.filter((p) => {
      const byCountry = activeCountry === '전체' || p.country === activeCountry
      const byType = activeType === '전체' || p.type === activeType
      return byCountry && byType
    })
  }, [activeCountry, activeType])

  const reset = () => {
    setActiveCountry('전체')
    setActiveType('전체')
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <div
        className="pt-[68px]"
        style={{ background: 'linear-gradient(135deg, #0f2b6b 0%, #1a56db 55%, #3b82f6 100%)' }}
      >
        <div className="px-5 md:px-[60px] py-14">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-[12px] font-medium mb-5">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/50">
              홈
            </Link>
            <span>/</span>
            <span className="text-white">프로그램 추천</span>
          </div>

          <p className="text-[11px] font-bold tracking-[3px] uppercase text-blue-300 mb-3">
            PROGRAMS BY COUNTRY
          </p>
          <h1 className="font-jakarta text-[clamp(28px,4vw,52px)] font-extrabold text-white leading-[1.15] tracking-tight mb-4">
            국가별 맞춤 프로그램 추천
          </h1>
          <p className="text-base text-white/70 max-w-lg leading-relaxed">
            가고 싶은 나라를 선택하면 최적의 유학 프로그램을 바로 확인할 수 있어요.
            <br />총 8개국 · {programs.length}개 프로그램
          </p>
        </div>
      </div>

      {/* ── Sticky Filter Bar ── */}
      <div className="sticky top-[68px] z-30 bg-white border-b border-gray-200 shadow-sm">
        {/* Country Tabs */}
        <div className="px-5 md:px-[60px] pt-4 pb-3">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            국가 선택
          </p>
          <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
            {countries.map((c) => (
              <CountryTab
                key={c.name}
                flag={c.flag}
                name={c.name}
                active={activeCountry === c.name}
                count={countPerCountry[c.name] ?? 0}
                onClick={() => setActiveCountry(c.name)}
              />
            ))}
          </div>
        </div>

        {/* Type Filter Chips */}
        <div className="px-5 md:px-[60px] pb-4 border-t border-gray-100 pt-3">
          <div className="flex gap-2 flex-wrap">
            {programTypes.map((t) => (
              <button
                key={t.value}
                onClick={() => setActiveType(t.value)}
                className={`px-4 py-2 rounded-full text-[12px] font-bold border transition-all cursor-pointer ${
                  activeType === t.value
                    ? 'bg-brand text-white border-brand'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-brand hover:text-brand'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="bg-gray-50 min-h-[60vh] px-5 md:px-[60px] py-10">
        {/* Count + active filters */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[15px] font-bold text-gray-800">
              총{' '}
              <span className="text-brand">{filtered.length}</span>개 프로그램
            </span>
            {(activeCountry !== '전체' || activeType !== '전체') && (
              <div className="flex gap-1.5 flex-wrap">
                {activeCountry !== '전체' && (
                  <span className="flex items-center gap-1 bg-brand-light text-brand text-[11px] font-semibold px-2.5 py-1 rounded-full border border-brand-sky">
                    {countries.find((c) => c.name === activeCountry)?.flag} {activeCountry}
                    <button
                      onClick={() => setActiveCountry('전체')}
                      className="ml-0.5 text-brand/60 hover:text-brand cursor-pointer bg-transparent border-none p-0 leading-none"
                    >
                      ×
                    </button>
                  </span>
                )}
                {activeType !== '전체' && (
                  <span className="flex items-center gap-1 bg-brand-light text-brand text-[11px] font-semibold px-2.5 py-1 rounded-full border border-brand-sky">
                    {activeType}
                    <button
                      onClick={() => setActiveType('전체')}
                      className="ml-0.5 text-brand/60 hover:text-brand cursor-pointer bg-transparent border-none p-0 leading-none"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
          {(activeCountry !== '전체' || activeType !== '전체') && (
            <button
              onClick={reset}
              className="text-[12px] text-gray-400 hover:text-brand transition-colors cursor-pointer bg-transparent border-none underline"
            >
              필터 초기화
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.length > 0 ? (
            filtered.map((p) => <ProgramCard key={p.id} p={p} />)
          ) : (
            <EmptyState onReset={reset} />
          )}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div
        className="px-5 md:px-[60px] py-16 text-center"
        style={{ background: 'linear-gradient(135deg, #0f2b6b 0%, #1a56db 100%)' }}
      >
        <p className="text-white/70 text-sm mb-2">원하는 프로그램을 찾지 못하셨나요?</p>
        <h2 className="font-jakarta text-2xl md:text-3xl font-extrabold text-white mb-6">
          전문 컨설턴트에게 직접 물어보세요
        </h2>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/#consult"
            className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-lg font-bold text-[15px] no-underline shadow-lg hover:bg-brand-sky hover:-translate-y-0.5 transition-all"
          >
            🎓 무료 상담 신청
          </Link>
          <a
            href="tel:15991234"
            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-[15px] no-underline border-[1.5px] border-white/50 hover:border-white hover:bg-white/10 transition-all"
          >
            📞 바로 전화하기
          </a>
        </div>
      </div>
    </>
  )
}
