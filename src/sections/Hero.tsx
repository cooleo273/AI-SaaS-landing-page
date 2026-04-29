import { motion, useReducedMotion } from 'framer-motion'
import {
  AudioLines,
  FileText,
  Globe,
  Languages,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white to-white" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-fuchsia-500/15 to-cyan-400/10 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 18, 0], y: [-6, 8, -6] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 12, repeat: Infinity, ease: 'easeInOut' }
        }
      />
      <div className="pointer-events-none absolute -bottom-52 right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-transparent blur-3xl" />

      <Container className="relative pb-16 pt-10 sm:pb-24 sm:pt-14">
        <header className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-white shadow-sm shadow-zinc-950/10">
              <Languages className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-900">
              LingoFlow
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a className="hover:text-zinc-900" href="#features">
              Features
            </a>
            <a className="hover:text-zinc-900" href="#how">
              How it works
            </a>
            <a className="hover:text-zinc-900" href="#pricing">
              Pricing
            </a>
          </nav>

          <div className="block">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToId('pricing')}
            >
              Get Started
            </Button>
          </div>
        </header>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="inline-flex items-center">
              <span className="rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/15 to-cyan-400/10 p-px shadow-sm shadow-zinc-950/5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-200/70 backdrop-blur-xl">
                  <Sparkles
                    className="h-4 w-4 text-indigo-600"
                    aria-hidden="true"
                  />
                  Automatic language detection • Multi‑format inputs
                </span>
              </span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.85rem] lg:leading-[1.02]">
              Translate Anything. Instantly. With AI.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg">
              Upload documents, audio, or video. Get accurate translations in
              seconds.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" onClick={() => scrollToId('pricing')}>
                Get Started
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToId('demo')}
              >
                Try Demo
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-600">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-zinc-500" aria-hidden />
                Secure by default
              </div>
              <div className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-zinc-500" aria-hidden />
                100+ languages
              </div>
              <div className="inline-flex items-center gap-2">
                <AudioLines className="h-4 w-4 text-zinc-500" aria-hidden />
                Audio + video transcription
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/12 to-cyan-400/10 blur-2xl" />

              <div className="relative grid gap-4 rounded-[2rem] bg-white/55 p-4 ring-1 ring-zinc-200/70 shadow-lg shadow-zinc-950/10 backdrop-blur-xl sm:p-5">
                <div className="grid gap-4 lg:grid-cols-2">
                  <Card className="relative overflow-hidden bg-white/60">
                    <div className="flex items-center justify-between border-b border-zinc-200/70 bg-white/60 px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                        <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                        <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                      </div>
                      <div className="text-xs font-medium text-zinc-600">
                        Workspace
                      </div>
                    </div>

                    <div className="grid gap-4 p-5">
                      <div className="grid gap-3 rounded-2xl bg-white p-4 ring-1 ring-zinc-200/70 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
                            <FileText className="h-4 w-4 text-indigo-600" />
                            Upload
                          </div>
                          <span className="text-xs text-zinc-500">
                            PDF • MP3 • MP4 • XLSX
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-zinc-50 px-3 py-3 ring-1 ring-inset ring-zinc-200">
                          <span className="text-sm text-zinc-700">
                            Annual_Report_FR.pdf
                          </span>
                          <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
                            Detected: French
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'Translate', icon: Languages },
                          { label: 'Transcribe', icon: AudioLines },
                          { label: 'Summarize', icon: Sparkles },
                        ].map((item) => (
                          <motion.div
                            key={item.label}
                            whileHover={{ y: -3 }}
                            transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                            className="group rounded-2xl bg-white px-3 py-3 text-left ring-1 ring-zinc-200/70 shadow-sm"
                          >
                            <item.icon
                              className="h-4 w-4 text-zinc-700 transition group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                            <div className="mt-2 text-xs font-medium text-zinc-900">
                              {item.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div className="grid gap-4">
                    <Card className="relative overflow-hidden bg-zinc-900 text-white ring-zinc-800">
                      <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/45 via-fuchsia-500/25 to-cyan-400/15 blur-2xl" />
                      <div className="relative grid gap-2 p-5">
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 text-sm font-medium">
                            <Sparkles className="h-4 w-4 text-indigo-300" />
                            Output
                          </div>
                          <span className="text-xs text-white/70">
                            English • 1.3s
                          </span>
                        </div>
                        <p className="text-sm leading-6 text-white/85">
                          “Revenue increased by 18% year‑over‑year, driven by
                          expansion across EMEA and APAC…”
                        </p>
                        <div className="mt-1 inline-flex items-center gap-2 text-xs text-white/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Private processing
                        </div>
                      </div>
                    </Card>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Formats', value: 'PDF, MP4, XLSX' },
                        { label: 'Detection', value: 'Auto • 100+ langs' },
                      ].map((m) => (
                        <Card key={m.label} className="p-5">
                          <div className="text-xs font-medium text-zinc-500">
                            {m.label}
                          </div>
                          <div className="mt-2 text-sm font-semibold text-zinc-900">
                            {m.value}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -left-6 hidden h-16 w-16 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/15 to-cyan-400/10 blur-lg sm:block"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
              }
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

