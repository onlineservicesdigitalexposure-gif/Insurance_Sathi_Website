import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data";
import {
  HeroSection,
  PartnerLogosSection,
  WhyChooseUsSection,
  HowItWorksSection,
  AboutSection,
  FaqSection,
  BlogSection,
  ContactCtaSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Insurance Sathi | All Insurance Solutions Under One Roof in Barasat",
  description:
    "Unbiased insurance advisory, policy servicing, lapsed policy revivals, and claim assistance by MD Abrahim in Barasat, Madhyamgram, and Habra. Duckbanglow More office.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Insurance Sathi | All Insurance Solutions Under One Roof",
    description:
      "Expert insurance advisory and claim assistance across Barasat, Madhyamgram, and Habra by MD Abrahim. Life, Health, Motor, Term, Home, Travel insurance.",
    url: "https://insurancesathi.in",
    siteName: "Insurance Sathi",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Insurance Sathi - Barasat, West Bengal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Sathi | All Insurance Solutions Under One Roof",
    description:
      "Unbiased insurance advisory across Barasat, Madhyamgram, and Habra by MD Abrahim.",
    images: ["/images/og-image.svg"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://insurancesathi.in/#website",
  name: "Insurance Sathi",
  url: "https://insurancesathi.in",
  description: SITE_CONFIG.meta.defaultDescription,
  publisher: {
    "@id": "https://insurancesathi.in/#localbusiness",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="flex flex-col">
        {/* 1. Hero Section (Beema1 Layout + Banner 2 Insurance Options) */}
        <HeroSection />

        {/* 2. Leading Insurance Companies Logos (Horizontal Marquee from 2nd Banner) */}
        <PartnerLogosSection />

        {/* 3. Why Choose Insurance Sathi (5 Pillars) */}
        <WhyChooseUsSection />

        {/* 4. Contact / Consultation CTA ("Need Help With Your Insurance Policy?", Call Now, WhatsApp Us) - Positioned above Process */}
        <ContactCtaSection />

        {/* 5. How It Works (4 Steps) - "We Have The Best Team And The Best Process" */}
        <HowItWorksSection />

        {/* 6. About Insurance Sathi (Founder MD Abrahim & Established 20 May 2023) */}
        <AboutSection />

        {/* 7. FAQ Section (Interactive Accordion) */}
        <FaqSection />

        {/* 8. Knowledge Hub & Consumer Guides (Supports #blog navigation) */}
        <BlogSection />
      </div>
    </>
  );
}
