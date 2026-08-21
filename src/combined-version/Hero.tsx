import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { images } from '../content'

/**
 * Hero (combined version)
 * ---------------------------------------------------------------------------
 * Copy of the homepage hero slider for /combined-version only: orange
 * accents (arrow hover, active dot) switched to gold to match the rest of
 * the page.
 */
const slides = [
  { src: images.hero, alt: 'Debate Leaders Global — students in debate action', title: 'Debate Leaders Global' },
  { src: images.purpose, alt: 'Students studying together', title: 'Building Stronger Organizations' },
  { src: images.classroom, alt: 'Students collaborating in a classroom', title: 'Transforming Student Futures' },
  { src: images.meeting, alt: 'Educators in a strategy meeting', title: 'Sustainable Debate Programs' },
]

const INTERVAL = 6000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (reduce) return
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [reduce])

  const go = (next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length)
    if (!reduce && timer.current) {
      clearInterval(timer.current)
      timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL)
    }
  }

  return (
    <section className="relative" aria-label="Featured images">
      <div className="relative h-[260px] w-full overflow-hidden sm:h-[300px] lg:h-[360px]">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={slides[index].src}
            alt={slides[index].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <AnimatePresence initial={false}>
          <motion.div
            key={`title-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/70 to-transparent pb-8 pt-12"
          >
            <p className="text-lg font-bold uppercase tracking-[0.3em] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)] sm:text-xl lg:text-2xl">
              {slides[index].title}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white transition-colors hover:bg-gold"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next image"
          className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white transition-colors hover:bg-gold"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? 'bg-gold' : 'bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}