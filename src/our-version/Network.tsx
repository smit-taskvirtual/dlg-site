import Reveal from './Reveal'
import { network, images } from '../content'

/**
 * Network
 * ---------------------------------------------------------------------------
 * Dark navy section celebrating the global network: image backdrop, heading,
 * copy and the six regions as outline chips.
 */
export default function Network() {
  return (
    <section id="network" className="relative scroll-mt-24 overflow-hidden bg-navy py-24 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img src={images.campus} alt="" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Global network</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{network.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{network.copy}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-4">
            {network.regions.map((region) => (
              <li
                key={region}
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-wider text-white/90">{region}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}