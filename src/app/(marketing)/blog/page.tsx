import type { Metadata } from "next";
import { getAllBlogPosts, getAllBlogCategories, SITE_CONFIG } from "@/data";
import { BlogHero, BlogListingView, BlogVideoSection } from "@/components/blog";

const BASE_URL = "https://insurancesathi.in";

export const metadata: Metadata = {
  title: "Insurance Knowledge Hub & Consumer Advisory Guides | Insurance Sathi",
  description:
    "Educational, unbiased insurance articles by MD Abrahim. Learn about health insurance waiting periods, cashless vs reimbursement hospital claims, lapsed policy revivals, and sum assured formulas across Barasat, Madhyamgram, and Habra.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Insurance Knowledge Hub & Educational Guides | Insurance Sathi Barasat",
    description:
      "Unbiased insurance guides for Indian families: understand health waiting periods, cashless mediclaim, lapsed policy revivals, and car insurance depreciation.",
    url: `${BASE_URL}/blog`,
    siteName: "Insurance Sathi",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Knowledge Hub | Insurance Sathi",
    description:
      "Educational insurance guides for policyholders in Barasat, Madhyamgram, and Habra by MD Abrahim.",
  },
};

export default function BlogListingPage() {
  const allPosts = getAllBlogPosts();
  // Strip full article bodies before passing to Client Component to keep /blog RSC payload lean
  const posts = allPosts.map((post) => ({
    ...post,
    content: "",
    headings: [],
  }));
  const categories = getAllBlogCategories();

  // Schema.org CollectionPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/blog#page`,
        url: `${BASE_URL}/blog`,
        name: "Insurance Knowledge Hub & Consumer Guides - Insurance Sathi",
        description:
          "Educational articles and advisory guides on health insurance waiting periods, life policy revivals, and claim processes by Insurance Sathi.",
        publisher: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          telephone: SITE_CONFIG.contact.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_CONFIG.address.street,
            addressLocality: SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            postalCode: SITE_CONFIG.address.postalCode,
            addressCountry: "IN",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/blog#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Knowledge Hub",
            item: `${BASE_URL}/blog`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <BlogHero />
        {/* Dedicated Video Section - ONLY on Blog Page */}
        <BlogVideoSection />
        <BlogListingView posts={posts} categories={categories} />
      </div>
    </>
  );
}
