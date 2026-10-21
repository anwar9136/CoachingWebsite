import { feesConfig } from "@/config/feesConfig";
import { Reveal } from "../primitives";

export function Fees() {
  return (
    <section id="fees" className="fees-section">
      <div className="container-page fees-layout">
        <Reveal className="fees-copy">
          <p className="eyebrow">
            <span className="saffron-dot" aria-hidden="true" />
            {feesConfig.eyebrow}
          </p>
          <h2 className="section-heading-h2 fees-title">{feesConfig.title}</h2>
          <p className="fees-desc">{feesConfig.description}</p>
          <a href={feesConfig.cta.href} className="btn-navy fees-cta">
            {feesConfig.cta.label}
          </a>
        </Reveal>

        <Reveal
          delay={120}
          className="fees-table-card"
          role="table"
          aria-label="Programme fees and timings"
        >
          <div className="fees-table-head" role="row">
            {feesConfig.columns.map((col) => (
              <span key={col} role="columnheader">
                {col}
              </span>
            ))}
          </div>
          {feesConfig.items.map((row) => (
            <div key={row.programme} className="fees-table-row" role="row">
              <div role="cell">
                <p className="fees-prog-name">{row.programme}</p>
                <p className="fees-prog-level">{row.level}</p>
              </div>
              <p role="cell" className="fees-timing">
                {row.timing}
              </p>
              <p role="cell" className="fees-amount">
                {row.fee}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
