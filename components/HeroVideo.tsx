"use client";

import { useEffect, useState } from "react";

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

export default function HeroVideo({
  videoSrc,
  posterSrc,
}: {
  videoSrc: string;
  posterSrc: string;
}) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const savesData = (navigator as NavigatorWithConnection).connection?.saveData;

    // Keep the poster instead of spending bandwidth on decorative motion
    // when the visitor has explicitly requested either preference.
    if (!prefersReducedMotion && !savesData) setShouldLoadVideo(true);
  }, []);

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={shouldLoadVideo ? videoSrc : undefined}
      poster={posterSrc}
      preload={shouldLoadVideo ? "auto" : "none"}
      autoPlay={shouldLoadVideo}
      muted
      loop
      playsInline
      aria-hidden
    />
  );
}
