import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/**
 * ScrollToTop (combined version)
 * ---------------------------------------------------------------------------
 * Floating "go to top" button matching the page's navy/gold design. Appears
 * after scrolling past the hero, shows a gold progress ring that fills with
 * scroll depth, and springs back into view/hover with soft animations.
 */
const RADIUS = 25
const SIZE = 56
const CENTER = SIZE / 2

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const reduce = useReducedMotion()
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })

  useMotionValueEvent(scrollY, 'change', (value) => setVisible(value > 400))

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Go to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="group fixed bottom-6 right-6 z-50 grid place-items-center rounded-full bg-navy text-white shadow-[0_12px_32px_rgba(0,0,128,0.35)] transition-shadow hover:shadow-[0_16px_40px_rgba(255,215,0,0.45)]"
          style={{ width: SIZE, height: SIZE }}
        >
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            aria-hidden="true"
          >
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              strokeWidth="3"
              className="stroke-white/25"
            />
            <motion.circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              className="stroke-gold"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp
            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}