/**
 * Centralized TypeScript Architecture for Insurance Sathi
 * Strictly typed, modular domain interfaces and metadata schemas.
 */

/* ==========================================================================
   1. SITE & BUSINESS ENTITIES
   ========================================================================== */

export interface OwnerInfo {
  name: string;
  role: string;
  establishedDate: string;
}

export interface AddressInfo {
  landmark: string;
  street: string;
  city: string;
  district: string;
  state: string;
  country: string;
  postalCode: string;
  formatted: string;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
}

export interface WorkingHours {
  days: string;
  timing: string;
  sundayNotice: string;
  claimsEmergency: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  badge?: string;
  iconName?: string;
  children?: readonly NavItem[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  owner: OwnerInfo;
  contact: ContactInfo;
  address: AddressInfo;
  workingHours: WorkingHours;
  targetLocations: readonly string[];
  socials: readonly SocialLink[];
  mainNav: readonly NavItem[];
  footerNav: {
    services: readonly NavItem[];
    insurance: readonly NavItem[];
    quickLinks: readonly NavItem[];
  };
  meta: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: readonly string[];
    locale: string;
  };
}

/* ==========================================================================
   2. CORE SERVICE ENTITIES
   ========================================================================== */

export type ServiceSlug =
  | "purchase-new-policy"
  | "policy-services"
  | "premium-deposit-assistance"
  | "lapsed-policy-services"
  | "insurance-claim-assistance";

export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceCoverageItem {
  title: string;
  description: string;
  included: boolean;
}

export interface ServiceDocumentGroup {
  category: string;
  items: readonly string[];
  note?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: ServiceSlug;
  aliases?: readonly string[];
  title: string;
  heroHeading: string;
  heroSubheading: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imagePath: string;
  imageAlt: string;
  highlights: readonly string[];
  coverageDetails: readonly ServiceCoverageItem[];
  processSteps: readonly ServiceProcessStep[];
  requiredDocuments: readonly ServiceDocumentGroup[];
  documentsDisclaimer: string;
  keyBenefits: readonly string[];
  targetAudience: string;
  serviceFaqs: readonly ServiceFaq[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: readonly string[];
  };
}

/* ==========================================================================
   3. INSURANCE CATEGORY ENTITIES
   ========================================================================== */

export type InsuranceSlug =
  | "life-insurance"
  | "health-insurance"
  | "motor-insurance"
  | "term-insurance"
  | "home-insurance"
  | "travel-insurance"
  | "business-insurance"
  | "personal-accident-insurance"
  | "investment-plans";

export interface CoverageTypeDetail {
  title: string;
  description: string;
  suitableFor?: string;
  highlights: readonly string[];
}

export interface KeyConsideration {
  title: string;
  explanation: string;
  checklistItem: string;
}

export interface TargetBuyerProfile {
  profile: string;
  scenario: string;
  recommendedFocus: string;
}

export interface CategoryFaq {
  question: string;
  answer: string;
}

export interface InsuranceCategoryItem {
  id: string;
  slug: InsuranceSlug;
  aliases?: readonly string[];
  title: string;
  heroHeading: string;
  heroSubheading: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  iconName: string;
  imagePath: string;
  imageAlt: string;
  coverageHighlights: readonly string[];
  commonPolicyTypes: readonly string[];
  coverageTypes: readonly CoverageTypeDetail[];
  keyConsiderations: readonly KeyConsideration[];
  commonExclusions: readonly string[];
  exclusionsDisclaimer: string;
  whoNeedsThis: readonly TargetBuyerProfile[];
  categoryFaqs: readonly CategoryFaq[];
  whyNeeded: string;
  recommendedFor: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: readonly string[];
  };
}

/* ==========================================================================
   4. LOCATION ENTITIES
   ========================================================================== */

export type LocationSlug = "barasat" | "madhyamgram" | "habra";

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationServiceFeature {
  title: string;
  description: string;
  serviceSlug: ServiceSlug;
  iconName: string;
  highlight: string;
}

export interface LocationItem {
  id: string;
  slug: LocationSlug;
  name: string;
  district: string;
  state: string;
  postalCode: string;
  isPhysicalHeadquarters: boolean;
  distanceFromHeadquarters: string;
  transitSummary: string;
  heroHeading: string;
  heroSubheading: string;
  headline: string;
  description: string;
  localIntroduction: string;
  serviceDeliveryModel: string;
  officeLocationClarification: string;
  localAreasCovered: readonly string[];
  supportModes: readonly string[];
  localServices: readonly LocationServiceFeature[];
  locationFaqs: readonly LocationFaq[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: readonly string[];
  };
}

/* ==========================================================================
   5. FAQ ENTITIES
   ========================================================================== */

export type FaqCategory =
  | "general"
  | "claims"
  | "policy-servicing"
  | "lapsed-policy"
  | "premiums";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  categoryLabel: string;
  question: string;
  answer: string;
  relevantServiceSlug?: ServiceSlug;
}

/* ==========================================================================
   6. BLOG / EDUCATIONAL ARTICLES
   ========================================================================== */

export interface BlogHeading {
  readonly id: string;
  readonly title: string;
  readonly level: number;
}

export interface BlogAuthorInfo {
  readonly name: string;
  readonly role: string;
  readonly credentials?: string;
  readonly location: string;
  readonly phone?: string;
}

export interface BlogPostItem {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly content: string;
  readonly category: string;
  readonly readTime: string;
  readonly publishedDate: string;
  readonly publishedDateIso?: string;
  readonly modifiedDateIso?: string;
  readonly author: string;
  readonly authorRole?: string;
  readonly authorDetails?: BlogAuthorInfo;
  readonly coverImage?: string;
  readonly coverAlt?: string;
  readonly isFeatured?: boolean;
  readonly headings?: readonly BlogHeading[];
  readonly tags: readonly string[];
  readonly seo: {
    readonly metaTitle: string;
    readonly metaDescription: string;
    readonly keywords: readonly string[];
  };
}

/* ==========================================================================
   7. FORM / INTERACTIVE SCHEMAS
   ========================================================================== */

export interface ConsultationFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  serviceRequested: ServiceSlug | "general-inquiry";
  insuranceType?: InsuranceSlug;
  preferredLocation?: LocationSlug;
  message?: string;
}
