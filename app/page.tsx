"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import SolutionOverviewAutoScroll from "@/components/SolutionOverviewAutoScroll"
import { Target, Users, Headphones, Check } from "lucide-react"
import WorkflowDiagram from "@/components/workflow"
import { ProblemSection } from "@/components/problem-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AudienceSection } from "@/components/audience-section"
import { DemoBookingModal } from "@/components/onboarding-flow"

/* ---------------- WORKFLOW DATA ---------------- */

const exhibitionWorkflow = {
  title: "",
  subtitle: "",
  icon: "",
  coverImage: "",
  steps: [
    {
      icon: "Mic",
      label: "Capture",
      title: "Record Conversations Naturally",
      description:
        "Sales reps tap their phone to start recording. LeadPulze captures clear audio even in noisy exhibition halls.",
      image: "/images/workflows/capture.png",
      details: [
        "One-tap voice capture",
        "Noise-optimized recording",
        "Multi-speaker detection",
        "All-day battery friendly",
      ],
    },
    {
      icon: "Brain",
      label: "Analyze",
      title: "AI Extracts Key Information",
      description:
        "AI instantly extracts contact details, pain points, intent, and next steps.",
      image: "/images/workflows/analyse.png",
      details: [
        "Contact extraction",
        "Pain point detection",
        "Intent scoring",
        "Timeline & budget signals",
      ],
    },
    {
      icon: "FolderOpen",
      label: "Organize",
      title: "Automatic Lead Categorization",
      description:
        "Leads are auto-tagged and synced to your CRM with full context.",
      image: "/images/workflows/organize.png",
      details: [
        "Hot / Warm / Cold tagging",
        "Industry classification",
        "Deal size estimation",
        "CRM sync",
      ],
    },
    {
      icon: "Cloud",
      label: "LeadPulze Desk",
      title: "Personalized Outreach at Scale",
      description:
        "AI writes follow-ups referencing the exact conversation.",
      image: "/images/workflows/leadpulze-dashboard.png",
      details: [
        "Context-aware emails",
        "Suggested next steps",
        "Calendar links",
        "Automated reminders",
      ],
    },
    {
      icon: "RefreshCcw",
      label: "Sync with CRM",
      title: "Close Deals Faster",
      description:
        "Teams close deals 3.2x faster with full conversation context.",
      image: "/images/workflows/syncwithcrm.png",
      details: [
        "Conversation history",
        "Deal progression tracking",
        "Win/loss insights",
        "Event ROI tracking",
      ],
    },
  ],
}

/* ---------------- PAGE ---------------- */

export default function Home() {
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

  return (
    <main className="min-h-screen selection:bg-primary/10">
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section ref={addToRefs} className="pt-32 pb-20 px-4 section-reveal">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Capture Every Conversation
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Convert Every Lead
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            One-tap voice capture. AI-powered understanding. CRM-ready follow-ups in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => setIsDemoOpen(true)}
              className="cta-animate bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full px-10 h-14"
            >
              Book a Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-14 bg-transparent"
            >
              See How It Works
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {[
              "One-tap voice capture",
              "AI-powered understanding",
              "CRM-ready follow-ups",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WORKFLOW ---------------- */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              From first conversation to closed deal
            </p>
          </div>
          <WorkflowDiagram workflow={exhibitionWorkflow} />
        </div>
      </section>

      <ProblemSection />
      <BenefitsSection />

      <AudienceSection
        teams={[
          {
            icon: <Target className="w-5 h-5" />,
            title: "Exhibition Teams",
            description: "Capture every booth conversation instantly.",
          },
          {
            icon: <Users className="w-5 h-5" />,
            title: "Field Sales",
            description: "Record meetings without typing notes.",
          },
          {
            icon: <Headphones className="w-5 h-5" />,
            title: "Enterprise Sales",
            description: "Enterprise-grade security & CRM sync.",
          },
          {
            icon: <Target className="w-5 h-5" />,
            title: "Founders & GTM",
            description: "Turn networking into qualified pipeline.",
          },
        ]}
      />

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Stop Leaving Money on the Table
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          See how LeadPulze turns conversations into revenue.
        </p>

        <Button
          size="lg"
          onClick={() => setIsDemoOpen(true)}
          className="cta-animate bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full px-12 h-14"
        >
          Book a Demo
        </Button>
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
