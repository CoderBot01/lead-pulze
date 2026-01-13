'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Icon from '../../components/AppIcon';
import { Button } from '@/components/ui/button';

import ResourceCard from './components/ResourceCard';
import FilterBar from './components/FilterBar';
import CategorySection from './components/CategorySection';
import PopularResources from './components/PopularResource';
import FeaturedResource from './components/FeaturedResources';
import NewsletterSection from './components/NewsLetter';

/* -------------------- Types (SINGLE SOURCE OF TRUTH) -------------------- */

// Categories used in REAL DATA (NO "All")
type ResourceCategory =
  | 'Guide'
  | 'Calculator'
  | 'Checklist'
  | 'Article'
  | 'Video'
  | 'Webinar';

// Categories used ONLY for filters (includes "All")
type FilterCategory = ResourceCategory | 'All';

type Role =
  | 'All'
  | 'Sales Leader'
  | 'Trade Show Manager'
  | 'Sales Rep'
  | 'Founder';

interface FeaturedResourceType {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  readTime: string;
  downloads: string;
  link: string;
  category: ResourceCategory;
}

interface Resource {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: ResourceCategory;
  readTime: string;
  date: string;
  tags: string[];
  link: string;
  role: Role;
}

interface PopularResource {
  id: string;
  title: string;
  readTime: string;
  views: string;
  link: string;
}

/* -------------------- Component -------------------- */

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>('All');
  const [selectedRole, setSelectedRole] = useState<Role>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: FilterCategory[] = [
    'All',
    'Guide',
    'Calculator',
    'Checklist',
    'Article',
    'Video',
    'Webinar',
  ];

  const roles: Role[] = [
    'All',
    'Sales Leader',
    'Trade Show Manager',
    'Sales Rep',
    'Founder',
  ];

  const featuredResource: FeaturedResourceType = {
    id: 'featured-1',
    title: 'The Complete Guide to Audio-First Sales Intelligence',
    description:
      'Master the art of capturing, organizing, and activating sales conversations in real-time.',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1efc8391b-1767700962291.png',
    imageAlt: 'Team collaborating in modern office',
    readTime: '45 min read',
    downloads: '2,847',
    link: '/resources/audio-first-guide',
    category: 'Guide',
  };

  const resources: Resource[] = [
    {
      id: 1,
      title: 'ROI Calculator: Measure Your Event Sales Impact',
      description:
        'Calculate the true value of your trade show investments.',
      image:
        'https://img.rocket.new/generatedImages/rocket_gen_img_1339d031a-1764642895849.png',
      imageAlt: 'Analytics dashboard',
      category: 'Calculator',
      readTime: '10 min',
      date: 'Jan 5, 2026',
      tags: ['ROI', 'Events', 'Analytics'],
      link: '/resources/roi-calculator',
      role: 'Sales Leader',
    },
    {
      id: 2,
      title: 'Pre-Event Preparation Checklist for Trade Shows',
      description:
        'Ensure your team is fully prepared before the exhibition.',
      image:
        'https://images.unsplash.com/photo-1638906924645-1067f1362ee8',
      imageAlt: 'Trade show hall',
      category: 'Checklist',
      readTime: '8 min',
      date: 'Jan 3, 2026',
      tags: ['Events', 'Planning'],
      link: '/resources/event-checklist',
      role: 'Trade Show Manager',
    },
    {
      id: 3,
      title: 'Optimizing Sales Conversations: Audio-First',
      description:
        'Why typing notes kills rapport and how audio capture changes sales.',
      image:
        'https://img.rocket.new/generatedImages/rocket_gen_img_16222a311-1765903721196.png',
      imageAlt: 'Sales presentation',
      category: 'Article',
      readTime: '12 min',
      date: 'Dec 30, 2025',
      tags: ['Sales Strategy'],
      link: '/resources/audio-first-approach',
      role: 'Sales Rep',
    },
    {
      id: 4,
      title: 'CRM Integration Best Practices for Event Sales',
      description:
        'Seamlessly connect event leads with your CRM workflow.',
      image:
        'https://img.rocket.new/generatedImages/rocket_gen_img_18566e296-1764772664113.png',
      imageAlt: 'CRM dashboard',
      category: 'Guide',
      readTime: '15 min',
      date: 'Dec 28, 2025',
      tags: ['CRM', 'Integration'],
      link: '/resources/crm-integration',
      role: 'Sales Leader',
    },
  ];

  const popularResources: PopularResource[] = [
    {
      id: 'pop-1',
      title: 'The Complete Guide to Audio-First Sales Intelligence',
      readTime: '45 min',
      views: '12.5K',
      link: '/resources/audio-first-guide',
    },
    {
      id: 'pop-2',
      title: 'ROI Calculator: Measure Your Event Sales Impact',
      readTime: '10 min',
      views: '8.3K',
      link: '/resources/roi-calculator',
    },
  ];

  const filteredResources = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        resource.category === selectedCategory;

      const matchesRole =
        selectedRole === 'All' ||
        resource.role === selectedRole ||
        resource.role === 'All';

      const matchesSearch =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        );

      return matchesCategory && matchesRole && matchesSearch;
    });
  }, [resources, selectedCategory, selectedRole, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedResource resource={featuredResource} />

          <FilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categories={categories}
            roles={roles}
          />

          <CategorySection
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-3">
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Icon name="Search" size={32} />
                  <p className="mb-4">No resources found</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedRole('All');
                      setSearchQuery('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            <PopularResources resources={popularResources} />
          </div>

          <NewsletterSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
