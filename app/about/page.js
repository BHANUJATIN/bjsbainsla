"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      {/* Hero */}
      <section
        className="grid-bg"
        style={{ paddingTop: 140, paddingBottom: 96, position: "relative", overflow: "hidden" }}
      >
        <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
          <div className="anim-fade-up delay-100">

            <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
              About
            </p>

            {/* Two-col: text + photo */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 56,
              alignItems: "flex-start" }}>

              <div style={{ maxWidth: 620 }}>
                <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 700,
                  color: "var(--text-primary)", letterSpacing: "-0.045em", lineHeight: 1.06, marginBottom: 24 }}>
                  Bhanu Singh
                  <br />
                  <span className="gradient-text">GTM Automation Engineer</span>
                </h1>

                <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "var(--text-secondary)",
                  lineHeight: 1.8, marginBottom: 16 }}>
                  I design and build automated outbound infrastructure - lead discovery pipelines, data
                  enrichment systems, and outreach workflows - across{" "}
                  <span style={{ color: "#6EE7B7" }}>recruitment</span>,{" "}
                  <span style={{ color: "#60A5FA" }}>fintech</span>,{" "}
                  <span style={{ color: "#F472B6" }}>medical</span>,{" "}
                  <span style={{ color: "#34D399" }}>non-profit</span>,{" "}
                  <span style={{ color: "#FBBF24" }}>manufacturing</span>,{" "}
                  <span style={{ color: "#A78BFA" }}>legal</span>, and{" "}
                  <span style={{ color: "#FB923C" }}>e-commerce</span> sectors.
                </p>
                <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "var(--text-secondary)",
                  lineHeight: 1.8, marginBottom: 48 }}>
                  With a B.Tech in Computer Science from IIITM Gwalior and hands-on engineering depth, I
                  extend automation platforms beyond what no-code tools allow - combining custom code with
                  GTM strategy to build systems that actually scale.
                </p>

                {/* Highlight stats */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {highlights.map(h => (
                    <div key={h.label} style={{ padding: "14px 20px", borderRadius: 10,
                      border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)",
                        letterSpacing: "-0.04em", marginBottom: 3 }}>
                        {h.value}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.01em" }}>
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
                <div style={{ padding: 4, borderRadius: 18, border: "1px solid var(--border)",
                  background: "var(--bg-card)" }}>
                  <Image
                    src="/profile.jpeg"
                    alt="Bhanu Singh"
                    width={160}
                    height={160}
                    style={{ borderRadius: 14, objectFit: "cover", display: "block" }}
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

      <style>{`
        @media (max-width: 540px) {
          .about-photo { display: none !important; }
        }
      `}</style>
    </>
  );
}
