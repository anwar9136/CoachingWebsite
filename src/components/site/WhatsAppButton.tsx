import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { whatsappLink } from "@/utils/contact";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="sticky-whatsapp-btn"
      id="sticky-whatsapp"
    >
      <MessageSquare size={21} strokeWidth={2} fill="#FFFFFF" color="#25D366" aria-hidden />
      <span className="sticky-whatsapp-label">Chat with us</span>
      {/* Pulsing white dot at top right */}
      <span className="sticky-whatsapp-pulse-dot" aria-hidden="true" />
    </a>
  );
}
