"use client";

import { motion } from "framer-motion";
import { Code2, Check } from "lucide-react";

const capabilities = [
  "Build custom scrapers for data unavailable via APIs",
  "Process and clean large datasets at scale",
  "Create custom scoring and ranking logic",
  "Build internal GTM tools and dashboards",
  "Extend Clay and Make with custom code integrations",
  "Design and deploy full automation architectures",
];

export default function WhyEngineering() {
  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid #2A2A2E", position: "relative", overflow: "hidden" }}>

      {/* Glow */}
      <div style={{ position:"absolute", top:0, right:0, width:400, height:400, pointerEvents:"none",
        background:"radial-gradient(circle, rgba(110,231,183,0.05) 0%, transparent 70%)", filter:"blur(40px)" }} />

      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
              letterSpacing: "0.12em", marginBottom: 14 }}>
              The Advantage
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
              color: "#F5F5F7", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 20 }}>
              Why Engineering
              <br />
              <span className="gradient-text">Changes Everything</span>
            </h2>
            <p style={{ fontSize: 15, color: "#A1A1AA", lineHeight: 1.75, marginBottom: 16 }}>
              Most GTM tools stop where APIs end. Most GTM operators can't go further.
            </p>
            <p style={{ fontSize: 15, color: "#A1A1AA", lineHeight: 1.75, marginBottom: 28 }}>
              With a full-stack engineering background, I extend automation platforms with custom code —
              building capabilities that pure no-code operators cannot replicate.
            </p>

            <div style={{ padding: 20, borderRadius: 14, border: "1px solid #2A2A2E", background: "#18181B" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <Code2 size={13} style={{ color: "#6EE7B7" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7",
                  textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  B.Tech, Computer Science
                </span>
              </div>
              <p style={{ fontSize: 13.5, color: "#A1A1AA", lineHeight: 1.65 }}>
                IIITM Gwalior — combined with 1.5+ years of applied GTM automation experience.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ borderColor: "rgba(110,231,183,0.3)", x: 4 }}
                style={{ display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 16px", borderRadius: 12, border: "1px solid #2A2A2E",
                  background: "#18181B", cursor: "default", transition: "all 0.2s" }}
              >
                <div style={{ width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(110,231,183,0.1)", border: "1px solid rgba(110,231,183,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check size={12} style={{ color: "#6EE7B7" }} />
                </div>
                <span style={{ fontSize: 14, color: "#A1A1AA" }}>{cap}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
