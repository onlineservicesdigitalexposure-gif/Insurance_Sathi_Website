import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="w-full border-t border-brand-navy-900 bg-brand-navy-950 text-slate-300">
      {/* Main 5-Column Grid */}
      <div className="container-site pt-14 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Prominent Logo Symbol Only & Introduction */}
          <div className="space-y-4 lg:col-span-1">
            <Link
              href="/"
              aria-label="Insurance Sathi Home"
              className="group relative inline-flex items-center justify-center rounded-3xl bg-white/95 p-3.5 shadow-[0_12px_36px_-8px_rgba(255,107,0,0.32)] ring-2 ring-white/25 transition-all duration-300 hover:scale-105 hover:ring-brand-orange/60"
            >
              <Image
                src="/images/logo.webp"
                alt="Insurance Sathi Official Logo"
                width={128}
                height={116}
                sizes="128px"
                style={{ width: "auto" }}
                className="h-24 w-auto sm:h-28 object-contain drop-shadow-xs"
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              Founded by {SITE_CONFIG.owner.name} at {SITE_CONFIG.address.landmark}, Barasat (Est. {SITE_CONFIG.owner.establishedDate}). Providing transparent, unbiased insurance advisory, policy servicing, and dedicated claim settlement assistance across North 24 Parganas.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/" className="transition-colors hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="transition-colors hover:text-white hover:underline">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Insurance Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Insurance
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/insurance/life-insurance" className="transition-colors hover:text-white hover:underline">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/health-insurance" className="transition-colors hover:text-white hover:underline">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/motor-insurance" className="transition-colors hover:text-white hover:underline">
                  Motor Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/term-insurance" className="transition-colors hover:text-white hover:underline">
                  Term Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/home-insurance" className="transition-colors hover:text-white hover:underline">
                  Home Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/travel-insurance" className="transition-colors hover:text-white hover:underline">
                  Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/services/purchase-new-policy" className="transition-colors hover:text-white hover:underline">
                  New Policy
                </Link>
              </li>
              <li>
                <Link href="/services/policy-services" className="transition-colors hover:text-white hover:underline">
                  Policy Service
                </Link>
              </li>
              <li>
                <Link href="/services/premium-deposit-assistance" className="transition-colors hover:text-white hover:underline">
                  Premium Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/lapsed-policy-services" className="transition-colors hover:text-white hover:underline">
                  Lapsed Policy
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-claim-assistance" className="transition-colors hover:text-white hover:underline">
                  Claim Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Centralized Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-brand-orange mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">
                  {SITE_CONFIG.address.landmark}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="font-bold text-white transition-colors hover:text-brand-orange"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="transition-colors hover:text-white truncate"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                <span>{SITE_CONFIG.workingHours.days}: {SITE_CONFIG.workingHours.timing}</span>
              </li>
              <li className="flex items-center gap-2.5 pt-1 border-t border-brand-navy-900">
                <svg
                  className="h-4 w-4 shrink-0 fill-current text-blue-400"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <a
                  href="https://www.facebook.com/share/19xYK42tJL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Insurance Disclaimer */}
        <div className="mt-10 rounded-xl border border-brand-navy-800 bg-brand-navy-900/70 p-4 text-xs text-slate-300 leading-relaxed">
          <p className="font-bold text-slate-100 mb-1">
            Statutory Consumer Notice &amp; Disclaimer:
          </p>
          <p>
            Insurance is the subject matter of solicitation. Insurance Sathi operates as an independent insurance advisory and policyholder assistance service based in Barasat, West Bengal. We provide transparent policy comparison, administrative servicing, and claim documentation guidance. Policy terms, waiting periods, coverage inclusions, sub-limits, and final claim settlement decisions are determined solely by the respective underwriting insurance companies as per prevailing IRDAI regulations.
          </p>
        </div>

        {/* Bottom Bar: Credits & Legal Policies */}
        <div className="mt-8 border-t border-brand-navy-900 pt-6 flex flex-col items-center justify-between gap-4 text-xs text-slate-300 sm:flex-row">
          <p className="text-center sm:text-left">
            © <CurrentYear /> {SITE_CONFIG.name} (Prop. {SITE_CONFIG.owner.name}). Design &amp; developed by{" "}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-300 transition-colors hover:text-amber-200 hover:underline"
            >
              Digital Exposure Online Services
            </a>
          </p>

          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <a
              href="https://www.facebook.com/share/19xYK42tJL/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white hover:underline"
            >
              Facebook
            </a>
            <span>•</span>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white hover:underline"
            >
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <span>Duckbanglow More, Barasat - 700124</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
