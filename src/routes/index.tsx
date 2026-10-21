import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/siteConfig";
import { isSectionVisible } from "@/utils/sections";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Hero } from "@/components/site/sections/Hero";
import { Trust } from "@/components/site/sections/Trust";
import { Courses } from "@/components/site/sections/Courses";
import { About } from "@/components/site/sections/About";
import { WhyChooseUs } from "@/components/site/sections/WhyChooseUs";
import { Faculty } from "@/components/site/sections/Faculty";
import { Results } from "@/components/site/sections/Results";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { Fees } from "@/components/site/sections/Fees";
import { Faq } from "@/components/site/sections/Faq";
import { VisitMap } from "@/components/site/sections/VisitMap";
import { Enquiry } from "@/components/site/sections/Enquiry";
import { Contact } from "@/components/site/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.seo.title },
      { name: "description", content: siteConfig.seo.description },
      { property: "og:title", content: siteConfig.seo.title },
      { property: "og:description", content: siteConfig.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/** Section order — reorder here; visibility comes from sectionsConfig. */
const sections = [
  ["trust", Trust],
  ["courses", Courses],
  ["about", About],
  ["whyChooseUs", WhyChooseUs],
  ["results", Results],
  ["faculty", Faculty],
  ["fees", Fees],
  ["testimonials", Testimonials],
  ["faq", Faq],
  ["visit", VisitMap],
  ["enquiry", Enquiry],
  ["contact", Contact],
] as const;

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {sections.map(([key, Section]) => (isSectionVisible(key) ? <Section key={key} /> : null))}
      </main>
      <Footer />
      {isSectionVisible("whatsappButton") && <WhatsAppButton />}
    </>
  );
}
