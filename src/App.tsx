import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OurVersionPage from './our-version/OurVersionPage'
import CombinedVersionPage from './pages/CombinedVersionPage'

/**
 * App
 * ---------------------------------------------------------------------------
 * Routes:
 *   /                 -> the original homepage (unchanged)
 *   /our-version      -> an entirely new modern design with the same content.
 *                        Not linked from the main site; reachable by URL only.
 *   /combined-version -> the homepage's opening sections (topbar, quick links,
 *                        hero) combined with Version 2's closing CTA band.
 *                        Not linked from either page; reachable by URL only.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-version" element={<OurVersionPage />} />
      <Route path="/combined-version" element={<CombinedVersionPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}