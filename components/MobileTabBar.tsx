'use client'

import { useState } from 'react'
import { Phone, Plane } from 'lucide-react'
import KakaoIcon from './KakaoIcon'
import MobileConsultModal from './MobileConsultModal'

export default function MobileTabBar() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[900] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 h-[60px]">
          <a
            href="tel:15991234"
            className="flex flex-col items-center justify-center gap-0.5 text-brand text-[10px] font-bold no-underline active:bg-gray-100 transition-colors"
          >
            <Phone size={20} strokeWidth={2} />
            <span>전화 상담</span>
          </a>

          <button
            onClick={() => setModalOpen(true)}
            className="flex flex-col items-center justify-center gap-0.5 bg-brand text-white text-[10px] font-bold border-none cursor-pointer"
          >
            <Plane size={20} strokeWidth={2} />
            <span>무료 상담</span>
          </button>

          <a
            href="#"
            className="flex flex-col items-center justify-center gap-0.5 bg-kakao text-[#1a1a1a] text-[10px] font-bold no-underline"
          >
            <KakaoIcon size={22} />
            <span>카카오</span>
          </a>
        </div>
      </div>

      <MobileConsultModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
