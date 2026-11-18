"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hydration-safe dynamic current year component using useSyncExternalStore.
 * Eliminates cascading re-renders and avoids Next.js 16 static prerender bailouts.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return <span suppressHydrationWarning>{year}</span>;
}
