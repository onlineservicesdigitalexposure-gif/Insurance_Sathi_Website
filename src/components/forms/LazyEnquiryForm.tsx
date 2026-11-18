"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import type { EnquiryFormProps } from "./EnquiryForm";

function EnquiryFormSkeleton() {
  return (
    <div
      className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl animate-pulse space-y-4"
      aria-busy="true"
      aria-label="Loading consultation form"
    >
      <div className="h-6 w-2/3 rounded-lg bg-slate-200" />
      <div className="h-4 w-4/5 rounded bg-slate-100" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="h-11 rounded-xl bg-slate-100" />
        <div className="h-11 rounded-xl bg-slate-100" />
        <div className="h-11 rounded-xl bg-slate-100" />
        <div className="h-11 rounded-xl bg-slate-100" />
      </div>
      <div className="h-24 rounded-xl bg-slate-100" />
      <div className="h-12 w-full rounded-xl bg-amber-100" />
    </div>
  );
}

const DynamicEnquiryForm = dynamic(
  () => import("./EnquiryForm").then((mod) => mod.EnquiryForm),
  {
    ssr: false,
    loading: () => <EnquiryFormSkeleton />,
  }
);

/**
 * Viewport-deferred wrapper for EnquiryForm.
 * Defers downloading react-hook-form + zod (~360 KB) until the user scrolls near the contact form.
 */
export function LazyEnquiryForm(props: EnquiryFormProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    if (shouldLoad) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef}>
      {shouldLoad ? <DynamicEnquiryForm {...props} /> : <EnquiryFormSkeleton />}
    </div>
  );
}
