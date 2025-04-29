import * as React from "react"
import { cn } from "../lib/utils"

const TooltipContext = React.createContext<{open: boolean, setOpen: (open: boolean) => void} | undefined>(undefined)

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      {children}
    </TooltipContext.Provider>
  )
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>
}

export function TooltipTrigger({ asChild, children }: { asChild?: boolean, children: React.ReactNode }) {
  return <span>{children}</span>
}

export function TooltipContent({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute z-50 mt-2 px-2 py-1 rounded bg-muted text-xs text-foreground shadow-lg animate-fade-in">
      {children}
    </span>
  )
}
