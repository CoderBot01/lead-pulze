import React from "react";
import Icon from "./AppIcon";
/* =====================
   Types
===================== */

type ComparisonValue = true | false | "limited" | "manual" | "generic";

interface ComparisonFeature {
    feature: string;
    leadpulze: ComparisonValue;
    traditional: ComparisonValue;
    description: string;
}

interface ComparisonCategory {
    category: string;
    features: ComparisonFeature[];
}

/* =====================
   Component
===================== */

const ComparisonMatrixSection: React.FC = () => {
    const comparisonData: ComparisonCategory[] = [
        {
            category: "Audio Capture",
            features: [
                {
                    feature: "Noise-filtered recording",
                    leadpulze: true,
                    traditional: false,
                    description: "Works in loud trade show environments",
                },
                {
                    feature: "Offline capability",
                    leadpulze: true,
                    traditional: false,
                    description: "No internet required during capture",
                },
                {
                    feature: "Unlimited duration",
                    leadpulze: true,
                    traditional: "limited",
                    description: "No time restrictions on recordings",
                },
                {
                    feature: "Speaker identification",
                    leadpulze: true,
                    traditional: false,
                    description: "Automatic multi-speaker detection",
                },
            ],
        },
        {
            category: "Intelligence & Analysis",
            features: [
                {
                    feature: "Real-time transcription",
                    leadpulze: true,
                    traditional: false,
                    description: "98% accuracy in 50+ languages",
                },
                {
                    feature: "Intent detection",
                    leadpulze: true,
                    traditional: false,
                    description: "AI identifies buying signals",
                },
                {
                    feature: "Sentiment analysis",
                    leadpulze: true,
                    traditional: false,
                    description: "Emotional tone understanding",
                },
                {
                    feature: "Context preservation",
                    leadpulze: true,
                    traditional: "manual",
                    description: "Full conversation history maintained",
                },
            ],
        },
        {
            category: "Activation & Follow-up",
            features: [
                {
                    feature: "Automated lead scoring",
                    leadpulze: true,
                    traditional: "manual",
                    description: "AI-powered priority ranking",
                },
                {
                    feature: "Personalized sequences",
                    leadpulze: true,
                    traditional: "generic",
                    description: "Context-aware follow-ups",
                },
                {
                    feature: "Same-day activation",
                    leadpulze: true,
                    traditional: false,
                    description: "Follow up while intent is high",
                },
                {
                    feature: "Team collaboration",
                    leadpulze: true,
                    traditional: "limited",
                    description: "Seamless handoffs with context",
                },
            ],
        },
    ];

    const renderCheckmark = (value: ComparisonValue): React.ReactNode => {
        if (value === true) {
            return (
                <div className="w-8 h-8 bg-[#10B981]/10 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={18} color="#10B981" />
                </div>
            );
        }

        if (value === "limited" || value === "manual" || value === "generic") {
            return (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#F59E0B]/10 rounded-full flex items-center justify-center">
                        <Icon name="Minus" size={18} color="#F59E0B" />
                    </div>
                    <span className="text-xs text-[#F59E0B] font-medium capitalize hidden sm:inline">
                        {value}
                    </span>
                </div>
            );
        }

        return (
            <div className="w-8 h-8 bg-[#EF4444]/10 rounded-full flex items-center justify-center">
                <Icon name="X" size={18} color="#EF4444" />
            </div>
        );
    };

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4 md:mb-6">
                        LeadPulze vs Traditional CRM
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-[#64748B] max-w-3xl mx-auto">
                        See why sales teams are switching from manual note-taking and generic
                        CRMs to purpose-built sales intelligence
                    </p>
                </div>

                {/* Table */}
                <div className="bg-gradient-to-br from-[#5487EE]/5 to-[#40DDE9]/5 rounded-3xl p-4 md:p-8 lg:p-10 border border-[#5487EE]/10">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                        {/* Header row */}
                        <div className="grid grid-cols-3 gap-4 p-4 md:p-6 bg-gradient-to-r from-[#5487EE] to-[#40DDE9] text-white">
                            <div />
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Icon name="Zap" size={20} color="white" />
                                    <span className="font-bold">LeadPulze</span>
                                </div>
                                <p className="text-xs opacity-90 hidden sm:block">
                                    Audio-First Intelligence
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Icon name="FileText" size={20} color="white" />
                                    <span className="font-bold">Traditional</span>
                                </div>
                                <p className="text-xs opacity-90 hidden sm:block">
                                    Manual CRM Entry
                                </p>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="divide-y divide-[#E2E8F0]">
                            {comparisonData.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-gradient-to-b from-[#5487EE] to-[#40DDE9] rounded-full" />
                                        {category.category}
                                    </h3>

                                    <div className="space-y-4">
                                        {category.features.map((item, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="grid grid-cols-3 gap-4 items-center"
                                            >
                                                <div>
                                                    <p className="font-medium text-[#1E293B] mb-1">
                                                        {item.feature}
                                                    </p>
                                                    <p className="text-xs text-[#64748B] hidden lg:block">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="flex justify-center">
                                                    {renderCheckmark(item.leadpulze)}
                                                </div>
                                                <div className="flex justify-center">
                                                    {renderCheckmark(item.traditional)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-8 grid sm:grid-cols-3 gap-4 md:gap-6">
                        {[
                            {
                                icon: "TrendingUp",
                                color: "#10B981",
                                value: "3.5x",
                                label: "Faster Follow-up Time",
                            },
                            {
                                icon: "Target",
                                color: "#5487EE",
                                value: "87%",
                                label: "Lead Quality Improvement",
                            },
                            {
                                icon: "Users",
                                color: "#40DDE9",
                                value: "95%",
                                label: "Team Adoption Rate",
                            },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 text-center border border-[#E2E8F0]"
                            >
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                                    style={{ backgroundColor: `${stat.color}15` }}
                                >
                                    <Icon name={stat.icon} size={24} color={stat.color} />
                                </div>
                                <p className="text-2xl font-bold text-[#1E293B] mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-[#64748B]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonMatrixSection;
