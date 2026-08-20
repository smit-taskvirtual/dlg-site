import { Mail } from 'lucide-react'
import { footer, navLinks, products } from '../content'

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
 * Split footer matching theme.html: three link columns + copyright on the
 * left, a gray "Connect" panel with subscribe button and socials on the
 * right. Content is drawn from the DLG content file.
 */
export default function Footer() {
  const subscribe = () => {
    window.alert('Thank you — subscription functionality will be connected soon.')
  }

  return (
    <footer className="bg-tb text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[3fr_1.3fr]">
      <div className="grid grid-cols-3 gap-[35px] px-[78px] pb-[90px] pt-[30px]">
        <div>
          <h3 className="mb-[13px] text-[21px] font-bold">EXPLORE</h3>
          <p className="text-xs leading-[1.45] text-[#eee]">
            {navLinks.map((link) => (
              <span key={link.label}>
                <a href={link.href} className="hover:text-white/60">
                  {link.label}
                </a>
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <h3 className="mb-[13px] text-[21px] font-bold">PARTICIPATE</h3>
          <p className="text-xs leading-[1.45] text-[#eee]">
            {products.items.map((product) => (
              <span key={product.name}>
                <a href="#products" className="hover:text-white/60">
                  {product.name.replace('™', '')}
                </a>
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <h3 className="mb-[13px] text-[21px] font-bold">SUPPORT</h3>
          <p className="text-xs leading-[1.45] text-[#eee]">
            <a href="#contact" className="hover:text-white/60">
              Donate
            </a>
            <br />
            <a href="#contact" className="hover:text-white/60">
              Schedule a Blueprint Assessment
            </a>
            <br />
            <a href={footer.attributionHref} className="hover:text-white/60">
              {footer.attribution}
            </a>
          </p>
        </div>
        <div className="col-span-full mt-[50px] text-xs text-[#eee]">{footer.copyright}</div>
      </div>

      <div className="bg-fside px-5 py-[30px]">
        <h3 className="mb-[13px] text-[21px] font-bold">CONNECT</h3>
        <p className="text-xs leading-[1.45] text-[#eee]">{footer.mission}</p>
        <p className="mt-8 text-xs text-[#eee]">Keep Me Informed</p>
        <button
          type="button"
          onClick={subscribe}
          className="mb-6 mt-[14px] inline-block rounded-[7px] bg-do px-[15px] py-3 text-[11px] font-bold text-white transition-colors hover:bg-[#d94d1d]"
        >
          SUBSCRIBE NOW
        </button>
        <div className="flex flex-wrap gap-[7px]">
          <a
            href={footer.social.linkedin}
            aria-label="Debate Leaders Global on LinkedIn"
            className="grid h-[34px] w-[34px] place-items-center bg-tb text-[14px] text-white transition-colors hover:bg-do"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={footer.social.email}
            aria-label="Email Debate Leaders Global"
            className="grid h-[34px] w-[34px] place-items-center bg-tb text-[14px] text-white transition-colors hover:bg-do"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      </div>
    </footer>
  )
}