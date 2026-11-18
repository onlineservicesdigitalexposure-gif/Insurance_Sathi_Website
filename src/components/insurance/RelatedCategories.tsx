import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import {
  AnimatedInsuranceSymbol,
  type InsuranceSymbolId,
} from "@/components/brand/AnimatedInsuranceSymbol";
import type { InsuranceCategoryItem } from "@/types";

export interface RelatedCategoriesProps {
  relatedCategories: readonly InsuranceCategoryItem[];
}

function getSymbolIdForSlug(slug: string): InsuranceSymbolId {
  switch (slug) {
    case "life-insurance":
      return "life-insurance";
    case "health-insurance":
      return "health-insurance";
    case "motor-insurance":
      return "motor-insurance";
    case "term-insurance":
      return "term-insurance";
    case "home-insurance":
      return "home-insurance";
    case "travel-insurance":
      return "travel-insurance";
    case "business-insurance":
      return "business-insurance";
    case "investment-plans":
      return "investment-plans";
    case "personal-accident-insurance":
      return "personal-accident";
    default:
      return "term-insurance";
  }
}

export function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
  if (!relatedCategories || relatedCategories.length === 0) {
    return null;
  }

  return (
    <section
      id="related-categories"
      aria-labelledby="related-categories-heading"
      className="bg-brand-light border-b border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="related-categories-heading"
          badge="Other Insurance Solutions"
          badgeIcon={<Layers className="h-3.5 w-3.5" />}
          title="Explore Additional Insurance Protection"
          subtitle="Insurance Sathi offers complete advisory across personal, family, vehicle, and commercial insurance under one roof."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedCategories.map((item) => (
            <Card
              key={item.id}
              interactive
              className="group flex flex-col justify-between border-brand-border/80 bg-white shadow-card hover:border-[#0284C7]/45"
            >
              <CardHeader className="p-6">
                <div className="inline-flex transition-transform duration-300 group-hover:scale-110">
                  <AnimatedInsuranceSymbol
                    id={getSymbolIdForSlug(item.slug)}
                    className="h-14 w-14 drop-shadow-xs"
                  />
                </div>

                <CardTitle className="mt-4 text-base font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors">
                  {item.title}
                </CardTitle>

                <CardDescription className="text-xs text-brand-royal font-semibold mt-0.5 line-clamp-1">
                  {item.tagline}
                </CardDescription>

                <p className="mt-2.5 text-xs text-brand-muted leading-relaxed line-clamp-3">
                  {item.shortDescription}
                </p>
              </CardHeader>

              <CardFooter className="p-6 pt-0">
                <Link
                  href={`/insurance/${item.slug}`}
                  className="inline-flex w-full items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2 text-xs font-bold text-[#0F2E8A] transition-all hover:bg-[#0F2E8A] hover:text-white"
                >
                  <span>Explore {item.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
