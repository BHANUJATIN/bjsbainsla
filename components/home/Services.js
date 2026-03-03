"use client";

import { motion } from "framer-motion";
import { Network, Search, Brain, Users } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Outbound Infrastructure",
    description: "End-to-end outbound pipelines including list building, enrichment, personalization, and campaign delivery.",
    accent: "#6EE7B7",
    tag: "Core Service",
  },
  {
    icon: Search,
    title: "Job Discovery Systems",
    description: "Automated pipelines that identify job openings globally across LinkedIn, Indeed, Xing and others.",
    accent: "#60A5FA",
    tag: "Recruitment",
  },
  {
    icon: Brain,
    title: "Lead Intelligence",
    description: "Automations to detect company activity, hiring signals, and engagement patterns across platforms.",
    accent: "#A78BFA",
    tag: "Intelligence",
  },
  {
    icon: Users,
    title: "Warm Network Mapping",
    description: "Systems that identify mutual connections and relationship paths before outreach to increase reply rates.",
    accent: "#FBBF24",
    tag: "Strategy",
  },
];

const cardStyle = (accent) => ({
  padding: 28,
  borderRadius: 16,
  border: `1px solid var(--border)`,
  background: "var(--bg-card)",
  cursor: "default",
  position: "relative",
  overflow: "hidden",
});

export default function Services() {
  return (
    <section id="services" style={{ padding: "96px 0" }}>
      <div className="container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            What I Build
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
            GTM Systems I Build
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.01, borderColor: `${s.accent}35` }}
                style={cardStyle(s.accent)}
              >
                {/* Hover bg */}
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
                  background: `radial-gradient(circle at 20% 20%, ${s.accent}07 0%, transparent 60%)` }} />

                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    background: `${s.accent}15`, border: `1px solid ${s.accent}25` }}>
                    <Icon size={17} style={{ color: s.accent }} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6,
                    color: s.accent, background: `${s.accent}12` }}>
                    {s.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
