'use client'

import { useState, useEffect, useCallback } from 'react'
import { LogOut, RefreshCw, Trash2, Search, Download, Lock, Eye, EyeOff } from 'lucide-react'
import type { Consultation, ConsultStatus } from '@/lib/db'

// ── 상태 메타데이터 ──────────────────────────────────────────────
const STATUS_META: Record<ConsultStatus, { label: string; color: string }> = {
  new:       { label: '신규',     color: 'bg-blue-100 text-blue-700' },
  contacted: { label: '연락완료', color: 'bg-yellow-100 text-yellow-700' },
  consulted: { label: '상담완료', color: 'bg-purple-100 text-purple-700' },
  enrolled:  { label: '등록완료', color: 'bg-green-100 text-green-700' },
  cancelled: { label: '취소',     color: 'bg-gray-100 text-gray-500' },
}

// ── 날짜 포맷 ────────────────────────────────────────────────────
function fmt(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

// ── CSV 내보내기 ─────────────────────────────────────────────────
function exportCsv(data: Consultation[]) {
  const header = ['번호', '이름', '연락처', '이메일', '희망국가', '관심프로그램', '문의내용', '상태', '신청일시']
  const rows = data.map((c, i) => [
    i + 1,
    c.name,
    c.phone,
    c.email,
    c.country,
    c.program,
    c.message.replace(/\n/g, ' '),
    STATUS_META[c.status].label,
    fmt(c.createdAt),
  ])
  const csv = [header, ...rows].map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n')
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `상담신청_${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

// ════════════════════════════════════════════════════════════════
// Login View
// ════════════════════════════════════════════════════════════════
function LoginView({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    })
    setLoading(false)
    if (res.ok) {
      onLogin()
    } else {
      const data = await res.json()
      setError(data.error ?? '로그인 실패')
      setPw('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-3xl font-extrabold tracking-tight text-[#1a56db]">MONOGRIT</span>
          <p className="text-gray-400 text-sm mt-1">관리자 로그인</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700">비밀번호</label>
            <div className="relative">
              <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={show ? 'text' : 'password'}
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="관리자 비밀번호"
                required
                autoFocus
                className="w-full pl-9 pr-10 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm text-gray-800 outline-none focus:border-[#1a56db] focus:shadow-[0_0_0_3px_rgba(26,86,219,0.08)] transition-all"
              />
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {show ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#1a56db] hover:bg-[#1e429f] text-white rounded-lg text-sm font-bold transition-colors disabled:opacity-60"
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════
// Dashboard View
// ════════════════════════════════════════════════════════════════
function DashboardView({ onLogout }: { onLogout: () => void }) {
  const [data, setData] = useState<Consultation[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<ConsultStatus | 'all'>('all')
  const [programFilter, setProgramFilter] = useState('')
  const [search, setSearch] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/admin/enrollments')
    if (res.ok) setData(await res.json())
    setLoading(false)
  }, [])

  useEffect(() => { fetchData() }, [fetchData])

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    onLogout()
  }

  async function handleStatusChange(id: string, status: ConsultStatus) {
    await fetch(`/api/admin/enrollments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    setData((prev) => prev.map((c) => c.id === id ? { ...c, status, updatedAt: new Date().toISOString() } : c))
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`'${name}' 님의 신청을 삭제하시겠습니까?`)) return
    await fetch(`/api/admin/enrollments/${id}`, { method: 'DELETE' })
    setData((prev) => prev.filter((c) => c.id !== id))
  }

  // 필터 적용
  const filtered = data.filter((c) => {
    if (statusFilter !== 'all' && c.status !== statusFilter) return false
    if (programFilter && c.program !== programFilter) return false
    if (search) {
      const q = search.toLowerCase()
      if (!c.name.toLowerCase().includes(q) && !c.phone.includes(q) && !c.email.toLowerCase().includes(q)) return false
    }
    return true
  })

  // 통계
  const stats = {
    total: data.length,
    new: data.filter((c) => c.status === 'new').length,
    contacted: data.filter((c) => c.status === 'contacted').length,
    enrolled: data.filter((c) => c.status === 'enrolled').length,
  }

  const programs = Array.from(new Set(data.map((c) => c.program).filter(Boolean)))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold tracking-tight text-[#1a56db]">MONOGRIT</span>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-semibold text-gray-600">관리자 대시보드</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchData}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw size={13} />
            새로고침
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-500 hover:text-red-700 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
          >
            <LogOut size={13} />
            로그아웃
          </button>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: '총 신청', value: stats.total, color: 'text-gray-800' },
            { label: '신규 (미처리)', value: stats.new, color: 'text-blue-600' },
            { label: '연락완료', value: stats.contacted, color: 'text-yellow-600' },
            { label: '등록완료', value: stats.enrolled, color: 'text-green-600' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              <p className={`text-3xl font-extrabold ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4 flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative min-w-[200px] flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="이름, 연락처, 이메일 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#1a56db] transition-colors"
            />
          </div>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as ConsultStatus | 'all')}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-[#1a56db] transition-colors"
          >
            <option value="all">전체 상태</option>
            {(Object.keys(STATUS_META) as ConsultStatus[]).map((s) => (
              <option key={s} value={s}>{STATUS_META[s].label}</option>
            ))}
          </select>

          {/* Program filter */}
          <select
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-[#1a56db] transition-colors"
          >
            <option value="">전체 프로그램</option>
            {programs.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>

          {/* CSV export */}
          <button
            onClick={() => exportCsv(filtered)}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-[#1a56db] border border-[#1a56db] rounded-lg hover:bg-blue-50 transition-colors ml-auto whitespace-nowrap"
          >
            <Download size={14} />
            CSV 내보내기
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">
              상담 신청 목록
              <span className="ml-2 text-gray-400 font-normal text-xs">({filtered.length}건)</span>
            </p>
          </div>

          {loading ? (
            <div className="py-16 text-center text-gray-400 text-sm">불러오는 중...</div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-400 text-sm">신청 내역이 없습니다.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-xs text-gray-500 font-semibold">
                    <th className="px-4 py-3 text-left whitespace-nowrap">번호</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">이름</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">연락처</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">이메일</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">희망국가</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">관심프로그램</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">신청일시</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">상태</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">관리</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c, i) => (
                    <>
                      <tr
                        key={c.id}
                        className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                      >
                        <td className="px-4 py-3 text-gray-400">{filtered.length - i}</td>
                        <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{c.name}</td>
                        <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{c.phone}</td>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{c.email || '-'}</td>
                        <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{c.country || '-'}</td>
                        <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{c.program || '-'}</td>
                        <td className="px-4 py-3 text-gray-400 whitespace-nowrap text-xs">{fmt(c.createdAt)}</td>
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={c.status}
                            onChange={(e) => handleStatusChange(c.id, e.target.value as ConsultStatus)}
                            className={`text-xs font-semibold px-2 py-1 rounded-full border-0 outline-none cursor-pointer ${STATUS_META[c.status].color}`}
                          >
                            {(Object.keys(STATUS_META) as ConsultStatus[]).map((s) => (
                              <option key={s} value={s}>{STATUS_META[s].label}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => handleDelete(c.id, c.name)}
                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="삭제"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                      {expandedId === c.id && (
                        <tr key={`${c.id}-detail`} className="bg-blue-50 border-t border-blue-100">
                          <td colSpan={9} className="px-6 py-4">
                            <div className="flex flex-col gap-1.5">
                              <p className="text-xs font-bold text-gray-600 mb-1">문의 내용</p>
                              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                                {c.message || '(내용 없음)'}
                              </p>
                              <p className="text-[11px] text-gray-400 mt-2">
                                최종 수정: {fmt(c.updatedAt)}
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════
// Admin Page (root)
// ════════════════════════════════════════════════════════════════
export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/admin/check')
      .then((r) => r.json())
      .then((d) => setAuthenticated(d.authenticated))
      .catch(() => setAuthenticated(false))
  }, [])

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">로딩 중...</div>
      </div>
    )
  }

  if (!authenticated) {
    return <LoginView onLogin={() => setAuthenticated(true)} />
  }

  return <DashboardView onLogout={() => setAuthenticated(false)} />
}
