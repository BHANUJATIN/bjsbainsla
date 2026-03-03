"use client";

import { Code2 } from "lucide-react";
import Stack from "@/components/engineering/Stack";
import SystemsBuilt from "@/components/engineering/SystemsBuilt";
import WhyEngineering from "@/components/engineering/WhyEngineering";
import Contact from "@/components/Contact";

export default function EngineeringPage() {
  return (
    <>
      {/* Hero — CSS animations so it's always visible */}
      <section className="grid-bg"
        style={{ paddingTop: 128, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none",
          background:"radial-gradient(ellipse 60% 50% at 50% 0%, rgba(96,165,250,0.08) 0%, transparent 70%)" }} />

        <div className="container-xl" style={{ position:"relative", zIndex:1 }}>
          <div className="anim-fade-up delay-100">

            <div style={{ display:"inline-flex", alignItems:"center", gap:12, marginBottom:24 }}>
              <div style={{ width:40, height:40, borderRadius:12, background:"rgba(96,165,250,0.1)",
                border:"1px solid rgba(96,165,250,0.2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Code2 size={18} style={{ color:"#60A5FA" }} />
              </div>
              <span style={{ fontSize:11, fontWeight:600, color:"#60A5FA", textTransform:"uppercase", letterSpacing:"0.12em" }}>
                Engineering
              </span>
            </div>

            <h1 style={{ fontSize:"clamp(2.2rem, 6vw, 4rem)", fontWeight:700, color:"#F5F5F7",
              letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:20 }}>
              Engineering Behind
              <br />
              <span className="gradient-text">My GTM Systems</span>
            </h1>

            <p style={{ fontSize:"clamp(1rem, 2vw, 1.15rem)", color:"#A1A1AA", maxWidth:520, lineHeight:1.75 }}>
              Automation is powerful.{" "}
              <span style={{ color:"#F5F5F7" }}>Custom software makes it scalable.</span>{" "}
              Most GTM operators can't code — this is the differentiator.
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
