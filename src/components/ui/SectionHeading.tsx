import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'
  return (
    <div className={`${alignClass} mx-auto max-w-3xl`}>
      {eyebrow ? (
        <div className="mb-4 inline-flex items-center">
          <span className="rounded-full bg-gradient-to-r from-indigo-500/15 via-fuchsia-500/10 to-cyan-400/10 p-px shadow-sm shadow-zinc-950/5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-700 ring-1 ring-inset ring-zinc-200/70 backdrop-blur">
              {eyebrow}
            </span>
          </span>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

