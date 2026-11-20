import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function TopBar() {
  const facebookUrl =
    SITE_CONFIG.socials.find((s) => s.platform === "Facebook")?.url ||
    "https://www.facebook.com/share/19xYK42tJL/";

  return (
    <aside
      aria-label="Quick Business Contact & Hours"
      className="border-b border-brand-navy-900 bg-brand-navy-950 text-slate-300 text-xs font-medium"
    >
      <div className="container-site flex h-10 items-center justify-between gap-4">
        {/* Left Side: Contact Details & Working Hours */}
        <div className="flex items-center gap-4 lg:gap-6 overflow-hidden">
          {/* Phone */}
          <a
            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-orange shrink-0"
            aria-label={`Call Insurance Sathi at ${SITE_CONFIG.contact.phone}`}
          >
            <Phone className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            <span className="font-semibold">{SITE_CONFIG.contact.phone}</span>
          </a>

          {/* Email (hidden on mobile, visible from sm) */}
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 transition-colors hover:text-white truncate"
            aria-label={`Email Insurance Sathi at ${SITE_CONFIG.contact.email}`}
          >
            <Mail className="h-3.5 w-3.5 text-brand-royal-300" aria-hidden="true" />
            <span className="truncate">{SITE_CONFIG.contact.email}</span>
          </a>

          {/* Business Hours (hidden on mobile/tablet, visible on lg) */}
          <div className="hidden lg:inline-flex items-center gap-1.5 text-slate-200">
            <Clock className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            <span>Mon – Sat: {SITE_CONFIG.workingHours.timing}</span>
          </div>
        </div>

        {/* Right Side: Facebook & WhatsApp Quick Links */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Facebook Official Page */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1877F2]/20 px-2.5 py-0.5 text-[11px] font-bold text-blue-300 border border-[#1877F2]/35 transition-all hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] shadow-xs"
            aria-label="Follow Insurance Sathi on Facebook"
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </a>

          {/* WhatsApp Direct Action */}
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=Hello%20Insurance%20Sathi,%20I%20would%20like%20to%20consult%20about%20insurance.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 border border-emerald-500/30 transition-all hover:bg-emerald-600 hover:text-white hover:border-emerald-600 shadow-xs"
            aria-label="Direct WhatsApp Consultation"
          >
            <MessageCircle className="h-3 w-3" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
