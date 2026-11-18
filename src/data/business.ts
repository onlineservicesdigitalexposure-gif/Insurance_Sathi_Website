import { SITE_CONFIG } from "./site";

/**
 * Backward-compatibility wrapper pointing directly to centralized SITE_CONFIG.
 * Ensures zero duplicated business data across the codebase.
 */
export const BUSINESS_INFO = {
  name: SITE_CONFIG.name,
  tagline: SITE_CONFIG.tagline,
  owner: SITE_CONFIG.owner,
  description: SITE_CONFIG.meta.defaultDescription,
  locationNotice: `Serving ${SITE_CONFIG.targetLocations.join(", ")} & North 24 Parganas, West Bengal from Duckbanglow More office.`,
  contact: {
    phone: SITE_CONFIG.contact.phone,
    whatsapp: SITE_CONFIG.contact.whatsapp,
    email: SITE_CONFIG.contact.email,
    address: {
      landmark: SITE_CONFIG.address.landmark,
      street: SITE_CONFIG.address.street,
      city: SITE_CONFIG.address.city,
      district: SITE_CONFIG.address.district,
      state: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      country: SITE_CONFIG.address.country,
      formatted: SITE_CONFIG.address.formatted,
    },
    workingHours: `${SITE_CONFIG.workingHours.days}: ${SITE_CONFIG.workingHours.timing}`,
  },
  socials: {
    whatsapp: SITE_CONFIG.socials.find((s) => s.platform === "WhatsApp")?.url,
    phone: SITE_CONFIG.socials.find((s) => s.platform === "Phone")?.url,
    email: SITE_CONFIG.socials.find((s) => s.platform === "Email")?.url,
  },
} as const;

export const MAIN_NAV_ITEMS = SITE_CONFIG.mainNav;
