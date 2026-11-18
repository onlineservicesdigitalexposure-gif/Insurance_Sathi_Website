"use client";

import * as React from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, MotionConfig } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  BookOpen,
  IndianRupee,
  Landmark,
  FileWarning,
  HeartHandshake,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";

const LAST_UPDATED = "18 November 2026";

interface TocItem {
  id: string;
  number: string;
  label: string;
  dotColor: string;
  activeBg: string;
}

const TOC_ITEMS: TocItem[] = [
  {
    id: "advisory-role",
    number: "01",
    label: "Our Independent Advisory Role",
    dotColor: "bg-sky-500",
    activeBg: "hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200",
  },
  {
    id: "insurer-authority",
    number: "02",
    label: "Insurer Authority on Approvals & Claims",
    dotColor: "bg-amber-500",
    activeBg: "hover:bg-amber-50 hover:text-amber-800 hover:border-amber-200",
  },
  {
    id: "honest-disclosures",
    number: "03",
    label: "Honest Disclosures Protect Your Family",
    dotColor: "bg-emerald-500",
    activeBg: "hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200",
  },
  {
    id: "quotes-premiums",
    number: "04",
    label: "Illustrative Quotes, Premiums & Taxes",
    dotColor: "bg-violet-500",
    activeBg: "hover:bg-violet-50 hover:text-violet-800 hover:border-violet-200",
  },
  {
    id: "website-boundaries",
    number: "05",
    label: "Website Use & Service Boundaries",
    dotColor: "bg-cyan-500",
    activeBg: "hover:bg-cyan-50 hover:text-cyan-800 hover:border-cyan-200",
  },
  {
    id: "governing-law",
    number: "06",
    label: "Friendly Resolution & Barasat Jurisdiction",
    dotColor: "bg-rose-500",
    activeBg: "hover:bg-rose-50 hover:text-rose-800 hover:border-rose-200",
  },
];

const HERO_STANDARDS = [
  {
    label: "Transparent Advisory",
    detail: "Clear plan guidance, zero hidden sales claims",
    gradient: "from-sky-500/20 to-blue-500/20 border-sky-400/30 text-sky-200",
    dot: "bg-sky-400",
  },
  {
    label: "IRDAI-Aligned Conduct",
    detail: "All policies are issued by licensed insurers",
    gradient: "from-amber-500/20 to-orange-500/20 border-amber-400/30 text-amber-200",
    dot: "bg-amber-400",
  },
  {
    label: "Utmost Good Faith",
    detail: "Truthful disclosures keep future claims strong",
    gradient: "from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-emerald-200",
    dot: "bg-emerald-400",
  },
];

const DISCLOSURE_PILLARS = [
  {
    title: "Personal & Work Profile",
    detail:
      "Accurate date of birth, exact occupation or business risk category, and genuine annual income figures.",
    accent: "border-emerald-200 bg-gradient-to-br from-emerald-50/90 to-white",
    tagClass: "bg-emerald-100 text-emerald-800",
    tag: "Identity & Income",
  },
  {
    title: "Medical & Treatment History",
    detail:
      "Every existing health condition, past hospitalization, surgery, diagnostic test, and ongoing prescription medicine.",
    accent: "border-sky-200 bg-gradient-to-br from-sky-50/90 to-white",
    tagClass: "bg-sky-100 text-sky-800",
    tag: "Health Facts",
  },
  {
    title: "Lifestyle & Habits",
    detail:
      "Honest answers regarding smoking, tobacco, gutkha, alcohol intake, or high-risk hobbies asked in the proposal form.",
    accent: "border-amber-200 bg-gradient-to-br from-amber-50/90 to-white",
    tagClass: "bg-amber-100 text-amber-800",
    tag: "Lifestyle",
  },
  {
    title: "Existing Insurance Covers",
    detail:
      "Details of active life, term, or health policies already held with other companies to prevent underwriting discrepancies.",
    accent: "border-violet-200 bg-gradient-to-br from-violet-50/90 to-white",
    tagClass: "bg-violet-100 text-violet-800",
    tag: "Active Policies",
  },
];

const PREMIUM_FACTORS = [
  {
    title: "Medical & Tele-Underwriting Findings",
    detail:
      "Final premiums may include risk-based medical loadings or modified terms after insurer health screenings.",
    dot: "bg-violet-500",
  },
  {
    title: "Government Taxes & GST Rules",
    detail:
      "Applicable statutory taxes (including Goods and Services Tax) are levied as per prevailing Government of India notifications.",
    dot: "bg-sky-500",
  },
  {
    title: "Insurer Tariff & Age-Band Updates",
    detail:
      "Insurance companies revise base tariff schedules periodically or when an applicant crosses an age milestone.",
    dot: "bg-amber-500",
  },
  {
    title: "Direct Payment to Your Insurer",
    detail:
      "All insurance premiums should be paid directly to the respective insurance company via official online portals, UPI, cheque, or authorized receipts.",
    dot: "bg-emerald-500",
  },
];

interface TermCardProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  symbol: FeatureSymbolId;
  topBarClass: string;
  headerBgClass: string;
  badgeClass: string;
  borderClass: string;
  delay?: number;
  children: React.ReactNode;
}

function TermsSectionCard({
  id,
  number,
  title,
  subtitle,
  symbol,
  topBarClass,
  headerBgClass,
  badgeClass,
  borderClass,
  delay = 0,
  children,
}: TermCardProps) {
  return (
    <m.article
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`scroll-mt-24 overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${borderClass}`}
    >
      <div className={`h-1.5 w-full ${topBarClass}`} />
      <div className={`border-b border-slate-100 px-5 py-5 sm:px-7 ${headerBgClass}`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="shrink-0">
            <AnimatedFeatureSymbol id={symbol} className="h-14 w-14 drop-shadow-sm" />
          </div>
          <div className="min-w-0">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider ${badgeClass}`}
              >
                Clause {number}
              </span>
              <span className="text-xs font-medium text-slate-500">{subtitle}</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-[#0F2E8A] sm:text-2xl">
              <LogoHeadingText>{title}</LogoHeadingText>
            </h2>
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </m.article>
  );
}

export function TermsConditionsView() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
          {/* Vibrant Animated Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#081A4B] via-[#0F2E8A] to-[#123B75] text-white">
            {/* GPU CSS Ambient Orbs (Zero JS loop overhead) */}
            <div
              className="anim-pulse-soft pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#FF6B00]/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="anim-pulse-soft pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#0284C7]/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16A34A]/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="container-site relative z-10">
              <div className="mb-4 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span]:text-white/80 [&_svg]:text-blue-300/70">
                <Breadcrumb items={[{ label: "Terms & Conditions" }]} />
              </div>

              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                <m.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="lg:col-span-8"
                >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-100 backdrop-blur-md">
                <Scale className="h-4 w-4 text-[#FF922B]" />
                Advisory Standards &amp; Policyholder Guidelines
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <LogoHeadingText mode="dark">Terms &amp; Conditions</LogoHeadingText>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100/95 sm:text-base">
                Clear expectations build lasting trust. These Terms &amp; Conditions explain how{" "}
                <strong className="text-white">{SITE_CONFIG.name}</strong> assists policyholders,
                where an insurer&apos;s legal authority begins, and what every applicant should keep
                in mind before purchasing or servicing a policy.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-blue-100/90">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  <Clock className="h-3.5 w-3.5 text-[#FF922B]" />
                  Effective: {LAST_UPDATED}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5 text-[#38BDF8]" />
                  Barasat, North 24 Parganas, West Bengal
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#4ADE80]" />
                  Ethical Advisory Charter
                </span>
              </div>
            </m.div>

            {/* Right Animated Standards Strip */}
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <div className="space-y-2.5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white/90">
                  <Sparkles className="h-4 w-4 text-[#4ADE80]" />
                  Core Service Principles
                </div>
                {HERO_STANDARDS.map((item, idx) => (
                  <m.div
                    key={item.label}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    className={`rounded-xl border bg-gradient-to-r px-3.5 py-2.5 ${item.gradient}`}
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                      {item.label}
                    </div>
                    <p className="mt-0.5 pl-4 text-[11px] text-white/80">{item.detail}</p>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Main Content + Sticky Sidebar */}
      <section className="container-site">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left 8 Columns: Original Rewritten Clauses */}
          <div className="space-y-6 lg:col-span-8">
            {/* 01. Our Independent Advisory Role */}
            <TermsSectionCard
              id="advisory-role"
              number="01"
              title="Our Independent Advisory Role"
              subtitle="What we handle vs. what insurers issue"
              symbol="unbiased-advisory"
              topBarClass="bg-gradient-to-r from-[#0F2E8A] via-[#0284C7] to-[#38BDF8]"
              headerBgClass="bg-gradient-to-r from-sky-50/75 via-blue-50/40 to-white"
              badgeClass="bg-sky-100 text-sky-800"
              borderClass="border-sky-200/80"
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  <strong className="text-[#0F2E8A]">{SITE_CONFIG.name}</strong> (founded on{" "}
                  {SITE_CONFIG.owner.establishedDate} by {SITE_CONFIG.owner.name} at{" "}
                  {SITE_CONFIG.address.landmark}, Barasat) provides personal insurance consultation,
                  policy comparison explanations, paperwork assistance, renewal tracking, and claim
                  documentation guidance.
                </p>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
                    <p className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      What Insurance Sathi Does
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700">
                      <li>• Explains plan benefits, waiting periods, and exclusions simply</li>
                      <li>• Assists with proposal forms, KYC, and nominee endorsements</li>
                      <li>• Helps organize lapsed policy revivals &amp; claim documentation</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4">
                    <p className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-800">
                      <Landmark className="h-4 w-4 text-sky-600" />
                      What Licensed Insurers Own
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700">
                      <li>• Issuing the official insurance policy contract &amp; bond</li>
                      <li>• Setting coverage rules, sub-limits, and policy wordings</li>
                      <li>• Risk underwriting, claim adjudication, and payouts</li>
                    </ul>
                  </div>
                </div>

                <p className="rounded-xl border border-blue-200/80 bg-blue-50/60 px-4 py-3 text-xs leading-relaxed text-[#0F2E8A]">
                  <strong>Key Clarity:</strong> Insurance Sathi is an advisory and facilitation
                  office—not an underwriting insurance company. Your binding contract is always
                  directly with the IRDAI-registered Life, Health, or General insurer that issues
                  your policy.
                </p>
              </div>
            </TermsSectionCard>

            {/* 02. Insurer Authority on Approvals & Claims */}
            <TermsSectionCard
              id="insurer-authority"
              number="02"
              title="Insurer Authority on Approvals &amp; Claims"
              subtitle="Honest boundaries, zero false promises"
              symbol="insurer-authority"
              topBarClass="bg-gradient-to-r from-[#FF6B00] via-amber-500 to-yellow-500"
              headerBgClass="bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-white"
              badgeClass="bg-amber-100 text-amber-800"
              borderClass="border-amber-200/80"
              delay={0.04}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  We stand beside our clients with thorough paperwork preparation and prompt
                  follow-ups. At the same time, ethical advisory demands full honesty about what
                  rests outside any advisor&apos;s control:
                </p>

                <div className="space-y-2.5">
                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-4">
                    <p className="text-sm font-extrabold text-amber-950">
                      1. Policy Acceptance &amp; Underwriting Terms
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-amber-900/90">
                      Whether a proposal is approved at standard rates, accepted with a medical
                      loading/exclusion, postponed, or declined is decided exclusively by the
                      insurer&apos;s underwriting department.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-200/80 bg-orange-50/50 p-4">
                    <p className="text-sm font-extrabold text-orange-950">
                      2. Cashless &amp; Reimbursement Claim Outcomes
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-orange-900/90">
                      Every claim approval, partial deduction (such as non-payable consumables or
                      co-pays), or repudiation is determined strictly by the insurer and its
                      appointed Third-Party Administrator (TPA) under the policy wording and IRDAI
                      norms.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-4">
                    <p className="text-sm font-extrabold text-emerald-950">
                      3. Zero Guarantees or Illegal Rebates
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-emerald-900/90">
                      Insurance Sathi never guarantees claim settlement, guaranteed policy
                      issuance, or unauthorized premium discounts/rebates (which are strictly
                      prohibited under Indian insurance law).
                    </p>
                  </div>
                </div>
              </div>
            </TermsSectionCard>

            {/* 03. Honest Disclosures Protect Your Family */}
            <TermsSectionCard
              id="honest-disclosures"
              number="03"
              title="Honest Disclosures Protect Your Family"
              subtitle="Utmost Good Faith (Section 45, Insurance Act)"
              symbol="transparent-disclosure"
              topBarClass="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
              headerBgClass="bg-gradient-to-r from-emerald-50/75 via-green-50/40 to-white"
              badgeClass="bg-emerald-100 text-emerald-800"
              borderClass="border-emerald-200/80"
              delay={0.06}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  Indian insurance contracts rest on the legal principle of{" "}
                  <strong className="text-[#0F2E8A]">Utmost Good Faith</strong>{" "}
                  (<em>Uberrima Fides</em>) reinforced by Section 45 of the Insurance Act, 1938.
                  Sharing complete, truthful facts upfront is the single strongest shield against
                  future claim disputes.
                </p>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {DISCLOSURE_PILLARS.map((item) => (
                    <m.div
                      key={item.title}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className={`rounded-2xl border p-4 shadow-xs ${item.accent}`}
                    >
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${item.tagClass}`}
                      >
                        {item.tag}
                      </span>
                      <h3 className="mt-2 text-sm font-extrabold text-[#0F2E8A]">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                        {item.detail}
                      </p>
                    </m.div>
                  ))}
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-xs text-rose-900">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                  <p className="leading-relaxed">
                    <strong>Why This Matters:</strong> Hiding a pre-existing condition, past
                    surgery, or material personal detail can give the insurer legal grounds to
                    cancel the policy or reject a claim when your family needs funds most. Please
                    review every proposal entry carefully before signing or confirming OTP.
                  </p>
                </div>
              </div>
            </TermsSectionCard>

            {/* 04. Illustrative Quotes, Premiums & Taxes */}
            <TermsSectionCard
              id="quotes-premiums"
              number="04"
              title="Illustrative Quotes, Premiums &amp; Taxes"
              subtitle="Understanding indicative estimates & payments"
              symbol="premium-guidance"
              topBarClass="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500"
              headerBgClass="bg-gradient-to-r from-violet-50/75 via-purple-50/40 to-white"
              badgeClass="bg-violet-100 text-violet-800"
              borderClass="border-violet-200/80"
              delay={0.08}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  Any benefit illustration, sum assured example, or premium estimate discussed
                  online or at our desk is purely indicative until the insurer issues its final
                  approved schedule. Final payable amounts depend on:
                </p>

                <div className="space-y-2.5">
                  {PREMIUM_FACTORS.map((factor) => (
                    <div
                      key={factor.title}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 transition-colors hover:border-violet-200 hover:bg-violet-50/40"
                    >
                      <span
                        className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${factor.dot}`}
                      />
                      <div>
                        <p className="text-sm font-bold text-[#0F2E8A]">{factor.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                          {factor.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TermsSectionCard>

            {/* 05. Website Use & Service Boundaries */}
            <TermsSectionCard
              id="website-boundaries"
              number="05"
              title="Website Use &amp; Service Boundaries"
              subtitle="Educational content & realistic liability scope"
              symbol="policy-selection"
              topBarClass="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600"
              headerBgClass="bg-gradient-to-r from-cyan-50/75 via-sky-50/40 to-white"
              badgeClass="bg-cyan-100 text-cyan-800"
              borderClass="border-cyan-200/80"
              delay={0.1}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-200/80 bg-cyan-50/40 p-4">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-[#0F2E8A]">
                      <BookOpen className="h-4 w-4 text-cyan-600" />
                      Educational Guides &amp; Original Content
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Articles, FAQs, and visual guides on this website are prepared for general
                      policyholder awareness. They do not replace an insurer&apos;s official
                      brochure, terms sheet, or personalized tax/legal counsel. Copying or
                      republishing our original site content for commercial misuse is prohibited.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/40 p-4">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-[#0F2E8A]">
                      <FileWarning className="h-4 w-4 text-indigo-600" />
                      Third-Party Timelines &amp; Responsibility
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Insurance Sathi cannot be held financially liable for insurer claim
                      repudiations, hospital billing desk delays, TPA turnaround times, portal
                      outages, or consequences arising from inaccurate information furnished by an
                      applicant.
                    </p>
                  </div>
                </div>
              </div>
            </TermsSectionCard>

            {/* 06. Friendly Resolution & Barasat Jurisdiction */}
            <TermsSectionCard
              id="governing-law"
              number="06"
              title="Friendly Resolution &amp; Barasat Jurisdiction"
              subtitle="Direct dialogue first & Indian legal framework"
              symbol="local-presence"
              topBarClass="bg-gradient-to-r from-rose-500 via-pink-500 to-[#FF6B00]"
              headerBgClass="bg-gradient-to-r from-rose-50/75 via-pink-50/40 to-white"
              badgeClass="bg-rose-100 text-rose-800"
              borderClass="border-rose-200/80"
              delay={0.12}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <div className="rounded-2xl border border-rose-200/80 bg-gradient-to-r from-rose-50/70 via-white to-orange-50/60 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-[#FF6B00] text-white shadow-sm">
                      <HeartHandshake className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-[#0F2E8A]">
                        Talk to Us First — Local Walk-In Resolution
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        If any part of a policy quote, servicing timeline, or advisory conversation
                        feels unclear, please call or visit {SITE_CONFIG.owner.name} directly at
                        our Duckbanglow More, Barasat office so we can resolve it transparently.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  These Terms &amp; Conditions are governed by the laws of the{" "}
                  <strong className="text-[#0F2E8A]">Republic of India</strong>. Any unresolved
                  legal dispute arising out of website use or advisory facilitation by{" "}
                  {SITE_CONFIG.name} shall fall under the exclusive jurisdiction of the competent
                  courts located in{" "}
                  <strong className="text-[#0F2E8A]">
                    Barasat, North 24 Parganas, West Bengal
                  </strong>
                  . We may update these terms occasionally to reflect regulatory revisions, with
                  the latest effective date shown at the top of this page.
                </p>
              </div>
            </TermsSectionCard>
          </div>

          {/* Right 4 Columns: Sticky Colorful Sidebar */}
          <aside className="space-y-5 lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-24">
              {/* Interactive Quick-Jump TOC */}
              <m.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm"
              >
                <div className="h-1.5 w-full bg-logo-gradient" />
                <div className="p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#0F2E8A]">
                    Quick Clause Navigator
                  </p>
                  <nav aria-label="Terms and Conditions Clauses" className="mt-3 space-y-1.5">
                    {TOC_ITEMS.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex items-center gap-2.5 rounded-xl border border-transparent px-3 py-2 text-xs font-semibold text-slate-700 transition-all ${item.activeBg}`}
                      >
                        <span className={`h-2 w-2 shrink-0 rounded-full ${item.dotColor}`} />
                        <span className="font-extrabold text-slate-400">{item.number}</span>
                        <span className="truncate">{item.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </m.div>

              {/* IRDAI Statutory Solicitation Notice Card */}
              <m.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-5 shadow-sm"
              >
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-900">
                  <IndianRupee className="h-3.5 w-3.5" />
                  IRDAI Consumer Notice
                </div>
                <h3 className="mt-3 text-base font-extrabold text-[#0F2E8A]">
                  Insurance Is the Subject Matter of Solicitation
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Always read the insurer&apos;s official sales brochure, policy wording, waiting
                  periods, and benefit illustration carefully before finalizing any insurance
                  purchase.
                </p>
                <div className="mt-4 border-t border-amber-200/70 pt-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF6B00] hover:underline"
                  >
                    Explore Our Ethical Advisory Pillars
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </m.div>

              {/* Direct Barasat Desk Card */}
              <m.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.14 }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#0F2E8A]">
                  Need Personal Clarification?
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Visit our Duckbanglow More, Barasat desk ({SITE_CONFIG.workingHours.days},{" "}
                  {SITE_CONFIG.workingHours.timing}) or message us anytime.
                </p>

                <div className="mt-3.5 space-y-2">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                    className="flex items-center justify-between rounded-xl border border-sky-200 bg-sky-50/50 px-3.5 py-2.5 text-xs font-bold text-[#0F2E8A] transition hover:border-sky-400 hover:bg-sky-50"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-[#FF6B00]" />
                      {SITE_CONFIG.contact.phone}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-sky-500" />
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
                      "Hello Insurance Sathi, I would like clarification on your Terms & Conditions."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/50 px-3.5 py-2.5 text-xs font-bold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="h-3.5 w-3.5 text-[#16A34A]" />
                      WhatsApp Our Desk
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-500" />
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-[#0F2E8A]"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#0284C7]" />
                    <span className="truncate">{SITE_CONFIG.contact.email}</span>
                  </a>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <Link
                    href="/privacy-policy"
                    className="flex items-center justify-between rounded-xl bg-sky-50 px-3.5 py-2.5 text-xs font-bold text-[#0F2E8A] transition hover:bg-sky-100"
                  >
                    <span>Read Privacy Policy</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </m.div>
            </div>
          </aside>
        </div>
      </section>
    </div>
      </LazyMotion>
    </MotionConfig>
  );
}
