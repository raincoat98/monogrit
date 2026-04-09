'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

export default function UrgencyBanner() {
  const [time, setTime] = useState('03:42:17')

  useEffect(() => {
    const getEnd = () => {
      const stored = sessionStorage.getItem('cd_end')
      if (stored) return Number(stored)
      const end = Date.now() + (3 * 3600 + 42 * 60 + 17) * 1000
      sessionStorage.setItem('cd_end', String(end))
      return end
    }

    const end = getEnd()

    const tick = () => {
      const diff = Math.max(0, end - Date.now())
      const h = String(Math.floor(diff / 3600000)).padStart(2, '0')
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0')
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mt-[68px] bg-red-500 px-5 py-3 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3.5 text-center">
      <div className="flex items-center gap-2 justify-center font-bold text-[13px] md:text-sm text-white flex-wrap">
        <span className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap">
          <Clock size={11} strokeWidth={2.5} />
          마감임박
        </span>
        <span>조기지원 혜택 종료까지&nbsp;</span>
        <span className="font-jakarta text-[17px] md:text-[20px] font-extrabold text-yellow-200 tracking-wider">
          {time}
        </span>
      </div>
      <div className="text-xs md:text-sm font-medium text-white/90">
        지금 신청하면{' '}
        <strong className="text-yellow-300 font-bold">컨설팅비 100% 면제</strong>
      </div>
    </div>
  )
}
