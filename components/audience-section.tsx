"use client"

import type React from "react"
import { ExpandableCard } from "@/components/aceternity/expandable-card"

interface TeamProps {
  icon: React.ReactNode
  title: string
  description: string
}

export const AudienceSection = ({ teams }: { teams: TeamProps[] }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance text-foreground leading-[1.2]">
            Built for These Teams
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            LeadPulze works for any sales team that needs to convert high-intent exhibition conversations into pipeline.
          </p>
        </div>

        {/* Interactive expandable cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {teams.map((team, idx) => (
            <ExpandableCard key={idx} icon={team.icon} title={team.title} description={team.description} />
          ))}
        </div>

        {/* Trust statement */}
        <div className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-gray-200">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2">
            Whether you're a 5-person startup or a Fortune 500 sales organization, LeadPulze scales with you.
          </p>
          <p className="text-primary font-semibold text-sm sm:text-base">
            Enterprise-ready. Event-focused. Built for sales leaders.
          </p>
        </div>
      </div>
    </section>
  )
}
