import { useEffect, useRef } from "react";
import { animate, motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { courseConfig } from "@/config/courseConfig";
import { isSectionVisible } from "@/utils/sections";
import { Reveal } from "./primitives";

const academyLinks = [
  { label: "About", href: "#about", section: "about" },
  { label: "Faculty", href: "#faculty", section: "faculty" },
  { label: "Fees & timings", href: "#fees", section: "fees" },
  { label: "Contact", href: "#enquiry", section: "enquiry" },
];

function FooterGiantText() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let started = false;
    let observer: IntersectionObserver | undefined;
    let stopAnimation: (() => void) | undefined;
    const observe = () => {
      if (started) return;
      started = true;
      el.classList.add("footer-giant-text-pending");
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          observer?.disconnect();
          const controls = animate(
            el,
            { opacity: [0, 1], y: ["40%", 0] },
            { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] },
          );
          stopAnimation = () => controls.stop();
          void controls.then(() => el.classList.remove("footer-giant-text-pending"));
        },
        { threshold: 0.2 },
      );
      observer.observe(el);
    };

    observe();
    return () => {
      observer?.disconnect();
      stopAnimation?.();
    };
  }, []);

  return (
    <div className="footer-giant-clip">
      <motion.div ref={ref} className="footer-giant-text" aria-hidden="true">
        {siteConfig.name.toUpperCase()}
      </motion.div>
    </div>
  );
}

export function Footer() {
  const c = siteConfig.contact;
  const hours = c.hours[0]
    ? `${c.hours[0].days} · ${c.hours[0].time}`
    : "Mon – Sat · 8:00 AM – 8:00 PM";

  return (
    <footer className="site-footer">
      <div className="container-page">
        <Reveal className="footer-top">
          <div>
            <a href="#top" className="footer-brand" aria-label={`${siteConfig.name} home`}>
              <span className="footer-logo-mark" aria-hidden="true">
                A
              </span>
              <span className="footer-logo-name">{siteConfig.name}</span>
            </a>
            {siteConfig.footer.blurb && <p className="footer-tagline">{siteConfig.footer.blurb}</p>}
          </div>

          <div>
            <p className="footer-col-title">Programmes</p>
            {courseConfig.items.map((course) => (
              <a key={course.title} href="#courses" className="footer-link">
                {course.title}
              </a>
            ))}
          </div>

          <div>
            <p className="footer-col-title">Academy</p>
            {academyLinks
              .filter((l) => !l.section || isSectionVisible(l.section))
              .map((l) => (
                <a key={l.href} href={l.href} className="footer-link">
                  {l.label}
                </a>
              ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="footer-bottom">
          <p>{siteConfig.footer.copyright}</p>
          <p>{hours}</p>
        </Reveal>
      </div>
      <FooterGiantText />
    </footer>
  );
}
