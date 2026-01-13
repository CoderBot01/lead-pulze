'use client';

import React from 'react';
import Icon from '../../../components/AppIcon';

type IconName = 'Mic' | 'Brain' | 'Zap' | 'Users' | 'Target';

interface VisionPoint {
    id: number;
    icon: IconName;
    title: string;
    description: string;
}

const VisionSection: React.FC = () => {
    const visionPoints: VisionPoint[] = [
        {
            id: 1,
            icon: 'Mic',
            title: 'Audio-First Future',
            description:
                'We believe the future of sales intelligence is audio-first. Typing is a barrier to authentic conversation. Voice is natural, rich, and captures nuance that text never can.',
        },
        {
            id: 2,
            icon: 'Brain',
            title: 'AI That Understands Context',
            description:
                "Our vision is AI that doesn't just transcribe—it understands. Context, intent, relationships, and follow-up priorities extracted automatically from natural conversations.",
        },
        {
            id: 3,
            icon: 'Zap',
            title: 'Zero Administrative Burden',
            description:
                "Sales professionals should sell, not do data entry. We're building toward a future where CRM updates, follow-ups, and task management happen automatically.",
        },
        {
            id: 4,
            icon: 'Users',
            title: 'Human-Centered Design',
            description:
                'Technology should adapt to how humans work, not the other way around. We design for real-world sales environments—noisy, mobile, and fast-paced.',
        },
    ];

    return (
        <section className="py-12 md:py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Our Vision for Sales Intelligence
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                        We're not just building a product—we're pioneering a new category of
                        sales intelligence designed for the mobile, audio-first reality of
                        modern sales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
                    {visionPoints.map((point) => (
                        <div
                            key={point.id}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-sm">
                                <Icon
                                    name={point.icon}
                                    size={28}
                                    color="var(--color-primary)"
                                />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                                {point.title}
                            </h3>
                            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-[#40DDE9] via-[#47AEE8] to-[#5487EE] rounded-2xl p-8 md:p-12 text-center text-white">
                    <Icon
                        name="Target"
                        size={48}
                        color="white"
                        className="mx-auto mb-6"
                    />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
                        To eliminate the gap between rich sales conversations and organized,
                        actionable intelligence—empowering sales professionals to focus on
                        relationships while AI handles the rest.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
