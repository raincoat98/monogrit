import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://monogrit.co.kr'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Monogrit - 유학 전문 컨설팅',
    template: '%s | Monogrit',
  },
  description:
    '미국·캐나다·영국·호주 명문대 입학부터 어학연수, 영어캠프까지. 18년 경력, 누적 합격자 4,200명의 국내 1위 유학 전문 컨설팅. 무료 상담 신청.',
  keywords: [
    '유학 컨설팅', '미국 유학', '캐나다 유학', '영국 유학', '호주 유학',
    '어학연수', '영어캠프', '조기유학', 'MBA 컨설팅', '워킹홀리데이', '무료 유학 상담',
  ],
  authors: [{ name: 'Monogrit', url: BASE_URL }],
  creator: 'Monogrit',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: BASE_URL,
    siteName: 'Monogrit',
    title: 'Monogrit - 유학 전문 컨설팅',
    description:
      '미국·캐나다·영국·호주 명문대 입학부터 어학연수, 영어캠프까지. 18년 경력, 누적 합격자 4,200명.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Monogrit 유학 전문 컨설팅',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monogrit - 유학 전문 컨설팅',
    description: '미국·캐나다·영국·호주 명문대 입학부터 어학연수, 영어캠프까지. 무료 상담 신청.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
    // naver: 'REPLACE_WITH_NAVER_WEBMASTER_CODE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  )
}
