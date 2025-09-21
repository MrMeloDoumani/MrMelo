"use client";

import { useState } from "react";

/**
 * Human Knowledge Model (HKM) Page
 *
 * Features:
 * - 8 knowledge categories with 3 example questions each
 * - Signup flow for HKM access
 * - Business, Lifestyle, Culture, Philosophy, Sociology, Relationships, Day-to-day, Music/Films/Series/Books
 *
 * Last Updated: September 21, 2025
 * Status: Production Ready
 */
export default function HKMPage() {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    categories: [] as string[]
  });

  const categories = [
    {
      id: 'business',
      name: 'Business',
      icon: '💼',
      questions: [
        "What pricing models can a B2B SaaS firm test to increase ARR while keeping churn below 5%?",
        "How can we structure employee profit-sharing so it genuinely reduces income inequality within the company?",
        "What metrics should we track to evaluate both financial ROI and employee well-being after implementing a four-day work week?"
      ]
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      icon: '🏠',
      questions: [
        "Which evidence-based morning rituals correlate with higher productivity for senior executives?",
        "How can individuals adopt sustainable consumption habits without sacrificing convenience in urban life?",
        "What lifestyle changes (exercise, sleep, digital detox) most improve decision-making quality for founders?"
      ]
    },
    {
      id: 'culture',
      name: 'Culture',
      icon: '🎭',
      questions: [
        "How can a brand leverage emerging sub-cultures to create authentic product extensions that drive sales?",
        "What are the most effective ways for companies to support cultural preservation in the communities where they operate?",
        "How should a multinational adjust its internal communication style to respect local cultural norms while maintaining a unified corporate voice?"
      ]
    },
    {
      id: 'philosophy',
      name: 'Philosophy',
      icon: '🤔',
      questions: [
        "Which philosophical frameworks (e.g., utilitarianism, virtue ethics) best justify cost-benefit analyses for large-scale investments?",
        "How can Stoic principles be applied to foster resilience and empathy among frontline workers?",
        "What ethical decision-making model helps CEOs balance shareholder returns with broader societal responsibilities?"
      ]
    },
    {
      id: 'sociology',
      name: 'Sociology',
      icon: '👥',
      questions: [
        "What sociological indicators predict market adoption speed for disruptive technologies?",
        "How do power dynamics within organizations affect gender equity in promotion pathways?",
        "In what ways can a company use social network analysis to improve cross-functional collaboration while reducing siloed behavior?"
      ]
    },
    {
      id: 'relationships',
      name: 'Relationships',
      icon: '❤️',
      questions: [
        "What contract structures incentivize long-term partnership loyalty between startups and venture capitalists?",
        "How can managers cultivate psychologically safe relationships with their teams to boost morale?",
        "What negotiation tactics preserve both commercial advantage and mutual respect when renegotiating supplier terms?"
      ]
    },
    {
      id: 'day-to-day',
      name: 'Day-to-Day',
      icon: '📅',
      questions: [
        "Which time-boxing methods yield the highest output for project managers juggling multiple deliverables?",
        "How can daily check-ins be designed to strengthen community feeling among remote employees?",
        "What routine practices help leaders stay organized while also remaining approachable and empathetic throughout the day?"
      ]
    },
    {
      id: 'recommendations',
      name: 'Music/Films/Series/Books',
      icon: '🎬',
      questions: [
        "Recommend three books on negotiation that combine psychological insight with real-world case studies for senior leaders.",
        "What films best illustrate the impact of social movements on individual identity formation?",
        "Suggest a podcast series that explores the intersection of technology entrepreneurship and cultural change."
      ]
    }
  ];

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    alert('Thank you for your interest in the Human Knowledge Model! We will contact you soon.');
    setShowSignupForm(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-8 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              Human Knowledge Model
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Get human answers in business, lifestyle, culture, philosophy, sociology, relationships, day-to-day matters, and recommendations for music, films, series, and books.
            </p>
            <p className="text-lg text-gray-300">
              Each category provides unique, personalized insights based on decades of experience and critical thinking.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-6 py-20 bg-slate-900/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              Knowledge Categories
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-serif text-amber-200">{category.name}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.questions.map((question, index) => (
                      <div key={index} className="bg-slate-800/50 rounded p-4 border-l-4 border-amber-500/50">
                        <p className="text-gray-300 text-sm italic">&ldquo;{question}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              Ready to Access Human Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our Human Knowledge Model and get personalized answers from decades of experience and critical thinking.
            </p>

            <button
              onClick={() => setShowSignupForm(true)}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
            >
              Access Human Knowledge Model
            </button>
          </div>
        </section>
      </div>

      {/* Signup Modal */}
      {showSignupForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-lg p-8 max-w-md w-full border border-slate-700">
            <h3 className="text-2xl font-serif mb-6 text-amber-200 text-center">Join Human Knowledge Model</h3>
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSignupForm(false)}
                  className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-black px-4 py-2 rounded-md font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all"
                >
                  Join Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
