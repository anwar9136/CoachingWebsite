/**
 * Results & achievements. Only publish VERIFIED results.
 * Set `items: []` (or disable in sectionsConfig) if the client has none.
 */
export const resultsConfig = {
  eyebrow: "Results",
  title: "Progress we're proud of",
  isSample: false,
  items: [] as { value: string; label: string; note?: string }[],
};
