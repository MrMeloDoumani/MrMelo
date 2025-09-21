/**
 * About Page - Literary Character Revelation
 *
 * Features:
 * - Radical transparency approach to character testimonials
 * - Dr. Elias Hartman AI analysis testimonial
 * - 6 literary quotes from Eliot, Kundera, Orwell, Huxley, Dostoevsky, Shakespeare
 * - Testimonial submission form for ecosystem contributions
 * - Premium black design with ethos-reflecting colors
 *
 * Last Updated: September 13, 2025
 * Status: Production Live
 */
"use client";

import { useState } from "react";

/**
 * About Page - Mr. Melo's Philosophy & Character
 *
 * Features:
 * - Mr. Melo's beliefs about business and relationships
 * - Content of Character link and YouTube portfolio
 * - Customer support differentiator
 * - Who is Mr. Melo (bio)
 * - Ecosystem testimonial submission form
 * - Automatic display of submitted testimonials
 *
 * Last Updated: September 21, 2025
 * Status: Production Ready
 */
export default function AboutPage() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      firstName: "Sarah",
      profession: "CEO",
      company: "TechStart Inc.",
      comment: "Mr. Melo's approach to business transcends traditional consulting. His emphasis on character-first relationships has transformed how we build partnerships. The depth of insight he provides isn't just strategic—it's fundamentally human."
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    company: '',
    relationship: '',
    comment: ''
  });

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTestimonial = {
      id: testimonials.length + 1,
      firstName: formData.firstName,
      profession: formData.profession,
      company: formData.company,
      comment: formData.comment
    };
    setTestimonials([...testimonials, newTestimonial]);
    setShowForm(false);
    setFormData({
      firstName: '',
      lastName: '',
      profession: '',
      company: '',
      relationship: '',
      comment: ''
    });
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
              About Mr. Melo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              This page isn&apos;t about the site—you already know what we offer in terms of media consulting and our Human Knowledge Model, which provides human interaction as opposed to one with a machine.
            </p>
            <p className="text-lg text-gray-300">
              This section is about what Mr. Melo believes in as it pertains to business and business relationships.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-6 py-20 bg-slate-900/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              Business Philosophy
            </h2>

            <div className="space-y-8">
              {/* Content of Character */}
              <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700/50">
                <h3 className="text-2xl font-serif mb-4 text-amber-200">Content of Character</h3>
                <p className="text-gray-300 mb-4">
                  Mr. Melo only wishes to work with companies and people who exhibit a strong content of character. This isn&apos;t just about reputation—it&apos;s about the fundamental values that drive decision-making and relationships.
                </p>
                <a
                  href="/content-of-character"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Learn more about Content of Character →
                </a>
              </div>

              {/* YouTube Portfolio */}
              <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700/50">
                <h3 className="text-2xl font-serif mb-4 text-amber-200">Creative Portfolio</h3>
                <p className="text-gray-300 mb-4">
                  Visit Mr. Melo&apos;s YouTube channel to see his video work and creative productions that showcase his unique approach to storytelling and brand communication.
                </p>
                <a
                  href="https://youtube.com/@mrmelo.comPortfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                >
                  View YouTube Portfolio →
                </a>
              </div>

              {/* Customer Support */}
              <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700/50">
                <h3 className="text-2xl font-serif mb-4 text-amber-200">Customer Support as Differentiator</h3>
                <p className="text-gray-300 mb-4">
                  Mr. Melo believes that customer support is the differentiator. He has hired experts to train the staff on how to communicate with the concerns of the clients should they face an issue. This involves listening rather than directing the conversation, providing solutions which are client-first, creating mutual understandings so that the client and mrmelo.com can enhance the communication and the overall experience of the service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who is Mr. Melo */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              Who is Mr. Melo
            </h2>

            <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700/50">
              <p className="text-gray-300 leading-relaxed text-lg">
                Melo blends sharp analysis with genuine creativity. He doesn&apos;t just study the &ldquo;loneliness economy&rdquo;&mdash;he lives the fight against it. By treating mortality as a daily practice, he adds depth to his strategic thinking. This intensity also brings a paradox: he holds very high standards, sometimes steps back to reflect, and won&apos;t water down his vision for easy commercial gain. Those traits aren&apos;t weaknesses; they&apos;re the natural side-effects of a leader who refuses to simplify his ideas for quick consumption.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                In short, Melo is more than a thinker&mdash;he&apos;s a &ldquo;philosophical architect&rdquo; who builds connections between today&apos;s fragmented reality and a future of authentic engagement, urging us all to ask whether we truly live our values or merely act them out.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 py-20 bg-slate-900/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              Character Testimonials
            </h2>
            <p className="text-center text-gray-300 mb-12">
              Clients, peers, colleagues, friends and family share their thoughts on Mr. Melo&apos;s character. Mr. Melo will not alter any sentiments.
            </p>

            {/* Display Testimonials */}
            <div className="space-y-6 mb-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                  <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-4">
                    &ldquo;{testimonial.comment}&rdquo;
                  </blockquote>
                  <div className="text-amber-200 font-medium">
                    — {testimonial.firstName}, {testimonial.profession} at {testimonial.company}
                  </div>
                </div>
              ))}
            </div>

            {/* Add Testimonial Button */}
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-amber-600 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
              >
                Share Your Thoughts on Mr. Melo&apos;s Character
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonial Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-lg p-8 max-w-lg w-full border border-slate-700 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-serif mb-6 text-amber-200 text-center">Share Your Thoughts</h3>
            <form onSubmit={handleTestimonialSubmit} className="space-y-4">
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Profession</label>
                <input
                  type="text"
                  required
                  value={formData.profession}
                  onChange={(e) => setFormData({...formData, profession: e.target.value})}
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

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Relationship to Mr. Melo</label>
                <select
                  required
                  value={formData.relationship}
                  onChange={(e) => setFormData({...formData, relationship: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="">Select relationship</option>
                  <option value="client">Client</option>
                  <option value="colleague">Colleague</option>
                  <option value="peer">Peer</option>
                  <option value="friend">Friend</option>
                  <option value="family">Family</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Thoughts on Mr. Melo&apos;s Character</label>
                <textarea
                  required
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:border-amber-500 focus:outline-none resize-none"
                  placeholder="Share your authentic thoughts about Mr. Melo&apos;s character..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-black px-4 py-2 rounded-md font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all"
                >
                  Share Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
