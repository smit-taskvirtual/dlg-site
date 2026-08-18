import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { products } from '../content'

/**
 * Products
 * ---------------------------------------------------------------------------
 * Premium stacked list of signature products with an expand/collapse state.
 *
 * Design decision: an accessible disclosure pattern (real buttons) rather than
 * hover-only, so the expanded context is reachable by keyboard and touch. The
 * chevron flips and the detail fades/slides in via AnimatePresence.
 */
export default function Products() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="products-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Signature Products" title={products.title} />

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {products.items.map((product, index) => {
            const isOpen = openIndex === index
            return (
              <li key={product.name}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`product-${index}`}
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="hidden text-xs font-extrabold tracking-widest text-gold sm:inline">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xl font-bold text-navy transition-colors group-hover:text-cobalt sm:text-2xl">
                      {product.name}
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-cobalt">
                    {isOpen ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`product-${index}`}
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-2xl pb-8 pl-0 sm:pl-14">
                        <span className="mb-3 block h-px w-10 bg-gold" aria-hidden="true" />
                        <p className="text-base leading-relaxed text-ink">{product.summary}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{product.detail}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}