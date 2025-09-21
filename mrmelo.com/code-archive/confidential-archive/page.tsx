import Link from "next/link";

export default function ConfidentialArchive() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative fade-bottom">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,rgba(0,0,0,0),rgba(0,0,0,0.6))]" />

        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
              The Confidential Archive
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-6">
              <strong>Exclusive personal insights and original content.</strong> My private collection of theories, 
              observations, and creative work spanning philosophy, business, and human experience.
            </p>
            <div className="bg-black/40 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <p className="text-foreground/80 mb-4">
                <em>This archive contains only my original personal material</em> - no client work, 
                no commissioned content. These are my authentic thoughts, theories, and creative expressions 
                on the topics that shape our world.
              </p>
              <div className="text-foreground/70">
                <p className="text-lg italic">Everyone has a price. Even private thoughts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-serif text-center mb-12">Topics Covered in the Archive</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Life & Philosophy</h3>
              <p className="text-foreground/80 text-sm">Personal theories on existence, purpose, consciousness, and the human condition</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Economy & Finance</h3>
              <p className="text-foreground/80 text-sm">Alternative economic theories, market psychology, wealth creation strategies</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Relationships & Psychology</h3>
              <p className="text-foreground/80 text-sm">Interpersonal dynamics, emotional intelligence, communication patterns</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Industries & Technology</h3>
              <p className="text-foreground/80 text-sm">Industry analysis, technological trends, innovation theories</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Business & Entrepreneurship</h3>
              <p className="text-foreground/80 text-sm">Business models, startup strategies, leadership insights, market disruption</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Self-Development & Growth</h3>
              <p className="text-foreground/80 text-sm">Personal growth frameworks, productivity systems, mindset development</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Creativity & Art</h3>
              <p className="text-foreground/80 text-sm">Creative processes, artistic theories, innovation in expression</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Society & Culture</h3>
              <p className="text-foreground/80 text-sm">Social dynamics, cultural observations, future trends</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Ethics & Morality</h3>
              <p className="text-foreground/80 text-sm">Moral frameworks, ethical dilemmas, decision-making principles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-serif text-center mb-12">Multi-Media Archive</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-20 h-20 bg-[color:var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Written Content</h3>
              <ul className="text-foreground/80 space-y-2 text-left">
                <li>• Personal essays and theories</li>
                <li>• Business analyses and frameworks</li>
                <li>• Creative writing and poetry</li>
                <li>• Research notes and insights</li>
                <li>• Strategic observations</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[color:var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎧</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Audio Content</h3>
              <ul className="text-foreground/80 space-y-2 text-left">
                <li>• Personal philosophy discussions</li>
                <li>• Business strategy recordings</li>
                <li>• Creative monologues</li>
                <li>• Meditation and reflection sessions</li>
                <li>• Industry analysis audio essays</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[color:var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Video Content</h3>
              <ul className="text-foreground/80 space-y-2 text-left">
                <li>• Personal insights and lectures</li>
                <li>• Business strategy breakdowns</li>
                <li>• Creative process demonstrations</li>
                <li>• Industry trend analyses</li>
                <li>• Philosophical discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-2xl font-serif mb-4">Ready to Explore My Personal Archive?</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Discover the unfiltered thoughts, theories, and creative work that shape my perspective on the world. 
            This is where philosophy meets business, creativity meets strategy, and personal insights become universal wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="btn-ripple rounded-full bg-[color:var(--accent)] text-black px-8 py-4 text-lg font-medium hover:opacity-90"
            >
              Create Your Access Code
            </Link>
            <Link
              href="/contact"
              className="btn-ripple rounded-full border border-[color:var(--sand)] px-8 py-4 text-lg font-medium hover:bg-[color:var(--sand)]/30"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}