import { siteConfig } from "@/config/siteConfig";
import { Icon, Reveal } from "../primitives";

export function Trust() {
  return (
    <section aria-label="Learning approach" className="trust-strip">
      <div className="container-page grid md:grid-cols-3">
        {siteConfig.trust.map((t, i) => (
          <Reveal key={t.label} delay={i * 60} className="trust-item flex gap-4">
            <span className="trust-icon">
              <Icon name={t.icon} className="h-5 w-5" />
            </span>
            <div className="max-w-xs">
              <p className="text-sm font-bold text-foreground">{t.label}</p>
              {t.text && (
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.text}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
