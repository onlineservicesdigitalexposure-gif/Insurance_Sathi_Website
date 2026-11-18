import { AlertTriangle, XCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedFeatureSymbol } from "@/components/brand/AnimatedFeatureSymbol";
import type { InsuranceCategoryItem } from "@/types";

export interface ExclusionsNoticeProps {
  category: InsuranceCategoryItem;
}

export function ExclusionsNotice({ category }: ExclusionsNoticeProps) {
  return (
    <section
      id="exclusions-limitations"
      aria-labelledby="exclusions-heading"
      className="bg-white border-b border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="exclusions-heading"
          badge="Policy Exclusions"
          badgeIcon={<AlertTriangle className="h-3.5 w-3.5 text-amber-600" />}
          title={`Standard Exclusions & Policy Limitations`}
          subtitle={`Understanding what is NOT covered is just as critical as knowing what is covered. Review common scenarios where claims may be restricted or repudiated.`}
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Exclusions List */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-6 sm:p-8">
              <h3 className="text-base font-extrabold text-rose-950 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-rose-600 shrink-0" aria-hidden="true" />
                <span>Common Exclusions in {category.title}</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                The following situations are typically excluded under standard policies, subject to individual plan terms and add-on endorsements:
              </p>

              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
                {category.commonExclusions.map((exclusion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                    <span className="leading-relaxed">{exclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Regulatory Disclaimer & Advisory */}
          <div className="lg:col-span-5">
            <div
              role="note"
              aria-label="Statutory and Regulatory Disclaimer"
              className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7 text-amber-950 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3.5">
                <div className="shrink-0">
                  <AnimatedFeatureSymbol id="insurer-authority" className="h-12 w-12 drop-shadow-xs" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-amber-950">
                    Mandatory Policyholder Disclaimer
                  </h4>
                  <p className="text-[11px] text-amber-800 font-medium">
                    Terms &amp; Conditions Apply
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
                {category.exclusionsDisclaimer}
              </p>

              <div className="border-t border-amber-200/80 pt-3 text-[11px] sm:text-xs text-amber-800 space-y-2">
                <p>
                  <strong>Insurance Sathi</strong> is an independent advisory and document assistance firm based at Duckbanglow More, Barasat. We provide informational comparisons and paperwork guidance.
                </p>
                <p>
                  We do not guarantee policy issuance, underwriting loading waiver, or claim payouts. All benefits, terms, exclusions, deductibles, waiting periods, and claim admissibility decisions are determined solely by the respective IRDAI-registered insurance company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
