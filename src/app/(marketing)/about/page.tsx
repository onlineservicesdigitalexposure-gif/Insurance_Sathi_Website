import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/data";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import {
  AnimatedFeatureSymbol,
  type FeatureSymbolId,
} from "@/components/brand/AnimatedFeatureSymbol";

export const metadata: Metadata = {
  title: "About Us | Insurance Sathi - Founded by MD Abrahim in Barasat",
  description:
    "Learn about Insurance Sathi, established on 20 May 2023 at Duckbanglow More, Barasat. Unbiased insurance advisory, transparent policy comparisons, and claim paperwork guidance by MD Abrahim.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Insurance Sathi | Trusted Insurance Advisory in Barasat",
    description:
      "Founded by MD Abrahim at Duckbanglow More, Barasat. Dedicated to providing honest, transparent insurance advisory across Barasat, Madhyamgram, and Habra.",
    url: "https://insurancesathi.in/about",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "About Insurance Sathi - Barasat, West Bengal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Insurance Sathi | Founded by MD Abrahim",
    description:
      "Unbiased insurance guidance, policy revivals, and claim assistance in Barasat, Madhyamgram, and Habra.",
    images: ["/images/og-image.svg"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://insurancesathi.in/about#webpage",
      url: "https://insurancesathi.in/about",
      name: "About Insurance Sathi - Founded by MD Abrahim",
      description:
        "Insurance Sathi, founded by MD Abrahim at Duckbanglow More, Barasat, provides unbiased insurance advisory and claim assistance.",
      publisher: {
        "@id": "https://insurancesathi.in/#localbusiness",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://insurancesathi.in/about#breadcrumbs",
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
          name: "About Us",
          item: "https://insurancesathi.in/about",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  const pillars: {
    symbolId: FeatureSymbolId;
    title: string;
    desc: string;
  }[] = [
    {
      symbolId: "transparent-disclosure",
      title: "100% Transparent Disclosures",
      desc: "We ensure all medical histories, previous treatments, and material facts are declared upfront so your claims are never rejected under non-disclosure clauses.",
    },
    {
      symbolId: "unbiased-advisory",
      title: "Unbiased Need-Based Advisory",
      desc: "We recommend policies based purely on your family's coverage requirements and budget, not on insurer sales commissions.",
    },
    {
      symbolId: "local-presence",
      title: "Local Physical Presence",
      desc: "Our permanent office at Duckbanglow More, Barasat means you can walk in anytime to speak directly with an advisor instead of waiting on call-center hold.",
    },
    {
      symbolId: "claim-paperwork",
      title: "End-to-End Claim Paperwork",
      desc: "From pre-authorization forms at local hospitals to compiling itemized reimbursement dossiers, we stand by you when emergencies arise.",
    },
    {
      symbolId: "long-term-servicing",
      title: "Long-Term Policy Servicing",
      desc: "Our relationship continues after policy issuance with timely premium reminders, nominee endorsements, and lapsed policy revival assistance.",
    },
    {
      symbolId: "doorstep-support",
      title: "Doorstep & Digital Support",
      desc: "Convenient doorstep document collection for families and senior citizens across Barasat, Madhyamgram, and Habra.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="min-h-screen">
        {/* Page Hero */}
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
                items={[{ label: "About Us" }]}
                className="[&_ol]:text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-white"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-orange backdrop-blur-md border border-white/15">
                <Sparkles className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                <span>Our Heritage &amp; Mission</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <LogoHeadingText mode="dark">All Insurance Solutions Under One Roof</LogoHeadingText>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                Founded by <strong>MD Abrahim</strong> on 20 May 2023 at Duckbanglow More, Barasat. We provide honest, client-first insurance guidance for families, motorists, and business owners across North 24 Parganas.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-brand-orange" />
                  <span>Established 20 May 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-orange" />
                  <span>Duckbanglow More, Barasat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-orange" />
                  <span>Direct Advisor: 9332364068</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Founder's Story & Vision */}
        <section className="bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-royal">
                  <Award className="h-4 w-4" />
                  <span>The Story Behind Insurance Sathi</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2E8A] leading-snug">
                  <LogoHeadingText>Why We Built an Accessible, Honest Advisory Desk in Barasat</LogoHeadingText>
                </h2>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  For decades, buying insurance in suburban Bengal has been riddled with confusion. Policyholders were often sold investment-heavy plans with low life cover, or handed mediclaim policies without being told about 2-year waiting periods or room-rent deductions.
                </p>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  When a medical emergency or accident occurred, families were left to decipher complex hospital TPA paperwork alone, frequently suffering severe deductions or delayed claims.
                </p>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  Recognizing this gap, <strong>MD Abrahim</strong> established <strong>Insurance Sathi</strong> on <strong>20 May 2023</strong> at Duckbanglow More, Barasat. The objective was simple: build an approachable neighborhood advisory service where clients could walk in, get straightforward answers in plain language, compare policies across top insurers, and receive hands-on assistance when filing claims.
                </p>

                <div className="rounded-2xl border border-brand-royal-100 bg-brand-royal-50/50 p-5 text-brand-dark">
                  <h3 className="font-bold text-sm text-brand-navy">Our Core Promise:</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    We will never sell you a policy we wouldn&apos;t recommend to our own family. We review terms, exclusions, and waiting periods with complete honesty before you pay a single rupee.
                  </p>
                </div>
              </div>

              {/* Founder Profile Card with Authentic Felicitation Photo */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-brand-border bg-gradient-to-br from-slate-50 via-white to-slate-50/80 shadow-card relative overflow-hidden flex flex-col">
                  {/* Full View Authentic Recognition Photo */}
                  <div className="relative w-full aspect-[1538/1023] overflow-hidden bg-slate-900 group">
                    <Image
                      src="/images/AboutImage.jpeg"
                      alt="MD Abrahim receiving Certificate of Appreciation at Kolkata felicitation ceremony"
                      width={1538}
                      height={1023}
                      priority
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Recognition Badge Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white drop-shadow-md">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-amber-300 border border-white/20">
                        <Award className="h-3.5 w-3.5 text-amber-400" />
                        <span>Felicitation &amp; Recognition</span>
                      </span>
                      <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-slate-200 border border-white/10">
                        PE Kolkata
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 sm:p-7 text-center">
                    <h3 className="text-xl sm:text-2xl font-black text-brand-dark">MD Abrahim</h3>
                    <p className="text-xs font-bold text-brand-royal mt-1">Founder &amp; Principal Insurance Advisor</p>
                    <p className="mt-0.5 text-xs text-brand-muted">Insurance Sathi • Established 20 May 2023</p>

                    <div className="mt-6 border-t border-slate-200 pt-5 space-y-3 text-xs text-left text-slate-700">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Dedicated in-person guidance across Barasat</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Doorstep service in Madhyamgram &amp; Habra</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Specialist in discontinued &amp; lapsed policy revivals</span>
                      </div>
                    </div>

                    <div className="mt-7 flex gap-3">
                      <a
                        href="https://wa.me/919332364068?text=Hello%20MD%20Abrahim,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20insurance."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="tel:9332364068"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-white py-3 text-xs font-bold text-brand-navy hover:bg-slate-50 transition-colors shadow-xs"
                      >
                        <Phone className="h-4 w-4 text-brand-orange" />
                        <span>Call Advisor</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Advisory Pillars */}
        <section className="bg-slate-50 border-t border-brand-border/60">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <Badge variant="royal" size="md">
                Why Policyholders Choose Us
              </Badge>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#0F2E8A]">
                <LogoHeadingText>The Principles That Guide Every Consultation</LogoHeadingText>
              </h2>
              <p className="mt-3 text-sm text-brand-muted">
                Insurance is a long-term commitment. Here is how we ensure you and your dependents are fully protected.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  interactive
                  className="group bg-white border-brand-border shadow-card p-6 hover:border-[#0284C7]/45 transition-all duration-300"
                >
                  <CardContent className="p-0 space-y-3.5">
                    <div className="inline-flex transition-transform duration-300 group-hover:scale-110">
                      <AnimatedFeatureSymbol
                        id={pillar.symbolId}
                        className="h-14 w-14 drop-shadow-xs"
                      />
                    </div>
                    <h3 className="text-base font-extrabold text-[#0F2E8A] group-hover:text-[#0284C7] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Physical Office Invitation */}
        <section className="bg-white border-t border-brand-border/60">
          <div className="container-site">
            <div className="rounded-3xl border border-brand-navy-800 bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 p-8 sm:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <Badge variant="orange" size="sm">
                    Walk-in Office
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    <LogoHeadingText mode="dark">Visit Our Central Office at Duckbanglow More</LogoHeadingText>
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                    Conveniently situated along Jessore Road in Barasat, just 5 minutes from Champadali Bus Stand and Barasat Junction Railway Station. Bring your existing policy bonds for a complimentary coverage and revival review.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-brand-orange" />
                      Duckbanglow More, Barasat, North 24 Parganas - 700124
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-brand-orange" />
                      Monday to Saturday: 9:30 AM – 7:30 PM
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center font-bold tracking-tight rounded-xl bg-brand-orange text-white hover:bg-brand-orange-600 shadow-md px-6 py-3 text-sm gap-2 transition-all active:scale-[0.99] text-center"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
