import * as React from "react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "underline-offset-4 hover:underline text-primary",
}

const sizeVariants = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
  icon: "h-10 w-10 p-0 rounded-full",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    // Remove native drag event props to avoid type conflicts with Framer Motion
    const {
      // Drag events
      onDrag,
      onDragStart,
      onDragEnd,
      onDragOver,
      onDragEnter,
      onDragLeave,
      onDragExit,
      onDrop,
      // Animation events
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...filteredProps
    } = props;
    return (
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.06, filter: "brightness(1.1)" }}
        whileTap={{ scale: 0.97, filter: "brightness(0.95)" }}
        transition={{ duration: 0.2 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        ref={ref}
        {...filteredProps}
      />
    )
  }
)
Button.displayName = "Button"
