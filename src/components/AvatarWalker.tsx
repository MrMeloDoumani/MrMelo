"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

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
    audio.addEventListener("timeupdate", onTime);
    audio.play().catch(() => {});
    return () => { audio.pause(); audio.removeEventListener("timeupdate", onTime); };
  }, []);

  // Update target position based on active section (by time) and its DOM rect
  useLayoutEffect(() => {
    if (!segments) return;
    const t = currentTime;
    const active = segments.sections.find(s => t >= s.start && t < s.end) ?? null;
    const sectionId = active?.id;
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth; const vh = window.innerHeight;
    const x = clamp01((rect.left + rect.width * 0.1) / vw) * vw; // 10% into the section
    const y = clamp01((rect.top + rect.height * 0.15) / vh) * vh; // 15% from top of section
    setTargetPos({ x: x + 0, y: y + 0 });
  }, [segments, currentTime]);

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
        <div className="relative w-20 h-20 rounded-full border border-[color:var(--sand)] bg-black/70 p-2 shadow-lg">
          <img src="/avatar/guide.png" alt="Guide avatar" className="h-full w-full rounded-full object-cover" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1 h-1 rounded-full bg-[color:var(--sand)]" style={{ width: `${Math.max(16, Math.floor(16 + mouth*24))}px` }} />
        </div>
      </div>
      {/* Controls */}
      <div className="pointer-events-auto fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <button onClick={() => { const a = audioRef.current; if (!a) return; a.paused ? a.play().catch(()=>{}) : a.pause(); }} className="rounded-full border border-[color:var(--sand)] bg-black/70 px-3 py-1 text-sm">Play/Pause</button>
        <button onClick={() => { const a = audioRef.current; if (!a) return; a.muted = !a.muted; }} className="rounded-full border border-[color:var(--sand)] bg-black/70 px-3 py-1 text-sm">Mute</button>
      </div>
    </div>
  );
}


