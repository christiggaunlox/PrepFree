import type React from "react"
import { cn } from "@/lib/utils"

export function Section({
  className,
  children,
  id,
  "aria-label": ariaLabel,
}: {
  className?: string
  children: React.ReactNode
  id?: string
  "aria-label"?: string
}) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn("w-full", className)}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  )
}
