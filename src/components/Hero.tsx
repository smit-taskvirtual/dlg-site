import { images } from '../content'

/**
 * Hero
 * ---------------------------------------------------------------------------
 * Simple full-width image band (325px) matching theme.html. No overlay, no
 * headline — the design relies on the single hero image.
 */
export default function Hero() {
  return (
    <section>
      <img
        src={images.hero}
        alt="Debate Leaders Global — students in debate action"
        className="block h-[325px] w-full object-cover"
      />
    </section>
  )
}