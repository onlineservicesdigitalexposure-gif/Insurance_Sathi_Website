import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  getInsuranceCategoryBySlug,
  getAllInsuranceSlugs,
  getRelatedInsuranceCategories,
  SITE_CONFIG,
} from "@/data";
import {
  InsuranceHero,
  CoverageTypes,
  KeyConsiderations,
  ExclusionsNotice,
  WhoNeedsThis,
  InsuranceFaqAccordion,
  InsuranceEnquiryForm,
  RelatedCategories,
  InsuranceAdvisoryNotice,
} from "@/components/insurance";

export interface InsurancePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Static Route Generation for all 8 insurance categories + alias routes
 */
export function generateStaticParams() {
  const slugs = getAllInsuranceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * Dynamic Metadata for SEO & OpenGraph Social Graph
 */
export async function generateMetadata({ params }: InsurancePageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getInsuranceCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return {
    title: category.seo.metaTitle,
    description: category.seo.metaDescription,
    keywords: [...category.seo.keywords],
    alternates: {
      canonical: `/insurance/${category.slug}`,
    },
    openGraph: {
      title: category.seo.metaTitle,
      description: category.seo.metaDescription,
      type: "website",
      locale: SITE_CONFIG.meta.locale,
      url: `/insurance/${category.slug}`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: category.imagePath,
          width: 800,
          height: 600,
          alt: category.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: category.seo.metaTitle,
      description: category.seo.metaDescription,
      images: [category.imagePath],
    },
  };
}

/**
 * Loading skeleton fallback for Insurance Category detail pages
 */
function InsuranceCategorySkeleton() {
  return (
    <div className="min-h-screen bg-slate-50/50 animate-pulse" aria-busy="true" aria-label="Loading insurance category">
      {/* Hero Skeleton */}
      <div className="relative overflow-hidden bg-brand-navy text-white">
        <div className="container-site max-w-4xl space-y-4">
          <div className="h-6 w-36 rounded-full bg-white/15" />
          <div className="h-10 w-4/5 rounded-xl bg-white/20" />
          <div className="h-5 w-2/3 rounded-lg bg-white/10" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container-site space-y-8">
        <div className="h-48 rounded-2xl border border-slate-200 bg-white p-8 space-y-4">
          <div className="h-6 w-1/3 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-100" />
          <div className="h-4 w-5/6 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

/**
 * Synchronous Server Component Root Page for Next.js 16 Partial Prerendering
 * Wrapped in React Suspense to isolate dynamic params resolution.
 */
export default function InsuranceCategoryPage({ params }: InsurancePageProps) {
  return (
    <Suspense fallback={<InsuranceCategorySkeleton />}>
      <InsuranceCategoryContent params={params} />
    </Suspense>
  );
}

/**
 * Asynchronous Insurance Category Page Content Renderer
 * Awaits params promise inside Suspense boundary.
 */
async function InsuranceCategoryContent({ params }: InsurancePageProps) {
  const { slug } = await params;
  const category = getInsuranceCategoryBySlug(slug);

  // Return standard Next.js 404 for invalid category slugs
  if (!category) {
    notFound();
  }

  // Related categories for internal linking
  const relatedCategories = getRelatedInsuranceCategories(category.slug, 4);

  // Schema.org Structured Data: Service + BreadcrumbList + FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${category.title} Advisory`,
        description: category.shortDescription,
        provider: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          telephone: SITE_CONFIG.contact.phone,
          email: SITE_CONFIG.contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_CONFIG.address.street,
            addressLocality: SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            postalCode: SITE_CONFIG.address.postalCode,
            addressCountry: "IN",
          },
        },
        areaServed: SITE_CONFIG.targetLocations.map((loc) => ({
          "@type": "AdministrativeArea",
          name: loc,
        })),
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Insurance",
            item: "https://insurancesathi.in/insurance",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: category.title,
            item: `https://insurancesathi.in/insurance/${category.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: category.categoryFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <article className="flex flex-col">
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1 & 2. Hero Section: Unique SEO Heading, Category Introduction, Highlights & Image */}
      <InsuranceHero category={category} />

      {/* 3. Types of Coverage: Plan Options & Configurations */}
      <CoverageTypes category={category} />

      {/* 4. Key Considerations: Critical Policy Terms, Deductibles, Waiting Periods */}
      <KeyConsiderations category={category} />

      {/* 5. Common Exclusions & Policy Limitations Disclaimer */}
      <ExclusionsNotice category={category} />

      {/* 6. Who May Need This Insurance: Target Scenarios & Recommended Focus */}
      <WhoNeedsThis category={category} />

      {/* 7. Relevant FAQs: Category-Specific Q&A with Interactive Accordion */}
      <InsuranceFaqAccordion category={category} />

      {/* 8. Enquiry Form: Interactive Consultation Card with Direct WhatsApp Dispatch */}
      <InsuranceEnquiryForm category={category} />

      {/* 9. Related Insurance Categories: Internal Linking Grid */}
      <RelatedCategories relatedCategories={relatedCategories} />

      {/* Statutory Regulatory & Legal Compliance Notice */}
      <InsuranceAdvisoryNotice />
    </article>
  );
}
