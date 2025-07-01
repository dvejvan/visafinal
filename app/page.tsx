import Navbar from '@/components/navbar'
import VisaHero from '@/components/visa-hero'
import TrustSection from '@/components/trust-section'
import HowItWorks from '@/components/how-it-works'
import CountriesGrid from '@/components/countries-grid'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <VisaHero />
        <CountriesGrid />
        <TrustSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
