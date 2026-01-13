'use client';

import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '@/components/AppImage';
import { Button } from '@/components/ui/button';
/* -------------------- Types -------------------- */

type Category =
    | 'All'
    | 'Guide'
    | 'Calculator'
    | 'Checklist'
    | 'Article'
    | 'Video'
    | 'Webinar';

interface FeaturedResourceData {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    readTime: string;
    downloads: string;
    link: string;
    category: Category;
}

interface FeaturedResourceProps {
    resource: FeaturedResourceData;
}

/* -------------------- Component -------------------- */

const FeaturedResource: React.FC<FeaturedResourceProps> = ({ resource }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-flow p-8 md:p-12 mb-12">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black text-sm font-medium mb-6">
                        <Icon name="Star" size={16} />
                        Featured Resource
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5487EE] mb-4">
                        {resource.title}
                    </h2>

                    <p className="text-lg text-bkack mb-6 max-w-xl">
                        {resource.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 text-black ">
                            <Icon name="Clock" size={18} />
                            <span className="text-sm">{resource.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/10">
                            <Icon name="Download" size={18} />
                            <span className="text-sm">
                                {resource.downloads} downloads
                            </span>
                        </div>
                    </div>

                    <Button
                        variant="default"
                        size="lg"
                        className="bg-white text-[#5487EE] hover:bg-white/90 flex items-center gap-2"
                        onClick={() => {
                            window.location.href = resource.link;
                        }}
                    >
                        Access Resource
                        <Icon name="ArrowRight" size={18} />
                    </Button>

                </div>

                <div className="relative">
                    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                            src={resource.image}
                            alt={resource.imageAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedResource;
