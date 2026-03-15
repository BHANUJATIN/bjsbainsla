"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useTheme } from "@/components/ThemeProvider";

const tools = [
  { name: "Clay",      src: "/svgs/clay.png" },
  { name: "Make",      src: "/svgs/make.png" },
  { name: "n8n",       src: "/svgs/n8n.png" },
  { name: "Airtable",  src: "/svgs/airtable.png" },
  { name: "Zapier",    src: "/svgs/zapier.png" },
  { name: "Instantly", src: "/svgs/Instantly.png" },
  { name: "HeyReach",  src: "/svgs/heyreach.png" },
  { name: "Apollo",    src: "/svgs/apollo.png" },
  { name: "LinkedIn",  src: "/svgs/linkedin.png" },
  { name: "Apify",     src: "/svgs/apify.png" },
];

const clients = [
  { label: "Recruitment Agencies",     accent: "#6EE7B7" },
  { label: "Fintech Firms",            accent: "#60A5FA" },
  { label: "Medical & Healthcare",     accent: "#F472B6" },
  { label: "Non-Profit Organizations", accent: "#34D399" },
  { label: "Manufacturing",            accent: "#FBBF24" },
  { label: "Law & Legal",              accent: "#A78BFA" },
  { label: "E-commerce",               accent: "#FB923C" },
];

export default function SocialProof() {
  const { isDark } = useTheme();
  const gradientBg = isDark ? "#0E0E10" : "#F5F5F7";

  return (
    <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "64px 0" }}>
      <div className="container-xl">

        {/* ─── Industries ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ marginBottom: 52 }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-ghost)",
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
            Industries
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 0" }}>
            {clients.map((c, i) => (
              <motion.span
                key={c.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="industry-item"
                style={{
                  fontWeight: 600,
                  fontSize: "clamp(1rem, 2vw, 1.3rem)",
                  color: "var(--text-muted)",
                  cursor: "default",
                  transition: "color 0.2s",
                  lineHeight: 1.35,
                  "--hover-color": c.accent,
                }}
              >
                {c.label}
                {i < clients.length - 1 && (
                  <span style={{ color: "var(--border)", fontFamily: "var(--font-inter)", fontWeight: 300,
                    fontSize: "1rem", margin: "0 14px", verticalAlign: "middle" }}>
                    /
                  </span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ─── Tools marquee ─── */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-ghost)",
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24 }}>
            Tools I Work With
          </p>

          <Marquee
            speed={40}
            gradient
            gradientColor={gradientBg}
            gradientWidth={80}
            pauseOnHover
          >
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="tool-logo"
                style={{ padding: "0 36px", display: "flex", alignItems: "center" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.src}
                  alt={tool.name}
                  style={{
                    height: 28,
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                    filter: isDark ? "none" : "grayscale(1)",
                    opacity: isDark ? 0.85 : 0.45,
                    transition: "opacity 0.25s, filter 0.25s",
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>

      </div>

      <style>{`
        .tool-logo:hover img { opacity: 1 !important; filter: grayscale(0) !important; }
        .industry-item:hover { color: var(--hover-color) !important; }
      `}</style>
    </section>
  );
}
