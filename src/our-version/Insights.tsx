import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import { insights } from '../content'

/**
 * Insights
 * ---------------------------------------------------------------------------
 * Modern newsletter section: heading, topic chips and an email signup form.
 * Submitting shows the success message from content — no backend is called.
 */
export default function Insights() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="insights" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cobalt">Insights</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                {insights.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{insights.copy}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {insights.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-line bg-sky px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-navy p-10 text-white shadow-[0_20px_60px_rgba(32,52,104,0.3)]">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-soft">Stay informed</p>
              {submitted ? (
                <p className="mt-5 flex items-start gap-3 text-sm text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" aria-hidden="true" />
                  {insights.successMessage}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5">
                  <label htmlFor="ov-insights-email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="ov-insights-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={insights.emailPlaceholder}
                      className="flex-1 rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/40"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-cobalt px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-orange-soft"
                    >
                      {insights.cta}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}