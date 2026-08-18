import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import DecoratedImage from './DecoratedImage'
import { insights, images } from '../content'

/**
 * NewsletterForm
 * ---------------------------------------------------------------------------
 * Client-side only subscription form.
 *
 * Design decision: no backend is wired up, so on submit we show an honest
 * success state (text from content.ts) instead of implying a real subscription.
 * Validation is basic: requires a valid-looking email.
 */
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const reduce = useReducedMotion()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        role="status"
        className="flex items-start gap-3 rounded-sm border border-line bg-sky p-5"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" aria-hidden="true" />
        <p className="text-sm font-semibold text-navy">{insights.successMessage}</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-sm border border-line bg-white p-6 sm:p-8">
      <label htmlFor="newsletter-email" className="text-sm font-bold text-navy">
        Get the monthly briefing for debate leaders
      </label>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={insights.emailPlaceholder}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? 'newsletter-error' : undefined}
              className="w-full rounded-sm border border-line bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted/70 focus:border-cobalt"
            />
          </div>
          {error && (
            <p id="newsletter-error" className="mt-2 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt"
        >
          {insights.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}

/**
 * Insights
 * ---------------------------------------------------------------------------
 * Newsletter preview listing the monthly topics plus the signup form.
 */
export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="insights-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Insights" title={insights.title} copy={insights.copy} align="left" />

          <ul className="mt-8 flex flex-wrap gap-3">
            {insights.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-line bg-sky px-4 py-2 text-sm font-semibold text-ink"
              >
                {topic}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <NewsletterForm />
          </div>
        </div>

        <Reveal>
          <DecoratedImage
            src={images.classroom}
            alt="A student engaged and focused in a classroom setting"
            aspect="aspect-[4/3]"
          />
        </Reveal>
      </div>
    </section>
  )
}