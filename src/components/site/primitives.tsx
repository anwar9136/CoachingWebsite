import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { animate } from "framer-motion";
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
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    let stopAnimation: (() => void) | undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          const smallScreen = window.matchMedia("(max-width: 479px)").matches;
          const keyframes = smallScreen
            ? { opacity: [0, 1], y: [24, 0] }
            : { opacity: [0, 1], y: [46, 0], scale: [0.97, 1] };
          const controls = animate(el, keyframes, {
            duration: 0.8,
            delay: delay / 1000,
            ease: [0.2, 0.7, 0.2, 1],
          });
          stopAnimation = () => controls.stop();
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    document.documentElement.classList.add("motion-ready");
    return () => {
      io.disconnect();
      stopAnimation?.();
    };
  }, [delay]);
  return (
    <Tag ref={ref} className={cn("reveal", className)} {...rest}>
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
