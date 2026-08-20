import { Fragment } from 'react'
import ServiceIcon from './ServiceIcon'
import { services } from '../content'

/**
 * CalendarSection
 * ---------------------------------------------------------------------------
 * Faithful port of theme.html's calendar block: a bordered grid with a narrow
 * index column and four content columns, plus a color-dot legend. The grid
 * surfaces the eight DLG services (two rows of four), and the legend maps a
 * colored dot to each service.
 */
const dotColors = ['#315f9e', '#c8c8c8', '#ed6338', '#f0b797', '#b8c936', '#dfe7a8', '#4db3cf', '#70265e']

export default function CalendarSection() {
  const chunk = (arr: typeof services.items, size: number) =>
    arr.length <= size ? [arr] : [arr.slice(0, size), arr.slice(size, size * 2)]

  const rows = chunk(services.items, 4)

  return (
    <section id="services" className="mx-auto max-w-[1200px] bg-eventsbg px-[78px] pb-7 pt-7">
      <h2 className="mb-3 text-[18px] font-medium text-do">What We Do</h2>
      <p className="mb-6 text-xs text-graybody">{services.title}</p>

      <div className="grid grid-cols-[42px_repeat(4,1fr)] border border-[#777]">
        <div className="min-h-[45px] bg-hgray p-2" />

        {services.items.slice(0, 4).map((service) => (
          <div
            key={service.title}
            className="flex min-h-[45px] items-center justify-center bg-hgray p-2 text-center text-[10px] font-bold leading-tight text-white"
          >
            {service.title.toUpperCase()}
          </div>
        ))}

        {rows.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            <div className="flex items-center justify-center bg-eventsbg px-1 py-2 text-[8px] text-label">
              {String(rowIndex * 4 + 1).padStart(2, '0')}
            </div>
            {row.map((service, i) => {
              const index = rowIndex * 4 + i
              return (
                <div
                  key={service.title}
                  className={`min-h-[145px] border-b border-[#777] p-4 ${i === 3 ? '' : 'border-r'}`}
                >
                  <span
                    className="mb-3 block h-3 w-3 rounded-full"
                    style={{ background: dotColors[index % dotColors.length] }}
                    aria-hidden="true"
                  />
                  <div className="mb-2 flex items-start gap-2">
                    <ServiceIcon name={service.icon} className="h-4 w-4 shrink-0 text-impblue" />
                    <p className="text-[11px] font-bold leading-tight text-label">{service.title}</p>
                  </div>
                  <p className="text-[9px] leading-snug text-graybody">{service.copy}</p>
                </div>
              )
            })}
          </Fragment>
        ))}
      </div>

      <div className="mt-[14px] flex flex-wrap gap-x-7 gap-y-4 bg-white p-[15px] text-[10px]">
        {services.items.map((service, i) => (
          <div key={service.title} className="flex min-w-[130px] items-center gap-[7px]">
            <span
              className="inline-block h-[13px] w-[13px] rounded-full"
              style={{ background: dotColors[i % dotColors.length] }}
              aria-hidden="true"
            />
            {service.title}
          </div>
        ))}
      </div>
    </section>
  )
}