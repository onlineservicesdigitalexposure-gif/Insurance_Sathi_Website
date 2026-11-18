import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";

interface WhyChooseItem {
  symbolId: FeatureSymbolId;
  title: string;
  description: string;
  highlight: string;
}

const WHY_CHOOSE_ITEMS: readonly WhyChooseItem[] = [
  {
    symbolId: "personal-guidance",
    title: "Personal Guidance",
    description:
      "Direct consultation with MD Abrahim at our Duckbanglow More office or at your home/office in Barasat, Madhyamgram, and Habra. No bots or generic call centers.",
    highlight: "Face-to-Face Accountability",
  },
  {
    symbolId: "policy-selection",
    title: "Assistance with Policy Selection",
    description:
      "We dissect room rent limits, ICU caps, waiting periods, and disease exclusions so you buy coverage that genuinely pays out when needed.",
    highlight: "100% Unbiased Advice",
  },
  {
    symbolId: "policy-servicing",
    title: "Support with Policy Servicing",
    description:
      "Seamless processing for nominee additions, address corrections, banking mandate updates, and duplicate policy document applications.",
    highlight: "Zero Bureaucratic Stress",
  },
  {
    symbolId: "premium-guidance",
    title: "Premium Payment Guidance",
    description:
      "Proactive renewal tracking, grace period alerts, and e-NACH auto-debit setup to guarantee that your life and health cover never lapses.",
    highlight: "Continuous Protection",
  },
  {
    symbolId: "claim-assistance",
    title: "Claim Documentation Assistance",
    description:
      "Dedicated, compassionate assistance during hospitalizations and motor damage claims, from hospital pre-authorization to final dossier clearance.",
    highlight: "On-Ground Support",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-choose-heading"
      className="bg-white border-t border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="why-choose-heading"
          badge="The Sathi Advantage"
          badgeIcon={<ShieldCheck className="h-3.5 w-3.5" />}
          title="Why Families & Businesses Rely on Insurance Sathi"
          subtitle="We focus on lifelong client relationships rather than quick transactions. Here is why policyholders across North 24 Parganas choose us for their insurance advisory."
        />

        {/* 5 Pillars Grid + Audit CTA Card */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.symbolId}
              className="group relative rounded-2xl border border-brand-border/80 bg-brand-light/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0284C7]/45 hover:bg-white hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedFeatureSymbol id={item.symbolId} className="h-14 w-14 drop-shadow-xs" />
                </div>
                <span className="text-[11px] font-bold text-[#0F2E8A] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/80 whitespace-nowrap">
                  {item.highlight}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors">
                {item.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center gap-1.5 text-xs font-bold text-[#0F2E8A]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" aria-hidden="true" />
                <span>Available across Barasat &amp; surrounding areas</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Consultation Anchor */}
          <div className="rounded-2xl border border-[#FF6B00]/30 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/50 p-7 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
            <div>
              <div className="flex items-center justify-between gap-3">
                <AnimatedFeatureSymbol id="transparent-disclosure" className="h-14 w-14 drop-shadow-xs" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FF6B00] bg-orange-100/70 px-2.5 py-1 rounded-full border border-orange-200">
                  Free Audit
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-[#0F2E8A]">
                Free Policy Health-Check &amp; Audit
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Bring your existing policy bond to our Duckbanglow More office or share via WhatsApp. We will audit exclusions, waiting periods, and nominee records at zero consultation cost.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-orange-200/60">
              <Link href="/contact" className="block w-full">
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full justify-center whitespace-nowrap"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
