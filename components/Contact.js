"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Calendar, ExternalLink, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact"
      style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>

      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{ marginBottom: 24 }}>
            <Image
              src="/profile.jpeg"
              alt="Bhanu Singh"
              width={72}
              height={72}
              style={{
                borderRadius: 12,
                border: "1px solid var(--border)",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>

          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.04em", marginBottom: 14 }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 400,
            margin: "0 auto", lineHeight: 1.75 }}>
            Building outbound infrastructure or need recruitment automation?
            Let's discuss what's possible.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12, maxWidth: 600, margin: "0 auto 72px" }}>

          {/* Email */}
          <motion.a
            href="mailto:bjsbainsla@gmail.com"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ borderColor: "rgba(110,231,183,0.3)" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
              padding: "32px 24px", borderRadius: 12, border: "1px solid var(--border)",
              background: "var(--bg-card)", textDecoration: "none", transition: "border-color 0.2s" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 11, background: "rgba(110,231,183,0.07)",
              border: "1px solid rgba(110,231,183,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Mail size={18} style={{ color: "#6EE7B7" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)",
                marginBottom: 5, letterSpacing: "-0.02em" }}>Email Me</div>
              <div style={{ fontSize: 12.5, color: "var(--text-secondary)",
                letterSpacing: "-0.01em" }}>bjsbainsla@gmail.com</div>
            </div>
            <ExternalLink size={12} style={{ color: "var(--text-ghost)" }} />
          </motion.a>

          {/* Calendly */}
          <motion.a
            href="https://calendly.com/bjsbainsla"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.18 }}
            whileHover={{ borderColor: "rgba(96,165,250,0.3)" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
              padding: "32px 24px", borderRadius: 12, border: "1px solid var(--border)",
              background: "var(--bg-card)", textDecoration: "none", transition: "border-color 0.2s" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 11, background: "rgba(96,165,250,0.07)",
              border: "1px solid rgba(96,165,250,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Calendar size={18} style={{ color: "#60A5FA" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)",
                marginBottom: 5, letterSpacing: "-0.02em" }}>Book a Call</div>
              <div style={{ fontSize: 12.5, color: "var(--text-secondary)",
                letterSpacing: "-0.01em" }}>Schedule via Calendly</div>
            </div>
            <ExternalLink size={12} style={{ color: "var(--text-ghost)" }} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/bhanujatin/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.26 }}
            whileHover={{ borderColor: "rgba(10,102,194,0.3)" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
              padding: "32px 24px", borderRadius: 12, border: "1px solid var(--border)",
              background: "var(--bg-card)", textDecoration: "none", transition: "border-color 0.2s" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 11, background: "rgba(10,102,194,0.07)",
              border: "1px solid rgba(10,102,194,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Linkedin size={18} style={{ color: "#0A66C2" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)",
                marginBottom: 5, letterSpacing: "-0.02em" }}>LinkedIn</div>
              <div style={{ fontSize: 12.5, color: "var(--text-secondary)",
                letterSpacing: "-0.01em" }}>linkedin.com/in/bhanujatin</div>
            </div>
            <ExternalLink size={12} style={{ color: "var(--text-ghost)" }} />
          </motion.a>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: "center", paddingTop: 40, borderTop: "1px solid var(--border)" }}
        >
          <p style={{ fontSize: 12, color: "var(--text-ghost)", letterSpacing: "-0.01em" }}>
            © {new Date().getFullYear()} Bhanu Singh · GTM Automation Engineer
          </p>
        </motion.div>

      </div>
    </section>
  );
}
