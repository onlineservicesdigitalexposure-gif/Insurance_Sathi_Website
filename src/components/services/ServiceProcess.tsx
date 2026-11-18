import { ArrowRight, Compass } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";
import type { ServiceItem } from "@/types";

export interface ServiceProcessProps {
  service: ServiceItem;
}

const PROCESS_SYMBOLS: readonly FeatureSymbolId[] = [
  "personal-guidance",
  "policy-selection",
  "transparent-disclosure",
  "doorstep-support",
];

export function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="service-process-heading"
      className="bg-slate-50 border-t border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="service-process-heading"
          badge="Step-by-Step Workflow"
          badgeIcon={<Compass className="h-3.5 w-3.5" />}
          title="How We Assist You Through the Process"
          subtitle="A structured, predictable approach from initial consultation to final document handover or resolution."
        />

        <div className="mt-10 relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.processSteps.map((step, index) => {
              const isLast = index === service.processSteps.length - 1;
              const symbolId = PROCESS_SYMBOLS[index % PROCESS_SYMBOLS.length];

              return (
                <div
                  key={step.stepNumber}
                  className="group relative flex flex-col justify-between rounded-2xl border border-brand-border bg-white p-6 shadow-card hover:-translate-y-1 hover:border-[#0284C7]/45 hover:shadow-card-hover transition-all duration-300"
                >
                  <div>
                    {/* Animated Symbol & Phase Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <AnimatedFeatureSymbol
                          id={symbolId}
                          className="h-14 w-14 drop-shadow-xs"
                        />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-sky-50 border border-sky-200/80 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0F2E8A]">
                        Phase 0{step.stepNumber}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base sm:text-lg font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {!isLast && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#0284C7]">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-sky-200 shadow-xs">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
