import Header from '@/components/Header'
import MobileTabBar from '@/components/MobileTabBar'
import FloatingCTA from '@/components/FloatingCTA'
import UrgencyBanner from '@/components/UrgencyBanner'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Programs from '@/components/Programs'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'
import Camp from '@/components/Camp'
import ConsultForm from '@/components/ConsultForm'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

export default function Home() {
  return (
    <>
      <JsonLd />
      <MobileTabBar />
      <FloatingCTA />
      <Header />
      <UrgencyBanner />
      <main className="page-bottom-pad">
        <Hero />
        <SocialProof />
        <Programs />
        <Process />
        <Reviews />
        <Camp />
        <ConsultForm />
      </main>
      <Footer />
    </>
  )
}
