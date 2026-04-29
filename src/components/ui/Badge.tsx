import type { ReactNode } from 'react'

export function Badge({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white ${className}`}
    >
      {children}
    </span>
  )
}

