import type { ReactNode } from 'react'

export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl bg-white/65 ring-1 ring-zinc-200/70 shadow-sm shadow-zinc-950/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

