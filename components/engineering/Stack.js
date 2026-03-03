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
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 52 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            Technical Arsenal
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Full Stack + GTM Stack
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {stackGroups.map((g, i) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ borderColor: "rgba(110,231,183,0.25)" }}
              style={{ padding: 24, borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)",
                transition: "border-color 0.3s" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: g.accent, flexShrink: 0 }} />
                <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                  letterSpacing: "0.1em", color: g.accent }}>
                  {g.category}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.items.map(item => (
                  <span key={item}
                    style={{ padding: "6px 12px", fontSize: 12.5, fontWeight: 500, borderRadius: 8,
                      border: "1px solid var(--border)", background: "var(--bg-card-hover)", color: "var(--text-secondary)",
                      cursor: "default", transition: "all 0.2s" }}>
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
