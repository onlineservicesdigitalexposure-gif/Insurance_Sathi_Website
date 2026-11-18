"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HERO_BANNER_SLIDES = [
  {
    id: "hero-banner-1",
    src: "/images/HeroBanner/HeroBanner_1.webp",
    alt: "Life Insurance — Secure Your Family's Future with Insurance Sathi",
    href: "/insurance/life-insurance",
  },
  {
    id: "hero-banner-2",
    src: "/images/HeroBanner/HeroBanner_2.webp",
    alt: "Investment Plans — Build Long-Term Wealth with Insurance Sathi",
    href: "/insurance/investment-plans",
  },
  {
    id: "hero-banner-3",
    src: "/images/HeroBanner/HeroBanner_3.webp",
    alt: "Health Insurance — Comprehensive Family Protection Plans",
    href: "/insurance/health-insurance",
  },
  {
    id: "hero-banner-4",
    src: "/images/HeroBanner/HeroBanner_4.webp",
    alt: "Life, Retirement and Health Insurance Plans Under One Roof",
    href: "/insurance",
  },
] as const;

const SLIDE_INTERVAL_MS = 3000;

/**
 * Lightweight GPU-composited Glassmorphism Hero Banner Slider (Zero Framer Motion)
 * - Slide 0 is preloaded as the single above-the-fold LCP image.
 * - Slides 1–3 mount lazily only once visited so they never compete with LCP bandwidth.
 * - Automatically pauses timer when browser tab is hidden.
 */
export function HeroBannerSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  const [visitedSlides, setVisitedSlides] = React.useState<Set<number>>(() => new Set([0]));

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      setActiveSlideIndex((prev) => {
        const next = (prev + 1) % HERO_BANNER_SLIDES.length;
        setVisitedSlides((seen) => {
          if (seen.has(next)) return seen;
          const updated = new Set(seen);
          updated.add(next);
          return updated;
        });
        return next;
      });
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const selectSlide = (idx: number) => {
    setVisitedSlides((seen) => {
      if (seen.has(idx)) return seen;
      const updated = new Set(seen);
      updated.add(idx);
      return updated;
    });
    setActiveSlideIndex(idx);
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Ambient Glass Glow Behind Slider */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#0284C7]/20 via-[#16A34A]/15 to-[#FF6B00]/20 blur-2xl opacity-75"
        aria-hidden="true"
      />

      {/* Frosted Glass Frame */}
      <div className="relative rounded-3xl border border-white/80 bg-white/45 p-2 sm:p-2.5 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(15,46,138,0.18)] ring-1 ring-slate-200/70">
        <div
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
          aria-hidden="true"
        />

        {/* Image Viewport Stage (Exact 1697x927 aspect ratio so provided banners fit cleanly) */}
        <div className="relative w-full aspect-[1697/927] overflow-hidden rounded-2xl bg-white/60">
          {HERO_BANNER_SLIDES.map((slide, idx) => {
            if (!visitedSlides.has(idx)) return null;
            const isActive = idx === activeSlideIndex;

            return (
              <div
                key={slide.id}
                aria-hidden={!isActive}
                className={cn(
                  "absolute inset-0 h-full w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                  isActive
                    ? "translate-x-0 opacity-100 z-10 pointer-events-auto"
                    : "translate-x-full opacity-0 z-0 pointer-events-none"
                )}
              >
                <Link
                  href={slide.href}
                  aria-label={slide.alt}
                  tabIndex={isActive ? 0 : -1}
                  className="relative block h-full w-full"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    preload={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-contain"
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Minimal Glass Slide Indicator Bar */}
        <div
          className="mt-2.5 flex items-center justify-center gap-2 pb-0.5"
          role="tablist"
          aria-label="Hero banner slides"
        >
          {HERO_BANNER_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show banner ${idx + 1}`}
                onClick={() => selectSlide(idx)}
                className={cn(
                  "relative h-2 overflow-hidden rounded-full transition-all duration-300 cursor-pointer",
                  isActive
                    ? "w-10 bg-[#0F2E8A]/15 ring-1 ring-[#0F2E8A]/25"
                    : "w-2 bg-slate-300/90 hover:bg-slate-400"
                )}
              >
                {isActive && (
                  <span
                    key={`progress-${activeSlideIndex}`}
                    className="anim-hero-progress absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#16A34A] to-[#0284C7]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
