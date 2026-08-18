import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { network, images } from '../content'

/**
 * NetworkVisual
 * ---------------------------------------------------------------------------
 * Abstract, non-fake world-network composition. Six region nodes are placed
 * on a stylized layout and joined by thin connecting lines.
 *
 * Design decision: lines "draw in" (pathLength) and nodes fade/scale in when
 * the section enters the viewport. No looping animation and full reduced-motion
 * support keeps it light and respectful.
 */
function NetworkVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  // Stylized geographic placement within a 100x60 viewBox.
  const nodes = [
    { id: 'North America', x: 16, y: 20 },
    { id: 'Europe', x: 46, y: 14 },
    { id: 'Middle East', x: 54, y: 28 },
    { id: 'Africa', x: 48, y: 44 },
    { id: 'Latin America', x: 22, y: 42 },
    { id: 'Asia-Pacific', x: 82, y: 26 },
  ]

  const links: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 5],
    [2, 5],
    [0, 4],
    [4, 3],
    [3, 5],
  ]

  return (
    <div ref={ref} className="relative rounded-sm border border-line bg-white p-4 sm:p-8">
      <svg viewBox="0 0 100 60" className="w-full" role="img" aria-label="Stylized diagram of DLG's six global regions">
        {links.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#0B56B3"
            strokeOpacity="0.35"
            strokeWidth="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
          />
        ))}

        {nodes.map((node, i) => {
          const pulse = reduce
            ? { opacity: 0.9 }
            : {
                opacity: [0.7, 1, 0.7],
                r: [1.1, 1.6, 1.1],
              }
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
            >
              <motion.circle
                cx={node.x}
                cy={node.y}
                fill="#2D78D1"
                {...(reduce
                  ? {}
                  : {
                      animate: pulse,
                      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    })}
              />
            </motion.g>
          )
        })}
      </svg>

      {/* Region labels */}
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
        {nodes.map((node) => (
          <li key={node.id} className="flex items-center gap-2 text-sm font-semibold text-ink">
            <span className="h-2 w-2 rounded-full bg-cobalt" aria-hidden="true" />
            {node.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * GlobalNetwork
 * ---------------------------------------------------------------------------
 * Split layout pairing the animated network visual with supporting copy.
 */
export default function GlobalNetwork() {
  return (
    <section id="network" className="scroll-mt-24 bg-sky py-20 sm:py-28" aria-labelledby="network-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <NetworkVisual />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Global Network" title={network.title} copy={network.copy} align="left" />
          <div className="mt-10">
            <img
              src={images.network}
              alt="Students in a lecture hall listening to a presentation"
              className="aspect-[16/9] w-full rounded-sm border border-line object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}