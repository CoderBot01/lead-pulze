import React, { useState, useRef, useEffect } from "react"
import Icon from "./AppIcon"
import Image from "./AppImage"

/* =====================
   Types
===================== */

type CapabilityId = "capture" | "organize" | "activate"

interface Feature {
    icon: string
    title: string
    description: string
}

interface Capability {
    id: CapabilityId
    title: string
    subtitle: string
    icon: string
    color: string
    description: string
    features: Feature[]
    image: string
    imageAlt: string
}

/* =====================
   Component
===================== */

const CoreCapabilitiesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<CapabilityId>("capture")

    // Mobile carousel state
    const [activeIndex, setActiveIndex] = useState(0)
    const mobileScrollRef = useRef<HTMLDivElement | null>(null)
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null)
    const isTouchingRef = useRef(false)

    const capabilities: Capability[] = [
        {
            id: "capture",
            title: "Capture",
            subtitle: "Audio Recording in Any Environment",
            icon: "Mic",
            color: "#5487EE",
            description:
                "Record sales conversations in the noisiest trade show floors with advanced noise filtering and speaker identification. Works offline and syncs when connected.",
            features: [
                { icon: "Volume2", title: "Noise Filtering", description: "" },
                { icon: "Users", title: "Speaker Identification", description: "" },
                { icon: "WifiOff", title: "Offline Recording", description: "" },
                { icon: "Clock", title: "Unlimited Duration", description: "" },
            ],
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_1515d19a3-1765503215629.png",
            imageAlt: "Recording conversation at trade show booth",
        },
        {
            id: "organize",
            title: "Organize",
            subtitle: "AI-Powered Conversation Analysis",
            icon: "Brain",
            color: "#47AEE8",
            description:
                "Transform raw audio into structured, actionable intelligence with automatic transcription and CRM sync.",
            features: [
                { icon: "FileText", title: "Auto Transcription", description: "" },
                { icon: "Sparkles", title: "Intent Detection", description: "" },
                { icon: "Tag", title: "Smart Tagging", description: "" },
                { icon: "Database", title: "CRM Sync", description: "" },
            ],
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_166c1463e-1767094845288.png",
            imageAlt: "AI conversation analysis dashboard",
        },
        {
            id: "activate",
            title: "Activate",
            subtitle: "Automated Follow-up & Lead Scoring",
            icon: "Zap",
            color: "#40DDE9",
            description:
                "Convert conversations into revenue with intelligent lead scoring and automated follow-ups.",
            features: [
                { icon: "TrendingUp", title: "Lead Scoring", description: "" },
                { icon: "Mail", title: "Auto Follow-up", description: "" },
                { icon: "Calendar", title: "Meeting Scheduling", description: "" },
                { icon: "Users", title: "Team Handoff", description: "" },
            ],
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_17b542c8d-1764670082756.png",
            imageAlt: "Sales follow-up dashboard",
        },
    ]

    const activeCapability = capabilities.find((c) => c.id === activeTab)
    if (!activeCapability) return null

    /* =====================
       Mobile Auto Scroll
    ===================== */

    const startAutoScroll = () => {
        stopAutoScroll()

        autoScrollRef.current = setInterval(() => {
            if (!mobileScrollRef.current || isTouchingRef.current) return

            const container = mobileScrollRef.current
            const card = container.children[0] as HTMLElement
            if (!card) return

            const gap = 16
            const cardWidth = card.offsetWidth + gap
            const maxScroll = container.scrollWidth - container.clientWidth

            if (container.scrollLeft >= maxScroll - 10) {
                container.scrollTo({ left: 0, behavior: "smooth" })
                setActiveIndex(0)
            } else {
                container.scrollBy({ left: cardWidth, behavior: "smooth" })
                setActiveIndex((i) => (i + 1) % capabilities.length)
            }
        }, 4500)
    }

    const stopAutoScroll = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current)
            autoScrollRef.current = null
        }
    }

    useEffect(() => {
        startAutoScroll()
        return stopAutoScroll
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /* =====================
       Scroll Sync (Dots)
    ===================== */

    const handleScroll = () => {
        if (!mobileScrollRef.current) return
        const container = mobileScrollRef.current
        const card = container.children[0] as HTMLElement
        if (!card) return

        const gap = 16
        const cardWidth = card.offsetWidth + gap
        const index = Math.round(container.scrollLeft / cardWidth)
        setActiveIndex(index)
    }

    /* =====================
       Touch Pause
    ===================== */

    const onTouchStart = () => {
        isTouchingRef.current = true
        stopAutoScroll()
    }

    const onTouchEnd = () => {
        isTouchingRef.current = false
        startAutoScroll()
    }

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4">
                        Three Core Capabilities
                    </h2>
                    <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
                        From chaotic conversations to structured intelligence in three steps
                    </p>
                </div>

                {/* ================= DESKTOP TABS ================= */}
                <div className="hidden md:block">
                    <div className="mb-10">
                        <div className="flex gap-3 bg-white p-2 rounded-2xl shadow-sm border border-[#E2E8F0]">
                            {capabilities.map((cap) => (
                                <button
                                    key={cap.id}
                                    onClick={() => setActiveTab(cap.id)}
                                    className={`flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === cap.id
                                            ? "bg-gradient-to-r from-[#5487EE] to-[#40DDE9] text-white shadow-lg"
                                            : "text-[#64748B] hover:bg-[#F8FAFC]"
                                        }`}
                                >
                                    <Icon
                                        name={cap.icon}
                                        size={20}
                                        color={activeTab === cap.id ? "white" : cap.color}
                                    />
                                    <span className="font-semibold">{cap.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Content */}
                    <div className="bg-white rounded-3xl shadow-xl border border-[#E2E8F0] overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                        style={{ backgroundColor: `${activeCapability.color}15` }}
                                    >
                                        <Icon
                                            name={activeCapability.icon}
                                            size={28}
                                            color={activeCapability.color}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#1E293B]">
                                            {activeCapability.title}
                                        </h3>
                                        <p className="text-[#64748B]">
                                            {activeCapability.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[#64748B] mb-8">
                                    {activeCapability.description}
                                </p>

                                <div className="space-y-6">
                                    {activeCapability.features.map((f, i) => (
                                        <div key={i} className="flex gap-4">
                                            <Icon name={f.icon} size={18} color={activeCapability.color} />
                                            <span className="text-sm text-[#475569]">{f.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#5487EE]/5 to-[#40DDE9]/5 p-10 flex items-center justify-center">
                                <div className="relative max-w-md">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#5487EE] to-[#40DDE9] blur-3xl opacity-20 rounded-3xl" />
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={activeCapability.image}
                                            alt={activeCapability.imageAlt}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= MOBILE PREMIUM CAROUSEL ================= */}
                <div className="md:hidden">
                    <div
                        ref={mobileScrollRef}
                        onScroll={handleScroll}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide"
                    >
                        {capabilities.map((cap, index) => (
                            <div
                                key={cap.id}
                                className={`min-w-[90%] snap-center bg-white rounded-3xl shadow-lg border border-[#E2E8F0] overflow-hidden transition-all duration-500 ${activeIndex === index
                                        ? "scale-[1.02] opacity-100"
                                        : "scale-95 opacity-70"
                                    }`}
                            >
                                <div className="p-6 animate-fadeIn">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{ backgroundColor: `${cap.color}15` }}
                                        >
                                            <Icon name={cap.icon} size={24} color={cap.color} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#1E293B]">
                                                {cap.title}
                                            </h3>
                                            <p className="text-sm text-[#64748B]">{cap.subtitle}</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-[#64748B] mb-5">
                                        {cap.description}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        {cap.features.map((f, i) => (
                                            <div key={i} className="flex gap-2 items-center">
                                                <Icon name={f.icon} size={16} color={cap.color} />
                                                <span className="text-sm text-[#475569]">
                                                    {f.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="rounded-xl overflow-hidden shadow-md">
                                        <Image
                                            src={cap.image}
                                            alt={cap.imageAlt}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {capabilities.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-6 bg-primary" : "w-2 bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Fade animation */}
            <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    )
}

export default CoreCapabilitiesSection
