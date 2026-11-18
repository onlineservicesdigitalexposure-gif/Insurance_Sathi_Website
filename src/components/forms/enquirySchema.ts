import { SITE_CONFIG } from "@/data/site";

export const LOCATIONS_OPTIONS = [
  "Barasat",
  "Madhyamgram",
  "Habra",
  "Other",
] as const;

export const INSURANCE_CATEGORIES_OPTIONS = [
  "Life Insurance",
  "Health Insurance",
  "Motor Insurance",
  "Term Insurance",
  "Home Insurance",
  "Travel Insurance",
  "Business Insurance",
  "Personal Accident",
] as const;

export const SERVICES_REQUIRED_OPTIONS = [
  "Purchase New Policy",
  "Policy Service",
  "Premium Deposit Assistance",
  "Lapsed Policy Service",
  "Claim Assistance",
] as const;

export type LocationOption = (typeof LOCATIONS_OPTIONS)[number];
export type InsuranceCategoryOption = (typeof INSURANCE_CATEGORIES_OPTIONS)[number];
export type ServiceRequiredOption = (typeof SERVICES_REQUIRED_OPTIONS)[number];

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  location: LocationOption;
  otherLocationDetails?: string;
  insuranceCategory: InsuranceCategoryOption;
  serviceRequired: ServiceRequiredOption;
  message: string;
}

export type EnquiryFormErrors = Partial<Record<keyof EnquiryFormData, string>>;

// Indian mobile regex: 10 digits starting with 6, 7, 8, or 9
const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const SIMPLE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Lightweight zero-dependency validation (replaces ~360 KB of zod + react-hook-form)
 */
export function validateEnquiryForm(
  raw: EnquiryFormData
): { data?: EnquiryFormData; errors?: EnquiryFormErrors } {
  const errors: EnquiryFormErrors = {};

  const fullName = raw.fullName.trim();
  if (fullName.length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  } else if (fullName.length > 100) {
    errors.fullName = "Full name cannot exceed 100 characters.";
  }

  const trimmedPhone = raw.phoneNumber.trim();
  const normalizedPhone = trimmedPhone
    .replace(/[\s\-+]/g, "")
    .replace(/^91(?=\d{10}$)/, "");
  if (!trimmedPhone) {
    errors.phoneNumber = "Mobile number is required.";
  } else if (!INDIAN_MOBILE_REGEX.test(normalizedPhone)) {
    errors.phoneNumber =
      "Please enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).";
  }

  const email = raw.email?.trim() || "";
  if (email && !SIMPLE_EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!LOCATIONS_OPTIONS.includes(raw.location)) {
    errors.location = "Please select a valid location.";
  }

  const otherLocationDetails = raw.otherLocationDetails?.trim() || "";
  if (otherLocationDetails.length > 100) {
    errors.otherLocationDetails = "Location cannot exceed 100 characters.";
  }

  if (!INSURANCE_CATEGORIES_OPTIONS.includes(raw.insuranceCategory)) {
    errors.insuranceCategory = "Please select an insurance category.";
  }

  if (!SERVICES_REQUIRED_OPTIONS.includes(raw.serviceRequired)) {
    errors.serviceRequired = "Please select the service required.";
  }

  const message = raw.message.trim();
  if (message.length < 10) {
    errors.message =
      "Please provide at least 10 characters describing your requirement.";
  } else if (message.length > 1000) {
    errors.message = "Message cannot exceed 1000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    data: {
      fullName,
      phoneNumber: normalizedPhone,
      email: email || undefined,
      location: raw.location,
      otherLocationDetails: otherLocationDetails || undefined,
      insuranceCategory: raw.insuranceCategory,
      serviceRequired: raw.serviceRequired,
      message,
    },
  };
}

/**
 * Formats the enquiry message according to the exact required specification.
 */
export function formatEnquiryMessage(data: EnquiryFormData): string {
  const displayLocation =
    data.location === "Other" && data.otherLocationDetails?.trim()
      ? `Other (${data.otherLocationDetails.trim()})`
      : data.location;

  const displayEmail = data.email && data.email.trim() ? data.email.trim() : "Not Provided";

  return [
    "New Website Enquiry - Insurance Sathi",
    "",
    `Name: ${data.fullName}`,
    `Mobile: ${data.phoneNumber}`,
    `Email: ${displayEmail}`,
    `Location: ${displayLocation}`,
    `Insurance Category: ${data.insuranceCategory}`,
    `Service Required: ${data.serviceRequired}`,
    `Message: ${data.message}`,
  ].join("\n");
}

/**
 * Builds the wa.me WhatsApp URL for dispatch to 9332364068.
 */
export function buildWhatsAppUrl(data: EnquiryFormData): string {
  const message = formatEnquiryMessage(data);
  const encodedText = encodeURIComponent(message);
  const whatsappNumber = SITE_CONFIG?.contact?.whatsappRaw || "919332364068";
  return `https://wa.me/${whatsappNumber}?text=${encodedText}`;
}
