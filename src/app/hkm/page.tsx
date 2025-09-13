'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import CategoryGrid from '../../components/CategoryGrid';
import PricingTiers from '../../components/PricingTiers';
import SignupForm from '../../components/SignupForm';
import SignUpModal from '../../components/SignUpModal';

function HKMPageContent() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const step = searchParams.get('step') || 'overview';

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    setShowSignUpModal(true);
  };

  const handleSignupSubmit = async (data: { firstName: string; lastName: string; email: string; userType: string; selectedCategories: string[] }) => {
    try {
      // Handle signup submission
      console.log('Signup data:', data);

      // Here you would typically send the data to your API
      // For now, we'll just close the modal
      setShowSignUpModal(false);

      // Redirect to success page or dashboard
      window.location.href = '/payment/success';
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  if (step === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-serif mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Join the Human Knowledge Model
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete your registration to access personalized AI-powered insights and strategic guidance from Mr. Melo.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <SignupForm onSubmit={handleSignupSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl mx-4"></div>
        <div className="relative container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
              <span className="text-yellow-400 text-sm font-medium">🎯 Human Knowledge Model</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
              Human Reasoning Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience human reasoning, critical thinking based on decades of experience, observations, and continuous learning.
              Our Human Knowledge Model leverages AI tools for speed in delivery while ensuring every response reflects genuine
              human insight tailored to your unique goals, challenges, and aspirations.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Human Reasoning</h3>
              <p className="text-gray-300">Every response reflects genuine human insight, critical thinking, and decades of real-world experience - not just AI patterns.</p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI-Accelerated Delivery</h3>
              <p className="text-gray-300">AI tools enhance speed and efficiency while preserving the depth and authenticity of human reasoning and expertise.</p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Personalized Strategy</h3>
              <p className="text-gray-300">Strategic guidance tailored to your unique situation, drawing from proven methodologies and real-world observations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Domains Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Choose Your Knowledge Domains</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select up to 4 areas where you want personalized AI guidance. Each domain is powered by specialized knowledge models.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-12">Loading categories...</div>}>
            <CategoryGrid
              userType="b2b"
              selectedCategories={[]}
              onCategorySelect={() => {}}
            />
          </Suspense>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Access Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the level of access that fits your needs. All tiers include our core Human Knowledge Model technology.
            </p>
          </div>

          <PricingTiers onTierSelect={handleTierSelect} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Ready to Transform Your Knowledge Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who have unlocked their potential with personalized AI intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="?step=signup"
              className="btn-ripple rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all"
            >
              Start Your Journey
            </a>
            <a
              href="/contact"
              className="btn-ripple rounded-full border border-slate-600 text-white px-8 py-4 text-lg font-semibold hover:bg-slate-800 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Sign Up Modal */}
      <SignUpModal
        open={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        section={selectedTier}
      />
    </div>
  );
}

export default function HKMPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <HKMPageContent />
    </Suspense>
  );
}
