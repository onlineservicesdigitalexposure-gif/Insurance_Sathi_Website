import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { INSURANCE_CATEGORIES_DATA, SITE_CONFIG } from "@/data";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { Card, CardContent } from "@/components/ui/Card";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import {
  AnimatedInsuranceSymbol,
  type InsuranceSymbolId,
} from "@/components/brand/AnimatedInsuranceSymbol";

export const metadata: Metadata = {
  title: "Insurance Categories & Coverage Options | Insurance Sathi Barasat",
  description:
    "Explore 8 essential insurance categories with Insurance Sathi: Health, Life, Term, Motor, Home, Travel, Business, and Personal Accident insurance in Barasat, Madhyamgram, and Habra.",
  alternates: {
    canonical: "/insurance",
  },
  openGraph: {
    title: "Insurance Coverage Solutions | Insurance Sathi Barasat",
    description:
      "Compare Life, Health, Motor, Term, Home, Travel, Business, and Accident insurance with transparent terms and no hidden exclusions.",
    url: "https://insurancesathi.in/insurance",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Insurance Categories - Insurance Sathi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Categories | Insurance Sathi",
    description:
      "Compare 8 insurance categories with unbiased advisory in Barasat, Madhyamgram, and Habra.",
    images: ["/images/og-image.svg"],
  },
};

const insuranceListingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://insurancesathi.in/insurance#webpage",
      url: "https://insurancesathi.in/insurance",
      name: "Insurance Categories Directory - Insurance Sathi",
      description:
        "Comprehensive directory of life, health, motor, term, home, and commercial insurance options.",
      publisher: {
        "@id": "https://insurancesathi.in/#localbusiness",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://insurancesathi.in/insurance#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://insurancesathi.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insurance Categories",
          item: "https://insurancesathi.in/insurance",
        },
      ],
    },
  ],
};

export default function InsuranceListingPage() {
  const symbolMap: Record<string, InsuranceSymbolId> = {
    "life-insurance": "life-insurance",
    "health-insurance": "health-insurance",
    "motor-insurance": "motor-insurance",
    "term-insurance": "term-insurance",
    "home-insurance": "home-insurance",
    "travel-insurance": "travel-insurance",
    "business-insurance": "business-insurance",
    "investment-plans": "investment-plans",
    "personal-accident-insurance": "personal-accident",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceListingJsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-900 via-brand-navy to-brand-navy-800 text-white">
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-royal/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="container-site relative z-10">
            <div className="mb-6">
              <Breadcrumb
                items={[{ label: "Insurance Categories" }]}
                className="[&_ol]:text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-white"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-orange backdrop-blur-md border border-white/15">
                <Sparkles className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                <span>8 Core Coverage Categories</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <LogoHeadingText mode="dark">Complete Insurance Coverage for What Matters Most</LogoHeadingText>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                From protecting family health and securing life income to safeguarding vehicles, homes, and business assets—explore transparent, unbiased insurance solutions across Barasat, Madhyamgram, and Habra.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {INSURANCE_CATEGORIES_DATA.map((cat) => {
                const symbolId = symbolMap[cat.slug] || "term-insurance";
                const detailUrl = `/insurance/${cat.slug}`;

                return (
                  <Card
                    key={cat.id}
                    interactive
                    className="flex flex-col justify-between overflow-hidden border-brand-border bg-white shadow-card hover:border-brand-royal-300 hover:shadow-card-hover transition-all group"
                  >
                    <div>
                      {/* Image Preview */}
                      <Link href={detailUrl} className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <Image
                          src={cat.imagePath}
                          alt={cat.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>

                      <CardContent className="p-5">
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                            <AnimatedInsuranceSymbol id={symbolId} className="h-10 w-10" />
                          </div>
                          <h2 className="text-base font-bold text-[#0F2E8A] transition-colors">
                            <Link href={detailUrl}>
                              <LogoHeadingText>{cat.title}</LogoHeadingText>
                            </Link>
                          </h2>
                        </div>

                        <p className="text-xs text-brand-muted line-clamp-3 leading-relaxed mb-4">
                          {cat.shortDescription}
                        </p>

                        <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                          <p className="font-semibold text-brand-navy">Recommended For:</p>
                          <p className="text-slate-500 line-clamp-2">{cat.recommendedFor}</p>
                        </div>
                      </CardContent>
                    </div>

                    <div className="p-5 pt-0">
                      <Link
                        href={detailUrl}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-brand-royal-200 bg-brand-royal-50/70 py-2.5 text-xs font-bold text-brand-royal hover:bg-brand-royal hover:text-white transition-colors"
                      >
                        <span>Explore Coverage</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Need Guidance Banner */}
            <div className="mt-14 rounded-3xl border border-brand-border bg-white p-8 sm:p-10 shadow-card text-center max-w-3xl mx-auto">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-brand-orange mb-4">
                <HelpCircle className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Not Sure Which Policy Suits Your Needs?</h3>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Consult directly with <strong>MD Abrahim</strong> at Insurance Sathi. We analyze your medical background, liabilities, and monthly budget to recommend the most suitable coverage without sales pressure.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="https://wa.me/919332364068?text=Hello%20MD%20Abrahim,%20I%20need%20guidance%20selecting%20an%20insurance%20policy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <span>Ask on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-navy-800 transition-colors"
                >
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
