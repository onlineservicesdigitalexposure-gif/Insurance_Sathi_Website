import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Header, Footer, FloatingContact } from "@/components/layout";
import { SITE_CONFIG } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insurancesathi.in"),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.meta.defaultDescription,
  keywords: [...SITE_CONFIG.meta.keywords],
  authors: [{ name: `${SITE_CONFIG.name} - ${SITE_CONFIG.owner.name}`, url: "https://insurancesathi.in" }],
  creator: SITE_CONFIG.owner.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.meta.defaultDescription,
    url: "https://insurancesathi.in",
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.meta.locale,
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.meta.defaultDescription,
    images: ["/images/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#123B75",
  width: "device-width",
  initialScale: 1,
};

// Root Organization & LocalBusiness JSON-LD (Strictly accurate information, zero fabricated reviews)
const rootLocalBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://insurancesathi.in/#localbusiness",
  name: SITE_CONFIG.name,
  alternateName: "Insurance Sathi Barasat",
  url: "https://insurancesathi.in",
  logo: "https://insurancesathi.in/images/og-image.svg",
  image: "https://insurancesathi.in/images/og-image.svg",
  telephone: SITE_CONFIG.contact.phone,
  email: SITE_CONFIG.contact.email,
  priceRange: "Free Consultation",
  founder: {
    "@type": "Person",
    name: SITE_CONFIG.owner.name,
    jobTitle: SITE_CONFIG.owner.role,
  },
  foundingDate: "2023-05-20",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.723,
    longitude: 88.4807,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:30",
    },
  ],
  areaServed: SITE_CONFIG.targetLocations.map((loc) => ({
    "@type": "AdministrativeArea",
    name: `${loc}, North 24 Parganas, West Bengal`,
  })),
  sameAs: SITE_CONFIG.socials
    .filter((s) => s.platform === "Facebook")
    .map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootLocalBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-light text-brand-dark font-sans antialiased">
        {/* WCAG 2.1 AA Accessible Skip Link */}
        <a
          href="#main-content"
          aria-label="Skip to main content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-brand-royal focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-elevated focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
