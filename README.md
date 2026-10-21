# Coaching Institute Website Template — by Climbr Studio

Demo branding: **Apex Academy** (fictional). Every client-specific detail lives in `src/config/`.
UI components in `src/components/site/` never contain client text — a new client needs only new config + assets.

```
src/
  config/         ← EDIT THESE for each client
    siteConfig.ts        name, logo, hero, about, contact, social, SEO, footer, trust indicators
    themeConfig.ts       colours, fonts, radius, button style
    navigationConfig.ts  menu links + enquiry button
    sectionsConfig.ts    turn sections on/off
    courseConfig.ts      courses
    featuresConfig.ts    "Why choose us"
    facultyConfig.ts     faculty
    resultsConfig.ts     results & achievements
    testimonialConfig.ts testimonials
    faqConfig.ts         FAQs
    formConfig.ts        enquiry form integration
  assets/         ← client images (hero, about, faculty photos)
  components/site ← reusable UI (do not edit per client)
  utils/          ← phone validation, WhatsApp links, section visibility
```

## 1. Institute name, logo, favicon
- `siteConfig.ts` → `name`, `shortName`, `tagline`.
- Logo: put the file in `src/assets/`, `import logo from "@/assets/logo.png"` and set `logo: logo`. Leave `""` to show a letter monogram.
- Favicon: replace `public/favicon.ico` (or set `seo.favicon` to another file in `public/`).
- SEO: `seo.title`, `seo.description`.

## 2. Colours and fonts
`themeConfig.ts` → `colors` (any CSS colour: oklch, hex, rgb). `primary` = main brand, `primaryDeep` = dark bands/footer, `accent` = highlight colour.
Fonts: change `fonts.heading`, `fonts.body` and `fonts.googleFontsUrl` (copy the URL from fonts.google.com). `radius` and `buttonStyle` ("pill" | "rounded") control shapes.

## 3. Images
Replace `src/assets/hero.jpg`, `about.jpg`, `faculty-*.jpg` with files of the same name, or import new files in the config. Recommended: hero 1600×1000, about 1200×1400, faculty 800×960 (JPG, under 300 KB).

## 4. Courses
`courseConfig.ts` → `items`. Add an object to add a course, delete it to remove, move it to reorder. `featured: true` highlights one card. Optional fields (`level`, `subjects`, `duration`, `cta`) are hidden when missing. The enquiry form's course dropdown updates automatically.

## 5. Faculty, FAQs, testimonials, results
Edit the `items` arrays in the matching config file. Faculty `photo` is optional (initials shown otherwise).
**Only publish genuine data.** Set `isSample: false` once content is real (removes the "Demo content" badge), and `siteConfig.isDemo: false` to remove the footer notice. Empty arrays hide the section.

## 6. Phone, address, WhatsApp, map
`siteConfig.ts` → `contact`. `whatsapp` must be digits with country code (e.g. `919876543210`). `mapUrl` = any Google Maps share link. `hours` is a list.

## 7. Enable / disable sections
`sectionsConfig.ts` → set `false`. Menu links to hidden sections disappear automatically. Section order is set in `src/routes/index.tsx` (`sections` array).

## Enquiry form
`formConfig.ts` → `provider`:
- `"whatsapp"` — opens WhatsApp with the enquiry pre-filled (default, no backend).
- `"endpoint"` — POSTs JSON `{name, phone, studentClass, course, message}` to `endpoint` (e.g. Formspree).
- `"none"` — shows an honest "not connected, please call" message.
The form never claims success unless a request actually succeeded.

## 8. Build & deploy for a new client
1. Duplicate the project. 2. Edit everything in `src/config/` and replace `src/assets/` + favicon. 3. Set `isDemo`/`isSample` flags. 4. Run `bun install && bun run build`. 5. Publish (Lovable → Publish) and connect the client's domain.
