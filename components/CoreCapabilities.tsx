import React, { useState } from "react";
import Icon from "./AppIcon";
import Image from "./AppImage";

/* =====================
   Types
===================== */

type CapabilityId = "capture" | "organize" | "activate";

interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface Capability {
    id: CapabilityId;
    title: string;
    subtitle: string;
    icon: string;
    color: string;
    description: string;
    features: Feature[];
    image: string;
    imageAlt: string;
}

/* =====================
   Component
===================== */

const CoreCapabilitiesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<CapabilityId>("capture");

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
                {
                    icon: "Volume2",
                    title: "Noise Filtering",
                    description:
                        "AI-powered audio enhancement removes background noise from busy exhibition halls",
                },
                {
                    icon: "Users",
                    title: "Speaker Identification",
                    description:
                        "Automatically identifies and labels different speakers in multi-person conversations",
                },
                {
                    icon: "WifiOff",
                    title: "Offline Recording",
                    description:
                        "Capture conversations without internet connection, auto-sync when online",
                },
                {
                    icon: "Clock",
                    title: "Unlimited Duration",
                    description:
                        "No time limits on recordings - capture entire booth conversations",
                },
            ],
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_1515d19a3-1765503215629.png",
            imageAlt:
                "Professional sales representative using mobile phone to record conversation at busy trade show booth",
        },
        {
            id: "organize",
            title: "Organize",
            subtitle: "AI-Powered Conversation Analysis",
            icon: "Brain",
            color: "#47AEE8",
            description:
                "Transform raw audio into structured, actionable intelligence with automatic transcription, sentiment analysis, and CRM integration.",
            features: [
                {
                    icon: "FileText",
                    title: "Auto Transcription",
                    description:
                        "98% accuracy transcription in 50+ languages with industry-specific terminology",
                },
                {
                    icon: "Sparkles",
                    title: "Intent Detection",
                    description:
                        "AI identifies buying signals, pain points, and decision-making authority",
                },
                {
                    icon: "Tag",
                    title: "Smart Tagging",
                    description:
                        "Automatic categorization by product interest, industry, and deal stage",
                },
                {
                    icon: "Database",
                    title: "CRM Sync",
                    description:
                        "Seamless integration with Salesforce, HubSpot, and 20+ CRM platforms",
                },
            ],
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_166c1463e-1767094845288.png",
            imageAlt:
                "Dashboard showing AI-powered conversation analysis with charts and transcription",
        },
        {
            id: "activate",
            title: "Activate",
            subtitle: "Automated Follow-up & Lead Scoring",
            icon: "Zap",
            color: "#40DDE9",
            description:
                "Convert conversations into revenue with intelligent lead scoring, automated follow-up sequences, and real-time team collaboration.",
            features: [
                {
                    icon: "TrendingUp",
                    title: "Lead Scoring",
                    description:
                        "AI-powered scoring based on conversation quality, intent signals, and fit",
                },
                {
                    icon: "Mail",
                    title: "Auto Follow-up",
                    description:
                        "Personalized email sequences triggered by conversation insights",
                },
                {
                    icon: "Calendar",
                    title: "Meeting Scheduling",
                    description:
                        "One-click calendar integration with context-aware meeting suggestions",
                },
                {
                    icon: "Users",
                    title: "Team Handoff",
                    description:
                        "Seamless lead transfer with full conversation context and next steps",
                },
            ],
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_17b542c8d-1764670082756.png",
            imageAlt:
                "Sales team collaborating around laptop showing automated follow-up dashboard",
        },
    ];

    const activeCapability = capabilities.find(
        (cap) => cap.id === activeTab
    );

    if (!activeCapability) return null;

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4 md:mb-6">
                        Three Core Capabilities
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-[#64748B] max-w-3xl mx-auto">
                        From chaotic conversations to structured intelligence in three
                        seamless steps
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8 md:mb-12">
                    <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-sm border border-[#E2E8F0]">
                        {capabilities.map((capability) => (
                            <button
                                key={capability.id}
                                onClick={() => setActiveTab(capability.id)}
                                className={`flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === capability.id
                                        ? "bg-gradient-to-r from-[#5487EE] to-[#40DDE9] text-white shadow-lg"
                                        : "text-[#64748B] hover:bg-[#F8FAFC]"
                                    }`}
                            >
                                <Icon
                                    name={capability.icon}
                                    size={20}
                                    color={
                                        activeTab === capability.id
                                            ? "white"
                                            : capability.color
                                    }
                                />
                                <span className="font-semibold">{capability.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl shadow-xl border border-[#E2E8F0] overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        {/* Left */}
                        <div className="p-6 md:p-10 lg:p-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                    style={{
                                        backgroundColor: `${activeCapability.color}15`,
                                    }}
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
                                {activeCapability.features.map((feature, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{
                                                backgroundColor: `${activeCapability.color}10`,
                                            }}
                                        >
                                            <Icon
                                                name={feature.icon}
                                                size={20}
                                                color={activeCapability.color}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1E293B]">
                                                {feature.title}
                                            </h4>
                                            <p className="text-[#64748B] text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right */}
                        <div className="relative bg-gradient-to-br from-[#5487EE]/5 to-[#40DDE9]/5 p-6 md:p-12 flex items-center justify-center">
                            <div className="relative w-full max-w-md">
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
        </section>
    );
};

export default CoreCapabilitiesSection;
