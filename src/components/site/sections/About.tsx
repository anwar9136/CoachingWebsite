import { Camera, Check } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Reveal } from "../primitives";

export function About() {
  const a = siteConfig.about;

  const checkItems = a.highlights;

  return (
    <section id="about" className="about-section">
      <div className="container-page about-grid">
        <Reveal className="about-photo-wrapper">
          <div className="about-photo-container">
            {a.image ? (
              <img src={a.image} alt={a.imageAlt} className="about-photo-img" />
            ) : (
              <div className="about-photo-slot" role="img" aria-label={a.imagePlaceholder}>
                <Camera size={26} strokeWidth={1.75} color="#6B7280" aria-hidden />
                <p className="about-photo-slot-title">{a.imagePlaceholder}</p>
                <p className="about-photo-slot-sub">{a.imageGuidance}</p>
              </div>
            )}
          </div>
          <div className="about-mission-card">
            <span className="about-mission-eyebrow">OUR MISSION</span>
            <p className="about-mission-text">
              {a.mission ||
                "Help every student build the understanding and habits that last beyond the exam."}
            </p>
          </div>
        </Reveal>

        <Reveal className="about-content">
          <p className="eyebrow">
            <span className="saffron-dot" aria-hidden="true" />
            {a.eyebrow || "ABOUT US"}
          </p>
          <h2 className="section-heading-h2 about-title">
            {a.title || "A focused place to learn, ask and grow."}
          </h2>

          <div className="about-desc">
            {a.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* 2-column check rows */}
          <div className="about-check-grid">
            {checkItems.map((item) => (
              <div key={item} className="about-check-row">
                <span className="about-check-circle" aria-hidden="true">
                  <Check size={14} strokeWidth={2.5} color="#101827" />
                </span>
                <span className="about-check-label">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
