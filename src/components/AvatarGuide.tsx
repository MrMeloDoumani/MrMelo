"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type VisemeEntry = {
  start: number;
  end: number;
  viseme: string;
  phoneme?: string;
  word?: string;
};

type VisemeData = {
  entries: VisemeEntry[];
};

type SegmentsData = {
  sections: { id: string; label: string; start: number; end: number }[];
  audioDuration: number;
};

function findActiveViseme(entries: VisemeEntry[], t: number): VisemeEntry | null {
  // Binary search would be ideal, but linear is fine for ~100 entries
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    if (t >= e.start && t <= e.end) return e;
  }
  return null;
}

// Rough mapping of our simplified visemes to common ARKit/RPM morph targets
const visemeToBlendshape: Record<string, string[]> = {
  AA: ["viseme_aa", "jawOpen"],
  E: ["viseme_E", "mouthSmile"] as string[],
  IH: ["viseme_ih", "mouthClose"],
  OH: ["viseme_oh", "mouthFunnel"],
  OU: ["viseme_ou", "mouthPucker"],
  BMP: ["mouthClose"],
  FV: ["lowerLipBite"],
  TH: ["tongueOut"],
  DD: ["mouthClose"],
  K: ["mouthClose"],
  CH: ["mouthClose"],
  SS: ["mouthClose"],
  NN: ["mouthClose"],
  RR: ["mouthClose"],
  REST: ["jawOpen"],
};

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function AvatarModel({
  audioTime,
  visemes,
  audioDuration,
}: {
  audioTime: number;
  visemes: VisemeEntry[];
  audioDuration: number;
}) {
  // Load avatar model if present; show nothing if missing
  const gltf = useGLTF("/avatar/you.glb", true) as unknown as {
    scene: THREE.Group;
  };

  const groupRef = useRef<THREE.Group>(null);
  const [faceMesh, setFaceMesh] = useState<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!gltf?.scene) return;
    let found: THREE.Mesh | null = null;
    gltf.scene.traverse((obj) => {
      // Heuristic: look for a mesh with morph targets
      if ((obj as THREE.Mesh).isMesh) {
        const m = obj as THREE.Mesh;
        const mat = m.morphTargetInfluences;
        if (mat && m.morphTargetDictionary) {
          if (!found) found = m;
        }
      }
    });
    setFaceMesh(found);
  }, [gltf]);

  // Move avatar from left to right over the course of the audio
  useFrame(() => {
    if (groupRef.current) {
      const progress = audioDuration > 0 ? clamp01(audioTime / audioDuration) : 0;
      const x = -5 + progress * 10; // from x=-5 to x=+5
      groupRef.current.position.set(x, 0, 0);
      groupRef.current.rotation.y = THREE.MathUtils.degToRad(15);
    }

    if (faceMesh) {
      const mt = faceMesh.morphTargetInfluences;
      const dict = faceMesh.morphTargetDictionary as Record<string, number> | undefined;
      if (mt && dict) {
        // decay existing influences
        for (let i = 0; i < mt.length; i++) {
          mt[i] *= 0.6;
        }
        const active = findActiveViseme(visemes, audioTime);
        if (active) {
          const candidates = visemeToBlendshape[active.viseme] || [];
          candidates.forEach((name) => {
            const idx = dict[name];
            if (typeof idx === "number") {
              mt[idx] = Math.max(mt[idx], 0.8);
            }
          });
        }
      }
    }
  });

  return <primitive ref={groupRef} object={gltf.scene} />;
}

export function AvatarGuideOverlay() {
  const [visemeData, setVisemeData] = useState<VisemeData | null>(null);
  const [segments, setSegments] = useState<SegmentsData | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/narration/homepage.visemes.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then((j) => setVisemeData(j))
      .catch(() => setVisemeData({ entries: [] }));
    fetch("/narration/homepage_segments.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then((j) => setSegments(j))
      .catch(() => setSegments({ sections: [], audioDuration: 0 }));
  }, []);

  useEffect(() => {
    const audio = new Audio("/audio/mrmelo-homepage.mp3");
    audioRef.current = audio;
    audio.preload = "auto";
    const onTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", onTime);
    // Autoplay attempt; may be blocked, user gesture needed
    audio.play().catch(() => {});
    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
    };
  }, []);

  const duration = segments?.audioDuration || 0;
  const entries = visemeData?.entries || [];

  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden>
      <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        {entries.length > 0 && (
          <AvatarModel audioTime={currentTime} visemes={entries} audioDuration={duration} />
        )}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/avatar/you.glb");


