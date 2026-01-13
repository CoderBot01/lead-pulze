"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { DemoBookingModal } from "@/components/onboarding-flow"

import { ProblemNarrativeSection } from "@/components/problem-narrative-section"
import { AICapabilitiesSection } from "@/components/ai-capabilities-section"
import { SalesSignalsSection } from "@/components/sales-signals-section"
import { ConsistencyTimelineSection } from "@/components/consistency-timeline-section"

import ComparisonMatrixSection from "@/components/ComparisonMatrixSection"
import CoreCapabilitiesSection from "@/components/CoreCapabilities"
import InteractiveDemoSection from "@/components/PlatformDemo"

export default function ProductPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
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
      { threshold: 0.1 },
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

      {/* ---------------- HERO ---------------- */}
      <section ref={addToRefs} className="pt-32 pb-20 px-4 section-reveal">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]">
            LeadPulze for Sales Leaders
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            See how LeadPulze transforms exhibition conversations into qualified pipeline — without adding complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => setIsDemoOpen(true)}
              className="cta-animate w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 border-2 border-gray-300 rounded-full bg-transparent"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- CONTENT SECTIONS ---------------- */}
      <ProblemNarrativeSection />
      <InteractiveDemoSection />
      <CoreCapabilitiesSection />
      <AICapabilitiesSection />
      <SalesSignalsSection />
      <ConsistencyTimelineSection />
      <ComparisonMatrixSection />

      {/* ---------------- FINAL CTA ---------------- */}
      <section
        ref={addToRefs}
        className="py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-primary text-white section-reveal"
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Problem: The Exhibition to Qualified Lead Conversion Gap
          </h2>

          <Button
            size="lg"
            onClick={() => setIsDemoOpen(true)}
            className="cta-animate px-10 h-12 sm:h-14 bg-white text-primary rounded-full hover:bg-gray-100"
          >
            Book a Demo
          </Button>
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
