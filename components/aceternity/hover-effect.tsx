"use client"

import type React from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: Array<{
    title: string
    description: string
    icon?: React.ReactNode
  }>
  className?: string
}) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className || ""}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg cursor-default"
        >
          {/* Subtle hover light effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            {item.icon && (
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/8 flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300 group-hover:bg-primary/12">
                {item.icon}
              </div>
            )}
            <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
