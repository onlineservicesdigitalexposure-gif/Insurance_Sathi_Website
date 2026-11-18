import { MessageCircle, Phone, ShieldCheck, MapPin } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import type { InsuranceCategoryOption } from "@/components/forms/enquirySchema";

export interface BlogEnquiryCtaProps {
  category?: string;
  className?: string;
}

// Map blog category string to valid enquiry schema category option
function mapToCategoryOption(category?: string): InsuranceCategoryOption {
  if (!category) return "Health Insurance";
  const lower = category.toLowerCase();
  if (lower.includes("health")) return "Health Insurance";
  if (lower.includes("term")) return "Term Insurance";
  if (lower.includes("motor") || lower.includes("car")) return "Motor Insurance";
  if (lower.includes("life")) return "Life Insurance";
  return "Health Insurance";
}

export function BlogEnquiryCta({ category, className = "" }: BlogEnquiryCtaProps) {
  const mappedCategory = mapToCategoryOption(category);

  return (
    <section
      className={`rounded-3xl border border-brand-royal-200 bg-gradient-to-br from-brand-navy-900 via-brand-navy to-brand-navy-950 p-6 sm:p-10 text-white shadow-xl ${className}`}
      aria-labelledby="blog-enquiry-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Information Column */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-orange border border-white/15">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            <span>Personal Advisory</span>
          </div>

          <h2
            id="blog-enquiry-heading"
            className="mt-3 text-2xl sm:text-3xl font-extrabold text-white leading-tight"
          >
            <LogoHeadingText mode="dark">Have Questions About Your Policy?</LogoHeadingText>
          </h2>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Don&apos;t leave claim settlements or waiting periods to chance. Speak directly with <strong>MD Abrahim</strong> at Insurance Sathi for clear, transparent guidance tailored to your situation.
          </p>

          <div className="mt-6 space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-orange shrink-0" />
              <span>Duckbanglow More, Barasat, North 24 Parganas - 700124</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-orange shrink-0" />
              <span>Direct helpline: +91 9332364068</span>
            </div>
          </div>

          {/* Direct WhatsApp Action */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919332364068?text=Hello%20MD%20Abrahim,%20I%20was%20reading%20your%20Insurance%20Sathi%20guide%20and%20had%20a%20question%20regarding%20my%20policy."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href="tel:9332364068"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition-colors border border-white/15"
            >
              <Phone className="h-4 w-4 text-brand-orange" />
              <span>Call 9332364068</span>
            </a>
          </div>
        </div>

        {/* Right Column: Reusable Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-white p-2 sm:p-4 text-slate-900 shadow-2xl">
            <EnquiryForm
              variant="card"
              defaultCategory={mappedCategory}
              title="Request Personal Policy Review"
              subtitle="Submit your details for expert guidance. We will connect with you via WhatsApp."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
