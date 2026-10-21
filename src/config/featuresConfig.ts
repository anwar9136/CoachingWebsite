/** "Why choose us" features. `icon` is any Lucide icon name (see lucide.dev). */
export const featuresConfig = {
  eyebrow: "Why choose us",
  title: "Everything a serious student needs, nothing they don't.",
  items: [
    {
      icon: "Users",
      title: "Small batches",
      text: "Limited seats per batch so every question gets answered.",
    },
    {
      icon: "ClipboardCheck",
      title: "Weekly tests",
      text: "Regular tests with detailed analysis to spot weak areas early.",
    },
    {
      icon: "BookOpen",
      title: "Curated material",
      text: "Clear notes and practice sheets prepared by our faculty.",
    },
    {
      icon: "MessageCircleQuestion",
      title: "Doubt sessions",
      text: "Dedicated one-on-one time to clear doubts every week.",
    },
    {
      icon: "LineChart",
      title: "Progress reports",
      text: "Parents receive monthly updates on attendance and scores.",
    },
    {
      icon: "MapPin",
      title: "Convenient location",
      text: "Easy to reach, safe and well-lit classrooms.",
    },
  ],
};

export type FeaturesConfig = typeof featuresConfig;
