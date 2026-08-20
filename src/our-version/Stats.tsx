import Reveal from './Reveal'
import { impact } from '../content'

/**
 * Stats
 * ---------------------------------------------------------------------------
 * Metrics band that replicates the main homepage's impact presentation
 * exactly: three bordered columns with big brand-colored numbers, uppercase
 * letter-spaced labels and dividing rules.
 */
const numberColors = ['text-imporange', 'text-impblue', 'text-imprime', 'text-impcyan', 'text-impblue', 'text-imporange']
const dividerColors = ['bg-imporange', 'bg-impblue', 'bg-impcyan']
const borders = ['border-impborder', 'border-impborder', 'border-impborder2']

export default function Stats() {
  return (
    <section className="bg-white py-16" aria-label="Impact in numbers">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Impact in numbers
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Proof that sustainable debate works
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 grid max-w-[960px] grid-cols-3">
            {impact.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex min-h-[300px] flex-col justify-around border-l-[3px] px-[22px] py-[5px] text-center ${borders[colIndex]}`}
              >
                {column.map((metric, metricIndex) => {
                  const colorIndex = colIndex * 2 + metricIndex
                  return (
                    <div key={metric.label}>
                      <div className={`my-[5px] text-[40px] font-bold leading-[0.95] ${numberColors[colorIndex]}`}>
                        {metric.number}
                        {metric.suffix && <small className="text-base font-bold uppercase">{' '}{metric.suffix}</small>}
                      </div>
                      <div className="text-[12px] font-bold uppercase leading-snug tracking-[2px] text-label">
                        {metric.label}
                        {metric.sub && <span className="block">{metric.sub}</span>}
                      </div>
                      {metricIndex === 0 && (
                        <div className={`divider mx-auto my-4 h-[3px] w-4/5 ${dividerColors[colIndex]}`} />
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}