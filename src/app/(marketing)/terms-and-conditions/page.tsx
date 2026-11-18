import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data";
import { TermsConditionsView } from "@/components/legal/TermsConditionsView";

export const metadata: Metadata = {
  title: "Terms & Conditions | Insurance Sathi - Barasat, West Bengal",
  description:
    "Transparent advisory terms, IRDAI-aligned boundaries, Utmost Good Faith disclosures, and policyholder guidelines for Insurance Sathi at Duckbanglow More, Barasat.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Insurance Sathi",
    description:
      "Clear advisory scope, insurer underwriting authority, honest disclosure guidelines, and Barasat jurisdiction terms for Insurance Sathi.",
    url: "https://insurancesathi.in/terms-and-conditions",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Insurance Sathi Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Insurance Sathi",
    description:
      "Plain-spoken advisory scope, IRDAI compliance standards, and policyholder responsibilities at Insurance Sathi.",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsConditionsView />;
}
