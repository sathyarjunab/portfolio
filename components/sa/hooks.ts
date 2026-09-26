import { useSyncExternalStore } from "react";

// Browser-only values. The third argument is used on the server and during hydration, so the first
// client render matches the server HTML; React then re-renders with the real value.

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const noSubscribe = () => () => {};

/** False on the server and during hydration, true once the page is running in the browser. */
export function useIsClient() {
  return useSyncExternalStore(noSubscribe, () => true, () => false);
}

const subscribeReducedMotion = (onChange: () => void) => {
  if (!window.matchMedia) return () => {};
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

/** Whether the visitor has Reduce motion turned on. Updates if they change it. */
export function useReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, () => !!window.matchMedia && window.matchMedia(REDUCED_MOTION).matches, () => false);
}
