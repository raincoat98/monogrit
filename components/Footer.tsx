import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import KakaoIcon from './KakaoIcon'

const footerLinks = {
  프로그램: ['명문대 컨설팅', '어학연수', '영어캠프', '조기유학', 'MBA·대학원', '워킹홀리데이'],
  정보: ['회사소개', '합격후기', '유학정보 블로그', 'FAQ', '채용안내'],
}

const contactItems = [
  { Icon: Phone,  text: '1599-1234',           href: 'tel:15991234' },
  { Icon: MapPin, text: '서울 강남구 테헤란로 123', href: '#' },
  { Icon: Clock,  text: '평일 09:00 – 19:00',    href: '#' },
  { Icon: Mail,   text: 'info@monogrit.co.kr',   href: 'mailto:info@monogrit.co.kr' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 px-5 md:px-[60px] pt-16 footer-bottom-pad">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-11 border-b border-white/8 pb-11 mb-7">
        {/* Brand */}
        <div>
          <div className="font-jakarta text-[22px] font-extrabold text-brand-mid mb-3">
            Mono<span className="text-white">grit</span>
          </div>
          <p className="text-[13px] text-white/45 leading-[1.8]">
            2006년 설립 이래 18년간 4,200명 이상의
            <br />
            유학생을 성공적으로 연결한 국내 최고의
            <br />
            유학 컨설팅 전문 기업입니다.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-[13px] font-bold text-white mb-4">{heading}</h4>
            {links.map((l) => (
              <a key={l} href="#" className="block text-[12px] text-white/45 no-underline mb-2.5 hover:text-brand-mid transition-colors">
                {l}
              </a>
            ))}
          </div>
        ))}

        {/* 고객센터 with icons */}
        <div>
          <h4 className="text-[13px] font-bold text-white mb-4">고객센터</h4>
          {/* Kakao */}
          <a href="#" className="flex items-center gap-2 text-[12px] text-white/45 no-underline mb-2.5 hover:text-[#fee500] transition-colors">
            <KakaoIcon size={13} />
            카카오 상담
          </a>
          {contactItems.map(({ Icon, text, href }) => (
            <a key={text} href={href} className="flex items-center gap-2 text-[12px] text-white/45 no-underline mb-2.5 hover:text-brand-mid transition-colors">
              <Icon size={13} strokeWidth={2} className="flex-shrink-0" />
              {text}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] text-white/25">
        <span>© 2025 Monogrit. All rights reserved. | 사업자등록번호 123-45-67890</span>
        <span>개인정보처리방침 · 이용약관</span>
      </div>
    </footer>
  )
}
