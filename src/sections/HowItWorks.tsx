import { Download, FileUp, Sparkles } from 'lucide-react'
import { FadeIn } from '../components/motion/FadeIn'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

const steps = [
  {
    icon: FileUp,
    title: 'Upload your file',
    description:
      'Drag & drop PDFs, audio, video, or spreadsheets. We’ll detect the language automatically.',
  },
  {
    icon: Sparkles,
    title: 'AI processes instantly',
    description:
      'Translation + transcription run in parallel with optimized inference and smart chunking.',
  },
  {
    icon: Download,
    title: 'Download results',
    description:
      'Export as DOCX, PDF, SRT, or CSV—ready for teams, clients, and production workflows.',
  },
] as const

export function HowItWorks() {
  return (
    <section id="how" className="bg-zinc-50">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps. End-to-end results."
          description="No setup, no training, no messy exports. Just upload and ship."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <FadeIn key={s.title} delay={idx * 0.06}>
              <div className="relative h-full rounded-2xl bg-white p-6 ring-1 ring-zinc-200/70 shadow-sm shadow-zinc-950/5">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm shadow-zinc-950/10">
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="text-sm font-semibold text-zinc-400">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="mt-4 text-base font-semibold tracking-tight text-zinc-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {s.description}
                </p>

                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent" />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

