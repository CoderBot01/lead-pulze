"use client"

import type React from "react"
import { useState } from "react"

export const ExpandableCard = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon?: React.ReactNode
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-primary/40 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className={`relative z-10 transition-all duration-300 ${isExpanded ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 sm:gap-4 flex-1">
            {icon && (
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                {icon}
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              {isExpanded && (
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed animate-in fade-in duration-300">
                  {description}
                </p>
              )}
            </div>
          </div>
          <svg
            className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 mt-1 sm:mt-0 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
