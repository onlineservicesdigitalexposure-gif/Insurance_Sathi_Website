"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { INSURANCE_PARTNERS_DATA } from "@/data/partners";
import { SITE_CONFIG } from "@/data/site";
import { PartnerLogoSvg } from "@/components/brand/PartnerLogoSvg";
import { AnimatedFeatureSymbol } from "@/components/brand/AnimatedFeatureSymbol";
import { cn } from "@/lib/utils";

export function PartnerLogosSection() {
  const [selectedFilter, setSelectedFilter] = React.useState<"all" | "life" | "general">("all");

  const filteredPartners = React.useMemo(() => {
    if (selectedFilter === "all") return INSURANCE_PARTNERS_DATA;
    return INSURANCE_PARTNERS_DATA.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  // Split into two rows for dual horizontal marquee based on filtered selection
  const rowOne = filteredPartners.slice(0, Math.ceil(filteredPartners.length / 2));
  const rowTwo = filteredPartners.slice(Math.ceil(filteredPartners.length / 2));

  return (
    <section
      aria-label="Leading Insurance Partners"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white border-y border-slate-200/80"
    >
      <div className="container-site">
        {/* Banner 2 Header Ribbon Bar */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-royal/20 bg-brand-royal-50 px-4 py-1.5 text-xs font-bold text-brand-royal shadow-xs mb-4">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            <span>Under One Roof • 20+ IRDAI Regulated Insurers</span>
          </div>

          {/* Ribbon Title Bar from Official Banner */}
          <div className="relative mx-auto rounded-2xl bg-gradient-to-r from-brand-navy-950 via-brand-royal-700 to-brand-navy-950 px-6 py-4 shadow-xl border border-brand-royal/30 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Trusted Insurance Solutions from{" "}
              <span className="text-logo-gradient-dark">India&apos;s Leading Insurance Companies</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto font-medium">
              We compare plan features, waiting periods, network hospitals, and claim ratios across India&apos;s premier Life, Health, and General Insurance companies to find your optimal coverage.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedFilter("all")}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedFilter === "all"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              )}
            >
              All 20+ Companies
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter("life")}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedFilter === "life"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              )}
            >
              Life Insurance
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter("general")}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedFilter === "general"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              )}
            >
              General & Motor Insurance
            </button>
          </div>
        </div>

        {/* Continuous Horizontal Ticker (Row 1: Scrolling Left) */}
        <div className="mt-12 relative w-full overflow-hidden mask-gradient-x">
          <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
            {[...rowOne, ...rowOne].map((partner, index) => (
              <div
                key={`${partner.id}-r1-${index}`}
                className="group relative flex h-24 w-52 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-royal/50 hover:shadow-md"
              >
                <PartnerLogoSvg id={partner.id} className="h-10 w-full object-contain" />
                <span className="mt-1.5 text-[10px] font-bold text-slate-500 group-hover:text-brand-royal transition-colors">
                  {partner.badgeText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Horizontal Ticker (Row 2: Scrolling Right) */}
        <div className="mt-4 relative w-full overflow-hidden mask-gradient-x">
          <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...rowTwo, ...rowTwo].map((partner, index) => (
              <div
                key={`${partner.id}-r2-${index}`}
                className="group relative flex h-24 w-52 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-royal/50 hover:shadow-md"
              >
                <PartnerLogoSvg id={partner.id} className="h-10 w-full object-contain" />
                <span className="mt-1.5 text-[10px] font-bold text-slate-500 group-hover:text-brand-royal transition-colors">
                  {partner.badgeText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Trust Pillars Strip from 2nd Banner with Animated Real-Visual Symbols */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 p-6 sm:p-8 text-white shadow-xl border border-brand-navy-800">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1 */}
            <div className="group flex items-center gap-3.5 border-b border-white/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <AnimatedFeatureSymbol id="right-policy" className="h-12 w-12 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Right Policy</h3>
                <p className="text-xs text-slate-300 mt-0.5">Need-based honest evaluation</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group flex items-center gap-3.5 border-b border-white/10 pb-4 sm:border-b-0 lg:border-r sm:pb-0 sm:pr-4">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <AnimatedFeatureSymbol id="better-protection" className="h-12 w-12 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Better Protection</h3>
                <p className="text-xs text-slate-300 mt-0.5">Zero fine-print surprises</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group flex items-center gap-3.5 border-b border-white/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <AnimatedFeatureSymbol id="secure-future" className="h-12 w-12 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Secure Future</h3>
                <p className="text-xs text-slate-300 mt-0.5">Family safety &amp; wealth growth</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group flex items-center gap-3.5">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <AnimatedFeatureSymbol id="trusted-partner" className="h-12 w-12 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Your Trusted Partner</h3>
                <p className="text-xs text-slate-300 mt-0.5">In-person Barasat advisor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Yellow & Green Contact Strip from 2nd Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 p-4 sm:p-5 shadow-lg border border-yellow-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md animate-pulse">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase font-extrabold tracking-wider text-slate-900">
                Talk to MD Abrahim Directly
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                  Contact Us : <span className="text-emerald-900 font-extrabold">9332364068</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=Hello%20Insurance%20Sathi,%20I%20would%20like%20to%20consult%20regarding%20insurance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-800 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Now</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl bg-brand-navy-950 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-brand-navy transition-colors"
            >
              <span>Visit Office</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
