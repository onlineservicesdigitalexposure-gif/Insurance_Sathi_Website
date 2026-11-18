import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data";
import { PrivacyPolicyView } from "@/components/legal/PrivacyPolicyView";

export const metadata: Metadata = {
  title: "Privacy Policy | Insurance Sathi - Barasat, West Bengal",
  description:
    "How Insurance Sathi (Duckbanglow More, Barasat) protects your personal details, policy records, KYC papers, and claim documents with a strict zero-spam commitment aligned with India's DPDP Act, 2023.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Insurance Sathi",
    description:
      "Plain-spoken privacy commitments and data protection standards for Insurance Sathi policyholders across Barasat, Madhyamgram, and Habra.",
    url: "https://insurancesathi.in/privacy-policy",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Insurance Sathi Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Insurance Sathi",
    description:
      "Zero data selling, transparent KYC handling, and DPDP Act 2023 policyholder rights at Insurance Sathi.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
