import { motion, useReducedMotion } from 'framer-motion'

type TravelingRuleProps = {
  width?: number | string
  height?: string
  className?: string
  accent?: 'gold' | 'cobalt'
  duration?: number
}

/**
 * TravelingRule
 * ---------------------------------------------------------------------------
 * A prominent horizontal hairline with a bright segment that continuously
 * travels across it. Used as a signature always-animating motif across the
 * site (section dividers and heading rules).
 *
 * Design decision: the bright segment is a short gradient that animates `left`
 * from off-screen to off-screen and loops infinitely. It is purely decorative
 * (`aria-hidden`) and renders as a static hairline under reduced motion.
 */
export default function TravelingRule({
  width = '100%',
  height = 'h-px',
  className = '',
  accent = 'gold',
  duration = 3.2,
}: TravelingRuleProps) {
  const reduce = useReducedMotion()
  const c = accent === 'gold' ? '201,155,43' : '11,86,179'

  return (
    <div aria-hidden="true" className={`relative overflow-hidden ${height} ${className}`} style={{ width }}>
      <span className="absolute inset-0 bg-line" />
      {!reduce && (
        <motion.span
          className="absolute inset-y-0 w-14"
          style={{ background: `linear-gradient(90deg, transparent, rgba(${c},0.9), transparent)` }}
          animate={{ left: ['-14%', '114%'] }}
          transition={{ duration, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </div>
  )
}