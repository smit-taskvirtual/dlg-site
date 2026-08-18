import { useRef } from 'react'
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { network } from '../content'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4 + i * 0.15, duration: 0.45, ease: EASE },
  }),
}

/**
 * RegionGlobe
 * ---------------------------------------------------------------------------
 * An elegant wireframe globe (non-fake, not a real-time map) rendered entirely
 * in SVG. Six region nodes are placed on the front hemisphere and connected by
 * curved arcs bowing outward from the globe's center to suggest sphere curvature.
 *
 * Connection order (per the brief): Latin America -> North America -> Europe ->
 * Africa -> Middle East -> Asia-Pacific.
 *
 * Animation: the connection path "draws in" (pathLength) and the nodes
 * fade/scale in when the section enters the viewport. Dots then pulse slowly.
 * `useReducedMotion` disables the pulsing and node staggering.
 */
function RegionGlobe() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  const cx = 130
  const cy = 130

  // Region nodes positioned on the globe's visible hemisphere. Each carries a
  // label anchor placed outward from its marker so the names read clearly.
  // The globe is intentionally smaller than the viewBox so labels stay visible.
  const nodes = [
    { id: 'Latin America', x: 70, y: 160, labelX: 52, labelY: 163, anchor: 'end' as const },
    { id: 'North America', x: 80, y: 74, labelX: 54, labelY: 77, anchor: 'end' as const },
    { id: 'Europe', x: 126, y: 58, labelX: 126, labelY: 44, anchor: 'middle' as const },
    { id: 'Africa', x: 140, y: 138, labelX: 140, labelY: 152, anchor: 'middle' as const },
    { id: 'Middle East', x: 160, y: 88, labelX: 176, labelY: 91, anchor: 'start' as const },
    { id: 'Asia-Pacific', x: 192, y: 72, labelX: 208, labelY: 75, anchor: 'start' as const },
  ]

  // Connect every marker to every other marker (all-to-all mesh).
  const links: Array<[typeof nodes[number], typeof nodes[number]]> = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      links.push([nodes[i], nodes[j]])
    }
  }

  // Globe wireframe elements (meridians + parallels) for the sphere effect.
  const meridians = [18, 37, 55, 73]
  const parallels = [23, 46, 69]
  const r = 92

  return (
    <div ref={ref} className="relative rounded-sm border border-line bg-white p-4 sm:p-8">
      <svg viewBox="0 0 260 260" className="w-full" role="img" aria-label="Wireframe globe with all six global regions connected to one another">
        {/* Meridian ellipses */}
        {meridians.map((rx) => (
          <ellipse key={`m-${rx}`} cx={cx} cy={cy} rx={rx} ry={r} fill="none" stroke="#D6E2F0" strokeWidth="0.6" />
        ))}
        {/* Parallel ellipses */}
        {parallels.map((ry) => (
          <ellipse key={`p-${ry}`} cx={cx} cy={cy} rx={r} ry={ry} fill="none" stroke="#D6E2F0" strokeWidth="0.6" />
        ))}
        {/* Equator */}
        <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="#D6E2F0" strokeWidth="0.6" />
        {/* Globe outline */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#0B56B3" strokeWidth="1.4" />

        {/* All-to-all connection lines, drawn in with a cascade */}
        {links.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#0B56B3"
            strokeOpacity="0.28"
            strokeWidth="0.7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.25 + i * 0.06, ease: 'easeOut' }}
          />
        ))}

        {/* Region nodes */}
        {nodes.map((node, i) => (
          <motion.g key={node.id} variants={dotVariants} custom={i} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            {/* Subtle leader line from marker to its label */}
            <line
              x1={node.x}
              y1={node.y}
              x2={node.labelX}
              y2={node.labelY}
              stroke="#0B56B3"
              strokeOpacity="0.25"
              strokeWidth="0.5"
            />
            <circle cx={node.x} cy={node.y} r="10" fill="#0B56B3" opacity="0.12" />
            <motion.circle
              cx={node.x}
              cy={node.y}
              fill="#2D78D1"
              stroke="#0B56B3"
              strokeWidth="1"
              {...(reduce
                ? { r: 4, opacity: 1 }
                : {
                    r: 4,
                    animate: { r: [4, 5.5, 4], opacity: [0.85, 1, 0.85] },
                    transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 + i * 0.2 },
                  })}
            />
            {/* Region name label */}
            <text
              x={node.labelX}
              y={node.labelY}
              textAnchor={node.anchor}
              fontSize="7"
              fontWeight="700"
              fill="#12263F"
              paintOrder="stroke"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinejoin="round"
            >
              {node.id}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

/**
 * GlobalNetwork
 * ---------------------------------------------------------------------------
 * Split layout pairing the animated globe visual with supporting copy.
 */
export default function GlobalNetwork() {
  return (
    <section id="network" className="scroll-mt-24 bg-sky py-20 sm:py-28" aria-labelledby="network-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <RegionGlobe />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Global Network" title={network.title} copy={network.copy} align="left" />
        </div>
      </div>
    </section>
  )
}