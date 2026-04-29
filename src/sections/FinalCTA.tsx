import { ArrowRight } from 'lucide-react'
import { FadeIn } from '../components/motion/FadeIn'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

export function FinalCTA() {
  return (
    <section className="bg-white">
      <Container className="py-20 sm:py-28">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 p-8 text-white ring-1 ring-zinc-800 sm:p-12">
            <div className="pointer-events-none absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-500/45 via-fuchsia-500/25 to-cyan-400/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-40 right-[-8rem] h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 via-violet-500/20 to-transparent blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Start Translating Today
                </h2>
                <p className="mt-3 max-w-xl text-pretty text-base leading-7 text-white/75">
                  Try LingoFlow for free. Upgrade anytime for faster processing,
                  multi-format exports, and team workflows.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() =>
                      document
                        .getElementById('pricing')
                        ?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        })
                    }
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    onClick={() =>
                      document
                        .getElementById('demo')
                        ?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        })
                    }
                  >
                    See the demo
                  </Button>
                </div>
              </div>

              <Card className="relative bg-white/5 p-5 ring-white/10">
                <div className="text-sm font-semibold text-white">
                  What you get
                </div>
                <ul className="mt-4 grid gap-3 text-sm text-white/80">
                  {[
                    'Automatic language detection',
                    'Translation + transcription',
                    'Clean exports (DOCX, SRT, CSV)',
                    'Privacy-first defaults',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

