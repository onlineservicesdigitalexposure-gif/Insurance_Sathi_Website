import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";
import type { ServiceItem } from "@/types";

export interface ServiceCoverageProps {
  service: ServiceItem;
}

const INCLUDED_FALLBACK_CYCLE: readonly FeatureSymbolId[] = [
  "personal-guidance",
  "policy-selection",
  "transparent-disclosure",
  "local-presence",
  "policy-servicing",
  "premium-guidance",
];

function resolveCoverageSymbol(title: string, included: boolean, index: number): FeatureSymbolId {
  if (!included) return "insurer-authority";
  const lower = title.toLowerCase();
  if (lower.includes("doorstep") || lower.includes("office") || lower.includes("local")) {
    return "local-presence";
  }
  if (lower.includes("comparison") || lower.includes("select") || lower.includes("analysis")) {
    return "policy-selection";
  }
  if (lower.includes("claim") || lower.includes("hospital") || lower.includes("surveyor")) {
    return "claim-assistance";
  }
  if (lower.includes("premium") || lower.includes("payment") || lower.includes("nach") || lower.includes("receipt")) {
    return "premium-guidance";
  }
  if (lower.includes("nominee") || lower.includes("servicing") || lower.includes("update") || lower.includes("endorsement")) {
    return "policy-servicing";
  }
  if (lower.includes("document") || lower.includes("bond") || lower.includes("verif") || lower.includes("proposal")) {
    return "transparent-disclosure";
  }
  if (lower.includes("revival") || lower.includes("lapse") || lower.includes("grace")) {
    return "long-term-servicing";
  }
  return INCLUDED_FALLBACK_CYCLE[index % INCLUDED_FALLBACK_CYCLE.length];
}

export function ServiceCoverage({ service }: ServiceCoverageProps) {
  return (
    <section
      id="service-scope"
      aria-labelledby="service-coverage-heading"
      className="bg-white"
    >
      <div className="container-site">
        <SectionHeader
          id="service-coverage-heading"
          badge="Service Scope"
          badgeIcon={<ShieldCheck className="h-3.5 w-3.5" />}
          title={`What Our ${service.title} Covers`}
          subtitle="Transparent support designed to eliminate administrative confusion and ensure your insurance documentation conforms to official insurer standards."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.coverageDetails.map((item, index) => {
            const isIncluded = item.included;
            const symbolId = resolveCoverageSymbol(item.title, isIncluded, index);

            return (
              <Card
                key={index}
                className={`group flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 ${
                  isIncluded
                    ? "border-brand-border bg-white shadow-card hover:border-[#0284C7]/45 hover:shadow-card-hover"
                    : "border-amber-200/90 bg-amber-50/45 shadow-xs hover:border-amber-300"
                }`}
              >
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <AnimatedFeatureSymbol
                        id={symbolId}
                        className="h-14 w-14 drop-shadow-xs"
                      />
                    </div>

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold ${
                        isIncluded
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200/80"
                          : "bg-amber-100 text-amber-800 border border-amber-200/80"
                      }`}
                    >
                      {isIncluded ? "Included in Service" : "Insurer Authority"}
                    </span>
                  </div>

                  <CardTitle className="mt-4 text-lg font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </CardTitle>

                  <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
