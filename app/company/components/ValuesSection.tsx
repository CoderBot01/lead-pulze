'use client';

import React from 'react';
import Icon from '@/components/AppIcon';
type IconName =
    | 'Heart'
    | 'Shield'
    | 'Zap'
    | 'Users'
    | 'Lock'
    | 'TrendingUp';

interface ValueItem {
    id: number;
    icon: IconName;
    title: string;
    description: string;
}

const ValuesSection: React.FC = () => {
    const values: ValueItem[] = [
        {
            id: 1,
            icon: 'Heart',
            title: 'Sales Professional First',
            description:
                'Every decision we make starts with the question: Does this help sales professionals do their job better? We build for the people in the trenches, not the boardroom.',
        },
        {
            id: 2,
            icon: 'Shield',
            title: 'Quiet Competence',
            description:
                "We don't need flashy features or marketing hype. Our product speaks through results. Professional reliability and deep understanding of real-world challenges define us.",
        },
        {
            id: 3,
            icon: 'Zap',
            title: 'Eliminate Friction',
            description:
                "Administrative burden kills sales momentum. We're obsessed with removing every unnecessary step between conversation and action. If it doesn't add value, we remove it.",
        },
        {
            id: 4,
            icon: 'Users',
            title: 'Real-World Testing',
            description:
                "We don't build in isolation. Every feature is tested in actual trade shows, exhibitions, and field sales environments before it ships. Reality is our design constraint.",
        },
        {
            id: 5,
            icon: 'Lock',
            title: 'Trust & Security',
            description:
                "Sales conversations contain sensitive information. Enterprise-grade security, GDPR compliance, and data protection aren't features—they're foundational requirements.",
        },
        {
            id: 6,
            icon: 'TrendingUp',
            title: 'Continuous Evolution',
            description:
                'The sales landscape changes constantly. We stay ahead by listening to our users, monitoring industry trends, and investing in AI research that matters.',
        },
    ];

    return (
        <section className="py-12 md:py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Our Values
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                        These principles guide every product decision, every customer
                        interaction, and every line of code we write.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {values.map((value) => (
                        <div
                            key={value.id}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#40DDE9] to-[#5487EE] rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-md">
                                <Icon name={value.icon} size={28} color="white" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                                {value.title}
                            </h3>
                            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
