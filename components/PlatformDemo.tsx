import React, { useState } from "react";
import { Button } from "./ui/button";
import Icon from "./AppIcon";

/* =====================
   Types
===================== */

interface Insight {
    label: string;
    value: string;
    color: string;
}

interface MockTranscript {
    speaker: string;
    text: string;
    insights: Insight[];
    suggestedActions: string[];
}

/* =====================
   Component
===================== */

const InteractiveDemoSection: React.FC = () => {
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [recordingTime, setRecordingTime] = useState<number>(0);
    const [showTranscript, setShowTranscript] = useState<boolean>(false);

    const handleRecordToggle = (): void => {
        if (!isRecording) {
            setIsRecording(true);
            setShowTranscript(false);
            setRecordingTime(0);

            const interval = setInterval(() => {
                setRecordingTime((prev) => {
                    if (prev >= 4) {
                        clearInterval(interval);
                        setIsRecording(false);
                        setShowTranscript(true);
                        return 0;
                    }
                    return prev + 1;
                });
            }, 1000);
        }
    };

    const mockTranscript: MockTranscript = {
        speaker: "Sales Rep",
        text:
            "So we're looking at expanding our sales team for the upcoming trade show season. " +
            "We typically do 12-15 major exhibitions per year, and our biggest challenge is keeping track " +
            "of all the conversations we have at the booth. Right now, we're using a combination of business cards " +
            "and handwritten notes, but we lose so much context by the time we get back to the office.",
        insights: [
            {
                label: "Intent Signal",
                value: "High - Active buying cycle",
                color: "#10B981",
            },
            {
                label: "Pain Point",
                value: "Post-event lead chaos",
                color: "#F59E0B",
            },
            {
                label: "Timeline",
                value: "Immediate need",
                color: "#5487EE",
            },
        ],
        suggestedActions: [
            "Schedule follow-up within 24 hours",
            "Send exhibition ROI calculator",
            "Introduce to implementation team",
        ],
    };

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4 md:mb-6">
                        Experience the Platform
                    </h2>
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#25c6d4] mb-4 md:mb-6">
                        Audio First Philosophy
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-[#64748B] max-w-3xl mx-auto">
                        See how LeadPulze captures, analyzes, and activates sales conversations
                        in real-time
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Demo Panel */}
                    <div className="bg-gradient-to-br from-[#5487EE]/5 to-[#40DDE9]/5 rounded-3xl p-6 md:p-8 lg:p-10 border border-[#5487EE]/10">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg md:text-xl font-semibold text-[#1E293B]">
                                Audio Capture Demo
                            </h3>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-[#64748B]">
                                <div
                                    className={`w-2 h-2 rounded-full ${isRecording
                                            ? "bg-red-500 animate-pulse"
                                            : "bg-[#64748B]"
                                        }`}
                                />
                                {isRecording ? `Recording ${recordingTime}s` : "Ready"}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 mb-6 min-h-[280px] flex items-center justify-center">
                            {!isRecording && !showTranscript && (
                                <div className="flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-[#5487EE] to-[#40DDE9] rounded-full flex items-center justify-center mb-4">
                                        <Icon name="Mic" size={40} color="white" />
                                    </div>

                                    <p className="text-[#64748B] mb-6 max-w-xs">
                                        Click below to simulate a trade show conversation capture
                                    </p>

                                    <Button
                                        size="lg"
                                        className="cta-gradient flex items-center gap-2"
                                        onClick={handleRecordToggle}
                                    >
                                        <Icon name="Play" size={18} />
                                        Start Demo Recording
                                    </Button>
                                </div>
                            )}
                    


                            {isRecording && (
                                <div className="text-center w-full">
                                    <div className="relative w-40 h-40 mx-auto mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5487EE] to-[#40DDE9] rounded-full animate-pulse" />
                                        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                                            <Icon name="Mic" size={48} color="#5487EE" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-1 mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1 bg-[#5487EE] rounded-full animate-pulse"
                                                style={{
                                                    height: `${Math.random() * 40 + 20}px`,
                                                    animationDelay: `${i * 0.1}s`,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-[#64748B]">
                                        Capturing audio in noisy environment...
                                    </p>
                                </div>
                            )}

                            {showTranscript && (
                                <div className="w-full">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 bg-[#5487EE]/10 rounded-full flex items-center justify-center">
                                            <Icon name="User" size={16} color="#5487EE" />
                                        </div>
                                        <span className="text-sm font-medium text-[#1E293B]">
                                            {mockTranscript.speaker}
                                        </span>
                                    </div>

                                    <p className="text-[#64748B] leading-relaxed mb-4">
                                        {mockTranscript.text}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-[#10B981]">
                                        <Icon name="CheckCircle" size={14} color="#10B981" />
                                        <span>Transcription complete</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white rounded-xl p-3 md:p-4 text-center">
                                <Icon name="Volume2" size={20} color="#5487EE" className="mx-auto mb-2" />
                                <p className="text-xs text-[#64748B]">Noise Filtering</p>
                            </div>
                            <div className="bg-white rounded-xl p-3 md:p-4 text-center">
                                <Icon name="Zap" size={20} color="#5487EE" className="mx-auto mb-2" />
                                <p className="text-xs text-[#64748B]">Real-time AI</p>
                            </div>
                            <div className="bg-white rounded-xl p-3 md:p-4 text-center">
                                <Icon name="Lock" size={20} color="#5487EE" className="mx-auto mb-2" />
                                <p className="text-xs text-[#64748B]">Encrypted</p>
                            </div>
                        </div>
                    

                    </div>

                    {/* Insights */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm">
                            <h4 className="text-lg font-semibold text-[#1E293B] mb-6">
                                AI-Powered Insights
                            </h4>

                            {showTranscript ? (
                                <div className="space-y-4">
                                    {mockTranscript.insights.map((insight, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3 p-4 bg-[#F8FAFC] rounded-xl"
                                        >
                                            <div
                                                className="w-2 h-2 rounded-full mt-2"
                                                style={{ backgroundColor: insight.color }}
                                            />
                                            <div>
                                                <p className="font-medium text-[#1E293B]">
                                                    {insight.label}
                                                </p>
                                                <p className="text-[#64748B] text-sm">
                                                    {insight.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-[#64748B]">
                                    AI insights will appear after recording
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemoSection;
