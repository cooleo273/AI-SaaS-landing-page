import { Footer } from './sections/Footer'
import { FinalCTA } from './sections/FinalCTA'
import { Features } from './sections/Features'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { InteractiveDemo } from './sections/InteractiveDemo'
import { Pricing } from './sections/Pricing'
import { Testimonials } from './sections/Testimonials'
import { TrustedBy } from './sections/TrustedBy'

export default function App() {
  return (
    <div className="min-h-dvh bg-white">
      {/* HERO */}
      <Hero />
      {/* TRUST / SOCIAL PROOF */}
      <TrustedBy />
      {/* FEATURES */}
      <Features />
      {/* HOW IT WORKS */}
      <HowItWorks />
      {/* INTERACTIVE DEMO */}
      <InteractiveDemo />
      {/* TESTIMONIALS */}
      <Testimonials />
      {/* PRICING */}
      <Pricing />
      {/* FINAL CTA */}
      <FinalCTA />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}
