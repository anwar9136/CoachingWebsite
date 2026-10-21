import { useEffect, useRef } from "react";
import { ArrowRight, Camera, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { whatsappLink } from "@/utils/contact";
import { Icon } from "../primitives";

// Hindi/Marathi tagline from reference screenshot 1
const devanagariTagline = "मज़बूत नींव, बड़े लक्ष्य";

export function Hero() {
  const c = siteConfig.contact;
  const waUrl = whatsappLink(c.whatsapp, c.whatsappMessage);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = parallaxRef.current;
    if (!media) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 899px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reducedMotion.matches || mobile.matches) {
        media.style.transform = "";
        media.style.willChange = "";
        return;
      }

      const container = media.parentElement;
      if (!container) return;
      const bounds = container.getBoundingClientRect();
      const progress = (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height);
      const offset = Math.max(-10, Math.min(10, (progress - 0.5) * 20));
      media.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
      media.style.willChange = "transform";
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);
    mobile.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
      mobile.removeEventListener("change", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="container-page hero-container">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">
          {/* Eyebrow */}
          <div className="hero-eyebrow-wrapper anim-hero anim-hero-1">
            <span className="eyebrow hero-eyebrow">
              <span className="saffron-dot" aria-hidden="true" />
              School tuition · Boards · JEE · NEET
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="hero-title anim-hero anim-hero-2">
            Build strong
            <br />
            foundations.
            <br />
            Achieve <span className="hero-highlight-underline">bigger goals.</span>
          </h1>

          {/* Optional Tagline (rendered only if confirmed) */}
          {devanagariTagline && (
            <p className="hero-tagline anim-hero anim-hero-3">{devanagariTagline}</p>
          )}

          {/* Description Paragraph */}
          <p className="hero-desc anim-hero anim-hero-3">
            Small batches, experienced teachers and weekly doubt-clearing sessions for school
            tuition, board exam support and JEE/NEET preparation.
          </p>

          {/* CTA Row */}
          <div className="hero-ctas anim-hero anim-hero-4">
            <a href="#enquiry" className="btn-saffron" id="hero-book-demo-btn">
              Book a free demo class
              <ArrowRight size={18} strokeWidth={2} aria-hidden />
            </a>
            <a href="#courses" className="btn-ghost" id="hero-explore-courses-btn">
              Explore our courses
            </a>
          </div>

          {/* WhatsApp Link */}
          <div className="hero-whatsapp-row anim-hero anim-hero-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-link"
              id="hero-whatsapp-cta"
            >
              <span className="hero-whatsapp-icon-circle" aria-hidden="true">
                <MessageCircle size={18} strokeWidth={2} fill="#FFFFFF" color="#25D366" />
              </span>
              <span className="hero-whatsapp-text">Chat on WhatsApp</span>
            </a>
          </div>

          {/* Exam Strip */}
          <div className="hero-exam-strip anim-hero anim-hero-5">
            <span className="hero-exam-label">Coaching for</span>
            <div className="hero-exam-items">
              <span>CBSE</span>
              <span className="hero-exam-dot" aria-hidden="true">
                ·
              </span>
              <span>State Board</span>
              <span className="hero-exam-dot" aria-hidden="true">
                ·
              </span>
              <span>JEE</span>
              <span className="hero-exam-dot" aria-hidden="true">
                ·
              </span>
              <span>NEET</span>
            </div>
          </div>
        </div>

        <div className="hero-right anim-hero anim-hero-3">
          <div className="hero-photo-container">
            <div ref={parallaxRef} className="hero-photo-parallax">
              {siteConfig.hero.image ? (
                <img
                  src={siteConfig.hero.image}
                  alt={siteConfig.hero.imageAlt}
                  className="hero-photo-img"
                />
              ) : (
                <div
                  className="hero-photo-fallback"
                  role="img"
                  aria-label={siteConfig.hero.imagePlaceholder}
                >
                  <div className="hero-photo-slot">
                    <span className="hero-photo-camera" aria-hidden="true">
                      <Camera size={24} strokeWidth={1.75} />
                    </span>
                    <p className="hero-photo-slot-title">{siteConfig.hero.imagePlaceholder}</p>
                    <p className="hero-photo-slot-sub">{siteConfig.hero.imageGuidance}</p>
                  </div>
                </div>
              )}
            </div>
            <span className="hero-photo-saffron-strip" aria-hidden="true" />
          </div>

          {siteConfig.hero.imageCallouts.map((callout, index) => (
            <div
              key={callout.title}
              className={`hero-float-card ${index === 0 ? "hero-float-top-left" : "hero-float-bottom-right"}`}
            >
              <span
                className={`hero-float-icon-tile ${index === 0 ? "hero-float-icon-tint" : "hero-float-icon-navy"}`}
                aria-hidden="true"
              >
                <Icon
                  name={callout.icon}
                  className={`h-4 w-4 ${index === 1 ? "text-[#E7A044]" : "text-[#101827]"}`}
                />
              </span>
              <span>
                <span className="hero-float-title">{callout.title}</span>
                <span className="hero-float-sub">{callout.text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
