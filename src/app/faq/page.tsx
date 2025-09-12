'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Human Knowledge Model
  {
    question: "What is the Human Knowledge Model (HKM)?",
    answer: "The Human Knowledge Model is our proprietary AI system that combines advanced machine learning with human insight to provide personalized guidance. It learns from your interactions, adapts to your needs, and delivers strategic recommendations across business, personal development, and creative domains.",
    category: "Human Knowledge Model"
  },
  {
    question: "How does the HKM adapt to my needs?",
    answer: "Our HKM uses advanced machine learning algorithms to analyze your questions, preferences, and interaction patterns. Over time, it becomes more attuned to your communication style, knowledge level, and specific goals, providing increasingly relevant and personalized insights.",
    category: "Human Knowledge Model"
  },
  {
    question: "Is the HKM available 24/7?",
    answer: "Yes! Our HKM operates continuously, providing instant responses to your questions. While human review may take longer depending on your tier, the AI component is always available for immediate guidance and support.",
    category: "Human Knowledge Model"
  },

  // Pricing & Tiers
  {
    question: "What's included in each access tier?",
    answer: "All tiers include access to our core Human Knowledge Model. The Deep Diver tier ($35/month) provides priority responses and extended conversations. The Archive Master tier ($65/month) includes premium features, direct human consultation, and exclusive content access. Custom tiers are available for enterprise clients.",
    category: "Pricing & Tiers"
  },
  {
    question: "Can I change my tier at any time?",
    answer: "Yes, you can upgrade or downgrade your tier at any time. Changes take effect immediately, and we'll prorate any billing adjustments. Downgrades will apply at the end of your current billing cycle.",
    category: "Pricing & Tiers"
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with the service, contact our support team within 30 days of your first payment for a full refund.",
    category: "Pricing & Tiers"
  },

  // Signup & Access
  {
    question: "How do I get started?",
    answer: "Getting started is simple: 1) Choose your knowledge domains, 2) Select an access tier, 3) Complete the registration form, 4) Receive your personalized access code, and 5) Start asking questions immediately.",
    category: "Signup & Access"
  },
  {
    question: "What information do I need to sign up?",
    answer: "You'll need to provide your name, email address, and select whether you're joining as a business professional or individual user. We also ask about your primary areas of interest to personalize your experience.",
    category: "Signup & Access"
  },
  {
    question: "How do I access the confidential archive?",
    answer: "After signup, you'll receive a personalized access code. Use this code to access exclusive content in our confidential archive, which includes premium insights, case studies, and specialized knowledge not available elsewhere.",
    category: "Signup & Access"
  },

  // Privacy & Security
  {
    question: "How do you protect my privacy?",
    answer: "We use enterprise-grade encryption, secure data centers, and strict privacy protocols. Your conversations are completely confidential and are never shared with third parties. We comply with GDPR and other privacy regulations.",
    category: "Privacy & Security"
  },
  {
    question: "Can I delete my data?",
    answer: "Yes, you have full control over your data. You can request data deletion at any time through your account settings or by contacting our support team. We'll permanently remove all your personal information and conversation history.",
    category: "Privacy & Security"
  },

  // Technical Questions
  {
    question: "What devices can I use to access the service?",
    answer: "You can access our service from any device with a modern web browser, including desktop computers, laptops, tablets, and smartphones. We recommend using Chrome, Firefox, Safari, or Edge for the best experience.",
    category: "Technical"
  },
  {
    question: "Is there a mobile app?",
    answer: "Currently, our service is web-based and works perfectly on mobile devices through your browser. We're considering a mobile app for future development based on user feedback.",
    category: "Technical"
  },

  // Business & Enterprise
  {
    question: "Do you offer enterprise solutions?",
    answer: "Yes, we provide custom enterprise solutions with dedicated support, custom integrations, and team management features. Contact our sales team to discuss your organization's specific needs.",
    category: "Business & Enterprise"
  },
  {
    question: "Can multiple team members use one account?",
    answer: "For team access, we recommend our enterprise plans which include multi-user accounts with individual logins, usage tracking, and team management features. Standard accounts are designed for individual use.",
    category: "Business & Enterprise"
  }
];

const categories = [
  "All",
  "Human Knowledge Model",
  "Pricing & Tiers",
  "Signup & Access",
  "Privacy & Security",
  "Technical",
  "Business & Enterprise"
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = selectedCategory === "All"
    ? faqData
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Everything you need to know about the Human Knowledge Model, our services, and how to get started.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {filteredFAQs.map((item, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm bg-slate-700 text-yellow-400 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {item.question}
                      </h3>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transform transition-transform ${
                        expandedItems.has(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedItems.has(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-serif mb-4 text-white">Still Have Questions?</h2>
              <p className="text-gray-300 mb-6">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-ripple rounded-full bg-yellow-400 text-black px-6 py-3 font-semibold hover:opacity-90 transition-all"
                >
                  Contact Support
                </Link>
                <Link
                  href="/hkm"
                  className="btn-ripple rounded-full border border-slate-600 text-white px-6 py-3 font-semibold hover:bg-slate-800 transition-all"
                >
                  Explore HKM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
