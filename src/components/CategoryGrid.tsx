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
      id: 'socio-economics',
      name: 'Socio-Economics',
      description: 'Economic trends, social dynamics, market analysis, wealth distribution',
      icon: '📊'
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
      id: 'ai-understanding',
      name: 'AI Understanding',
      description: 'Machine learning concepts, AI ethics, automation trends, technology integration',
      icon: '🤖'
    },
    {
      id: 'film-cinema',
      name: 'Film & Cinema Appreciation',
      description: 'Movie recommendations, film analysis, cinema culture insights',
      icon: '🎥'
    },
    {
      id: 'tv-series',
      name: 'TV Series & Streaming Content',
      description: 'Series recommendations, binge-watching strategies, entertainment curation',
      icon: '📺'
    },
    {
      id: 'communication-strategies',
      name: 'Communication Strategies',
      description: 'Presentation skills, negotiation tactics, stakeholder management, messaging frameworks',
      icon: '💬'
    },
    {
      id: 'literature-books',
      name: 'Literature & Book Discovery',
      description: 'Reading recommendations, literary analysis, book club discussions',
      icon: '📚'
    },
    {
      id: 'music-audio',
      name: 'Music & Audio Entertainment',
      description: 'Music discovery, playlist curation, concert recommendations',
      icon: '🎵'
    },
    {
      id: 'daily-life',
      name: 'Daily Life & Living Well',
      description: 'Home organization, meal planning, household management, life hacks',
      icon: '🏠'
    },
    {
      id: 'media-production',
      name: 'Media Production',
      description: 'Video editing, content creation, multimedia storytelling, production techniques',
      icon: '🎬'
    },
    {
      id: 'creative-academic-writing',
      name: 'Creative & Academic Writing',
      description: 'Essay composition, research writing, creative storytelling, academic publishing',
      icon: '✍️'
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
    ],
    'technology': [
      'Which emerging technologies should I invest in for competitive advantage?',
      'How can I implement AI automation in my current workflow?',
      'What cybersecurity measures are essential for modern businesses?'
    ],
    'communication': [
      'How can I improve stakeholder communication during crises?',
      'What messaging strategies work best for different audiences?',
      'How to build trust through transparent corporate communications?'
    ],
    'financial-strategy': [
      'How should I allocate capital between growth and stability?',
      'What financial metrics matter most for long-term success?',
      'How to optimize cash flow during economic uncertainty?'
    ],
    'innovation': [
      'How can I foster a culture of innovation in my organization?',
      'What frameworks work best for evaluating new business ideas?',
      'How to balance innovation with operational stability?'
    ],
    'sustainability': [
      'How can I integrate ESG principles into my business strategy?',
      'What sustainable practices deliver both environmental and financial benefits?',
      'How to measure and report on sustainability initiatives effectively?'
    ],
    'personal-finance': [
      'How can I build an emergency fund while managing debt?',
      'What investment strategies work for different risk tolerances?',
      'How to create a comprehensive retirement planning strategy?'
    ],
    'lifestyle-design': [
      'How can I design a work-life balance that actually works?',
      'What daily habits compound into significant life improvements?',
      'How to create sustainable routines for long-term fulfillment?'
    ],
    'relationships': [
      'How can I improve communication in professional relationships?',
      'What strategies help maintain work friendships during transitions?',
      'How to build authentic connections in networking environments?'
    ],
    'socio-economics': [
      'How do economic policies affect different socioeconomic groups?',
      'What trends are reshaping wealth distribution globally?',
      'How can businesses address income inequality in their communities?'
    ],
    'cultural-literacy': [
      'How can I better understand diverse cultural perspectives in business?',
      'What media literacy skills are essential for modern professionals?',
      'How to navigate cultural differences in international markets?'
    ],
    'technology-adoption': [
      'Which digital tools will revolutionize my industry in the next 5 years?',
      'How can I maintain digital wellness while staying technologically competitive?',
      'What privacy considerations matter most when adopting new technologies?'
    ],
    'personal-development': [
      'How can I accelerate my learning curve in a new professional domain?',
      'What continuous improvement frameworks deliver measurable results?',
      'How to build resilience and adaptability in changing environments?'
    ],
    'ai-understanding': [
      'How can I leverage AI to enhance rather than replace human capabilities?',
      'What ethical considerations matter most when implementing AI solutions?',
      'How to prepare my organization for AI-driven industry transformation?'
    ],
    'film-cinema': [
      'Which documentaries offer unique insights into business innovation?',
      'How can cinematic storytelling techniques improve business presentations?',
      'What films best illustrate leadership and organizational dynamics?'
    ],
    'tv-series': [
      'Which series demonstrate effective team dynamics and leadership?',
      'How can narrative arcs from television inform business strategy?',
      'What shows illustrate successful organizational change management?'
    ],
    'communication-strategies': [
      'How can I craft compelling narratives for stakeholder presentations?',
      'What negotiation frameworks work best in high-stakes business deals?',
      'How to communicate complex technical concepts to non-technical audiences?'
    ],
    'literature-books': [
      'Which business biographies offer valuable leadership lessons?',
      'How can classic literature inform modern management practices?',
      'What books provide frameworks for strategic decision-making?'
    ],
    'music-audio': [
      'How can audio content strategies enhance brand storytelling?',
      'What music psychology principles apply to workplace productivity?',
      'How to create compelling audio experiences for business communications?'
    ],
    'daily-life': [
      'How can I optimize my daily routines for maximum professional impact?',
      'What life hacks improve work-from-home productivity and well-being?',
      'How to create sustainable habits that support long-term career growth?'
    ],
    'media-production': [
      'How can I improve video content quality for professional presentations?',
      'What multimedia storytelling techniques engage audiences most effectively?',
      'How to optimize content production workflows for efficiency and quality?'
    ],
    'creative-academic-writing': [
      'How can I structure complex ideas for clear academic and professional writing?',
      'What research methodologies provide the most actionable business insights?',
      'How to craft compelling narratives for business proposals and reports?'
    ]
  };

  return prompts[categoryId] || [
    'What are the key challenges in this area?',
    'How can I improve my approach to this topic?',
    'What are the latest trends and developments?'
  ];
}
