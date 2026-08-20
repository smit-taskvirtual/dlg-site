import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Reveal from './Reveal'
import { products } from '../content'

/**
 * Products
 * ---------------------------------------------------------------------------
 * Modern products accordion: numbered rows that expand to reveal the product
 * summary and detail. Accessible via real buttons with aria-expanded.
 */
export default function Products() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <section id="products" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Signature products</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {products.title}
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-4xl">
          <ul className="divide-y divide-line border-y border-line">
            {products.items.map((product, index) => {
              const isOpen = openIndex === index
              return (
                <li key={product.name}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`ov-product-${index}`}
                    className="group flex w-full items-center gap-6 py-7 text-left"
                  >
                    <span className="text-sm font-black tracking-widest text-gold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-xl font-bold text-navy transition-colors group-hover:text-gold sm:text-2xl">
                      {product.name}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                      {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`ov-product-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-2xl pb-8 pl-12">
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
      </div>
    </section>
  )
}