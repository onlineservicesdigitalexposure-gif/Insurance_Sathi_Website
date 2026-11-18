import { PhoneCall, MessageCircle, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data";
import { Button } from "@/components/ui/Button";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import type { ServiceItem } from "@/types";

export interface ServiceContactCtaProps {
  service: ServiceItem;
}

export function ServiceContactCta({ service }: ServiceContactCtaProps) {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    `Hello Insurance Sathi, I need assistance with ${service.title}. Please guide me on the next steps.`
  )}`;

  return (
    <section
      id="service-cta"
      aria-labelledby="service-cta-heading"
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute -top-40 right-10 h-[480px] w-[480px] rounded-full bg-brand-royal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-10 h-[480px] w-[480px] rounded-full bg-brand-orange/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            <span>Dedicated Service Support • Est. 20 May 2023</span>
          </div>

          <h2
            id="service-cta-heading"
            className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight"
          >
            <LogoHeadingText mode="dark">{`Need Help With ${service.title}?`}</LogoHeadingText>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
            Avoid paperwork errors and procedural roadblocks. Speak directly with MD Abrahim at our Duckbanglow More office or schedule a convenient doorstep consultation in Barasat, Madhyamgram, or Habra.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>
              <Button
                variant="primary"
                size="lg"
                leftIcon={<PhoneCall className="h-5 w-5" />}
                className="w-full sm:w-auto shadow-lg shadow-brand-orange/20"
              >
                Call {SITE_CONFIG.contact.phone}
              </Button>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="white"
                size="lg"
                leftIcon={<MessageCircle className="h-5 w-5 text-emerald-600" />}
                className="w-full sm:w-auto text-brand-navy hover:bg-slate-100"
              >
                Connect on WhatsApp
              </Button>
            </a>
          </div>

          {/* Quick Office Card */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 text-left border-t border-white/15 pt-8 text-xs text-slate-300">
            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
              <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-white text-sm">Walk-In Office</p>
                <p className="mt-1 text-slate-300 leading-snug">
                  {SITE_CONFIG.address.landmark}, {SITE_CONFIG.address.street}, Barasat, WB 700124.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
              <Clock className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-white text-sm">Working Hours</p>
                <p className="mt-1 text-slate-300 leading-snug">
                  {SITE_CONFIG.workingHours.days}: {SITE_CONFIG.workingHours.timing}
                </p>
                <p className="text-[11px] text-slate-400">{SITE_CONFIG.workingHours.sundayNotice}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-white text-sm">Zero Pressure</p>
                <p className="mt-1 text-slate-300 leading-snug">
                  Honest, unbiased advisory. We focus on proper documentation, not sales targets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
