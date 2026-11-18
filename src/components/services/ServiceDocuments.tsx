import { FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";
import { RegulatoryNotice } from "./RegulatoryNotice";
import type { ServiceItem } from "@/types";

export interface ServiceDocumentsProps {
  service: ServiceItem;
}

const DOC_GROUP_SYMBOLS: readonly FeatureSymbolId[] = [
  "transparent-disclosure",
  "policy-servicing",
  "premium-guidance",
  "claim-assistance",
];

export function ServiceDocuments({ service }: ServiceDocumentsProps) {
  return (
    <section
      id="required-documents"
      aria-labelledby="service-documents-heading"
      className="bg-white border-t border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="service-documents-heading"
          badge="Documentation Checklist"
          badgeIcon={<FileText className="h-3.5 w-3.5" />}
          title="Documents That May Be Required"
          subtitle="Preparing these documents in advance ensures faster processing and eliminates back-and-forth delays with the insurance company."
        />

        {/* Categorized Document Checklists */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {service.requiredDocuments.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="group rounded-2xl border border-brand-border bg-brand-light/40 p-6 sm:p-7 shadow-xs hover:border-[#0284C7]/40 hover:bg-white hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 border-b border-brand-border/70 pb-4">
                <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedFeatureSymbol
                    id={DOC_GROUP_SYMBOLS[groupIndex % DOC_GROUP_SYMBOLS.length]}
                    className="h-12 w-12 drop-shadow-xs"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0F2E8A]">
                  {group.category}
                </h3>
              </div>

              <ul className="mt-5 space-y-3 text-xs sm:text-sm text-slate-700">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {group.note && (
                <p className="mt-4 text-xs text-brand-muted border-t border-slate-200/60 pt-3">
                  Note: {group.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Specific Documents Disclaimer Box */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 flex items-start gap-3">
          <AlertCircle className="h-4 w-4 text-brand-royal mt-0.5 shrink-0" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong>Documentation Disclaimer:</strong> {service.documentsDisclaimer} Insurance Sathi provides compilation and verification assistance; however, additional documentation or certified copies may be requested by the insurer or TPA under specific underwriting and claim rules.
          </p>
        </div>

        {/* Mandatory Regulatory Compliance Notice */}
        <div className="mt-8">
          <RegulatoryNotice />
        </div>
      </div>
    </section>
  );
}
