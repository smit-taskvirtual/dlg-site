import { Sparkles } from 'lucide-react'
import { hero, purpose, aiAdvisor, images, impact } from '../content'

/**
 * IntroGrid
 * ---------------------------------------------------------------------------
 * Two-column intro area matching theme.html: a left column with the intro
 * paragraph, the orange section title, and the three-column impact stats; a
 * 270px sidebar on the right featuring the DLG AI Advisor concept preview.
 */
export default function IntroGrid() {
  const numberColors = ['text-imporange', 'text-impblue', 'text-imprime', 'text-impcyan', 'text-impblue', 'text-imporange']
  const dividerColors = ['bg-imporange', 'bg-impblue', 'bg-impcyan']
  const borders = ['border-impborder', 'border-impborder', 'border-impborder2']

  return (
    <section id="purpose" className="content-wrap mx-auto max-w-[1200px] px-[78px] pb-2.5 pt-6">
      <div className="grid grid-cols-[1fr_270px] gap-[45px]">
        {/* Left column */}
        <div>
          <p className="mb-[30px] mt-2 text-sm leading-[1.5] text-graybody">{hero.copy}</p>

          <h2 className="mb-[15px] text-[19px] font-medium text-do">Our Purpose</h2>
          <p className="mb-[30px] text-sm leading-[1.5] text-graybody">{purpose.copy}</p>

          <div className="mb-[45px] mt-[5px] grid grid-cols-3">
            {impact.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex min-h-[300px] flex-col justify-around px-[22px] py-[5px] text-center ${borders[colIndex]} border-l-[3px]`}
              >
                {column.map((metric, metricIndex) => {
                  const colorIndex = colIndex * 2 + metricIndex
                  return (
                    <div key={metric.label}>
                      <div className={`my-[5px] text-[40px] font-bold leading-[0.95] ${numberColors[colorIndex]}`}>
                        {metric.number}
                        {metric.suffix && (
                          <small className="text-base font-bold uppercase">{' '}{metric.suffix}</small>
                        )}
                      </div>
                      <div className="text-[12px] font-bold uppercase leading-snug tracking-[2px] text-label">
                        {metric.label}
                        {metric.sub && <span className="block">{metric.sub}</span>}
                      </div>
                      {metricIndex === 0 && (
                        <div className={`divider mx-auto my-4 h-[3px] w-4/5 ${dividerColors[colIndex]}`} />
                      )}
                    </div>
                  )
                })}
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

          <div className="relative mt-[22px] overflow-hidden rounded-[10px]">
            <img
              src={images.campus}
              alt="Debate Leaders Global in action"
              className="block h-[140px] w-full object-cover blur-[3px] brightness-[0.75]"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-do bg-black/35 text-[22px] text-do transition-colors hover:bg-do hover:text-white"
            >
              ▶
            </button>
          </div>
          <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-label">
            Watch: Building debate that lasts
          </p>
        </aside>
      </div>
    </section>
  )
}