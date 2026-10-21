/** Courses. Add, remove or reorder objects — the site updates automatically. */
export const courseConfig = {
  eyebrow: "Courses",
  title: "Programmes built around your goal.",
  description:
    "Choose a course by class and subject. Every programme includes study material, weekly tests and doubt sessions.",
  items: [
    {
      title: "Foundation Programme",
      level: "CLASS 8 – 10",
      subjects: ["Maths", "Science", "English"],
      description:
        "Build strong basics for boards and future competitive exams with concept-led classes.",
      duration: "1 year",
      cta: { label: "Enquire", href: "#enquiry" },
    },
    {
      title: "Board Excellence",
      level: "CLASS 11 – 12",
      subjects: ["Physics", "Chemistry", "Maths", "Biology"],
      description:
        "Complete CBSE/State board syllabus coverage with chapter tests and answer-writing practice.",
      duration: "1–2 years",
      featured: true,
      cta: { label: "Enquire", href: "#enquiry" },
    },
    {
      title: "JEE Main & Advanced",
      level: "CLASS 11 – 12 & DROPPERS",
      subjects: ["Physics", "Chemistry", "Maths"],
      description:
        "Problem-solving focused preparation with full-length mock tests and performance analysis.",
      duration: "2 years",
      cta: { label: "Enquire", href: "#enquiry" },
    },
    {
      title: "NEET Preparation",
      level: "CLASS 11 – 12 & DROPPERS",
      subjects: ["Physics", "Chemistry", "Biology"],
      description:
        "NCERT-centred teaching, daily practice questions and regular NEET-pattern tests.",
      duration: "2 years",
      cta: { label: "Enquire", href: "#enquiry" },
    },
  ] as {
    title: string;
    level?: string;
    subjects?: string[];
    description?: string;
    duration?: string;
    featured?: boolean;
    cta?: { label: string; href: string };
  }[],
};

export type CourseConfig = typeof courseConfig;
