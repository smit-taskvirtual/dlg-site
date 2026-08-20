import { Sparkles } from 'lucide-react'
import { hero, purpose, aiAdvisor } from '../content'

/**
 * IntroGrid
 * ---------------------------------------------------------------------------
 * Two-column intro area matching theme.html: a left column with the intro
 * paragraph, the orange section title, and the three-column impact stats; a
 * 270px sidebar on the right featuring the DLG AI Advisor concept preview.
 */
export default function IntroGrid() {
  const stats = [
    { value: hero.proofPoints[0].value, label: hero.proofPoints[0].label, numberClass: 'text-imporange' },
    { value: hero.proofPoints[1].value, label: hero.proofPoints[1].label, numberClass: 'text-impblue' },
    { value: hero.proofPoints[2].value, label: hero.proofPoints[2].label, numberClass: 'text-impcyan' },
  ]

  return (
    <section id="purpose" className="content-wrap mx-auto max-w-[1200px] px-[78px] pb-2.5 pt-6">
      <div className="grid grid-cols-[1fr_270px] gap-[45px]">
        {/* Left column */}
        <div>
          <p className="mb-[30px] mt-2 text-sm leading-[1.5] text-graybody">{hero.copy}</p>

          <h2 className="mb-[15px] text-[19px] font-medium text-do">Our Purpose</h2>
          <p className="mb-[30px] text-sm leading-[1.5] text-graybody">{purpose.copy}</p>

          <div className="mb-[45px] mt-[5px] grid grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex min-h-[300px] flex-col justify-around px-[22px] py-[5px] text-center ${
                  i === 0 ? 'border-l-[3px] border-impborder' : ''
                } ${i === 1 ? 'border-l-[3px] border-impborder' : ''} ${
                  i === 2 ? 'border-l-[3px] border-impborder2' : ''
                }`}
              >
                <div>
                  <div className="text-xs font-bold tracking-[2px] text-label">{stat.label}</div>
                  <div className={`my-[5px] text-[54px] font-bold leading-[0.95] ${stat.numberClass}`}>
                    {stat.value}
                  </div>
                  <div className="small-label text-[13px] font-bold uppercase tracking-[2px]">
                    {stat.label}
                  </div>
                </div>
                <div className={`divider mx-auto my-1 h-[3px] w-4/5 ${i === 0 ? 'bg-imporange' : ''} ${i === 1 ? 'bg-impblue' : ''} ${i === 2 ? 'bg-impcyan' : ''}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <aside>
          <h2 className="mb-3 text-[19px] font-medium leading-[1.05] text-do">
            Meet the DLG
            <br />
            AI Advisor
          </h2>
          <div className="relative bg-black">
            <div className="flex h-[155px] items-end justify-center bg-gradient-to-b from-black to-[#1a1a1a] p-4">
              <p className="max-w-[180px] rounded-lg bg-white/10 px-3 py-2 text-[11px] leading-snug text-white/90">
                {aiAdvisor.welcomeMessage}
              </p>
            </div>
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-do bg-black/35 text-do">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <a
            href="#products"
            className="mx-auto mt-[22px] block border-2 border-[#777] bg-white px-[17px] py-[11px] text-[11px] font-bold text-label transition-colors hover:border-do hover:text-do"
            style={{ borderRadius: '10px' }}
          >
            TRY THE ADVISOR
          </a>
        </aside>
      </div>
    </section>
  )
}