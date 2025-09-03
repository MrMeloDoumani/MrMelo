import Image from "next/image";

export default function HighlightsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-serif mb-4">Highlights</h1>
      <p className="text-foreground/80 mb-8 max-w-prose">
        This showcase is intentionally minimal to protect client privacy. The pieces below are illustrative
        examples of formats and craft across voice, video, visuals, and code-driven media.
      </p>

      <div className="grid gap-8">
        <article className="space-y-3">
          <h2 className="font-serif text-xl">Visual — Selected Still</h2>
          <div className="relative aspect-[16/9] w-full">
            <Image src="/work/highlights/painting/poster.jpg" alt="Selected still" fill className="object-cover rounded-lg border border-[color:var(--sand)]" />
          </div>
        </article>

        <article className="space-y-3">
          <h2 className="font-serif text-xl">Short-form Video — Sahara Cut</h2>
          <video className="w-full rounded-lg border border-[color:var(--sand)]" controls preload="metadata">
            <source src="/work/highlights/sahara/clip-720p.mp4" type="video/mp4" />
          </video>
        </article>

        <article className="space-y-3">
          <h2 className="font-serif text-xl">Voiceover — Tone & Clarity</h2>
          <audio className="w-full" controls src="/work/highlights/voice-sample/sample.mp3" />
        </article>
      </div>
    </section>
  );
}


