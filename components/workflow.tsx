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

const AUTO_ADVANCE_INTERVAL = 6000 // desktop dots

const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ workflow }) => {
  const [activeStep, setActiveStep] = useState<number>(0)

  // Desktop auto advance
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Mobile horizontal scroll
  const mobileScrollRef = useRef<HTMLDivElement | null>(null)

  const step = workflow.steps[activeStep]

  /* =======================
     Desktop Auto Advance
  ======================= */
  useEffect(() => {
    startAutoAdvance()
    return stopAutoAdvance
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep])

  const startAutoAdvance = () => {
    stopAutoAdvance()
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) =>
        prev === workflow.steps.length - 1 ? 0 : prev + 1
      )
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
    setActiveStep((prev) =>
      prev === workflow.steps.length - 1 ? 0 : prev + 1
    )
  }

  const goPrev = () => {
    stopAutoAdvance()
    setActiveStep((prev) => Math.max(0, prev - 1))
  }

  /* =======================
     Mobile Auto Scroll
  ======================= */
  useEffect(() => {
    if (!mobileScrollRef.current) return

    const container = mobileScrollRef.current
    const card = container.firstElementChild as HTMLElement | null
    if (!card) return

    const gap = 16
    const cardWidth = card.offsetWidth + gap

    const timer = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" })
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* ================= Desktop Timeline ================= */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
        <div className="relative">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-3xl" />

            {/* Timeline */}
            <div className="flex items-center justify-between mb-12">
              {workflow.steps.map((step, index) => (
                <React.Fragment key={index}>
                  <button
                    onClick={() => handleStepChange(index)}
                    className={`flex flex-col items-center gap-3 transition-all duration-300 ${activeStep === index
                        ? "scale-110"
                        : "opacity-60 hover:opacity-100"
                      }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === index
                          ? "bg-gradient-to-br from-primary to-secondary shadow-lg"
                          : "bg-muted"
                        }`}
                    >
                      <Icon
                        name={step.icon}
                        size={28}
                        color={
                          activeStep === index
                            ? "#FFFFFF"
                            : "var(--color-muted-foreground)"
                        }
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${activeStep === index
                          ? "text-primary"
                          : "text-muted-foreground"
                        }`}
                    >
                      {step.label}
                    </span>
                  </button>

                  {index < workflow.steps.length - 1 && (
                    <div className="flex-1 h-1 mx-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ${activeStep > index ? "w-full" : "w-0"
                          }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {step.image && (
                <div className="order-2 md:order-1 flex justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={360}
                    height={480}
                    priority
                    className="rounded-3xl shadow-2xl border border-white/40 bg-white max-w-[90%]"
                  />
                </div>
              )}

              <div className="order-1 md:order-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Icon
                      name={step.icon}
                      size={24}
                      color="var(--color-primary)"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {step.details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex gap-3 bg-white rounded-lg p-4"
                      >
                        <div className="p-1 bg-primary/10 rounded mt-1">
                          <Icon
                            name="Check"
                            size={14}
                            color="var(--color-primary)"
                          />
                        </div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={goPrev}
              disabled={activeStep === 0}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary disabled:text-muted-foreground"
            >
              <Icon name="ChevronLeft" size={16} />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {workflow.steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepChange(index)}
                  className={`h-2 rounded-full transition-all ${activeStep === index ? "w-8 bg-primary" : "w-2 bg-muted"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary"
            >
              Next
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Horizontal Carousel ================= */}
      <div className="lg:hidden relative">
        <div
          ref={mobileScrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-4 px-4 pb-4 scrollbar-hide"
        >
          {workflow.steps.map((step, index) => (
            <div
              key={index}
              className="min-w-[90%] snap-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-3">
                <div className="flex gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <Icon name={step.icon} size={18} color="#fff" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase">
                      Step {index + 1} of {workflow.steps.length}
                    </p>
                    <h3 className="text-sm font-bold">{step.title}</h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 space-y-3">
                {step.image && (
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={320}
                    height={420}
                    className="rounded-lg shadow-md mx-auto"
                  />
                )}

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {step.details && (
                  <div className="space-y-2">
                    {step.details.map((d, i) => (
                      <div
                        key={i}
                        className="flex gap-2 bg-blue-50 rounded-md p-2"
                      >
                        <Icon
                          name="Check"
                          size={12}
                          color="var(--color-primary)"
                        />
                        <span className="text-xs">{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkflowDiagram
