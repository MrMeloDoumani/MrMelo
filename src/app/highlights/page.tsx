import Image from "next/image";

export default function HighlightsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-serif mb-4">Highlights</h1>
      <p className="text-foreground/80 mb-8 max-w-prose">
        This showcase is intentionally minimal to protect client privacy. The pieces below are illustrative
        examples of formats and craft across voice, video, visuals, and code-driven media.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <article className="space-y-3">
          <h2 className="font-serif text-xl">Short-form Video — Concept Cut</h2>
          <video
            className="w-full rounded-lg border border-[color:var(--sand)]"
            controls
            preload="metadata"
          >
            <source src="/work/highlights/ai-video/clip.mp4" type="video/mp4" />
          </video>
          <p className="text-foreground/80 text-sm">30–60s vertical cut: pacing, captions, and motion titles.</p>
        </article>

        <article className="space-y-3">
          <h2 className="font-serif text-xl">Voiceover — Tone & Clarity</h2>
          <audio className="w-full" controls src="/work/highlights/voice-sample/sample.mp3" />
          <p className="text-foreground/80 text-sm">Narration sample focused on articulation, pace, and warmth.</p>
        </article>

        <article className="space-y-3">
          <h2 className="font-serif text-xl">Visual — Surreal Still</h2>
          <div className="relative aspect-[1/1] w-full">
            <Image src="/work/highlights/painting/poster.webp" alt="Surreal concept still" fill className="object-cover rounded-lg border border-[color:var(--sand)]" />
          </div>
          <p className="text-foreground/80 text-sm">Concept still: art direction for mood and brand atmosphere.</p>
        </article>

        <article className="space-y-3">
          <h2 className="font-serif text-xl">Concept — Layout Study</h2>
          <div className="relative aspect-[4/3] w-full">
            <Image src="/work/highlights/concept/poster.webp" alt="Layout study" fill className="object-cover rounded-lg border border-[color:var(--sand)]" />
          </div>
          <p className="text-foreground/80 text-sm">Composition and typography exploration for campaign frames.</p>
        </article>
      </div>
    </section>
  );
}


