export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 40% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-900/30 border border-purple-500/30 px-4 py-2 mb-6">
              <span className="text-purple-300 text-sm font-medium">Content Mastery</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-purple-200 via-amber-200 to-red-200 bg-clip-text text-transparent">
              Packages That Fight for Your Excellence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your path to intellectual depth and cultural mastery. From foundational content creation to executive-level strategy,
              we craft narratives that nourish thinkers, inspire masters, and empower fighters of character.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {/* Foundation Tier */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Foundation
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-purple-200 mb-2">$2,500</div>
                <div className="text-purple-300/70">One-time investment</div>
              </div>

              <h3 className="text-xl font-semibold text-purple-200 mb-4 text-center">Launch Your Intellectual Journey</h3>
              <p className="text-gray-300 mb-6 text-center">
                Perfect for thinkers ready to establish their digital presence with character and depth.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">One premium vertical video with cultural depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Landing page that reflects your character</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Five social posts with meaningful captions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Basic analytics foundation</span>
                </li>
              </ul>

              <a
                href="mailto:info@mrmelo.com?subject=Foundation Package Inquiry"
                className="w-full block text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your Journey
              </a>
            </div>

            {/* Professional Tier */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border border-amber-500/30 p-8 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Professional
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded text-xs font-medium">
                  Most Popular
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-amber-200 mb-2">$8,000</div>
                <div className="text-amber-300/70">Monthly retainer</div>
              </div>

              <h3 className="text-xl font-semibold text-amber-200 mb-4 text-center">Cultivate Your Mastery</h3>
              <p className="text-gray-300 mb-6 text-center">
                For professionals committed to consistent excellence and intellectual growth.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Eight vertical videos monthly with cultural narratives</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Two compelling scripts + one case study</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Quarterly professional photo content sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Automation support for operational excellence</span>
                </li>
              </ul>

              <a
                href="mailto:info@mrmelo.com?subject=Professional Package Inquiry"
                className="w-full block text-center bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
              >
                Claim Your Mastery
              </a>
            </div>

            {/* Executive Tier */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-red-900/20 to-rose-900/20 border border-red-500/30 p-8 hover:border-red-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Executive
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-red-200 mb-2">$15,000+</div>
                <div className="text-red-300/70">Custom enterprise solution</div>
              </div>

              <h3 className="text-xl font-semibold text-red-200 mb-4 text-center">Lead with Unmatched Excellence</h3>
              <p className="text-gray-300 mb-6 text-center">
                For visionaries demanding the highest standards of intellectual and cultural leadership.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Full campaign concepting with brand voice mastery</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Cinematic founder film production</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Custom AI support agent tailored to your vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Complete analytics maturity transformation</span>
                </li>
              </ul>

              <a
                href="mailto:info@mrmelo.com?subject=Executive Package Inquiry"
                className="w-full block text-center bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-rose-500 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Lead with Excellence
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-900/30 border border-amber-500/30 px-4 py-2 mb-6">
              <span className="text-amber-300 text-sm font-medium">Champion Your Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-amber-100 via-gold-200 to-amber-300 bg-clip-text text-transparent">
              Ready to Fight for Your Excellence?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Every champion starts with a choice. Choose the package that matches your commitment to intellectual depth,
              cultural excellence, and the relentless pursuit of mastery. Your journey begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@mrmelo.com?subject=Custom Package Consultation"
                className="group relative btn-ripple rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 text-lg font-semibold hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
              >
                Discuss Custom Solutions
              </a>
              <a
                href="/hkm"
                className="group relative btn-ripple rounded-full border border-amber-500/50 text-amber-300 px-8 py-4 text-lg font-semibold hover:bg-amber-500/10 transition-all duration-300"
              >
                Explore Human Knowledge Model
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


