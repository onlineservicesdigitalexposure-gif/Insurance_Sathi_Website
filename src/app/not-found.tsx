import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  Home,
  PhoneCall,
  ShieldCheck,
  BookOpen,
  MapPin,
  FileText,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/data";
import { LogoHeadingText } from "@/components/ui/LogoHeadingText";

export const metadata: Metadata = {
  title: "Page Not Found (404) | Insurance Sathi",
  description:
    "The requested page or insurance category could not be found. Explore insurance policies, services, or knowledge articles across Barasat, Madhyamgram, and Habra.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickLinks = [
    { label: "Health Insurance (Mediclaim)", href: "/insurance/health-insurance" },
    { label: "Term Life Insurance", href: "/insurance/term-insurance" },
    { label: "Motor / Car Insurance", href: "/insurance/motor-insurance" },
    { label: "Lapsed Policy Revival", href: "/services/lapsed-policy-services" },
    { label: "Claim Settlement Guidance", href: "/services/insurance-claim-assistance" },
    { label: "Insurance Knowledge Hub", href: "/blog" },
  ];

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-4 py-16 sm:py-24">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Warning Icon Badge */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-50 border border-amber-200 text-amber-600 shadow-sm">
          <AlertCircle className="h-10 w-10" aria-hidden="true" />
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-royal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-royal">
            <span>HTTP 404 Error</span>
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F2E8A] tracking-tight">
            <LogoHeadingText>Page or Guide Not Found</LogoHeadingText>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed max-w-lg mx-auto">
            The page, insurance category, or article you are looking for does not exist or may have been updated. Explore our popular insurance sections below.
          </p>
        </div>

        {/* Quick Directory Grid */}
        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-card text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F2E8A] mb-4 flex items-center gap-2">
            <FileText className="h-4 w-4 text-brand-royal" />
            <LogoHeadingText>Popular Destinations</LogoHeadingText>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-brand-royal-50 hover:border-brand-royal-200 hover:text-brand-royal transition-all group font-medium text-brand-dark"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-brand-royal group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center font-bold tracking-tight rounded-xl bg-brand-orange text-white hover:bg-brand-orange-600 shadow-sm shadow-brand-orange/30 px-5 py-2.5 text-sm gap-2 transition-all active:scale-[0.99]"
          >
            <Home className="h-4 w-4" />
            <span>Back to Homepage</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center font-bold tracking-tight rounded-xl border border-brand-border bg-white text-brand-dark hover:bg-slate-100 px-5 py-2.5 text-sm gap-2 transition-all active:scale-[0.99]"
          >
            <BookOpen className="h-4 w-4 text-brand-royal" />
            <span>Visit Knowledge Hub</span>
          </Link>
          <a
            href="https://wa.me/919332364068?text=Hello%20Insurance%20Sathi,%20I%20got%20lost%20on%20your%20website%20and%20need%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold tracking-tight rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2.5 text-sm gap-2 transition-all active:scale-[0.99]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp Help</span>
          </a>
        </div>

        {/* Office Verification Footer */}
        <div className="pt-6 border-t border-brand-border/60 text-xs text-brand-muted flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Insurance Sathi • Founded by {SITE_CONFIG.owner.name}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-brand-orange" />
            <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city} - {SITE_CONFIG.address.postalCode}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <PhoneCall className="h-4 w-4 text-brand-royal" />
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="hover:underline">
              {SITE_CONFIG.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
