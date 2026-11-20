import type { NavItem } from "@/types";

export const HEADER_NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Insurance",
    href: "/insurance",
    children: [
      {
        label: "Life Insurance",
        href: "/insurance/life-insurance",
        description: "Lifelong financial security, child savings & retirement funds",
        iconName: "HeartPulse",
      },
      {
        label: "Health Insurance",
        href: "/insurance/health-insurance",
        description: "Cashless mediclaim, family floater & critical illness cover",
        iconName: "Activity",
        badge: "Essential",
      },
      {
        label: "Motor Insurance",
        href: "/insurance/motor-insurance",
        description: "Car, bike & commercial vehicle zero-depreciation cover",
        iconName: "Car",
      },
      {
        label: "Term Insurance",
        href: "/insurance/term-insurance",
        description: "High sum assured pure protection at affordable premiums",
        iconName: "ShieldCheck",
        badge: "High Cover",
      },
      {
        label: "Home Insurance",
        href: "/insurance/home-insurance",
        description: "Bharat Griha Raksha structure & valuable contents protection",
        iconName: "Home",
      },
      {
        label: "Travel Insurance",
        href: "/insurance/travel-insurance",
        description: "Worldwide medical emergency & baggage delay protection",
        iconName: "Plane",
      },
      {
        label: "Investment Plans",
        href: "/insurance/investment-plans",
        description: "Guaranteed return savings, SIP & mutual funds, child future plans",
        iconName: "PiggyBank",
        badge: "Wealth",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "New Policy",
        href: "/services/purchase-new-policy",
        description: "Unbiased need analysis & proposal documentation support",
        iconName: "FilePlus2",
      },
      {
        label: "Policy Services",
        href: "/services/policy-services",
        description: "Nominee updates, contact corrections & duplicate bond issuance",
        iconName: "Settings2",
      },
      {
        label: "Premium Deposit Assistance",
        href: "/services/premium-deposit-assistance",
        description: "Grace period monitoring, NACH auto-debit & receipt tracking",
        iconName: "CreditCard",
      },
      {
        label: "Lapsed Policy",
        href: "/services/lapsed-policy-services",
        description: "Revival quote calculation, interest concession & DGH forms",
        iconName: "RotateCcw",
        badge: "Specialized",
      },
      {
        label: "Claim Assistance",
        href: "/services/insurance-claim-assistance",
        description: "Hospital cashless coordination & motor surveyor liaison",
        iconName: "ShieldAlert",
        badge: "Dedicated",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Blogs",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
] as const;
