import * as React from "react";
import Image from "next/image";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import { LazyEnquiryForm } from "@/components/forms/LazyEnquiryForm";

export function ContactCtaSection() {

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-heading"
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-brand-royal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-10 h-[500px] w-[500px] rounded-full bg-brand-orange/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Main Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            <span>Direct Guidance by MD Abrahim • Established 20 May 2023</span>
          </div>

          <h2
            id="contact-section-heading"
            className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight"
          >
            <LogoHeadingText mode="dark">Need Help With Your Insurance Policy?</LogoHeadingText>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
            Whether you need to purchase new coverage, revive a lapsed policy, or get emergency claim guidance, MD Abrahim is ready to assist you across Barasat, Madhyamgram, and Habra.
          </p>

          {/* Core Action Buttons: Call Now & WhatsApp Us */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>
              <Button
                variant="primary"
                size="lg"
                leftIcon={<PhoneCall className="h-5 w-5" />}
                className="w-full sm:w-auto shadow-lg shadow-brand-orange/20"
              >
                Call Now
              </Button>
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
                "Hello Insurance Sathi, I need help with an insurance policy."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="white"
                size="lg"
                leftIcon={<MessageCircle className="h-5 w-5 text-emerald-600" />}
                className="w-full sm:w-auto text-brand-navy hover:bg-slate-100"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>

        {/* Two-Column Grid: Office Details & Interactive Consultation Form */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Office Details, Official Banner & Local Assurance */}
          <div className="flex flex-col justify-between gap-5 lg:col-span-5">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-7 backdrop-blur-md">
              <h3 className="text-xl font-extrabold text-white">
                Visit or Contact Our Office
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                You are always welcome to walk in for an in-person discussion, or schedule a doorstep visit at your residence in Barasat, Madhyamgram, or Habra.
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-orange">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Office Address</span>
                    <span className="text-slate-300 leading-relaxed block">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.district},{" "}
                      {SITE_CONFIG.address.state} - {SITE_CONFIG.address.postalCode}.
                    </span>
                    <span className="text-[11px] text-brand-orange font-semibold block mt-0.5">
                      Landmark: {SITE_CONFIG.address.landmark}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                    <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Direct Helpline</span>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="font-extrabold text-white text-base hover:text-brand-orange transition-colors"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                    <span className="text-[11px] text-slate-400 block">
                      Direct line to MD Abrahim
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-400">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Email Inquiries</span>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Working Hours</span>
                    <span className="text-slate-300 block">
                      {SITE_CONFIG.workingHours.days}: {SITE_CONFIG.workingHours.timing}
                    </span>
                    <span className="text-slate-400 text-xs block">
                      {SITE_CONFIG.workingHours.sundayNotice}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Insurance Sathi Brand Banner */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl">
              <div
                className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FF6B00]/20 via-[#16A34A]/15 to-[#0284C7]/25 opacity-60 blur-lg transition-opacity duration-300 group-hover:opacity-90"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/insurance-sathi-banner.webp"
                  alt="Insurance Sathi — All Insurance Companies Under One Roof"
                  width={960}
                  height={639}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  style={{ height: "auto" }}
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Local Assurance Notice */}
            <div className="rounded-2xl border border-brand-royal/40 bg-brand-royal/10 p-5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>Zero Pressure Advisory Guarantee</span>
              </div>
              <p className="mt-1.5 leading-relaxed text-slate-300">
                We do not push policies or bombard you with automated spam. You get genuine advice tailored to your financial capability and family health background.
              </p>
            </div>
          </div>

          {/* Right Column: Viewport-Deferred Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <LazyEnquiryForm
              title="Request Personal Consultation"
              subtitle="Fill out this form to connect directly with MD Abrahim via WhatsApp."
              className="text-brand-dark shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
