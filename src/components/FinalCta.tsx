import Reveal from './Reveal'
import { ArrowRight } from 'lucide-react'
import { finalCta } from '../content'

/**
 * FinalCta
 * ---------------------------------------------------------------------------
 * Strong, minimal navy closing section with a single clear call to action.
 */
export default function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-navy py-24 sm:py-32" aria-labelledby="cta-title">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="gold-rule mx-auto block h-px w-16" aria-hidden="true" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 id="cta-title" className="mt-10 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80">{finalCta.body}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={finalCta.ctaHref}
            className="group mt-10 inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-bold text-navy transition-colors hover:bg-white"
          >
            {finalCta.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-sm font-medium uppercase tracking-wider text-blue-100/50">{finalCta.secondary}</p>
        </Reveal>
      </div>
    </section>
  )
}