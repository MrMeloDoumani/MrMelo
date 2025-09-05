"use client";

import React from "react";
import dynamic from "next/dynamic";
const AvatarBubble = dynamic(() => import("@/components/AvatarBubble"), { ssr: false });

export default function GuideOverlay() {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <AvatarBubble />
    </div>
  );
}


