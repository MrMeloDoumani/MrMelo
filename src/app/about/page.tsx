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

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <strong>The Method:</strong> This about page represents a radical approach to character revelation.
              Rather than self-description, we invited an AI analyst (Dr. Elias Hartman) to study Melo&apos;s complete body
              of work - his books, leadership manifestos, poetry, professional history, and philosophical frameworks.
              Through deep analysis, the AI reconstructed authentic testimonials that capture how Melo&apos;s ecosystem
              would speak about his character. This serves as both a foundation and an invitation for real voices to contribute,
              creating a living tapestry of how others experience Melo as a thinker, observer, writer, producer, and creative.
            </p>

            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              What follows are carefully selected quotes from thinkers whom Mr. Melo deeply respects for their mastery
              of human understanding and philosophical insight. These voices resonate with aspects of his character and
              creative journey. Additionally, this page serves as a standing invitation for Mr. Melo&apos;s ecosystem -
              family, friends, colleagues, and creative peers - to contribute their authentic testimonials, creating
              a living tapestry of how others experience his character as a thinker, observer, writer, producer, and fellow traveler.
            </p>
          </div>

          {/* Dr. Elias Hartman - AI Analyst Perspective */}
          <div className="mb-20">
            <div className="group relative rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 p-8 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 max-w-4xl mx-auto">
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
          </div>

          {/* Literary Quotes */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {/* T.S. Eliot - Exploration & Self-Discovery */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-slate-900/20 to-gray-900/20 border border-slate-500/30 p-8 hover:border-slate-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-500/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-300 font-semibold text-lg">E</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-200 font-semibold mb-1">T.S. Eliot</h3>
                  <p className="text-slate-300/70 text-sm">Author of &ldquo;The Waste Land&rdquo;</p>
                </div>
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed">
                &ldquo;We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.&rdquo;
              </blockquote>

              <div className="mt-4 p-3 bg-slate-900/10 rounded-lg border border-slate-500/20">
                <p className="text-slate-200 text-sm italic">
                  Eliot&apos;s vision of endless exploration and arriving at self-knowledge through experience captures
                  Mr. Melo&apos;s philosophical journey of understanding the human condition through creative expression.
                </p>
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

              <div className="mt-4 p-3 bg-purple-900/10 rounded-lg border border-purple-500/20">
                <p className="text-purple-200 text-sm italic">
                  Kundera&apos;s meditation on the burdens that make us more real and truthful resonates with Mr. Melo&apos;s
                  embrace of life&apos;s complexities and his commitment to authentic human experience over superficial comfort.
                </p>
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

              <div className="mt-4 p-3 bg-amber-900/10 rounded-lg border border-amber-500/20">
                <p className="text-amber-200 text-sm italic">
                  Orwell&apos;s revolutionary call for truth in deceitful times echoes Mr. Melo&apos;s commitment to
                  intellectual honesty and his willingness to speak uncomfortable truths in service of clarity and understanding.
                </p>
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

              <div className="mt-4 p-3 bg-red-900/10 rounded-lg border border-red-500/20">
                <p className="text-red-200 text-sm italic">
                  This quote captures Mr. Melo&apos;s relentless pursuit of truth and his willingness to challenge
                  prevailing narratives, even when it makes him a solitary voice in the crowd.
                </p>
              </div>
            </div>

            {/* Fyodor Dostoevsky - Human Complexity & Redemption */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 p-8 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-300 font-semibold text-lg">D</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-amber-200 font-semibold mb-1">Fyodor Dostoevsky</h3>
                  <p className="text-amber-300/70 text-sm">Author of &ldquo;Crime and Punishment&rdquo;</p>
                </div>
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed">
                &ldquo;To go wrong in one&apos;s own way is better than to go right in someone else&apos;s. In the first case
                you are a man, in the second you&apos;re no better than a bird.&rdquo;
              </blockquote>

              <div className="mt-4 p-3 bg-amber-900/10 rounded-lg border border-amber-500/20">
                <p className="text-amber-200 text-sm italic">
                  Dostoevsky&apos;s exploration of human complexity and the redemptive power of authentic struggle
                  mirrors Mr. Melo&apos;s commitment to genuine self-expression over performative success.
                </p>
              </div>
            </div>

            {/* William Shakespeare - The Thinking Mind */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/30 p-8 hover:border-indigo-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-300 font-semibold text-lg">S</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-indigo-200 font-semibold mb-1">William Shakespeare</h3>
                  <p className="text-indigo-300/70 text-sm">Author of &ldquo;Julius Caesar&rdquo;</p>
                </div>
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed">
                &ldquo;The fault, dear Brutus, is not in our stars, but in ourselves, that we are underlings.
                Brutus and Caesar: What should be in that &lsquo;Caesar&rsquo;? Why should that name be sounded more than yours?
                Write them together, yours is as fair a name; Sound them, it doth become the mouth as well;
                Weigh them, it is as heavy; conjure with &lsquo;em, &lsquo;Brutus&rsquo; will start a spirit as soon as &lsquo;Caesar.&rsquo;
                Now, in the names of all the gods at once, upon what meat doth this our Caesar feed, that he is grown so great?
                Age, thou art sham&apos;d! Rome, thou hast lost the breed of noble bloods! For since the time of our great-grandfathers,
                what man in Rome is so renowned for wisdom, courage, and for love, as Caesar is? He thinks too much: such men are dangerous.&rdquo;
              </blockquote>

              <div className="mt-4 p-3 bg-indigo-900/10 rounded-lg border border-indigo-500/20">
                <p className="text-indigo-200 text-sm italic">
                  Shakespeare&apos;s warning about thinkers who challenge the status quo resonates with Mr. Melo&apos;s
                  role as a philosophical observer who questions prevailing narratives and societal constructs.
                </p>
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

          {/* Testimonial Submission Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-serif mb-6 text-center bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Share Your Voice
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Submit your authentic experience of Melo&apos;s character. All submissions are reviewed personally.
              </p>

              <form
                action="mailto:info@mrmelo.com"
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <input type="hidden" name="subject" value="Character Testimonial Submission - About Mr. Melo" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Relationship to Melo *
                  </label>
                  <select
                    id="relationship"
                    name="relationship"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  >
                    <option value="">Select relationship</option>
                    <option value="family">Family Member</option>
                    <option value="friend">Friend</option>
                    <option value="colleague">Colleague</option>
                    <option value="peer">Creative Peer</option>
                    <option value="collaborator">Collaborator</option>
                    <option value="client">Client/Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Testimonial *
                  </label>
                  <textarea
                    id="testimonial"
                    name="testimonial"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    placeholder="Share your authentic experience of Melo's character. Include both the sweetness of his wisdom and any constructive observations - radical transparency welcomes the full spectrum."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                  >
                    Submit Testimonial
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    Submissions open a new email with your testimonial. Melo reviews all submissions personally.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


