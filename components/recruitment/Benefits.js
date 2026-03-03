"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Trophy, Clock } from "lucide-react";

const benefits = [
  {
    icon: Clock, accent: "#6EE7B7",
    title: "Discover Jobs Earlier",
    desc: "Automated monitoring catches job postings within minutes of going live - before your competitors see them.",
  },
  {
    icon: Target, accent: "#60A5FA",
    title: "Targeted Outreach",
    desc: "AI-classified leads mean your team only reaches out to relevant opportunities, saving time on bad fits.",
  },
  {
    icon: Trophy, accent: "#A78BFA",
    title: "Higher Placement Rate",
    desc: "Being first to contact a hiring company dramatically increases your chance of winning the placement.",
  },
  {
    icon: TrendingUp, accent: "#FBBF24",
    title: "Zero Manual Research",
    desc: "Eliminates hours of daily manual job searching - your team focuses on calling, not searching.",
  },
];

export default function Benefits() {
  return (
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
      position: "relative", overflow: "hidden" }}>

      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 60% 50% at 50% 50%, rgba(110,231,183,0.04) 0%, transparent 70%)" }} />

      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            Business Impact
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Why Recruitment Firms Use This
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -6, scale: 1.01, borderColor: `${b.accent}30` }}
                style={{ padding: 24, borderRadius: 16, border: "1px solid var(--border)",
                  background: "var(--bg-card)", cursor: "default", transition: "all 0.3s" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{ width: 40, height: 40, borderRadius: 12, display: "flex",
                    alignItems: "center", justifyContent: "center", marginBottom: 16,
                    background: `${b.accent}12`, border: `1px solid ${b.accent}22` }}
                >
                  <Icon size={17} style={{ color: b.accent }} />
                </motion.div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
