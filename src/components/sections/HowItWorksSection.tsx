import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

interface ProcessStepItem {
  id: number;
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: readonly ProcessStepItem[] = [
  {
    id: 1,
    number: "01",
    title: "Tell Us About Yourself",
    description:
      "Share your family needs, health background, and budget to receive transparent comparisons across 20+ leading Indian insurers.",
  },
  {
    id: 2,
    number: "02",
    title: "Compare & Select The Right Plan",
    description:
      "Review waiting periods, room-rent limits, exclusions, and coverage features side-by-side so you pick the truly best-fit policy.",
  },
  {
    id: 3,
    number: "03",
    title: "Fast & Hassle-Free Issuance",
    description:
      "We assist with accurate proposal disclosures, KYC verification, and seamless documentation so your policy bond arrives smoothly.",
  },
  {
    id: 4,
    number: "04",
    title: "Always There For You",
    description:
      "Our dedicated support continues well after purchase—helping with renewals, nominee updates, revivals, and claim documentation.",
  },
];

/**
 * Zero-JS GPU-Composited Animated Step Illustrations
 */
function AnimatedStepVisual({ stepId }: { stepId: number }) {
  switch (stepId) {
    case 1:
      return (
        <svg viewBox="0 0 88 76" fill="none" className="h-16 w-20 mx-auto" aria-hidden="true">
          <rect x="10" y="10" width="68" height="52" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
          <rect x="10" y="10" width="68" height="12" rx="10" fill="#0284C7" />
          <circle cx="18" cy="16" r="2" fill="white" />
          <circle cx="24" cy="16" r="2" fill="#FDE047" />
          <circle cx="30" cy="16" r="2" fill="#4ADE80" />
          <circle cx="27" cy="40" r="8" fill="#0F2E8A" />
          <circle cx="27" cy="38" r="3" fill="white" />
          <path d="M22 45C23 42.5 25 41.5 27 41.5C29 41.5 31 42.5 32 45" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="40" y="33" width="26" height="4" rx="2" fill="#0284C7" className="anim-pulse-soft" />
          <rect x="40" y="41" width="22" height="3.5" rx="1.75" fill="#93C5FD" />
          <rect x="40" y="48" width="16" height="3.5" rx="1.75" fill="#CBD5E1" />
          <g className="anim-float">
            <circle cx="72" cy="56" r="9" fill="#16A34A" stroke="white" strokeWidth="2" />
            <path d="M68.5 56L71 58.5L75.5 53.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 2:
      return (
        <svg viewBox="0 0 88 76" fill="none" className="h-16 w-20 mx-auto" aria-hidden="true">
          <g>
            <rect x="10" y="18" width="28" height="42" rx="7" fill="white" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="15" y="25" width="18" height="3.5" rx="1.75" fill="#94A3B8" />
            <rect x="15" y="33" width="14" height="3" rx="1.5" fill="#CBD5E1" />
            <rect x="15" y="40" width="18" height="3" rx="1.5" fill="#CBD5E1" />
          </g>
          <g>
            <rect x="50" y="18" width="28" height="42" rx="7" fill="white" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="55" y="25" width="18" height="3.5" rx="1.75" fill="#94A3B8" />
            <rect x="55" y="33" width="14" height="3" rx="1.5" fill="#CBD5E1" />
            <rect x="55" y="40" width="18" height="3" rx="1.5" fill="#CBD5E1" />
          </g>
          <g className="anim-float">
            <rect x="28" y="12" width="32" height="50" rx="8" fill="#0F2E8A" stroke="white" strokeWidth="2.5" />
            <circle cx="44" cy="28" r="8" fill="#FF6B00" />
            <path d="M40.5 28.2L43 30.7L48 25.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="35" y="42" width="18" height="3.5" rx="1.75" fill="#38BDF8" />
            <rect x="38" y="49" width="12" height="3" rx="1.5" fill="#93C5FD" />
          </g>
        </svg>
      );

    case 3:
      return (
        <svg viewBox="0 0 88 76" fill="none" className="h-16 w-20 mx-auto" aria-hidden="true">
          <rect x="16" y="14" width="44" height="50" rx="8" fill="white" stroke="#0284C7" strokeWidth="2.2" />
          <rect x="23" y="23" width="24" height="4" rx="2" fill="#0F2E8A" />
          <rect x="23" y="32" width="30" height="3.2" rx="1.6" fill="#BAE6FD" />
          <rect x="23" y="39" width="26" height="3.2" rx="1.6" fill="#BAE6FD" />
          <rect x="23" y="46" width="18" height="3.2" rx="1.6" fill="#BAE6FD" />
          <g className="anim-orbit-bob">
            <rect x="42" y="30" width="34" height="24" rx="6" fill="#0F2E8A" stroke="white" strokeWidth="2" />
            <rect x="42" y="36" width="34" height="5" fill="#0284C7" />
            <rect x="47" y="45" width="9" height="4.5" rx="1.5" fill="#FDE047" />
          </g>
          <g className="anim-pulse-soft">
            <circle cx="66" cy="20" r="9" fill="#16A34A" stroke="white" strokeWidth="2" />
            <path d="M62.5 20L65 22.5L69.5 17.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 88 76" fill="none" className="h-16 w-20 mx-auto" aria-hidden="true">
          <circle cx="44" cy="38" r="26" fill="#EFF6FF" stroke="#BAE6FD" strokeWidth="1.5" className="anim-pulse-soft" />
          <circle cx="33" cy="28" r="5.5" fill="#0F2E8A" />
          <path d="M24 52V41C24 37.5 27.5 35.5 33 35.5C38.5 35.5 41 37.5 41 41V52H24Z" fill="#0F2E8A" />
          <circle cx="55" cy="28" r="5.5" fill="#0284C7" />
          <path d="M47 52V41C47 37.5 49.5 35.5 55 35.5C60.5 35.5 64 37.5 64 41V52H47Z" fill="#0284C7" />
          <g className="anim-float">
            <path
              d="M44 10L53 13.8V19.5C53 24.4 49.2 28.1 44 30C38.8 28.1 35 24.4 35 19.5V13.8L44 10Z"
              fill="#FF6B00"
              stroke="white"
              strokeWidth="2"
            />
            <path d="M40.5 20L43 22.5L47.5 17.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );
  }
}

/**
 * Continuous Connected Outline Numbers (1 — 2 — 3 — 4) SVG Ribbon
 */
function ConnectedProcessNumbersRibbon() {
  return (
    <div className="relative hidden lg:block w-full mt-10 mb-6 select-none" aria-hidden="true">
      <div
        className="pointer-events-none absolute inset-x-12 inset-y-2 opacity-35"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1.4px, transparent 1.4px)",
          backgroundSize: "18px 18px",
        }}
      />

      <svg
        viewBox="0 0 1120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-auto"
      >
        <defs>
          <linearGradient id="ribbonLogoGrad" x1="80" y1="65" x2="1040" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="35%" stopColor="#16A34A" />
            <stop offset="70%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F2E8A" />
          </linearGradient>
        </defs>

        <path
          d="M 155 112 L 965 112"
          stroke="url(#ribbonLogoGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {[
          { x: 140, n: "1" },
          { x: 420, n: "2" },
          { x: 700, n: "3" },
          { x: 980, n: "4" },
        ].map((item) => (
          <text
            key={item.n}
            x={item.x}
            y="108"
            textAnchor="middle"
            fontSize="118"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            fill="white"
            stroke="url(#ribbonLogoGrad)"
            strokeWidth="3.2"
          >
            {item.n}
          </text>
        ))}
      </svg>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-white border-t border-brand-border/60"
    >
      <div className="container-site">
        {/* Top Left-Aligned Editorial Header */}
        <div className="max-w-3xl text-left">
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F2E8A] leading-tight"
          >
            <LogoHeadingText>We Have The Best Team And The Best Process</LogoHeadingText>
          </h2>

          <div
            className="mt-2.5 h-1 w-32 rounded-full bg-logo-gradient"
            aria-hidden="true"
          />

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Compare and choose the right insurance plans hassle-free with{" "}
            <strong className="text-[#0F2E8A] font-bold">Insurance Sathi</strong>. Our expert guidance helps you secure the right coverage for your family&apos;s future—acting as your trusted ally at every stage to make informed decisions.
          </p>

          <div className="mt-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F2E8A] to-[#0284C7] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#0F2E8A]/20 transition-all hover:shadow-lg hover:brightness-110 active:scale-[0.98]"
            >
              <span>Get started.</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Continuous Connected Outline Numbers 1 — 2 — 3 — 4 Ribbon */}
        <ConnectedProcessNumbersRibbon />

        {/* 4 Process Cards Directly Aligned Beneath 1, 2, 3, 4 */}
        <div className="mt-8 lg:mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-center rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0284C7]/40 hover:bg-white hover:shadow-card-hover"
            >
              <span className="lg:hidden mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-logo-gradient text-xs font-black text-white shadow-xs">
                {item.id}
              </span>

              <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
                <AnimatedStepVisual stepId={item.id} />
              </div>

              <h3 className="text-base font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
