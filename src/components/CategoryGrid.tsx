'use client';

import { useState } from 'react';

interface CategoryGridProps {
  userType: 'b2b' | 'b2c';
  selectedCategories: string[];
  onCategorySelect: (categories: string[]) => void;
}

const CATEGORIES = {
  b2b: [
    {
      id: 'strategic-business',
      name: 'Strategic Business Intelligence',
      description: 'Market analysis, competitive positioning, growth strategies',
      icon: '🎯'
    },
    {
      id: 'economic-forecasting',
      name: 'Economic Forecasting & Trends',
      description: 'Global economic indicators, industry predictions, risk assessment',
      icon: '📊'
    },
    {
      id: 'leadership',
      name: 'Leadership & Organizational Development',
      description: 'Team management, culture building, executive decision-making',
      icon: '👥'
    },
    {
      id: 'technology',
      name: 'Technology & AI Integration',
      description: 'Digital transformation, AI adoption, tech ROI optimization',
      icon: '🤖'
    },
    {
      id: 'communication',
      name: 'Communication & Stakeholder Management',
      description: 'Internal/external communications, PR strategies, brand positioning',
      icon: '💬'
    },
    {
      id: 'financial-strategy',
      name: 'Financial Strategy & Investment',
      description: 'Capital allocation, investment planning, risk management',
      icon: '💰'
    },
    {
      id: 'innovation',
      name: 'Innovation & Product Development',
      description: 'R&D strategies, market validation, product lifecycle management',
      icon: '💡'
    },
    {
      id: 'sustainability',
      name: 'Sustainability & Corporate Responsibility',
      description: 'ESG integration, stakeholder capitalism, long-term value creation',
      icon: '🌱'
    }
  ],
  b2c: [
    {
      id: 'personal-finance',
      name: 'Personal Finance & Wealth Building',
      description: 'Budgeting, investing, debt management, retirement planning',
      icon: '💵'
    },
    {
      id: 'lifestyle-design',
      name: 'Lifestyle Design & Optimization',
      description: 'Daily habits, work-life balance, personal productivity',
      icon: '🎯'
    },
    {
      id: 'relationships',
      name: 'Relationships & Social Dynamics',
      description: 'Communication skills, emotional intelligence, family dynamics',
      icon: '❤️'
    },
    {
      id: 'health-wellness',
      name: 'Health & Wellness Intelligence',
      description: 'Holistic health approaches, mental wellness, longevity strategies',
      icon: '🏥'
    },
    {
      id: 'cultural-literacy',
      name: 'Cultural & Media Literacy',
      description: 'Film analysis, literature insights, media consumption strategies',
      icon: '🎬'
    },
    {
      id: 'technology-adoption',
      name: 'Technology Adoption & Digital Wellness',
      description: 'Smart device integration, online privacy, digital detox',
      icon: '📱'
    },
    {
      id: 'personal-development',
      name: 'Personal Development & Growth',
      description: 'Goal setting, habit formation, continuous learning strategies',
      icon: '📈'
    },
    {
      id: 'community-impact',
      name: 'Community & Social Impact',
      description: 'Local engagement, volunteering, social entrepreneurship',
      icon: '🤝'
    }
  ]
};

export default function CategoryGrid({ userType, selectedCategories, onCategorySelect }: CategoryGridProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const maxSelections = 4;
  
  const categories = CATEGORIES[userType];
  
  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategorySelect(selectedCategories.filter(id => id !== categoryId));
    } else if (selectedCategories.length < maxSelections) {
      onCategorySelect([...selectedCategories, categoryId]);
      
      // Track selection with Vercel Analytics
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).va) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).va as (eventName: string, data: any) => void)('event', {
          name: 'category_selected',
          properties: { categoryId, userType }
        });
      }
    }
  };
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category.id);
        const canSelect = !isSelected && selectedCategories.length >= maxSelections;
        
        return (
          <div
            key={category.id}
            className={`relative bg-white rounded-xl shadow-sm border-2 transition-all hover:shadow-md ${
              isSelected ? 'border-blue-500 bg-blue-50' : 
              canSelect ? 'border-gray-200 opacity-50 cursor-not-allowed' : 
              'border-gray-200 hover:border-blue-300 cursor-pointer'
            }`}
            onClick={() => !canSelect && handleCategoryToggle(category.id)}
          >
            <div className="p-6">
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedCategory(expandedCategory === category.id ? null : category.id);
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {expandedCategory === category.id ? 'Hide Examples' : 'View Examples'}
                </button>
                
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                }`}>
                  {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
              </div>
              
              {expandedCategory === category.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Sample Questions:</h4>
                  <ul className="space-y-2">
                    {getCategoryPrompts(category.id).map((prompt, index) => (
                      <li key={index} className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                        &ldquo;{prompt}&rdquo;
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getCategoryPrompts(categoryId: string): string[] {
  const prompts: Record<string, string[]> = {
    'strategic-business': [
      'How can I identify emerging market opportunities before competitors?',
      'What are key indicators for business strategy pivots?',
      'How to create competitive analysis for untapped markets?'
    ],
    'economic-forecasting': [
      'What economic indicators should I monitor for industry downturns?',
      'How are global supply chains affecting my business sector?',
      'What investment strategies work in uncertain economies?'
    ],
    'leadership': [
      'How to build high-performance culture in remote environments?',
      'What strategies retain top talent during uncertainty?',
      'How to communicate organizational changes effectively?'
    ]
  };
  
  return prompts[categoryId] || [
    'What are the key challenges in this area?',
    'How can I improve my approach to this topic?',
    'What are the latest trends and developments?'
  ];
}
