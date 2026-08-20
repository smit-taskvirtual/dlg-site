import Topbar from '../components/Topbar'
import QuickLinks from '../components/QuickLinks'
import Hero from '../components/Hero'
import IntroGrid from '../components/IntroGrid'
import EventsSection from '../components/EventsSection'
import CalendarSection from '../components/CalendarSection'
import LatestSection from '../components/LatestSection'
import Footer from '../components/Footer'

/**
 * HomePage
 * ---------------------------------------------------------------------------
 * The original homepage. Its composition mirrors theme/theme.html exactly:
 * topbar -> quick links -> hero image -> intro/impact + sidebar ->
 * events strip -> calendar grid -> latest cards -> footer.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-graytext antialiased">
      <Topbar />
      <QuickLinks />
      <main>
        <Hero />
        <IntroGrid />
        <EventsSection />
        <CalendarSection />
        <LatestSection />
      </main>
      <Footer />
    </div>
  )
}