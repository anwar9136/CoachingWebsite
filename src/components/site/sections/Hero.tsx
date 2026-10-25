import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { whatsappLink } from "@/utils/contact";
import { Icon } from "../primitives";

// Hindi/Marathi tagline from reference screenshot 1
const devanagariTagline = "मज़बूत नींव, बड़े लक्ष्य";

function LearningPathGraphic({ withPhoto }: { withPhoto: boolean }) {
  return (
    <>
      {!withPhoto && (
        <div className="hero-path-backdrop" aria-hidden="true">
          <div className="hero-path-jaali" />
          <div className="hero-path-blob" />
        </div>
      )}

      <div className={`hero-path-artwork ${withPhoto ? "hero-path-artwork-over-photo" : ""}`}>
        <svg
          className="hero-path-svg"
          viewBox="0 0 460 580"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="A learning path rising from Class 8 through Class 10 and Class 12 to JEE and NEET"
        >
          <g className="hero-path-orbit">
            <circle
              cx="340"
              cy="150"
              r="104"
              fill="none"
              stroke="rgba(247,245,239,.22)"
              strokeWidth="1.5"
              strokeDasharray="3 9"
            />
            <circle cx="444" cy="150" r="5" fill="#E7A044" />
          </g>
          <circle
            cx="340"
            cy="150"
            r="62"
            fill="none"
            stroke="rgba(247,245,239,.12)"
            strokeWidth="1"
          />
          <path
            d="M70 500 C 150 500, 130 400, 215 380 S 330 320, 335 230 S 360 130, 400 90"
            fill="none"
            stroke="rgba(247,245,239,.16)"
            strokeWidth="2"
            strokeDasharray="4 8"
            strokeLinecap="round"
          />
          <path
            className="hero-path-draw"
            pathLength="1"
            d="M70 500 C 150 500, 130 400, 215 380 S 330 320, 335 230 S 360 130, 400 90"
            fill="none"
            stroke="rgba(231,160,68,.28)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            className="hero-path-draw"
            pathLength="1"
            d="M70 500 C 150 500, 130 400, 215 380 S 330 320, 335 230 S 360 130, 400 90"
            fill="none"
            stroke="#E7A044"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <g className="hero-path-pop" style={{ animationDelay: "800ms" }}>
            <circle cx="70" cy="500" r="11" fill="#101827" stroke="#E7A044" strokeWidth="4" />
          </g>
          <text className="hero-path-label" style={{ animationDelay: "1s" }} x="70" y="536">
            Class 8
          </text>

          <g className="hero-path-pop" style={{ animationDelay: "1.9s" }}>
            <circle cx="215" cy="380" r="11" fill="#101827" stroke="#E7A044" strokeWidth="4" />
          </g>
          <text className="hero-path-label" style={{ animationDelay: "2.1s" }} x="234" y="372">
            Class 10
          </text>

          <g className="hero-path-pop" style={{ animationDelay: "2.7s" }}>
            <circle cx="335" cy="230" r="11" fill="#101827" stroke="#E7A044" strokeWidth="4" />
          </g>
          <text className="hero-path-label" style={{ animationDelay: "2.9s" }} x="354" y="262">
            Class 12
          </text>

          <circle className="hero-path-goal-pulse" cx="400" cy="90" r="16" fill="#E7A044" />
          <g className="hero-path-pop" style={{ animationDelay: "3.4s" }}>
            <circle cx="400" cy="90" r="15" fill="#E7A044" />
            <path
              d="m400 80 3 7 7 .8-5.3 4.6 1.6 7-6.3-3.8-6.3 3.8 1.6-7-5.3-4.6 7-.8z"
              fill="#101827"
            />
          </g>
          <text
            className="hero-path-label hero-path-goal-label"
            style={{ animationDelay: "3.6s" }}
            x="380"
            y="52"
            textAnchor="end"
          >
            JEE · NEET
          </text>
        </svg>

        <div className="hero-path-chips" aria-hidden="true">
          <span className="hero-formula-chip hero-chip-drift-1 hero-chip-pi">π</span>
          <span className="hero-formula-chip hero-chip-drift-2 hero-chip-water">H₂O</span>
          <span className="hero-formula-chip hero-chip-drift-3 hero-chip-energy">E = mc²</span>
          <span className="hero-formula-chip hero-chip-drift-2 hero-chip-root">√x</span>
          <span className="hero-formula-chip hero-chip-drift-1 hero-chip-integral">∫</span>
          <span className="hero-formula-chip hero-chip-drift-3 hero-chip-sigma">Σ n</span>
        </div>
      </div>
    </>
  );
}

export function Hero() {
  const c = siteConfig.contact;
  const waUrl = whatsappLink(c.whatsapp, c.whatsappMessage);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = parallaxRef.current;
    if (!media) return;

    const mobile = window.matchMedia("(max-width: 899px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (mobile.matches) {
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
    mobile.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      mobile.removeEventListener("change", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="hero-ambient-blob hero-ambient-blob-saffron" aria-hidden="true" />
      <div className="hero-ambient-blob hero-ambient-blob-navy" aria-hidden="true" />
      <div className="container-page hero-container">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">
          {/* Eyebrow */}
          <div className="hero-eyebrow-wrapper hero-rise hero-rise-eyebrow">
            <span className="eyebrow hero-eyebrow">
              <span className="saffron-dot" aria-hidden="true" />
              School tuition · Boards · JEE · NEET
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="hero-title">
            <span className="hero-word" style={{ animationDelay: "150ms" }}>
              Build
            </span>{" "}
            <span className="hero-word" style={{ animationDelay: "230ms" }}>
              strong
            </span>
            <br />
            <span className="hero-word" style={{ animationDelay: "310ms" }}>
              foundations.
            </span>
            <br />
            <span className="hero-word" style={{ animationDelay: "390ms" }}>
              Achieve
            </span>{" "}
            <span className="hero-highlight-underline">
              <span className="hero-word" style={{ animationDelay: "470ms" }}>
                bigger
              </span>{" "}
              <span className="hero-word" style={{ animationDelay: "550ms" }}>
                goals.
              </span>
            </span>
          </h1>

          {/* Optional Tagline (rendered only if confirmed) */}
          {devanagariTagline && (
            <p className="hero-tagline hero-rise hero-rise-tagline">{devanagariTagline}</p>
          )}

          {/* Description Paragraph */}
          <p className="hero-desc hero-rise hero-rise-description">
            Small batches, experienced teachers and weekly doubt-clearing sessions for school
            tuition, board exam support and JEE/NEET preparation.
          </p>

          {/* CTA Row */}
          <div className="hero-ctas hero-rise hero-rise-ctas">
            <a href="#enquiry" className="btn-saffron" id="hero-book-demo-btn">
              Book a free demo class
              <ArrowRight size={18} strokeWidth={2} aria-hidden />
            </a>
            <a href="#courses" className="btn-ghost" id="hero-explore-courses-btn">
              Explore our courses
            </a>
          </div>

          {/* WhatsApp Link */}
          <div className="hero-whatsapp-row hero-rise hero-rise-whatsapp">
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
          <div className="hero-exam-strip hero-rise hero-rise-exam">
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

        <div className="hero-right hero-rise hero-rise-panel">
          <div className="hero-photo-container">
            <div ref={parallaxRef} className="hero-photo-parallax">
              <div className={`hero-photo-visual ${siteConfig.hero.image ? "has-photo" : ""}`}>
                {siteConfig.hero.image && (
                  <img
                    src={siteConfig.hero.image}
                    alt={siteConfig.hero.imageAlt}
                    className="hero-photo-img"
                  />
                )}
                <LearningPathGraphic withPhoto={Boolean(siteConfig.hero.image)} />
              </div>
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
