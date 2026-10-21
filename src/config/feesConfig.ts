/**
 * Fees & batch timings.
 * Leave `timing` / `fee` empty (or use bracket placeholders) until real figures are confirmed.
 */
export const feesConfig = {
  eyebrow: "Fees & timings",
  title: "Clear fees, clear batch timings.",
  description:
    "Parents shouldn't have to call to find out. Real figures replace the brackets before launch.",
  cta: { label: "Ask about a batch", href: "#enquiry" },
  columns: ["Programme", "Timings", "Fees"] as const,
  items: [
    {
      programme: "Foundation Programme",
      level: "Class 8 – 10",
      timing: "[Batch timing]",
      fee: "₹ [Amount]",
    },
    {
      programme: "Board Excellence",
      level: "Class 11 – 12",
      timing: "[Batch timing]",
      fee: "₹ [Amount]",
    },
    {
      programme: "JEE Main & Advanced",
      level: "Class 11 – 12 & Droppers",
      timing: "[Batch timing]",
      fee: "₹ [Amount]",
    },
    {
      programme: "NEET Preparation",
      level: "Class 11 – 12 & Droppers",
      timing: "[Batch timing]",
      fee: "₹ [Amount]",
    },
  ],
};

export type FeesConfig = typeof feesConfig;
