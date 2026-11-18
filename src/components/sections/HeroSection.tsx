import * as React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Button } from "@/components/ui/Button";
import {
  AnimatedInsuranceSymbol,
  type InsuranceSymbolId,
} from "@/components/brand/AnimatedInsuranceSymbol";
import { HeroBannerSlider } from "./HeroBannerSlider";
import { cn } from "@/lib/utils";

interface HeroInsuranceOption {
  id: InsuranceSymbolId;
  title: string;
  subtitle: string;
  href: string;
  lightBg: string;
  textColor: string;
  borderColor: string;
  hoverBorder: string;
  badge: string;
}

// The 8 authentic insurance options with Animated Real-Visual Symbols
const HERO_INSURANCE_OPTIONS: readonly HeroInsuranceOption[] = [
  {
    id: "life-insurance",
    title: "Life Insurance",
    subtitle: "Family Protection",
    href: "/insurance/life-insurance",
    lightBg: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    hoverBorder: "hover:border-orange-400/70",
    badge: "Essential",
  },
  {
    id: "health-insurance",
    title: "Health Insurance",
    subtitle: "Cashless Mediclaim",
    href: "/insurance/health-insurance",
    lightBg: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    hoverBorder: "hover:border-red-400/70",
    badge: "100% Cashless",
  },
  {
    id: "motor-insurance",
    title: "Motor Insurance",
    subtitle: "Car & Bike Cover",
    href: "/insurance/motor-insurance",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    hoverBorder: "hover:border-blue-400/70",
    badge: "Zero-Dep",
  },
  {
    id: "home-insurance",
    title: "Home Insurance",
    subtitle: "Structure & Content",
    href: "/insurance/home-insurance",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-400/70",
    badge: "Griha Raksha",
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    subtitle: "Worldwide Medical",
    href: "/insurance/travel-insurance",
    lightBg: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-400/70",
    badge: "Global Visa",
  },
  {
    id: "business-insurance",
    title: "Business Insurance",
    subtitle: "Commercial & Fire",
    href: "/insurance/business-insurance",
    lightBg: "bg-cyan-50",
    textColor: "text-cyan-700",
    borderColor: "border-cyan-200",
    hoverBorder: "hover:border-cyan-400/70",
    badge: "SME Package",
  },
  {
    id: "investment-plans",
    title: "Investment Plans",
    subtitle: "Guaranteed & ULIP",
    href: "/insurance/investment-plans",
    lightBg: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
    hoverBorder: "hover:border-amber-400/70",
    badge: "Tax-Free 10(10D)",
  },
  {
    id: "personal-accident",
    title: "Personal Accident",
    subtitle: "Disability Shield",
    href: "/insurance/personal-accident-insurance",
    lightBg: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-200",
    hoverBorder: "hover:border-indigo-400/70",
    badge: "24/7 Cover",
  },
] as const;

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to Insurance Sathi"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50/30 via-slate-50/40 to-white"
    >
      {/* Decorative ambient background rings */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#FF6B00]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-32 h-[480px] w-[480px] rounded-full bg-[#0284C7]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Main Hero Split Grid: Mobile = Image Slider on TOP | Desktop = Content Left, Slider Right */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column (Desktop) / Bottom (Mobile): Optimized Hero Copy & Conversion Actions */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-start text-left">
            {/* Brand Positioning Badge styled with Logo Colors */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-gradient-to-r from-orange-50 via-emerald-50 to-sky-50 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F2E8A] shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#FF6B00]" aria-hidden="true" />
              <span>#WE DON&apos;T SELL, WE GUIDE.</span>
            </div>

            {/* Optimized High-Impact Headline using Official Logo Color Combination */}
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-[1.12] text-[#0F2E8A]">
              Trusted{" "}
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#16A34A] to-[#0284C7] bg-clip-text text-transparent">
                Health, Term, Life &amp; Motor
              </span>{" "}
              Insurance Guidance
            </h1>

            {/* Logo 3-Color Umbrella Accent Bar */}
            <div
              className="mt-3.5 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#16A34A] to-[#0284C7]"
              aria-hidden="true"
            />

            {/* Concise, Benefit-Driven Subheadline */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Compare transparent policies from 20+ leading Indian insurers under one umbrella—with zero sales pressure. From selecting the right family cover to dedicated claim documentation support,{" "}
              <strong className="text-[#0F2E8A] font-bold">Insurance Sathi</strong>{" "}
              stands beside you at every step.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full sm:w-auto shadow-md shadow-[#FF6B00]/30 font-bold"
                >
                  Get Free Expert Guidance
                </Button>
              </Link>

              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=Hello%20Insurance%20Sathi,%20I%20would%20like%20to%20compare%20insurance%20plans.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={<MessageCircle className="h-4 w-4 text-[#16A34A]" />}
                  className="w-full sm:w-auto border-[#16A34A]/30 bg-emerald-50 text-emerald-800 hover:bg-[#16A34A] hover:text-white font-bold"
                >
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Trust Footnote Strip */}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#FF6B00]" aria-hidden="true" />
                Duckbanglow More, Barasat
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" aria-hidden="true" />
                20+ Top Insurance Partners
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0284C7]" aria-hidden="true" />
                Zero-Fee Unbiased Advisory
              </span>
            </div>
          </div>

          {/* Right Column (Desktop) / Top (Mobile): Isolated Client Island Slider */}
          <div className="order-1 lg:order-2 lg:col-span-6 w-full">
            <HeroBannerSlider />
          </div>
        </div>

        {/* ================================================================== */}
        {/* ANIMATED REAL-VISUAL CARDS: ALL INSURANCE OPTIONS UNDER ONE ROOF   */}
        {/* ================================================================== */}
        <div className="mt-10 pt-4 border-t border-slate-200/80">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#FF6B00]">
                Explore Protection Plans
              </p>
              <h2 className="mt-0.5 text-xl sm:text-2xl font-black tracking-tight text-[#0F2E8A]">
                All{" "}
                <span className="bg-gradient-to-r from-[#FF6B00] via-[#16A34A] to-[#0284C7] bg-clip-text text-transparent">
                  Insurance Options
                </span>{" "}
                Under One Roof
              </h2>
            </div>
            <Link
              href="/insurance"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#0284C7]/25 bg-sky-50/70 px-3.5 py-1.5 text-xs font-bold text-[#0F2E8A] hover:bg-[#0F2E8A] hover:text-white transition-colors"
            >
              <span>View All Categories</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 8 Interactive Animated Real-Visual Symbol Cards (Server Rendered, Zero JS!) */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
            {HERO_INSURANCE_OPTIONS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "group relative flex flex-col items-center justify-between rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-sm p-3.5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-card-hover",
                  item.hoverBorder
                )}
              >
                <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <AnimatedInsuranceSymbol
                    id={item.id}
                    className="h-16 w-16 drop-shadow-xs"
                  />
                </div>

                <div className="mt-2.5">
                  <h3 className="text-xs font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-medium text-slate-500 mt-0.5 leading-tight">
                    {item.subtitle}
                  </p>
                </div>

                <span
                  className={cn(
                    "mt-2.5 inline-block rounded-full px-2.5 py-0.5 text-[9px] font-bold border whitespace-nowrap",
                    item.lightBg,
                    item.textColor,
                    item.borderColor
                  )}
                >
                  {item.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
