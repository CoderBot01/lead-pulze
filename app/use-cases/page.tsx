"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductUIPlaceholder } from "@/components/ui-placeholders"
import { Users, Briefcase, Lightbulb, Mic2, Brain, Database } from "lucide-react"
import { DemoBookingModal } from "@/components/onboarding-flow"

const USE_CASES = [
  {
    id: "exhibitions",
    label: "Exhibitions & Trade Shows",
    icon: Users,
    situation: "Dozens of Conversations. Zero Time to Type.",
    narrative:
      "Sales reps speak to hundreds of prospects across multiple days. Conversations are short, noisy, and high-intent — but notes are rushed or postponed until it's too late.",
    pains: [
      "Conversations blend together by the end of the day",
      "Important objections and timelines are forgotten",
      "Follow-ups are generic and delayed",
      "CRM updates happen days later — if at all",
    ],
    steps: [
      { icon: Mic2, label: "Voice", description: "One-tap voice capture right after each conversation" },
      { icon: Brain, label: "AI", description: "AI extracts intent, budget, competitors, and next steps" },
      { icon: Database, label: "Structured Lead", description: "Original audio, transcript, and photos stay attached" },
    ],
    outcomes: [
      "Faster, more relevant follow-ups",
      "No lost context between conversations",
      "Clear visibility into hot leads during the event",
      "Higher post-event conversion rates",
    ],
    proof: '"We followed up the same evening instead of the following week."',
  },
  {
    id: "field-sales",
    label: "Field Sales Teams",
    icon: Briefcase,
    situation: "Selling on the Move, Not Behind a Desk",
    narrative:
      "Field sales reps move between meetings, sites, and cities. Notes are captured inconsistently — often from memory, hours later.",
    pains: [
      "Manual note entry at night or on weekends",
      "Missed details between back-to-back meetings",
      "Inconsistent CRM updates across reps",
      "Managers lack real-time pipeline visibility",
    ],
    steps: [
      { icon: Mic2, label: "Speak naturally", description: "Capture conversations immediately after meetings" },
      { icon: Brain, label: "AI structures", description: "AI standardizes notes across every rep" },
      { icon: Database, label: "CRM sync", description: "Offline-first — syncs later automatically" },
    ],
    outcomes: [
      "Less admin work for reps",
      "More accurate pipeline data",
      "Better coaching and forecasting",
      "Higher rep productivity",
    ],
    proof: '"Managers now see clean, comparable data instead of scattered notes."',
  },
  {
    id: "founders",
    label: "Founders & GTM Leaders",
    icon: Lightbulb,
    situation: "When the Founder Is the Salesperson",
    narrative:
      "Founders handle early sales, partnerships, and conferences themselves — often without time or discipline to update a CRM.",
    pains: [
      "High-context conversations live only in memory",
      "No structured record of early customer insights",
      "Follow-ups slip through the cracks",
      "Learnings are never captured for the team",
    ],
    steps: [
      { icon: Mic2, label: "Talk", description: "Capture conversations instantly without breaking flow" },
      { icon: Brain, label: "Understand", description: "AI turns discussions into structured insights" },
      { icon: Database, label: "Build early CRM", description: "Early customer signals preserved permanently" },
    ],
    outcomes: [
      "Stronger early pipeline",
      "Faster learning cycles",
      "Clear handoff to future sales teams",
      "Better product and GTM decisions",
    ],
    proof: '"Sales knowledge becomes reusable across the team."',
  },
]

export default function UseCases() {
  const [activeUseCase, setActiveUseCase] = useState(0)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const scrollRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    )

    scrollRefs.current.forEach((ref) => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el)
    }
  }

  const currentCase = USE_CASES[activeUseCase]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Built for How You Actually Sell
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            LeadPulze adapts to real sales environments — exhibitions, field sales, and founder-led selling.
          </p>
        </div>
      </section>

      {/* ---------------- STICKY NAV ---------------- */}
      <section className="sticky top-20 z-40 bg-white border-b py-4 shadow-sm">
        <div className="container mx-auto max-w-6xl flex justify-center gap-4">
          {USE_CASES.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${activeUseCase === index
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-semibold">
                  {useCase.label}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* ---------------- USE CASE CONTENT ---------------- */}
      <section ref={addToRefs} className="py-20 section-reveal">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {currentCase.situation}
            </h2>
            <p className="text-lg text-muted-foreground">
              {currentCase.narrative}
            </p>

            <ul className="space-y-3">
              {currentCase.pains.map((pain, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-6">
              {currentCase.steps.map((step, idx) => {
                const StepIcon = step.icon
                return (
                  <div key={idx} className="flex-1 text-center">
                    <StepIcon className="mx-auto w-6 h-6 text-primary mb-2" />
                    <p className="text-xs font-semibold">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                )
              })}
            </div>

            <ul className="space-y-2">
              {currentCase.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 border rounded-lg p-4 italic">
              {currentCase.proof}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <ProductUIPlaceholder
              variant={activeUseCase === 1 ? "dashboard" : "mobile"}
            />
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section
        ref={addToRefs}
        className="py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-primary text-white section-reveal"
      >
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Wherever You Sell, LeadPulze Keeps the Conversation Alive
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsDemoOpen(true)}
              className="bg-white text-primary rounded-full px-8 py-3 font-semibold hover:text-black"
            >
              Book Your Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white rounded-full px-8 py-3 bg-transparent"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* ---------------- DEMO MODAL ---------------- */}
      <DemoBookingModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </main>
  )
}
