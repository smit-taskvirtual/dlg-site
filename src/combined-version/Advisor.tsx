import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Send } from 'lucide-react'
import Reveal from '../our-version/Reveal'
import { aiAdvisor } from '../content'

/**
 * Advisor (combined version)
 * ---------------------------------------------------------------------------
 * Copy of the /our-version AI Advisor for /combined-version only, extended
 * with a working text input: typed messages get a simulated keyword-based
 * reply. Still a local mockup — no live AI service is connected.
 */
const sampleResponses: Record<string, string> = {
  'Launch a Debate Program':
    'A strong launch starts with a clear purpose and a sustainable model. I can walk you through our Blueprint Assessment to assess readiness across governance, funding, and programming.',
  'Improve an Existing Program':
    'Great — strengthening an existing program begins with an honest organizational health review. I can connect you with organizational development support tailored to your context.',
  'Board Development':
    'Effective boards are a cornerstone of sustainability. I can share how our Leadership Academy helps build the governance capacity your organization needs.',
  'Funding Strategy':
    'Sustainable funding requires a deliberate mix of sources. I can point you toward fund development guidance — from major gifts to grants and partnerships.',
}

const fallbackResponses = [
  'Thanks for reaching out! Our Blueprint Assessment is the best first step — it reviews governance, finance, programming, fundraising, and operations to map your path to a sustainable debate organization.',
  'Great question. DLG supports organizations across strategy, leadership, funding, and programs. Tell me a bit more about your goals and I can point you to the right starting place.',
]

/** Keyword-based simulated reply so any typed message gets a response. */
function buildResponse(input: string): string {
  const q = input.toLowerCase()
  if (/(launch|start|begin|create|new)/.test(q)) return sampleResponses['Launch a Debate Program']
  if (/(improve|existing|grow|expand|strengthen|scale|better)/.test(q))
    return sampleResponses['Improve an Existing Program']
  if (/(board|governance|director|leader|succession)/.test(q)) return sampleResponses['Board Development']
  if (/(fund|grant|donor|money|budget|sponsor|revenue)/.test(q)) return sampleResponses['Funding Strategy']
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

export default function Advisor() {
  const [messages, setMessages] = useState<Array<{ role: 'assistant' | 'user'; text: string }>>([
    { role: 'assistant', text: aiAdvisor.welcomeMessage },
  ])
  const [draft, setDraft] = useState('')
  const reduce = useReducedMotion()
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: reduce ? 'auto' : 'smooth' })
  }, [messages, reduce])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }, { role: 'assistant', text: buildResponse(trimmed) }])
    setDraft('')
  }

  const selectPrompt = (prompt: string) => send(prompt)

  return (
    <section id="advisor" className="scroll-mt-24 bg-sky py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">AI Advisor</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {aiAdvisor.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{aiAdvisor.copy}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              {aiAdvisor.prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => selectPrompt(prompt)}
                  className="rounded-full border border-gold/40 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold hover:bg-gold hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_16px_50px_rgba(0,0,128,0.12)]">
            <div className="flex items-center gap-3 border-b border-line bg-navy px-6 py-5 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold">DLG AI Advisor</p>
                <p className="text-xs text-white/60">Interactive concept — no live AI connected</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex min-h-[22rem] flex-col justify-end gap-3 overflow-y-auto p-6">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={msg.role === 'user' ? 'self-end' : 'self-start'}
                  >
                    <div
                      className={
                        msg.role === 'user'
                          ? 'max-w-[85%] rounded-2xl rounded-br-sm bg-gold px-5 py-3 text-sm text-white'
                          : 'max-w-[85%] rounded-2xl rounded-bl-sm bg-sky px-5 py-3 text-sm text-ink'
                      }
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(draft)
              }}
              className="flex items-center gap-3 border-t border-line px-4 py-4"
            >
              <label htmlFor="cv-advisor-input" className="sr-only">
                Ask the DLG AI Advisor
              </label>
              <input
                id="cv-advisor-input"
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type your question and press Enter…"
                className="flex-1 rounded-full border border-line bg-sky px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-white transition-colors hover:bg-[#b8952f]"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}