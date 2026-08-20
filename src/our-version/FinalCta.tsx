import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { finalCta } from '../content'

/**
 * FinalCta
 * ---------------------------------------------------------------------------
 * Closing navy band with the primary call to action.
 */
export default function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-24 bg-navy py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">{finalCta.headline}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{finalCta.body}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={finalCta.ctaHref}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-gold/40 transition-all hover:bg-gold"
          >
            {finalCta.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-white/60">{finalCta.secondary}</p>
        </Reveal>
      </div>
    </section>
  )
}