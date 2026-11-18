"use client";

import * as React from "react";
import {
  MessageCircle,
  PhoneCall,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Send,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import {
  validateEnquiryForm,
  type EnquiryFormData,
  type EnquiryFormErrors,
  formatEnquiryMessage,
  buildWhatsAppUrl,
  LOCATIONS_OPTIONS,
  INSURANCE_CATEGORIES_OPTIONS,
  SERVICES_REQUIRED_OPTIONS,
  type LocationOption,
  type InsuranceCategoryOption,
  type ServiceRequiredOption,
} from "./enquirySchema";
import { FormField } from "./FormField";
import { SelectField } from "./SelectField";
import { TextareaField } from "./TextareaField";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";
import { SITE_CONFIG } from "@/data/site";
import { cn } from "@/lib/utils";

export interface EnquiryFormProps {
  defaultLocation?: LocationOption;
  defaultCategory?: InsuranceCategoryOption;
  defaultService?: ServiceRequiredOption;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: "card" | "plain";
  onSuccess?: (data: EnquiryFormData) => void;
}

export function EnquiryForm({
  defaultLocation = "Barasat",
  defaultCategory = "Health Insurance",
  defaultService = "Purchase New Policy",
  title,
  subtitle,
  className,
  variant = "card",
  onSuccess,
}: EnquiryFormProps) {
  const [formValues, setFormValues] = React.useState<EnquiryFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: defaultLocation,
    otherLocationDetails: "",
    insuranceCategory: defaultCategory,
    serviceRequired: defaultService,
    message: "",
  });
  const [errors, setErrors] = React.useState<EnquiryFormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [lastSubmittedData, setLastSubmittedData] = React.useState<EnquiryFormData | null>(null);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = React.useState<string>("");

  const updateField = <K extends keyof EnquiryFormData>(
    key: K,
    value: EnquiryFormData[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validateEnquiryForm(formValues);
    if (result.errors || !result.data) {
      setErrors(result.errors ?? {});
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const validatedData = result.data;
    const whatsappUrl = buildWhatsAppUrl(validatedData);
    setLastSubmittedData(validatedData);
    setLastWhatsAppUrl(whatsappUrl);

    await new Promise((resolve) => setTimeout(resolve, 200));

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    if (onSuccess) {
      onSuccess(validatedData);
    }
  };

  const handleReset = () => {
    setFormValues({
      fullName: "",
      phoneNumber: "",
      email: "",
      location: defaultLocation,
      otherLocationDetails: "",
      insuranceCategory: defaultCategory,
      serviceRequired: defaultService,
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setLastSubmittedData(null);
    setLastWhatsAppUrl("");
  };

  return (
    <div
      className={cn(
        variant === "card"
          ? "rounded-3xl border border-brand-border bg-white p-6 sm:p-10 shadow-card"
          : "w-full",
        className
      )}
    >
      {/* Optional Heading */}
      {(title || subtitle) && !isSubmitted && (
        <div className="mb-6 space-y-1.5 border-b border-brand-border/60 pb-5">
          {title && (
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2E8A] tracking-tight">
              <LogoHeadingText>{title}</LogoHeadingText>
            </h3>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Submission Success & WhatsApp Dispatch State */}
      {isSubmitted && lastSubmittedData ? (
        <div className="py-6 text-center space-y-5 animate-in fade-in-50 duration-200">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-xs">
            <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2E8A]">
              <LogoHeadingText>Enquiry Prepared for WhatsApp Dispatch!</LogoHeadingText>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-brand-dark">{lastSubmittedData.fullName}</strong>. A new WhatsApp chat tab has been opened with your pre-formatted enquiry ready for you to review and send to MD Abrahim at{" "}
              <strong className="text-brand-dark">{SITE_CONFIG.contact.phone}</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/60 p-4 text-left max-w-lg mx-auto text-xs text-emerald-950 font-mono shadow-xs whitespace-pre-wrap leading-relaxed">
            {formatEnquiryMessage(lastSubmittedData)}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            {lastWhatsAppUrl && (
              <a
                href={lastWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  leftIcon={<MessageCircle className="h-4 w-4" />}
                  className="w-full shadow-md shadow-brand-orange/20"
                >
                  Re-open WhatsApp
                </Button>
              </a>
            )}

            <a
              href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
              className="w-full sm:flex-1"
            >
              <Button
                variant="outline"
                size="md"
                leftIcon={<PhoneCall className="h-4 w-4 text-brand-royal" />}
                className="w-full"
              >
                Direct Call
              </Button>
            </a>
          </div>

          <div className="pt-3">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold text-brand-royal hover:underline focus:outline-none cursor-pointer"
            >
              ← Submit Another Enquiry
            </button>
          </div>

          <div className="border-t border-brand-border/60 pt-4 text-[11px] text-slate-600 max-w-md mx-auto">
            <p>
              Privacy Notice: Your enquiry is transmitted directly to WhatsApp on your device and is not saved on any public database. We never ask for OTPs or banking credentials.
            </p>
          </div>
        </div>
      ) : (
        /* The Active Input Form (Zero-Dependency Fast Controlled State) */
        <form
          onSubmit={handleFormSubmit}
          noValidate
          aria-busy={isSubmitting}
          className="space-y-5"
        >
          {/* Row 1: Full Name & Mobile */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              label="Full Name"
              htmlFor="fullName"
              required
              error={errors.fullName}
            >
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Subir Mukherjee"
                autoComplete="name"
                disabled={isSubmitting}
                value={formValues.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                leftIcon={<User className="h-4 w-4 text-slate-500" />}
              />
            </FormField>

            <FormField
              label="Mobile Number"
              htmlFor="phoneNumber"
              required
              error={errors.phoneNumber}
              helperText="10-digit Indian number"
            >
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="e.g. 9830012345"
                autoComplete="tel"
                disabled={isSubmitting}
                value={formValues.phoneNumber}
                onChange={(e) => updateField("phoneNumber", e.target.value)}
                leftIcon={<Phone className="h-4 w-4 text-slate-500" />}
              />
            </FormField>
          </div>

          {/* Row 2: Email (Optional) & Location */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              label="Email Address"
              htmlFor="email"
              error={errors.email}
            >
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. subir@example.com"
                autoComplete="email"
                disabled={isSubmitting}
                value={formValues.email || ""}
                onChange={(e) => updateField("email", e.target.value)}
                leftIcon={<Mail className="h-4 w-4 text-slate-500" />}
              />
            </FormField>

            <FormField
              label="Your Location"
              htmlFor="location"
              required
              error={errors.location}
            >
              <SelectField
                id="location"
                name="location"
                options={LOCATIONS_OPTIONS}
                disabled={isSubmitting}
                value={formValues.location}
                onChange={(e) => updateField("location", e.target.value as LocationOption)}
              />
            </FormField>
          </div>

          {/* Conditional "Other Location" Input */}
          {formValues.location === "Other" && (
            <FormField
              label="Specify Town / Area"
              htmlFor="otherLocationDetails"
              error={errors.otherLocationDetails}
              helperText="e.g. Deganga, Bangaon, Basirhat, Naihati, etc."
            >
              <Input
                id="otherLocationDetails"
                name="otherLocationDetails"
                type="text"
                placeholder="Enter your city, town or block name"
                disabled={isSubmitting}
                value={formValues.otherLocationDetails || ""}
                onChange={(e) => updateField("otherLocationDetails", e.target.value)}
                leftIcon={<MapPin className="h-4 w-4 text-slate-500" />}
              />
            </FormField>
          )}

          {/* Row 3: Insurance Category & Service Required */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              label="Insurance Category"
              htmlFor="insuranceCategory"
              required
              error={errors.insuranceCategory}
            >
              <SelectField
                id="insuranceCategory"
                name="insuranceCategory"
                options={INSURANCE_CATEGORIES_OPTIONS}
                disabled={isSubmitting}
                value={formValues.insuranceCategory}
                onChange={(e) =>
                  updateField("insuranceCategory", e.target.value as InsuranceCategoryOption)
                }
              />
            </FormField>

            <FormField
              label="Service Required"
              htmlFor="serviceRequired"
              required
              error={errors.serviceRequired}
            >
              <SelectField
                id="serviceRequired"
                name="serviceRequired"
                options={SERVICES_REQUIRED_OPTIONS}
                disabled={isSubmitting}
                value={formValues.serviceRequired}
                onChange={(e) =>
                  updateField("serviceRequired", e.target.value as ServiceRequiredOption)
                }
              />
            </FormField>
          </div>

          {/* Row 4: Message */}
          <FormField
            label="Message & Requirement Details"
            htmlFor="message"
            required
            error={errors.message}
          >
            <TextareaField
              id="message"
              name="message"
              placeholder="Please describe your policy requirements, renewal date, or questions (e.g. Looking for Rs 10 Lakh family health cover or need help reviving an old policy)..."
              rows={3}
              currentCount={formValues.message.length}
              maxCount={1000}
              disabled={isSubmitting}
              value={formValues.message}
              onChange={(e) => updateField("message", e.target.value)}
            />
          </FormField>

          {/* Customer Explanation Banner */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-3.5 text-xs text-brand-navy flex items-start gap-2.5">
            <MessageCircle className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
            <div className="leading-relaxed">
              <span className="font-bold text-brand-dark">How It Works: </span>
              <span>
                Clicking the button below will open WhatsApp with your pre-filled inquiry. You can review the details before sending directly to MD Abrahim at Insurance Sathi.
              </span>
            </div>
          </div>

          {/* Submit Action */}
          <div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              leftIcon={
                isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )
              }
              className="w-full shadow-md shadow-brand-orange/20 text-sm font-bold"
            >
              {isSubmitting ? "Generating WhatsApp Message..." : "Submit Enquiry via WhatsApp"}
            </Button>
          </div>

          {/* Security & Regulatory Safeguards */}
          <div className="pt-2 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-700 shrink-0" aria-hidden="true" />
              <span>100% Privacy • No database storage • Zero spam calls</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-800">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Never share OTPs, PINs, or bank credentials</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
