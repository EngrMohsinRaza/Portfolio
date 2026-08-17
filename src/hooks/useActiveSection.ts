"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which page section is currently in view (used to highlight the
 * matching navbar link). Works by observing each section with an
 * IntersectionObserver band in the middle of the viewport.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      /* The band between 30% and 60% from the top counts as "active" */
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return active;
}
