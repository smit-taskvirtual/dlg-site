/**
 * QuickLinks
 * ---------------------------------------------------------------------------
 * Colored quick-link blocks matching theme.html: a "QUICK LINKS:" label
 * followed by seven equal-height colored links. Uses DLG anchors/content.
 */
const links = [
  { label: 'ABOUT', href: '#purpose', color: 'bg-q1' },
  { label: 'SERVICES', href: '#services', color: 'bg-q2' },
  { label: 'PRODUCTS', href: '#products', color: 'bg-q3' },
  { label: 'INSIGHTS', href: '#insights', color: 'bg-q4' },
  { label: 'CONTACT', href: '#contact', color: 'bg-q5' },
  { label: 'BLUEPRINT ASSESSMENT', href: '#products', color: 'bg-q6' },
  { label: 'LEADERSHIP ACADEMY', href: '#products', color: 'bg-q7' },
]

export default function QuickLinks() {
  return (
    <nav className="mx-auto mt-[30px] mb-5 flex max-w-[1000px] flex-wrap items-stretch" aria-label="Quick links">
      <div className="flex w-[110px] items-center justify-center text-center text-xs font-bold leading-[1.25] text-qlabel">
        QUICK
        <br />
        LINKS:
      </div>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={`flex min-h-[56px] flex-1 items-center justify-center px-[19px] py-3 text-center text-[11px] font-bold text-white transition-opacity hover:opacity-85 ${link.color}`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}