import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="motif-overlay">
      <div className="mx-auto max-w-6xl px-4 py-20 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Strategy, Meet Execution.</h1>
          <p className="mt-4 text-foreground/80 max-w-prose">
            MeloStudio is a production and strategy studio delivering clarity and impact for
            businesses and consumers, with a UAE-first positioning. We operate across five
            integrated branches: Melo Voice, Melo Video, Melo Words, Melo Pics, and Melo Code.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/packages" className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">View Packages</a>
            <a href="/contact" className="rounded-full border border-[color:var(--sand)] px-5 py-3 text-sm font-medium hover:bg-[color:var(--sand)]/30">Start a Project</a>
          </div>
        </div>
        <div className="relative aspect-[1/1] md:aspect-[4/3] w-full">
          <Image
            src="/hero.jpg"
            alt="Surreal montage representing Mr.Melo: time, memory, AI, and media"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl border border-[color:var(--sand)]"
            priority
          />
        </div>
      </div>
    </section>
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-serif mb-6">A Studio of Five Disciplines.</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-[color:var(--sand)] p-5">
            <h3 className="font-semibold mb-2">Melo Voice</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Commercial and promo voiceover for ads and brand films.</li>
              <li>Narration for explainers, product demos, and tutorials.</li>
              <li>Bilingual IVR and on-hold systems for professional call flows.</li>
              <li>Voice brand kits that define tone, pace, and phrasing rules.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[color:var(--sand)] p-5">
            <h3 className="font-semibold mb-2">Melo Video</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>AI-assisted video commercials, from concept to final cut.</li>
              <li>Product explainers and app walkthroughs with screens and motion titles.</li>
              <li>Short-form packs for Instagram and LinkedIn in vertical format.</li>
              <li>Editing, pacing, sound design, and music integration.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[color:var(--sand)] p-5">
            <h3 className="font-semibold mb-2">Melo Words</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Website copy with SEO structure for home, about, and service pages.</li>
              <li>Pitch decks and investor one-pagers with clear narrative logic.</li>
              <li>Video scripts for commercials, explainers, and product demos.</li>
              <li>Brand voice and messaging guidelines with do's and don'ts.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[color:var(--sand)] p-5">
            <h3 className="font-semibold mb-2">Melo Pics by Nabil Khalil</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Portraits and headshots, available in-studio or on-location.</li>
              <li>Product photography for e-commerce with clean, professional lighting.</li>
              <li>Event coverage for corporate and private functions.</li>
              <li>On-site brand asset library days to build a reusable archive of images.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[color:var(--sand)] p-5">
            <h3 className="font-semibold mb-2">Melo Code</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Custom AI agents for specific roles with private data control.</li>
              <li>Automation workflows in Make or n8n using webhooks and custom logic.</li>
              <li>Website chatbots that provide source-grounded responses.</li>
              <li>Analytics planning with Google Tag Manager and events setup.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-serif mb-4">Our Discipline. Your Advantage.</h2>
        <p className="text-foreground/80 max-w-prose">
          We build with structure and precision. Every project is managed through a disciplined operational framework.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="rounded-lg border border-[color:var(--sand)] p-5">
            <h3 className="font-semibold mb-2">Productized Services</h3>
            <p className="text-foreground/80">Repeatable packages with fixed scopes and clear acceptance criteria.</p>
          </div>
          <div className="rounded-lg border border-[color:var(--sand)] p-5">
            <h3 className="font-semibold mb-2">Automated Production</h3>
            <p className="text-foreground/80">AI, templates, and pipelines for speed and consistency.</p>
          </div>
          <div className="rounded-lg border border-[color:var(--sand)] p-5">
            <h3 className="font-semibold mb-2">Rigorous QA</h3>
            <p className="text-foreground/80">Three-gate review at draft, pre-final, and final stages.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-2xl font-serif mb-4">Start the Conversation.</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Our intake process is designed to capture all project specifications upfront to ensure a smooth, efficient engagement. Let's begin.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/packages" className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">View Packages</a>
          <a href="/contact" className="rounded-full border border-[color:var(--sand)] px-5 py-3 text-sm font-medium hover:bg-[color:var(--sand)]/30">Start a Project</a>
        </div>
      </div>
    </section>
    </>
  );
}
