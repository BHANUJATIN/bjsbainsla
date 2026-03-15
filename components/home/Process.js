"use client";

import { motion } from "framer-motion";
import { Radar, Database, Cpu, Send } from "lucide-react";

const steps = [
  {
    num: "01", icon: Radar, accent: "#6EE7B7",
    title: "Signal Discovery",
    desc: "Identify buying intent signals - job postings, hiring patterns, company growth, and tech stack changes.",
  },
  {
    num: "02", icon: Database, accent: "#60A5FA",
    title: "Data Infrastructure",
    desc: "Build enrichment pipelines combining APIs, scraping, and Clay workflows to build actionable lead profiles.",
  },
  {
    num: "03", icon: Cpu, accent: "#A78BFA",
    title: "Automation Layer",
    desc: "Integrate Make, n8n, or custom code to run operations at scale - no manual work after setup.",
  },
  {
    num: "04", icon: Send, accent: "#FBBF24",
    title: "Outbound Delivery",
    desc: "Push qualified leads directly into Smartlead, HeyReach, or your CRM for targeted personalised campaigns.",
  },
];

export default function Process() {
  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ marginBottom: 64, display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
            How I Build GTM Systems
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 260,
            lineHeight: 1.65 }}>
            A repeatable 4-step system applied across every engagement.
          </p>
        </motion.div>

        {/* Steps - desktop horizontal, mobile vertical */}
        <div style={{ position: "relative" }}>

          {/* Connector line (desktop only) */}
          <div className="process-line" style={{
            position: "absolute", top: 9, left: "calc(12.5% - 4px)", right: "calc(12.5% - 4px)",
            height: 1, background: "var(--border)", zIndex: 0,
          }} />

          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32,
            position: "relative", zIndex: 1 }}>
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {/* Dot - sits on connector line */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      background: "var(--bg-page)",
                      border: `1px solid ${s.accent}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.accent }} />
                    </div>
                    <span style={{ fontSize: 10.5, fontFamily: "monospace",
                      color: "var(--text-ghost)", letterSpacing: "0.06em" }}>
                      {s.num}
                    </span>
                  </div>

                  {/* Icon */}
                  <div style={{ width: 38, height: 38, borderRadius: 10, display: "flex",
                    alignItems: "center", justifyContent: "center", marginBottom: 18,
                    background: `${s.accent}10`, border: `1px solid ${s.accent}20` }}>
                    <Icon size={16} style={{ color: s.accent }} />
                  </div>

                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)",
                    marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
