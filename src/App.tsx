import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OurVersionPage from './our-version/OurVersionPage'

/**
 * App
 * ---------------------------------------------------------------------------
 * Routes:
 *   /             -> the original homepage (unchanged)
 *   /our-version  -> an entirely new modern design with the same content.
 *                    Not linked from the main site; reachable by URL only.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-version" element={<OurVersionPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}