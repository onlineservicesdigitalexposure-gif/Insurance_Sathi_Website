"use client";

import * as React from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, MotionConfig } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Ban,
  FileText,
  UserCheck,
  Globe,
  Scale,
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
    id: "who-protects",
    number: "01",
    label: "Who Protects Your Records",
    dotColor: "bg-sky-500",
    activeBg: "hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200",
  },
  {
    id: "details-shared",
    number: "02",
    label: "Information You Entrust to Us",
    dotColor: "bg-teal-500",
    activeBg: "hover:bg-teal-50 hover:text-teal-800 hover:border-teal-200",
  },
  {
    id: "how-we-use",
    number: "03",
    label: "Why We Use Your Information",
    dotColor: "bg-emerald-500",
    activeBg: "hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200",
  },
  {
    id: "controlled-sharing",
    number: "04",
    label: "Controlled Sharing Only When Needed",
    dotColor: "bg-violet-500",
    activeBg: "hover:bg-violet-50 hover:text-violet-800 hover:border-violet-200",
  },
  {
    id: "security-retention",
    number: "05",
    label: "Safeguarding Files & Retention",
    dotColor: "bg-amber-500",
    activeBg: "hover:bg-amber-50 hover:text-amber-800 hover:border-amber-200",
  },
  {
    id: "your-rights",
    number: "06",
    label: "Your Choices & Grievance Desk",
    dotColor: "bg-rose-500",
    activeBg: "hover:bg-rose-50 hover:text-rose-800 hover:border-rose-200",
  },
];

const HERO_PILLARS = [
  {
    label: "Zero Data Selling",
    detail: "Your number is never sold to telemarketers",
    gradient: "from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-emerald-200",
    dot: "bg-emerald-400",
  },
  {
    label: "DPDP Act 2023 Ready",
    detail: "Built for Indian policyholder privacy rights",
    gradient: "from-sky-500/20 to-blue-500/20 border-sky-400/30 text-sky-200",
    dot: "bg-sky-400",
  },
  {
    label: "Local Accountability",
    detail: "Direct oversight at our Barasat office",
    gradient: "from-amber-500/20 to-orange-500/20 border-amber-400/30 text-amber-200",
    dot: "bg-amber-400",
  },
];

const DATA_CATEGORIES = [
  {
    title: "Communication Details",
    description:
      "Your name, mobile or WhatsApp number, email address, and local area (such as Barasat, Madhyamgram, or Habra) so we can respond accurately to your enquiry.",
    accent: "border-sky-200 bg-gradient-to-br from-sky-50/90 to-white",
    pill: "bg-sky-100 text-sky-800",
    tag: "Enquiry & Callback",
  },
  {
    title: "Existing Policy Particulars",
    description:
      "Policy number, insurer name, plan type, renewal schedule, sum assured, and nominee status—shared only when you ask for policy servicing, review, or revival help.",
    accent: "border-emerald-200 bg-gradient-to-br from-emerald-50/90 to-white",
    pill: "bg-emerald-100 text-emerald-800",
    tag: "Policy Servicing",
  },
  {
    title: "KYC & Verification Papers",
    description:
      "Identity and address documents (such as PAN, Aadhaar, Voter ID, or Driving Licence) strictly required by IRDAI-licensed insurers during proposal filing or endorsements.",
    accent: "border-amber-200 bg-gradient-to-br from-amber-50/90 to-white",
    pill: "bg-amber-100 text-amber-800",
    tag: "Statutory KYC",
  },
  {
    title: "Health & Claim Documentation",
    description:
      "Discharge summaries, itemized hospital invoices, diagnostic reports, or vehicle repair bills voluntarily shared so we can help organize a clean claim file.",
    accent: "border-violet-200 bg-gradient-to-br from-violet-50/90 to-white",
    pill: "bg-violet-100 text-violet-800",
    tag: "Claim Support",
  },
];

const USAGE_POINTS = [
  {
    title: "Tailored Coverage Comparisons",
    detail:
      "Evaluating family needs, age brackets, and budget to present clear, side-by-side plan options without sales pressure.",
    color: "bg-emerald-500",
  },
  {
    title: "Smooth Proposal & Deposit Coordination",
    detail:
      "Double-checking proposal entries, coordinating KYC submissions, and confirming official premium receipt records.",
    color: "bg-teal-500",
  },
  {
    title: "Lifelong Policy Upkeep",
    detail:
      "Supporting nominee updates, address corrections, bank mandate setup, duplicate bond requests, and lapsed policy revival checks.",
    color: "bg-sky-500",
  },
  {
    title: "Timely Renewal & Grace-Period Alerts",
    detail:
      "Sending practical call, SMS, or WhatsApp reminders before due dates so active family cover never lapses unexpectedly.",
    color: "bg-amber-500",
  },
  {
    title: "Structured Claim Paperwork Guidance",
    detail:
      "Helping compile hospital or motor claim files accurately for timely submission to your insurer or TPA.",
    color: "bg-orange-500",
  },
];

const YOUR_RIGHTS = [
  {
    title: "View Your Records",
    detail: "Ask for a clear summary of the personal details we maintain for your advisory requests.",
    style: "border-rose-200 bg-rose-50/70 text-rose-900",
    badge: "Access",
  },
  {
    title: "Correct Outdated Details",
    detail: "Update your phone number, residential address, or family details whenever life circumstances change.",
    style: "border-amber-200 bg-amber-50/70 text-amber-900",
    badge: "Correction",
  },
  {
    title: "Pause or Stop Reminders",
    detail: "Opt out of WhatsApp, SMS, or telephone renewal follow-ups at any moment with a simple message.",
    style: "border-sky-200 bg-sky-50/70 text-sky-900",
    badge: "Opt-Out",
  },
  {
    title: "Request Record Removal",
    detail: "Ask us to erase non-mandatory advisory records once our engagement ends, subject to Indian statutory rules.",
    style: "border-emerald-200 bg-emerald-50/70 text-emerald-900",
    badge: "Erasure",
  },
];

interface SectionShellProps {
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

function PolicySectionCard({
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
}: SectionShellProps) {
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
                Section {number}
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

export function PrivacyPolicyView() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
          {/* Vibrant Animated Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#081A4B] via-[#0F2E8A] to-[#123B75] text-white">
            {/* GPU CSS Ambient Color Orbs (Zero JS loop overhead) */}
            <div
              className="anim-pulse-soft pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#FF6B00]/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="anim-pulse-soft pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#16A34A]/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0284C7]/25 blur-3xl"
              aria-hidden="true"
            />

            <div className="container-site relative z-10">
              <div className="mb-4 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span]:text-white/80 [&_svg]:text-blue-300/70">
                <Breadcrumb items={[{ label: "Privacy Policy" }]} />
              </div>

              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                <m.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="lg:col-span-8"
                >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-100 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#4ADE80]" />
                Client Confidentiality &amp; Data Care
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <LogoHeadingText mode="dark">Privacy Policy</LogoHeadingText>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100/95 sm:text-base">
                Your family&apos;s health records, policy bonds, and personal identifiers deserve
                genuine respect—not fine print. Here is our plain-spoken commitment on how{" "}
                <strong className="text-white">{SITE_CONFIG.name}</strong> collects, safeguards,
                and uses information shared with our Barasat advisory desk.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-blue-100/90">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  <Clock className="h-3.5 w-3.5 text-[#FF922B]" />
                  Revised: {LAST_UPDATED}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5 text-[#38BDF8]" />
                  Duckbanglow More, Barasat, West Bengal
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  <UserCheck className="h-3.5 w-3.5 text-[#4ADE80]" />
                  Founder: {SITE_CONFIG.owner.name}
                </span>
              </div>
            </m.div>

            {/* Right Animated Promise Strip */}
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <div className="space-y-2.5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white/90">
                  <Sparkles className="h-4 w-4 text-[#FF922B]" />
                  Our 3 Privacy Commitments
                </div>
                {HERO_PILLARS.map((pillar, idx) => (
                  <m.div
                    key={pillar.label}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    className={`rounded-xl border bg-gradient-to-r px-3.5 py-2.5 ${pillar.gradient}`}
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className={`h-2 w-2 rounded-full ${pillar.dot}`} />
                      {pillar.label}
                    </div>
                    <p className="mt-0.5 pl-4 text-[11px] text-white/80">{pillar.detail}</p>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Main Content + Sticky Colorful Sidebar */}
      <section className="container-site">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left 8 Columns: Rewritten Original Privacy Sections */}
          <div className="space-y-6 lg:col-span-8">
            {/* 01. Who Protects Your Records */}
            <PolicySectionCard
              id="who-protects"
              number="01"
              title="Who Protects Your Records"
              subtitle="Office identity & accountability"
              symbol="local-presence"
              topBarClass="bg-gradient-to-r from-[#0F2E8A] via-[#0284C7] to-[#38BDF8]"
              headerBgClass="bg-gradient-to-r from-sky-50/70 via-blue-50/40 to-white"
              badgeClass="bg-sky-100 text-sky-800"
              borderClass="border-sky-200/80"
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  This Privacy Policy explains how personal, policy, and claim-related records are
                  handled whenever you browse our website, message us on WhatsApp, call our desk,
                  or walk into our office for in-person insurance guidance.
                </p>

                <div className="grid grid-cols-1 gap-3 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/60 p-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                      Advisory Office
                    </p>
                    <p className="mt-1 text-base font-extrabold text-[#0F2E8A]">
                      {SITE_CONFIG.name}
                    </p>
                    <p className="text-xs font-medium text-slate-600">
                      Led by {SITE_CONFIG.owner.name} • Serving since{" "}
                      {SITE_CONFIG.owner.establishedDate}
                    </p>
                  </div>
                  <div className="space-y-1 text-xs text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF6B00]" />
                      <span>{SITE_CONFIG.address.formatted}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" />
                      <span className="font-semibold">{SITE_CONFIG.contact.phone}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 shrink-0 text-[#0284C7]" />
                      <span>{SITE_CONFIG.contact.email}</span>
                    </p>
                  </div>
                </div>

                <p>
                  We serve families, senior citizens, vehicle owners, and local enterprises across
                  Barasat, Madhyamgram, Habra, and neighbouring areas of North 24 Parganas as an
                  independent insurance advisory and policyholder facilitation desk.
                </p>
              </div>
            </PolicySectionCard>

            {/* 02. Information You Entrust to Us */}
            <PolicySectionCard
              id="details-shared"
              number="02"
              title="Information You Entrust to Us"
              subtitle="Only what is needed to help you"
              symbol="policy-servicing"
              topBarClass="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500"
              headerBgClass="bg-gradient-to-r from-teal-50/70 via-cyan-50/40 to-white"
              badgeClass="bg-teal-100 text-teal-800"
              borderClass="border-teal-200/80"
              delay={0.04}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  We follow a simple rule of <strong>data minimalism</strong>: we only ask for
                  details that directly move your request forward—whether you are comparing a new
                  cover, reviving a lapsed policy, updating a nominee, or organizing claim
                  documents.
                </p>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {DATA_CATEGORIES.map((item) => (
                    <m.div
                      key={item.title}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className={`rounded-2xl border p-4 shadow-xs ${item.accent}`}
                    >
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${item.pill}`}
                      >
                        {item.tag}
                      </span>
                      <h3 className="mt-2 text-sm font-extrabold text-[#0F2E8A]">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </m.div>
                  ))}
                </div>
              </div>
            </PolicySectionCard>

            {/* 03. Why We Use Your Information */}
            <PolicySectionCard
              id="how-we-use"
              number="03"
              title="Why We Use Your Information"
              subtitle="Purpose-bound & spam-free"
              symbol="personal-guidance"
              topBarClass="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
              headerBgClass="bg-gradient-to-r from-emerald-50/75 via-green-50/40 to-white"
              badgeClass="bg-emerald-100 text-emerald-800"
              borderClass="border-emerald-200/80"
              delay={0.06}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  Every piece of information you share is used exclusively to deliver the insurance
                  assistance you requested:
                </p>

                <div className="space-y-2.5">
                  {USAGE_POINTS.map((point) => (
                    <div
                      key={point.title}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 transition-colors hover:border-emerald-200 hover:bg-emerald-50/40"
                    >
                      <span
                        className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${point.color}`}
                      />
                      <div>
                        <p className="text-sm font-bold text-[#0F2E8A]">{point.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                          {point.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animated Zero-Spam Highlight */}
                <m.div
                  whileHover={{ scale: 1.01 }}
                  className="relative overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50/80 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B00] to-amber-500 text-white shadow-sm">
                      <Ban className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-orange-950">
                        Strict Zero-Spam &amp; Never-Sold Pledge
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-orange-900/90">
                        Insurance Sathi never sells, leases, swaps, or shares your phone number or
                        family records with external call centres, lead brokers, or unauthorized
                        marketing networks.
                      </p>
                    </div>
                  </div>
                </m.div>
              </div>
            </PolicySectionCard>

            {/* 04. Controlled Sharing Only When Needed */}
            <PolicySectionCard
              id="controlled-sharing"
              number="04"
              title="Controlled Sharing Only When Needed"
              subtitle="Strict permission-based handoffs"
              symbol="transparent-disclosure"
              topBarClass="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500"
              headerBgClass="bg-gradient-to-r from-violet-50/75 via-purple-50/40 to-white"
              badgeClass="bg-violet-100 text-violet-800"
              borderClass="border-violet-200/80"
              delay={0.08}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  Your details leave our desk only when necessary to process an application,
                  endorsement, or claim you have explicitly authorized:
                </p>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                  <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 p-4">
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0F2E8A]">Chosen Insurers</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Shared strictly with the IRDAI-licensed Life, Health, or General insurer you
                      select for underwriting, issuance, or policy updates.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/50 p-4">
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                      <FileText className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0F2E8A]">TPAs &amp; Claim Desks</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Coordinated with authorized Third-Party Administrators, hospitals, or motor
                      surveyors strictly during an active claim you initiate.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-purple-200/80 bg-purple-50/50 p-4">
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white">
                      <Scale className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0F2E8A]">Legal Mandates</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Disclosed only when legally mandated by Indian courts, IRDAI directives, or
                      competent statutory authorities.
                    </p>
                  </div>
                </div>
              </div>
            </PolicySectionCard>

            {/* 05. Safeguarding Files & Retention */}
            <PolicySectionCard
              id="security-retention"
              number="05"
              title="Safeguarding Files &amp; Retention"
              subtitle="Office security, digital care & cookies"
              symbol="better-protection"
              topBarClass="bg-gradient-to-r from-[#FF6B00] via-amber-500 to-yellow-500"
              headerBgClass="bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-white"
              badgeClass="bg-amber-100 text-amber-800"
              borderClass="border-amber-200/80"
              delay={0.1}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-4">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-[#0F2E8A]">
                      <Lock className="h-4 w-4 text-[#FF6B00]" />
                      Physical &amp; Digital Protection
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Printed forms and photocopies handed over at our Duckbanglow More office are
                      stored in restricted files, while WhatsApp and email exchanges are restricted
                      to authorized advisory handling only.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-sky-200/80 bg-sky-50/40 p-4">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-[#0F2E8A]">
                      <Globe className="h-4 w-4 text-[#0284C7]" />
                      Website Cookies &amp; Browsing
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Our website relies on lightweight essential browser storage solely to keep
                      pages responsive and fast. We do not deploy invasive cross-site ad trackers
                      that follow you across the internet.
                    </p>
                  </div>
                </div>

                <p className="rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-600">
                  <strong className="text-[#0F2E8A]">Practical Retention Window:</strong> We keep
                  client records only while your policies remain under active advisory support or
                  for periods required under Indian regulatory and accounting rules. Once no longer
                  needed, documents are responsibly disposed of or archived securely.
                </p>
              </div>
            </PolicySectionCard>

            {/* 06. Your Choices & Grievance Desk */}
            <PolicySectionCard
              id="your-rights"
              number="06"
              title="Your Choices &amp; Direct Grievance Desk"
              subtitle="DPDP Act 2023 policyholder rights"
              symbol="trusted-partner"
              topBarClass="bg-gradient-to-r from-rose-500 via-pink-500 to-[#FF6B00]"
              headerBgClass="bg-gradient-to-r from-rose-50/75 via-pink-50/40 to-white"
              badgeClass="bg-rose-100 text-rose-800"
              borderClass="border-rose-200/80"
              delay={0.12}
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  Aligned with India&apos;s{" "}
                  <strong className="text-[#0F2E8A]">
                    Digital Personal Data Protection (DPDP) Act, 2023
                  </strong>
                  , you always remain in control of the information you share with us:
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {YOUR_RIGHTS.map((right) => (
                    <m.div
                      key={right.title}
                      whileHover={{ y: -2 }}
                      className={`rounded-2xl border p-3.5 ${right.style}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-extrabold">{right.title}</span>
                        <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                          {right.badge}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed opacity-90">{right.detail}</p>
                    </m.div>
                  ))}
                </div>

                {/* Direct Grievance Contact Box */}
                <div className="rounded-2xl border border-[#0F2E8A]/15 bg-gradient-to-br from-[#0F2E8A] to-[#123B75] p-5 text-white shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#4ADE80]">
                        Designated Privacy &amp; Grievance Contact
                      </p>
                      <p className="mt-0.5 text-base font-extrabold">{SITE_CONFIG.owner.name}</p>
                      <p className="text-xs text-blue-100">
                        {SITE_CONFIG.name} • {SITE_CONFIG.address.formatted}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5 text-xs">
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 font-bold text-white backdrop-blur-sm transition hover:bg-white/25"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#FF922B]" />
                      {SITE_CONFIG.contact.phone}
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 font-bold text-white backdrop-blur-sm transition hover:bg-white/25"
                    >
                      <Mail className="h-3.5 w-3.5 text-[#38BDF8]" />
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </PolicySectionCard>
          </div>

          {/* Right 4 Columns: Sticky Colorful Navigation & Help Sidebar */}
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
                    Quick Policy Navigator
                  </p>
                  <nav aria-label="Privacy Policy Sections" className="mt-3 space-y-1.5">
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

              {/* Colorful Direct Advisory Support Card */}
              <m.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-5 shadow-sm"
              >
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-800">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Direct Human Support
                </div>
                <h3 className="mt-3 text-base font-extrabold text-[#0F2E8A]">
                  Questions About Your Data?
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Speak directly with {SITE_CONFIG.owner.name} at our Barasat office if you want to
                  verify, update, or remove your advisory records.
                </p>

                <div className="mt-4 space-y-2">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                    className="flex items-center justify-between rounded-xl border border-sky-200 bg-white px-3.5 py-2.5 text-xs font-bold text-[#0F2E8A] transition hover:border-sky-400 hover:bg-sky-50"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-[#FF6B00]" />
                      {SITE_CONFIG.contact.phone}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-sky-500" />
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
                      "Hello Insurance Sathi, I have a question regarding your Privacy Policy."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-emerald-200 bg-white px-3.5 py-2.5 text-xs font-bold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="h-3.5 w-3.5 text-[#16A34A]" />
                      WhatsApp Privacy Desk
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-500" />
                  </a>
                </div>
              </m.div>

              {/* Cross-Navigation Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Related Pages
                </p>
                <div className="mt-3 space-y-2 text-xs">
                  <Link
                    href="/terms-and-conditions"
                    className="flex items-center justify-between rounded-xl bg-amber-50/80 px-3.5 py-2.5 font-bold text-amber-900 transition hover:bg-amber-100"
                  >
                    <span>Read Terms &amp; Conditions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-[#0F2E8A]"
                  >
                    <span>About Insurance Sathi</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-[#0F2E8A]"
                  >
                    <span>Visit Our Barasat Office</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
      </LazyMotion>
    </MotionConfig>
  );
}
