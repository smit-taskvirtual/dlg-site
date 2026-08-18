import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import DecoratedImage from './DecoratedImage'
import { purpose, images } from '../content'

/**
 * Purpose
 * ---------------------------------------------------------------------------
 * "Debate changes lives..." — a four-stage visual narrative.
 *
 * Design decision: on desktop the stages flow horizontally as a numbered
 * editorial list connected by thin lines; on mobile they stack. Each stage
 * reveals on scroll with a restrained fade/rise via the shared `Reveal`.
 */
export default function Purpose() {
  return (
    <section id="purpose" className="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="purpose-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Our Purpose" title={purpose.title} copy={purpose.copy} />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          {/* Editorial image */}
          <Reveal className="order-2 lg:order-1">
            <DecoratedImage
              src={images.purpose}
              alt="A small group of students leaning in to a thoughtful academic conversation"
              caption="Where debate begins — students, curiosity, and collaboration."
            />
          </Reveal>

          {/* Stage progression */}
          <div className="order-1 lg:order-2">
            <ol className="relative grid grid-cols-1 gap-0 sm:grid-cols-2">
              {purpose.stages.map((stage, i) => (
                <li key={stage.step} className={i < 2 ? 'sm:pb-10' : ''}>
                  <Reveal delay={i * 0.08}>
                    <div className="h-full border-l-2 border-line pl-6">
                      <span className="text-sm font-extrabold tracking-widest text-gold">{stage.step}</span>
                      <h3 className="mt-2 text-xl font-bold text-navy">{stage.title}</h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{stage.copy}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}