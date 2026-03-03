"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 60% 50% at 50% 50%, rgba(110,231,183,0.06) 0%, transparent 70%)" }} />

      <div className="container-xl" style={{ position:"relative", zIndex:1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
        >
          {/* Decorative line */}
          <div style={{ width: 48, height: 1, margin: "0 auto 32px",
            background: "linear-gradient(90deg, transparent, #6EE7B7, transparent)" }} />

          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700,
            color: "#F5F5F7", letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}>
            Need a scalable{" "}
            <span className="gradient-text">outbound system?</span>
          </h2>

          <p style={{ fontSize: 17, color: "#A1A1AA", lineHeight: 1.7, marginBottom: 40 }}>
            I design data pipelines and GTM automations that generate qualified leads continuously
            — without manual effort.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <motion.a
              href="https://calendly.com/bjsbainsla"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(110,231,183,0.3)" }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8,
                padding: "15px 32px", background: "#6EE7B7", color: "#0E0E10",
                fontWeight: 600, fontSize: 15, borderRadius: 12, textDecoration: "none" }}
            >
              Book a Call
              <ArrowRight size={15} />
            </motion.a>

            <motion.a
              href="mailto:bjsbainsla@gmail.com"
              whileHover={{ y: -4, borderColor: "rgba(110,231,183,0.4)" }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8,
                padding: "15px 32px", border: "1px solid #2A2A2E", color: "#A1A1AA",
                fontWeight: 500, fontSize: 15, borderRadius: 12, textDecoration: "none" }}
            >
              Send an Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
