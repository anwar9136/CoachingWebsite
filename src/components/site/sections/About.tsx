import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion";
import { Camera, Check } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Reveal } from "../primitives";

function AboutParallaxLayer({
  children,
  className,
  direction,
  enabled,
}: {
  children: ReactNode;
  className: string;
  direction: "photo" | "mission";
  enabled: boolean;
}) {
  if (!enabled) return <div className={className}>{children}</div>;
  return (
    <MotionParallaxLayer className={className} direction={direction}>
      {children}
    </MotionParallaxLayer>
  );
}

function MotionParallaxLayer({
  children,
  className,
  direction,
}: {
  children: ReactNode;
  className: string;
  direction: "photo" | "mission";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], direction === "photo" ? [-40, 40] : [50, -50]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(value);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    setCount(0);
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="about-stat-value" aria-label={String(value)}>
      {count}
    </span>
  );
}

export function About() {
  const a = siteConfig.about;
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const checkItems = a.highlights;

  useEffect(() => {
    const updateEnabled = () => setParallaxEnabled(window.matchMedia("(min-width: 900px)").matches);

    updateEnabled();
    window.addEventListener("resize", updateEnabled);
    return () => {
      window.removeEventListener("resize", updateEnabled);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container-page about-grid">
        <Reveal className="about-photo-wrapper">
          <AboutParallaxLayer
            className="about-photo-container"
            direction="photo"
            enabled={parallaxEnabled}
          >
            {a.image ? (
              <img src={a.image} alt={a.imageAlt} className="about-photo-img" />
            ) : (
              <div className="about-photo-slot" role="img" aria-label={a.imagePlaceholder}>
                <Camera size={26} strokeWidth={1.75} color="#6B7280" aria-hidden />
                <p className="about-photo-slot-title">{a.imagePlaceholder}</p>
                <p className="about-photo-slot-sub">{a.imageGuidance}</p>
              </div>
            )}
          </AboutParallaxLayer>
          <AboutParallaxLayer
            className="about-mission-card"
            direction="mission"
            enabled={parallaxEnabled}
          >
            <>
              <span className="about-mission-eyebrow">OUR MISSION</span>
              <p className="about-mission-text">
                {a.mission ||
                  "Help every student build the understanding and habits that last beyond the exam."}
              </p>
            </>
          </AboutParallaxLayer>
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
          <div className="about-stats-grid">
            {a.stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <AnimatedCounter value={stat.value} />
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
