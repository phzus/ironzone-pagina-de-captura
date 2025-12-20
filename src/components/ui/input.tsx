import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    const gradientRef = React.useRef(null)
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

    // IronZone Gold Gradient colors
    const gradientColor = '#A5825B'

    useGSAP(() => {
      gsap.set(gradientRef.current, {
        background: `radial-gradient(0px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 80%)`,
      })
    }, { scope: containerRef })

    function handleMouseMove(e: React.MouseEvent) {
      if (!containerRef.current) return
      const { left, top } = containerRef.current.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      setMousePosition({ x, y })
      gsap.to(gradientRef.current, {
        background: `radial-gradient(${radius}px circle at ${x}px ${y}px, ${gradientColor}, transparent 80%)`,
        duration: 0.1,
      })
    }

    function handleMouseEnter(e: React.MouseEvent) {
      if (!containerRef.current) return
      const { left, top } = containerRef.current.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      setMousePosition({ x, y })
      gsap.set(gradientRef.current, {
        background: `radial-gradient(0px circle at ${x}px ${y}px, ${gradientColor}, transparent 80%)`,
      })
      gsap.to(gradientRef.current, {
        background: `radial-gradient(${radius}px circle at ${x}px ${y}px, ${gradientColor}, transparent 80%)`,
        duration: 0.3,
      })
    }

    function handleMouseLeave() {
      gsap.to(gradientRef.current, {
        background: `radial-gradient(0px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 80%)`,
        duration: 0.3,
      })
    }

    return (
      <div
        ref={containerRef}
        className="group/input rounded-lg p-[1px] transition duration-300 relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={gradientRef}
          className="absolute inset-0 rounded-lg"
        />
        <input
          type={type}
          className={cn(
            `relative z-10 flex h-12 w-full rounded-md
            bg-[#0A0A0A]/40 backdrop-blur-md
            border border-[#D9D9D9]/[0.09]
            px-4 py-3 text-base text-white transition duration-400
            placeholder:text-neutral-500
            focus-visible:ring-1 focus-visible:ring-[#A5825B] focus-visible:outline-none
            disabled:cursor-not-allowed disabled:opacity-50`,
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
