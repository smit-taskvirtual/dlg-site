import { brand, hero } from '../content'

/**
 * Topbar
 * ---------------------------------------------------------------------------
 * Dark full-width bar matching theme.html: the DLG wordmark on the left,
 * right-aligned uppercase nav items with a dropdown caret, and an orange
 * DONATE button. Items map to DLG page anchors.
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
        <span className="mt-0.5 text-[0.65rem] font-semibold tracking-[0.52em] text-do">{brand.wordmarkBottom}</span>
      </a>

      <div className="flex items-center gap-[30px]">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="transition-colors hover:text-white/70">
            {item.label} <span className="text-[10px]">&#9662;</span>
          </a>
        ))}
        <a
          href={hero.primaryCtaHref}
          className="bg-do px-[27px] py-[14px] font-bold text-white transition-colors hover:bg-[#d94d1d]"
        >
          DONATE
        </a>
      </div>
    </header>
  )
}