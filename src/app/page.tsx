import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
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
          <VideoPlayer
            videoSrc={{
              webm: "/hero/loop.webm",
              mp4: "/hero/loop.mp4"
            }}
            posterSrc="/hero/poster.jpg"
            className="md:translate-x-2"
          />
        </div>
      </div>
    </section>
