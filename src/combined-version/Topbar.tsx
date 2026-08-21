import { brand, hero } from '../content'

/**
 * Topbar (combined version)
 * ---------------------------------------------------------------------------
 * Copy of the homepage topbar for /combined-version only: the DONATE link is
 * replaced with "Schedule Blueprint Assessment" and the orange accents are
 * switched to gold to match the rest of the page.
 */
const items = [
  { label: 'WHO WE ARE', href: '#purpose' },
  { label: 'WHAT WE DO', href: '#services' },
  { label: 'SUPPORT OUR WORK', href: '#contact' },
]

export default function Topbar() {
  return (
    <header className="flex h-[58px] items-center justify-between gap-[30px] bg-tb px-[70px] text-xs font-semibold text-white">
      <a href="#purpose" className="flex flex-col leading-none" aria-label={`${brand.name} home`}>
        <span className="text-sm font-extrabold tracking-[0.18em]">{brand.wordmarkTop}</span>
        <span className="mt-0.5 text-[0.65rem] font-semibold tracking-[0.52em] text-gold">{brand.wordmarkBottom}</span>
      </a>

      <div className="flex items-center gap-[30px]">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="transition-colors hover:text-white/70">
            {item.label} <span className="text-[10px]">&#9662;</span>
          </a>
        ))}
        <a
          href={hero.primaryCtaHref}
          className="bg-gold px-[27px] py-[14px] font-bold text-white transition-colors hover:bg-[#b8952f]"
        >
          Schedule Blueprint Assessment
        </a>
      </div>
    </header>
  )
}