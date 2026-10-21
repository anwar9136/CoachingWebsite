/**
 * themeConfig — Apex Academy tokens per design specification.
 */
export const themeConfig = {
  colors: {
    navy: "#101827",
    ivory: "#F7F5EF",
    white: "#FFFFFF",
    cream: "#FBFAF6",
    line: "#E5E0D2",
    chip: "#F2EFE5",
    slot: "#E9E4D4",
    slotBorder: "#B9B39C",

    // Saffron accent
    saffron: "#E7A044",
    saffronHover: "#EDAE5C",
    saffronLight: "#F3C987",
    saffronTint: "#FBEBD0",

    // Text colors
    textMuted: "#4B5563",
    textSoft: "#6B7280",

    // On-dark text
    onDarkHeadings: "#F7F5EF",
    onDarkParagraphs: "#C9CEDA",
    onDarkCards: "#B8C0D0",
    onDarkFooterLinks: "#A9B0BF",
    onDarkFooterMuted: "#8A93A6",

    // Dark backgrounds
    footerBg: "#0A1020",
    whatsapp: "#25D366",

    // Borders
    ghostBorder: "#D9D5C8",
    inputBorder: "#CFCABB",
    examBorder: "#DDD8C9",
    examDot: "#C7C1AE",
    examText: "#3B4353",

    // Semantic aliases for Tailwind/backwards compat
    primary: "#101827",
    primaryForeground: "#FFFFFF",
    background: "#F7F5EF",
    foreground: "#101827",
    border: "#E5E0D2",
    destructive: "#DC2626",
    accent: "#E7A044",
    accentForeground: "#101827",
  },
  fonts: {
    sans: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    devanagari: "'Noto Sans Devanagari', -apple-system, BlinkMacSystemFont, sans-serif",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@500;600&display=swap",
  },
  radius: {
    hero: "32px",
    about: "28px",
    card: "24px",
    mission: "20px",
    chip: "18px",
    tile: "12px",
    input: "12px",
    pill: "999px",
  },
};

/** Converts the theme tokens to CSS variables consumed by src/styles.css */
export function themeToCssVars(t = themeConfig): string {
  const c = t.colors;
  const r = t.radius;
  const vars: Record<string, string> = {
    // Colors
    "--navy": c.navy,
    "--ivory": c.ivory,
    "--white": c.white,
    "--cream": c.cream,
    "--line": c.line,
    "--chip": c.chip,
    "--slot": c.slot,
    "--slot-border": c.slotBorder,

    "--saffron": c.saffron,
    "--saffron-hover": c.saffronHover,
    "--saffron-light": c.saffronLight,
    "--saffron-tint": c.saffronTint,

    "--text-muted": c.textMuted,
    "--text-soft": c.textSoft,

    "--on-dark-headings": c.onDarkHeadings,
    "--on-dark-paragraphs": c.onDarkParagraphs,
    "--on-dark-cards": c.onDarkCards,
    "--on-dark-footer-links": c.onDarkFooterLinks,
    "--on-dark-footer-muted": c.onDarkFooterMuted,

    "--footer-bg": c.footerBg,
    "--whatsapp": c.whatsapp,
    "--ghost-border": c.ghostBorder,
    "--input-border": c.inputBorder,
    "--exam-border": c.examBorder,
    "--exam-dot": c.examDot,
    "--exam-text": c.examText,

    // Radii
    "--r-hero": r.hero,
    "--r-about": r.about,
    "--r-card": r.card,
    "--r-mission": r.mission,
    "--r-chip": r.chip,
    "--r-tile": r.tile,
    "--r-input": r.input,
    "--r-pill": r.pill,

    // Shadows
    "--shadow-chip": "0 18px 36px -14px rgba(16,24,39,0.30)",
    "--shadow-hero": "0 40px 80px -30px rgba(16,24,39,0.55)",
    "--shadow-card-hover": "0 24px 48px -20px rgba(16,24,39,0.28)",
    "--shadow-contact": "0 40px 80px -32px rgba(16,24,39,0.60)",
    "--shadow-saffron-btn": "0 10px 24px -10px rgba(231,160,68,0.8)",

    // Fonts
    "--font-sans": t.fonts.sans,
    "--font-devanagari": t.fonts.devanagari,

    // Backward-compat aliases
    "--background": c.ivory,
    "--foreground": c.navy,
    "--ink": c.navy,
    "--muted": c.textMuted,
    "--soft": c.textSoft,
    "--surface": c.chip,
    "--accent": c.saffron,
    "--line-color": c.line,
  };

  return `:root{${Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(";")}}`;
}
