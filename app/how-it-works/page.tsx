"use client"

import React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductUIPlaceholder } from "@/components/ui-placeholders"
import { Button } from "@/components/ui/button"
import { Mic, Brain, Database, Target, WifiOff, TrendingUp } from "lucide-react"
import { useEffect, useRef } from "react"

export default function HowItWorks() {
  const scrollRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.15 },
    )

    scrollRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold mb-6 tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            1200+ Happy Clients
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-balance leading-tight">
            From Conversation to
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Closed Deal
            </span>
            in Minutes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Everything you need to capture, remember, and act on every event conversation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-24">
          <StepCard
            ref={addToRefs}
            step="01"
            icon={<Mic className="w-6 h-6" />}
            title="Capture Real Conversations, Instantly"
            description="Sales reps record or summarize booth conversations directly in the app — no typing, no distractions."
            points={["No lost context", "Faster lead qualification", "Human conversations preserved digitally"]}
            visual={<ProductUIPlaceholder variant="mobile" />}
          />

          <StepCard
            ref={addToRefs}
            step="02"
            icon={<Brain className="w-6 h-6" />}
            title="AI That Understands What Matters"
            description="LeadPulze automatically summarizes conversations, highlights key needs, and identifies intent."
            points={[
              "Saves hours of post-event work",
              "Smarter, faster follow-ups",
              "Consistent lead quality across teams",
            ]}
            visual={
              <div className="w-full max-w-md mx-auto aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex gap-2 mb-6">
                  <div className="px-3 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-md">BUDGET</div>
                  <div className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-md">TIMELINE</div>
                  <div className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-md">INTENT</div>
                </div>
                <div className="space-y-3">
                  <div className="h-2.5 w-full bg-gray-200 rounded-full" />
                  <div className="h-2.5 w-5/6 bg-gray-200 rounded-full" />
                  <div className="h-2.5 w-4/6 bg-gray-200 rounded-full" />
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="h-2 w-3/4 bg-blue-300 rounded-full" />
                  </div>
                </div>
              </div>
            }
            reverse
          />

          <StepCard
            ref={addToRefs}
            step="03"
            icon={<Database className="w-6 h-6" />}
            title="Turn Conversations into Clean CRM Data"
            description="Every conversation becomes a structured, CRM-ready lead instantly — without manual data entry."
            points={[
              "Zero manual data entry",
              "No follow-up delays",
              "Cleaner, more reliable CRM data",
              "Source-level capture included",
            ]}
            visual={<ProductUIPlaceholder variant="dashboard" />}
          />

          <StepCard
            ref={addToRefs}
            step="04"
            icon={<Target className="w-6 h-6" />}
            title="Know Who to Follow Up With First"
            description="LeadPulze prioritizes high-intent leads so sales teams focus on conversations that actually convert."
            points={[
              "Higher conversion rates",
              "Better alignment between sales & marketing",
              "Clear prioritization of leads",
            ]}
            visual={
              <div className="w-full max-w-md mx-auto aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-3 h-3 rounded-full bg-green-600" />
                    <div className="h-2.5 w-24 bg-green-300 rounded-full" />
                    <div className="ml-auto px-2.5 py-1 bg-green-100 rounded text-xs text-green-700 font-bold">HOT</div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                    <div className="h-2.5 w-32 bg-blue-300 rounded-full" />
                    <div className="ml-auto px-2.5 py-1 bg-blue-100 rounded text-xs text-blue-700 font-bold">WARM</div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border border-gray-300">
                    <div className="w-3 h-3 rounded-full bg-gray-500" />
                    <div className="h-2.5 w-28 bg-gray-300 rounded-full" />
                    <div className="ml-auto px-2.5 py-1 bg-gray-200 rounded text-xs text-gray-700 font-bold">COLD</div>
                  </div>
                </div>
              </div>
            }
            reverse
          />

          <StepCard
            ref={addToRefs}
            step="05"
            icon={<WifiOff className="w-6 h-6" />}
            title="Built for Real Exhibition Conditions"
            description="LeadPulze works fully offline, syncing automatically once internet is available."
            points={[
              "No dependence on event Wi-Fi",
              "Reliable performance anywhere",
              "Peace of mind during busy expos",
            ]}
            visual={
              <div className="w-full max-w-md mx-auto aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200">
                  <WifiOff className="w-10 h-10 text-gray-400" />
                </div>
                <div className="text-center space-y-2">
                  <div className="h-3 w-32 mx-auto bg-blue-300 rounded-full" />
                  <div className="h-2 w-24 mx-auto bg-gray-300 rounded-full" />
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150" />
                </div>
              </div>
            }
          />

          <StepCard
            ref={addToRefs}
            step="06"
            icon={<TrendingUp className="w-6 h-6" />}
            title="Finally Measure Exhibition ROI"
            description="LeadPulze provides visibility into event performance and sales outcomes."
            points={[
              "Data-driven event decisions",
              "Justify exhibition spend",
              "Improve future event strategy",
              "Identify high-performing events",
              "Clear visibility into ROI",
            ]}
            visual={
              <div className="w-full max-w-md mx-auto aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-end h-32 gap-3">
                    <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-100 rounded-t-lg h-3/5 border-t border-blue-300" />
                    <div className="flex-1 bg-gradient-to-t from-cyan-400 to-cyan-100 rounded-t-lg h-4/5 border-t border-cyan-300" />
                    <div className="flex-1 bg-gradient-to-t from-blue-300 to-blue-50 rounded-t-lg h-full border-t border-blue-200" />
                  </div>
                  <div className="pt-3 border-t border-gray-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-20 bg-gray-300 rounded-full" />
                      <div className="h-2 w-12 bg-blue-400 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-24 bg-gray-300 rounded-full" />
                      <div className="h-2 w-10 bg-cyan-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            }
            reverse
          />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Stop Leaving Money on the Table at Every Exhibition
          </h2>
          <p className="text-xl mb-12 opacity-95">
            See how LeadPulze transforms exhibition conversations into closed deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="cta-animate px-10 h-12 sm:h-14 text-base sm:text-lg bg-white text-blue-600 font-semibold hover:bg-white/90 rounded-full shadow-lg"
            >
              Book a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 h-12 sm:h-14 text-base sm:text-lg bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 rounded-full"
            >
              See It in Action
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

const StepCard = React.forwardRef<
  HTMLElement,
  {
    step: string
    icon: React.ReactNode
    title: string
    description: string
    points: string[]
    visual: React.ReactNode
    reverse?: boolean
  }
>(({ step, icon, title, description, points, visual, reverse = false }, ref) => {
  return (
    <section ref={ref} className="section-reveal">
      <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className={`${reverse ? "md:order-2" : ""}`}>
          <div className="text-blue-600 font-mono text-xs tracking-widest mb-4 font-semibold">STEP {step}</div>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mt-0.5 flex-shrink-0">{icon}</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-balance text-foreground">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 text-base">{description}</p>
          <ul className="space-y-3">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-blue-500 font-bold mt-0.5 text-lg">•</span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${reverse ? "md:order-1" : ""}`}>{visual}</div>
      </div>
    </section>
  )
})

StepCard.displayName = "StepCard"
