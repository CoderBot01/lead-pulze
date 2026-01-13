"use client"

import React from 'react';
import Image from '@/components/AppImage';
import Icon from '@/components/AppIcon';
interface FounderData {
    name: string;
    role: string;
    image: string;
    imageAlt: string;
    quote: string;
    story: string;
}

const FounderStory: React.FC = () => {
    const founderData: FounderData = {
        name: 'Sarah Mitchell',
        role: 'Founder & CEO',
        image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png',
        imageAlt:
            'Professional woman with shoulder-length brown hair wearing navy blazer smiling confidently in modern office setting with natural lighting',
        quote:
            'Sales conversations are rich. Memory fades. CRMs lose context. We bridge that gap.',
        story: `After spending 15 years leading sales teams at enterprise software companies, I experienced firsthand the chaos of trade shows and field sales. I watched talented sales professionals lose valuable context, struggle with manual data entry, and miss follow-up opportunities—not because they weren't good at their jobs, but because the tools didn't match the reality of how sales actually happens.

At a particularly chaotic tech conference in 2021, I found myself frantically typing notes on my phone between conversations, only to realize hours later that I couldn't remember which insights belonged to which prospect. That moment of frustration became the genesis of LeadPulze.

We built LeadPulze because we believe sales professionals deserve tools that work in the real world—noisy exhibition halls, busy trade show floors, and fast-paced field environments. Tools that capture the richness of human conversation without the administrative burden that kills momentum.`,
    };

    return (
        <section className="py-12 md:py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        The Problem That Started It All
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                        Every great product starts with a real problem. Here's ours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Story */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 rounded-2xl border border-blue-100">
                            <Icon
                                name="Quote"
                                size={40}
                                color="var(--color-primary)"
                                className="mb-4 md:mb-6"
                            />
                            <blockquote className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-900 mb-6 md:mb-8 leading-relaxed">
                                “{founderData.quote}”
                            </blockquote>

                            <div className="space-y-4 md:space-y-6">
                                {founderData.story.split('\n\n').map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm md:text-base text-slate-700 leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={founderData.image}
                                    alt={founderData.imageAlt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-100">
                                <div className="text-lg md:text-xl font-bold text-slate-900">
                                    {founderData.name}
                                </div>
                                <div className="text-sm md:text-base text-slate-600">
                                    {founderData.role}
                                </div>
                                <div className="flex items-center gap-2 mt-3 md:mt-4">
                                    <Icon name="Linkedin" size={20} color="var(--color-primary)" />
                                    <Icon name="Twitter" size={20} color="var(--color-primary)" />
                                    <Icon name="Mail" size={20} color="var(--color-primary)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderStory;
