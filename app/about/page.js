"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import Timeline from "@/components/about/Timeline";
import Contact from "@/components/Contact";

const highlights = [
  { value: "B.Tech", label: "Computer Science, IIITM Gwalior" },
  { value: "30+",    label: "Clay workflows built" },
  { value: "1.5+",   label: "Years GTM automation" },
  { value: "7+",     label: "Industries served" },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="grid-bg"
        style={{ paddingTop: 128, paddingBottom: 80, position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)" }} />

        <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
          <div className="anim-fade-up delay-100">

            {/* Page label */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <User size={18} style={{ color: "#A78BFA" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#A78BFA",
                textTransform: "uppercase", letterSpacing: "0.12em" }}>
                About
              </span>
            </div>

            {/* Two-col: text + photo */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48,
              alignItems: "flex-start" }}>

              <div style={{ maxWidth: 640 }}>
                <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 700,
                  color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
                  Bhanu Singh
                  <br />
                  <span className="gradient-text">GTM Automation Engineer</span>
                </h1>

                <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)",
                  lineHeight: 1.8, marginBottom: 16 }}>
                  I design and build automated outbound infrastructure — lead discovery pipelines, data
                  enrichment systems, and outreach workflows — across{" "}
                  <span style={{ color: "#6EE7B7" }}>recruitment</span>,{" "}
                  <span style={{ color: "#60A5FA" }}>fintech</span>,{" "}
                  <span style={{ color: "#F472B6" }}>medical</span>,{" "}
                  <span style={{ color: "#34D399" }}>non-profit</span>,{" "}
                  <span style={{ color: "#FBBF24" }}>manufacturing</span>,{" "}
                  <span style={{ color: "#A78BFA" }}>legal</span>, and{" "}
                  <span style={{ color: "#FB923C" }}>e-commerce</span> sectors.
                </p>
                <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)",
                  lineHeight: 1.8, marginBottom: 36 }}>
                  With a B.Tech in Computer Science from IIITM Gwalior and hands-on engineering depth, I
                  extend automation platforms beyond what no-code tools allow - combining custom code with
                  GTM strategy to build systems that actually scale.
                </p>

                {/* Highlight stats */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {highlights.map(h => (
                    <div key={h.label} style={{ padding: "12px 18px", borderRadius: 12,
                      border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)",
                        letterSpacing: "-0.03em", marginBottom: 2 }}>
                        {h.value}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-faint)", letterSpacing: "0.02em" }}>
                        {h.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ flexShrink: 0 }}
                className="about-photo"
              >
                <div style={{ padding: 4, borderRadius: 20, border: "1px solid var(--border)",
                  background: "var(--bg-card)" }}>
                  <Image
                    src="/profile.jpeg"
                    alt="Bhanu Singh"
                    width={160}
                    height={160}
                    style={{ borderRadius: 16, objectFit: "cover", display: "block" }}
                    priority
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <Contact />

      {/* Hide photo on very small screens */}
      <style>{`
        @media (max-width: 540px) {
          .about-photo { display: none !important; }
        }
      `}</style>
    </>
  );
}
