import Reveal from './Reveal'

/**
 * Philosophy
 * ---------------------------------------------------------------------------
 * Full-width, minimal editorial statement on deep navy.
 *
 * Design decision: restrained typography carries the message. A thin gold rule
 * and a subtle blueprint grid add institutional texture without competing with
 * the copy. Cobalt and gold accents keep the palette on-brand.
 */
export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-32" aria-label="Our philosophy">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="gold-rule mx-auto block h-px w-16" aria-hidden="true" />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-10 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We don’t teach debate.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-4 text-3xl font-bold leading-snug tracking-tight text-support sm:text-4xl">
            We build organizations that make debate sustainable.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-blue-100/70 sm:text-lg">
            The lasting impact of debate depends on durable institutions — with sound governance,
            reliable funding, and the leadership to sustain them for generations.
          </p>
        </Reveal>
      </div>
    </section>
  )
}