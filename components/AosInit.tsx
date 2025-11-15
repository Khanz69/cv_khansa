"use client";

import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    // If AOS is loaded globally via /assets/vendor/aos/aos.js, use the global
    // object. Fallback to a no-op if not present.
    if (typeof window !== "undefined" && (window as any).AOS) {
      try {
        (window as any).AOS.init({
          duration: 900,
          once: true,
          offset: 120,
          easing: 'ease-out-cubic',
          mirror: false
        });
        // Ensure AOS calculates positions after init
        (window as any).AOS.refresh();
      } catch (e) {
        // ignore
        // console.warn('AOS init failed', e);
      }
    }
  }, []);

  return null;
}
