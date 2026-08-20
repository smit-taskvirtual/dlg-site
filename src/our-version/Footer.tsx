import { Mail } from 'lucide-react'
import { brand, footer, navLinks, products } from '../content'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

/**
 * Footer
 * ---------------------------------------------------------------------------
 * Modern dark footer: wordmark + mission, link columns, and social icons.
 */
export default function Footer() {
  return (
    <footer className="bg-charcoal text-white" aria-labelledby="ov-footer-heading">
      <h2 id="ov-footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-10">
        <div>
          <a href="#top" className="flex flex-col leading-none" aria-label={`${brand.name} home`}>
            <span className="text-sm font-extrabold tracking-[0.18em] text-white">{brand.wordmarkTop}</span>
            <span className="mt-0.5 text-[0.65rem] font-semibold tracking-[0.52em] text-gold">
              {brand.wordmarkBottom}
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{footer.mission}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Participate</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {products.items.slice(0, 4).map((product) => (
              <li key={product.name}>
                <a href="#products" className="transition-colors hover:text-gold">
                  {product.name.replace('™', '')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Connect</h3>
          <div className="mt-5 flex gap-3">
            <a
              href={footer.social.linkedin}
              aria-label="Debate Leaders Global on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={footer.social.email}
              aria-label="Email Debate Leaders Global"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <a
            href={footer.attributionHref}
            className="mt-6 inline-block text-sm text-white/60 transition-colors hover:text-white"
          >
            {footer.attribution}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-white/50 lg:px-10 lg:text-left">
          {footer.copyright}
        </div>
      </div>
    </footer>
  )
}