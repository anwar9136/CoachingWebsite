import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { navigationConfig } from "@/config/navigationConfig";
import { isSectionVisible } from "@/utils/sections";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = navigationConfig.links.filter((l) => !l.section || isSectionVisible(l.section));
  const btn = navigationConfig.enquiryButton;

  /* Close on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > 8);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const timingText = siteConfig.contact.hours?.[0]
    ? `${siteConfig.contact.hours[0].days} · ${siteConfig.contact.hours[0].time}`
    : "Mon – Sat · 8:00 AM – 8:00 PM";

  return (
    <>
      {/* ── 0. ANNOUNCEMENT BAR ── */}
      <div className="announcement-bar" role="region" aria-label="Announcement">
        <div className="container-page announcement-inner">
          <div className="announcement-left">
            <span className="announcement-dot" aria-hidden="true" />
            <span>Admissions open for 2026–27</span>
          </div>
          <div className="announcement-right">
            <span>{timingText}</span>
          </div>
        </div>
      </div>

      {/* ── 1. NAVBAR ── */}
      <header className={cn("site-header", scrolled && "site-header-scrolled", open && "nav-open")}>
        <nav className="container-page flex h-full items-center justify-between" aria-label="Main">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center shrink-0 transition-opacity hover:opacity-85"
            aria-label={`${siteConfig.name} home`}
          >
            <Logo />
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex" id="desktop-nav">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side CTA & Hamburger */}
          <div className="flex items-center gap-3">
            {btn && (
              <a
                href={btn.href}
                className="btn-saffron btn-saffron-sm hidden sm:inline-flex"
                id="nav-demo-btn"
              >
                Book free demo
              </a>
            )}
            <button
              className="nav-hamburger-btn"
              id="hamburger-btn"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X size={20} strokeWidth={2} aria-hidden />
              ) : (
                <Menu size={20} strokeWidth={2} aria-hidden />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile slide-down menu ── */}
      <div
        id="mobile-nav-panel"
        className={cn("mobile-nav-panel", open && "is-open")}
        aria-label="Mobile navigation"
      >
        <div className="container-page py-6">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {btn && (
            <a
              href={btn.href}
              onClick={() => setOpen(false)}
              className="btn-saffron w-full mt-6"
              style={{ justifyContent: "center" }}
            >
              Book free demo
            </a>
          )}
        </div>
      </div>
    </>
  );
}
