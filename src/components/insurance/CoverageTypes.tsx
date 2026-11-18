import { Layers, CheckCircle2, UserCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";
import type { InsuranceCategoryItem } from "@/types";

export interface CoverageTypesProps {
  category: InsuranceCategoryItem;
}

const COVERAGE_SYMBOLS: readonly FeatureSymbolId[] = [
  "right-policy",
  "better-protection",
  "secure-future",
  "trusted-partner",
];

export function CoverageTypes({ category }: CoverageTypesProps) {
  return (
    <section
      id="coverage-types"
      aria-labelledby="coverage-types-heading"
      className="bg-white border-b border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="coverage-types-heading"
          badge="Types of Coverage"
          badgeIcon={<Layers className="h-3.5 w-3.5" />}
          title={`Plan Options & Coverage Structures in ${category.title}`}
          subtitle={`Explore different plan categories and policy configurations to determine the right balance of protection, flexibility, and budget for your needs.`}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {category.coverageTypes.map((item, index) => (
            <Card
              key={index}
              interactive
              className="group flex flex-col justify-between border-brand-border/80 bg-slate-50/50 p-6 sm:p-8 hover:border-[#0284C7]/45 hover:bg-white transition-all duration-300"
            >
              <div>
                <CardHeader className="p-0">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <AnimatedFeatureSymbol
                        id={COVERAGE_SYMBOLS[index % COVERAGE_SYMBOLS.length]}
                        className="h-14 w-14 drop-shadow-xs"
                      />
                    </div>
                    {item.suitableFor && (
                      <Badge variant="navy" size="sm" className="max-w-[260px] truncate">
                        Option 0{index + 1} • Recommended
                      </Badge>
                    )}
                  </div>

                  <CardTitle className="mt-4 text-xl font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </CardTitle>

                  <CardDescription className="mt-2 text-sm text-brand-muted leading-relaxed font-normal">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 mt-6 border-t border-brand-border/60 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0F2E8A] mb-3">
                    Key Features &amp; Inclusions:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-brand-body">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              {item.suitableFor && (
                <div className="mt-6 rounded-xl bg-white p-3.5 border border-brand-border/60 text-xs text-brand-body flex items-start gap-2.5 shadow-xs">
                  <UserCheck className="h-4 w-4 text-brand-royal mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-[#0F2E8A]">Ideal For: </span>
                    <span>{item.suitableFor}</span>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
