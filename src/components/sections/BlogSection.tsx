import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { BLOGS_DATA } from "@/data/blogs";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

/**
 * Zero-JS GPU-Composited Insurance Sathi Knowledge Presenter Studio Illustration
 */
function AnimatedBlogStudioVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md select-none">
      {/* Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-4 rounded-full bg-gradient-to-tr from-[#0284C7]/15 via-[#16A34A]/10 to-[#FF6B00]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <svg
          viewBox="0 0 420 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="deskFront" x1="65" y1="228" x2="365" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F2E8A" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="deskTop" x1="50" y1="215" x2="380" y2="235" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1D4ED8" />
              <stop offset="1" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="160" y1="168" x2="265" y2="225" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FACC15" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="185" y1="78" x2="245" y2="168" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDBA74" />
              <stop offset="1" stopColor="#FB923C" />
            </linearGradient>
          </defs>

          {/* Studio Window / Blinds Backdrop */}
          <rect x="115" y="45" width="140" height="145" rx="14" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2.5" />
          <g stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round">
            <line x1="128" y1="68" x2="242" y2="68" />
            <line x1="128" y1="84" x2="242" y2="84" />
            <line x1="128" y1="100" x2="242" y2="100" />
            <line x1="128" y1="116" x2="242" y2="116" />
            <line x1="128" y1="132" x2="242" y2="132" />
            <line x1="128" y1="148" x2="242" y2="148" />
          </g>

          {/* Floating Animated Guide Badge (Top Right) */}
          <g className="anim-float">
            <rect x="296" y="48" width="96" height="44" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" />
            <circle cx="314" cy="70" r="8" fill="#16A34A" />
            <path d="M310.5 70L313 72.5L317.5 67.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="328" y="62" width="50" height="5" rx="2.5" fill="#0F2E8A" />
            <rect x="328" y="72" width="34" height="4" rx="2" fill="#94A3B8" />
          </g>

          {/* Animated Friendly Advisor Character */}
          <g className="anim-float-slow">
            <path
              d="M158 220C160 184 182 170 214 170C246 170 268 184 270 220H158Z"
              fill="url(#shirtGrad)"
            />
            <path d="M196 171L214 192L232 171" fill="white" stroke="#EAB308" strokeWidth="2" />
            <rect x="203" y="156" width="22" height="20" rx="8" fill="#F59E6C" />
            <rect x="176" y="74" width="76" height="88" rx="36" fill="url(#skinGrad)" />
            <circle cx="174" cy="118" r="9" fill="#FB923C" />
            <circle cx="254" cy="118" r="9" fill="#FB923C" />
            <path
              d="M174 108C172 78 190 58 216 60C240 62 256 76 254 106C245 92 230 85 212 86C195 87 183 94 174 108Z"
              fill="#3B1D0E"
            />
            <circle cx="198" cy="114" r="13" fill="white" fillOpacity="0.9" stroke="#1E293B" strokeWidth="2.8" />
            <circle cx="230" cy="114" r="13" fill="white" fillOpacity="0.9" stroke="#1E293B" strokeWidth="2.8" />
            <line x1="211" y1="114" x2="217" y2="114" stroke="#1E293B" strokeWidth="2.8" />
            <circle cx="200" cy="114" r="4" fill="#0F172A" />
            <circle cx="232" cy="114" r="4" fill="#0F172A" />
            <circle cx="201.5" cy="112.5" r="1.4" fill="white" />
            <circle cx="233.5" cy="112.5" r="1.4" fill="white" />
            <path d="M198 135C204 146 224 146 230 135H198Z" fill="white" stroke="#9A3412" strokeWidth="2" />
            <path d="M172 114C172 80 190 65 214 65C238 65 256 80 256 114" stroke="#0284C7" strokeWidth="5.5" strokeLinecap="round" />
            <rect x="163" y="104" width="13" height="24" rx="6" fill="#0F2E8A" />
            <rect x="252" y="104" width="13" height="24" rx="6" fill="#0F2E8A" />
            <path d="M254 126C246 138 234 141 224 140" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="222" cy="140" r="3.5" fill="#1E293B" />

            <g className="anim-float">
              <circle cx="185" cy="212" r="10" fill="#FDBA74" />
              <circle cx="243" cy="212" r="10" fill="#FDBA74" />
            </g>
          </g>

          {/* Studio Monitor on Desk (Right) */}
          <rect x="276" y="156" width="84" height="54" rx="8" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2.5" />
          <rect x="282" y="162" width="72" height="42" rx="4" fill="#F8FAFC" />
          <path d="M312 210H324L328 220H308L312 210Z" fill="#94A3B8" />
          <rect x="290" y="174" width="42" height="5" rx="2.5" fill="#0284C7" className="anim-pulse-soft" />
          <rect x="290" y="185" width="52" height="4" rx="2" fill="#CBD5E1" />
          <rect x="290" y="193" width="38" height="4" rx="2" fill="#CBD5E1" />

          {/* Broadcast Desk */}
          <rect x="78" y="218" width="290" height="16" rx="5" fill="url(#deskTop)" />
          <rect x="92" y="234" width="262" height="122" rx="6" fill="url(#deskFront)" />
          <rect x="92" y="234" width="262" height="5" fill="#FF6B00" fillOpacity="0.9" />

          {/* Studio Camera on Tripod (Left) */}
          <g>
            <line x1="78" y1="215" x2="42" y2="365" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="82" y1="215" x2="82" y2="368" stroke="#1E293B" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="86" y1="215" x2="122" y2="365" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
            <rect x="72" y="200" width="20" height="18" rx="4" fill="#1E293B" />
            <rect x="38" y="152" width="78" height="50" rx="10" fill="#1E293B" />
            <rect x="45" y="160" width="54" height="34" rx="5" fill="#E0F2FE" />
            <circle cx="72" cy="174" r="7" fill="#FDBA74" />
            <path d="M60 194C61 184 66 181 72 181C78 181 83 184 84 194H60Z" fill="#F59E0B" />
            <path d="M116 164L132 156V198L116 190V164Z" fill="#0F172A" />
            <circle cx="106" cy="163" r="3.8" fill="#EF4444" className="anim-pulse-soft" />
          </g>
        </svg>

        {/* Real Official Insurance Sathi Logo Mounted on the Studio Desk */}
        <div className="anim-pulse-soft absolute bottom-[13%] left-[53%] -translate-x-1/2 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white/95 p-2 shadow-lg ring-2 ring-white/40">
          <Image
            src="/images/logo.webp"
            alt="Insurance Sathi"
            width={64}
            height={58}
            sizes="64px"
            style={{ width: "auto" }}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export function BlogSection() {
  const featuredBlogs = BLOGS_DATA.slice(0, 3);

  return (
    <section
      id="blog"
      aria-labelledby="blog-section-heading"
      className="bg-white border-t border-brand-border/60"
    >
      <div className="container-site">
        {/* Left-Aligned Header */}
        <div className="max-w-3xl text-left">
          <h2
            id="blog-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F2E8A]"
          >
            <LogoHeadingText>Insurance Sathi Blogs</LogoHeadingText>
          </h2>
          <div
            className="mt-2.5 h-1 w-28 rounded-full bg-logo-gradient"
            aria-hidden="true"
          />
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Welcome to our blog section, where you&apos;ll find informative articles, practical claim tips, and unbiased insights by MD Abrahim to enhance your insurance knowledge.
          </p>
        </div>

        {/* Two-Column Content Split: Left Studio Visual + Right Horizontal Stacked Cards */}
        <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Animated Presenter Desk */}
          <div className="lg:col-span-5">
            <AnimatedBlogStudioVisual />
          </div>

          {/* Right Column: 3 Stacked Horizontal Blog Cards + View All CTA */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {featuredBlogs.map((blog) => {
              const blogUrl = `/blog/${blog.slug}`;

              return (
                <Link
                  key={blog.id}
                  href={blogUrl}
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 shadow-[0_6px_24px_-6px_rgba(15,46,138,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0284C7]/40 hover:shadow-[0_14px_30px_-8px_rgba(15,46,138,0.14)]"
                >
                  {/* Thumbnail Cover */}
                  <div className="relative h-40 w-full sm:h-24 sm:w-36 shrink-0 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/70">
                    {blog.coverImage ? (
                      <Image
                        src={blog.coverImage}
                        alt={blog.coverAlt || blog.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 144px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-brand-navy-50 text-xs font-bold text-[#0F2E8A]">
                        Insurance Guide
                      </div>
                    )}
                  </div>

                  {/* Text Body */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-bold text-[#FF6B00]">{blog.category}</span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1 text-slate-400 font-medium">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="mt-1 text-sm sm:text-base font-extrabold text-[#0F2E8A] leading-snug line-clamp-1 group-hover:text-[#0284C7] transition-colors">
                      {blog.title}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Subtle Hover Arrow Indicator */}
                  <div className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all group-hover:bg-[#0F2E8A] group-hover:text-white">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}

            {/* View All CTA Button */}
            <div className="pt-2">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F2E8A] to-[#0284C7] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#0F2E8A]/20 transition-all hover:shadow-lg hover:brightness-110 active:scale-[0.98]"
              >
                <span>View All</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
