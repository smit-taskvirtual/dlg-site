import Topbar from '../combined-version/Topbar'
import QuickLinks from '../components/QuickLinks'
import Hero from '../combined-version/Hero'
import Stats from '../our-version/Stats'
import Purpose from '../our-version/Purpose'
import Services from '../our-version/Services'
import Products from '../our-version/Products'
import Network from '../our-version/Network'
import Advisor from '../combined-version/Advisor'
import Insights from '../our-version/Insights'
import FinalCta from '../our-version/FinalCta'
import Footer from '../our-version/Footer'

/**
 * CombinedVersionPage
 * ---------------------------------------------------------------------------
 * /combined-version — the homepage's opening sections (topbar, quick links,
 * hero banner) followed by every section of /our-version (stats through
 * final CTA and footer). Neither existing page is modified, and this page is
 * not linked from either; reachable by URL only.
 */
export default function CombinedVersionPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <Topbar />
      <QuickLinks />
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