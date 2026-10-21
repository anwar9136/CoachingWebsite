import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { courseConfig } from "@/config/courseConfig";
import { Reveal } from "../primitives";

export function Courses() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  // Group items:
  // Tab 0: Foundation Programme + Board Excellence
  // Tab 1: JEE Main & Advanced + NEET Preparation
  const tab0Courses = courseConfig.items.slice(0, 2);
  const tab1Courses = courseConfig.items.slice(2, 4);

  const currentCourses = activeTab === 0 ? tab0Courses : tab1Courses;

  return (
    <section id="courses" className="courses-section">
      <div className="container-page">
        {/* Header row */}
        <Reveal className="courses-header">
          <div className="courses-header-left">
            <p className="eyebrow">
              <span className="saffron-dot" aria-hidden="true" />
              {courseConfig.eyebrow}
            </p>
            <h2 className="section-heading-h2">{courseConfig.title}</h2>
          </div>
          <div className="courses-header-right">
            <p className="courses-header-desc">
              Every programme includes study material, weekly tests and doubt sessions.
            </p>
          </div>
        </Reveal>

        {/* Tab Group */}
        <Reveal delay={80} className="courses-tab-wrapper">
          <div className="courses-tab-track" role="tablist" aria-label="Course categories">
            <button
              role="tab"
              aria-selected={activeTab === 0}
              id="tab-school-boards"
              aria-controls="panel-school-boards"
              className={`courses-tab-btn ${activeTab === 0 ? "is-active" : ""}`}
              onClick={() => setActiveTab(0)}
            >
              School &amp; Boards · Classes 8–12
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 1}
              id="tab-jee-neet"
              aria-controls="panel-jee-neet"
              className={`courses-tab-btn ${activeTab === 1 ? "is-active" : ""}`}
              onClick={() => setActiveTab(1)}
            >
              JEE &amp; NEET
            </button>
          </div>
        </Reveal>

        {/* Courses Grid */}
        <div
          key={activeTab}
          id={activeTab === 0 ? "panel-school-boards" : "panel-jee-neet"}
          role="tabpanel"
          aria-labelledby={activeTab === 0 ? "tab-school-boards" : "tab-jee-neet"}
          className="courses-grid courses-grid-enter"
        >
          {currentCourses.map((c, i) => (
            <Reveal key={c.title} delay={i * 70} as="article" className="course-card">
              {/* Top row */}
              <div className="course-card-top">
                <span className="course-class-text">{c.level}</span>
                <span className="course-number-tile" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="course-card-title">{c.title}</h3>

              {/* Description */}
              {c.description && <p className="course-card-desc">{c.description}</p>}

              {/* Plain text subjects line with dot separator */}
              {c.subjects && c.subjects.length > 0 && (
                <p className="course-subjects-line">{c.subjects.join(" · ")}</p>
              )}

              {/* Spacer */}
              <div className="course-spacer" />

              {/* Footer */}
              <div className="course-card-footer">
                <span className="course-duration-text">Duration · {c.duration}</span>
                <a
                  href={c.cta?.href || "#enquiry"}
                  className="course-enquire-link"
                  aria-label={`Enquire about ${c.title}`}
                >
                  <span>Enquire</span>
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2.2}
                    className="course-enquire-arrow"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
