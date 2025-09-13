export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(120, 53, 15, 0.05) 0%, transparent 40%)`
        }} />
      </div>
      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-indigo-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 text-sm font-medium mr-2">🧠</span>
            <span className="text-purple-400 text-sm font-medium">Wisdom & Mastery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Cultivating depth of character through masterful content and profound insights. From strategic storytelling to personalized wisdom,
            we nourish the thinkers, masters, and seekers of truth in every domain.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 border border-amber-500/30 rounded-full px-4 py-2">
              <span className="text-amber-400">Content Mastery</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-600/20 border border-purple-500/30 rounded-full px-4 py-2">
              <span className="text-purple-400">Intellectual Depth</span>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-rose-600/20 border border-red-500/30 rounded-full px-4 py-2">
              <span className="text-red-400">Cultural Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Services */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-amber-500/5 rounded-3xl" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-yellow-600/20 border border-amber-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-400 text-sm font-medium mr-2">🎨</span>
              <span className="text-amber-400 text-sm font-medium">Content Mastery</span>
            </div>
            <h2 className="text-4xl font-serif mb-6 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">Content Creation & Strategy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Crafting masterful narratives and strategic content that elevates discourse, nourishes understanding, and champions intellectual excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-amber-100 transition-colors">Content Strategy</h3>
              <p className="text-gray-300 mb-4">
                Architecting masterful narratives and strategic content frameworks that elevate discourse and cultivate intellectual depth.
              </p>
              <ul className="text-sm text-amber-300/80 space-y-1">
                <li>• Philosophical content alignment</li>
                <li>• Intellectual narrative arcs</li>
                <li>• Cultural discourse frameworks</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💡</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-100 transition-colors">Concept Development</h3>
              <p className="text-gray-300 mb-4">
                Crafting profound concepts and intellectual frameworks that challenge conventions and inspire deeper thinking.
              </p>
              <ul className="text-sm text-purple-300/80 space-y-1">
                <li>• Philosophical concept design</li>
                <li>• Intellectual provocation</li>
                <li>• Cultural paradigm shifts</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-100 transition-colors">AI-Assisted Production</h3>
              <p className="text-gray-300 mb-4">
                Leveraging cutting-edge AI to amplify human creativity while maintaining intellectual integrity and cultural depth.
              </p>
              <ul className="text-sm text-red-300/80 space-y-1">
                <li>• AI-enhanced creative processes</li>
                <li>• Intellectual automation</li>
                <li>• Cultured AI integration</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-100 transition-colors">Analytics & Methods</h3>
              <p className="text-gray-300 mb-4">
                Nourishing growth through rigorous intellectual analysis and evidence-based methodologies that foster mastery.
              </p>
              <ul className="text-sm text-green-300/80 space-y-1">
                <li>• Intellectual growth metrics</li>
                <li>• Mastery development frameworks</li>
                <li>• Evidence-based cultivation</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📡</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-100 transition-colors">Communication Strategy</h3>
              <p className="text-gray-300 mb-4">
                Championing sophisticated communication that bridges intellectual rigor with cultural sensitivity and human connection.
              </p>
              <ul className="text-sm text-orange-300/80 space-y-1">
                <li>• Intellectual discourse facilitation</li>
                <li>• Cultural communication bridges</li>
                <li>• Human-centered messaging</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-indigo-100 transition-colors">Quality Assurance</h3>
              <p className="text-gray-300 mb-4">
                Ensuring intellectual excellence and cultural authenticity through rigorous evaluation and masterful refinement processes.
              </p>
              <ul className="text-sm text-indigo-300/80 space-y-1">
                <li>• Intellectual integrity checks</li>
                <li>• Cultural authenticity validation</li>
                <li>• Excellence refinement processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Human Knowledge Model Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-indigo-400 text-sm font-medium mr-2">🧠</span>
              <span className="text-indigo-400 text-sm font-medium">Intellectual Mastery</span>
            </div>
            <h2 className="text-4xl font-serif mb-6 bg-gradient-to-r from-indigo-100 via-purple-200 to-indigo-300 bg-clip-text text-transparent">Human Knowledge Model</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Championing the thinkers, nourishers, and masters of every domain. Our Human Knowledge Model cultivates intellectual depth,
              fosters cultural excellence, and empowers those who fight for wisdom and understanding in an increasingly complex world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Human Reasoning</h3>
              <p className="text-sm text-gray-300">
                Every response reflects genuine human insight, critical thinking, and decades of real-world experience.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2 text-white">AI-Accelerated Delivery</h3>
              <p className="text-sm text-gray-300">
                AI tools enhance speed and efficiency while preserving depth and authenticity of human reasoning.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Personalized Strategy</h3>
              <p className="text-sm text-gray-300">
                Strategic guidance tailored to your unique situation, drawing from proven methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Privacy First</h3>
              <p className="text-sm text-gray-300">
                Enterprise-grade security ensures conversations remain completely confidential.
              </p>
            </div>
          </div>

          {/* Knowledge Domains Preview */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-serif mb-6 text-center text-white">16 Knowledge Domains</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">🎯</div>
                <div className="text-white font-medium">Strategic Business</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">📊</div>
                <div className="text-white font-medium">Economic Forecasting</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">👥</div>
                <div className="text-white font-medium">Leadership</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">🤖</div>
                <div className="text-white font-medium">Technology & AI</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">💵</div>
                <div className="text-white font-medium">Personal Finance</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">❤️</div>
                <div className="text-white font-medium">Relationships</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">🎬</div>
                <div className="text-white font-medium">Film & Cinema</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">📚</div>
                <div className="text-white font-medium">Literature & Books</div>
              </div>
              {/* Show "and 8 more..." for brevity */}
              <div className="bg-slate-700/30 rounded-lg p-3 text-center col-span-2 md:col-span-4">
                <div className="text-gray-400">And 8 more specialized domains...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-gold-500/10 to-amber-500/10 rounded-3xl" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-gold-600/20 border border-amber-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-amber-400 text-sm font-medium mr-2">⚔️</span>
            <span className="text-amber-400 text-sm font-medium">Champion Your Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-amber-100 via-gold-200 to-amber-300 bg-clip-text text-transparent">Ready to Fight for Excellence?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the champions of intellectual depth and cultural mastery. Whether through masterful content creation or personalized AI wisdom,
            we're here to nourish your pursuit of excellence and empower your journey toward mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hkm"
              className="group relative btn-ripple rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 text-lg font-semibold hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
            >
              <span className="relative z-10">Claim Your Intellectual Mastery</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a
              href="/contact"
              className="group relative btn-ripple rounded-full bg-gradient-to-r from-red-600 to-rose-700 text-white px-8 py-4 text-lg font-semibold hover:from-red-500 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            >
              <span className="relative z-10">Begin Your Cultural Journey</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-rose-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


