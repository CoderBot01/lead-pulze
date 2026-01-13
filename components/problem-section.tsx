"use client"

import { MessageCircle, Clock, Database, TrendingDown } from "lucide-react"
import { HoverEffect } from "@/components/aceternity/hover-effect"

export const ProblemSection = () => {
  const problems = [
    {
      title: "Conversations Move Faster Than Memory",
      description: "Sales reps speak to dozens of prospects in noisy booths, with no natural pause to capture details.",
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Notes Are Written Too Late",
      description: "Details are added hours or days later—after objections, intent, and urgency fade away.",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "CRMs Capture Fields, Not Context",
      description: "Names and emails are stored, but the real story behind the conversation vanishes.",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "High-Intent Leads Quietly Go Cold",
      description: "Without fast, contextual follow-ups, even strong interest fades without explanation.",
      icon: <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-gray-200 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section intro */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance text-foreground leading-[1.2]">
            The Hidden Revenue Leak at Every Exhibition
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            High-intent conversations disappear long before teams realize it.
          </p>
        </div>

        <HoverEffect items={problems} className="mb-20" />

        {/* Visual emphasis block - calm, intelligent summary */}
        <div className="max-w-2xl mx-auto text-center pt-12 border-t border-gray-200">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            The problem isn't lead quantity.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold">It's lost context.</p>
        </div>
      </div>
    </section>
  )
}
