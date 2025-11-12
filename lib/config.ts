/**
 * Company Information Configuration
 * 
 * Update company details here and they will be reflected across the entire website.
 * This includes: company name, contact info, address, and website URLs.
 */

export const company = {
  name: "EKBHR MEDIA",
  legalName: "EKBHR MEDIA",
  tagline: "Publisher monetization & ad ops engineered for Core Web Vitals.",
  
  // Contact Information
  contact: {
    email: "info@ekbhr.com",
    phone: "+971 54 510 0593",
    phoneFormatted: "+971 54 510 0593",
    whatsapp: "+971 54 510 0593",
  },
  
  // Address
  address: {
    city: "Dubai",
    country: "United Arab Emirates",
    full: "Dubai, United Arab Emirates",
  },
  
  // Website URLs
  website: {
    domain: "ekbhr.com",
    url: "https://www.ekbhr.com",
    urlWithoutProtocol: "www.ekbhr.com",
  },
  
  // Seller/Ad Tech Info
  seller: {
    sellerId: "ekbhr-0001",
    name: "EKBHR MEDIA",
    domain: "ekbhr.com",
  },
} as const;

// Helper functions for common use cases
export const getEmailLink = (email: string = company.contact.email) => `mailto:${email}`;
export const getPhoneLink = (phone: string = company.contact.phone) => `tel:${phone.replace(/\s/g, "")}`;
export const getWhatsAppLink = (phone: string = company.contact.whatsapp) => {
  const cleanPhone = phone.replace(/\s/g, "").replace(/\+/g, "");
  return `https://wa.me/${cleanPhone}`;
};

