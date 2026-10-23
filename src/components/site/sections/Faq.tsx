import { faqConfig } from "@/config/faqConfig";
import { siteConfig } from "@/config/siteConfig";
import { whatsappLink } from "@/utils/contact";
import { FaqItem, Reveal } from "../primitives";

export function Faq() {
  const wa = siteConfig.contact.whatsapp;

  return (
    <section id="faq" className="faq-section">
      <div className="container-page faq-layout">
        <div className="faq-copy-stack">
          <Reveal className="faq-left">
            <p className="eyebrow">
              <span className="saffron-dot" aria-hidden="true" />
              {faqConfig.eyebrow}
            </p>
            <h2 className="section-heading-h2 faq-title">{faqConfig.title}</h2>
          </Reveal>

          <Reveal delay={160} className="faq-talk-card">
            <p className="faq-talk-title">Still have questions?</p>
            <p className="faq-talk-sub">
              Message us on WhatsApp and we'll help you choose the right programme.
            </p>
            <a
              href={whatsappLink(wa, siteConfig.contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy btn-navy-sm"
            >
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        <Reveal delay={100} className="faq-accordion-card" role="list">
          {faqConfig.items.map((f, i) => (
            <div role="listitem" key={f.q}>
              <FaqItem question={f.q} answer={f.a} defaultOpen={i === 0} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
