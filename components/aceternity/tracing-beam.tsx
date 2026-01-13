"use client"

import React from "react"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`relative ${className || ""}`}>
      {/* Vertical accent line - CHANGE: adjusted for mobile spacing */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

      <div className="space-y-6 sm:space-y-8 pl-4 sm:pl-6">
        {React.Children.map(children, (child, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot - CHANGE: responsive sizing */}
            <div className="absolute -left-3.5 sm:-left-10 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 border-white" />
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
