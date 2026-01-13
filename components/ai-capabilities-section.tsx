"use client"

const AICapabilitiesData = [
  {
    title: "Handles Noise & Chaos",
    description:
      "Traditional transcription fails in loud exhibition halls. LeadPulze is trained on real trade show environments—booth chatter, background music, overlapping speakers.",
    content: "Built for bedlam",
  },
  {
    title: "Extracts Intent, Not Words",
    description:
      "It's not about transcribing. It's about understanding. Our AI identifies buying signals, pain points, objections, and decision authority in natural conversation.",
    content: "Understands context",
  },
  {
    title: "Standardizes Across Your Team",
    description:
      "One rep hears urgency. Another hears curiosity. LeadPulze structures every conversation the same way—removing rep-to-rep bias and enabling reliable pipeline analysis.",
    content: "Removes variability",
  },
  {
    title: "Works Offline, Activates Instantly",
    description:
      "Capture at the booth with no internet. Sync when connected. AI analysis happens in minutes. Your team gets actionable intelligence before prospects leave the venue.",
    content: "Zero friction",
  },
]

export function AICapabilitiesSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Intelligence</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            AI Optimized for Real Event Conditions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not generic transcription. Not call-center AI. Purpose-built for exhibitions and field sales.
          </p>
        </div>

        {/* Sticky Scroll or Timeline */}
        <div className="space-y-8">
          {AICapabilitiesData.map((item, index) => (
            <div key={index} className="flex gap-6 md:gap-12 items-start">
              {/* Timeline indicator */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                {index < AICapabilitiesData.length - 1 && (
                  <div className="w-0.5 h-16 md:h-24 bg-gradient-to-b from-primary to-accent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 md:pb-16 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 p-8 bg-white rounded-xl border border-gray-200">
          <p className="text-center text-lg font-semibold text-foreground">
            This is AI designed for selling in motion—not sitting in meetings.
          </p>
        </div>
      </div>
    </section>
  )
}
