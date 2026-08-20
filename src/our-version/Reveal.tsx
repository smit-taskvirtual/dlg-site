import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

/**
 * Reveal
 * ---------------------------------------------------------------------------
 * Scroll-triggered fade/slide-in wrapper for the modern /our-version design.
 * Uses whileInView so elements animate in as they enter the viewport.
 */
export default function Reveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}