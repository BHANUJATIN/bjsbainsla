"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarDays, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/",            label: "Home" },
  { href: "/about",       label: "About" },
  { href: "/engineering", label: "Engineering" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "#contact",     label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname   = usePathname();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* ─── Main bar ─── */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          height: 64,
          borderBottom: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        <div
          className="container-xl"
          style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 32, height: 32, borderRadius: 9, flexShrink: 0,
              background: "linear-gradient(135deg, #6EE7B7 0%, #60A5FA 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "#0E0E10", fontSize: 11, fontWeight: 800, letterSpacing: "-0.02em" }}>BS</span>
            </div>
            <span style={{ color: "var(--text-primary)", fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" }}>
              Bhanu Singh
            </span>
          </Link>

          {/* Desktop nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="nav-desktop">
            {navLinks.map((link) => {
              const isActive = link.href !== "#contact" && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "#contact" ? scrollToContact : undefined}
                  style={{
                    position: "relative", padding: "7px 14px", borderRadius: 8,
                    fontSize: 14, fontWeight: 500, textDecoration: "none",
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--text-primary)"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      style={{
                        position: "absolute", inset: 0, borderRadius: 8,
                        background: "var(--bg-card)", border: "1px solid var(--border)", zIndex: -1,
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="nav-desktop">
            <a
              href="mailto:bjsbainsla@gmail.com"
              style={{ fontSize: 13, color: "var(--text-ghost)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text-secondary)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-ghost)"}
            >
              bjsbainsla@gmail.com
            </a>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              style={{
                width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                background: "var(--bg-card)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Toggle theme"
            >
              {isDark
                ? <Sun  size={14} style={{ color: "var(--text-muted)" }} />
                : <Moon size={14} style={{ color: "var(--text-muted)" }} />
              }
            </motion.button>

            {/* Book a Call */}
            <motion.a
              href="https://calendly.com/bjsbainsla"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(110,231,183,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "8px 18px", background: "#6EE7B7", color: "#0A0A0B",
                fontSize: 13, fontWeight: 700, borderRadius: 9, textDecoration: "none",
                letterSpacing: "-0.01em", boxShadow: "0 0 0 1px rgba(110,231,183,0.3)",
              }}
            >
              <CalendarDays size={14} strokeWidth={2.5} />
              Book a Call
            </motion.a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="nav-mobile-btn">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 34, height: 34, borderRadius: 9,
                background: "var(--bg-card)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Toggle theme"
            >
              {isDark
                ? <Sun  size={14} style={{ color: "var(--text-muted)" }} />
                : <Moon size={14} style={{ color: "var(--text-muted)" }} />
              }
            </motion.button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer",
                color: "var(--text-muted)", padding: 4 }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed", top: 64, left: 0, right: 0, zIndex: 49,
              background: "var(--nav-bg)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)", padding: "16px 24px 20px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 16 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "#contact" ? scrollToContact : () => setMobileOpen(false)}
                  style={{ padding: "11px 14px", borderRadius: 8, fontSize: 14,
                    color: "var(--text-secondary)", textDecoration: "none",
                    background: pathname === link.href ? "var(--bg-card)" : "transparent",
                    border: pathname === link.href ? "1px solid var(--border)" : "1px solid transparent" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:bjsbainsla@gmail.com"
                style={{ fontSize: 13, color: "var(--text-ghost)", textDecoration: "none", padding: "4px 14px" }}>
                bjsbainsla@gmail.com
              </a>
              <a href="https://calendly.com/bjsbainsla" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "13px 18px", background: "#6EE7B7", color: "#0A0A0B",
                  borderRadius: 9, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
                <CalendarDays size={15} strokeWidth={2.5} />
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive visibility */}
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
