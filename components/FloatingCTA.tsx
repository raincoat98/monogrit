import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import KakaoIcon from './KakaoIcon'

export default function FloatingCTA() {
  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-[900] flex-col gap-2.5 items-end">
      <Link
        href="#consult"
        className="flex items-center gap-2 px-5 py-[13px] rounded-full bg-brand text-white text-[13px] font-bold no-underline shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
      >
        <MessageCircle size={15} strokeWidth={2.5} />
        무료 상담 신청
      </Link>
      <a
        href="tel:15991234"
        className="flex items-center gap-2 px-5 py-[13px] rounded-full bg-white text-brand border-[1.5px] border-brand text-[13px] font-bold no-underline shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
      >
        <Phone size={15} strokeWidth={2.5} />
        바로 전화하기
      </a>
      <a
        href="#"
        className="flex items-center gap-2 px-5 py-[13px] rounded-full bg-kakao text-[#1a1a1a] text-[13px] font-bold no-underline shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
      >
        <KakaoIcon size={15} />
        카카오 상담
      </a>
    </div>
  )
}
