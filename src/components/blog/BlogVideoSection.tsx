"use client";

import * as React from "react";
import {
  Sparkles,
  Clock,
  MessageCircle,
  Video,
  ShieldCheck,
  CheckCircle2,
  Globe,
} from "lucide-react";
import type { BlogVideoItem } from "@/types";
import { getAllBlogVideos } from "@/data/blogs";
import { SITE_CONFIG } from "@/data/site";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

export type { BlogVideoItem };

export function BlogVideoSection() {
  const videos = getAllBlogVideos();
  const gridRef = React.useRef<HTMLDivElement>(null);

  const handleVideoPlay = React.useCallback((activeVideo: HTMLVideoElement) => {
    const container = gridRef.current;
    if (!container) return;

    const allVideos = container.querySelectorAll("video");
    allVideos.forEach((video) => {
      if (video !== activeVideo && !video.paused) {
        video.pause();
      }
    });
  }, []);

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
            <span>Watch &amp; Learn • {videos.length} Video Advisory Guides</span>
          </div>

          <h2
            id="video-guides-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F2E8A] leading-tight"
          >
            <LogoHeadingText>Insurance Awareness Video Guides</LogoHeadingText>
          </h2>

          <div
            className="mt-3 h-1 w-32 rounded-full bg-logo-gradient mx-auto"
            aria-hidden="true"
          />

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Short, practical Hindi explainers covering health risk pooling, protecting decades of family savings, robotic surgery coverage, personal accident readiness, and why renewal premiums rise with medical inflation—backed by personal guidance from <strong>MD Abrahim</strong> at our Barasat office.
          </p>
        </div>

        {/* Balanced 5-Card Responsive Grid: 3-up on Row 1, 2-up on Row 2 at Desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 items-stretch"
        >
          {videos.map((video, index) => {
            const isSecondRowDesktop = index >= 3;
            const isLastOddTablet = index === videos.length - 1 && videos.length % 2 === 1;
            const spanClasses = [
              isSecondRowDesktop ? "lg:col-span-3" : "lg:col-span-2",
              isLastOddTablet ? "md:col-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <article
                key={video.id}
                className={`group flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#0284C7]/50 hover:shadow-card-hover ${spanClasses}`}
              >
                {/* Video Player Frame */}
                <div className="relative w-full h-[360px] sm:h-[400px] md:h-[420px] bg-slate-950 flex items-center justify-center overflow-hidden">
                  {/* Top-Left Format & New Badges */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/15 shadow-md">
                      <Video className="h-3 w-3 text-brand-orange" aria-hidden="true" />
                      <span>{video.badge}</span>
                    </span>
                    {video.isNew && (
                      <span className="inline-flex items-center rounded-full bg-brand-orange px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                        New
                      </span>
                    )}
                  </div>

                  {/* Top-Right Duration Badge */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-amber-300 border border-white/15 pointer-events-none shadow-md">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    <span>{video.duration}</span>
                  </div>

                  {/* HTML5 Video Player */}
                  <video
                    poster={video.poster}
                    controls
                    preload="none"
                    playsInline
                    onPlay={(event) => handleVideoPlay(event.currentTarget)}
                    className="w-full h-full object-contain bg-slate-950"
                    aria-label={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Video Card Content */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-extrabold text-brand-royal uppercase tracking-wider text-[11px]">
                        {video.topic}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                        <Globe className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                        {video.language}
                      </span>
                    </div>

                    <h3 className="mt-2 text-base font-extrabold text-[#0F2E8A] leading-snug group-hover:text-[#0284C7] transition-colors min-h-[44px]">
                      {video.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {video.description}
                    </p>

                    {/* Key Takeaways Checklist */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {video.keyPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="leading-tight">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Advisory Action Row */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
                        `Hello MD Abrahim, I watched the video "${video.title}" on Insurance Sathi and have a question.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Ask MD Abrahim</span>
                    </a>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      Insurance Sathi
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
