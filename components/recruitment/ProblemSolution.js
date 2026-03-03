"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, Check, Zap } from "lucide-react";

const manual = [
  "Check LinkedIn Jobs manually every day",
  "Search Indeed and Xing separately",
  "Visit company career pages individually",
  "Track results in scattered spreadsheets",
  "Miss time-sensitive job postings",
  "Inconsistent coverage across platforms",
];

const automated = [
  "Identify new job postings globally, automatically",
  "Classify job roles with AI for relevance scoring",
  "Identify hiring companies from postings",
  "Find relevant hiring managers and decision-makers",
  "Deliver structured contact lists daily",
  "Consistent, comprehensive coverage 24/7",
];

export default function ProblemSolution() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: 32, borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg-card)", position: "relative", overflow: "hidden" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AlertTriangle size={17} style={{ color: "#F87171" }} />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#F87171", textTransform: "uppercase",
                  letterSpacing: "0.1em", marginBottom: 2 }}>The Problem</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>Manual Research is Broken</h3>
              </div>
            </div>

            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
              Recruitment firms waste hours daily manually searching for jobs across multiple platforms.
              The process is slow, inconsistent, and misses time-sensitive opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {manual.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{ display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 14px", borderRadius: 10,
                    background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)" }}
                >
                  <Clock size={12} style={{ color: "rgba(248,113,113,0.5)", flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            style={{ padding: 32, borderRadius: 20, border: "1px solid rgba(110,231,183,0.2)",
              background: "var(--bg-card)", position: "relative", overflow: "hidden",
              boxShadow: "0 0 60px rgba(110,231,183,0.04)" }}
          >
            {/* Glow */}
            <div style={{ position:"absolute", top:0, right:0, width:200, height:200, pointerEvents:"none",
              background:"radial-gradient(circle, rgba(110,231,183,0.08) 0%, transparent 70%)", filter:"blur(20px)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(110,231,183,0.1)",
                border: "1px solid rgba(110,231,183,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={17} style={{ color: "#6EE7B7" }} />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
                  letterSpacing: "0.1em", marginBottom: 2 }}>The Solution</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>Fully Automated Discovery</h3>
              </div>
            </div>

            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
              I build automated systems that monitor platforms 24/7, classify relevant jobs,
              identify decision-makers, and deliver structured lead lists daily.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {automated.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{ display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 14px", borderRadius: 10,
                    background: "rgba(110,231,183,0.04)", border: "1px solid rgba(110,231,183,0.1)" }}
                >
                  <Check size={12} style={{ color: "#6EE7B7", flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
