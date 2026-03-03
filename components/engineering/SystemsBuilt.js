"use client";

import { motion } from "framer-motion";
import { FileText, BarChart2, Link2, Activity } from "lucide-react";

const systems = [
  {
    icon: FileText, accent: "#6EE7B7", tech: ["Node.js", "Custom API"],
    title: "Candidate CV Generator",
    highlight: "80% less prep time",
    desc: "Custom Node.js application that generates structured, professionally formatted CVs from raw candidate data pulled from recruitment databases.",
  },
  {
    icon: BarChart2, accent: "#60A5FA", tech: ["Python", "PostgreSQL"],
    title: "Outbound Data Analysis Engine",
    highlight: "Data-driven targeting",
    desc: "Custom scripts analyzing historical outbound campaign data to identify patterns, optimise targeting strategies, and improve response rates.",
  },
  {
    icon: Link2, accent: "#6EE7B7", tech: ["Clay", "n8n", "LinkedIn API"],
    title: "Warm Connection Identifier",
    highlight: "Higher reply rates",
    desc: "Automation that maps shared LinkedIn relationships between prospects and internal team members to identify warm introduction paths before outreach.",
  },
  {
    icon: Activity, accent: "#60A5FA", tech: ["Apify", "Make", "Clay"],
    title: "Engagement Detection System",
    highlight: "Real-time signal detection",
    desc: "Scrapers and automations that detect company activity signals across LinkedIn - profile updates, job postings, funding announcements.",
  },
];

export default function SystemsBuilt() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            Built in Production
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em", marginBottom: 12 }}>
            Systems I've Built
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 480, lineHeight: 1.7 }}>
            Real systems deployed for real clients - combining GTM tools with custom engineering.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {systems.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, borderColor: `${s.accent}30` }}
                style={{ padding: 28, borderRadius: 16, border: "1px solid var(--border)",
                  background: "var(--bg-card)", position: "relative", overflow: "hidden",
                  cursor: "default", transition: "border-color 0.3s, transform 0.3s" }}
              >
                <div style={{ position:"absolute", inset:0, pointerEvents:"none",
                  background:`radial-gradient(circle at 10% 10%, ${s.accent}06 0%, transparent 60%)` }} />

                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    background: `${s.accent}12`, border: `1px solid ${s.accent}22` }}>
                    <Icon size={17} style={{ color: s.accent }} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6,
                    color: s.accent, background: `${s.accent}10`, whiteSpace:"nowrap" }}>
                    {s.highlight}
                  </span>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {s.tech.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 5,
                      border: "1px solid var(--border)", background: "var(--bg-card-hover)", color: "var(--text-secondary)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
