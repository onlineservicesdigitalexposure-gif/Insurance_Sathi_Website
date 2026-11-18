import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import {
  AnimatedInsuranceSymbol,
  type InsuranceSymbolId,
} from "@/components/brand/AnimatedInsuranceSymbol";
import type { ServiceItem } from "@/types";

export interface RelatedServicesProps {
  relatedServices: readonly ServiceItem[];
}

function getServiceSymbolId(slug: string): InsuranceSymbolId {
  switch (slug) {
    case "purchase-new-policy":
      return "new-policy";
    case "policy-services":
      return "policy-services";
    case "premium-deposit-assistance":
      return "premium-deposit";
    case "lapsed-policy-services":
      return "lapsed-policy";
    case "insurance-claim-assistance":
      return "claim-assistance";
    default:
      return "new-policy";
  }
}

export function RelatedServices({ relatedServices }: RelatedServicesProps) {
  if (!relatedServices || relatedServices.length === 0) return null;

  return (
    <section
      id="related-services"
      aria-labelledby="related-services-heading"
      className="bg-brand-light border-t border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="related-services-heading"
          badge="Other Core Capabilities"
          badgeIcon={<Layers className="h-3.5 w-3.5" />}
          title="Explore Related Insurance Services"
          subtitle="Insurance Sathi offers complete, end-to-end policy lifecycle management under one roof."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((service) => (
            <Card
              key={service.id}
              interactive
              className="group flex flex-col justify-between border-brand-border bg-white shadow-card hover:border-[#0284C7]/45"
            >
              <div>
                <CardHeader className="p-6">
                  <div className="inline-flex transition-transform duration-300 group-hover:scale-110">
                    <AnimatedInsuranceSymbol
                      id={getServiceSymbolId(service.slug)}
                      className="h-14 w-14 drop-shadow-xs"
                    />
                  </div>

                  <CardTitle className="mt-4 text-base font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors leading-snug">
                    {service.title}
                  </CardTitle>

                  <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </CardHeader>
              </div>

              <CardFooter className="p-6 pt-0">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2E8A] hover:text-[#0284C7]"
                >
                  <span>View Details</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
