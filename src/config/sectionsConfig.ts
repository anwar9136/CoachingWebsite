/**
 * Turn any section on/off.
 */
export const sectionsConfig = {
  trust: false, // hidden per reference design order
  courses: true,
  about: true,
  whyChooseUs: true,
  faculty: true,
  results: true, // placeholder cards until verified results exist
  fees: true,
  testimonials: false, // hidden — no real testimonials yet
  faq: true,
  visit: true,
  enquiry: true,
  contact: false, // contact info now lives inside enquiry card
  whatsappButton: true,
};

export type SectionKey = keyof typeof sectionsConfig;
