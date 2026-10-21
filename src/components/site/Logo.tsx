import { siteConfig } from "@/config/siteConfig";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: inverse ? "var(--saffron)" : "var(--navy)",
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            color: inverse ? "var(--navy)" : "var(--saffron)",
            fontWeight: 700,
            fontSize: "19px",
            lineHeight: 1,
            fontFamily: "var(--font-sans)",
          }}
        >
          A
        </span>
      </span>
      <span
        style={{
          fontSize: "18px",
          fontWeight: 600,
          color: inverse ? "var(--on-dark-headings)" : "var(--navy)",
          letterSpacing: "-0.02em",
        }}
      >
        {siteConfig.name}
      </span>
    </span>
  );
}
