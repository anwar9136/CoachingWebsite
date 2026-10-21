import { Clock, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/siteConfig";
import { telLink, whatsappLink } from "@/utils/contact";
import { Reveal, SectionHeading } from "../primitives";

function Item({
  icon: I,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="contact-item flex gap-4 border border-border bg-card p-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center bg-muted text-primary">
        <I className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <h3 className="font-bold">{title}</h3>
        <div className="mt-1 text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  );
}

export function Contact() {
  const c = siteConfig.contact;
  const link = "font-medium text-foreground underline-offset-4 hover:text-primary hover:underline";
  return (
    <section id="contact" className="section-y bg-muted">
      <div className="container-page">
        <SectionHeading eyebrow="Contact" title="Visit us or get in touch" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {c.address && (
            <Item icon={MapPin} title="Address">
              <p>{c.address}</p>
              {c.mapUrl && (
                <a
                  href={c.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link} mt-2 inline-block text-sm`}
                >
                  Open in Google Maps →
                </a>
              )}
            </Item>
          )}
          {c.hours.length > 0 && (
            <Item icon={Clock} title="Opening hours">
              {c.hours.map((h) => (
                <p key={h.days}>
                  <span className="font-medium text-foreground">{h.days}:</span> {h.time}
                </p>
              ))}
            </Item>
          )}
          {c.phone && (
            <Item icon={Phone} title="Phone">
              <a href={telLink(c.phone)} className={link}>
                {c.phone}
              </a>
            </Item>
          )}
          {c.email && (
            <Item icon={Mail} title="Email">
              <a href={`mailto:${c.email}`} className={`${link} break-all`}>
                {c.email}
              </a>
            </Item>
          )}
          {c.whatsapp && (
            <Item icon={MessageCircle} title="WhatsApp">
              <a
                href={whatsappLink(c.whatsapp, c.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Chat with us on WhatsApp
              </a>
            </Item>
          )}
        </div>
      </div>
    </section>
  );
}
