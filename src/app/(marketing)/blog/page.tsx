import type { Metadata } from "next";
import {
  getAllBlogPosts,
  getAllBlogCategories,
  getAllBlogVideos,
  SITE_CONFIG,
} from "@/data";
import { BlogHero, BlogListingView, BlogVideoSection } from "@/components/blog";

const BASE_URL = "https://insurancesathi.in";

export const metadata: Metadata = {
  title: "Insurance Knowledge Hub, Video Guides & Advisory | Insurance Sathi",
  description:
    "Educational insurance guides and 5 Hindi video explainers curated by Insurance Sathi. Learn about risk pooling, modern robotic surgery cover, medical inflation, waiting periods, cashless claims, and lapsed policy revivals.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Insurance Knowledge Hub & Video Guides | Insurance Sathi Barasat",
    description:
      "Unbiased insurance articles and 5 practical video guides for Indian families: health risk pooling, rising renewal premiums, cashless mediclaim, lapsed policy revivals, and motor depreciation.",
    url: `${BASE_URL}/blog`,
    siteName: "Insurance Sathi",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Knowledge Hub & Video Guides | Insurance Sathi",
    description:
      "Educational insurance guides and Hindi video explainers for policyholders in Barasat, Madhyamgram, and Habra by MD Abrahim.",
  },
};

export default function BlogListingPage() {
  const allPosts = getAllBlogPosts();
  const videos = getAllBlogVideos();
  // Strip full article bodies before passing to Client Component to keep /blog RSC payload lean
  const posts = allPosts.map((post) => ({
    ...post,
    content: "",
    headings: [],
  }));
  const categories = getAllBlogCategories();

  const publisherSchema = {
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
  };

  // Schema.org CollectionPage, VideoObject list & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/blog#page`,
        url: `${BASE_URL}/blog`,
        name: "Insurance Knowledge Hub & Consumer Guides - Insurance Sathi",
        description:
          "Educational articles and 5 Hindi video guides on health insurance, medical inflation, robotic treatment cover, life policy revivals, and claim processes by Insurance Sathi.",
        publisher: publisherSchema,
      },
      ...videos.map((video) => ({
        "@type": "VideoObject",
        "@id": `${BASE_URL}/blog#${video.id}`,
        name: video.title,
        description: video.description,
        contentUrl: `${BASE_URL}${video.src}`,
        thumbnailUrl: `${BASE_URL}${video.poster}`,
        duration: video.durationIso,
        inLanguage: "hi",
        publisher: publisherSchema,
      })),
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
