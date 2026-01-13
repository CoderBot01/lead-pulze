"use client"

import { TracingBeam } from "@/components/aceternity/tracing-beam"

export const BenefitsSection = () => {
  const benefits = [
    {
      metric: "3×",
      title: "Faster Follow-ups",
      description:
        "Stop waiting days to follow up. LeadPulze generates context-rich emails within minutes of the conversation ending, while the prospect's interest is at peak.",
    },
    {
      metric: "↑",
      title: "Higher-Quality Leads",
      description:
        "Capture real intent signals, not just contact info. Your team knows exactly which leads are hot, who has budget, and what problem they came to solve.",
    },
    {
      metric: "0",
      title: "Manual Data Entry",
      description:
        "No more typing into CRMs. AI extracts everything from the conversation and populates your system automatically, freeing reps to focus on selling.",
    },
    {
      metric: "📈",
      title: "Better Post-Event Conversion",
      description:
        "With full conversation context and fast, personalized outreach, your team converts higher percentages of exhibition leads into pipeline opportunities.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance text-foreground leading-[1.2]">
            Why Sales Leaders Choose LeadPulze
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Measurable outcomes. Enterprise-grade execution.
          </p>
        </div>

        {/* Timeline-style benefits with subtle motion */}
        <div className="max-w-3xl mx-auto">
          <TracingBeam>
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group">
                <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary flex-shrink-0 min-w-fit">
                      {benefit.metric}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TracingBeam>
        </div>

        {/* Confidence statement */}
        <div className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-gray-200">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-2">
            These aren't estimates. They're outcomes our users report every day.
          </p>
          <p className="text-primary font-semibold text-sm sm:text-base">
            Every exhibition. Every conversation. Measurable impact.
          </p>
        </div>
      </div>
    </section>
  )
}
