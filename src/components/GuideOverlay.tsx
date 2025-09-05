"use client";

import React from "react";
import dynamic from "next/dynamic";

const AvatarGuideOverlay = dynamic(
  () => import("@/components/AvatarGuide").then((m) => m.AvatarGuideOverlay),
  { ssr: false }
);

export default function GuideOverlay() {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <AvatarGuideOverlay />
    </div>
  );
}


