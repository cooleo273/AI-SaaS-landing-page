import { Globe, Mail, MessagesSquare } from 'lucide-react'
import { Container } from '../components/ui/Container'

const footerLinks = {
  Product: ['Features', 'Demo', 'Pricing', 'Security'],
  Company: ['About', 'Careers', 'Blog', 'Changelog'],
  Contact: ['Support', 'Sales', 'Email', 'Status'],
} as const

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="text-sm font-semibold text-zinc-900">LingoFlow</div>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
              AI-powered translation and transcription for documents, audio,
              video, and spreadsheets.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-zinc-700 ring-1 ring-inset ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-zinc-700 ring-1 ring-inset ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Community"
              >
                <MessagesSquare className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-zinc-700 ring-1 ring-inset ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <div className="text-sm font-semibold text-zinc-900">
                  {title}
                </div>
                <ul className="mt-3 grid gap-2 text-sm">
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-zinc-600 transition hover:text-zinc-900"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200/70 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} LingoFlow. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-zinc-900" href="#">
              Terms
            </a>
            <a className="hover:text-zinc-900" href="#">
              Privacy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

