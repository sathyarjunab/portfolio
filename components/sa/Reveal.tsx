"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useIsClient, useReducedMotion } from "./hooks";

/**
 * Fades and lifts its content in when it scrolls into view.
 * Renders visible on the server and without JS; only hides content that is about to animate.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  /** ms, for staggering siblings (e.g. 0, 80, 160). */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const isClient = useIsClient();
  const reduced = useReducedMotion();
  // On the server, during hydration, with Reduce motion or without IntersectionObserver, stay "idle" (visible).
  const animate = isClient && !reduced && typeof IntersectionObserver !== "undefined";
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!animate || shown || !el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          requestAnimationFrame(() => setShown(true));
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate, shown]);
  const state = !animate ? "idle" : shown ? "shown" : "pending";
  const T = Tag as "div";
  return (
    <T
      ref={ref as never}
      className={["sa-reveal", className].filter(Boolean).join(" ")}
      data-reveal={state}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </T>
  );
}
