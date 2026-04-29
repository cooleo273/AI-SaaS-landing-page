import { Quote } from 'lucide-react'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

const testimonials = [
  {
    name: 'Maya Chen',
    role: 'Head of Ops, Northstar',
    quote:
      'We translated 200+ client documents in a week. Formatting stayed intact, and turnaround time dropped from days to minutes.',
  },
  {
    name: 'Jonas Weber',
    role: 'Product Lead, Atlas',
    quote:
      'The transcription quality is excellent for video calls. Our team can search, quote, and ship notes instantly.',
  },
  {
    name: 'Aisha Rahman',
    role: 'Compliance, Arcadia',
    quote:
      'Privacy-first workflows were a must. LingoFlow fits our security posture without slowing anyone down.',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-zinc-50">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams that move fast."
          description="High accuracy, clean exports, and a UI that stays out of your way."
        />

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="h-full rounded-2xl bg-white p-6 ring-1 ring-zinc-200/70 shadow-sm shadow-zinc-950/5">
                <Quote className="h-5 w-5 text-indigo-600" aria-hidden />
                <blockquote className="mt-4 text-sm leading-6 text-zinc-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <div className="text-sm font-semibold text-zinc-900">
                    {t.name}
                  </div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

