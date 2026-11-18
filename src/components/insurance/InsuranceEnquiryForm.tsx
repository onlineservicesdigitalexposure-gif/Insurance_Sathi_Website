"use client";

import * as React from "react";
import {
  MessageCircle,
  PhoneCall,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  User,
  Phone,
  FileQuestion,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/data/site";
import type { InsuranceCategoryItem, InsuranceSlug, LocationSlug } from "@/types";

const INSURANCE_CATEGORY_OPTIONS: readonly { slug: InsuranceSlug; title: string }[] = [
  { slug: "life-insurance", title: "Life Insurance" },
  { slug: "health-insurance", title: "Health Insurance" },
  { slug: "motor-insurance", title: "Motor Insurance" },
  { slug: "term-insurance", title: "Term Insurance" },
  { slug: "home-insurance", title: "Home Insurance" },
  { slug: "travel-insurance", title: "Travel Insurance" },
  { slug: "business-insurance", title: "Business Insurance" },
  { slug: "personal-accident-insurance", title: "Personal Accident Insurance" },
  { slug: "investment-plans", title: "Investment Plans" },
];

export interface InsuranceEnquiryFormProps {
  category: InsuranceCategoryItem;
}

export function InsuranceEnquiryForm({ category }: InsuranceEnquiryFormProps) {
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState<LocationSlug>("barasat");
  const [customCategory, setCustomCategory] = React.useState<InsuranceSlug | null>(null);
  const selectedCategory = customCategory ?? category.slug;
  const [notes, setNotes] = React.useState("");
  const [errors, setErrors] = React.useState<{ fullName?: string; phoneNumber?: string }>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors: { fullName?: string; phoneNumber?: string } = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phoneNumber = "Please enter a valid 10-digit mobile number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const currentCatObj = INSURANCE_CATEGORY_OPTIONS.find((c) => c.slug === selectedCategory);
    const catName = currentCatObj ? currentCatObj.title : category.title;
    const locationName =
      selectedLocation === "barasat"
        ? "Barasat"
        : selectedLocation === "madhyamgram"
        ? "Madhyamgram"
        : "Habra";

    const text = `Hello Insurance Sathi,\n\nI would like assistance with *${catName}*.\n\n*Name:* ${fullName.trim()}\n*Mobile:* ${phoneNumber.trim()}\n*Location:* ${locationName}${
      notes.trim() ? `\n*Details:* ${notes.trim()}` : ""
    }\n\nPlease guide me regarding suitable policy options and requirements.`;

    const url = `https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  return (
    <section
      id="insurance-enquiry"
      aria-labelledby="insurance-enquiry-heading"
      className="bg-white border-b border-brand-border/60"
    >
      <div className="container-site">
        <SectionHeader
          id="insurance-enquiry-heading"
          badge="Personal Consultation"
          badgeIcon={<Send className="h-3.5 w-3.5" />}
          title={`Inquire About ${category.title} Guidance`}
          subtitle="Get direct, unbiased assistance for your policy options, claim questions, or renewal queries across Barasat, Madhyamgram, and Habra."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-brand-border bg-slate-50/60 p-6 sm:p-10 shadow-card">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-dark">
                    Consultation Request Initiated!
                  </h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-brand-dark">{fullName}</span>. We will review your inquiry for{" "}
                    <span className="font-bold text-brand-royal">
                      {INSURANCE_CATEGORY_OPTIONS.find((c) => c.slug === selectedCategory)?.title || category.title}
                    </span>{" "}
                    shortly.
                  </p>
                  <p className="text-xs text-slate-500">
                    Need immediate assistance? Call our advisory desk directly:
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>
                      <Button variant="primary" size="md" leftIcon={<PhoneCall className="h-4 w-4" />}>
                        Call {SITE_CONFIG.contact.phone}
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName("");
                        setPhoneNumber("");
                        setCustomCategory(null);
                        setNotes("");
                      }}
                    >
                      Submit Another Query
                    </Button>
                  </div>
                </div>
              ) : (
                <form className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Input
                      label="Your Full Name"
                      placeholder="e.g. Subir Mukherjee"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      errorMessage={errors.fullName}
                      leftIcon={<User className="h-4 w-4" />}
                      required
                    />

                    <Input
                      label="Mobile Number"
                      type="tel"
                      placeholder="e.g. 9830012345"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      errorMessage={errors.phoneNumber}
                      leftIcon={<Phone className="h-4 w-4" />}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Insurance Category Selector */}
                    <div className="w-full space-y-1.5">
                      <label
                        htmlFor="category-select"
                        className="block text-xs font-bold uppercase tracking-wider text-brand-dark"
                      >
                        Insurance Category <span className="text-brand-orange">*</span>
                      </label>
                      <select
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setCustomCategory(e.target.value as InsuranceSlug)}
                        className="w-full rounded-xl border border-brand-border bg-white px-3.5 py-2.5 text-xs sm:text-sm text-brand-dark shadow-xs focus:border-brand-royal focus:outline-none focus:ring-2 focus:ring-brand-royal/20"
                      >
                        {INSURANCE_CATEGORY_OPTIONS.map((cat) => (
                          <option key={cat.slug} value={cat.slug}>
                            {cat.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Target Location Selector */}
                    <div className="w-full space-y-1.5">
                      <label
                        htmlFor="location-select"
                        className="block text-xs font-bold uppercase tracking-wider text-brand-dark"
                      >
                        Your Location <span className="text-brand-orange">*</span>
                      </label>
                      <select
                        id="location-select"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value as LocationSlug)}
                        className="w-full rounded-xl border border-brand-border bg-white px-3.5 py-2.5 text-xs sm:text-sm text-brand-dark shadow-xs focus:border-brand-royal focus:outline-none focus:ring-2 focus:ring-brand-royal/20"
                      >
                        <option value="barasat">Barasat</option>
                        <option value="madhyamgram">Madhyamgram</option>
                        <option value="habra">Habra</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Specific Question */}
                  <div className="w-full space-y-1.5">
                    <label
                      htmlFor="message-notes"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-dark"
                    >
                      Specific Requirements or Policy Details (Optional)
                    </label>
                    <textarea
                      id="message-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Looking for Rs 10 Lakh family health cover or need help understanding renewal grace period..."
                      className="w-full rounded-xl border border-brand-border bg-white p-3 text-xs sm:text-sm text-brand-dark shadow-xs focus:border-brand-royal focus:outline-none focus:ring-2 focus:ring-brand-royal/20"
                    />
                  </div>

                  {/* Dual Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      onClick={handleWhatsAppSubmit}
                      leftIcon={<MessageCircle className="h-5 w-5" />}
                      className="w-full sm:flex-1 shadow-md shadow-brand-orange/20"
                    >
                      Inquire via WhatsApp
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={handleCallbackSubmit}
                      leftIcon={<PhoneCall className="h-4 w-4 text-brand-navy" />}
                      className="w-full sm:flex-1"
                    >
                      Request Call Back
                    </Button>
                  </div>

                  {/* Privacy Guarantee */}
                  <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>
                      100% Privacy. Your phone number is kept confidential and used solely for this consultation.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Information & Contact Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Profile Card */}
            <div className="rounded-3xl border border-brand-border/80 bg-brand-navy text-white p-6 sm:p-8 shadow-card relative overflow-hidden">
              <div
                className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-brand-royal/30 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-xs font-semibold text-slate-200">
                    <Clock className="h-3 w-3 text-brand-orange" />
                    <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold text-white">
                    Insurance Sathi Advisory Desk
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Led by MD Abrahim • Established 20 May 2023
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-200 border-t border-white/15 pt-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-brand-orange mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-white">Office Location:</p>
                      <p className="text-slate-300 leading-relaxed text-xs">
                        Duckbanglow More, Barasat, North 24 Parganas, West Bengal - 700124.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneCall className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-white">Direct Phone:</p>
                      <a
                        href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                        className="text-xs text-slate-200 hover:text-white underline"
                      >
                        {SITE_CONFIG.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileQuestion className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-white">Service Reach:</p>
                      <p className="text-slate-300 text-xs">
                        Barasat, Madhyamgram, Habra &amp; North 24 Parganas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white/10 p-3.5 border border-white/10 text-xs text-slate-300">
                  <p className="font-semibold text-white">Walk-in Consultation:</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-slate-300">
                    You can visit our Duckbanglow More office directly with your policy bond, renewal notice, or claim papers for face-to-face assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Advisory Guarantee Box */}
            <div className="rounded-2xl border border-brand-border bg-slate-50 p-5 text-xs text-brand-body space-y-2">
              <p className="font-bold text-brand-dark flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>Our Advisory Promise to You</span>
              </p>
              <p className="text-slate-600 leading-relaxed">
                We never push unnecessary policies. We evaluate terms, deductibles, room rent limits, and network hospital lists so you make informed, confident choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
