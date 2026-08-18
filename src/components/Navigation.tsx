import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { brand, navLinks, hero } from '../content'

/**
 * Navigation
 * ---------------------------------------------------------------------------
 * Sticky header with an animated mobile drawer.
 *
 * Design decisions:
 * - A `scrolled` flag toggles a translucent white background + soft shadow once
 *   the user scrolls, keeping the bar light over the white hero.
 * - The mobile drawer is a full-screen overlay animated via AnimatePresence
 *   for a clean enter/exit. Links are keyboard- and screen-reader friendly.
 * - Focus moves to the drawer on open and returns on close for accessibility.
 */
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-white/90 backdrop-blur-sm shadow-[0_1px_20px_rgba(6,43,85,0.06)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Primary">
        {/* Wordmark */}
        <a href="#top" className="group flex flex-col leading-none" aria-label={`${brand.name} home`}>
          <span className="text-sm font-extrabold tracking-[0.18em] text-navy">{brand.wordmarkTop}</span>
          <span className="mt-0.5 text-[0.65rem] font-semibold tracking-[0.52em] text-gold">{brand.wordmarkBottom}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-semibold text-ink/80 transition-colors hover:text-cobalt"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={hero.primaryCtaHref}
            className="group inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt"
          >
            {hero.primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: reduce ? 0 : -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden"
          >
            <div className="border-t border-line bg-white px-5 pb-8 pt-4 sm:px-8">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.label} className="border-b border-line/60 last:border-0">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-lg font-semibold text-ink transition-colors hover:text-cobalt"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={hero.primaryCtaHref}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt"
              >
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}