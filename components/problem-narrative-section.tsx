"use client"

export function ProblemNarrativeSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">The Reality</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            Why Traditional CRMs Fall Short at Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CRM design assumes sales happens at a desk. At exhibitions, reality is chaos.
          </p>
        </div>

        {/* Three-Column Narrative */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Column 1: The Problem */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-foreground mb-3">CRM Asks For</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Company name</li>
                <li>• Title / role</li>
                <li>• Email address</li>
                <li>• Budget range</li>
                <li>• Timeline</li>
              </ul>
            </div>
            <p className="text-xs text-muted-foreground italic px-1">Generic fields designed for office settings</p>
          </div>

          {/* Column 2: What Actually Happens */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-orange-200 bg-orange-50">
              <h3 className="font-semibold text-foreground mb-3">What Actually Matters</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Specific pain points</li>
                <li>• Objections raised</li>
                <li>• Decision process</li>
                <li>• Competitive concerns</li>
                <li>• Next steps promised</li>
              </ul>
            </div>
            <p className="text-xs text-muted-foreground italic px-1">Context lost in booth noise and time pressure</p>
          </div>

          {/* Column 3: The Gap */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-blue-200 bg-blue-50">
              <h3 className="font-semibold text-primary mb-3">LeadPulze Captures</h3>
              <ul className="space-y-2 text-sm text-foreground font-medium">
                <li>✓ Full conversation context</li>
                <li>✓ Intent signals</li>
                <li>✓ Pain points & objections</li>
                <li>✓ Decision-maker info</li>
                <li>✓ Next actions</li>
              </ul>
            </div>
            <p className="text-xs text-muted-foreground italic px-1">Audio-first means nothing is lost</p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center mb-8">
            The Impact
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">87%</p>
              <p className="text-sm text-muted-foreground">Of reps miss critical details typing notes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">3.5x</p>
              <p className="text-sm text-muted-foreground">Faster follow-up with audio context</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">92%</p>
              <p className="text-sm text-muted-foreground">Better lead quality with full conversation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
