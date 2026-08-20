import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { brand, navLinks, hero } from '../content'

/**
 * Header
 * ---------------------------------------------------------------------------
 * Sticky translucent header with the DLG wordmark, inline nav links and a
 * mobile drawer. Exclusive to the modern /our-version design.
 */
export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-[0_2px_20px_rgba(32,52,104,0.12)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10" aria-label="Primary">
        <a href="#top" className="flex flex-col leading-none" aria-label={`${brand.name} home`}>
          <span className={`text-sm font-extrabold tracking-[0.18em] ${scrolled ? 'text-navy' : 'text-white'}`}>
            {brand.wordmarkTop}
          </span>
          <span className="mt-0.5 text-[0.65rem] font-semibold tracking-[0.52em] text-cobalt">
            {brand.wordmarkBottom}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-cobalt ${
                  scrolled ? 'text-ink' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={hero.primaryCtaHref}
            className="inline-flex items-center gap-2 rounded-full bg-cobalt px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cobalt/30 transition-all hover:bg-orange-soft"
          >
            {hero.primaryCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
            scrolled ? 'border-line text-ink' : 'border-white/30 text-white'
          }`}
          aria-expanded={open}
          aria-controls="ov-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="ov-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden"
          >
            <div className="border-t border-line bg-white px-6 pb-8 pt-4">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.label} className="border-b border-line last:border-0">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-sm font-bold uppercase tracking-wider text-navy hover:text-cobalt"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={hero.primaryCtaHref}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cobalt px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"
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