"use client";

import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";

type VisemeEntry = { start: number; end: number; viseme: string };
type VisemeData = { entries: VisemeEntry[] };
type Segment = { id: string; label: string; start: number; end: number };
type SegmentsData = { sections: Segment[]; audioDuration: number };

function clamp01(v: number) { return Math.max(0, Math.min(1, v)); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

const VISEME_OPENNESS: Record<string, number> = {
  AA: 1.0, E: 0.6, IH: 0.3, OH: 0.9, OU: 0.8, BMP: 0.2, FV: 0.4, TH: 0.5, DD: 0.2, K: 0.2, CH: 0.2, SS: 0.2, NN: 0.2, RR: 0.2, REST: 0.15,
};

export default function AvatarWalker() {
  const [segments, setSegments] = useState<SegmentsData | null>(null);
  const [visemes, setVisemes] = useState<VisemeData | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number }>({ x: 24, y: 24 });
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 24, y: 24 });
  const [mouth, setMouth] = useState(0);
  const [started, setStarted] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    fetch("/narration/homepage_segments.json").then(r => r.json()).then(setSegments).catch(() => setSegments({ sections: [], audioDuration: 0 }));
    fetch("/narration/homepage.visemes.json").then(r => r.json()).then(setVisemes).catch(() => setVisemes({ entries: [] }));
  }, []);

  useEffect(() => {
    const audio = new Audio("/audio/mrmelo-homepage.mp3");
    audioRef.current = audio;
    audio.preload = "auto";
    const onTime = () => setCurrentTime(audio.currentTime);
    const onPlay = () => setStarted(true);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("play", onPlay);
    // Autoplay may be blocked; user can tap Start below
    audio.play().catch(() => {});
    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("play", onPlay);
    };
  }, []);

  // Update target position based on active section (by time) and its DOM rect
  const computeTarget = useCallback(() => {
    if (!segments) return;
    // Prefer section by audio time; fallback to most visible section on screen
    const t = currentTime;
    let chosen: string | null = null;
    const byTime = segments.sections.find(s => t >= s.start && t < s.end) ?? null;
    if (byTime?.id) chosen = byTime.id;
    if (!chosen) {
      // Fallback: choose the section with largest intersection in viewport among known IDs
      let bestId: string | null = null; let bestArea = 0;
      segments.sections.forEach(s => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const iw = Math.max(0, Math.min(window.innerWidth, r.right) - Math.max(0, r.left));
        const ih = Math.max(0, Math.min(window.innerHeight, r.bottom) - Math.max(0, r.top));
        const area = iw * ih;
        if (area > bestArea) { bestArea = area; bestId = s.id; }
      });
      chosen = bestId;
    }
    if (!chosen) return;
    const el = document.getElementById(chosen);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth; const vh = window.innerHeight;
    const x = clamp01((rect.left + rect.width * 0.15) / vw) * vw; // 15% into the section
    const y = clamp01((rect.top + rect.height * 0.2) / vh) * vh; // 20% from top of section
    setTargetPos({ x, y });
  }, [segments, currentTime]);

  useLayoutEffect(() => { computeTarget(); }, [computeTarget]);
  useEffect(() => {
    const onScroll = () => computeTarget();
    const onResize = () => computeTarget();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, [computeTarget]);

  // Smoothly move avatar towards target position
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    const loop = () => {
      setPos(p => ({ x: lerp(p.x, targetPos.x, 0.12), y: lerp(p.y, targetPos.y, 0.12) }));
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [targetPos.x, targetPos.y]);

  // Viseme-driven mouth openness with slight smoothing
  useEffect(() => {
    if (!visemes) return;
    const e = visemes.entries.find(v => currentTime >= v.start && currentTime <= v.end);
    const target = VISEME_OPENNESS[e?.viseme ?? "REST"] ?? 0.15;
    setMouth(m => lerp(m, target, 0.35));
  }, [visemes, currentTime]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden>
      <div
        className="pointer-events-auto fixed z-50 flex items-center gap-3"
        style={{ transform: `translate(${Math.round(pos.x)}px, ${Math.round(pos.y)}px)` }}
      >
        <div className="relative w-28 h-28 rounded-full border border-[color:var(--sand)] bg-black/70 p-2 shadow-lg">
          <img src="/avatar/guide.png" alt="Guide avatar" className="h-full w-full rounded-full object-cover" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1.5 h-2 rounded-full bg-[color:var(--sand)]" style={{ width: `${Math.max(20, Math.floor(20 + mouth*60))}px` }} />
        </div>
      </div>
      {/* Start audio CTA (autoplay may be blocked) */}
      {!started && (
        <div className="pointer-events-auto fixed inset-x-0 bottom-20 z-50 flex justify-center">
          <button
            onClick={() => { const a = audioRef.current; if (!a) return; a.play().catch(()=>{}); }}
            className="rounded-full border border-[color:var(--sand)] bg-black/80 px-5 py-2 text-sm"
          >
            Start Audio Guide
          </button>
        </div>
      )}
      {/* Controls */}
      <div className="pointer-events-auto fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <button onClick={() => { const a = audioRef.current; if (!a) return; a.paused ? a.play().catch(()=>{}) : a.pause(); }} className="rounded-full border border-[color:var(--sand)] bg-black/70 px-3 py-1 text-sm">Play/Pause</button>
        <button onClick={() => { const a = audioRef.current; if (!a) return; a.muted = !a.muted; }} className="rounded-full border border-[color:var(--sand)] bg-black/70 px-3 py-1 text-sm">Mute</button>
      </div>
    </div>
  );
}


