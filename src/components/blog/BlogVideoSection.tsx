"use client";

import * as React from "react";
import { Sparkles, Clock, MessageCircle, Video, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

export interface BlogVideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  duration: string;
  badge: string;
  topic: string;
  keyPoints: readonly string[];
}

const BLOG_VIDEOS: readonly BlogVideoItem[] = [
  {
    id: "video-1",
    title: "Comprehensive Policyholder Advisory & Claim Guidance",
    description:
      "MD Abrahim breaks down how transparent medical disclosures protect your family from rejection and the exact steps to revive lapsed policies smoothly without losing accrued bonuses.",
    src: "/images/blog/BlogVedio1.mp4",
    poster: "/images/blog/cashless-hospital-claims.webp",
    duration: "1:37 min",
    badge: "Advisory Reel",
    topic: "Claims & Advisory",
    keyPoints: [
      "Transparent pre-existing disease disclosures",
      "Cashless TPA hospital pre-authorization steps",
    ],
  },
  {
    id: "video-2",
    title: "Quick Insurance Need Analysis: Choosing Right Health & Life Cover",
    description:
      "MD Abrahim explains how to accurately calculate sum insured for family health, navigate room-rent limits, ICU sub-caps, and avoid fine-print deductions. Learn how to compare 20+ leading insurers objectively to lock in optimal coverage without overpaying premiums.",
    src: "/images/blog/BlogVedio2.mp4",
    poster: "/images/blog/health-waiting-periods.webp",
    duration: "0:30 min",
    badge: "Quick Explainer",
    topic: "Need Analysis & Planning",
    keyPoints: [
      "Family floater vs individual sum insured sizing",
      "Room-rent caps & proportional deduction shield",
      "Unbiased multi-insurer objective comparison",
    ],
  },
  {
    id: "video-3",
    title: "Essential Policy Documentation & Settlement Tips",
    description:
      "Crucial checklist items every policyholder in Barasat, Madhyamgram, and Habra needs ready before submitting hospital reimbursement paperwork to avoid queries and delays.",
    src: "/images/blog/BlogVedio3.mp4",
    poster: "/images/blog/lapsed-policy-revival.webp",
    duration: "0:27 min",
    badge: "Quick Tip Reel",
    topic: "Documentation Tips",
    keyPoints: [
      "Discharge summary & itemized bills verification",
      "Doctor prescription & pharmacy receipt checklist",
    ],
  },
];

export function BlogVideoSection() {
  return (
    <section
      id="video-guides"
      aria-labelledby="video-guides-heading"
      className="bg-gradient-to-b from-white via-slate-50/70 to-slate-100/60 py-12 sm:py-16 border-b border-slate-200/80"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-royal/20 bg-brand-royal-50 px-4 py-1.5 text-xs font-bold text-brand-royal shadow-xs mb-4">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            <span>Watch &amp; Learn • Video Advisory Guides</span>
          </div>

          <h2
            id="video-guides-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F2E8A] leading-tight"
          >
            <LogoHeadingText>Expert Insurance Video Guides by MD Abrahim</LogoHeadingText>
          </h2>

          <div
            className="mt-3 h-1 w-32 rounded-full bg-logo-gradient mx-auto"
            aria-hidden="true"
          />

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Watch practical explanations on policy selection, claim documentation, and avoiding fine-print pitfalls filmed directly at our Duckbanglow More office.
          </p>
        </div>

        {/* 3-Column Video Cards Grid: Equal Heights Across All 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {BLOG_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="group flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#0284C7]/50 hover:shadow-card-hover"
            >
              {/* Equal-Height Video Player Frame Across All 3 Boxes */}
              <div className="relative w-full h-[360px] sm:h-[400px] md:h-[420px] bg-slate-950 flex items-center justify-center overflow-hidden">
                {/* Format Badge Overlay (Top Left) */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/15 pointer-events-none shadow-md">
                  <Video className="h-3 w-3 text-brand-orange" aria-hidden="true" />
                  <span>{video.badge}</span>
                </div>

                {/* Duration Badge Overlay (Top Right) */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-amber-300 border border-white/15 pointer-events-none shadow-md">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  <span>{video.duration}</span>
                </div>

                {/* Video HTML5 Player */}
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  preload="none"
                  playsInline
                  className="w-full h-full object-contain bg-slate-950"
                  aria-label={video.title}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Card Content: flex-1 ensures equal footer alignment */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-extrabold text-brand-royal uppercase tracking-wider text-[11px]">
                      {video.topic}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      MD Abrahim
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-extrabold text-[#0F2E8A] leading-snug group-hover:text-[#0284C7] transition-colors min-h-[44px]">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {video.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {video.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link Aligned at Bottom */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello MD Abrahim, I watched your video "${video.title}" on Insurance Sathi and have a query.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Ask MD Abrahim</span>
                  </a>

                  <span className="text-[11px] font-semibold text-slate-400">
                    Barasat Office
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
