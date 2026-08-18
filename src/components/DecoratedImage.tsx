import { motion, useReducedMotion } from 'framer-motion'

type DecoratedImageProps = {
  src: string
  alt: string
  aspect?: string
  caption?: string
  loading?: 'lazy' | 'eager'
}

/**
 * FadedLines
 * ---------------------------------------------------------------------------
 * Prominent horizontal gradient lines that continuously draw out and fade back,
 * staggered to form a subtle traveling wave around images. Prominence comes
 * from longer, thicker lines with strong alpha. Looping is disabled entirely
 * under `prefers-reduced-motion`.
 */
function FadedLines({
  align,
  accent = 'cobalt',
  count = 3,
}: {
  align: 'left' | 'right'
  accent?: 'cobalt' | 'gold'
  count?: number
}) {
  const reduce = useReducedMotion()
  const color = accent === 'gold' ? '201,155,43' : '11,86,179'
  const origin = align === 'left' ? '0%' : '100%'

  return (
    <div className={`flex flex-col gap-2 ${align === 'left' ? 'items-start' : 'items-end'}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="block h-[2px] rounded-full"
          style={{
            width: `${96 - i * 18}px`,
            background: `linear-gradient(${align === 'left' ? '90deg' : '270deg'}, rgba(${color},0.85), rgba(${color},0))`,
            transformOrigin: origin,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            reduce
              ? { opacity: 0.9, scaleX: 1 }
              : {
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                }
          }
          transition={{
            duration: 3.4,
            times: [0, 0.35, 0.7, 1],
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.45,
          }}
        />
      ))}
    </div>
  )
}

/**
 * DecoratedImage
 * ---------------------------------------------------------------------------
 * Wraps an image in a refined editorial frame:
 *  - an offset hairline border behind the image,
 *  - two groups of faded gradient lines (top-left cobalt, bottom-right gold)
 *    that draw in once on view,
 *  - an optional caption.
 *
 * Keeps animation restrained and respects `prefers-reduced-motion`.
 */
export default function DecoratedImage({ src, alt, aspect = 'aspect-[4/3]', caption, loading = 'lazy' }: DecoratedImageProps) {
  return (
    <figure className="relative">
      {/* Offset hairline frame behind the image */}
      <span className="absolute -bottom-3 -right-3 h-full w-full border border-line" aria-hidden="true" />

      <div className="relative">
        {/* Faded lines, top-left */}
        <div className="absolute -top-5 left-0 z-10">
          <FadedLines align="left" accent="cobalt" />
        </div>

        <div className={`relative overflow-hidden rounded-sm border border-line bg-white ${aspect}`}>
          <img src={src} alt={alt} className="h-full w-full object-cover" loading={loading} />
        </div>

        {/* Faded lines, bottom-right */}
        <div className="absolute -bottom-5 right-0 z-10">
          <FadedLines align="right" accent="gold" count={2} />
        </div>
      </div>

      {caption && <figcaption className="mt-6 text-xs text-muted">{caption}</figcaption>}
    </figure>
  )
}