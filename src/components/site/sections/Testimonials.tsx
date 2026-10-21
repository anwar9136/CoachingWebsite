import { Quote } from "lucide-react";
import { testimonialConfig } from "@/config/testimonialConfig";
import { Reveal, SectionHeading } from "../primitives";

export function Testimonials() {
  return (
    <section className="section-y container-page">
      <SectionHeading eyebrow={testimonialConfig.eyebrow} title={testimonialConfig.title} />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonialConfig.items.map((t, i) => (
          <Reveal key={i} delay={i * 80}>
            <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
              <Quote className="h-8 w-8 text-accent" aria-hidden />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="font-bold">{t.name}</p>
                {t.role && <p className="text-sm text-muted-foreground">{t.role}</p>}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
