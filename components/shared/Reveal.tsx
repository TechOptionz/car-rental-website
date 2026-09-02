"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-reveal wrapper. Children render fully visible by default (no JS, no
 * reveal — content never depends on this script). After mount, if the group
 * is still below the viewport, it gets the from-state and an
 * IntersectionObserver reveals it once, then unobserves. Direct children
 * cascade via the nth-child stagger delays in globals.css.
 */
export default function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Above-the-fold content is never scroll-triggered: only arm elements
    // whose top is still below ~90% of the viewport at mount.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("reveal-in");
            el.classList.remove("reveal-pending");
            io.unobserve(el);
          }
        }
      },
      // Bottom -100px: fire slightly before the group fully enters so it
      // feels natural. Huge top margin: anything jumped PAST (fast scroll,
      // anchor link) still counts as intersecting and reveals immediately.
      { rootMargin: "100000px 0px -100px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={style} className="reveal-group">
      {children}
    </div>
  );
}
