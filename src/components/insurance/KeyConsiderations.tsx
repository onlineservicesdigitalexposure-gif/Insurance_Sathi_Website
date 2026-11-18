import { FileCheck2, CheckSquare2, Info } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";
import type { InsuranceCategoryItem } from "@/types";

export interface KeyConsiderationsProps {
  category: InsuranceCategoryItem;
}

const CONSIDERATION_SYMBOLS: readonly FeatureSymbolId[] = [
  "policy-selection",
  "transparent-disclosure",
  "long-term-servicing",
  "claim-assistance",
];

export function KeyConsiderations({ category }: KeyConsiderationsProps) {
  return (
    <section
      id="key-considerations"
      aria-labelledby="key-considerations-heading"
      className="bg-slate-50 border-b border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="key-considerations-heading"
          badge="Policy Evaluation"
          badgeIcon={<FileCheck2 className="h-3.5 w-3.5" />}
          title={`Critical Factors Before Buying ${category.title}`}
          subtitle={`Do not choose an insurance policy based on the cheapest premium alone. Review these essential contractual clauses, waiting conditions, and fine-print factors.`}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {category.keyConsiderations.map((item, index) => (
            <Card
              key={index}
              className="group flex flex-col justify-between border-brand-border/80 bg-white p-6 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#0284C7]/45 hover:shadow-card-hover"
            >
              <div>
                <CardHeader className="p-0">
                  <div className="flex items-center gap-3.5">
                    <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <AnimatedFeatureSymbol
                        id={CONSIDERATION_SYMBOLS[index % CONSIDERATION_SYMBOLS.length]}
                        className="h-12 w-12 drop-shadow-xs"
                      />
                    </div>
                    <CardTitle className="text-lg font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </CardTitle>
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                    {item.explanation}
                  </p>
                </CardHeader>
              </div>

              <CardContent className="p-0 mt-5 pt-4 border-t border-brand-border/60">
                <div className="rounded-xl bg-slate-50 p-3.5 border border-brand-border/80 flex items-start gap-2.5">
                  <CheckSquare2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="text-xs text-brand-body leading-relaxed">
                    <span className="font-bold text-[#0F2E8A]">What to check: </span>
                    <span>{item.checklistItem}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Callout */}
        <div className="mt-8 rounded-2xl border border-blue-200/80 bg-blue-50/60 p-5 text-brand-navy flex items-start gap-3.5">
          <Info className="h-5 w-5 text-brand-royal mt-0.5 shrink-0" aria-hidden="true" />
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="font-bold text-[#0F2E8A]">
              Need Help Reviewing Policy Wordings in Barasat?
            </p>
            <p className="text-slate-600 leading-relaxed text-xs">
              Bring your policy prospectus, renewal quote, or existing policy bond to our office at Duckbanglow More, Barasat. We will help you identify hidden sub-limits, deductibles, or copay clauses before you commit your hard-earned savings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
