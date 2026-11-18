import * as React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck } from "lucide-react";

export interface AnimatedCartoonHeroVisualProps {
  src: string;
  alt: string;
  label: string;
  sealTitle?: string;
  sealSubtitle?: string;
}

/**
 * Zero-JS GPU-Composited Animated Glassmorphic Cartoon Hero Display Stage
 * Brings each Insurance & Service page's unique 3D cartoon illustration to life
 * with smooth CSS floating motion, hover lift, ambient logo-color glow, and sheen sweep.
 */
export function AnimatedCartoonHeroVisual({
  src,
  alt,
  label,
  sealTitle = "Unbiased Advisory",
  sealSubtitle = "Direct Guidance by MD Abrahim",
}: AnimatedCartoonHeroVisualProps) {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Pulsing Logo-Color Ambient Glow Behind Card */}
      <div
        className="anim-pulse-soft pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#FF6B00]/30 via-[#16A34A]/25 to-[#0284C7]/35 blur-2xl"
        aria-hidden="true"
      />

      {/* Frosted Glass Showcase Container */}
      <div className="relative w-full aspect-[4/3] rounded-3xl border border-white/25 bg-white/10 p-3 sm:p-3.5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
        {/* Top Specular Glass Rim */}
        <div
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
          aria-hidden="true"
        />

        {/* Animated Inner Cartoon Viewport */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white via-sky-50/90 to-orange-50/70 ring-1 ring-white/40">
          {/* Smooth Living Float Animation on Cartoon Artwork */}
          <div className="anim-float-lg relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 512px"
              className="object-cover"
              preload
            />
          </div>

          {/* Subtle Diagonal Glass Sheen Sweep */}
          <div
            aria-hidden="true"
            className="anim-sheen pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          {/* Top-Right Animated Category Pill */}
          <div className="anim-float absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-extrabold text-[#0F2E8A] shadow-md backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A]" aria-hidden="true" />
            <span>{label}</span>
          </div>
        </div>

        {/* Floating Advisory Trust Seal (Bottom Left) */}
        <div className="anim-float-slow absolute -bottom-4 -left-3 sm:-left-4 rounded-2xl border border-slate-200/90 bg-white/95 p-3 sm:p-3.5 text-brand-dark shadow-elevated backdrop-blur-md hidden sm:flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2E8A] to-[#0284C7] text-white shadow-sm">
            <Sparkles className="h-5 w-5 text-amber-300" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-[#0F2E8A] leading-tight">{sealTitle}</p>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">{sealSubtitle}</p>
          </div>
        </div>

        {/* Animated Floating Accent Sparkle Dot (Top Left) */}
        <span
          aria-hidden="true"
          className="anim-pulse-soft pointer-events-none absolute -top-1.5 -left-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-tr from-[#FF6B00] to-amber-300 ring-4 ring-white/25"
        />
      </div>
    </div>
  );
}
