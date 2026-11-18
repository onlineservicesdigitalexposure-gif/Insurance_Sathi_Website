import type { MetadataRoute } from "next";
import {
  getAllBlogPosts,
  SERVICES_DATA,
  INSURANCE_CATEGORIES_DATA,
} from "@/data";

const BASE_URL = "https://insurancesathi.in";

const LAST_MODIFIED_ISO = "2026-11-18T00:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = LAST_MODIFIED_ISO;

  // 1. Core Landing & Main Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/insurance`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // 2. Dynamic Service Pages (Canonical slugs only)
  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // 3. Dynamic Insurance Category Pages (Canonical slugs only)
  const insurancePages: MetadataRoute.Sitemap = INSURANCE_CATEGORIES_DATA.map(
    (category) => ({
      url: `${BASE_URL}/insurance/${category.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  // 4. Dynamic Educational Blog Guides
  const blogPosts = getAllBlogPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.modifiedDateIso || post.publishedDateIso || currentDate,
    changeFrequency: "monthly",
    priority: post.isFeatured ? 0.8 : 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...insurancePages,
    ...blogPages,
  ];
}
