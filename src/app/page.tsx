"use client";

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
              We are a comprehensive AI-powered media consulting service that combines human reasoning, critical thinking, and advanced technology to build complete digital solutions. From websites and chatbots to AI agents and premium media content, we leverage cutting-edge tools and methodologies. Given the advanced capabilities at our disposal, there are no limits to creation—everything we execute for your business or personal brand is designed to match your identity, objectives, and vision.
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
                We deliver comprehensive digital solutions including websites, chatbots, AI agents, and premium media content for both traditional and social media assets. We execute the visual and build the infrastructure so clients understand what you are offering and what you are about. There are no limits to creation—we bring any vision to digital reality, from simple media assets to complex AI-driven platforms.
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@mrmelo.com?subject=Meeting Request&body=Hi, I'd like to schedule a meeting to discuss my project."
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 text-center"
                >
                  📧 Email Us
                </a>
                <a
                  href="https://wa.me/971521204324?text=Hi, I'd like to schedule a meeting to discuss my project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 text-center"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
