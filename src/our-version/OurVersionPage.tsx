import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import Purpose from './Purpose'
import Services from './Services'
import Products from './Products'
import Network from './Network'
import Advisor from './Advisor'
import Insights from './Insights'
import FinalCta from './FinalCta'
import Footer from './Footer'

/**
 * OurVersionPage
 * ---------------------------------------------------------------------------
 * A completely new, modern design for the same homepage content. This page
 * lives at /our-version and is intentionally not linked from the main site.
 * All copy and imagery come from the shared content.ts source.
 */
export default function OurVersionPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Purpose />
        <Services />
        <Products />
        <Network />
        <Advisor />
        <Insights />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}