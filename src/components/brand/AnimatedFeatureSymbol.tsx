import * as React from "react";
import { AnimatedInsuranceSymbol } from "./AnimatedInsuranceSymbol";

export type FeatureSymbolId =
  | "transparent-disclosure"
  | "unbiased-advisory"
  | "local-presence"
  | "claim-paperwork"
  | "long-term-servicing"
  | "doorstep-support"
  | "personal-guidance"
  | "policy-selection"
  | "policy-servicing"
  | "premium-guidance"
  | "claim-assistance"
  | "right-policy"
  | "better-protection"
  | "secure-future"
  | "trusted-partner"
  | "insurer-authority";

interface AnimatedFeatureSymbolProps {
  id: FeatureSymbolId;
  className?: string;
}

/**
 * Zero-JS GPU-Composited Multi-Layered Real-Visual Animated Feature & Pillar Symbols
 * Uses CSS transform/opacity animations for smooth 60fps rendering with zero main-thread JS load.
 */
export function AnimatedFeatureSymbol({
  id,
  className = "h-14 w-14",
}: AnimatedFeatureSymbolProps) {
  switch (id) {
    /* Delegate directly to matching insurance/service animated symbols where 1-to-1 */
    case "policy-servicing":
      return <AnimatedInsuranceSymbol id="policy-services" className={className} />;
    case "premium-guidance":
      return <AnimatedInsuranceSymbol id="premium-deposit" className={className} />;
    case "claim-assistance":
    case "claim-paperwork":
      return <AnimatedInsuranceSymbol id="claim-assistance" className={className} />;
    case "right-policy":
      return <AnimatedInsuranceSymbol id="term-insurance" className={className} />;
    case "secure-future":
      return <AnimatedInsuranceSymbol id="investment-plans" className={className} />;

    /* 1. TRANSPARENT DISCLOSURES — Glowing Shield & Animated Check */
    case "transparent-disclosure":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="tdBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFF6FF" />
              <stop offset="1" stopColor="#DBEAFE" />
            </linearGradient>
            <linearGradient id="tdShield" x1="20" y1="14" x2="60" y2="66" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284C7" />
              <stop offset="1" stopColor="#0F2E8A" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#tdBg)" />

          <g className="anim-float">
            <path
              d="M40 15L60 23V39C60 51.5 51.5 60.5 40 65C28.5 60.5 20 51.5 20 39V23L40 15Z"
              fill="url(#tdShield)"
              stroke="white"
              strokeWidth="2.5"
            />
            <path
              d="M30 40.5L37 47.5L51 33.5"
              stroke="#4ADE80"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="anim-dash"
            />
          </g>

          <circle
            cx="59"
            cy="21"
            r="4.5"
            fill="#FF6B00"
            stroke="white"
            strokeWidth="2"
            className="anim-pulse-soft"
          />
        </svg>
      );

    /* 2. UNBIASED NEED-BASED ADVISORY / BETTER PROTECTION — Warm Glowing Heart & Trust Care Hands */
    case "unbiased-advisory":
    case "better-protection":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="uaBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ECFDF5" />
              <stop offset="1" stopColor="#D1FAE5" />
            </linearGradient>
            <linearGradient id="uaHeart" x1="22" y1="18" x2="58" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6B00" />
              <stop offset="1" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#uaBg)" />

          <path
            d="M40 49C40 49 23 39 23 28C23 22.5 27.3 18.5 32.3 18.5C35.5 18.5 38.4 20.3 40 22.8C41.6 20.3 44.5 18.5 47.7 18.5C52.7 18.5 57 22.5 57 28C57 39 40 49 40 49Z"
            fill="url(#uaHeart)"
            className="anim-pulse-soft"
          />
          <path d="M35.5 32.5L38.8 35.8L45.2 29" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />

          <path
            d="M16 52C20 60 30 64 40 64C50 64 60 60 64 52C58 55 50 56.5 40 56.5C30 56.5 22 55 16 52Z"
            fill="#0F2E8A"
            className="anim-float-slow"
          />
        </svg>
      );

    /* 3. LOCAL PHYSICAL PRESENCE — Bouncing 3D Map Pin with Expanding Sonar Radar Rings */
    case "local-presence":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="lpBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF7ED" />
              <stop offset="1" stopColor="#FFEDD5" />
            </linearGradient>
            <linearGradient id="pinGrad" x1="25" y1="14" x2="55" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6B00" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#lpBg)" />

          <ellipse
            cx="40"
            cy="61"
            rx="16"
            ry="5"
            stroke="#FF6B00"
            strokeWidth="2.4"
            className="anim-halo"
          />
          <ellipse cx="40" cy="61" rx="9" ry="3" fill="#0F2E8A" fillOpacity="0.2" />

          <g className="anim-float">
            <path
              d="M40 14C29.5 14 21 22.3 21 32.6C21 45.2 40 59.5 40 59.5C40 59.5 59 45.2 59 32.6C59 22.3 50.5 14 40 14Z"
              fill="url(#pinGrad)"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="40" cy="32" r="8" fill="white" />
            <circle cx="40" cy="32" r="4" fill="#0F2E8A" />
          </g>
        </svg>
      );

    /* 4. LONG-TERM POLICY SERVICING — Animated Live Clock with Orbiting Green Protection Ring */
    case "long-term-servicing":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="ltBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0F9FF" />
              <stop offset="1" stopColor="#E0F2FE" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#ltBg)" />

          <circle
            cx="40"
            cy="40"
            r="26"
            stroke="#16A34A"
            strokeWidth="3"
            strokeDasharray="36 18"
            strokeLinecap="round"
            className="anim-spin-slow"
          />

          <circle cx="40" cy="40" r="20" fill="white" stroke="#0F2E8A" strokeWidth="3" />
          <line x1="40" y1="40" x2="40" y2="29" stroke="#0F2E8A" strokeWidth="3.2" strokeLinecap="round" />
          <line
            x1="40"
            y1="40"
            x2="51"
            y2="40"
            stroke="#FF6B00"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="anim-spin-slow"
            style={{ transformOrigin: "40px 40px", transformBox: "view-box" }}
          />
          <circle cx="40" cy="40" r="3" fill="#0F2E8A" />
        </svg>
      );

    /* 5. DOORSTEP & DIGITAL SUPPORT / TRUSTED PARTNER — Connected People with Warm Care Halo */
    case "doorstep-support":
    case "trusted-partner":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="dsBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EEF2FF" />
              <stop offset="1" stopColor="#E0E7FF" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#dsBg)" />

          <circle cx="28" cy="34" r="7" fill="#0F2E8A" />
          <path d="M17 60V50C17 45.8 21.5 43.5 28 43.5C34.5 43.5 39 45.8 39 50V60H17Z" fill="#0F2E8A" />

          <circle cx="52" cy="34" r="7" fill="#0284C7" />
          <path d="M41 60V50C41 45.8 45.5 43.5 52 43.5C58.5 43.5 63 45.8 63 50V60H41Z" fill="#0284C7" />

          <g className="anim-float">
            <circle cx="40" cy="20" r="10" fill="#16A34A" stroke="white" strokeWidth="2.4" />
            <path d="M36 20L38.8 22.8L44.5 17.2" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    /* 6. PERSONAL GUIDANCE — Advisor Portrait with Animated Live Speech Bubble & Verified Badge */
    case "personal-guidance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="pgBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFF6FF" />
              <stop offset="1" stopColor="#DBEAFE" />
            </linearGradient>
            <linearGradient id="pgAvatar" x1="18" y1="18" x2="58" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F2E8A" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#pgBg)" />

          <circle cx="38" cy="42" r="21" fill="url(#pgAvatar)" />
          <circle cx="38" cy="35" r="7.5" fill="white" />
          <path d="M25 56C26.5 48.5 31.5 45.5 38 45.5C44.5 45.5 49.5 48.5 51 56" fill="white" />

          <g className="anim-float">
            <rect x="46" y="12" width="24" height="18" rx="7" fill="#FF6B00" stroke="white" strokeWidth="2.2" />
            <circle cx="53.5" cy="21" r="1.8" fill="white" />
            <circle cx="58.5" cy="21" r="1.8" fill="white" />
            <circle cx="63.5" cy="21" r="1.8" fill="white" />
          </g>

          <circle cx="55" cy="57" r="8.5" fill="#16A34A" stroke="white" strokeWidth="2.2" />
          <path d="M51.5 57L54 59.5L58.8 54.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    /* 7. ASSISTANCE WITH POLICY SELECTION — Animated Magnifying Lens Auditing Best Policy */
    case "policy-selection":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="psBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF7ED" />
              <stop offset="1" stopColor="#FEF3C7" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#psBg)" />

          <rect x="18" y="16" width="36" height="46" rx="7" fill="white" stroke="#0284C7" strokeWidth="2.4" />
          <rect x="24" y="24" width="18" height="4" rx="2" fill="#0F2E8A" />
          <rect x="24" y="33" width="24" height="3.2" rx="1.6" fill="#93C5FD" />
          <rect x="24" y="41" width="20" height="3.2" rx="1.6" fill="#93C5FD" />
          <rect x="24" y="49" width="14" height="3.2" rx="1.6" fill="#16A34A" />

          <g className="anim-orbit-bob">
            <circle cx="51" cy="45" r="12" fill="#EFF6FF" fillOpacity="0.92" stroke="#0F2E8A" strokeWidth="3.5" />
            <path d="M46.5 45.2L49.5 48.2L55.5 42" stroke="#16A34A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="60" y1="54" x2="67" y2="61" stroke="#FF6B00" strokeWidth="5" strokeLinecap="round" />
          </g>
        </svg>
      );

    /* 8. INSURER AUTHORITY / REGULATORY NOTICE — Golden Regulatory Shield with Pulsing Notice Seal */
    case "insurer-authority":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="iaBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFBEB" />
              <stop offset="1" stopColor="#FEF3C7" />
            </linearGradient>
            <linearGradient id="iaShield" x1="20" y1="16" x2="60" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#iaBg)" />

          <circle
            cx="40"
            cy="40"
            r="23"
            stroke="#F59E0B"
            strokeWidth="2.4"
            className="anim-halo"
          />

          <g className="anim-float">
            <path
              d="M40 16L59 23.5V39C59 50.8 50.8 59.8 40 64C29.2 59.8 21 50.8 21 39V23.5L40 16Z"
              fill="url(#iaShield)"
              stroke="white"
              strokeWidth="2.5"
            />
            <rect x="37.2" y="28.5" width="5.6" height="14.5" rx="2.8" fill="white" />
            <circle cx="40" cy="49.5" r="3" fill="white" />
          </g>
        </svg>
      );
  }
}
