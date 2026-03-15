"use client";

import Stack from "@/components/engineering/Stack";
import SystemsBuilt from "@/components/engineering/SystemsBuilt";
import WhyEngineering from "@/components/engineering/WhyEngineering";
import Contact from "@/components/Contact";

export default function EngineeringPage() {
  return (
    <>
      <section className="grid-bg"
        style={{ paddingTop: 140, paddingBottom: 96, position: "relative", overflow: "hidden" }}>

        <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
          <div className="anim-fade-up delay-100">

            <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
              Engineering
            </p>

            <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 700, color: "var(--text-primary)",
              letterSpacing: "-0.045em", lineHeight: 1.06, marginBottom: 24 }}>
              Engineering Behind
              <br />
              <span className="gradient-text">My GTM Systems</span>
            </h1>

            <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "var(--text-secondary)",
              maxWidth: 500, lineHeight: 1.75, letterSpacing: "-0.01em" }}>
              Automation is powerful.{" "}
              <span style={{ color: "var(--text-primary)" }}>Custom software makes it scalable.</span>{" "}
              Most GTM operators can't code - this is the differentiator.
            </p>

          </div>
        </div>
      </section>

      <Stack />
      <SystemsBuilt />
      <WhyEngineering />
      <Contact />
    </>
  );
}
