'use client';

import { useState } from 'react';

interface PricingTiersProps {
  selectedTier?: string;
  onTierSelect?: (tier: string) => void;
}

export default function PricingTiers({ selectedTier, onTierSelect }: PricingTiersProps) {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const tiers = [
    {
      id: 'foundation',
      name: 'Foundation',
      price: 49,
      originalPrice: 69,
      description: 'Perfect for exploring the HKM',
      features: [
        '4 knowledge domains',
        '48-72 hour response time',
        '5 questions per month',
        'Basic email support'
      ],
      popular: false,
      color: 'blue'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 99,
      originalPrice: 129,
      description: 'Most popular choice',
      features: [
        '8 knowledge domains',
        '24-48 hour response time',
        '15 questions per month',
        'Priority email support',
        'Monthly consultation call'
      ],
      popular: true,
      color: 'emerald'
    },
    {
      id: 'executive',
      name: 'Executive',
      price: 199,
      originalPrice: 249,
      description: 'Complete HKM mastery',
      features: [
        'All 16 knowledge domains',
        '12-24 hour response time',
        'Unlimited questions',
        'Monthly strategy sessions',
        'Direct expert networking',
        'Custom research requests'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const handleTierSelect = (tierId: string) => {
    if (onTierSelect) {
      onTierSelect(tierId);
      
      // Track tier selection with Vercel Analytics
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).va) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).va as (eventName: string, data: any) => void)('event', {
          name: 'pricing_tier_selected',
          properties: { tierId }
        });
      }
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {tiers.map((tier) => {
        const isSelected = selectedTier === tier.id;
        const isHovered = hoveredTier === tier.id;
        const isPopular = tier.popular;

        return (
          <div
            key={tier.id}
            className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              isSelected 
                ? 'border-blue-500 shadow-blue-200' 
                : isHovered
                  ? 'border-gray-300 shadow-gray-200'
                  : 'border-gray-200'
            } ${isPopular ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}`}
            onMouseEnter={() => setHoveredTier(tier.id)}
            onMouseLeave={() => setHoveredTier(null)}
          >
            {/* Popular Badge */}
            {isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              </div>
            )}

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tier.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <div className="text-sm text-gray-500 line-through">
                  Originally ${tier.originalPrice}
                </div>
                <div className="text-sm text-green-600 font-medium mt-1">
                  Save ${(tier.originalPrice - tier.price)}/month
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg 
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        isSelected ? 'text-blue-500' : 'text-green-500'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleTierSelect(tier.id)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {isSelected ? (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Selected
                  </div>
                ) : (
                  `Choose ${tier.name}`
                )}
              </button>

              {/* Additional Info */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Cancel anytime • No setup fees • 30-day guarantee
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

