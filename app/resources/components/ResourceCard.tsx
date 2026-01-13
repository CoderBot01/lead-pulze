'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImage';
/* -------------------- Types -------------------- */

export type Category =
    | 'Guide'
    | 'Calculator'
    | 'Checklist'
    | 'Article'
    | 'Video'
    | 'Webinar';

interface Resource {
    id: number;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    category: Category;
    readTime: string;
    date: string;
    tags: string[];
    link: string;
    role?: string;
}

interface ResourceCardProps {
    resource: Resource;
}

/* -------------------- Helpers -------------------- */

type IconName =
    | 'BookOpen'
    | 'Calculator'
    | 'CheckSquare'
    | 'FileText'
    | 'Video'
    | 'Users';

const categoryIconMap: Record<Category, IconName> = {
    Guide: 'BookOpen',
    Calculator: 'Calculator',
    Checklist: 'CheckSquare',
    Article: 'FileText',
    Video: 'Video',
    Webinar: 'Users',
};

const categoryColorMap: Record<Category, string> = {
    Guide: 'bg-[#5487EE]/10 text-[#5487EE]',
    Calculator: 'bg-[#47AEE8]/10 text-[#47AEE8]',
    Checklist: 'bg-[#40DDE9]/10 text-[#40DDE9]',
    Article: 'bg-slate-100 text-slate-700',
    Video: 'bg-[#5487EE]/10 text-[#5487EE]',
    Webinar: 'bg-[#47AEE8]/10 text-[#47AEE8]',
};

/* -------------------- Component -------------------- */

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
    return (
        <div className="conversation-card group h-full flex flex-col">
            {/* Image */}
            <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-2xl mb-4">
                <Image
                    src={resource.image}
                    alt={resource.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4">
                    <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${categoryColorMap[resource.category]
                            }`}
                    >
                        <Icon
                            name={categoryIconMap[resource.category]}
                            size={14}
                        />
                        {resource.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-slate-500">
                        {resource.readTime}
                    </span>
                    <span className="text-xs text-slate-300">•</span>
                    <span className="text-xs text-slate-500">
                        {resource.date}
                    </span>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-[#5487EE] transition-colors">
                    {resource.title}
                </h3>

                <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">
                    {resource.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        {resource.tags.slice(0, 2).map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={resource.link}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#5487EE] hover:gap-2 transition-all"
                    >
                        Read More
                        <Icon name="ArrowRight" size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResourceCard;
