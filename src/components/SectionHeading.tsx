import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  copy?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

/**
 * SectionHeading
 * ---------------------------------------------------------------------------
 * Editorial section header with a gold rule, optional eyebrow, title, and
 * supporting copy. Used consistently to keep rhythm across the page.
 */
export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const titleColor = tone === 'dark' ? 'text-white' : 'text-ink'
  const copyColor = tone === 'dark' ? 'text-blue-100/80' : 'text-muted'

  return (
    <Reveal className={`flex flex-col gap-5 ${alignment}`}>
      {eyebrow && (
        <div className="flex flex-col items-center gap-3">
          <span className={`text-xs font-bold uppercase tracking-[0.28em] ${tone === 'dark' ? 'text-gold' : 'text-cobalt'}`}>
            {eyebrow}
          </span>
          <span className="gold-rule h-px w-12" aria-hidden="true" />
        </div>
      )}
      <h2 className={`max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {copy && <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${copyColor}`}>{copy}</p>}
    </Reveal>
  )
}