"use client";

import { motion } from "framer-motion";

const stackGroups = [
  { category: "Languages",    accent: "#6EE7B7", items: ["Node.js", "Python", "TypeScript", "SQL", "JavaScript"] },
  { category: "GTM Tools",    accent: "#60A5FA", items: ["Clay", "Make", "n8n", "Zapier", "Airtable"] },
  { category: "Outreach",     accent: "#6EE7B7", items: ["Smartlead", "HeyReach", "Instantly", "Apollo", "LinkedIn Sales Nav"] },
  { category: "Data & Scraping", accent: "#60A5FA", items: ["Apify", "RapidAPI", "Custom APIs", "PostgreSQL", "MongoDB"] },
  { category: "Web Dev",      accent: "#6EE7B7", items: ["React", "Next.js", "Express.js", "Firebase", "Tailwind CSS"] },
  { category: "AI & Prompting", accent: "#60A5FA", items: ["GPT/OpenAI", "Prompt Engineering", "Clay AI", "Enrichment AI"] },
];

export default function Stack() {
  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ marginBottom: 56 }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase",
            letterSpacing: "0.1em", marginBottom: 12 }}>
            Technical Arsenal
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.04em" }}>
            Full Stack + GTM Stack
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {stackGroups.map((g, i) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
              style={{ padding: "24px 22px", borderRadius: 12, border: "1px solid var(--border)",
                background: "var(--bg-card)", transition: "border-color 0.2s" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: g.accent, flexShrink: 0 }} />
                <span style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase",
                  letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  {g.category}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {g.items.map(item => (
                  <span key={item}
                    style={{ padding: "5px 11px", fontSize: 12.5, fontWeight: 400, borderRadius: 7,
                      border: "1px solid var(--border)", background: "var(--bg-card-hover)",
                      color: "var(--text-secondary)", cursor: "default", letterSpacing: "-0.01em" }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
