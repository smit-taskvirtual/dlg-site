import Reveal from './Reveal'
import ServiceIcon from '../components/ServiceIcon'
import { services } from '../content'

/**
 * Services
 * ---------------------------------------------------------------------------
 * Modern services grid: eight icon cards with hover lift and a brand accent
 * top border.
 */
export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-sky py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">What we do</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {services.title}
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, i) => (
            <li key={service.title}>
              <Reveal delay={i * 0.04}>
                <div className="group h-full rounded-2xl border-t-4 border-gold bg-white p-7 shadow-[0_4px_20px_rgba(0,0,128,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,128,0.14)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold leading-snug text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.copy}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}