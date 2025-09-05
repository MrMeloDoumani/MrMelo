"use client";

import React from "react";
import dynamic from "next/dynamic";
const AvatarWalker = dynamic(() => import("@/components/AvatarWalker"), { ssr: false });

export default function GuideOverlay() {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <AvatarWalker />
    </div>
  );
}


