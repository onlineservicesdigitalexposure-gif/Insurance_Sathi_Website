"use client";

import * as React from "react";
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/data/site";
import type { InsuranceCategoryItem } from "@/types";

export interface InsuranceFaqAccordionProps {
  category: InsuranceCategoryItem;
}

export function InsuranceFaqAccordion({ category }: InsuranceFaqAccordionProps) {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    `Hello Insurance Sathi, I have a question regarding ${category.title} in Barasat.`
  )}`;

  return (
    <section
      id="category-faqs"
      aria-labelledby="category-faqs-heading"
      className="bg-slate-50 border-b border-brand-border/60"
    >
      <div className="container-narrow">
        <SectionHeader
          id="category-faqs-heading"
          badge="Frequently Asked Questions"
          badgeIcon={<HelpCircle className="h-3.5 w-3.5" />}
          title={`Common Questions About ${category.title}`}
          subtitle="Clear, transparent answers to help you navigate coverage choices, exclusions, and claim paperwork."
        />

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {category.categoryFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const contentId = `faq-content-${category.slug}-${index}`;
            const headerId = `faq-header-${category.slug}-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-brand-border/80 bg-white shadow-card transition-all"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-slate-50/80"
                  >
                    <span className="text-sm sm:text-base font-bold text-brand-dark">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-navy transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-brand-navy text-white" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-brand-border/60 px-5 pb-6 pt-4 sm:px-6">
                      <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Local Help Callout */}
        <div className="mt-12 rounded-2xl border border-brand-border bg-white p-6 sm:p-8 text-center shadow-card">
          <h4 className="text-base sm:text-lg font-bold text-brand-dark">
            Still Have Questions About Your {category.title} Policy?
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-brand-muted max-w-lg mx-auto">
            Get straightforward, face-to-face guidance at our Duckbanglow More, Barasat office or connect directly over phone/WhatsApp.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>
              <Button
                variant="outline"
                size="md"
                leftIcon={<PhoneCall className="h-4 w-4 text-brand-orange" />}
              >
                Call: {SITE_CONFIG.contact.phone}
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                size="md"
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Ask on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
