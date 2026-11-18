"use client";

import * as React from "react";
import {
  ChevronDown,
  HelpCircle,
  PhoneCall,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { FAQS_DATA } from "@/data/faqs";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { FaqCategory } from "@/types";

interface CategoryTheme {
  label: string;
  dotColor: string;
  pillActive: string;
  pillInactive: string;
  cardOpenBorder: string;
  cardHoverBorder: string;
  stripeGradient: string;
  qBadgeGradient: string;
  qBadgeSoft: string;
  tagClass: string;
  questionOpenText: string;
  answerSurface: string;
  answerBadgeGradient: string;
  chevronOpen: string;
}

const CATEGORY_THEMES: Record<FaqCategory, CategoryTheme> = {
  claims: {
    label: "Claims Help",
    dotColor: "bg-rose-500",
    pillActive: "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-md shadow-rose-500/25 border-transparent",
    pillInactive: "bg-rose-50/70 text-rose-800 border-rose-200 hover:bg-rose-100/80",
    cardOpenBorder: "border-rose-300 ring-2 ring-rose-400/25 shadow-lg shadow-rose-500/10",
    cardHoverBorder: "hover:border-rose-300/80",
    stripeGradient: "bg-gradient-to-b from-rose-500 via-red-500 to-orange-500",
    qBadgeGradient: "bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-sm shadow-rose-500/30",
    qBadgeSoft: "bg-rose-100 text-rose-700",
    tagClass: "bg-rose-50 text-rose-700 border-rose-200",
    questionOpenText: "text-rose-700",
    answerSurface: "bg-gradient-to-br from-rose-50/80 via-white to-orange-50/60 border-t border-rose-200/70",
    answerBadgeGradient: "bg-gradient-to-br from-rose-500 to-orange-500 text-white",
    chevronOpen: "bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-sm",
  },
  "policy-servicing": {
    label: "Policy Servicing",
    dotColor: "bg-[#0284C7]",
    pillActive: "bg-gradient-to-r from-[#0284C7] to-[#0F2E8A] text-white shadow-md shadow-sky-500/25 border-transparent",
    pillInactive: "bg-sky-50/70 text-sky-800 border-sky-200 hover:bg-sky-100/80",
    cardOpenBorder: "border-sky-300 ring-2 ring-sky-400/25 shadow-lg shadow-sky-500/10",
    cardHoverBorder: "hover:border-sky-300/80",
    stripeGradient: "bg-gradient-to-b from-[#0284C7] via-blue-600 to-[#0F2E8A]",
    qBadgeGradient: "bg-gradient-to-br from-[#0284C7] to-[#0F2E8A] text-white shadow-sm shadow-sky-500/30",
    qBadgeSoft: "bg-sky-100 text-[#0F2E8A]",
    tagClass: "bg-sky-50 text-sky-800 border-sky-200",
    questionOpenText: "text-[#0284C7]",
    answerSurface: "bg-gradient-to-br from-sky-50/85 via-white to-indigo-50/60 border-t border-sky-200/70",
    answerBadgeGradient: "bg-gradient-to-br from-[#0284C7] to-[#0F2E8A] text-white",
    chevronOpen: "bg-gradient-to-br from-[#0284C7] to-[#0F2E8A] text-white shadow-sm",
  },
  "lapsed-policy": {
    label: "Lapsed Policies",
    dotColor: "bg-[#FF6B00]",
    pillActive: "bg-gradient-to-r from-[#FF6B00] to-amber-500 text-white shadow-md shadow-orange-500/25 border-transparent",
    pillInactive: "bg-orange-50/70 text-orange-800 border-orange-200 hover:bg-orange-100/80",
    cardOpenBorder: "border-orange-300 ring-2 ring-orange-400/25 shadow-lg shadow-orange-500/10",
    cardHoverBorder: "hover:border-orange-300/80",
    stripeGradient: "bg-gradient-to-b from-[#FF6B00] via-amber-500 to-yellow-500",
    qBadgeGradient: "bg-gradient-to-br from-[#FF6B00] to-amber-500 text-white shadow-sm shadow-orange-500/30",
    qBadgeSoft: "bg-orange-100 text-orange-700",
    tagClass: "bg-orange-50 text-orange-700 border-orange-200",
    questionOpenText: "text-[#EA580C]",
    answerSurface: "bg-gradient-to-br from-orange-50/85 via-white to-amber-50/60 border-t border-orange-200/70",
    answerBadgeGradient: "bg-gradient-to-br from-[#FF6B00] to-amber-500 text-white",
    chevronOpen: "bg-gradient-to-br from-[#FF6B00] to-amber-500 text-white shadow-sm",
  },
  premiums: {
    label: "Premium Deposits",
    dotColor: "bg-[#16A34A]",
    pillActive: "bg-gradient-to-r from-[#16A34A] to-teal-600 text-white shadow-md shadow-emerald-500/25 border-transparent",
    pillInactive: "bg-emerald-50/70 text-emerald-800 border-emerald-200 hover:bg-emerald-100/80",
    cardOpenBorder: "border-emerald-300 ring-2 ring-emerald-400/25 shadow-lg shadow-emerald-500/10",
    cardHoverBorder: "hover:border-emerald-300/80",
    stripeGradient: "bg-gradient-to-b from-[#16A34A] via-emerald-500 to-teal-500",
    qBadgeGradient: "bg-gradient-to-br from-[#16A34A] to-teal-600 text-white shadow-sm shadow-emerald-500/30",
    qBadgeSoft: "bg-emerald-100 text-emerald-700",
    tagClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    questionOpenText: "text-emerald-700",
    answerSurface: "bg-gradient-to-br from-emerald-50/85 via-white to-teal-50/60 border-t border-emerald-200/70",
    answerBadgeGradient: "bg-gradient-to-br from-[#16A34A] to-teal-600 text-white",
    chevronOpen: "bg-gradient-to-br from-[#16A34A] to-teal-600 text-white shadow-sm",
  },
  general: {
    label: "General & Office",
    dotColor: "bg-indigo-600",
    pillActive: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 border-transparent",
    pillInactive: "bg-indigo-50/70 text-indigo-800 border-indigo-200 hover:bg-indigo-100/80",
    cardOpenBorder: "border-indigo-300 ring-2 ring-indigo-400/25 shadow-lg shadow-indigo-500/10",
    cardHoverBorder: "hover:border-indigo-300/80",
    stripeGradient: "bg-gradient-to-b from-indigo-500 via-purple-500 to-[#0284C7]",
    qBadgeGradient: "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-sm shadow-indigo-500/30",
    qBadgeSoft: "bg-indigo-100 text-indigo-700",
    tagClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
    questionOpenText: "text-indigo-700",
    answerSurface: "bg-gradient-to-br from-indigo-50/85 via-white to-purple-50/60 border-t border-indigo-200/70",
    answerBadgeGradient: "bg-gradient-to-br from-indigo-600 to-purple-600 text-white",
    chevronOpen: "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-sm",
  },
};

const CATEGORIES: { label: string; value: FaqCategory | "all" }[] = [
  { label: "All Questions", value: "all" },
  { label: "Claims Help", value: "claims" },
  { label: "Policy Servicing", value: "policy-servicing" },
  { label: "Lapsed Policies", value: "lapsed-policy" },
  { label: "Premium Deposits", value: "premiums" },
  { label: "General & Office", value: "general" },
];

export function FaqSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<FaqCategory | "all">("all");
  const [openFaqId, setOpenFaqId] = React.useState<string | null>(FAQS_DATA[0]?.id ?? null);

  const filteredFaqs = React.useMemo(() => {
    if (selectedCategory === "all") return FAQS_DATA;
    return FAQS_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-section-heading"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/40 border-t border-brand-border/60"
    >
      {/* Ambient Colorful Background Orbs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-[#0284C7]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        <SectionHeader
          id="faq-section-heading"
          badge="Frequently Asked Questions"
          badgeIcon={<HelpCircle className="h-3.5 w-3.5" />}
          title="Clear Answers to Common Insurance Inquiries"
          subtitle="Everything you need to know about purchasing policies, updating nominees, handling cashless hospitalization, and reviving discontinued covers."
        />

        {/* Colorful Interactive Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            const theme = cat.value === "all" ? null : CATEGORY_THEMES[cat.value];

            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.value);
                  const nextList =
                    cat.value === "all"
                      ? FAQS_DATA
                      : FAQS_DATA.filter((item) => item.category === cat.value);
                  setOpenFaqId(nextList[0]?.id ?? null);
                }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                  cat.value === "all"
                    ? isSelected
                      ? "bg-logo-gradient text-white border-transparent shadow-md shadow-[#0284C7]/25"
                      : "bg-white text-[#0F2E8A] border-slate-200 hover:border-[#0284C7]/40 hover:bg-sky-50/50"
                    : isSelected
                      ? theme?.pillActive
                      : theme?.pillInactive
                )}
              >
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    isSelected
                      ? "bg-white"
                      : cat.value === "all"
                        ? "bg-logo-gradient"
                        : theme?.dotColor
                  )}
                  aria-hidden="true"
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Colorful Animated Q&A Accordion List (Zero Layout-Thrashing CSS Grid Rows) */}
        <div className="mt-8 space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            const contentId = `faq-content-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;
            const theme = CATEGORY_THEMES[faq.category];

            return (
              <div
                key={faq.id}
                className={cn(
                  "group relative rounded-2xl border bg-white overflow-hidden transition-all duration-300",
                  isOpen
                    ? theme.cardOpenBorder
                    : cn("border-slate-200/90 shadow-xs hover:shadow-md", theme.cardHoverBorder)
                )}
              >
                {/* Colorful Left Vertical Accent Bar */}
                <div
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-1.5 transition-opacity duration-300",
                    theme.stripeGradient,
                    isOpen ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                  )}
                  aria-hidden="true"
                />

                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between gap-4 py-4 pl-5 pr-4 sm:py-5 sm:pl-6 sm:pr-5 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span
                      className={cn(
                        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-transform duration-300",
                        isOpen ? cn(theme.qBadgeGradient, "scale-105 -rotate-3") : theme.qBadgeSoft
                      )}
                    >
                      Q{idx + 1}
                    </span>

                    <div className="min-w-0">
                      <span
                        className={cn(
                          "inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider mb-1.5",
                          theme.tagClass
                        )}
                      >
                        {faq.categoryLabel}
                      </span>
                      <span
                        className={cn(
                          "block text-sm sm:text-base font-extrabold leading-snug transition-colors duration-200",
                          isOpen ? theme.questionOpenText : "text-[#0F2E8A] group-hover:text-[#0284C7]"
                        )}
                      >
                        {faq.question}
                      </span>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                      isOpen
                        ? cn(theme.chevronOpen, "rotate-180")
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </div>
                </button>

                {/* Smooth GPU CSS Grid-Rows Accordion Reveal */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className={cn("pl-5 pr-5 py-4 sm:pl-6 sm:pr-6 sm:py-5", theme.answerSurface)}>
                      <div className="flex items-start gap-3.5">
                        <span
                          className={cn(
                            "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-black shadow-xs",
                            theme.answerBadgeGradient
                          )}
                          aria-hidden="true"
                        >
                          A
                        </span>
                        <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Colorful Bottom Support Callout Box */}
        <div className="mt-10 rounded-2xl p-[1.5px] bg-logo-gradient shadow-md">
          <div className="rounded-[15px] bg-gradient-to-r from-orange-50/90 via-white to-sky-50/90 p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#FF6B00] mb-1">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Direct Personal Advisory</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0F2E8A]">
                Have a specific question about your existing policy?
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Speak directly with MD Abrahim at Duckbanglow More for personalized guidance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>
                <Button variant="royal" size="sm" leftIcon={<PhoneCall className="h-3.5 w-3.5" />}>
                  Call Advisor
                </Button>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=Hello%20Insurance%20Sathi,%20I%20have%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<MessageCircle className="h-3.5 w-3.5 text-[#16A34A]" />}
                  className="border-[#16A34A]/40 bg-emerald-50 text-emerald-800 hover:bg-[#16A34A] hover:text-white"
                >
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
