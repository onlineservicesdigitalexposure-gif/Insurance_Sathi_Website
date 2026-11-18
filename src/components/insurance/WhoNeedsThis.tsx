import { Users, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";
import type { InsuranceCategoryItem } from "@/types";

export interface WhoNeedsThisProps {
  category: InsuranceCategoryItem;
}

const PROFILE_SYMBOLS: readonly FeatureSymbolId[] = [
  "personal-guidance",
  "doorstep-support",
  "unbiased-advisory",
];

export function WhoNeedsThis({ category }: WhoNeedsThisProps) {
  return (
    <section
      id="who-needs-this"
      aria-labelledby="who-needs-this-heading"
      className="bg-slate-50 border-b border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="who-needs-this-heading"
          badge="Target Profiles"
          badgeIcon={<Users className="h-3.5 w-3.5" />}
          title={`Who Should Consider ${category.title}?`}
          subtitle={`Discover why this coverage is vital across various life stages, professions, and business situations.`}
        />

        {/* Why Needed Overview */}
        <div className="mt-10 rounded-2xl border border-brand-border/80 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="shrink-0">
                <AnimatedFeatureSymbol id="right-policy" className="h-12 w-12 drop-shadow-xs" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-[#0F2E8A]">
                  Core Purpose &amp; Value Proposition
                </h3>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                  {category.whyNeeded}
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-brand-light p-4 border border-brand-border/60 text-xs text-brand-navy shrink-0 md:max-w-xs">
              <span className="font-bold block mb-1">Recommended Audience:</span>
              <span className="text-brand-muted">{category.recommendedFor}</span>
            </div>
          </div>
        </div>

        {/* Target Profiles Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {category.whoNeedsThis.map((item, index) => (
            <Card
              key={index}
              interactive
              className="group flex flex-col justify-between border-brand-border/80 bg-white p-6 shadow-card transition-all duration-300 hover:border-[#0284C7]/45"
            >
              <div>
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <AnimatedFeatureSymbol
                        id={PROFILE_SYMBOLS[index % PROFILE_SYMBOLS.length]}
                        className="h-12 w-12 drop-shadow-xs"
                      />
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200/80 px-3 py-1 text-xs font-bold text-[#0F2E8A]">
                      <span>Profile 0{index + 1}</span>
                    </div>
                  </div>

                  <CardTitle className="mt-4 text-lg font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors">
                    {item.profile}
                  </CardTitle>
                </CardHeader>

                <div className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-700 block text-xs uppercase tracking-wider mb-1">
                      Situation / Scenario:
                    </span>
                    <p className="text-brand-muted leading-relaxed">
                      {item.scenario}
                    </p>
                  </div>
                </div>
              </div>

              <CardContent className="p-0 mt-6 pt-4 border-t border-brand-border/60">
                <div className="rounded-xl bg-emerald-50/70 p-3.5 border border-emerald-200/60 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="text-xs text-emerald-950 leading-relaxed">
                    <span className="font-bold block">Recommended Focus:</span>
                    <span>{item.recommendedFocus}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
