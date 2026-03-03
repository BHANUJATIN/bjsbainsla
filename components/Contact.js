"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Calendar, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact"
      style={{ padding: "96px 0", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>

      {/* Glow */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 50% 60% at 50% 100%, rgba(96,165,250,0.05) 0%, transparent 70%)" }} />

      <div className="container-xl" style={{ position:"relative", zIndex:1 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          {/* Profile photo */}
          <div style={{ marginBottom: 20 }}>
            <Image
              src="/profile.jpeg"
              alt="Bhanu Singh"
              width={80}
              height={80}
              style={{
                borderRadius: 14,
                border: "1px solid var(--border)",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>

          <p style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            Let's Talk
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em", marginBottom: 16 }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            If you're building outbound infrastructure or need recruitment automation systems,
            let's discuss what's possible.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16, maxWidth: 520, margin: "0 auto 64px" }}>

          {/* Email */}
          <motion.a
            href="mailto:bjsbainsla@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.02, borderColor: "rgba(110,231,183,0.35)" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
              padding: 32, borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)",
              textDecoration: "none", transition: "border-color 0.3s" }}
          >
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(110,231,183,0.08)",
              border: "1px solid rgba(110,231,183,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Mail size={20} style={{ color: "#6EE7B7" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>Email Me</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>bjsbainsla@gmail.com</div>
            </div>
            <ExternalLink size={13} style={{ color: "var(--text-ghost)" }} />
          </motion.a>

          {/* Calendly */}
          <motion.a
            href="https://calendly.com/bjsbainsla"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02, borderColor: "rgba(96,165,250,0.35)" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
              padding: 32, borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)",
              textDecoration: "none", transition: "border-color 0.3s" }}
          >
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(96,165,250,0.08)",
              border: "1px solid rgba(96,165,250,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Calendar size={20} style={{ color: "#60A5FA" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>Book a Call</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>Schedule via Calendly</div>
            </div>
            <ExternalLink size={13} style={{ color: "var(--text-ghost)" }} />
          </motion.a>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: "center", paddingTop: 40, borderTop: "1px solid var(--border)" }}
        >
          <p style={{ fontSize: 12, color: "var(--text-ghost)" }}>
            © {new Date().getFullYear()} Bhanu Singh · GTM Automation Engineer
          </p>
        </motion.div>

      </div>
    </section>
  );
}
