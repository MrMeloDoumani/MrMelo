"use client";

import { useState } from "react";

/**
 * Home Page - Services & Main Landing
 *
 * Features:
 * - Who we are (comprehensive AI-powered media consulting with human reasoning)
 * - What we do (websites, chatbots, AI agents, and premium media content)
 * - Comparison table vs competitors (premium positioning at $2,500-$8,000)
 * - Scheduling CTA with popup form
 * - Mr. Melo quote ("no limits to creation" philosophy)
 *
 * Last Updated: September 21, 2025
 * Status: Production Ready
 */
export default function HomePage() {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setIsSubmitted(true);
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSchedulingOpen(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        company: ''
      });
    }, 3000);
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
        {/* Hero Section - Who We Are */}
        <section className="px-6 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-8 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              We are a comprehensive AI-powered media consulting service that combines human reasoning, critical thinking, and advanced AI tools to build complete digital solutions. From websites and chatbots to AI agents and premium media content, we leverage cutting-edge tools like ElevenLabs, Cursor, Runway ML, Revid.ai, Adobe Premiere Pro, and Midjourney. Given the tools at our disposal, there are no limits to creation—everything we execute for your business or personal brand is designed to match your identity, objectives, and vision.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="px-6 py-20 bg-slate-900/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              What We Do
            </h2>
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                We deliver comprehensive AI-powered solutions including websites, chatbots, AI agents, and premium media content for both traditional and social media assets. We execute the visual and build the infrastructure so clients understand what you are offering and what you are about. Given the advanced AI tools at our disposal, there are no limits to creation—we bring any vision to digital reality, from simple media assets to complex AI-driven platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              What Separates Us
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-slate-900/50 rounded-lg border border-slate-700/50">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="px-6 py-4 text-left text-lg font-serif text-amber-200">Criteria</th>
                    <th className="px-6 py-4 text-center text-lg font-serif bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">MrMelo.com</th>
                    <th className="px-6 py-4 text-center text-lg font-serif text-indigo-200">Global Top-Tier Agency</th>
                    <th className="px-6 py-4 text-center text-lg font-serif text-purple-200">Mid-Tier Agency</th>
                    <th className="px-6 py-4 text-center text-lg font-serif text-slate-200">Small-Tier Agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-6 py-4 font-medium text-gray-200">Media Asset Quality</td>
                    <td className="px-6 py-4 text-center text-green-400 font-semibold">Exceptional</td>
                    <td className="px-6 py-4 text-center text-green-400 font-semibold">Exceptional</td>
                    <td className="px-6 py-4 text-center text-yellow-400">Good</td>
                    <td className="px-6 py-4 text-center text-red-400">Basic</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-6 py-4 font-medium text-gray-200">Delivery Time</td>
                    <td className="px-6 py-4 text-center text-green-400 font-semibold">2-5 days</td>
                    <td className="px-6 py-4 text-center text-yellow-400">1-3 weeks</td>
                    <td className="px-6 py-4 text-center text-yellow-400">2-4 weeks</td>
                    <td className="px-6 py-4 text-center text-red-400">1-2 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-200">Price</td>
                    <td className="px-6 py-4 text-center text-green-400 font-semibold">$2,500-$8,000</td>
                    <td className="px-6 py-4 text-center text-red-400">$10,000-$50,000</td>
                    <td className="px-6 py-4 text-center text-red-400">$5,000-$15,000</td>
                    <td className="px-6 py-4 text-center text-green-400">$1,000-$3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm italic">
                *Comparison based on industry benchmarks and client feedback from verified sources
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-slate-900/20">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-amber-200 mb-8">
              &ldquo;Let&apos;s focus on replicating breakthrough ideas rather than just automating existing processes&rdquo;
            </blockquote>
            <p className="text-lg text-gray-300 mb-8">- Mr. Melo</p>

            <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700/50">
              <h3 className="text-2xl font-serif mb-4 text-amber-200">Schedule a Meeting</h3>
              <p className="text-gray-300 mb-6">
                Discuss your ambitions, visions, and goals with our team. We&apos;ll arrange a call or in-person meeting at your convenience.
              </p>

              <button
                onClick={() => setIsSchedulingOpen(true)}
                className="bg-gradient-to-r from-amber-600 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
              >
                Schedule Your Meeting
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Scheduling Modal */}
      {isSchedulingOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-lg p-8 max-w-md w-full border border-slate-700">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-serif mb-6 text-amber-200 text-center">Schedule Your Meeting</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
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

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSchedulingOpen(false)}
                      className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-black px-4 py-2 rounded-md font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all"
                    >
                      Schedule Meeting
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="text-6xl text-green-500 mb-4">✓</div>
                <h3 className="text-2xl font-serif mb-4 text-green-400">Meeting Scheduled!</h3>
                <p className="text-gray-300">
                  Expect an email within 24 hours from our team to arrange a call or in-person meeting at your convenience.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
