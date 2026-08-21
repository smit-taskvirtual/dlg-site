import Reveal from './Reveal'
import { purpose, images } from '../content'

/**
 * Purpose
 * ---------------------------------------------------------------------------
 * Two-column editorial section: image panel on the left and the four
 * numbered purpose stages on the right as a vertical timeline.
 */
export default function Purpose() {
  return (
    <section id="purpose" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,128,0.18)]">
              <img
                src={images.purpose}
                alt="Students studying together"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-navy p-6 text-white shadow-xl sm:block">
              <p className="text-4xl font-black text-gold">170</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                Years of Debate
                <br />
                Experience
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Our Purpose</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
              {purpose.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{purpose.copy}</p>
          </Reveal>

          <ol className="mt-12 space-y-0">
            {purpose.stages.map((stage, i) => (
              <Reveal key={stage.step} delay={i * 0.06}>
                <li className="relative flex gap-6 border-l-2 border-line pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[15px] flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[11px] font-black text-white">
                    {stage.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{stage.copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}