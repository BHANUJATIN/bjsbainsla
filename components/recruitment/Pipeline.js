"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Cpu, Building2, UserSearch, Send } from "lucide-react";

const stages = [
  {
    id: "sources", icon: Globe, accent: "#60A5FA",
    title: "Job Sources", subtitle: "Discovery",
    items: ["LinkedIn", "Indeed", "Xing", "Career Pages"],
    desc: "Monitor all major job boards and company career pages 24/7",
  },
  {
    id: "classify", icon: Cpu, accent: "#6EE7B7",
    title: "AI Classification", subtitle: "Filtering",
    items: ["Role Type", "Seniority", "Relevance", "Industry"],
    desc: "AI filters and classifies job type, seniority, and relevance",
  },
  {
    id: "company", icon: Building2, accent: "#60A5FA",
    title: "Company ID", subtitle: "Extraction",
    items: ["Company Name", "Size", "Industry", "Tech Stack"],
    desc: "Extract and enrich hiring company data automatically",
  },
  {
    id: "decision", icon: UserSearch, accent: "#6EE7B7",
    title: "Decision Maker", subtitle: "Discovery",
    items: ["Recruiters", "HR Leads", "Founders", "Hiring Mgrs"],
    desc: "Identify the right person to contact at each company",
  },
  {
    id: "delivery", icon: Send, accent: "#60A5FA",
    title: "Lead Delivery", subtitle: "Output",
    items: ["Daily List", "CRM Sync", "Email Export", "Sheet"],
    desc: "Deliver structured, ready-to-use lead lists every morning",
  },
];

export default function Pipeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const [active, setActive] = useState(null);

  return (
    <section ref={ref} style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>

      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 80% 40% at 50% 50%, rgba(96,165,250,0.04) 0%, transparent 70%)" }} />

      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#60A5FA", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            System Architecture
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em", marginBottom: 12 }}>
            Automated Job Discovery Pipeline
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto" }}>
            From raw job postings to ready-to-contact leads - fully automated.
          </p>
        </motion.div>

        <div style={{ position: "relative" }}>

          {/* Animated connector line */}
          <div style={{ position: "relative", marginBottom: 32 }}>
            <div style={{ position: "absolute", top: 24, left: "5%", right: "5%",
              height: 1, background: "var(--border)", zIndex: 0 }} />
            <motion.div
              style={{ position: "absolute", top: 24, left: "5%", height: 1, zIndex: 1,
                background: "linear-gradient(90deg, #60A5FA, #6EE7B7, #60A5FA)" }}
              initial={{ width: 0 }}
              animate={inView ? { width: "90%" } : { width: 0 }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          <div style={{ display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16, position: "relative", zIndex: 2 }}>
            {stages.map((s, i) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
                  onHoverStart={() => setActive(s.id)}
                  onHoverEnd={() => setActive(null)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center",
                    cursor: "default", position: "relative" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    style={{ width: 48, height: 48, borderRadius: 16, display: "flex",
                      alignItems: "center", justifyContent: "center", marginBottom: 16,
                      background: isActive ? `${s.accent}20` : "var(--bg-card)",
                      border: `1px solid ${isActive ? s.accent : "var(--border)"}`,
                      boxShadow: isActive ? `0 0 20px ${s.accent}30` : "none",
                      transition: "all 0.3s", zIndex: 1, position: "relative" }}
                  >
                    <Icon size={18} style={{ color: s.accent }} />
                    {isActive && (
                      <motion.div
                        style={{ position:"absolute", inset:0, borderRadius:16, border:`1px solid ${s.accent}` }}
                        animate={{ scale:[1,1.5], opacity:[0.6,0] }}
                        transition={{ duration:0.9, repeat:Infinity }}
                      />
                    )}
                  </motion.div>

                  <div style={{ textAlign: "center", marginBottom: 12 }}>
                    <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase",
                      letterSpacing: "0.1em", color: isActive ? s.accent : "var(--text-secondary)",
                      marginBottom: 4, transition: "color 0.2s" }}>
                      {s.subtitle}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>
                      {s.title}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 5, width: "100%" }}>
                    {s.items.map(item => (
                      <div key={item}
                        style={{ fontSize: 11, textAlign: "center", padding: "5px 8px", borderRadius: 7,
                          border: `1px solid ${isActive ? `${s.accent}25` : "var(--border)"}`,
                          background: "var(--bg-card)", color: "var(--text-secondary)", transition: "border-color 0.2s" }}>
                        {item}
                      </div>
                    ))}
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ marginTop: 12, padding: "8px 12px", borderRadius: 10,
                        border: "1px solid var(--border)", background: "var(--bg-card-hover)",
                        fontSize: 12, color: "var(--text-secondary)", textAlign: "center", lineHeight: 1.5 }}
                    >
                      {s.desc}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
