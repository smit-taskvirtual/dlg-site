import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Send } from 'lucide-react'
import Reveal from './Reveal'
import { aiAdvisor } from '../content'

/**
 * SampleResponses
 * ---------------------------------------------------------------------------
 * Simulated assistant replies tied to each prompt. These are STATIC mockup
 * content for the UI preview only — they do not call a live AI service.
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

/**
 * Advisor
 * ---------------------------------------------------------------------------
 * Interactive concept preview of the DLG AI Advisor: prompt chips that append
 * a simulated assistant reply. Clearly labeled as a mockup, no live AI.
 */
export default function Advisor() {
  const [messages, setMessages] = useState<Array<{ role: 'assistant' | 'user'; text: string }>>([
    { role: 'assistant', text: aiAdvisor.welcomeMessage },
  ])
  const reduce = useReducedMotion()

  const selectPrompt = (prompt: string) => {
    const response = sampleResponses[prompt]
    if (!response) return
    setMessages((prev) => [...prev, { role: 'user', text: prompt }, { role: 'assistant', text: response }])
  }

  return (
    <section id="advisor" className="scroll-mt-24 bg-sky py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cobalt">AI Advisor</p>
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
                  className="rounded-full border border-cobalt/40 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-cobalt hover:bg-cobalt hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_16px_50px_rgba(32,52,104,0.12)]">
            <div className="flex items-center gap-3 border-b border-line bg-navy px-6 py-5 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cobalt">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold">DLG AI Advisor</p>
                <p className="text-xs text-white/60">Interactive concept — no live AI connected</p>
              </div>
            </div>

            <div className="flex min-h-[22rem] flex-col justify-end gap-3 p-6">
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
                          ? 'max-w-[85%] rounded-2xl rounded-br-sm bg-cobalt px-5 py-3 text-sm text-white'
                          : 'max-w-[85%] rounded-2xl rounded-bl-sm bg-sky px-5 py-3 text-sm text-ink'
                      }
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3 border-t border-line px-6 py-4 text-muted">
              <span className="flex-1 text-sm">Select a prompt above to preview a response.</span>
              <Send className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}