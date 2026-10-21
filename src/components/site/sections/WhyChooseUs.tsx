import {
  Users,
  ClipboardCheck,
  BookOpen,
  MessageCircleQuestion,
  LineChart,
  MapPin,
} from "lucide-react";
import { featuresConfig } from "@/config/featuresConfig";
import { Reveal } from "../primitives";

export function WhyChooseUs() {
  const items = [
    {
      icon: Users,
      title: "Small batches",
      text: "Limited seats per batch so every question gets answered.",
    },
    {
      icon: ClipboardCheck,
      title: "Weekly tests",
      text: "Regular tests with detailed analysis to spot weak areas early.",
    },
    {
      icon: BookOpen,
      title: "Curated material",
      text: "Clear notes and practice sheets prepared by our faculty.",
    },
    {
      icon: MessageCircleQuestion,
      title: "Doubt sessions",
      text: "Dedicated one-on-one time to clear doubts every week.",
    },
    {
      icon: LineChart,
      title: "Parent updates",
      text: "Monthly updates on attendance and scores, plus parent meetings.",
    },
    {
      icon: MapPin,
      title: "Convenient location",
      text: "Easy to reach, safe and well-lit classrooms.",
    },
  ];

  return (
    <section id="why" className="why-section jaali-pattern">
      <div className="container-page">
        {/* Header */}
        <Reveal className="why-header">
          <p className="eyebrow why-eyebrow">
            <span className="saffron-dot" aria-hidden="true" />
            {featuresConfig.eyebrow || "WHY CHOOSE APEX"}
          </p>
          <h2 className="section-heading-h2 why-title">
            {featuresConfig.title || "Everything a serious student needs, nothing they don't."}
          </h2>
        </Reveal>

        {/* 3x2 Grid inside 1px border container */}
        <div className="why-grid-box">
          {items.map((item, i) => {
            const IconCmp = item.icon;
            return (
              <Reveal key={item.title} delay={i * 55} className="why-cell">
                <div className="why-icon-tile" aria-hidden="true">
                  <IconCmp size={22} strokeWidth={1.75} color="#E7A044" />
                </div>
                <h3 className="why-cell-title">{item.title}</h3>
                <p className="why-cell-desc">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
