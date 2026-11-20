import * as React from "react";
import { cn } from "@/lib/utils";

interface PartnerLogoSvgProps {
  id: string;
  className?: string;
}

export function PartnerLogoSvg({ id, className = "h-8 w-auto" }: PartnerLogoSvgProps) {
  switch (id) {
    case "lic":
      return (
        <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="LIC Logo">
          <rect width="160" height="50" rx="6" fill="#0F4C81" />
          {/* Hands holding lamp */}
          <circle cx="25" cy="25" r="16" fill="#FBBF24" />
          <path d="M25 14 C27 18 29 20 29 22 C29 24.2 27.2 26 25 26 C22.8 26 21 24.2 21 22 C21 20 23 18 25 14 Z" fill="#EF4444" />
          <path d="M16 28 C16 32 20 35 25 35 C30 35 34 32 34 28 C30 30 20 30 16 28 Z" fill="#0F4C81" />
          <text x="50" y="32" fill="#FDE047" fontSize="24" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            LIC
          </text>
          <text x="96" y="22" fill="#FFFFFF" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">
            भारतीय जीवन बीमा निगम
          </text>
          <text x="96" y="32" fill="#E2E8F0" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">
            LIFE INSURANCE CORP.
          </text>
        </svg>
      );

    case "hdfc-life":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="HDFC Life Logo">
          <rect x="6" y="8" width="34" height="34" rx="4" fill="#DA291C" />
          <path d="M12 14 H34 V20 H26 V40 H18 V20 H12 Z" fill="#FFFFFF" />
          <text x="48" y="27" fill="#004B87" fontSize="17" fontWeight="900" fontFamily="sans-serif">
            HDFC <tspan fill="#DA291C">Life</tspan>
          </text>
          <text x="48" y="38" fill="#64748B" fontSize="8" fontWeight="700" fontStyle="italic" fontFamily="sans-serif">
            Sar utha ke jiyo!
          </text>
        </svg>
      );

    case "sbi-life":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SBI Life Logo">
          <circle cx="25" cy="25" r="16" fill="#00A3E0" />
          <circle cx="25" cy="23" r="5" fill="#FFFFFF" />
          <rect x="23" y="24" width="4" height="12" fill="#FFFFFF" />
          <text x="48" y="27" fill="#22409A" fontSize="18" fontWeight="900" fontFamily="sans-serif">
            SBI <tspan fill="#00A3E0">Life</tspan>
          </text>
          <text x="48" y="38" fill="#64748B" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">
            Apne liye. Apno ke liye.
          </text>
        </svg>
      );

    case "icici-prudential":
      return (
        <svg viewBox="0 0 175 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ICICI Prudential Life Logo">
          <rect x="6" y="8" width="34" height="34" rx="6" fill="#8B2131" />
          <circle cx="23" cy="19" r="4.5" fill="#F37021" />
          <path d="M17 26 H29 V36 H17 Z" fill="#FFFFFF" opacity="0.95" />
          <path d="M23 26 V36" stroke="#8B2131" strokeWidth="2" />
          <text x="46" y="24" fill="#8B2131" fontSize="12" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.3">
            ICICI PRUDENTIAL
          </text>
          <rect x="46" y="28" width="122" height="2" fill="#F37021" />
          <text x="46" y="40" fill="#003366" fontSize="8" fontWeight="800" letterSpacing="1" fontFamily="sans-serif">
            LIFE INSURANCE
          </text>
        </svg>
      );

    case "tata-aia":
      return (
        <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tata AIA Life Logo">
          <text x="10" y="26" fill="#004990" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            TATA
          </text>
          <text x="68" y="26" fill="#D22630" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            AIA
          </text>
          <rect x="10" y="31" width="135" height="2" fill="#D22630" />
          <text x="10" y="42" fill="#004990" fontSize="8" fontWeight="800" fontFamily="sans-serif" letterSpacing="1.5">
            LIFE INSURANCE
          </text>
        </svg>
      );

    case "max-life":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Max Life Logo">
          <path d="M8 28 C14 18 24 14 36 25 C26 25 18 28 8 28 Z" fill="#F59E0B" />
          <path d="M14 22 C20 14 30 12 38 20 C30 20 22 22 14 22 Z" fill="#D97706" />
          <text x="46" y="25" fill="#002B49" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            MAX <tspan fill="#F59E0B">LIFE</tspan>
          </text>
          <text x="46" y="37" fill="#64748B" fontSize="8" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">
            INSURANCE
          </text>
        </svg>
      );

    case "bajaj-allianz":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Bajaj Allianz Logo">
          <rect x="4" y="8" width="162" height="34" rx="4" fill="#004B8D" />
          <text x="14" y="27" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            BAJAJ <tspan fill="#60A5FA">|</tspan> Allianz
          </text>
          <text x="14" y="37" fill="#E2E8F0" fontSize="7" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.8">
            General Insurance
          </text>
        </svg>
      );

    case "oriental-insurance":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Oriental Insurance Logo">
          <circle cx="25" cy="25" r="16" fill="#1B365D" />
          <circle cx="25" cy="25" r="13" stroke="#DC2626" strokeWidth="2" fill="#FFFFFF" />
          <path d="M25 15 L28 22 L35 25 L28 28 L25 35 L22 28 L15 25 L22 22 Z" fill="#1B365D" />
          <text x="48" y="24" fill="#1B365D" fontSize="15" fontWeight="900" fontFamily="sans-serif">
            Oriental
          </text>
          <text x="48" y="36" fill="#DC2626" fontSize="11" fontWeight="800" fontFamily="sans-serif">
            insurance
          </text>
        </svg>
      );

    case "star-health":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Star Health Logo">
          <circle cx="22" cy="25" r="16" fill="#0B2A4A" />
          <path d="M22 13 L24.8 20.8 L33 20.8 L26.4 25.5 L29 33.2 L22 28.5 L15 33.2 L17.6 25.5 L11 20.8 L19.2 20.8 Z" fill="#FFC107" />
          <text x="44" y="24" fill="#D32F2F" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            STAR
          </text>
          <text x="44" y="37" fill="#0B2A4A" fontSize="7.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
            HEALTH INSURANCE
          </text>
        </svg>
      );

    case "care-health":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Care Health Logo">
          <circle cx="22" cy="25" r="16" fill="#EBF5FF" />
          <path d="M22 15 C18 11 12 14 12 19 C12 25 22 33 22 33 C22 33 32 25 32 19 C32 14 26 11 22 15 Z" fill="#0072CE" />
          <path d="M22 17 C24 15 27 16 27 19 C27 23 22 28 22 28 Z" fill="#28A745" />
          <text x="44" y="26" fill="#0072CE" fontSize="21" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">
            care
          </text>
          <text x="44" y="38" fill="#16A34A" fontSize="7.5" fontWeight="800" letterSpacing="0.8" fontFamily="sans-serif">
            HEALTH INSURANCE
          </text>
        </svg>
      );

    case "niva-bupa":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Niva Bupa Health Logo">
          <circle cx="22" cy="25" r="15" fill="#FFF2F0" />
          <path d="M14 23 C18 29 26 29 30 23" stroke="#E05A47" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="17" cy="18" r="2.2" fill="#E05A47" />
          <circle cx="27" cy="18" r="2.2" fill="#1B75BC" />
          <text x="44" y="24" fill="#E05A47" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            niva <tspan fill="#1B75BC">bupa</tspan>
          </text>
          <text x="44" y="36" fill="#64748B" fontSize="8" fontWeight="700" letterSpacing="0.4" fontFamily="sans-serif">
            Health Insurance
          </text>
        </svg>
      );

    case "manipal-cigna":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ManipalCigna Health Logo">
          <circle cx="22" cy="25" r="15" fill="#E6F5F5" />
          <circle cx="22" cy="19" r="4.5" fill="#FF8200" />
          <path d="M15 32 C15 27 22 25 22 25 C22 25 29 27 29 32" stroke="#008288" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M11 22 L14 24 M33 22 L30 24 M22 11 L22 13.5" stroke="#FF8200" strokeWidth="1.8" strokeLinecap="round" />
          <text x="44" y="24" fill="#008288" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            Manipal<tspan fill="#FF8200">Cigna</tspan>
          </text>
          <text x="44" y="36" fill="#64748B" fontSize="8" fontWeight="700" letterSpacing="0.4" fontFamily="sans-serif">
            Health Insurance
          </text>
        </svg>
      );

    case "icici-lombard":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ICICI Lombard Logo">
          <circle cx="20" cy="18" r="4.5" fill="#F37021" />
          <path d="M15 25 C15 22 25 22 25 25 L25 36 C25 37 15 37 15 36 Z" fill="#8B2131" />
          <path d="M12 20 C12 30 28 36 32 28" stroke="#F37021" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="38" y="22" fill="#8B2131" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            ICICI <tspan fill="#F37021">Lombard</tspan>
          </text>
          <rect x="38" y="26" width="55" height="15" rx="3" fill="#8B2131" />
          <text x="42" y="37" fill="#FFFFFF" fontSize="8" fontWeight="900" letterSpacing="0.8" fontFamily="sans-serif">
            ELEVATE
          </text>
          <text x="98" y="37" fill="#64748B" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">
            General &amp; Health
          </text>
        </svg>
      );

    case "hdfc-ergo":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="HDFC ERGO Logo">
          <rect x="6" y="8" width="34" height="34" rx="4" fill="#DA291C" />
          <path d="M12 14 H34 V20 H26 V40 H18 V20 H12 Z" fill="#FFFFFF" />
          <text x="46" y="26" fill="#004B87" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            HDFC <tspan fill="#DA291C">ERGO</tspan>
          </text>
          <text x="46" y="38" fill="#64748B" fontSize="8" fontWeight="700" fontFamily="sans-serif">
            General Insurance
          </text>
        </svg>
      );

    case "national-insurance":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="National Insurance Logo">
          <path d="M8 35 L20 12 L32 35 Z" fill="#006A4E" />
          <circle cx="20" cy="22" r="4" fill="#F59E0B" />
          <text x="40" y="22" fill="#006A4E" fontSize="9" fontWeight="700" fontFamily="sans-serif">
            नेशनल इन्श्योरेन्स
          </text>
          <text x="40" y="36" fill="#1E3A8A" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            National Insurance
          </text>
        </svg>
      );

    case "united-india":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="United India Insurance Logo">
          <circle cx="24" cy="25" r="16" fill="#003366" />
          <path d="M16 20 C16 32 32 32 32 20 Z" fill="#FFFFFF" />
          <circle cx="24" cy="22" r="3" fill="#003366" />
          <text x="46" y="24" fill="#003366" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            UNITED INDIA
          </text>
          <text x="46" y="36" fill="#64748B" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">
            INSURANCE COMPANY
          </text>
        </svg>
      );

    case "kotak-general":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Kotak General Logo">
          <circle cx="16" cy="25" r="9" stroke="#ED1C24" strokeWidth="4" fill="none" />
          <circle cx="28" cy="25" r="9" stroke="#003366" strokeWidth="4" fill="none" />
          <text x="44" y="25" fill="#ED1C24" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            kotak
          </text>
          <text x="44" y="37" fill="#003366" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">
            General Insurance
          </text>
        </svg>
      );

    case "reliance-general":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Reliance General Logo">
          <text x="6" y="25" fill="#0C2340" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            RELIANCE
          </text>
          <rect x="6" y="29" width="85" height="3" fill="#E11D48" />
          <text x="6" y="42" fill="#0C2340" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">
            General Insurance
          </text>
        </svg>
      );

    case "chola-ms":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Chola MS Logo">
          <path d="M12 25 L22 15 L32 25 L22 35 Z" fill="#DC2626" />
          <path d="M22 20 L27 25 L22 30 L17 25 Z" fill="#2563EB" />
          <text x="38" y="24" fill="#0F172A" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            Chola <tspan fill="#DC2626">MS</tspan>
          </text>
          <text x="38" y="36" fill="#2563EB" fontSize="8" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
            GENERAL INSURANCE
          </text>
        </svg>
      );

    case "tata-aig":
      return (
        <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tata AIG Logo">
          <rect x="4" y="6" width="152" height="38" rx="4" fill="#003A70" />
          <text x="14" y="25" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            TATA AIG
          </text>
          <text x="14" y="35" fill="#93C5FD" fontSize="7" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
            INSURANCE
          </text>
          <text x="88" y="30" fill="#FCD34D" fontSize="6.5" fontWeight="700" fontStyle="italic" fontFamily="sans-serif">
            WITH YOU ALWAYS
          </text>
        </svg>
      );

    case "royal-sundaram":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Royal Sundaram Logo">
          <circle cx="20" cy="25" r="14" fill="#00205B" />
          <circle cx="20" cy="25" r="8" fill="#F59E0B" />
          <text x="40" y="24" fill="#00205B" fontSize="12" fontWeight="900" fontFamily="sans-serif">
            Royal Sundaram
          </text>
          <text x="40" y="36" fill="#64748B" fontSize="8" fontWeight="700" fontFamily="sans-serif">
            General Insurance
          </text>
        </svg>
      );

    case "digit-insurance":
      return (
        <svg viewBox="0 0 155 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Digit Insurance Logo">
          <text x="6" y="28" fill="#1E293B" fontSize="22" fontWeight="900" fontFamily="sans-serif">
            d<tspan fill="#FF5E00">ī</tspan>git
          </text>
          <text x="6" y="40" fill="#64748B" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">
            General Insurance
          </text>
        </svg>
      );

    case "acko-insurance":
      return (
        <svg viewBox="0 0 155 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Acko Logo">
          <rect x="4" y="10" width="70" height="28" rx="8" fill="#6B38FB" />
          <text x="12" y="30" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            ACKO
          </text>
          <text x="82" y="24" fill="#1E293B" fontSize="9" fontWeight="800" fontFamily="sans-serif">
            General
          </text>
          <text x="82" y="35" fill="#64748B" fontSize="8" fontWeight="700" fontFamily="sans-serif">
            Insurance
          </text>
        </svg>
      );

    case "future-generali":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Future Generali Logo">
          <path d="M6 32 C12 18 26 18 32 32 Z" fill="#C8102E" />
          <text x="38" y="24" fill="#C8102E" fontSize="11" fontWeight="900" fontFamily="sans-serif">
            FUTURE GENERALI
          </text>
          <text x="38" y="36" fill="#64748B" fontSize="6.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
            TOTAL INSURANCE SOLUTIONS
          </text>
        </svg>
      );

    case "universal-sompo":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Universal Sompo Logo">
          <circle cx="16" cy="20" r="5" fill="#3B82F6" />
          <circle cx="24" cy="20" r="5" fill="#EF4444" />
          <circle cx="16" cy="28" r="5" fill="#10B981" />
          <circle cx="24" cy="28" r="5" fill="#F59E0B" />
          <text x="36" y="23" fill="#1E293B" fontSize="11" fontWeight="900" fontFamily="sans-serif">
            Universal Sompo
          </text>
          <text x="36" y="34" fill="#64748B" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            General Insurance Co. Ltd.
          </text>
        </svg>
      );

    case "shriram-general":
      return (
        <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Shriram General Logo">
          <rect x="4" y="10" width="28" height="28" rx="4" fill="#EAAA00" />
          <circle cx="18" cy="20" r="5" fill="#000000" />
          <path d="M12 28 C12 24 24 24 24 28 Z" fill="#000000" />
          <text x="38" y="22" fill="#002D62" fontSize="12" fontWeight="900" fontFamily="sans-serif">
            Shriram
          </text>
          <text x="38" y="33" fill="#64748B" fontSize="8" fontWeight="800" fontFamily="sans-serif">
            General Insurance
          </text>
          <text x="38" y="42" fill="#EAAA00" fontSize="6" fontWeight="800" fontStyle="italic" fontFamily="sans-serif">
            BE INSURED. REST ASSURED.
          </text>
        </svg>
      );

    case "magma-hdi":
      return (
        <svg viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Magma HDI Logo">
          <circle cx="20" cy="25" r="14" fill="#D0021B" />
          <circle cx="20" cy="25" r="6" fill="#FFFFFF" />
          <text x="42" y="25" fill="#D0021B" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            MAGMA <tspan fill="#10B981">HDI</tspan>
          </text>
          <text x="42" y="36" fill="#64748B" fontSize="8" fontWeight="700" fontFamily="sans-serif">
            General Insurance
          </text>
        </svg>
      );

    default:
      return (
        <div className={cn("flex items-center gap-2 rounded border bg-slate-50 px-3 py-1.5", className)}>
          <span className="text-xs font-bold text-slate-800">{id.toUpperCase()}</span>
        </div>
      );
  }
}
