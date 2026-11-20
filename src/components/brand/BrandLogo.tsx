import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark" | "banner";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
  href?: string;
}

export function BrandLogoIcon({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Insurance Sathi Official Logo"
      width={64}
      height={58}
      sizes="64px"
      priority
      style={{ width: "auto" }}
      className={cn("shrink-0 object-contain drop-shadow-xs", className)}
    />
  );
}

export function BrandLogo({
  variant = "light",
  size = "md",
  showTagline = true,
  className,
  href = "/",
}: BrandLogoProps) {
  const isDark = variant === "dark";

  const sizeStyles = {
    sm: {
      icon: "h-9 w-auto",
      title: "text-lg",
      sathi: "text-lg",
      tagline: "text-[9px]",
    },
    md: {
      icon: "h-12 w-auto",
      title: "text-xl",
      sathi: "text-xl",
      tagline: "text-[10px]",
    },
    lg: {
      icon: "h-14 w-auto",
      title: "text-2xl sm:text-3xl",
      sathi: "text-2xl sm:text-3xl",
      tagline: "text-xs",
    },
  }[size];

  const content = (
    <div className={cn("inline-flex items-center gap-2.5 group select-none", className)}>
      {/* Official Real Logo from public/images/logo.webp */}
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-105">
        <BrandLogoIcon className={sizeStyles.icon} />
      </div>

      {/* Brand Wordmark & Pill Tagline */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight font-extrabold leading-none">
          <span className={cn(isDark ? "text-white" : "text-brand-navy-950", sizeStyles.title)}>
            Insurance
          </span>
          <span className={cn("text-brand-orange ml-1 relative", sizeStyles.sathi)}>
            Sathi
            <svg
              className="absolute -bottom-1 left-0 w-full h-1 text-brand-orange/60"
              viewBox="0 0 50 6"
              fill="currentColor"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,5 Q25,0 50,5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </div>

        {showTagline && (
          <div className="mt-1 flex items-center">
            <span
              className={cn(
                "inline-block font-extrabold tracking-wide uppercase px-2 py-0.5 rounded-full border leading-tight",
                isDark
                  ? "bg-brand-navy-900 border-amber-400/60 text-amber-300"
                  : "bg-brand-navy-950 border-amber-400 text-amber-400",
                sizeStyles.tagline
              )}
            >
              All Insurance Under One Roof
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Insurance Sathi Home">
        {content}
      </Link>
    );
  }

  return content;
}
