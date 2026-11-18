import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

export const metadata: Metadata = {
  title: "Contact Us | Insurance Sathi - Duckbanglow More, Barasat",
  description:
    "Contact MD Abrahim at Insurance Sathi. Visit our office at Duckbanglow More, Barasat or call +91 9332364068 for insurance advisory, policy revivals, and claim assistance in Barasat, Madhyamgram, and Habra.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Insurance Sathi | Office at Duckbanglow More, Barasat",
    description:
      "Direct helpline: 9332364068. In-person policy consultations, claim guidance, and document assistance across Barasat, Madhyamgram, and Habra.",
    url: "https://insurancesathi.in/contact",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Contact Insurance Sathi - Barasat Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Insurance Sathi | Barasat Office",
    description:
      "Call +91 9332364068 or visit Duckbanglow More, Barasat for personal insurance advisory.",
    images: ["/images/og-image.svg"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://insurancesathi.in/contact#webpage",
      url: "https://insurancesathi.in/contact",
      name: "Contact Insurance Sathi - Barasat Advisory Desk",
      description:
        "Contact information, office location, and inquiry form for Insurance Sathi at Duckbanglow More, Barasat.",
      publisher: {
        "@id": "https://insurancesathi.in/#localbusiness",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://insurancesathi.in/contact#breadcrumbs",
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
          name: "Contact Us",
          item: "https://insurancesathi.in/contact",
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
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
                items={[{ label: "Contact Us" }]}
                className="[&_ol]:text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-white"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md border border-white/15">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
                <span>We Are Here to Help</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <LogoHeadingText mode="dark">Get Personal Insurance Assistance</LogoHeadingText>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                Have questions about policy premiums, waiting periods, or need urgent claim paperwork support? Visit our Duckbanglow More office or reach out directly to <strong>MD Abrahim</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Interactive Form */}
        <section>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Direct Contact Details & Location Guide */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl border border-brand-border bg-white p-6 sm:p-8 shadow-card space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#0F2E8A]">
                      <LogoHeadingText>Central Office Information</LogoHeadingText>
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-brand-muted">
                      Walk in during business hours or call ahead to review your files.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <strong className="block text-brand-dark font-bold">Office Address:</strong>
                        <span className="leading-relaxed">
                          {SITE_CONFIG.address.landmark}, {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, India - {SITE_CONFIG.address.postalCode}
                        </span>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          (5 mins from Champadali Bus Stand &amp; Barasat Junction Railway Station)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <strong className="block text-brand-dark font-bold">Direct Helpline &amp; WhatsApp:</strong>
                        <a
                          href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                          className="font-bold text-brand-navy hover:text-brand-royal hover:underline block text-base"
                        >
                          {SITE_CONFIG.contact.phone}
                        </a>
                        <span className="text-[11px] text-slate-600">
                          Direct Consultation with MD Abrahim
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-royal-50 text-brand-royal">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <strong className="block text-brand-dark font-bold">Email Address:</strong>
                        <a
                          href={`mailto:${SITE_CONFIG.contact.email}`}
                          className="text-brand-navy hover:underline break-all"
                        >
                          {SITE_CONFIG.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <strong className="block text-brand-dark font-bold">Working Hours:</strong>
                        <span>{SITE_CONFIG.workingHours.days}: {SITE_CONFIG.workingHours.timing}</span>
                        <p className="text-[11px] text-emerald-700 font-medium mt-0.5">
                          Emergency claim telephonic guidance available 24/7
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex gap-3">
                    <a
                      href="https://wa.me/919332364068?text=Hello%20MD%20Abrahim,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20insurance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-navy bg-brand-navy py-3 text-xs font-bold text-white hover:bg-brand-navy-800 transition-colors"
                    >
                      <Phone className="h-4 w-4 text-brand-orange" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

                {/* Regional Travel Directions */}
                <div className="rounded-3xl border border-brand-royal-100 bg-white p-6 shadow-card space-y-3 text-xs text-slate-700">
                  <h3 className="text-sm font-bold text-brand-navy flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-brand-royal" />
                    <span>How to Reach Our Duckbanglow More Office</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    • <strong>From Barasat Champadali / Station:</strong> Head towards Duckbanglow More along Jessore Road (approx. 5 minutes by auto/rickshaw).
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    • <strong>From Madhyamgram:</strong> Travel 5 km north along Jessore Road / NH12 directly to Duckbanglow More (approx. 10 to 15 minutes).
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    • <strong>From Habra / Ashoknagar:</strong> Travel south along NH12 towards Barasat to Duckbanglow intersection (approx. 30 minutes).
                  </p>
                </div>
              </div>

              {/* Right Column: Reusable Comprehensive Enquiry Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-white p-2 sm:p-4 shadow-card border border-brand-border">
                  <EnquiryForm
                    variant="card"
                    title="Send an Enquiry or Consultation Request"
                    subtitle="Fill in your details below. We will analyze your query and connect with you via WhatsApp."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
