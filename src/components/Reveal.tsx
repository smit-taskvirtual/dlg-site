import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'figure'
}

/**
 * Reveal
 * ---------------------------------------------------------------------------
 * Standard scroll-in reveal used across the site.
 *
 * Design decision: content fades + rises a short distance with a soft,
 * professional ease-out. Distance is kept small and the delay low so reveal
 * never delays access to content. `useReducedMotion` collapses the animation
 * to a plain fade (no movement) for users who prefer reduced motion.
 */
export default function Reveal({ children, delay = 0, y = 20, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}