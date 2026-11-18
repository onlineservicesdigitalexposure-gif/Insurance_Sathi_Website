import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Calendar,
  User,
  HeartHandshake,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-section-heading"
      className="bg-brand-light border-t border-brand-border/60"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Visual Office & Founder Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-3xl border border-brand-border bg-white p-6 sm:p-8 shadow-card">
              {/* Emblem Header */}
              <div className="flex items-center justify-between border-b border-brand-border pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-xs">
                    <ShieldCheck className="h-7 w-7 text-brand-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-brand-dark leading-tight">
                      {SITE_CONFIG.name}
                    </h3>
                    <p className="text-xs text-brand-royal font-semibold">
                      {SITE_CONFIG.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder & Milestone Information */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200/60">
                  <User className="h-5 w-5 text-brand-royal mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                      Founder & Principal Advisor
                    </span>
                    <span className="text-sm font-extrabold text-brand-dark">
                      {SITE_CONFIG.owner.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200/60">
                  <Calendar className="h-5 w-5 text-brand-orange mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                      Date of Establishment
                    </span>
                    <span className="text-sm font-extrabold text-brand-dark">
                      {SITE_CONFIG.owner.establishedDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200/60">
                  <MapPin className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                      Permanent Office
                    </span>
                    <span className="text-xs font-bold text-brand-dark leading-relaxed">
                      {SITE_CONFIG.address.formatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200/60">
                  <Clock className="h-5 w-5 text-brand-royal mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                      Consultation Hours
                    </span>
                    <span className="text-xs font-bold text-brand-dark">
                      {SITE_CONFIG.workingHours.days} ({SITE_CONFIG.workingHours.timing})
                    </span>
                  </div>
                </div>
              </div>

              {/* Commitment Tag */}
              <div className="mt-6 rounded-xl border border-brand-royal-200/60 bg-brand-royal-50/60 p-3.5 text-xs text-brand-royal font-semibold text-center">
                Dedicated Face-to-Face Advisory in Barasat, Madhyamgram & Habra
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Customer-First Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <SectionHeader
              id="about-section-heading"
              align="left"
              badge="About Insurance Sathi"
              badgeIcon={<HeartHandshake className="h-3.5 w-3.5" />}
              title="A Dedicated Local Partner for Your Family's Insurance Needs"
              subtitle="Founded on 20 May 2023 by MD Abrahim, Insurance Sathi was built to eliminate the confusion, aggressive sales pitches, and unkept promises common in today's insurance landscape."
            />

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
              <p>
                In an era dominated by faceless call centers and automated web portals, most policyholders in North 24 Parganas find themselves stranded when hospitalizations happen or unexpected claim rejections occur. Crucial clauses—like 2-year waiting periods, room-rent proportionate deductions, or missing nominee endorsements—are rarely explained during purchase.
              </p>
              <p>
                At Insurance Sathi, located conveniently at Duckbanglow More on Jessore Road, we operate on a strict <strong className="text-brand-dark">customer-first principle</strong>:
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full text-xs font-bold text-brand-dark">
              <div className="flex items-center gap-2.5 rounded-xl bg-white p-3 border border-brand-border/70 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>100% Unbiased need assessment</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white p-3 border border-brand-border/70 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Zero charge for claim paperwork guidance</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white p-3 border border-brand-border/70 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" aria-hidden="true" />
                <span>Doorstep support across Barasat, Madhyamgram & Habra</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white p-3 border border-brand-border/70 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" aria-hidden="true" />
                <span>Assistance throughout policy tenure, not just at sale</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/#contact">
                <Button variant="secondary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Meet With Our Advisor
                </Button>
              </Link>
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="text-xs font-bold text-brand-royal hover:underline"
              >
                Or Call {SITE_CONFIG.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
