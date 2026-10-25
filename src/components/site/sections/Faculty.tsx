import { facultyConfig } from "@/config/facultyConfig";
import { Reveal } from "../primitives";

export function Faculty() {
  return (
    <section id="faculty" className="faculty-section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">
            <span className="saffron-dot" aria-hidden="true" />
            {facultyConfig.eyebrow}
          </p>
          <h2 className="section-heading-h2 faculty-title">{facultyConfig.title}</h2>
        </Reveal>

        <div className="faculty-grid">
          {facultyConfig.items.map((f, i) => (
            <Reveal key={f.name} delay={i * 80} className="card-reveal">
              <article className="faculty-card">
                <div className={`faculty-photo-tile ${f.photo ? "" : "faculty-photo-placeholder"}`}>
                  {f.photo ? (
                    <img
                      src={f.photo}
                      alt={f.name}
                      width={480}
                      height={320}
                      loading="lazy"
                      className="faculty-photo-img"
                    />
                  ) : (
                    <span className="faculty-silhouette" aria-hidden="true">
                      <span className="faculty-silhouette-head" />
                      <span className="faculty-silhouette-body" />
                    </span>
                  )}

                  {f.subjects?.[0] && <span className="faculty-subject-pill">{f.subjects[0]}</span>}

                  {!f.photo && <span className="faculty-photo-slot">Photo slot</span>}
                </div>

                <div className="faculty-info">
                  <h3 className="faculty-name">{f.name}</h3>
                  {f.qualification && <p className="faculty-qual">{f.qualification}</p>}
                  {f.bio && <p className="faculty-bio">{f.bio}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
