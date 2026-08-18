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
 * AIAdvisor
 * ---------------------------------------------------------------------------
 * Split layout pairing an explanation with a polished chat mockup.
 *
 * Design decision: the chat is clearly a "concept preview." Prompt buttons are
 * real buttons; selecting one appends a user message and a canned assistant
 * response. A note states no live AI service is connected, so we never imply
 * functionality that isn't implemented.
 */
export default function AIAdvisor() {
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
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28" aria-labelledby="ai-title">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> Concept Preview
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="ai-title" className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {aiAdvisor.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100/80 sm:text-lg">{aiAdvisor.copy}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-100/60">Try a prompt</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {aiAdvisor.prompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => selectPrompt(prompt)}
                    className="rounded-full border border-support/60 px-4 py-2 text-sm font-semibold text-blue-50 transition-colors hover:border-support hover:bg-support/20"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Chat mockup */}
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-sm border border-white/10 bg-white/[0.04] backdrop-blur-sm">
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-cobalt text-white">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">DLG AI Advisor</p>
                <p className="text-xs text-blue-100/60">Interactive concept — no live AI connected</p>
              </div>
            </div>

            <div className="flex min-h-[20rem] flex-col justify-end gap-3 p-5">
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
                          ? 'max-w-[85%] rounded-sm bg-cobalt px-4 py-3 text-sm text-white'
                          : 'max-w-[85%] rounded-sm bg-white/[0.06] px-4 py-3 text-sm text-blue-50'
                      }
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="flex items-center gap-3 text-blue-100/50">
                <span className="flex-1 text-sm">Select a prompt above to preview a response.</span>
                <Send className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}