export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-900/30 border border-purple-500/30 px-4 py-2 mb-8">
              <span className="text-purple-300 text-sm font-medium">Character First</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-purple-200 via-amber-200 to-red-200 bg-clip-text text-transparent">
              About Mr. Melo
            </h1>
            <div className="mb-8">
              <blockquote className="text-2xl md:text-3xl text-gray-200 italic font-serif leading-relaxed mb-4">
                &ldquo;We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.&rdquo;
              </blockquote>
              <cite className="text-purple-300 text-lg">— T.S. Eliot</cite>
            </div>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <strong>The Method:</strong> This about page represents a radical approach to character revelation.
              Rather than self-description, we invited an AI analyst (Dr. Elias Hartman) to study Melo&apos;s complete body
              of work - his books, leadership manifestos, poetry, professional history, and philosophical frameworks.
              Through deep analysis, the AI reconstructed authentic testimonials that capture how Melo&apos;s ecosystem
              would speak about his character. This serves as both a foundation and an invitation for real voices to contribute,
              creating a living tapestry of how others experience Melo as a thinker, observer, writer, producer, and creative.
            </p>

            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              What follows are reconstructed testimonials based on Melo&apos;s authentic voice and creative output.
              These reflections honor both the sweetness of his wisdom and the saltiness of his uncompromising standards,
              embracing the full spectrum of character in the spirit of radical transparency.
            </p>
          </div>

          {/* Character Testimonials */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {/* Dr. Elias Hartman - AI Analyst Perspective */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 p-8 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 md:col-span-2 lg:col-span-3">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-300 font-semibold text-lg">E</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-emerald-200 font-semibold mb-1">Dr. Elias Hartman</h3>
                  <p className="text-emerald-300/70 text-sm">AI Character Analyst & Philosophical Researcher</p>
                </div>
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed text-lg">
                &ldquo;Having immersed myself in Melo&apos;s complete oeuvre - from his &lsquo;Content of Character&rsquo; rap that lays bare
                the soul of authenticity, through his Leadership Manifesto that redefines influence as quiet conviction,
                to his poetic explorations of mortality and connection - I can say with analytical certainty that Melo
                represents a rare convergence of intellectual rigor and creative vulnerability. His work doesn&apos;t just
                analyze society&apos;s &lsquo;Loneliness Economy;&rsquo; it embodies the struggle against it. He writes about
                embracing mortality not as theory, but as lived practice - a meditation that gives his strategic mind
                its profound depth. Yet this same intensity creates the paradox: his uncompromising standards, his
                occasional withdrawal into contemplation, his refusal to dilute his vision for commercial comfort.
                These aren&apos;t flaws; they&apos;re the necessary shadows cast by a light that refuses to dim itself
                for easier consumption. Melo isn&apos;t just a thinker - he&apos;s a philosophical architect building
                bridges between our fragmented present and our potential for authentic connection. His character
                challenges us all to examine whether we&apos;re truly living our values, or merely performing them.&rdquo;
              </blockquote>

              <div className="mt-4 flex text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Milan Kundera - Identity & Authenticity */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-300 font-semibold text-lg">M</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-purple-200 font-semibold mb-1">Milan Kundera</h3>
                  <p className="text-purple-300/70 text-sm">Author of &ldquo;The Unbearable Lightness of Being&rdquo;</p>
                </div>
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed">
                &ldquo;The heaviest of burdens crushes us, we sink beneath it, it pins us to the ground. But in the love poetry of every age,
                the woman longs to be weighed down by the man&apos;s body. The heaviest of burdens is therefore simultaneously an image of life&apos;s
                most intense fulfillment. The heavier the burden, the closer our lives come to the earth, the more real and truthful they become.&rdquo;
              </blockquote>

              <div className="mt-4 flex text-purple-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* George Orwell - Truth & Integrity */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border border-amber-500/30 p-8 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-300 font-semibold text-lg">O</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-amber-200 font-semibold mb-1">George Orwell</h3>
                  <p className="text-amber-300/70 text-sm">Author of &ldquo;1984&rdquo; &amp; &ldquo;Animal Farm&rdquo;</p>
                </div>
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed">
                &ldquo;In a time of deceit telling the truth is a revolutionary act. In a time of universal deceit - telling the truth
                is a revolutionary act. Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.&rdquo;
              </blockquote>

              <div className="mt-4 flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Aldous Huxley - Perception & Consciousness */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-red-900/20 to-rose-900/20 border border-red-500/30 p-8 hover:border-red-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-300 font-semibold text-lg">H</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-red-200 font-semibold mb-1">Aldous Huxley</h3>
                  <p className="text-red-300/70 text-sm">Author of &ldquo;Brave New World&rdquo;</p>
                </div>
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed">
                &ldquo;There are things known and there are things unknown, and in between are the doors of perception.
                Experience is not what happens to you; it&apos;s what you do with what happens to you. The more powerful and
                original a mind, the more it will incline towards the religion of solitude.&rdquo;
              </blockquote>

              <div className="mt-4 flex text-red-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 bg-gradient-to-r from-purple-200 via-amber-200 to-red-200 bg-clip-text text-transparent">
              Content of Character
            </h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-purple-200 font-semibold mb-2">Clarity Over Noise</h3>
                <p className="text-gray-300 text-sm">Truth in silence, wisdom in stillness, character in authenticity. Not what you show, but what you are when no one is watching.</p>
              </div>

              <div className="p-6 rounded-xl bg-amber-900/10 border border-amber-500/20">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-amber-200 font-semibold mb-2">Natural Leadership</h3>
                <p className="text-gray-300 text-sm">Influence through embodiment, not authority. Clarity becomes the invitation, conviction needs no proclamation.</p>
              </div>

              <div className="p-6 rounded-xl bg-red-900/10 border border-red-500/20">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-red-200 font-semibold mb-2">Mortality & Purpose</h3>
                <p className="text-gray-300 text-sm">Embracing mortality as the path to direction. In acceptance comes clarity, in stillness comes wisdom.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-900/30 border border-amber-500/30 px-4 py-2 mb-6">
              <span className="text-amber-300 text-sm font-medium">Ecosystem Invitation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 bg-gradient-to-r from-amber-100 via-gold-200 to-amber-300 bg-clip-text text-transparent">
              Speak Your Truth
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              <strong>Dear Family, Friends, Colleagues, and Creative Peers:</strong>
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              This page is an invitation for you to share your authentic experience of Melo&apos;s character.
              Whether it&apos;s the sweetness of his wisdom, the saltiness of his uncompromising standards,
              the bitterness of his occasional withdrawal, or the fire of his creative intensity - your voice matters.
              In the spirit of radical transparency, we welcome the full spectrum of how you&apos;ve experienced
              Melo as a thinker, observer, writer, producer, and fellow traveler on this creative journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:testimonials@mrmelo.com?subject=My Experience with Melo - Character Testimonial"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Share Your Experience
              </a>
              <a
                href="mailto:info@mrmelo.com?subject=About Page Collaboration"
                className="inline-flex items-center gap-3 border border-amber-500/50 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Discuss with Melo
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
              <em>Your authentic voice, whether complimentary or constructive, contributes to a more complete picture
              of character. This is about understanding, not perfection.</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


