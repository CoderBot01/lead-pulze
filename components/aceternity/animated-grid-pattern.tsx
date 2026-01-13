"use client"

import type React from "react"

export const AnimatedGridPattern = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Subtle animated grid background - CHANGE: responsive grid sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] opacity-40" />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
