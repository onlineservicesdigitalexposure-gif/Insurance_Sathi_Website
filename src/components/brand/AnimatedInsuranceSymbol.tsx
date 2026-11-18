import * as React from "react";

export type InsuranceSymbolId =
  | "life-insurance"
  | "health-insurance"
  | "motor-insurance"
  | "term-insurance"
  | "home-insurance"
  | "travel-insurance"
  | "business-insurance"
  | "investment-plans"
  | "personal-accident"
  | "new-policy"
  | "policy-services"
  | "premium-deposit"
  | "lapsed-policy"
  | "claim-assistance";

interface AnimatedInsuranceSymbolProps {
  id: InsuranceSymbolId;
  className?: string;
}

/**
 * Zero-JS GPU-Composited Real-Visual Animated Insurance Symbols
 * Multi-layered vibrant vector illustrations powered by smooth CSS transform/opacity animations.
 */
export function AnimatedInsuranceSymbol({
  id,
  className = "h-16 w-16",
}: AnimatedInsuranceSymbolProps) {
  switch (id) {
    /* 1. LIFE INSURANCE — Protective Umbrella Sheltering Family with Heart Glow */
    case "life-insurance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="lifeBg" x1="10" y1="8" x2="70" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF7ED" />
              <stop offset="1" stopColor="#FFEDD5" />
            </linearGradient>
            <linearGradient id="lifeUmbrellaL" x1="14" y1="16" x2="40" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7A00" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="lifeUmbrellaM" x1="30" y1="14" x2="50" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22C55E" />
              <stop offset="1" stopColor="#16A34A" />
            </linearGradient>
            <linearGradient id="lifeUmbrellaR" x1="40" y1="16" x2="66" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#lifeBg)" />

          <g className="anim-float">
            <path d="M40 12V17" stroke="#0F2E8A" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M15 37C17 24 28 16 40 16C35 24 32 30 31 37C25 35 20 35 15 37Z" fill="url(#lifeUmbrellaL)" />
            <path d="M31 37C32 29 35 23 40 16C45 23 48 29 49 37C43 35 37 35 31 37Z" fill="url(#lifeUmbrellaM)" />
            <path d="M49 37C48 30 45 24 40 16C52 16 63 24 65 37C60 35 55 35 49 37Z" fill="url(#lifeUmbrellaR)" />
            <path d="M40 36V58C40 61 37.5 62.5 35.5 61" stroke="#0F2E8A" strokeWidth="2.4" strokeLinecap="round" />
          </g>

          <circle cx="28" cy="46" r="4" fill="#0F2E8A" />
          <path d="M22 62V55C22 52.5 24.5 51 28 51C31.5 51 34 52.5 34 55V62H22Z" fill="#0F2E8A" />

          <circle cx="52" cy="46" r="4" fill="#0F2E8A" />
          <path d="M46 62V55C46 52.5 48.5 51 52 51C55.5 51 58 52.5 58 55V62H46Z" fill="#0F2E8A" />

          <g className="anim-pulse-soft">
            <circle cx="40" cy="51" r="3.2" fill="#2563EB" />
            <path d="M35.5 62V57.5C35.5 55.8 37.3 54.8 40 54.8C42.7 54.8 44.5 55.8 44.5 57.5V62H35.5Z" fill="#2563EB" />
          </g>

          <circle cx="63" cy="20" r="2.2" fill="#F97316" className="anim-pulse-soft" />
        </svg>
      );

    /* 2. HEALTH INSURANCE — 3D Red Heart with Live Animated ECG Pulse & Medical Plus */
    case "health-insurance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="healthBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF2F2" />
              <stop offset="1" stopColor="#FFE4E6" />
            </linearGradient>
            <linearGradient id="heartGrad" x1="20" y1="20" x2="60" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4D6D" />
              <stop offset="1" stopColor="#DC2626" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#healthBg)" />

          <path
            d="M40 62C40 62 17 48.5 17 31.5C17 23.5 23 18 30 18C34.5 18 38.2 20.4 40 23.8C41.8 20.4 45.5 18 50 18C57 18 63 23.5 63 31.5C63 48.5 40 62 40 62Z"
            fill="url(#heartGrad)"
            className="anim-pulse-soft"
          />

          <path d="M25 26C23.5 28 23 30.5 23.5 33" stroke="white" strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round" />

          <path
            d="M21 40H31L35 31L40 49L45 35L48 40H59"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="anim-dash"
          />

          <g className="anim-float">
            <circle cx="60" cy="21" r="9" fill="#10B981" stroke="white" strokeWidth="2.5" />
            <path d="M60 17V25M56 21H64" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
          </g>
        </svg>
      );

    /* 3. MOTOR INSURANCE — Sleek Illustrated Car with Driving Motion & Shield */
    case "motor-insurance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="motorBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFF6FF" />
              <stop offset="1" stopColor="#DBEAFE" />
            </linearGradient>
            <linearGradient id="carBody" x1="16" y1="30" x2="64" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#motorBg)" />

          <line
            x1="14"
            y1="61"
            x2="66"
            y2="61"
            stroke="#93C5FD"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 6"
            className="anim-dash"
          />

          <g className="anim-float">
            <path d="M23 39L28 28C29.2 25.5 31.8 24 34.6 24H46.5C49.5 24 52 25.6 53.3 28.2L58 39H23Z" fill="#3B82F6" />
            <path d="M27.5 37L31 29.2C31.7 27.8 33 27 34.6 27H45.8C47.4 27 48.8 27.9 49.5 29.3L53 37H27.5Z" fill="#E0F2FE" />
            <rect x="15" y="38" width="50" height="15" rx="6" fill="url(#carBody)" />
            <circle cx="21" cy="45" r="3" fill="#FDE047" className="anim-pulse-soft" />
            <circle cx="59" cy="45" r="3" fill="#FDE047" className="anim-pulse-soft" />
            <rect x="31" y="44" width="18" height="3.5" rx="1.75" fill="#93C5FD" />
            <circle cx="25" cy="54" r="6" fill="#0F172A" />
            <circle cx="25" cy="54" r="2.5" fill="#CBD5E1" />
            <circle cx="55" cy="54" r="6" fill="#0F172A" />
            <circle cx="55" cy="54" r="2.5" fill="#CBD5E1" />
          </g>

          <g className="anim-pulse-soft">
            <path d="M61 12L69 15.5V21C69 25.5 65.5 28.8 61 30.5C56.5 28.8 53 25.5 53 21V15.5L61 12Z" fill="#16A34A" stroke="white" strokeWidth="2" />
            <path d="M58 21.2L60.2 23.4L64.5 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    /* 4. HOME INSURANCE — Cozy Illustrated Home with Glowing Windows & Roof Shield */
    case "home-insurance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="homeBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ECFDF5" />
              <stop offset="1" stopColor="#D1FAE5" />
            </linearGradient>
            <linearGradient id="roofGrad" x1="16" y1="18" x2="64" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#16A34A" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#homeBg)" />

          <rect x="51" y="21" width="7" height="12" rx="2" fill="#047857" />
          <rect x="21" y="38" width="38" height="25" rx="4" fill="white" stroke="#10B981" strokeWidth="2.2" />
          <path d="M14 40L40 19L66 40" stroke="url(#roofGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="35" y="48" width="10" height="15" rx="2.5" fill="#0F2E8A" />
          <circle cx="42.5" cy="56" r="1.2" fill="#FBBF24" />

          <rect x="25.5" y="44" width="6.5" height="6.5" rx="1.5" fill="#FBBF24" className="anim-pulse-soft" />
          <rect x="48" y="44" width="6.5" height="6.5" rx="1.5" fill="#FBBF24" className="anim-pulse-soft" />

          <g className="anim-float">
            <circle cx="60" cy="21" r="9" fill="#0284C7" stroke="white" strokeWidth="2.4" />
            <path d="M56.5 21.3L59 23.8L63.8 18.8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    /* 5. TRAVEL INSURANCE — Globe with Gliding Airplane & Flight Trail */
    case "travel-insurance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="travelBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FAF5FF" />
              <stop offset="1" stopColor="#F3E8FF" />
            </linearGradient>
            <linearGradient id="globeGrad" x1="20" y1="22" x2="58" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#travelBg)" />

          <circle cx="40" cy="43" r="19" fill="url(#globeGrad)" />
          <ellipse cx="40" cy="43" rx="9" ry="19" stroke="white" strokeOpacity="0.45" strokeWidth="1.8" />
          <path d="M22 43H58M25 34H55M25 52H55" stroke="white" strokeOpacity="0.45" strokeWidth="1.8" />

          <path d="M16 34C24 17 52 14 65 25" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="4 4" />

          <g className="anim-orbit-bob">
            <path
              d="M64 18L51 22.5L46 19.5L43 21.5L48 26L46 31.5L49 32.5L54 27.5L60 29L62 27L56.5 23.5L64 18Z"
              fill="#7E22CE"
              stroke="white"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    /* 6. BUSINESS INSURANCE — Modern Corporate Building with Shield */
    case "business-insurance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="bizBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ECFEFF" />
              <stop offset="1" stopColor="#CFFAFE" />
            </linearGradient>
            <linearGradient id="towerGrad" x1="18" y1="18" x2="46" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0891B2" />
              <stop offset="1" stopColor="#0F2E8A" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#bizBg)" />

          <rect x="18" y="20" width="24" height="42" rx="4" fill="url(#towerGrad)" />
          <rect x="42" y="34" width="18" height="28" rx="3" fill="#0284C7" />

          <rect x="23" y="26" width="5" height="4" rx="1" fill="#BAE6FD" />
          <rect x="32" y="26" width="5" height="4" rx="1" fill="#FDE047" />
          <rect x="23" y="34" width="5" height="4" rx="1" fill="#FDE047" />
          <rect x="32" y="34" width="5" height="4" rx="1" fill="#BAE6FD" />
          <rect x="23" y="42" width="5" height="4" rx="1" fill="#BAE6FD" />
          <rect x="32" y="42" width="5" height="4" rx="1" fill="#BAE6FD" />
          <rect x="46" y="40" width="4.5" height="4" rx="1" fill="#BAE6FD" />
          <rect x="52.5" y="40" width="4.5" height="4" rx="1" fill="#FDE047" />
          <rect x="46" y="48" width="4.5" height="4" rx="1" fill="#BAE6FD" />
          <rect x="52.5" y="48" width="4.5" height="4" rx="1" fill="#BAE6FD" />

          <g className="anim-float">
            <path
              d="M57 14L67 18V25C67 30.8 62.7 35.1 57 37C51.3 35.1 47 30.8 47 25V18L57 14Z"
              fill="#F97316"
              stroke="white"
              strokeWidth="2.2"
            />
            <path d="M53.5 25.5L56 28L61 22.5" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    /* 7. INVESTMENT PLANS — Golden Wealth Coin & Savings Pot with Growth Arrow */
    case "investment-plans":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="invBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFBEB" />
              <stop offset="1" stopColor="#FEF3C7" />
            </linearGradient>
            <linearGradient id="goldCoin" x1="28" y1="12" x2="52" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="potGrad" x1="20" y1="36" x2="60" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F97316" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#invBg)" />

          <path
            d="M15 56L26 46L34 51L59 24"
            stroke="#16A34A"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="anim-dash"
          />
          <path d="M52 24H60V32" stroke="#16A34A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />

          <path d="M24 44C24 38.5 31 35 40 35C49 35 56 38.5 56 44C56 54.5 50 63 40 63C30 63 24 54.5 24 44Z" fill="url(#potGrad)" />
          <rect x="33" y="33" width="14" height="4.5" rx="2.2" fill="#B45309" />
          <text x="40" y="55" textAnchor="middle" fill="white" fontSize="17" fontWeight="900" fontFamily="sans-serif">
            ₹
          </text>

          <g className="anim-float">
            <circle cx="40" cy="21" r="10" fill="url(#goldCoin)" stroke="#D97706" strokeWidth="2" />
            <text x="40" y="25.5" textAnchor="middle" fill="#78350F" fontSize="12" fontWeight="900" fontFamily="sans-serif">
              ₹
            </text>
          </g>
        </svg>
      );

    /* 8. PERSONAL ACCIDENT — Armored Shield with Pulsing Safety Halo & Medical Cross */
    case "personal-accident":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="paBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EEF2FF" />
              <stop offset="1" stopColor="#E0E7FF" />
            </linearGradient>
            <linearGradient id="shieldMain" x1="22" y1="16" x2="58" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#paBg)" />

          <circle cx="40" cy="40" r="23" stroke="#6366F1" strokeWidth="2.5" className="anim-halo" />

          <g className="anim-float">
            <path
              d="M40 16L60 24V39C60 51.2 51.5 60.4 40 64.5C28.5 60.4 20 51.2 20 39V24L40 16Z"
              fill="url(#shieldMain)"
              stroke="white"
              strokeWidth="2.5"
            />
            <path d="M40 19L56.5 25.6V39C56.5 49 49.5 57 40 60.8V19Z" fill="white" fillOpacity="0.12" />
            <rect x="36.5" y="30" width="7" height="20" rx="2.5" fill="white" />
            <rect x="30" y="36.5" width="20" height="7" rx="2.5" fill="white" />
          </g>
        </svg>
      );

    /* 9. TERM INSURANCE — Royal Fortress Shield with Radiating High-Cover Check & Sparkles */
    case "term-insurance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="termBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFF6FF" />
              <stop offset="1" stopColor="#E0E7FF" />
            </linearGradient>
            <linearGradient id="termShield" x1="20" y1="14" x2="60" y2="66" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F2E8A" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#termBg)" />

          <circle cx="40" cy="40" r="24" stroke="#0284C7" strokeWidth="2.2" className="anim-halo" />

          <g className="anim-float">
            <path
              d="M40 15L60 23V39.5C60 52 51.5 61 40 65.5C28.5 61 20 52 20 39.5V23L40 15Z"
              fill="url(#termShield)"
              stroke="white"
              strokeWidth="2.5"
            />
            <path
              d="M31 40.5L37.5 47L50 33.5"
              stroke="#4ADE80"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="anim-dash"
            />
          </g>

          <circle cx="61" cy="19" r="3" fill="#F97316" className="anim-pulse-soft" />
        </svg>
      );

    /* 10. NEW POLICY — Illustrated Policy Bond with Sparkling Green '+' Stamp */
    case "new-policy":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="newPolBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFF6FF" />
              <stop offset="1" stopColor="#DBEAFE" />
            </linearGradient>
            <linearGradient id="docGrad" x1="20" y1="16" x2="56" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#F0F9FF" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#newPolBg)" />

          <g className="anim-float">
            <rect x="20" y="16" width="36" height="48" rx="6" fill="url(#docGrad)" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="27" y="25" width="22" height="4" rx="2" fill="#0F2E8A" />
            <rect x="27" y="34" width="18" height="3.2" rx="1.6" fill="#93C5FD" />
            <rect x="27" y="42" width="22" height="3.2" rx="1.6" fill="#93C5FD" />
            <rect x="27" y="50" width="14" height="3.2" rx="1.6" fill="#93C5FD" />
          </g>

          <g className="anim-pulse-soft">
            <circle cx="56" cy="54" r="11" fill="#16A34A" stroke="white" strokeWidth="2.5" />
            <path d="M56 48.5V59.5M50.5 54H61.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    /* 11. POLICY SERVICES — Smoothly Rotating Interlocking Service Gears */
    case "policy-services":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="servBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F1F5F9" />
              <stop offset="1" stopColor="#E2E8F0" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#servBg)" />

          <g className="anim-spin-slow">
            <circle cx="33" cy="42" r="13" fill="#0F2E8A" />
            <rect x="30.5" y="25" width="5" height="34" rx="2" fill="#0F2E8A" />
            <rect x="16" y="39.5" width="34" height="5" rx="2" fill="#0F2E8A" />
            <rect x="30.5" y="25" width="5" height="34" rx="2" fill="#0F2E8A" transform="rotate(45 33 42)" />
            <rect x="30.5" y="25" width="5" height="34" rx="2" fill="#0F2E8A" transform="rotate(-45 33 42)" />
            <circle cx="33" cy="42" r="6" fill="white" />
          </g>

          <g className="anim-spin-reverse">
            <circle cx="54" cy="28" r="9.5" fill="#F97316" />
            <rect x="52" y="15.5" width="4" height="25" rx="1.8" fill="#F97316" />
            <rect x="41.5" y="26" width="25" height="4" rx="1.8" fill="#F97316" />
            <rect x="52" y="15.5" width="4" height="25" rx="1.8" fill="#F97316" transform="rotate(45 54 28)" />
            <rect x="52" y="15.5" width="4" height="25" rx="1.8" fill="#F97316" transform="rotate(-45 54 28)" />
            <circle cx="54" cy="28" r="4" fill="white" />
          </g>

          <circle cx="56" cy="56" r="8.5" fill="#16A34A" stroke="white" strokeWidth="2.2" />
          <path d="M52.5 56L55 58.5L59.5 53.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    /* 12. PREMIUM DEPOSIT ASSISTANCE — Payment Card with Animated Rupee Coin */
    case "premium-deposit":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="premBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ECFDF5" />
              <stop offset="1" stopColor="#D1FAE5" />
            </linearGradient>
            <linearGradient id="cardGrad" x1="14" y1="26" x2="64" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#059669" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#premBg)" />

          <rect x="14" y="28" width="50" height="33" rx="7" fill="url(#cardGrad)" />
          <rect x="14" y="35" width="50" height="6" fill="#064E3B" />
          <rect x="21" y="47" width="12" height="6" rx="2" fill="#FDE047" />
          <rect x="37" y="49" width="18" height="3.5" rx="1.75" fill="#A7F3D0" />

          <g className="anim-float">
            <circle cx="56" cy="23" r="11" fill="#FBBF24" stroke="white" strokeWidth="2.4" />
            <text x="56" y="28" textAnchor="middle" fill="#78350F" fontSize="13" fontWeight="900" fontFamily="sans-serif">
              ₹
            </text>
          </g>
        </svg>
      );

    /* 13. LAPSED POLICY — Rotating Orange-Green Revival Arrows Restoring a Policy Shield */
    case "lapsed-policy":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="lapseBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF7ED" />
              <stop offset="1" stopColor="#FFEDD5" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#lapseBg)" />

          <g className="anim-spin-slow">
            <path d="M40 16A24 24 0 0 1 63 34" stroke="#F97316" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M57 32L63.5 35.5L65 28" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 64A24 24 0 0 1 17 46" stroke="#16A34A" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M23 48L16.5 44.5L15 52" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          <g className="anim-pulse-soft">
            <path d="M40 26L52 31V40C52 47.2 47 52.8 40 55.5C33 52.8 28 47.2 28 40V31L40 26Z" fill="#0F2E8A" />
            <path d="M35.5 40.5L38.8 43.8L45 37" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    /* 14. CLAIM ASSISTANCE — Emergency Protection Shield with Pulsing Care Beacon */
    case "claim-assistance":
      return (
        <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="claimBg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF2F2" />
              <stop offset="1" stopColor="#FEE2E2" />
            </linearGradient>
            <linearGradient id="claimShield" x1="20" y1="16" x2="60" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EF4444" />
              <stop offset="1" stopColor="#B91C1C" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="22" fill="url(#claimBg)" />

          <circle cx="40" cy="40" r="23" stroke="#EF4444" strokeWidth="2.4" className="anim-halo" />

          <g className="anim-float">
            <path
              d="M40 16L59 23.5V39C59 50.8 50.8 59.8 40 64C29.2 59.8 21 50.8 21 39V23.5L40 16Z"
              fill="url(#claimShield)"
              stroke="white"
              strokeWidth="2.5"
            />
            <rect x="37" y="29" width="6" height="19" rx="2.5" fill="white" />
            <rect x="30.5" y="35.5" width="19" height="6" rx="2.5" fill="white" />
          </g>

          <g className="anim-pulse-soft">
            <circle cx="58" cy="56" r="9.5" fill="#16A34A" stroke="white" strokeWidth="2.4" />
            <path d="M54 56L56.8 58.8L62 53.2" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );
  }
}
