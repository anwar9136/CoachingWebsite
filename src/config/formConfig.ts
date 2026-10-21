/**
 * Enquiry form settings.
 * provider:
 *  - "whatsapp": opens WhatsApp with the enquiry pre-filled (no backend needed).
 *  - "endpoint": POSTs JSON to `endpoint` (Formspree, Getform, your own API…).
 *  - "none":     form shows a clear "not connected" message — nothing is faked.
 */
export const formConfig = {
  provider: "whatsapp" as "whatsapp" | "endpoint" | "none",
  endpoint: "",
  eyebrow: "Free demo class",
  title: "Book a free demo class",
  description:
    "Share a few details and our team will get in touch to schedule a demo at a time that suits you.",
  classOptions: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Dropper"],
  submitLabel: "Request a callback",
  successMessage: "Thank you! We'll contact you shortly.",
  whatsappSuccessMessage: "WhatsApp has opened with your enquiry — just press send.",
};
