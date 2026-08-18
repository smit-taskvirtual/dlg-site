import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ServiceIcon from './ServiceIcon'
import TravelingRule from './TravelingRule'
import { services } from '../content'

/**
 * Services
 * ---------------------------------------------------------------------------
 * Refined editorial grid of service areas.
 *
 * Design decision: a restrained hover — the icon shifts to cobalt and an
 * underline draws in — rather than exaggerated card lifting. Keeps the
 * institutional tone. Hover is disabled under reduced motion.
 */
export default function Services() {
  const reduce = useReducedMotion()

  return (
    <section id="services" className="scroll-mt-24 bg-sky py-20 sm:py-28" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="What We Do" title={services.title} />
        <TravelingRule className="mt-14" accent="cobalt" height="h-[2px]" />

        <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service) => (
            <li key={service.title} className="group bg-sky">
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="h-full bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-line text-cobalt">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold leading-snug text-navy">{service.title}</h3>
                <span className="mt-3 block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" aria-hidden="true" />
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.copy}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}