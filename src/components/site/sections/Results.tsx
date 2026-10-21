import { User } from "lucide-react";
import { resultsConfig } from "@/config/resultsConfig";
import { Reveal } from "../primitives";

export function Results() {
  const hasRealData = resultsConfig.items && resultsConfig.items.length > 0;

  const previewCards = [
    { score: "[Score / Rank]", name: "[Student name]", examYear: "[Exam · Year]" },
    { score: "[Score / Rank]", name: "[Student name]", examYear: "[Exam · Year]" },
    { score: "[Score / Rank]", name: "[Student name]", examYear: "[Exam · Year]" },
    { score: "[Score / Rank]", name: "[Student name]", examYear: "[Exam · Year]" },
  ];

  return (
    <section id="results" className="results-section">
      <div className="container-page">
        {/* Header */}
        <Reveal className="results-header">
          <div className="results-header-left">
            <p className="eyebrow">
              <span className="saffron-dot" aria-hidden="true" />
              RESULTS &amp; ACHIEVERS
            </p>
            <h2 className="section-heading-h2 results-title">
              Our students, in their own words and marks.
            </h2>
          </div>

          {!hasRealData && (
            <div className="results-preview-note">
              <p>
                Design preview: this section only appears on the live site once real, verified
                results are added.
              </p>
            </div>
          )}
        </Reveal>

        {/* 4 Cards Grid */}
        <div className="results-grid">
          {hasRealData
            ? resultsConfig.items.map((r, i) => (
                <Reveal key={i} delay={i * 70} as="article" className="result-card">
                  <div className="result-avatar" aria-hidden="true">
                    <User size={32} strokeWidth={1.5} color="#6B7280" />
                  </div>
                  <p className="result-score">{r.value}</p>
                  <p className="result-name">{r.label}</p>
                  {r.note && <p className="result-meta">{r.note}</p>}
                </Reveal>
              ))
            : previewCards.map((card, i) => (
                <Reveal key={i} delay={i * 70} as="article" className="result-card">
                  <div className="result-avatar" aria-hidden="true">
                    <User size={32} strokeWidth={1.5} color="#6B7280" />
                  </div>
                  <p className="result-score">{card.score}</p>
                  <p className="result-name">{card.name}</p>
                  <p className="result-meta">{card.examYear}</p>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
