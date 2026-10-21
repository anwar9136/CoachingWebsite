import { ArrowUpRight, Clock, MapPin, Navigation, SquareArrowOutUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import {
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  googleMapsPlaceUrl,
  mapsPlaceQuery,
  telLink,
} from "@/utils/contact";
import { Reveal } from "../primitives";

export function VisitMap() {
  const c = siteConfig.contact;
  const hours = c.hours[0]
    ? `${c.hours[0].days} · ${c.hours[0].time}`
    : "Mon – Sat · 8:00 AM – 8:00 PM";

  const placeQuery = mapsPlaceQuery(c.address, c.mapUrl);
  const embedSrc = c.mapEmbedUrl?.trim() || (placeQuery ? googleMapsEmbedUrl(placeQuery) : "");
  const directionsUrl = placeQuery ? googleMapsDirectionsUrl(placeQuery) : c.mapUrl || "#";
  const openMapsUrl = placeQuery ? googleMapsPlaceUrl(placeQuery) : c.mapUrl || directionsUrl;

  const addressText = c.address?.trim() || "[Centre address, area, city, PIN]";
  const landmarkText = c.landmark?.trim();

  return (
    <section id="visit" className="visit-map-section">
      <div className="container-page">
        <Reveal className="visit-map-card">
          <div className="visit-map-copy">
            <p className="eyebrow">
              <span className="saffron-dot" aria-hidden="true" />
              Visit us
            </p>
            <h2 className="visit-map-title">Visit the centre, meet the teachers.</h2>

            <ul className="visit-map-info-list">
              <li className="visit-map-info-row">
                <span className="visit-map-info-icon" aria-hidden="true">
                  <MapPin size={18} strokeWidth={1.75} />
                </span>
                <div className="visit-map-info-text">
                  <p className="visit-map-info-label">Address</p>
                  <p className="visit-map-info-value">{addressText}</p>
                </div>
              </li>
              <li className="visit-map-info-row">
                <span className="visit-map-info-icon" aria-hidden="true">
                  <Clock size={18} strokeWidth={1.75} />
                </span>
                <div className="visit-map-info-text">
                  <p className="visit-map-info-label">Open</p>
                  <p className="visit-map-info-value">{hours}</p>
                </div>
              </li>
              {(landmarkText || siteConfig.isDemo) && (
                <li className="visit-map-info-row">
                  <span className="visit-map-info-icon" aria-hidden="true">
                    <Navigation size={18} strokeWidth={1.75} />
                  </span>
                  <div className="visit-map-info-text">
                    <p className="visit-map-info-label">Landmark</p>
                    <p className="visit-map-info-value">
                      {landmarkText || "[Nearby landmark or station]"}
                    </p>
                  </div>
                </li>
              )}
            </ul>

            <div className="visit-map-actions">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-saffron visit-map-btn"
                id="visit-get-directions-btn"
              >
                Get directions
                <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden />
              </a>
              {c.phone ? (
                <a href={telLink(c.phone)} className="btn-ghost visit-map-btn" id="visit-call-btn">
                  Call the centre
                </a>
              ) : (
                <span
                  className="btn-ghost visit-map-btn visit-map-btn-disabled"
                  aria-disabled="true"
                >
                  Call the centre
                </span>
              )}
            </div>
          </div>

          <div className="visit-map-panel">
            <div className="visit-map-frame">
              <div className="visit-map-decor" aria-hidden="true">
                <div className="visit-map-decor-blocks" />
                {!embedSrc && (
                  <div className="visit-map-marker-stack">
                    <span className="visit-map-marker-label">{siteConfig.name}</span>
                    <span className="visit-map-marker-pin" />
                    <span className="visit-map-marker-glow" />
                  </div>
                )}
              </div>

              {embedSrc ? (
                <iframe
                  title={`Map showing ${siteConfig.name}`}
                  className="visit-map-iframe"
                  src={embedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <p className="visit-map-preview-note">
                  Preview: add an address or map URL in site settings to show the live map.
                </p>
              )}
            </div>

            <a
              href={openMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-map-open-btn"
              aria-label={`Open ${siteConfig.name} in Google Maps`}
              id="visit-open-maps-btn"
            >
              <SquareArrowOutUpRight size={18} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
