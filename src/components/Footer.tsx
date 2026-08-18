import { Mail } from 'lucide-react'
import { brand, navLinks, footer } from '../content'
import TravelingRule from './TravelingRule'

// Inline SVG — brand icons (e.g. LinkedIn) were removed from recent lucide-react.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.67-2.46 3.39V23h-4V8z" />
    </svg>
  )
}

/**
 * Footer
 * ---------------------------------------------------------------------------
 * Institution-style footer: wordmark, mission, navigation, contact links.
 *
 * Note: LinkedIn and email links point to placeholder `#` values defined in
 * content.ts and marked for replacement before launch.
 */
export default function Footer() {
  return (
    <footer className="border-t border-line bg-white" aria-label="Footer">
      <TravelingRule accent="gold" height="h-[2px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <a href="#top" className="inline-flex flex-col leading-none" aria-label={`${brand.name} home`}>
            <span className="text-base font-extrabold tracking-[0.18em] text-navy">{brand.wordmarkTop}</span>
            <span className="mt-0.5 text-xs font-semibold tracking-[0.52em] text-gold">{brand.wordmarkBottom}</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{footer.mission}</p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer">
          <h3 className="text-xs font-bold uppercase tracking-wider text-ink">Explore</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-muted transition-colors hover:text-cobalt">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-ink">Connect</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={footer.social.linkedin}
                aria-label="Debate Leaders Global on LinkedIn (placeholder link)"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-cobalt"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={footer.social.email}
                aria-label="Email Debate Leaders Global (placeholder link)"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-cobalt"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Email us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-8">
          <p className="text-xs text-muted">{footer.copyright}</p>
          <a href={footer.attributionHref} target="_blank" rel="noopener noreferrer" className="text-xs text-muted underline underline-offset-2 transition-colors hover:text-cobalt">
            {footer.attribution}
          </a>
        </div>
      </div>
    </footer>
  )
}