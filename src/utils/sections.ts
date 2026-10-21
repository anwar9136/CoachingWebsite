import { sectionsConfig } from "@/config/sectionsConfig";
import { siteConfig } from "@/config/siteConfig";
import { courseConfig } from "@/config/courseConfig";
import { featuresConfig } from "@/config/featuresConfig";
import { facultyConfig } from "@/config/facultyConfig";
import { testimonialConfig } from "@/config/testimonialConfig";
import { faqConfig } from "@/config/faqConfig";

const hasContent: Record<string, () => boolean> = {
  trust: () => siteConfig.trust.length > 0,
  courses: () => courseConfig.items.length > 0,
  about: () => Boolean(siteConfig.about.title || siteConfig.about.paragraphs.length),
  whyChooseUs: () => featuresConfig.items.length > 0,
  faculty: () => facultyConfig.items.length > 0,
  results: () => true, // preview placeholders until verified results exist
  fees: () => true,
  testimonials: () => testimonialConfig.items.length > 0,
  faq: () => faqConfig.items.length > 0,
  visit: () =>
    Boolean(
      siteConfig.contact.address || siteConfig.contact.mapUrl || siteConfig.contact.mapEmbedUrl,
    ),
  enquiry: () => true,
  contact: () =>
    Boolean(siteConfig.contact.phone || siteConfig.contact.email || siteConfig.contact.address),
  whatsappButton: () => Boolean(siteConfig.contact.whatsapp),
};

/** A section shows only if enabled in sectionsConfig AND it has content. */
export function isSectionVisible(key: string): boolean {
  const enabled = (sectionsConfig as Record<string, boolean>)[key];
  if (!enabled) return false;
  return hasContent[key] ? hasContent[key]() : true;
}
