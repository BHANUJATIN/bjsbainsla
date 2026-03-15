"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.045em", marginBottom: 18, lineHeight: 1.1 }}>
            Need a scalable{" "}
            <span className="gradient-text">outbound system?</span>
          </h2>

          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 40 }}>
            I design data pipelines and GTM automations that generate qualified leads continuously
            - without manual effort.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a
              href="https://calendly.com/bjsbainsla"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", background: "#6EE7B7", color: "#0A0A0B",
                fontWeight: 600, fontSize: 14, borderRadius: 10, textDecoration: "none",
                letterSpacing: "-0.01em", transition: "opacity 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Book a Call
              <ArrowRight size={14} />
            </a>

            <a
              href="mailto:bjsbainsla@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", border: "1px solid var(--border)", color: "var(--text-secondary)",
                fontWeight: 500, fontSize: 14, borderRadius: 10, textDecoration: "none",
                letterSpacing: "-0.01em", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
            >
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
