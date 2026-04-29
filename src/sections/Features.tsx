import {
  AudioLines,
  FileSpreadsheet,
  FileText,
  Languages,
  ScanText,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

const features = [
  {
    icon: Languages,
    title: 'AI-powered translation',
    description:
      'Natural, high-accuracy translations that preserve tone and formatting.',
  },
  {
    icon: AudioLines,
    title: 'Speech-to-text transcription',
    description:
      'Convert audio and video into clean, searchable transcripts in seconds.',
  },
  {
    icon: ScanText,
    title: 'Automatic language detection',
    description:
      'Drop in mixed-language content—LingoFlow detects and routes instantly.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Multi-format support',
    description:
      'PDF, DOCX, audio, video, and Excel. Keep structure and tables intact.',
  },
  {
    icon: Zap,
    title: 'Fast processing',
    description:
      'Optimized pipelines deliver results fast—even for large files.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & private',
    description:
      'Encrypted in transit and at rest. Privacy-first processing by default.',
  },
] as const

export function Features() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="features" className="bg-white">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Built for documents, media, and spreadsheets
            </span>
          }
          title="Everything you need to translate and transcribe—at product speed."
          description="From one-line snippets to full-scale media libraries, LingoFlow keeps quality high and latency low."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                className="group h-full rounded-2xl bg-gradient-to-b from-white to-zinc-50/40 p-6 ring-1 ring-zinc-200/70 shadow-sm shadow-zinc-950/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-indigo-50 to-white text-indigo-700 ring-1 ring-inset ring-indigo-200/70 shadow-sm shadow-indigo-500/5 transition group-hover:from-indigo-100">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-zinc-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {f.description}
                </p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

