"use client"

import type React from "react"

export const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-max ${className || ""}`}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  title,
  description,
  icon,
  className,
}: {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 cursor-default ${
        className || ""
      }`}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {icon && (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-3 sm:mb-4 text-primary transition-all duration-300 group-hover:bg-primary/12 group-hover:scale-110">
            {icon}
          </div>
        )}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 text-base sm:text-lg">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
