'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/AppIcon';
/* -------------------- Types -------------------- */

interface PopularResource {
    id: string;
    title: string;
    readTime: string;
    views: string;
    link: string;
}

interface PopularResourcesProps {
    resources: PopularResource[];
}

/* -------------------- Component -------------------- */

const PopularResources: React.FC<PopularResourcesProps> = ({ resources }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
                <Icon name="TrendingUp" size={24} color="var(--color-primary)" />
                <h3 className="text-xl font-bold text-slate-800">
                    Popular Resources
                </h3>
            </div>

            <div className="space-y-4">
                {resources.map((resource, index) => (
                    <Link
                        key={resource.id}
                        href={resource.link}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                        <div className="flex-shrink-0 w-8 h-8 bg-[#5487EE]/10 rounded-lg flex items-center justify-center text-[#5487EE] font-bold text-sm">
                            {index + 1}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-slate-800 mb-1 line-clamp-2 group-hover:text-[#5487EE] transition-colors">
                                {resource.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span>{resource.readTime}</span>
                                <span>•</span>
                                <span>{resource.views} views</span>
                            </div>
                        </div>

                        <Icon
                            name="ArrowRight"
                            size={18}
                            className="text-slate-400 group-hover:text-[#5487EE] group-hover:translate-x-1 transition-all flex-shrink-0"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularResources;
