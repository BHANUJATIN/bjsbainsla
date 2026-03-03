"use client";

import { motion } from "framer-motion";
import { Radar, Database, Cpu, Send } from "lucide-react";

const steps = [
  {
    num: "01", icon: Radar, accent: "#6EE7B7",
    title: "Signal Discovery",
    desc: "Identify data signals that indicate buying intent - job postings, hiring signals, and company growth patterns.",
  },
  {
    num: "02", icon: Database, accent: "#60A5FA",
    title: "Data Infrastructure",
    desc: "Build enrichment pipelines combining APIs, scraping, and Clay workflows to gather actionable intelligence.",
  },
  {
    num: "03", icon: Cpu, accent: "#A78BFA",
    title: "Automation Layer",
    desc: "Integrate Make, n8n, or custom code to scale operations beyond manual capacity.",
  },
  {
    num: "04", icon: Send, accent: "#FBBF24",
    title: "Outbound Delivery",
    desc: "Deliver leads to outreach tools like Smartlead or internal CRMs for targeted, personalised campaigns.",
  },
];

export default function Process() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div className="container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            Methodology
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
            How I Approach GTM Systems
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Step number */}
                <p style={{ fontSize: 11, fontFamily: "monospace", color: "var(--text-ghost)", marginBottom: 16 }}>
                  {s.num}
                </p>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ width: 48, height: 48, borderRadius: 14, display: "flex",
                    alignItems: "center", justifyContent: "center", marginBottom: 20,
                    background: `${s.accent}10`, border: `1px solid ${s.accent}28` }}
                >
                  <Icon size={20} style={{ color: s.accent }} />
                </motion.div>

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
