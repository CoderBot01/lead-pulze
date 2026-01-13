'use client';

import React from 'react';
import Icon from '../../../components/AppIcon';

/* -------------------- Types -------------------- */

export type Category =
    | 'All'
    | 'Guide'
    | 'Calculator'
    | 'Checklist'
    | 'Article'
    | 'Video'
    | 'Webinar';

type IconName =
    | 'LayoutGrid'
    | 'BookOpen'
    | 'Calculator'
    | 'CheckSquare'
    | 'FileText'
    | 'Video'
    | 'Users';

interface CategorySectionProps {
    categories: Category[];
    selectedCategory: Category;
    setSelectedCategory: (category: Category) => void;
}

/* -------------------- Component -------------------- */

const CategorySection: React.FC<CategorySectionProps> = ({
    categories,
    selectedCategory,
    setSelectedCategory,
}) => {
    const getCategoryIcon = (category: Category): IconName => {
        const icons: Record<Category, IconName> = {
            All: 'LayoutGrid',
            Guide: 'BookOpen',
            Calculator: 'Calculator',
            Checklist: 'CheckSquare',
            Article: 'FileText',
            Video: 'Video',
            Webinar: 'Users',
        };

        return icons[category];
    };

    return (
        <div className="mb-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => {
                    const isActive = selectedCategory === category;

                    return (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all flex-shrink-0 ${isActive
                                    ? 'bg-[#5487EE] text-white shadow-lg shadow-[#5487EE]/25'
                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                }`}
                        >
                            <Icon
                                name={getCategoryIcon(category)}
                                size={18}
                                color={isActive ? '#FFFFFF' : 'currentColor'}
                            />
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CategorySection;
