"use client";

import { ArrowRight } from "lucide-react";
import ProblemSolution from "@/components/recruitment/ProblemSolution";
import Pipeline from "@/components/recruitment/Pipeline";
import Benefits from "@/components/recruitment/Benefits";
import Contact from "@/components/Contact";

export default function RecruitmentPage() {
  return (
    <>
      <section className="grid-bg"
        style={{ paddingTop: 140, paddingBottom: 96, position: "relative", overflow: "hidden" }}>

        <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
          <div className="anim-fade-up delay-100" style={{ maxWidth: 680 }}>

            <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
              Recruitment Automation
            </p>

            <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 700, color: "var(--text-primary)",
              letterSpacing: "-0.045em", lineHeight: 1.06, marginBottom: 24 }}>
              Automated Job Discovery
              <br />
              <span className="gradient-text">for Recruitment Firms</span>
            </h1>

            <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "var(--text-secondary)",
              lineHeight: 1.75, marginBottom: 40, letterSpacing: "-0.01em" }}>
              Identify hiring companies before your competitors.
              Fully automated job discovery, classification, and lead delivery.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 26px", background: "#6EE7B7", color: "#0A0A0B",
                  fontWeight: 600, fontSize: 14, borderRadius: 10, textDecoration: "none",
                  letterSpacing: "-0.01em", cursor: "pointer", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Build a Job Discovery System
                <ArrowRight size={14} />
              </a>
              <a
                href="#pipeline"
                onClick={(e) => { e.preventDefault(); document.getElementById("pipeline")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 26px", border: "1px solid var(--border)", color: "var(--text-secondary)",
                  fontWeight: 500, fontSize: 14, borderRadius: 10, textDecoration: "none",
                  letterSpacing: "-0.01em", cursor: "pointer", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
              >
                See How It Works
              </a>
            </div>

          </div>
        </div>
      </section>

      <ProblemSolution />

      <div id="pipeline">
        <Pipeline />
      </div>

      <Benefits />

      {/* Final CTA */}
      <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container-xl" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 700, color: "var(--text-primary)",
            letterSpacing: "-0.045em", marginBottom: 16, lineHeight: 1.1 }}>
            Ready to stop{" "}
            <span className="gradient-text">manual job hunting?</span>
          </h2>

          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 420,
            margin: "0 auto 40px", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
            Let's build a custom job discovery pipeline that delivers qualified
            hiring companies to your desk every morning.
          </p>

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
            Build a Job Discovery System
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}
