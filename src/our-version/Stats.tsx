import Reveal from './Reveal'
import { impact } from '../content'

/**
 * Stats
 * ---------------------------------------------------------------------------
 * Modern metrics band: six impact figures as cards with brand-colored
 * accents, split across a responsive grid.
 */
const accents = ['text-cobalt', 'text-support', 'text-gold', 'text-deepblue', 'text-support', 'text-cobalt']

export default function Stats() {
  const metrics = impact.flat()

  return (
    <section className="bg-sky py-20" aria-label="Impact in numbers">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-cobalt">
            Impact in numbers
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Proof that sustainable debate works
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-8 shadow-[0_4px_24px_rgba(32,52,104,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(32,52,104,0.14)]">
                <span className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-sky" aria-hidden="true" />
                <p className={`text-5xl font-black tracking-tight ${accents[i % accents.length]}`}>
                  {metric.number}
                  {metric.suffix && (
                    <span className="text-xl font-bold uppercase">{' '}{metric.suffix}</span>
                  )}
                </p>
                <p className="mt-4 text-sm font-bold uppercase leading-snug tracking-[0.16em] text-ink">
                  {metric.label}
                </p>
                {metric.sub && <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">{metric.sub}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}