import Image from "next/image";
import { IconVoice, IconVideo, IconWords, IconPics, IconCode } from "@/components/icons";
import GuideOverlay from "@/components/GuideOverlay";

export default function Home() {
  return (
    <>
    <GuideOverlay />
    <section id="hero" className="relative fade-bottom">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,rgba(0,0,0,0),rgba(0,0,0,0.6))]" />

      <div className="mx-auto max-w-6xl px-4 py-20 grid gap-8 md:grid-cols-2 items-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Strategy, Meet Execution.</h1>
          <p className="mt-4 text-foreground/80 max-w-prose">
            MeloStudio is a production and strategy studio delivering clarity and impact for
            businesses and consumers worldwide. We operate across five integrated branches:
            Melo Voice, Melo Video, Melo Words, Melo Pics, and Melo Code.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/packages" className="btn-ripple rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">View Packages</a>
            <a href="/contact" className="btn-ripple rounded-full border border-[color:var(--sand)] px-5 py-3 text-sm font-medium hover:bg-[color:var(--sand)]/30">Start a Project</a>
          </div>
        </div>
        <div className="relative aspect-[1/1] md:aspect-[4/3] w-full md:pl-8" style={{ perspective: 1000 }}>
          <video
            className="absolute inset-0 h-full w-full object-cover rounded-xl border border-[color:var(--sand)] md:translate-x-2 [@media_(prefers-reduced-motion:_reduce)]:hidden"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/hero/poster.jpg"
          >
            <source src="/hero/loop.webm" type="video/webm" />
            <source src="/hero/loop.mp4" type="video/mp4" />
          </video>
          <Image
            src="/hero/poster.jpg"
            alt="Hero visual"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl border border-[color:var(--sand)] md:translate-x-2 hidden [@media_(prefers-reduced-motion:_reduce)]:block"
            priority
          />
        </div>
      </div>
    </section>

    {/* Transitional micro-section */}
    <section id="transition-1">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center">
        <p className="text-foreground/80">
          From concept to execution, our disciplines shape media for brands that want clarity and impact.
        </p>
        <div className="mx-auto mt-4 divider-animate" />
      </div>
    </section>
    <section id="disciplines" className="relative">
      <div className="absolute inset-0 bg-black/60 -z-10" />
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-serif mb-6">A Studio of Five Disciplines.</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="icon-card rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
            <div className="icon mb-3 text-[color:var(--accent)]"><IconVoice /></div>
            <h3 className="font-serif text-xl mb-2">Melo Voice</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Commercial and promo voiceover for ads and brand films.</li>
              <li>Narration for explainers, product demos, and tutorials.</li>
              <li>Bilingual IVR and on-hold systems for professional call flows.</li>
              <li>Voice brand kits that define tone, pace, and phrasing rules.</li>
            </ul>
          </div>
          <div className="icon-card rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
            <div className="icon mb-3 text-[color:var(--accent)]"><IconVideo /></div>
            <h3 className="font-serif text-xl mb-2">Melo Video</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>AI-assisted video commercials, from concept to final cut.</li>
              <li>Product explainers and app walkthroughs with screens and motion titles.</li>
              <li>Short-form packs for Instagram and LinkedIn in vertical format.</li>
              <li>Editing, pacing, sound design, and music integration.</li>
            </ul>
          </div>
          <div className="icon-card rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
            <div className="icon mb-3 text-[color:var(--accent)]"><IconWords /></div>
            <h3 className="font-serif text-xl mb-2">Melo Words</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Website copy with SEO structure for home, about, and service pages.</li>
              <li>Pitch decks and investor one-pagers with clear narrative logic.</li>
              <li>Video scripts for commercials, explainers, and product demos.</li>
              <li>Brand voice and messaging guidelines with do&apos;s and don&apos;ts.</li>
            </ul>
          </div>
          <div className="icon-card rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
            <div className="icon mb-3 text-[color:var(--accent)]"><IconPics /></div>
            <h3 className="font-serif text-xl mb-2">Melo Pics by Nabil Khalil</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Portraits and headshots, available in-studio or on-location.</li>
              <li>Product photography for e-commerce with clean, professional lighting.</li>
              <li>Event coverage for corporate and private functions.</li>
              <li>On-site brand asset library days to build a reusable archive of images.</li>
            </ul>
          </div>
          <div className="icon-card rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
            <div className="icon mb-3 text-[color:var(--accent)]"><IconCode /></div>
            <h3 className="font-serif text-xl mb-2">Melo Code</h3>
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

    <section id="cta" >
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
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-2xl font-serif mb-4">Start the Conversation.</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Our intake process is designed to capture all project specifications upfront to ensure a smooth, efficient engagement. Let&apos;s begin.
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
