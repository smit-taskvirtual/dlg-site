import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { hero, images, impact } from '../content'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Hero
 * ---------------------------------------------------------------------------
 * Full-viewport hero for the modern design: layered background image with a
 * navy gradient, an eyebrow chip, large headline, supporting copy and two
 * CTAs. Includes a compact stats row pulled from the impact metrics.
 */
export default function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }

  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  }

  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img src={images.hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/40" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(38,188,215,0.25), transparent 55%)' }}
        />
      </div>

      <motion.div
        variants={container}
        initial={reduce ? undefined : 'hidden'}
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-10"
      >
        <motion.div variants={item} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{hero.copy}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCtaHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-gold/40 transition-all hover:bg-gold"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryHref}
              className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              {hero.secondaryText}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/20 pt-8"
        >
          {impact.flat().slice(0, 3).map((metric) => (
            <div key={metric.label}>
              <dt className="sr-only">{metric.label}</dt>
              <dd className="text-2xl font-extrabold text-white sm:text-3xl">
                {metric.number}
                {metric.suffix && <span className="text-sm font-bold uppercase text-gold"> {metric.suffix}</span>}
              </dd>
              <dd className="mt-1 text-[11px] font-bold uppercase leading-snug tracking-[0.18em] text-white/70">
                {metric.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}