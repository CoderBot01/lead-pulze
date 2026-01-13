"use client"

const SalesSignals = [
  {
    label: "Intent Signal",
    description: "How ready is this prospect to buy?",
    examples: ["High priority", "Mid-term interest", "Exploratory"],
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-600",
  },
  {
    label: "Budget Indicator",
    description: "What's their budget capacity?",
    examples: ["Enterprise-level", "Mid-market", "SMB"],
    color: "bg-green-50 border-green-200",
    textColor: "text-green-600",
  },
  {
    label: "Timeline Clarity",
    description: "When do they need a solution?",
    examples: ["This quarter", "Next year", "Evaluating"],
    color: "bg-purple-50 border-purple-200",
    textColor: "text-purple-600",
  },
  {
    label: "Competitive Context",
    description: "Are competitors in the picture?",
    examples: ["Mentioned alternatives", "Evaluating multiple", "No competition"],
    color: "bg-orange-50 border-orange-200",
    textColor: "text-orange-600",
  },
]

export function SalesSignalsSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Clarity</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            Extracts Sales Signals, Not Just Words
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your sales team cares about intent, budget, timelines, and competition. LeadPulze finds them automatically.
          </p>
        </div>

        {/* Signal Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SalesSignals.map((signal, index) => (
            <div key={index} className={`p-8 rounded-xl border ${signal.color} transition-all hover:shadow-md`}>
              <h3 className={`text-lg font-semibold ${signal.textColor} mb-2`}>{signal.label}</h3>
              <p className="text-sm text-muted-foreground mb-6">{signal.description}</p>

              <div className="space-y-2">
                {signal.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${signal.textColor.replace("text-", "bg-")}`} />
                    <span className="text-sm text-foreground">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center p-6 md:p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
          <p className="text-base md:text-lg text-foreground font-medium">
            Every signal is automatically structured and ready for your CRM. No manual categorization needed.
          </p>
        </div>
      </div>
    </section>
  )
}
