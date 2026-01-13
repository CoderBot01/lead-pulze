import React from 'react';
import Icon from '@/components/AppIcon';
const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-blue-100 mb-6 md:mb-8">
                        <Icon name="Sparkles" size={20} color="var(--color-primary)" />
                        <span className="text-sm md:text-base font-medium text-slate-700">
                            Built by sales professionals, for sales professionals
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                        The Story Behind{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40DDE9] via-[#47AEE8] to-[#5487EE]">
                            LeadPulze
                        </span>
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
                        Born from the chaos of trade show floors and the frustration of lost conversations,
                        LeadPulze represents our commitment to solving the real problems sales professionals
                        face every day.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="flex items-center gap-3 bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">
                            <Icon name="Users" size={24} color="var(--color-primary)" />
                            <div className="text-left">
                                <div className="text-xl md:text-2xl font-bold text-slate-900">50+</div>
                                <div className="text-xs md:text-sm text-slate-600">Team Members</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">
                            <Icon name="Building2" size={24} color="var(--color-secondary)" />
                            <div className="text-left">
                                <div className="text-xl md:text-2xl font-bold text-slate-900">500+</div>
                                <div className="text-xs md:text-sm text-slate-600">Enterprise Clients</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">
                            <Icon name="TrendingUp" size={24} color="var(--color-accent)" />
                            <div className="text-left">
                                <div className="text-xl md:text-2xl font-bold text-slate-900">300%</div>
                                <div className="text-xs md:text-sm text-slate-600">YoY Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
