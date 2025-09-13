export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive creative solutions and AI-powered insights. From strategic content development to personalized knowledge guidance,
            we deliver everything you need to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Content Creation Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6 text-white">Content Creation & Strategy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional content development from concept to delivery, powered by AI and human expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Content Strategy</h3>
              <p className="text-gray-300 mb-4">
                Focus, message architecture, and editorial plans that align with your business goals.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Brand messaging alignment</li>
                <li>• Editorial calendars</li>
                <li>• Content audit & planning</li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Concept Development</h3>
              <p className="text-gray-300 mb-4">
                Creative angles, scripts, and frameworks that set the direction for production.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Storyboarding & scripting</li>
                <li>• Visual concept creation</li>
                <li>• Brand-aligned messaging</li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4 text-white">AI-Assisted Production</h3>
              <p className="text-gray-300 mb-4">
                Advanced tools for video, voice, web content, and automation in secure workflows.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• AI video generation</li>
                <li>• Voice synthesis</li>
                <li>• Automated workflows</li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Analytics & Methods</h3>
              <p className="text-gray-300 mb-4">
                Data-driven insights, testing frameworks, and performance tracking.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Discovery sprint methodology</li>
                <li>• A/B testing frameworks</li>
                <li>• Performance analytics</li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Communication Strategy</h3>
              <p className="text-gray-300 mb-4">
                Channel playbooks, content cadence, and practical reporting frameworks.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-channel strategies</li>
                <li>• Content scheduling</li>
                <li>• Performance reporting</li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Quality Assurance</h3>
              <p className="text-gray-300 mb-4">
                Professional review process with one round included, additional reviews available.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Comprehensive QA process</li>
                <li>• Brand consistency checks</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Human Knowledge Model Section */}
      <section className="py-16 px-4 bg-black/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6 text-white">Human Knowledge Model</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience human reasoning, critical thinking based on decades of experience, observations, and continuous learning.
              Our Human Knowledge Model leverages AI tools for speed in delivery while ensuring every response reflects genuine
              human insight tailored to your unique goals, challenges, and aspirations.
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
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you need content creation services or personalized AI guidance through our Human Knowledge Model,
            we're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hkm"
              className="btn-ripple rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all"
            >
              Explore Human Knowledge Model
            </a>
            <a
              href="/contact"
              className="btn-ripple rounded-full border border-slate-600 text-white px-8 py-4 text-lg font-semibold hover:bg-slate-800 transition-all"
            >
              Discuss Content Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


