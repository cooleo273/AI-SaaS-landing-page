import { FadeIn } from '../components/motion/FadeIn'
import { Container } from '../components/ui/Container'

const brands = ['Northstar', 'Arcadia', 'Atlas', 'Vertex', 'Paperline', 'Cobalt']

export function TrustedBy() {
  return (
    <section className="border-y border-zinc-200/70 bg-white">
      <Container className="py-10">
        <FadeIn>
          <p className="text-center text-sm text-zinc-600">
            <span className="font-medium text-zinc-900">
              Trusted by 10,000+ users worldwide
            </span>
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {brands.map((b) => (
              <div
                key={b}
                className="flex items-center justify-center rounded-2xl bg-zinc-50 px-3 py-3 text-xs font-semibold tracking-wide text-zinc-500 ring-1 ring-inset ring-zinc-200"
                aria-label={`${b} logo`}
              >
                {b}
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

