import * as React from "react";
import Link from "next/link";
import { Clock, Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function FloatingContact() {
  return (
    <aside
      aria-label="Quick Advisory Hotlines"
      className="fixed right-3 sm:right-5 bottom-6 z-40 flex flex-col items-center gap-3 select-none"
    >
      {/* 1. Request Callback / Consultation (Orange Circle from Beema1 Demo) */}
      <div className="group relative flex items-center">
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-brand-navy-950 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all group-hover:block sm:inline-block opacity-0 group-hover:opacity-100"
        >
          Book Consultation
        </span>
        <Link
          href="/contact"
          aria-label="Book an insurance consultation"
          className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 text-white shadow-lg shadow-amber-500/30 ring-2 ring-white transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
        >
          <Clock className="h-6 w-6 stroke-[2.2]" aria-hidden="true" />
        </Link>
      </div>

      {/* 2. Direct Phone Call (Blue Circle from Beema1 Demo) */}
      <div className="group relative flex items-center">
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-brand-navy-950 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all group-hover:block sm:inline-block opacity-0 group-hover:opacity-100"
        >
          Call {SITE_CONFIG.contact.phone}
        </span>
        <a
          href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
          aria-label={`Call Insurance Sathi at ${SITE_CONFIG.contact.phone}`}
          className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-tr from-brand-royal to-blue-500 text-white shadow-lg shadow-brand-royal/30 ring-2 ring-white transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2]" aria-hidden="true" />
        </a>
      </div>

      {/* 3. Direct WhatsApp Chat (Green Circle from Beema1 Demo) */}
      <div className="group relative flex items-center">
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-brand-navy-950 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all group-hover:block sm:inline-block opacity-0 group-hover:opacity-100"
        >
          Chat on WhatsApp
        </span>
        <a
          href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
            "Hello Insurance Sathi, I need guidance regarding insurance policies in Barasat."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Insurance Sathi on WhatsApp"
          className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-lg shadow-emerald-500/35 ring-2 ring-white transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
        >
          {/* Subtle online pulse */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
          </span>
          <MessageCircle className="h-6 w-6 stroke-[2.2]" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
