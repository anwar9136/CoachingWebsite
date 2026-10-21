/**
 * Faculty. `photo` is optional — without it, initials are shown.
 * SAMPLE PROFILES: replace with real, verified details before going live.
 */
export const facultyConfig = {
  eyebrow: "Faculty",
  title: "Teachers who make it click.",
  isSample: true,
  items: [
    {
      name: "Priya Sharma",
      photo: "",
      qualification: "M.Sc. Mathematics",
      subjects: ["Mathematics"],
      bio: "Known for breaking tough problems into simple, logical steps.",
    },
    {
      name: "Rajesh Iyer",
      photo: "",
      qualification: "M.Sc. Physics, B.Ed.",
      subjects: ["Physics"],
      bio: "Brings physics to life with everyday examples and experiments.",
    },
    {
      name: "Ananya Rao",
      photo: "",
      qualification: "M.Sc. Chemistry",
      subjects: ["Chemistry"],
      bio: "Focuses on NCERT mastery and clear reaction mechanisms.",
    },
  ] as {
    name: string;
    photo?: string;
    qualification?: string;
    subjects?: string[];
    bio?: string;
  }[],
};
