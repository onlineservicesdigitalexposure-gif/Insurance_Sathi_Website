import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SERVICES_DATA, SITE_CONFIG } from "@/data";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import {
  AnimatedInsuranceSymbol,
  type InsuranceSymbolId,
} from "@/components/brand/AnimatedInsuranceSymbol";

export const metadata: Metadata = {
  title: "Our Insurance Services | Insurance Sathi Barasat",
  description:
    "Explore 5 core insurance services by Insurance Sathi: Purchase New Policy, Policy Servicing, Premium Deposit Assistance, Lapsed Policy Revival, and Claims Guidance across Barasat, Madhyamgram, and Habra.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Insurance Services & Assistance | Insurance Sathi Barasat",
    description:
      "Expert guidance for new policies, document endorsements, renewal monitoring, discontinued policy revivals, and hospital claim settlements.",
    url: "https://insurancesathi.in/services",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Insurance Services - Insurance Sathi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Insurance Services | Insurance Sathi",
    description:
      "Complete policyholder servicing and claim assistance in Barasat, Madhyamgram, and Habra.",
    images: ["/images/og-image.svg"],
  },
};

const servicesListingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://insurancesathi.in/services#webpage",
      url: "https://insurancesathi.in/services",
      name: "Insurance Services Directory - Insurance Sathi",
      description:
        "Comprehensive directory of insurance policy servicing, revival, and claim assistance services.",
      publisher: {
        "@id": "https://insurancesathi.in/#localbusiness",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://insurancesathi.in/services#breadcrumbs",
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
          name: "Services",
          item: "https://insurancesathi.in/services",
        },
      ],
    },
  ],
};

export default function ServicesListingPage() {
  const symbolMap: Record<string, InsuranceSymbolId> = {
    "purchase-new-policy": "new-policy",
    "policy-services": "policy-services",
    "premium-deposit-assistance": "premium-deposit",
    "lapsed-policy-services": "lapsed-policy",
    "insurance-claim-assistance": "claim-assistance",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListingJsonLd) }}
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
                items={[{ label: "Services" }]}
                className="[&_ol]:text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-white"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-orange backdrop-blur-md border border-white/15">
                <Sparkles className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                <span>End-to-End Policyholder Assistance</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <LogoHeadingText mode="dark">Dedicated Insurance Services at Every Stage</LogoHeadingText>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                Whether you need to purchase a fresh policy, update your nominee records, pay overdue premiums, revive a discontinued plan, or file a hospital claim—our team is here to guide you step-by-step.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section>
          <div className="container-site space-y-8">
            {SERVICES_DATA.map((srv, idx) => {
              const symbolId = symbolMap[srv.slug] || "new-policy";
              const detailUrl = `/services/${srv.slug}`;
              const isEven = idx % 2 === 0;

              return (
                <Card
                  key={srv.id}
                  interactive
                  className="overflow-hidden border-brand-border bg-white shadow-card hover:border-brand-royal-300 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <Link href={detailUrl} className="relative block aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                          src={srv.imagePath}
                          alt={srv.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 450px"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-3">
                        <div className="shrink-0">
                          <AnimatedInsuranceSymbol id={symbolId} className="h-12 w-12 drop-shadow-xs" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-royal">Service #{idx + 1}</span>
                          <h2 className="text-xl sm:text-2xl font-bold text-[#0F2E8A]">
                            <Link href={detailUrl} className="transition-colors">
                              <LogoHeadingText>{srv.title}</LogoHeadingText>
                            </Link>
                          </h2>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                        {srv.shortDescription}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                        {srv.highlights.slice(0, 3).map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <Link
                          href={detailUrl}
                          className="inline-flex items-center gap-2 rounded-xl bg-brand-royal px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-royal-600 transition-colors shadow-sm"
                        >
                          <span>View Full Service Details</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <a
                          href="https://wa.me/919332364068?text=Hello%20MD%20Abrahim,%20I%20need%20assistance%20with%20insurance%20services."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          <span>Quick Inquiry</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
