"use client";

import * as React from "react";
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/data/site";
import type { ServiceItem } from "@/types";

export interface ServiceFaqAccordionProps {
  service: ServiceItem;
}

export function ServiceFaqAccordion({ service }: ServiceFaqAccordionProps) {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    `Hello Insurance Sathi, I have a question regarding ${service.title}.`
  )}`;

  return (
    <section
      id="service-faq"
      aria-labelledby="service-faq-heading"
      className="bg-slate-50 border-t border-brand-border/60"
    >
      <div className="container-narrow">
        <SectionHeader
          id="service-faq-heading"
          badge="Frequently Asked Questions"
          badgeIcon={<HelpCircle className="h-3.5 w-3.5" />}
          title={`Common Questions About ${service.title}`}
          subtitle="Clear, honest answers to help you navigate your policy requirements without confusion."
        />

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {service.serviceFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const contentId = `faq-content-${service.slug}-${index}`;
            const headerId = `faq-header-${service.slug}-${index}`;

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
                    <span className="text-sm sm:text-base font-bold text-brand-dark leading-snug">
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
                    <div className="border-t border-slate-100 p-5 sm:p-6 pt-3 text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 rounded-2xl border border-brand-border bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-extrabold text-brand-dark">
            Have a specific scenario or unique policy query?
          </p>
          <p className="mt-1 text-xs text-brand-muted">
            MD Abrahim is available for direct telephone guidance or in-person consultation in Barasat.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>
              <Button variant="primary" size="sm" leftIcon={<PhoneCall className="h-4 w-4" />}>
                Call {SITE_CONFIG.contact.phone}
              </Button>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<MessageCircle className="h-4 w-4 text-emerald-600" />}
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
