"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function SolutionOverviewAutoScroll() {
    const [activeStep, setActiveStep] = useState("capture")
    const [isHovering, setIsHovering] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (isHovering) return

        const timer = setTimeout(() => {
            setActiveStep((prev) => {
                switch (prev) {
                    case "capture":
                        return "organize"
                    case "organize":
                        return "preserve"
                    case "preserve":
                        return "followup"
                    case "followup":
                        return "capture"
                    default:
                        return "capture"
                }
            })
            setProgress(0)
        }, 4500)

        return () => clearTimeout(timer)
    }, [activeStep, isHovering])

    useEffect(() => {
        if (isHovering) return

        const startTime = Date.now()
        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime
            const newProgress = Math.min((elapsed / 4500) * 100, 100)
            setProgress(newProgress)
        }, 30)

        return () => clearInterval(progressInterval)
    }, [activeStep, isHovering])

    const handleStepClick = (step: string) => {
        setActiveStep(step)
        setProgress(0)
    }

    const steps = [
        {
            id: "capture",
            title: "Capture conversations exactly as they happen",
            description:
                "Sales reps record one-tap voice notes during or immediately after conversations — without breaking flow or losing momentum.",
        },
        {
            id: "organize",
            title: "AI turns raw conversations into structured understanding",
            description:
                "LeadPulze automatically extracts problems, timelines, objections, competitors, and intent — consistently across every rep.",
        },
        {
            id: "preserve",
            title: "Nothing gets lost between meetings",
            description:
                "Original audio, transcripts, photos, and AI insights stay attached to the lead throughout the entire sales cycle.",
        },
        {
            id: "followup",
            title: "Follow up while intent is still high",
            description:
                "Personalized talking points, reminders, and next steps are generated instantly — so teams act while context is fresh.",
        },
    ]

    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Vertical Step List */}
            <div
                className="flex flex-col justify-center space-y-3"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {steps.map((step) => (
                    <div key={step.id} className="relative">
                        <button
                            onClick={() => handleStepClick(step.id)}
                            className={`text-left p-6 rounded-lg border transition-all duration-300 w-full ${activeStep === step.id
                                    ? "bg-blue-50 border-primary shadow-sm"
                                    : "bg-white border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3
                                        className={`font-bold text-lg mb-1 transition-colors duration-300 ${activeStep === step.id ? "text-foreground" : "text-muted-foreground"
                                            }`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className={`text-sm transition-colors duration-300 ${activeStep === step.id ? "text-foreground" : "text-muted-foreground"
                                            }`}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                                {activeStep === step.id && <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4 mt-1" />}
                            </div>
                        </button>
                        {activeStep === step.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-lg overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-primary to-cyan-500 transition-all duration-100"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* RIGHT: Contextual Image Area */}
            <div className="flex items-center justify-center">
                <div className="w-full aspect-square max-w-md rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden flex items-center justify-center p-8">
                    <div className="text-center space-y-4 transition-opacity duration-500">
                        {activeStep === "capture" && (
                            <div className="space-y-4 animate-in fade-in duration-500">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                                    <span className="text-4xl">🎤</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-lg text-foreground">Mobile voice capture UI</p>
                                    <p className="text-sm text-muted-foreground">Sales rep recording conversation at booth</p>
                                </div>
                            </div>
                        )}
                        {activeStep === "organize" && (
                            <div className="space-y-4 animate-in fade-in duration-500">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                                    <span className="text-4xl">✨</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-lg text-foreground">AI summary & extracted fields UI</p>
                                    <p className="text-sm text-muted-foreground">Intelligent understanding of conversation</p>
                                </div>
                            </div>
                        )}
                        {activeStep === "preserve" && (
                            <div className="space-y-4 animate-in fade-in duration-500">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                                    <span className="text-4xl">💾</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-lg text-foreground">Complete lead record with all context</p>
                                    <p className="text-sm text-muted-foreground">Audio, transcripts, insights preserved</p>
                                </div>
                            </div>
                        )}
                        {activeStep === "followup" && (
                            <div className="space-y-4 animate-in fade-in duration-500">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                                    <span className="text-4xl">⚡</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-lg text-foreground">CRM sync & follow-up confirmation</p>
                                    <p className="text-sm text-muted-foreground">Prioritized leads ready to action</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
