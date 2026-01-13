"use client"

import { useEffect, useRef, useState } from "react"

export const TextRevealCard = ({
  text,
  revealText,
}: {
  text: string
  revealText: string
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative p-6 sm:p-8 rounded-lg border border-gray-200 bg-white overflow-hidden h-48 sm:h-64 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 text-center">
        <p
          className={`text-lg sm:text-2xl md:text-3xl font-semibold text-foreground transition-all duration-700 ${
            isVisible ? "opacity-0" : "opacity-100"
          }`}
        >
          {text}
        </p>
        <p
          className={`text-lg sm:text-2xl md:text-3xl font-semibold text-primary transition-all duration-700 absolute inset-0 flex items-center justify-center ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {revealText}
        </p>
      </div>
    </div>
  )
}
