import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Icon helper ──────────────────────────────────────────────────────── */
export function Icon({ name, className }: { name?: string; className?: string }) {
  const Cmp = (name && (Icons as unknown as Record<string, LucideIcon>)[name]) || Icons.Sparkles;
  return <Cmp className={className} aria-hidden />;
}

/* ── Scroll-reveal wrapper ───────────────────────────────────────────── */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    io.observe(el);
    document.documentElement.classList.add("motion-ready");
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Section heading with eyebrow ────────────────────────────────────── */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "default",
  titleClassName,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** "default" = dark text, "inverse" = white text (dark sections) */
  tone?: "default" | "inverse";
  titleClassName?: string;
}) {
  const inv = tone === "inverse";
  return (
    <Reveal>
      {eyebrow && <p className={cn("eyebrow", inv && "why-eyebrow")}>{eyebrow}</p>}
      {title && (
        <h2 className={cn("section-heading-h2", inv && "!text-white", titleClassName)}>{title}</h2>
      )}
      {description && (
        <p
          className={cn(
            "mt-4 text-[17px] leading-relaxed",
            inv ? "text-[#A3A9B6]" : "text-[#5B616E]",
          )}
          style={{ maxWidth: "48ch" }}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* ── FAQ Accordion item ───────────────────────────────────────────────── */
export function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="faq-item" data-open={String(open)}>
      <button className="faq-trigger" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon-tile" aria-hidden="true">
          {open ? <Icons.X size={15} strokeWidth={2} /> : <Icons.Plus size={15} strokeWidth={2} />}
        </span>
      </button>
      <div className="faq-body" aria-hidden={!open}>
        <div className="faq-body-inner">
          <p className="faq-answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Legacy cva export (kept for any remaining usages) ───────────────── */
export function cta({
  variant = "primary",
  size = "md",
}: {
  variant?: "primary" | "outline" | "ghostLight" | "accent";
  size?: "sm" | "md" | "lg";
} = {}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";
  const variants = {
    primary: "btn-primary",
    accent: "btn-primary",
    outline: "btn-ghost",
    ghostLight: "btn-light",
  };
  const sizes = {
    sm: "btn-primary-sm",
    md: "",
    lg: "btn-primary-lg",
  };
  return cn(base, variants[variant], sizes[size]);
}

/* ── Sample badge (kept for compatibility) ───────────────────────────── */
export function SampleBadge() {
  return null; // hidden in redesign — no "(sample)" labels shown
}
