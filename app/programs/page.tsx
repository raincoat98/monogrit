import type { Metadata } from 'next'
import Header from '@/components/Header'
import MobileTabBar from '@/components/MobileTabBar'
import FloatingCTA from '@/components/FloatingCTA'
import Footer from '@/components/Footer'
import ProgramsPage from '@/components/ProgramsPage'

export const metadata: Metadata = {
  title: '국가별 프로그램 추천',
  description:
    '미국·캐나다·영국·호주·뉴질랜드·필리핀·독일·싱가포르 8개국 24개 유학 프로그램. 국가별·목적별로 나에게 맞는 프로그램을 찾아보세요.',
  openGraph: {
    title: '국가별 프로그램 추천 | Monogrit',
    description: '8개국 24개 유학 프로그램 — 국가와 목적에 맞는 최적 플랜을 찾아보세요.',
  },
}

export default function Page() {
  return (
    <>
      <MobileTabBar />
      <FloatingCTA />
      <Header />
      <main className="page-bottom-pad">
        <ProgramsPage />
      </main>
      <Footer />
    </>
  )
}
