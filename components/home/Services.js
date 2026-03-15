"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Outbound Infrastructure",
    description: "End-to-end outbound pipelines - list building, enrichment, personalization, and campaign delivery at scale.",
    tag: "Core Service",
  },
  {
    num: "02",
    title: "Job Discovery Systems",
    description: "Automated pipelines that surface job openings globally across LinkedIn, Indeed, Xing and 12+ other sources.",
    tag: "Recruitment",
  },
  {
    num: "03",
    title: "Lead Intelligence",
    description: "Automations that detect company activity, hiring signals, and engagement patterns before you reach out.",
    tag: "Intelligence",
  },
  {
    num: "04",
    title: "Warm Network Mapping",
    description: "Systems that identify mutual connections and relationship paths to increase reply rates before cold outreach.",
    tag: "Strategy",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 0" }}>
      <div className="container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16, marginBottom: 40 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
            GTM Systems I Build
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 260, lineHeight: 1.65 }}>
            Four core system types. Each delivered end-to-end.
          </p>
        </motion.div>

        {/* Rows */}
        <div>
          {services.map((s, i) => (
            <div key={s.title}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="services-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "88px 1fr auto",
                  alignItems: "center",
                  gap: 28,
                  padding: "28px 0",
                  cursor: "default",
                }}
              >
                {/* Number */}
                <span style={{
                  fontSize: "clamp(2.8rem, 4vw, 4rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.06em",
                  lineHeight: 1,
                  userSelect: "none",
                }}>
                  {s.num}
                </span>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.2,
                    marginBottom: 10,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 520 }}>
                    {s.description}
                  </p>
                </div>

                {/* Tag */}
                <span className="services-tag" style={{
                  fontSize: 10.5, color: "var(--text-ghost)", textTransform: "uppercase",
                  letterSpacing: "0.08em", fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0,
                }}>
                  {s.tag}
                </span>
              </motion.div>

              {/* Document-style separator - inset on both sides */}
              {i < services.length - 1 && (
                <div style={{
                  height: 1,
                  background: "var(--border)",
                  margin: "0 8px",
                }} />
              )}
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .services-row {
            grid-template-columns: 64px 1fr !important;
            gap: 16px !important;
          }
          .services-tag { display: none !important; }
        }
      `}</style>
    </section>
  );
}
