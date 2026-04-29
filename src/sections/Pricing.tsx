import { Check } from 'lucide-react'
import { FadeIn } from '../components/motion/FadeIn'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'For personal use and quick one-offs.',
    features: [
      'Basic translation',
      'Short audio transcription',
      'Export: TXT / DOCX',
      'Community support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'For creators and teams shipping weekly.',
    features: [
      'Everything in Free',
      'Multi-format support (PDF, XLSX, MP4)',
      'Streaming outputs + timestamps',
      'Priority processing',
      'Versioned exports',
    ],
    highlighted: true,
    cta: 'Start Pro',
  },
  {
    name: 'Business',
    price: '$59',
    description: 'For orgs with governance and scale.',
    features: [
      'Everything in Pro',
      'Team workspaces',
      'SSO + audit logs',
      'Custom retention controls',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans that scale with you."
          description="Start free, upgrade when you need speed and collaboration."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p, idx) => (
            <FadeIn key={p.name} delay={idx * 0.06}>
              <div className="relative h-full">
                {p.highlighted ? (
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500/35 via-fuchsia-500/25 to-cyan-400/20 blur-sm" />
                ) : null}

                <div
                  className={[
                    'relative h-full rounded-3xl p-7 ring-1 shadow-sm shadow-zinc-950/5',
                    p.highlighted
                      ? 'bg-zinc-900 text-white ring-white/10 shadow-lg shadow-zinc-950/15'
                      : 'bg-white text-zinc-900 ring-zinc-200/70',
                  ].join(' ')}
                >
                {p.highlighted ? (
                  <div className="absolute right-7 top-7">
                    <Badge className="bg-indigo-500">Most popular</Badge>
                  </div>
                ) : null}

                <div className="text-sm font-semibold">
                  {p.name}
                  <div className="mt-2 text-4xl font-semibold tracking-tight">
                    {p.price}
                    <span
                      className={[
                        'ml-1 text-sm font-medium',
                        p.highlighted ? 'text-white/70' : 'text-zinc-500',
                      ].join(' ')}
                    >
                      /mo
                    </span>
                  </div>
                </div>

                <p
                  className={[
                    'mt-3 text-sm leading-6',
                    p.highlighted ? 'text-white/75' : 'text-zinc-600',
                  ].join(' ')}
                >
                  {p.description}
                </p>

                <ul className="mt-6 grid gap-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={[
                          'mt-0.5 grid h-5 w-5 place-items-center rounded-full ring-1',
                          p.highlighted
                            ? 'bg-white/10 text-white ring-white/15'
                            : 'bg-indigo-50 text-indigo-700 ring-indigo-200',
                        ].join(' ')}
                        aria-hidden
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className={p.highlighted ? 'text-white/85' : undefined}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    size="lg"
                    variant={p.highlighted ? 'secondary' : 'primary'}
                    className="w-full"
                    onClick={() => {
                      document
                        .getElementById('demo')
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                  >
                    {p.cta}
                  </Button>
                </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

