import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { hero, images } from '../content'

// Typed as a tuple so Framer Motion accepts the cubic-bezier array.
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/**
 * HeroNetwork
 * ---------------------------------------------------------------------------
 * Ambient, understated world-network dots and lines placed behind the hero
 * image. Lines gently draw in once; dots pulse very slowly. `useReducedMotion`
 * disables the pulsing entirely for users who prefer reduced motion.
 */
function HeroNetwork() {
  const reduce = useReducedMotion()
  const nodes = [
    { x: 8, y: 22 },
    { x: 30, y: 12 },
    { x: 52, y: 30 },
    { x: 74, y: 14 },
    { x: 90, y: 26 },
    { x: 18, y: 60 },
    { x: 42, y: 74 },
    { x: 66, y: 58 },
    { x: 84, y: 70 },
    { x: 32, y: 46 },
  ]
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => {
          const key = `${i}-${j}`
          return (
            <motion.line
              key={key}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#0B56B3"
              strokeOpacity="0.14"
              strokeWidth="0.18"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.4 + (i + j) * 0.04, ease: 'easeOut' }}
            />
          )
        }),
      )}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="0.7"
          fill="#2D78D1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
          {...(reduce
            ? {}
            : {
                animate: {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.25, 1],
                },
                transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 + i * 0.06 },
              })}
        />
      ))}
    </svg>
  )
}

/**
 * Hero
 * ---------------------------------------------------------------------------
 * Two-column desktop layout: staggered copy on the left, editorial image with
 * a subtle network overlay and floating stat card on the right.
 *
 * Design decisions:
 * - Copy uses a `motion.ul` container with staggered children for a refined
 *   entrance that never blocks content.
 * - The floating card has a very slow, subtle y-oscillation, disabled under
 *   reduced motion, so motion stays institutional rather than playful.
 */
export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-40" aria-label="Introduction">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
        {/* Copy column */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-cobalt"
          >
            <span className="gold-rule h-px w-10" aria-hidden="true" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {hero.copy}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCtaHref}
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryHref}
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-cobalt"
            >
              {hero.secondaryText}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Proof points */}
          <motion.ul variants={item} className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {hero.proofPoints.map((point) => (
              <li key={point.label} className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-extrabold tracking-tight text-navy">{point.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">{point.label}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-sm border border-line">
            <img
              src={images.hero}
              alt="Diverse students collaborating on a laptop during an engaging discussion"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" aria-hidden="true" />
          </div>
          <HeroNetwork />

          {/* Floating credential card */}
          <motion.div
            {...(reduce ? {} : { animate: { y: [0, -8, 0] }, transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' } })}
            className="absolute -bottom-6 -left-2 max-w-[16rem] rounded-sm border border-line bg-white p-5 shadow-[0_12px_40px_rgba(6,43,85,0.12)] sm:-left-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Global Reach</p>
            <p className="mt-2 text-3xl font-extrabold text-navy">60+</p>
            <p className="mt-1 text-sm text-muted">Countries served across six regions</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}