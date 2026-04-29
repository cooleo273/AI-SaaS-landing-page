import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, UploadCloud } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FadeIn } from '../components/motion/FadeIn'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const sampleInput =
  'Bonjour ! Pouvez-vous traduire ce paragraphe en anglais et conserver le ton professionnel ?'

const sampleOutput =
  'Hello! Could you translate this paragraph into English while keeping a professional tone?'

function useTypewriter(text: string, speedMs = 16) {
  const [value, setValue] = useState('')
  const iRef = useRef(0)

  useEffect(() => {
    iRef.current = 0

    const id = window.setInterval(() => {
      iRef.current += 1
      setValue(text.slice(0, iRef.current))
      if (iRef.current >= text.length) {
        window.clearInterval(id)
      }
    }, speedMs)

    return () => window.clearInterval(id)
  }, [text, speedMs])

  return value
}

function TypedOutput({ text }: { text: string }) {
  const typed = useTypewriter(text)
  const done = typed.length === text.length

  return (
    <p className="text-sm leading-6 text-white/85">
      {typed}
      <motion.span
        aria-hidden="true"
        className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] bg-white/70"
        animate={{ opacity: done ? 0 : [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: done ? 0 : Infinity,
          ease: 'easeInOut',
        }}
      />
    </p>
  )
}

export function InteractiveDemo() {
  const [input, setInput] = useState(sampleInput)
  const [runId, setRunId] = useState(0)

  const outputTarget = useMemo(() => {
    if (!input.trim()) return ''
    return sampleOutput
  }, [input])

  return (
    <section id="demo" className="bg-white">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Interactive demo"
          title="See LingoFlow translate in real time."
          description="This is a lightweight UI mock. In the product, results stream as they’re generated."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Card className="h-full p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <UploadCloud className="h-4 w-4 text-indigo-600" aria-hidden />
                  Input
                </div>
                <span className="text-xs font-medium text-zinc-500">
                  Detected: French
                </span>
              </div>

              <label className="mt-4 block text-sm font-medium text-zinc-700">
                Enter text or upload file
                <textarea
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value)
                  }}
                  rows={7}
                  className="mt-2 w-full resize-none rounded-2xl bg-white p-4 text-sm leading-6 text-zinc-900 ring-1 ring-inset ring-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  placeholder="Paste a paragraph, or describe what you want to translate…"
                />
              </label>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-zinc-500">
                  Tip: Try short paragraphs for the best demo effect.
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setInput(sampleInput)
                      setRunId((v) => v + 1)
                    }}
                  >
                    Reset
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      setRunId((v) => v + 1)
                    }}
                  >
                    Translate
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.05}>
            <Card className="relative h-full overflow-hidden bg-zinc-900 p-6 text-white ring-zinc-800">
              <div className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/40 via-fuchsia-500/20 to-cyan-400/20 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-indigo-300" aria-hidden />
                  Output
                </div>
                <span className="text-xs font-medium text-white/70">
                  English
                </span>
              </div>

              <div className="relative mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                <TypedOutput key={runId} text={outputTarget} />
              </div>

              <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Preserve tone', value: 'Professional' },
                  { label: 'Latency', value: '0.9–1.8s' },
                  { label: 'Privacy', value: 'On by default' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl bg-white/5 p-3 ring-1 ring-inset ring-white/10"
                  >
                    <div className="text-xs text-white/60">{m.label}</div>
                    <div className="mt-1 text-sm font-medium text-white/90">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

