"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { HEADER_NAV_ITEMS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BrandLogo } from "@/components/brand/BrandLogo";
import {
  AnimatedInsuranceSymbol,
  type InsuranceSymbolId,
} from "@/components/brand/AnimatedInsuranceSymbol";
import { cn } from "@/lib/utils";

/**
 * Maps navigation icon identifiers to their custom real-visual animated symbols
 */
function resolveNavSymbolId(name?: string): InsuranceSymbolId {
  switch (name) {
    case "HeartPulse":
      return "life-insurance";
    case "Activity":
      return "health-insurance";
    case "Car":
      return "motor-insurance";
    case "ShieldCheck":
      return "term-insurance";
    case "Home":
      return "home-insurance";
    case "Plane":
      return "travel-insurance";
    case "PiggyBank":
      return "investment-plans";
    case "FilePlus2":
      return "new-policy";
    case "Settings2":
      return "policy-services";
    case "CreditCard":
      return "premium-deposit";
    case "RotateCcw":
      return "lapsed-policy";
    case "ShieldAlert":
      return "claim-assistance";
    default:
      return "term-insurance";
  }
}

function renderNavIcon(name?: string, sizeClass = "h-11 w-11") {
  return (
    <AnimatedInsuranceSymbol
      id={resolveNavSymbolId(name)}
      className={cn("shrink-0 drop-shadow-xs", sizeClass)}
    />
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = React.useState<string | null>(null);

  const navRef = React.useRef<HTMLElement>(null);
  const dropdownTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track window scroll for elevated shadow (only updates state when crossing threshold)
  React.useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 15;
      setIsScrolled((prev) => (prev === next ? prev : next));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  React.useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menus on Escape key or outside click only while a menu is open
  React.useEffect(() => {
    if (!activeDropdown && !isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown, isMobileMenuOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleDropdownClick = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const toggleMobileSection = (label: string) => {
    setMobileExpandedSection((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main Website Navigation"
      className={cn(
        "w-full transition-shadow duration-200 bg-white border-b",
        isScrolled
          ? "border-brand-border/90 bg-white/95 backdrop-blur-md shadow-card"
          : "border-brand-border/60 bg-white"
      )}
    >
      <div className="container-site flex h-20 items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div
          onClick={() => {
            setActiveDropdown(null);
            setIsMobileMenuOpen(false);
          }}
        >
          <BrandLogo size="md" href="/" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {HEADER_NAV_ITEMS.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isDropdownOpen = activeDropdown === item.label;
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap px-2.5 xl:px-3.5 py-2 text-sm font-bold rounded-lg transition-colors",
                    isActive
                      ? "text-brand-royal bg-brand-royal-50"
                      : "text-brand-dark hover:text-brand-royal hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onClick={() => toggleDropdownClick(item.label)}
                  className={cn(
                    "inline-flex items-center gap-1 whitespace-nowrap px-2.5 xl:px-3.5 py-2 text-sm font-bold rounded-lg transition-colors cursor-pointer",
                    isDropdownOpen || isActive
                      ? "text-brand-royal bg-brand-royal-50"
                      : "text-brand-dark hover:text-brand-royal hover:bg-slate-50"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isDropdownOpen && "rotate-180 text-brand-royal"
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown Panel (Lightweight GPU CSS transition, mounted on demand) */}
                {isDropdownOpen && item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 z-50 rounded-2xl border border-brand-border bg-white p-3 shadow-card-hover focus:outline-none animate-in fade-in zoom-in-95 duration-150",
                      item.label === "Insurance"
                        ? "w-[560px] grid grid-cols-2 gap-2"
                        : item.label === "Services"
                        ? "w-[440px] flex flex-col gap-1"
                        : "w-[360px] flex flex-col gap-1"
                    )}
                  >
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-brand-royal-50/80"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-110">
                          {renderNavIcon(subItem.iconName, "h-11 w-11")}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-brand-dark transition-colors group-hover:text-brand-royal">
                              {subItem.label}
                            </span>
                            {subItem.badge && (
                              <Badge variant="orange" size="sm">
                                {subItem.badge}
                              </Badge>
                            )}
                          </div>
                          {subItem.description && (
                            <span className="text-xs text-brand-muted line-clamp-1 mt-0.5">
                              {subItem.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action CTAs (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* WhatsApp Direct Pill */}
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=Hello%20Insurance%20Sathi,%20I%20would%20like%20to%20consult%20with%20MD%20Abrahim.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800 transition-colors hover:bg-emerald-600 hover:text-white"
            aria-label="Direct WhatsApp Consultation"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600 group-hover:text-white" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          {/* Primary CTA */}
          <Link href="/contact">
            <Button
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="shadow-sm shadow-brand-orange/30 font-bold"
            >
              Get Expert Assistance
            </Button>
          </Link>
        </div>

        {/* Mobile / Tablet Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-royal-50 text-brand-royal border border-brand-royal/20 sm:hidden"
            aria-label="Call Insurance Sathi"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-dark shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-brand-royal cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-brand-dark" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-brand-dark" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Navigation Drawer (Zero Framer Motion overhead) */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-brand-navy-950/60 backdrop-blur-sm transition-opacity duration-200 lg:hidden"
            aria-hidden="true"
          />

          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-elevated flex flex-col overflow-hidden transition-transform duration-200 lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex h-20 items-center justify-between border-b border-brand-border px-5 shrink-0 bg-brand-light">
              <BrandLogo size="sm" href="/" />

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border bg-white text-brand-dark transition-colors hover:bg-slate-100 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Quick Communication Strip */}
            <div className="grid grid-cols-2 gap-2 border-b border-brand-border p-4 bg-white shrink-0">
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-royal-50 py-2.5 px-3 text-xs font-bold text-brand-royal border border-brand-royal/20"
              >
                <Phone className="h-4 w-4 text-brand-royal" aria-hidden="true" />
                <span>Call Advisor</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=Hello%20Insurance%20Sathi,%20I%20need%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 py-2.5 px-3 text-xs font-bold text-emerald-800 border border-emerald-500/30"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Scrollable Navigation Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {HEADER_NAV_ITEMS.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = mobileExpandedSection === item.label;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-royal-50 hover:text-brand-royal"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-4 w-4 text-brand-subtle" aria-hidden="true" />
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="rounded-xl border border-transparent overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleMobileSection(item.label)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-slate-50 cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200 text-brand-muted",
                          isExpanded && "rotate-180 text-brand-royal"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && item.children && (
                      <div className="bg-brand-light rounded-xl mx-1 mb-2 px-2 py-2 space-y-1">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold text-brand-body transition-colors hover:bg-white hover:text-brand-royal"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                              {renderNavIcon(subItem.iconName, "h-9 w-9")}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-brand-dark truncate">
                                  {subItem.label}
                                </span>
                                {subItem.badge && (
                                  <span className="text-[10px] font-bold text-brand-orange bg-brand-orange-50 px-1.5 py-0.2 rounded border border-brand-orange-200">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer CTA */}
            <div className="border-t border-brand-border p-5 bg-brand-light shrink-0 space-y-3">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full"
              >
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Get Expert Assistance
                </Button>
              </Link>
              <div className="flex items-center justify-center gap-3 text-[11px] font-medium text-brand-muted">
                <a
                  href="https://www.facebook.com/share/19xYK42tJL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#1877F2] hover:underline"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <span>•</span>
                <span>{SITE_CONFIG.address.landmark}, Barasat</span>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
