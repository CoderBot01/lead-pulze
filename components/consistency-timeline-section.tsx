"use client"

const ConsistencyTimeline = [
  {
    phase: "Problem",
    title: "Rep-to-Rep Variance",
    description:
      "Strong rep? Captures rich insights. Newer rep? Gets basics. Your best leads depend on who attended the booth. This is unreliable for scaling.",
  },
  {
    phase: "Signal",
    title: "Standardized Capture",
    description:
      "With LeadPulze, every conversation gets the same treatment. Intent. Pain points. Budget. Timeline. No variance. AI works the same for everyone.",
  },
  {
    phase: "Outcome",
    title: "Predictable Pipeline",
    description:
      "When every lead has consistent data, you can score, route, and forecast reliably. Your pipeline becomes predictable. Leadership gets confidence.",
  },
]

export function ConsistencyTimelineSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Confidence</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            Consistent Across Every Rep
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Standardization enables predictability. Predictability builds confidence. Leadership trusts the numbers.
          </p>
        </div>

        {/* Three-Step Timeline */}
        <div className="space-y-0 mb-16">
          {ConsistencyTimeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < ConsistencyTimeline.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 md:h-24 bg-gradient-to-b from-muted to-transparent" />
              )}

              {/* Timeline item */}
              <div className="flex gap-6 md:gap-10 pb-8 md:pb-16">
                {/* Circle marker */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg z-10 relative">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 flex-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">{item.phase}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Impact */}
        <div className="mt-8 p-8 md:p-10 bg-white rounded-xl border border-gray-200">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Rep reliability</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">95%</p>
              <p className="text-sm text-muted-foreground">Lead quality consistency</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">3.2x</p>
              <p className="text-sm text-muted-foreground">Faster deal closing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
