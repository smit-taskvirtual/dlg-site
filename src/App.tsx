import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Purpose from './components/Purpose'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import Products from './components/Products'
import GlobalNetwork from './components/GlobalNetwork'
import AIAdvisor from './components/AIAdvisor'
import Insights from './components/Insights'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Purpose />
        <Philosophy />
        <Services />
        <Products />
        <GlobalNetwork />
        <AIAdvisor />
        <Insights />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}