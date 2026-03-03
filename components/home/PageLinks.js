"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Briefcase, ArrowRight } from "lucide-react";

const pages = [
  {
    href: "/engineering",
    icon: Code2,
    accent: "#60A5FA",
    label: "Engineering",
    title: "The Tech Behind the Systems",
    desc: "Custom APIs, automation pipelines, and full-stack tooling that makes GTM scalable — not just possible.",
    tags: ["Stack", "Systems Built", "Why It Matters"],
  },
  {
    href: "/recruitment",
    icon: Briefcase,
    accent: "#6EE7B7",
    label: "Recruitment Automation",
    title: "Find Hiring Companies First",
    desc: "Automated job discovery and lead delivery — so your team calls before competitors even find the opening.",
    tags: ["Pipeline", "Job Discovery", "ROI"],
  },
];

export default function PageLinks() {
  return (
    <section style={{ padding: "72px 0", borderTop: "1px solid #2A2A2E" }}>
      <div className="container-xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 11, fontWeight: 600, color: "#52525B",
            textTransform: "uppercase", letterSpacing: "0.14em",
            textAlign: "center", marginBottom: 28,
          }}
        >
          Explore
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {pages.map((page, i) => {
            const Icon = page.icon;
            return (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
              >
                <Link href={page.href} style={{ textDecoration: "none", display: "block" }}>
                  <motion.div
                    whileHover={{ y: -3, borderColor: `${page.accent}40` }}
                    style={{
                      padding: "26px 26px 22px",
                      borderRadius: 14, border: "1px solid #2A2A2E",
                      background: "#18181B",
                      transition: "border-color 0.25s",
                      cursor: "pointer",
                    }}
                  >
                    {/* Top row: badge + arrow */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <div style={{
                          width: 30, height: 30, borderRadius: 8,
                          background: `${page.accent}15`, border: `1px solid ${page.accent}30`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Icon size={13} style={{ color: page.accent }} />
                        </div>
                        <span style={{
                          fontSize: 10, fontWeight: 700, color: page.accent,
                          textTransform: "uppercase", letterSpacing: "0.1em",
                        }}>
                          {page.label}
                        </span>
                      </div>
                      <ArrowRight size={13} style={{ color: "#52525B", flexShrink: 0 }} />
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: 15, fontWeight: 600, color: "#E4E4E7",
                      letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.35,
                    }}>
                      {page.title}
                    </h3>

                    {/* Description */}
                    <p style={{ fontSize: 13, color: "#71717A", lineHeight: 1.65, marginBottom: 18 }}>
                      {page.desc}
                    </p>

                    {/* Tag pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {page.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: 10, color: "#52525B", padding: "3px 8px",
                          borderRadius: 100, border: "1px solid #2A2A2E",
                          letterSpacing: "0.04em",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
