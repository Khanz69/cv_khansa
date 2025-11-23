"use client";

import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {

    if (typeof window !== "undefined" && (window as any).AOS) {
      try {
        (window as any).AOS.init({
          duration: 900,
          once: true,
          offset: 120,
          easing: 'ease-out-cubic',
          mirror: false
        });

        (window as any).AOS.refresh();
      } catch (e) {

      }
    }
  }, []);

  return null;
}
