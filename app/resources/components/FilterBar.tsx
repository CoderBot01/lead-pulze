'use client';

import React from 'react';
import Icon from '../../../components/AppIcon';
import { Button } from '@/components/ui/button';
/* -------------------- Types -------------------- */

export type Category =
    | 'All'
    | 'Guide'
    | 'Calculator'
    | 'Checklist'
    | 'Article'
    | 'Video'
    | 'Webinar';

export type Role =
    | 'All'
    | 'Sales Leader'
    | 'Trade Show Manager'
    | 'Sales Rep'
    | 'Founder';

interface FilterBarProps {
    selectedCategory: Category;
    setSelectedCategory: (category: Category) => void;
    selectedRole: Role;
    setSelectedRole: (role: Role) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    categories: Category[];
    roles: Role[];
}

/* -------------------- Component -------------------- */

const FilterBar: React.FC<FilterBarProps> = ({
    selectedCategory,
    setSelectedCategory,
    selectedRole,
    setSelectedRole,
    searchQuery,
    setSearchQuery,
    categories,
    roles,
}) => {
    const handleClearFilters = () => {
        setSelectedCategory('All');
        setSelectedRole('All');
        setSearchQuery('');
    };

    const hasActiveFilters =
        selectedCategory !== 'All' ||
        selectedRole !== 'All' ||
        searchQuery.trim() !== '';

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 md:p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                    <div className="relative">
                        <Icon
                            name="Search"
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5487EE]/20 focus:border-[#5487EE] transition-all"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Category */}
                    <div className="relative min-w-[180px]">
                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value as Category)
                            }
                            className="w-full appearance-none px-4 py-3 pr-10 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5487EE]/20 focus:border-[#5487EE] transition-all bg-white cursor-pointer"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category === 'All' ? 'All Types' : category}
                                </option>
                            ))}
                        </select>
                        <Icon
                            name="ChevronDown"
                            size={20}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                    </div>

                    {/* Role */}
                    <div className="relative min-w-[180px]">
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value as Role)}
                            className="w-full appearance-none px-4 py-3 pr-10 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5487EE]/20 focus:border-[#5487EE] transition-all bg-white cursor-pointer"
                        >
                            {roles.map((role) => (
                                <option key={role} value={role}>
                                    {role === 'All' ? 'All Roles' : role}
                                </option>
                            ))}
                        </select>
                        <Icon
                            name="ChevronDown"
                            size={20}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                    </div>

                    {/* Clear */}
                    {hasActiveFilters && (
                        <Button
                            variant="ghost"
                            size="default"
                            onClick={handleClearFilters}
                            className="whitespace-nowrap flex items-center gap-2"
                        >
                            <Icon name="X" size={16} />
                            Clear
                        </Button>

                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
