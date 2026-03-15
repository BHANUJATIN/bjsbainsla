"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/",            label: "Home" },
  { href: "/about",       label: "About" },
  { href: "/engineering", label: "Engineering" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "#contact",     label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const pathname   = usePathname();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset contact active state when navigating to a different page
  useEffect(() => {
    setContactActive(false);
  }, [pathname]);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setContactActive(true);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          height: 60,
          borderBottom: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <div
          className="container-xl"
          style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* ── Logo ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            onClick={() => setContactActive(false)}>
            <span style={{
              color: "var(--text-primary)", fontSize: 14, fontWeight: 600,
              letterSpacing: "-0.03em", lineHeight: 1,
            }}>
              Bhanu Singh
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }} className="nav-desktop">
            {navLinks.map((link) => {
              const isActive = link.href === "#contact"
                ? contactActive
                : (pathname === link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "#contact" ? scrollToContact : () => setContactActive(false)}
                  style={{
                    position: "relative", padding: "6px 14px",
                    fontSize: 13, fontWeight: 400, textDecoration: "none",
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    transition: "color 0.2s",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--text-primary)"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: "absolute", bottom: 0, left: 14, right: 14,
                        height: 1, background: "var(--text-primary)", borderRadius: 1,
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Right side ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="nav-desktop">
            <a
              href="mailto:bjsbainsla@gmail.com"
              style={{ fontSize: 12, color: "var(--text-secondary)", textDecoration: "none",
                letterSpacing: "-0.01em", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
            >
              bjsbainsla@gmail.com
            </a>

            <button
              onClick={toggleTheme}
              style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: "transparent", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              aria-label="Toggle theme"
            >
              {isDark
                ? <Sun  size={13} style={{ color: "var(--text-muted)" }} />
                : <Moon size={13} style={{ color: "var(--text-muted)" }} />
              }
            </button>

            <a
              href="https://calendly.com/bjsbainsla"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "7px 16px",
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text-primary)",
                fontSize: 13, fontWeight: 500, borderRadius: 8, textDecoration: "none",
                letterSpacing: "-0.01em", transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              Book a Call
            </a>
          </div>

          {/* ── Mobile: theme + hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="nav-mobile-btn">
            <button
              onClick={toggleTheme}
              style={{
                width: 32, height: 32, borderRadius: 8,
                background: "transparent", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Toggle theme"
            >
              {isDark
                ? <Sun  size={13} style={{ color: "var(--text-muted)" }} />
                : <Moon size={13} style={{ color: "var(--text-muted)" }} />
              }
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer",
                color: "var(--text-muted)", padding: 4 }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "fixed", top: 60, left: 0, right: 0, zIndex: 49,
              background: "var(--nav-bg)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)", padding: "12px 24px 20px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 16 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "#contact" ? scrollToContact : () => setMobileOpen(false)}
                  style={{ padding: "10px 12px", borderRadius: 7, fontSize: 14,
                    color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)",
                    textDecoration: "none", letterSpacing: "-0.01em",
                    fontWeight: pathname === link.href ? 500 : 400,
                    background: pathname === link.href ? "var(--bg-card)" : "transparent",
                    border: pathname === link.href ? "1px solid var(--border)" : "1px solid transparent" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="mailto:bjsbainsla@gmail.com"
                style={{ fontSize: 12, color: "var(--text-ghost)", textDecoration: "none", padding: "4px 12px",
                  letterSpacing: "-0.01em" }}>
                bjsbainsla@gmail.com
              </a>
              <a href="https://calendly.com/bjsbainsla" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "12px 18px", border: "1px solid var(--border)", color: "var(--text-primary)",
                  borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: "none",
                  letterSpacing: "-0.01em" }}>
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop    { display: flex !important; }
        .nav-mobile-btn { display: none !important; }
        @media (max-width: 700px) {
          .nav-desktop    { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
