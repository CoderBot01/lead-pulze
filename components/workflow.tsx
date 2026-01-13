"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Icon from "./AppIcon"

/* =======================
   Types
======================= */

export interface WorkflowStep {
  icon: string
  label: string
  title: string
  description: string
  details?: string[]
  image?: string
}

export interface Workflow {
  icon: string
  title: string
  subtitle?: string
  steps: WorkflowStep[]
}

interface WorkflowDiagramProps {
  workflow: Workflow
}

/* =======================
   Component
======================= */

const AUTO_ADVANCE_INTERVAL = 6000 // ⏱️ 6 seconds (tweak if needed)

const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ workflow }) => {
  const [activeStep, setActiveStep] = useState<number>(0)

  // 🔹 NEW: track timer reference
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const step = workflow.steps[activeStep]

  /* =======================
       Auto-advance logic
    ======================= */
  useEffect(() => {
    startAutoAdvance()
    return stopAutoAdvance
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep])

  const startAutoAdvance = () => {
    stopAutoAdvance()
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev === workflow.steps.length - 1 ? 0 : prev + 1))
    }, AUTO_ADVANCE_INTERVAL)
  }

  const stopAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handleStepChange = (index: number) => {
    stopAutoAdvance()
    setActiveStep(index)
  }

  const goNext = () => {
    stopAutoAdvance()
    setActiveStep((prev) => (prev === workflow.steps.length - 1 ? 0 : prev + 1))
  }

  const goPrev = () => {
    stopAutoAdvance()
    setActiveStep((prev) => Math.max(0, prev - 1))
  }

  return (
    <div>
      {/* ================= Desktop Timeline ================= */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
        <div className="relative">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-3xl" />
            <div className="flex items-center justify-between mb-12">
              {workflow.steps.map((step, index) => (
                <React.Fragment key={index}>
                  <button
                    onClick={() => handleStepChange(index)}
                    className={`flex flex-col items-center gap-3 transition-all duration-300 ${
                      activeStep === index ? "scale-110" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeStep === index ? "bg-gradient-to-br from-primary to-secondary shadow-lg" : "bg-muted"
                      }`}
                    >
                      <Icon
                        name={step.icon}
                        size={28}
                        color={activeStep === index ? "#FFFFFF" : "var(--color-muted-foreground)"}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        activeStep === index ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                  </button>

                  {index < workflow.steps.length - 1 && (
                    <div className="flex-1 h-1 mx-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ${
                          activeStep > index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ================= Step Details ================= */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* LEFT — IMAGE */}
              {step.image && (
                <div className="order-2 md:order-1 flex justify-center">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={320}
                    height={450}
                    priority
                    className="
                        rounded-3xl
                        shadow-2xl
                        border border-white/40
                        bg-white
                        max-w-[90%]
                        md:max-w-[420px]
                      "
                  />
                </div>
              )}

              {/* RIGHT — CONTENT */}
              <div className="order-1 md:order-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Icon name={step.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {step.details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                        <div className="p-1 bg-primary/10 rounded mt-1">
                          <Icon name="Check" size={14} color="var(--color-primary)" />
                        </div>
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= Navigation ================= */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={goPrev}
              disabled={activeStep === 0}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary disabled:text-muted-foreground"
            >
              <Icon name="ChevronLeft" size={16} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {workflow.steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepChange(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeStep === index ? "w-8 bg-primary" : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>

            <button onClick={goNext} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary">
              <span className="hidden sm:inline">Next</span>
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile: Individual Step Cards ================= */}
      <div className="lg:hidden space-y-3 sm:space-y-4 px-0 sm:px-0">
        {workflow.steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 mx-4 sm:mx-0"
          >
            {/* Step Badge and Title Header */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-4 pt-3 pb-3 sm:pt-4 sm:pb-4">
              <div className="flex items-start gap-2 sm:gap-3">
                {/* Icon Container - CHANGE: reduce icon size on mobile */}
                <div className="p-2 sm:p-2.5 bg-gradient-to-br from-primary to-secondary rounded-lg flex-shrink-0 shadow-sm">
                  <Icon name={step.icon} size={18} color="#FFFFFF" />
                </div>
                {/* Title and Badge */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-0.5">
                    Step {index + 1} of {workflow.steps.length}
                  </p>
                  <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">{step.title}</h3>
                </div>
              </div>
            </div>

            {/* Card Body - CHANGE: improved spacing and typography */}
            <div className="px-4 py-3 sm:py-4 space-y-3 sm:space-y-4">
              {/* Image - Full width and prominent */}
              {step.image && (
                <div className="flex justify-center -mx-4 px-4 py-2 sm:py-3">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={300}
                    height={400}
                    priority
                    className="rounded-lg shadow-md border border-gray-100 max-w-full h-auto"
                  />
                </div>
              )}

              {/* Description - Clear and readable */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Details - Organized and scannable - CHANGE: reduced padding and improved spacing */}
              {step.details && (
                <div className="space-y-2 pt-1 sm:pt-2">
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-2 sm:gap-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg p-2.5 sm:p-3 border border-blue-100/50"
                    >
                      <div className="p-1 bg-primary/15 rounded flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={12} color="var(--color-primary)" />
                      </div>
                      <span className="text-xs sm:text-xs text-foreground leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkflowDiagram
